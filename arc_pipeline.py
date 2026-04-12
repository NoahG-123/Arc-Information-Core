#!/usr/bin/env python3
"""
ARC Intelligence Pipeline v2
─────────────────────────────────────────────────────────────
Tier 1  Gemini 2.5 Flash   search & retrieve      free
Tier 2  Gemma 4 27B dense  format + write file    free
Tier 3  Claude Code        synthesis + email      Pro plan

Gemma 4 writes directly to tracker.jsx.
A validation gate checks the file before any commit.
If validation fails, pipeline aborts and flags for Claude fallback.
Gmail notifications sent via Claude Code Gmail connector.
No external dependencies — stdlib only.

Modes:
  --mode search   : run Tier 1 only, print raw results
  --mode format   : run Tier 1+2, Gemma writes to tracker.jsx
  --mode validate : validate tracker.jsx only, exit 0=ok 1=fail
  --mode full     : run all tiers (default)
"""

import json, os, re, sys, shutil, argparse
import urllib.request, urllib.error
from datetime import date, timedelta
from pathlib import Path

# ── Config ────────────────────────────────────────────────────
KEY       = os.environ.get("GEMINI_API_KEY") or os.environ.get("GOOGLE_AI_KEY")
TRACKER   = Path("tracker.jsx")
BACKUP    = Path("tracker.jsx.bak")
ABORT_F   = Path("arc-abort.md")
LOG_F     = Path("arc-update-log.md")
CHANGES_F = Path("arc-run-changes.json")   # written by pipeline, read by Claude for email
TODAY     = date.today().isoformat()
TODAY_STR = date.today().strftime("%b %-d %Y")
ARC_EMAIL = "arc.informationcore@gmail.com"

FLASH_URL = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key={KEY}"
GEMMA_URL = f"https://generativelanguage.googleapis.com/v1beta/models/gemma-4-27b-it:generateContent?key={KEY}"

# Required markers that must survive every edit
REQUIRED_MARKERS = [
    "export default function ARC",
    "const STORIES =",
    "const AI_STORIES =",
    "const WAR_STORIES =",
    "const CANADA_STORIES =",
    "const POWER_STORIES =",
    "const CLIMATE_STORIES =",
    "const EVENTS =",
]

# ── Run state — accumulated during the run, written to JSON for Claude ────
RUN_STATE = {
    "date": TODAY,
    "written": [],       # list of {code, fields_changed, heat_before, heat_after, summary_before, summary_after}
    "unchanged": [],     # list of codes
    "fallbacks": [],     # list of {code, reason}
    "alerts": [],        # list of {codes, title, alert, severity} — critical ones trigger immediate email
    "proposals": [],     # list of {code, title, criteria, draft} — new story proposals
    "retirements": [],   # list of {code, title, reason, closing_summary}
    "aborted": False,
    "abort_reason": "",
}

def save_run_state():
    CHANGES_F.write_text(json.dumps(RUN_STATE, indent=2))

def record_written(code, fields_changed, heat_before, heat_after, summary_before, summary_after):
    RUN_STATE["written"].append({
        "code": code,
        "fields_changed": fields_changed,
        "heat_before": heat_before,
        "heat_after": heat_after,
        "summary_before": summary_before,
        "summary_after": summary_after,
    })
    # Check for immediate alert trigger — heat jumped to 5
    if heat_after == 5 and heat_before < 5:
        RUN_STATE["alerts"].append({
            "codes": [code],
            "title": f"{code} escalated to HEAT 5",
            "alert": f"{code} jumped from heat {heat_before} to heat 5 in this run. Immediate attention may be required.",
            "severity": "critical"
        })
    save_run_state()

def record_unchanged(code):
    RUN_STATE["unchanged"].append(code)
    save_run_state()

def record_fallback(code, reason):
    RUN_STATE["fallbacks"].append({"code": code, "reason": reason})
    save_run_state()

def record_alert(codes, title, alert, severity):
    RUN_STATE["alerts"].append({"codes": codes, "title": title, "alert": alert, "severity": severity})
    save_run_state()

def record_proposal(code, title, criteria, draft):
    RUN_STATE["proposals"].append({"code": code, "title": title, "criteria": criteria, "draft": draft})
    save_run_state()

def record_retirement(code, title, reason, closing_summary):
    RUN_STATE["retirements"].append({"code": code, "title": title, "reason": reason, "closing_summary": closing_summary})
    save_run_state()

# ── Utilities ─────────────────────────────────────────────────
def post(url, payload, label):
    if not KEY:
        abort("GEMINI_API_KEY not set in environment")
    data = json.dumps(payload).encode()
    req  = urllib.request.Request(
        url, data=data,
        headers={"Content-Type": "application/json"},
        method="POST"
    )
    try:
        with urllib.request.urlopen(req, timeout=60) as r:
            res   = json.loads(r.read().decode())
            parts = res.get("candidates", [{}])[0].get("content", {}).get("parts", [])
            text  = "".join(p.get("text", "") for p in parts).strip()
            if not text:
                abort(f"{label} returned empty response. Full response: {str(res)[:300]}")
            return text
    except urllib.error.HTTPError as e:
        body = e.read().decode()[:400]
        abort(f"{label} HTTP {e.code}: {body}")
    except urllib.error.URLError as e:
        abort(f"{label} network error: {e.reason}")
    except Exception as e:
        abort(f"{label} unexpected error: {e}")

def abort(reason):
    """Write abort file, log, restore backup if exists, exit 1."""
    msg = f"# ARC PIPELINE ABORT\n**Date:** {TODAY}\n**Reason:** {reason}\n\nAction required: check pipeline and re-run manually.\n"
    ABORT_F.write_text(msg)
    with open(LOG_F, "a") as f:
        f.write(f"\n## {TODAY} ABORT\nReason: {reason}\n")
    RUN_STATE["aborted"] = True
    RUN_STATE["abort_reason"] = reason
    save_run_state()
    # Restore backup if a write was in progress
    if BACKUP.exists():
        shutil.copy(BACKUP, TRACKER)
        print("  Backup restored.", file=sys.stderr)
    print(f"ABORT: {reason}", file=sys.stderr)
    sys.exit(1)

def log(msg):
    with open(LOG_F, "a") as f:
        f.write(msg)

# ── Validation gate ───────────────────────────────────────────
def validate(content=None):
    """
    Returns (True, "OK") or (False, reason).
    Checks: required markers present, bracket balance roughly intact.
    """
    if content is None:
        if not TRACKER.exists():
            return False, "tracker.jsx not found"
        content = TRACKER.read_text(encoding="utf-8")

    # Check all required markers
    for marker in REQUIRED_MARKERS:
        if marker not in content:
            return False, f"Required marker missing: {marker}"

    # Check bracket balance — allow tolerance of ±20 for template literals
    opens  = content.count("{")
    closes = content.count("}")
    if abs(opens - closes) > 20:
        return False, f"Bracket imbalance: open={opens} close={closes} diff={abs(opens-closes)}"

    # Check no double-quote inside confirmed/developing/insights arrays
    # Simple heuristic: no line should have :"... with an unescaped " inside a JSX string
    bad_lines = []
    for i, line in enumerate(content.split("\n"), 1):
        # Look for patterns like "some "quoted" text" inside array strings
        if re.search(r':\s*"[^"]*"[^"]*"', line) and ("confirmed" in line or "insights" in line):
            bad_lines.append(i)
    if bad_lines:
        return False, f"Possible unescaped double quotes at lines: {bad_lines[:5]}"

    return True, "OK"

# ── Tier 1: Gemini 2.5 Flash — search ─────────────────────────
def tier1_search(code, title, days, is_war):
    today = date.today()
    since = today - timedelta(days=days)
    war   = (
        "\nTOLL: (new confirmed dead/wounded/displaced figures with source+date, or NONE)"
        "\nFRONT: (territorial changes, military movements, or NONE)"
    ) if is_war else ""

    prompt = (
        f"Intelligence tracker research. Today: {today}. "
        f"Search news about '{code} — {title}' published {since} to {today}. "
        f"Be concise and factual. Return ONLY these sections:\n\n"
        f"FACTS: (verified facts, source+date each, bullet list, or NONE)\n"
        f"THREADS: (active uncertain developments, or NONE)\n"
        f"RESOLVED: (previously uncertain things now answered, or NONE)\n"
        f"PEOPLE: (new significant players, name+role+why, or NONE)"
        f"{war}"
    )
    return post(FLASH_URL, {
        "contents": [{"parts": [{"text": prompt}]}],
        "tools":    [{"google_search": {}}],
        "generationConfig": {"temperature": 0.0, "maxOutputTokens": 700}
    }, "Gemini 2.5 Flash")

# ── Tier 2: Gemma 4 26B — format AND write to tracker.jsx ─────
def tier2_write(code, search_result, current_summary, current_tail, is_war):
    """
    Gemma 4 receives search results + current story state.
    It returns the COMPLETE updated story block as valid JSX.
    We find the story by code and replace its block.
    """
    tracker_content = TRACKER.read_text(encoding="utf-8")

    # Extract current story block
    story_pattern = rf'(\{{[^{{]*?code:"{code}".*?\}}(?:,|\s*\]))'
    match = re.search(story_pattern, tracker_content, re.DOTALL)
    if not match:
        # Try simpler extraction — find between id: and next story
        start = tracker_content.find(f'code:"{code}"')
        if start == -1:
            abort(f"Cannot find story {code} in tracker.jsx")

    # Pass current block to Gemma for in-place update
    # Extract just the fields Gemma needs to update, not the whole block
    prompt = (
        f"You are updating a JavaScript/JSX intelligence tracker file.\n"
        f"Story code: {code}\n"
        f"Today: {TODAY} (use '{TODAY_STR}' for the updated field)\n\n"
        f"CURRENT SUMMARY:\n{current_summary}\n\n"
        f"LAST 3 CONFIRMED FACTS (do not duplicate these):\n{current_tail}\n\n"
        f"NEW SEARCH RESULTS:\n{search_result}\n\n"
        f"INSTRUCTIONS:\n"
        f"1. If nothing is new compared to current summary and confirmed facts, output exactly: UNCHANGED\n"
        f"2. If there are updates, output a JSON object with ONLY the changed fields:\n"
        f"   - new_confirmed: array of new string facts to append (empty array if none)\n"
        f"   - new_developing: array of new developing strings to append (empty array if none)\n"
        f"   - remove_developing: array of exact developing strings to remove (empty array if none)\n"
        f"   - new_questions: array of new question strings (empty array if none)\n"
        f"   - remove_questions: array of exact question strings to remove (empty array if none)\n"
        f"   - summary: new summary string if changed, null if unchanged\n"
        f"   - heat: integer 1-5 if changed, null if unchanged\n"
        f"   - status: status string if changed, null if unchanged\n"
        f"   - card: new one-sentence card if changed, null if unchanged\n"
        f"{'   - toll: object with changed toll key-value pairs, null if unchanged' + chr(10) if is_war else ''}"
        f"{'   - front_summary: new front summary string, null if unchanged' + chr(10) if is_war else ''}"
        f"CRITICAL RULES:\n"
        f"- Use ONLY single quotes inside all string values, never double quotes\n"
        f"- Output ONLY the JSON object or the word UNCHANGED, nothing else\n"
        f"- Do not include fields that have not changed\n"
        f"- Keep all strings concise and factual\n"
    )

    result = post(GEMMA_URL, {
        "contents": [{"parts": [{"text": prompt}]}],
        "generationConfig": {"temperature": 0.0, "maxOutputTokens": 1000}
    }, "Gemma 4 26B")

    if result.strip() == "UNCHANGED":
        return "UNCHANGED"

    # Parse Gemma's JSON output
    try:
        # Strip any markdown code fences Gemma might add
        clean = re.sub(r"```(?:json)?|```", "", result).strip()
        updates = json.loads(clean)
    except json.JSONDecodeError as e:
        abort(f"Gemma 4 returned invalid JSON for {code}: {e}\nOutput: {result[:300]}")

    # Back up tracker before writing
    shutil.copy(TRACKER, BACKUP)

    # Apply updates to tracker content
    new_content = apply_updates(tracker_content, code, updates, is_war)

    # Validate before writing
    ok, reason = validate(new_content)
    if not ok:
        # Restore backup, abort — Claude will handle this story
        shutil.copy(BACKUP, TRACKER)
        return f"VALIDATION_FAILED: {reason}"

    # Write
    TRACKER.write_text(new_content, encoding="utf-8")
    BACKUP.unlink(missing_ok=True)

    # Record what changed for email digest
    fields_changed = [k for k, v in updates.items() if v and v not in ([], None, "null")]
    heat_after  = updates.get("heat") or _extract_heat(tracker_content, code)
    heat_before = _extract_heat(tracker_content, code)
    summ_before = current_summary
    summ_after  = updates.get("summary") or current_summary
    record_written(code, fields_changed, heat_before, heat_after, summ_before, summ_after)

    return "WRITTEN"


def _extract_heat(content, code):
    m = re.search(rf'code:"{code}"[^,]*?,\s*heat:(\d+)', content, re.DOTALL)
    return int(m.group(1)) if m else 0

# ── Apply parsed updates to tracker content ───────────────────
def apply_updates(content, code, updates, is_war):
    """Apply Gemma's parsed JSON updates to the tracker string."""

    # Always update the `updated` field
    content = re.sub(
        rf'(code:"{code}"[^}}]*?updated:)"[^"]*"',
        rf'\1"{TODAY_STR}"',
        content, count=1, flags=re.DOTALL
    )

    # Scalar fields
    for field in ("summary", "card", "status"):
        val = updates.get(field)
        if val:
            safe = str(val).replace('"', "'")
            content = re.sub(
                rf'(code:"{code}"[^}}]*?{field}:)"[^"]*"',
                rf'\1"{safe}"',
                content, count=1, flags=re.DOTALL
            )

    if updates.get("heat"):
        content = re.sub(
            rf'(code:"{code}"[^,]*?,\s*)heat:\d+',
            rf'\g<1>heat:{int(updates["heat"])}',
            content, count=1, flags=re.DOTALL
        )

    # Array appends
    for add_key, field in [("new_confirmed","confirmed"),
                            ("new_developing","developing"),
                            ("new_questions","questions")]:
        items = updates.get(add_key, [])
        if not items:
            continue
        # Find the closing ] of this field within this story
        pattern = rf'(code:"{code}".*?{field}:\[)(.*?)(\])'
        m = re.search(pattern, content, re.DOTALL)
        if m:
            additions = "".join(f'"{str(i).replace(chr(34), chr(39))}",' for i in items)
            insert_pos = m.start(3)
            content = content[:insert_pos] + additions + content[insert_pos:]

    # Array removals
    for rem_key, field in [("remove_developing","developing"),
                            ("remove_questions","questions")]:
        items = updates.get(rem_key, [])
        for item in items:
            escaped = re.escape(str(item))
            content = re.sub(rf'"{escaped}",?\s*', "", content)

    # War fields
    if is_war and updates.get("toll"):
        for k, v in updates["toll"].items():
            safe_v = str(v).replace('"', "'")
            content = re.sub(
                rf'(code:"{code}"[^}}]*?{k}:)"[^"]*"',
                rf'\1"{safe_v}"',
                content, count=1, flags=re.DOTALL
            )
    if is_war and updates.get("front_summary"):
        safe = updates["front_summary"].replace('"', "'")
        content = re.sub(
            rf'(code:"{code}"[^}}]*?front:.*?summary:)"[^"]*"',
            rf'\1"{safe}"',
            content, count=1, flags=re.DOTALL
        )

    return content

# ── CLI ───────────────────────────────────────────────────────
def main():
    p = argparse.ArgumentParser(description="ARC Intelligence Pipeline v2")
    p.add_argument("--code",    required=True,  help="Story code e.g. IRAN-01")
    p.add_argument("--title",   required=True,  help="Search topic")
    p.add_argument("--days",    type=int, default=1)
    p.add_argument("--war",     action="store_true")
    p.add_argument("--summary", default="",     help="Current story summary")
    p.add_argument("--tail",    default="",     help="Last 3 confirmed facts")
    p.add_argument("--mode",    default="full",
                   choices=["search","format","validate","full"],
                   help="Pipeline mode")
    args = p.parse_args()

    if args.mode == "validate":
        ok, reason = validate()
        if ok:
            print("VALID")
            sys.exit(0)
        else:
            print(f"INVALID: {reason}")
            sys.exit(1)

    # Tier 1 — always runs
    print(f"  [{args.code}] Searching...", file=sys.stderr)
    search_result = tier1_search(args.code, args.title, args.days, args.war)

    if args.mode == "search":
        print(search_result)
        return

    # Tier 2 — format and write
    print(f"  [{args.code}] Formatting and writing...", file=sys.stderr)
    result = tier2_write(args.code, search_result, args.summary, args.tail, args.war)
    print(result)   # Claude reads this: UNCHANGED / WRITTEN / VALIDATION_FAILED: reason

if __name__ == "__main__":
    main()
