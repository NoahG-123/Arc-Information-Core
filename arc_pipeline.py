#!/usr/bin/env python3
"""
ARC Pipeline 3.0
─────────────────────────────────────────────────────
Tier 1: Gemini 2.5 Flash + Google Search  (free)
Tier 2: Llama 3.3 70B via OpenRouter      (free)
Tier 3: DeepSeek V3 via OpenRouter        (paid, synthesis only)
─────────────────────────────────────────────────────
Per-story failures are skipped, not aborted.
Push happens once at the end (handled by CI or run_pipeline.sh).
"""

import json, os, re, sys, argparse, time, urllib.request, urllib.error
from datetime import date
from pathlib import Path

WAR_CODES = {"IRAN-W01", "PAL-01", "UKR-01", "SDN-01", "LBN-01", "MMR-01", "SAH-01", "PAK-01"}

# ── Config ────────────────────────────────────────────────────
GEMINI_KEY     = os.environ.get("GEMINI_API_KEY")
OPENROUTER_KEY = os.environ.get("OPENROUTER_KEY")

TRACKER   = Path("tracker.js")
CONTEXT_F = Path("arc-update-context.md")
CHANGES_F = Path("arc-run-changes.json")

GEMINI_BASE  = "https://generativelanguage.googleapis.com/v1beta/models"
SEARCH_MODEL = "gemini-2.5-flash"
FORMAT_MODEL = "meta-llama/llama-3.3-70b-instruct:free"
SYNTH_MODEL  = "deepseek/deepseek-chat"

# ── Utilities ─────────────────────────────────────────────────
def log(msg):
    print(msg, file=sys.stderr)

def abort(msg):
    """Hard abort — only for unrecoverable errors (missing API keys, corrupt tracker)."""
    log(f"\n[ABORT] {msg}")
    Path("arc-abort.md").write_text(f"Aborted: {msg}\n")
    sys.exit(1)

def today_str():
    t = date.today()
    return f"{t.strftime('%b')} {t.day} {t.year}"

def js_safe(s):
    """Make a string safe to embed inside a JS double-quoted string."""
    return s.replace('\\', '').replace('"', "'").strip()

def load_changes():
    if CHANGES_F.exists():
        try:
            return json.loads(CHANGES_F.read_text())
        except Exception:
            pass
    return {"written": [], "skipped": []}

def save_changes(changes):
    CHANGES_F.write_text(json.dumps(changes))

# ── API calls with retry ───────────────────────────────────────
def call_google_ai(model, payload, retries=3):
    if not GEMINI_KEY:
        abort("GEMINI_API_KEY is not set.")
    url = f"{GEMINI_BASE}/{model}:generateContent?key={GEMINI_KEY}"
    last_err = None
    for attempt in range(retries):
        try:
            req = urllib.request.Request(
                url, data=json.dumps(payload).encode(),
                headers={"Content-Type": "application/json"}, method="POST"
            )
            with urllib.request.urlopen(req, timeout=180) as r:
                res = json.loads(r.read().decode())
            if "error" in res:
                raise Exception(str(res["error"]))
            parts = res["candidates"][0]["content"]["parts"]
            return next((p["text"] for p in parts if not p.get("thought")), parts[-1]["text"])
        except Exception as e:
            last_err = e
            if attempt < retries - 1:
                wait = 15 * (attempt + 1)
                log(f"    [Gemini] attempt {attempt+1} failed ({e}) — retrying in {wait}s")
                time.sleep(wait)
    raise Exception(f"Gemini failed after {retries} attempts: {last_err}")

def call_openrouter(model, messages, temp=0.0, retries=3):
    if not OPENROUTER_KEY:
        abort("OPENROUTER_KEY is not set.")
    url = "https://openrouter.ai/api/v1/chat/completions"
    headers = {
        "Authorization": f"Bearer {OPENROUTER_KEY}",
        "Content-Type": "application/json",
        "HTTP-Referer": "https://github.com/arc-pipeline",
        "X-Title": "ARC Pipeline"
    }
    payload = {"model": model, "messages": messages, "temperature": temp}
    last_err = None
    for attempt in range(retries):
        try:
            req = urllib.request.Request(
                url, data=json.dumps(payload).encode(), headers=headers, method="POST"
            )
            with urllib.request.urlopen(req, timeout=180) as r:
                res = json.loads(r.read().decode())
            if "error" in res:
                raise Exception(str(res["error"]))
            return res["choices"][0]["message"]["content"].strip()
        except Exception as e:
            last_err = e
            if attempt < retries - 1:
                wait = 15 * (attempt + 1)
                log(f"    [OpenRouter/{model}] attempt {attempt+1} failed ({e}) — retrying in {wait}s")
                time.sleep(wait)
    raise Exception(f"OpenRouter failed after {retries} attempts: {last_err}")

# ── Story bounds ───────────────────────────────────────────────
def find_story_bounds(text, code):
    """Return (start, end) indices of the story object with the given code."""
    idx = -1
    for fmt in (f'code: "{code}"', f'code:"{code}"', f"code: '{code}'", f"code:'{code}'"):
        idx = text.find(fmt)
        if idx != -1:
            break
    if idx == -1:
        return None, None
    start = text.rfind('{', 0, idx)
    if start == -1:
        return None, None
    depth = 0
    for i in range(start, len(text)):
        if text[i] == '{':
            depth += 1
        elif text[i] == '}':
            depth -= 1
            if depth == 0:
                return start, i
    return None, None

# ── Tier 1: Search ────────────────────────────────────────────
def tier1_search(code, title, days, war):
    war_note = " Include verified casualty figures, territorial changes, and weapon system details." if war else ""
    prompt = (
        f"Search Google News for '{title}' (ARC story code: {code}) over the last {days} day(s). "
        "Prioritize local and foreign-language sources — translate to English. "
        "Extract: concrete facts, verified figures, policy shifts, named individuals, exact quotes with attribution. "
        f"Output bullet points only. No narrative, no speculation.{war_note}"
    )
    payload = {
        "contents": [{"parts": [{"text": prompt}]}],
        "tools": [{"googleSearch": {}}]
    }
    try:
        return call_google_ai(SEARCH_MODEL, payload)
    except Exception as e:
        log(f"  [{code}] SKIP — search failed: {e}")
        return None

# ── Tier 2: Format & Write ────────────────────────────────────
def tier2_write(code, search_results):
    tracker_text = TRACKER.read_text(encoding="utf-8")
    context_text = CONTEXT_F.read_text(encoding="utf-8") if CONTEXT_F.exists() else ""

    start, end = find_story_bounds(tracker_text, code)
    if start is None:
        log(f"  [{code}] SKIP — story not found in tracker.")
        return False

    existing_object = tracker_text[start:end + 1]
    date_str = today_str()

    messages = [
        {
            "role": "system",
            "content": (
                "You are the ARC Formatter. Your output is injected directly into a JavaScript file.\n\n"
                "RULES (from arc-update-context.md):\n"
                + context_text[:2000] + "\n\n"
                "OUTPUT FORMAT:\n"
                "- Output ONLY the raw JS object — same unquoted-key format as the input\n"
                "- No markdown code fences, no explanation, no extra text before or after\n"
                "- Use single quotes inside all string values (never double quotes inside a double-quoted string)\n"
                "- Never invent facts. Never adjust heat more than 1 point.\n"
                "- Preserve ALL existing fields. Update content only where search results justify it."
            )
        },
        {
            "role": "user",
            "content": (
                f"Update the story object for {code}.\n\n"
                f"NEW SEARCH RESULTS:\n{search_results}\n\n"
                f"EXISTING OBJECT (preserve structure and all fields — update content only):\n{existing_object}\n\n"
                f"Set the `updated` field to \"{date_str}\"."
            )
        }
    ]

    try:
        new_object = call_openrouter(FORMAT_MODEL, messages, temp=0.0)
    except Exception as e:
        log(f"  [{code}] SKIP — format failed: {e}")
        return False

    # Strip any markdown fences the model added
    new_object = re.sub(r'^```\w*\n?|\n?```$', '', new_object.strip(), flags=re.MULTILINE).strip()

    # Belt-and-suspenders: stamp the date even if the model forgot
    new_object = re.sub(
        r'(updated:\s*["\'])[^"\']*(["\'])',
        rf'\g<1>{date_str}\g<2>',
        new_object, count=1
    )

    updated_tracker = tracker_text[:start] + new_object + tracker_text[end + 1:]
    TRACKER.write_text(updated_tracker, encoding="utf-8")

    changes = load_changes()
    if code not in changes["written"]:
        changes["written"].append(code)
    save_changes(changes)

    log(f"  [{code}] Written ({date_str})")
    return True

# ── Story map (from STORIES array) ────────────────────────────
def _extract_story_map(tracker_text):
    m = re.search(r'const STORIES\s*=\s*\[', tracker_text)
    if not m:
        return {}
    stories_text = tracker_text[m.end():]
    story_map = {}
    depth, start = 0, None
    for i, ch in enumerate(stories_text):
        if ch == '{':
            if depth == 0:
                start = i
            depth += 1
        elif ch == '}':
            depth -= 1
            if depth == 0 and start is not None:
                snippet = stories_text[start:i + 1]
                code_m   = re.search(r'code:\s*["\']([^"\']+)["\']', snippet)
                heat_m   = re.search(r'\bheat:\s*(\d)', snippet)
                status_m = re.search(r'status:\s*["\']([^"\']+)["\']', snippet)
                title_m  = re.search(r'title:\s*["\']([^"\']+)["\']', snippet)
                if code_m and heat_m and status_m:
                    story_map[code_m.group(1)] = {
                        'heat':   heat_m.group(1),
                        'status': status_m.group(1),
                        'title':  title_m.group(1) if title_m else ''
                    }
                start = None
    return story_map

# ── Leaderboard sync ──────────────────────────────────────────
def sync_leaderboard(tracker_text, new_change_texts=None):
    """Rebuild leaderboard entries. Pulls heat/status from STORIES. Applies new change texts if provided."""
    story_map = _extract_story_map(tracker_text)
    if not story_map:
        return tracker_text

    overview_m = re.search(r'const OVERVIEW\s*=\s*\{', tracker_text)
    if not overview_m:
        return tracker_text
    lb_m = re.search(r'leaderboard:\s*\[', tracker_text[overview_m.start():])
    if not lb_m:
        return tracker_text
    lb_start = overview_m.start() + lb_m.end()

    depth, lb_end = 1, lb_start
    for i in range(lb_start, len(tracker_text)):
        c = tracker_text[i]
        if c == '[':   depth += 1
        elif c == ']':
            depth -= 1
            if depth == 0:
                lb_end = i
                break

    # Extract existing entries (preserve order and existing change texts)
    lb_section = tracker_text[lb_start:lb_end]
    entries, depth2, start2 = [], 0, None
    for i, ch in enumerate(lb_section):
        if ch == '{':
            if depth2 == 0: start2 = i
            depth2 += 1
        elif ch == '}':
            depth2 -= 1
            if depth2 == 0 and start2 is not None:
                entries.append(lb_section[start2:i + 1])
                start2 = None

    new_entries = []
    for entry in entries:
        code_m   = re.search(r'code:\s*["\']([^"\']+)["\']', entry)
        change_m = re.search(r'change:\s*["\']([^"\']*)["\']', entry)
        if not code_m:
            continue
        code = code_m.group(1)
        if code not in story_map:
            continue
        s = story_map[code]
        if new_change_texts and code in new_change_texts:
            change = js_safe(new_change_texts[code])
        else:
            change = js_safe(change_m.group(1) if change_m else '')
        new_entries.append(
            f'{{\n    code: "{code}",\n    title: "{s["title"]}",\n'
            f'    change: "{change}",\n    heat: {s["heat"]},\n'
            f'    status: "{s["status"]}"\n  }}'
        )

    new_lb = ',\n  '.join(new_entries)
    return tracker_text[:lb_start] + new_lb + tracker_text[lb_end:]

# ── Tier 3: DeepSeek Synthesis ────────────────────────────────
def tier3_synthesis():
    if not CHANGES_F.exists():
        log("[Tier 3] No changes file — skipping synthesis.")
        return

    tracker_text  = TRACKER.read_text(encoding="utf-8")
    changes_text  = CHANGES_F.read_text()
    context_text  = CONTEXT_F.read_text(encoding="utf-8") if CONTEXT_F.exists() else ""

    sys_prompt = (
        "You are the ARC Senior Analyst. Synthesize today's story updates into a JSON object.\n\n"
        "Return ONLY a JSON object with exactly these keys:\n"
        "  summary: string — 3-5 sentences on the current overall state of play. "
        "Present tense, no history, graduate-level reader. Update from the previous summary.\n"
        "  leaderboard_changes: array of {code, change} — one entry per story updated today. "
        "'change' is 1-2 concrete sentences on what specifically changed. "
        "Use single quotes inside strings.\n\n"
        "Return ONLY valid JSON. No markdown, no explanation, no extra keys."
    )
    user_prompt = (
        f"Today's updates:\n{changes_text}\n\n"
        f"Analyst context:\n{context_text[:800]}\n\n"
        f"Current tracker (first 8000 chars):\n{tracker_text[:8000]}"
    )

    log("[Tier 3] Running DeepSeek synthesis...")
    try:
        result = call_openrouter(SYNTH_MODEL, [
            {"role": "system", "content": sys_prompt},
            {"role": "user",   "content": user_prompt}
        ], temp=0.3)
    except Exception as e:
        log(f"[Tier 3] SKIP — synthesis call failed: {e}")
        return

    clean = re.sub(r'^```(json)?\n?|\n?```$', '', result, flags=re.MULTILINE).strip()
    try:
        parsed = json.loads(clean)
    except Exception as e:
        log(f"[Tier 3] SKIP — JSON parse failed: {e}\nRaw output: {result[:500]}")
        return

    new_summary     = js_safe(parsed.get("summary", ""))
    lb_changes_raw  = parsed.get("leaderboard_changes", [])
    lb_changes = {
        item["code"]: item["change"]
        for item in lb_changes_raw
        if isinstance(item, dict) and "code" in item and "change" in item
    }

    tracker_text = TRACKER.read_text(encoding="utf-8")

    # Update OVERVIEW.summary — replace just the summary value, not the whole block
    if new_summary:
        tracker_text = re.sub(
            r'(const OVERVIEW\s*=\s*\{[^}]{0,20}summary:\s*")[^"]*(")',
            rf'\g<1>{new_summary}\g<2>',
            tracker_text, flags=re.DOTALL, count=1
        )

    # Ensure OVERVIEW block closes properly
    tracker_text = _ensure_overview_closed(tracker_text)

    # Sync leaderboard with updated heat/status + new change texts
    tracker_text = sync_leaderboard(tracker_text, lb_changes)

    TRACKER.write_text(tracker_text, encoding="utf-8")
    log(f"[Tier 3] Synthesis complete. Updated {len(lb_changes)} leaderboard entries.")

def _ensure_overview_closed(tracker_text):
    """Guard: make sure const OVERVIEW = {...} is properly terminated with };"""
    overview_m = re.search(r'const OVERVIEW\s*=\s*\{', tracker_text)
    if not overview_m:
        return tracker_text
    lb_m = re.search(r'leaderboard:\s*\[', tracker_text[overview_m.start():])
    if not lb_m:
        return tracker_text
    lb_start = overview_m.start() + lb_m.end()

    # Find end of leaderboard array
    depth, lb_end = 1, lb_start
    for i in range(lb_start, len(tracker_text)):
        c = tracker_text[i]
        if c == '[': depth += 1
        elif c == ']':
            depth -= 1
            if depth == 0:
                lb_end = i
                break

    # Everything after the ] up to the next const/function should be `\n};`
    after = tracker_text[lb_end + 1:lb_end + 10].lstrip()
    if not after.startswith('};') and not after.startswith('}'):
        # Insert the missing closing brace
        tracker_text = tracker_text[:lb_end + 1] + '\n};' + tracker_text[lb_end + 1:]
        log("  [Guard] Inserted missing }; to close OVERVIEW object.")
    return tracker_text

# ── Queue Builder ─────────────────────────────────────────────
def build_queue():
    today     = date.today()
    dow       = today.isoweekday()   # 1 = Monday
    dom       = today.day

    tracker_text = TRACKER.read_text(encoding="utf-8")
    m = re.search(r'const STORIES\s*=\s*\[', tracker_text)
    if not m:
        return

    stories_text = tracker_text[m.end():]
    stories, depth, start = [], 0, None
    for i, ch in enumerate(stories_text):
        if ch == '{':
            if depth == 0: start = i
            depth += 1
        elif ch == '}':
            depth -= 1
            if depth == 0 and start is not None:
                snippet = stories_text[start:i + 1]
                code_m  = re.search(r'code:\s*["\']([^"\']+)["\']', snippet)
                title_m = re.search(r'title:\s*["\']([^"\']+)["\']', snippet)
                heat_m  = re.search(r'\bheat:\s*(\d)', snippet)
                if code_m and title_m and heat_m:
                    stories.append({
                        'code':  code_m.group(1),
                        'title': title_m.group(1),
                        'heat':  int(heat_m.group(1))
                    })
                start = None

    for s in stories:
        h = s['heat']
        if h >= 5:
            days = 1
        elif h == 4:
            days = 2
        elif h == 3 and dow == 1:
            days = 7
        elif h <= 2 and dom in (1, 15):
            days = 14
        else:
            continue
        war = "1" if s['code'] in WAR_CODES else "0"
        print(f"{s['code']}|{s['title']}|{days}|{war}")

# ── Main ──────────────────────────────────────────────────────
def main():
    p = argparse.ArgumentParser(description="ARC Pipeline 3.0")
    p.add_argument("--code",  help="Story code e.g. IRAN-01")
    p.add_argument("--title", help="Search topic")
    p.add_argument("--days",  type=int, default=1)
    p.add_argument("--war",   action="store_true")
    p.add_argument("--mode",  default="full", choices=["search", "full", "synthesize", "queue"])
    args = p.parse_args()

    if args.mode == "queue":
        return build_queue()

    if args.mode == "synthesize":
        return tier3_synthesis()

    if not args.code or not args.title:
        abort("--code and --title are required.")

    log(f"  [{args.code}] Searching ({args.days}d)...")
    results = tier1_search(args.code, args.title, args.days, args.war)

    if args.mode == "search":
        print(results or "")
        return

    if results is None:
        # Record the skip
        changes = load_changes()
        if args.code not in changes["skipped"]:
            changes["skipped"].append(args.code)
        save_changes(changes)
        return

    log(f"  [{args.code}] Formatting and writing...")
    tier2_write(args.code, results)

if __name__ == "__main__":
    main()
