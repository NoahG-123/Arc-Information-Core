#!/usr/bin/env python3
"""
ARC Intelligence Pipeline 2.0 (No-Email Edition)
─────────────────────────────────────────────────────────────
Tier 1: Gemini Flash         (Search & Retrieve via Google AI Studio)
Tier 2: Gemma 4 27B IT       (Format & Write via Google AI Studio)
Tier 3: DeepSeek Reasoner    (Synthesis via OpenRouter)
"""

import json, os, re, sys, argparse, urllib.request, urllib.error
from datetime import date
from pathlib import Path

# ── Config & Keys ─────────────────────────────────────────────
GEMINI_KEY     = os.environ.get("GEMINI_API_KEY")
OPENROUTER_KEY = os.environ.get("OPENROUTER_KEY")

TRACKER   = Path("tracker.js")
CONTEXT_F = Path("arc-update-context.md")
TASK_F    = Path("arc-update-task.md")
CHANGES_F = Path("arc-run-changes.json")

GEMINI_BASE  = "https://generativelanguage.googleapis.com/v1beta/models"
SEARCH_MODEL = "gemini-2.5-flash"
FORMAT_MODEL = "gemma-4-31b-it"
SYNTH_MODEL  = "deepseek/deepseek-chat"

# ── Utilities ─────────────────────────────────────────────────
def abort(msg):
    print(f"\n[ABORT] {msg}", file=sys.stderr)
    Path("arc-abort.md").write_text(f"Aborted: {msg}\n")
    sys.exit(1)

def call_google_ai(model, payload):
    """Call any Google AI Studio model via REST."""
    if not GEMINI_KEY:
        abort("GEMINI_API_KEY environment variable is missing.")
    url = f"{GEMINI_BASE}/{model}:generateContent?key={GEMINI_KEY}"
    req = urllib.request.Request(
        url,
        data=json.dumps(payload).encode(),
        headers={"Content-Type": "application/json"},
        method="POST"
    )
    try:
        with urllib.request.urlopen(req, timeout=180) as r:
            res = json.loads(r.read().decode())
            if "error" in res:
                raise Exception(str(res["error"]))
            # Gemma 4 returns thought parts before the real response — skip them
            parts = res["candidates"][0]["content"]["parts"]
            text = next((p["text"] for p in parts if not p.get("thought")), parts[-1]["text"])
            return text
    except urllib.error.HTTPError as e:
        raise Exception(f"HTTP {e.code}: {e.read().decode()}")
    except Exception as e:
        raise Exception(str(e))

def call_openrouter(model, messages, temp=0.0):
    """Call OpenRouter (used only for Tier 3 synthesis)."""
    if not OPENROUTER_KEY:
        raise Exception("OPENROUTER_KEY environment variable is missing.")
    url = "https://openrouter.ai/api/v1/chat/completions"
    headers = {
        "Authorization": f"Bearer {OPENROUTER_KEY}",
        "Content-Type": "application/json",
        "HTTP-Referer": "https://github.com/arc-pipeline",
        "X-Title": "ARC Pipeline"
    }
    payload = {"model": model, "messages": messages, "temperature": temp}
    req = urllib.request.Request(url, data=json.dumps(payload).encode(), headers=headers, method="POST")
    try:
        with urllib.request.urlopen(req, timeout=180) as r:
            res = json.loads(r.read().decode())
            if "error" in res:
                raise Exception(str(res["error"]))
            return res["choices"][0]["message"]["content"].strip()
    except urllib.error.HTTPError as e:
        raise Exception(f"HTTP {e.code}: {e.read().decode()}")
    except Exception as e:
        raise Exception(str(e))

# ── Tier 1: Gemini Search ─────────────────────────────────────
def tier1_search(code, title, days, war):
    prompt = (
        f"Search Google News for '{title}' (Story Code: {code}) over the last {days} days. "
        f"Actively seek out local and foreign-language sources and translate them to English. "
        f"Extract concrete facts, casualties, policy shifts, and exact quotes. "
        f"Do not format as a story, just bullet points."
    )
    payload = {
        "contents": [{"parts": [{"text": prompt}]}],
        "tools": [{"googleSearch": {}}]
    }
    try:
        return call_google_ai(SEARCH_MODEL, payload)
    except Exception as e:
        abort(f"Gemini Search Error: {e}")

# ── Tier 2: Gemma 4 Format & Write ────────────────────────────
def find_story_bounds(text, code):
    """Return (start, end) indices of the story object with the given code, inclusive."""
    target = f'code: "{code}"'
    if target not in text:
        target = f'code:"{code}"'
    idx = text.find(target)
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

def tier2_write(code, search_results):
    tracker_text = TRACKER.read_text(encoding="utf-8")
    context_text = CONTEXT_F.read_text(encoding="utf-8") if CONTEXT_F.exists() else "No context file."

    # Extract the existing story object to show Gemma 4 the exact format to match
    start, end = find_story_bounds(tracker_text, code)
    existing_object = tracker_text[start:end+1] if start is not None else ""

    today = date.today()
    today_str = f"{today.strftime('%b')} {today.day} {today.year}"

    prompt = (
        f"You are the ARC Formatter. Follow these rules exactly:\n{context_text}\n\n"
        f"Update the story object for {code} based on these new facts:\n{search_results}\n\n"
        f"Here is the EXISTING object to update (preserve all fields, update content only):\n{existing_object}\n\n"
        f"Set the updated field to \"{today_str}\".\n"
        f"Output ONLY the raw JS object (same unquoted-key format as the input). No markdown, no explanation."
    )
    payload = {
        "contents": [{"parts": [{"text": prompt}]}],
        "generationConfig": {"temperature": 0.0}
    }

    try:
        new_object = call_google_ai(FORMAT_MODEL, payload)
    except Exception as e:
        abort(f"Gemma 4 formatting failed: {e}")

    new_object = re.sub(r'^```(\w+)?\n|\n```$', '', new_object, flags=re.MULTILINE).strip()

    if start is None:
        print(f"  [{code}] WARNING: Story code not found in tracker — content not updated.", file=sys.stderr)
    else:
        updated_tracker = tracker_text[:start] + new_object + tracker_text[end+1:]
        TRACKER.write_text(updated_tracker, encoding="utf-8")
        print(f"  [{code}] Story content and date updated.", file=sys.stderr)

    changes = {"written": []}
    if CHANGES_F.exists():
        try:
            changes = json.loads(CHANGES_F.read_text())
        except:
            pass
    if code not in changes["written"]:
        changes["written"].append(code)
    CHANGES_F.write_text(json.dumps(changes))

    print(f"  [{code}] Write successful.", file=sys.stderr)

# ── Tier 3: DeepSeek Synthesis ────────────────────────────────
def tier3_synthesis():
    if not CHANGES_F.exists():
        print("No changes found to synthesize. Exiting.", file=sys.stderr)
        return

    tracker_text = TRACKER.read_text(encoding="utf-8")
    changes_text = CHANGES_F.read_text()
    task_text = TASK_F.read_text(encoding="utf-8") if TASK_F.exists() else ""

    print("  [Tier 3] Asking DeepSeek to synthesize OVERVIEW...", file=sys.stderr)

    sys_prompt = (
        "You are the ARC Senior Analyst. Output a JSON object with ONE key: "
        "'new_overview_jsx' (the string representation of the new const OVERVIEW). "
        "Return ONLY valid JSON. No email digest is needed."
    )
    user_prompt = (
        f"Changes today: {changes_text}\n"
        f"Task Instructions: {task_text}\n\n"
        f"Tracker Data:\n{tracker_text[:10000]}"
    )
    messages = [{"role": "system", "content": sys_prompt}, {"role": "user", "content": user_prompt}]

    try:
        result = call_openrouter(SYNTH_MODEL, messages, temp=0.3)
        clean_json = re.sub(r'^```(json)?\n|\n```$', '', result, flags=re.MULTILINE).strip()
        parsed = json.loads(clean_json)

        new_overview = parsed.get("new_overview_jsx", "")
        updated_tracker = re.sub(r'const OVERVIEW = \{.*?\};', new_overview, tracker_text, flags=re.DOTALL)
        TRACKER.write_text(updated_tracker, encoding="utf-8")
        print("  [Tier 3] Tracker OVERVIEW updated successfully.", file=sys.stderr)
    except Exception as e:
        abort(f"Tier 3 Synthesis Failed. Error: {e}")

# ── Main CLI ──────────────────────────────────────────────────
def main():
    p = argparse.ArgumentParser(description="ARC Pipeline 2.0")
    p.add_argument("--code",  help="Story code e.g. IRAN-01")
    p.add_argument("--title", help="Search topic")
    p.add_argument("--days",  type=int, default=1)
    p.add_argument("--war",   action="store_true")
    p.add_argument("--mode",  default="full", choices=["search", "format", "validate", "synthesize", "full"])
    args = p.parse_args()

    if args.mode == "validate":
        return sys.exit(0)
    if args.mode == "synthesize":
        return sys.exit(0) if tier3_synthesis() else None
    if not args.code or not args.title:
        abort("--code and --title are required.")

    print(f"  [{args.code}] Searching...", file=sys.stderr)
    search_result = tier1_search(args.code, args.title, args.days, args.war)
    if args.mode == "search":
        return print(search_result)

    print(f"  [{args.code}] Formatting and writing...", file=sys.stderr)
    tier2_write(args.code, search_result)

if __name__ == "__main__":
    main()
