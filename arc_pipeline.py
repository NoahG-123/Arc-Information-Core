#!/usr/bin/env python3
"""
ARC Pipeline 3.1
─────────────────────────────────────────────────────
Tier 1: Brave Search LLM Context API  (~free, $5/mo credit)
Tier 2: DeepSeek V3 via OpenRouter    (paid, format + write)
Tier 3: DeepSeek V3 via OpenRouter    (paid, synthesis)
─────────────────────────────────────────────────────
Per-story failures are skipped, not aborted.
Push happens once at the end (handled by CI or run_pipeline.sh).
"""

import json, os, re, sys, argparse, time, urllib.request, urllib.error, urllib.parse
import xml.etree.ElementTree as ET
from datetime import date
from pathlib import Path

WAR_CODES = {"IRAN-W01", "PAL-01", "UKR-01", "SDN-01", "LBN-01", "MMR-01", "SAH-01", "PAK-01"}

# ── Config ────────────────────────────────────────────────────
BRAVE_KEY      = os.environ.get("BRAVE_API_KEY")
OPENROUTER_KEY = os.environ.get("OPENROUTER_KEY")

TRACKER    = Path("tracker.js")
CONTEXT_F  = Path("arc-update-context.md")
CHANGES_F  = Path("arc-run-changes.json")
METADATA_F = Path("arc-metadata.json")

BRAVE_LLM_URL = "https://api.search.brave.com/res/v1/llm/context"
FORMAT_MODEL  = "deepseek/deepseek-chat"
SYNTH_MODEL   = "deepseek/deepseek-chat"

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
            data = json.loads(CHANGES_F.read_text())
            data.setdefault("written", [])
            data.setdefault("skipped", [])
            return data
        except Exception:
            pass
    return {"written": [], "skipped": []}

def save_changes(changes):
    CHANGES_F.write_text(json.dumps(changes))

def load_metadata():
    if METADATA_F.exists():
        try:
            return json.loads(METADATA_F.read_text())
        except Exception:
            pass
    return {}

def save_metadata(meta):
    METADATA_F.write_text(json.dumps(meta, indent=2))

# ── API calls with retry ───────────────────────────────────────
def call_brave_llm_context(query, days, country=None, search_lang=None, retries=3):
    """Fetch pre-extracted, relevance-scored web content via Brave LLM Context API."""
    if not BRAVE_KEY:
        abort("BRAVE_API_KEY is not set.")
    freshness = "pd" if days <= 1 else "pw" if days <= 7 else "pm"
    params_dict = {
        "q":           query,
        "count":       20,
        "token_limit": 10000,
        "freshness":   freshness,
    }
    if country:
        params_dict["country"] = country
    if search_lang:
        params_dict["search_lang"] = search_lang
    params = urllib.parse.urlencode(params_dict)
    url = f"{BRAVE_LLM_URL}?{params}"
    req = urllib.request.Request(url, headers={
        "Accept":              "application/json",
        "X-Subscription-Token": BRAVE_KEY
    })
    last_err = None
    for attempt in range(retries):
        try:
            with urllib.request.urlopen(req, timeout=30) as r:
                res = json.loads(r.read().decode())
            # Response: grounding.generic[] with url, title, snippets[]
            items = (res.get("grounding") or {}).get("generic") or res.get("context") or []
            parts = []
            for item in items:
                if isinstance(item, dict):
                    title   = item.get("title", "")
                    url_src = item.get("url", "")
                    snippets = item.get("snippets") or ([item["content"]] if item.get("content") else [])
                    text = " ".join(str(s) for s in snippets if s)
                    if text:
                        parts.append(f"[{title}] {url_src}\n{text}")
                elif isinstance(item, str) and item:
                    parts.append(item)
            if parts:
                return "\n\n".join(parts)
            # Fallback: return raw JSON summary if no structured content
            return json.dumps(res)[:4000]
        except Exception as e:
            last_err = e
            if attempt < retries - 1:
                wait = 15 * (attempt + 1)
                log(f"    [Brave] attempt {attempt+1} failed ({e}) — retrying in {wait}s")
                time.sleep(wait)
    raise Exception(f"Brave LLM Context failed after {retries} attempts: {last_err}")

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
    """Return (start, end) of the story object with the given code.
    Only searches within STORIES and WAR_STORIES — never EVENTS or OVERVIEW.
    Skips connection/sub-entries (which lack heat:) to find the real story object."""
    search_from = text.find('const STORIES')
    if search_from == -1:
        search_from = 0

    for fmt in (f'code: "{code}"', f'code:"{code}"', f"code: '{code}'", f"code:'{code}'"):
        pos = search_from
        while True:
            i = text.find(fmt, pos)
            if i == -1:
                break
            # Main story objects always have heat: within the next 200 chars;
            # connection sub-entries ({code, label, how}) do not.
            if not re.search(r'\bheat:\s*\d', text[i:i + 200]):
                pos = i + len(fmt)
                continue
            start = text.rfind('{', search_from, i)
            if start == -1:
                pos = i + len(fmt)
                continue
            depth = 0
            for j in range(start, len(text)):
                if text[j] == '{':
                    depth += 1
                elif text[j] == '}':
                    depth -= 1
                    if depth == 0:
                        return start, j
            break
    return None, None

# ── Region discovery ──────────────────────────────────────────
def discover_region(code, title, meta):
    """Call DeepSeek to infer country/lang/arxiv for an unknown code. Saves result to JSON."""
    log(f"  [Metadata] Unknown code '{code}' — asking DeepSeek...")
    prompt = (
        f"Story code: {code}\nStory title: {title}\n\n"
        "Return a JSON object with exactly these keys:\n"
        "  country: ISO 3166-1 alpha-2 code most relevant to this story (or null if truly global)\n"
        "  search_lang: BCP-47 language code for local-language sources (or null)\n"
        "  arxiv_query: short arXiv search string if academic papers are relevant, else null\n"
        "Return ONLY the JSON object, no explanation, no markdown."
    )
    try:
        raw = call_openrouter(FORMAT_MODEL, [{"role": "user", "content": prompt}], temp=0.0)
        clean = re.sub(r'^```\w*\n?|\n?```$', '', raw.strip(), flags=re.MULTILINE).strip()
        region = json.loads(clean)
        meta[code] = {k: v for k, v in region.items() if v is not None}
        save_metadata(meta)
        log(f"  [Metadata] Saved {code}: {meta[code]}")
        return meta[code]
    except Exception as e:
        log(f"  [Metadata] Discovery failed for '{code}': {e} — using global-only")
        return {}

# ── arXiv helper ──────────────────────────────────────────────
def get_arxiv_abstracts(query, max_results=3):
    """Fetch titles + abstracts of the most recent arXiv papers matching query."""
    safe_q = urllib.parse.quote(query)
    url = (
        f"http://export.arxiv.org/api/query"
        f"?search_query=all:{safe_q}"
        f"&sortBy=submittedDate&sortOrder=descending"
        f"&max_results={max_results}"
    )
    try:
        with urllib.request.urlopen(url, timeout=20) as r:
            xml_data = r.read()
        root = ET.fromstring(xml_data)
        ns = {"atom": "http://www.w3.org/2005/Atom"}
        parts = []
        for entry in root.findall("atom:entry", ns):
            title   = (entry.findtext("atom:title",   namespaces=ns) or "").strip()
            summary = (entry.findtext("atom:summary", namespaces=ns) or "").strip()
            if title and summary:
                parts.append(f"Title: {title}\nAbstract: {summary[:600]}")
        return "\n\n".join(parts)
    except Exception as e:
        log(f"  [arXiv] Failed: {e}")
        return ""

# ── Tier 1: Search ────────────────────────────────────────────
def tier1_search(code, title, days, war):
    query = f"{title} latest news"
    if war:
        query = f"{title} casualties military strikes latest"

    meta = load_metadata()
    region = meta.get(code)
    if region is None:
        region = discover_region(code, title, meta)

    try:
        global_results = call_brave_llm_context(query, days)
    except Exception as e:
        log(f"  [{code}] SKIP — global search failed: {e}")
        return None

    results = global_results

    if region:
        try:
            local_results = call_brave_llm_context(
                query, days,
                country=region.get("country"),
                search_lang=region.get("search_lang"),
            )
            results = global_results + "\n\n--- LOCAL SOURCES ---\n\n" + local_results
            log(f"  [{code}] Local ping OK ({region['country']})")
        except Exception as e:
            log(f"  [{code}] Local search failed (skipping): {e}")

    if region and region.get("arxiv_query"):
        arxiv_text = get_arxiv_abstracts(region["arxiv_query"])
        if arxiv_text:
            results += "\n\n--- RECENT ACADEMIC PAPERS ---\n\n" + arxiv_text
            log(f"  [{code}] arXiv ping OK")

    return results

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
                "- Preserve ALL existing fields. Update content only where search results justify it.\n"
                "- Do NOT change the `updated` field — leave it exactly as it appears in the existing object."
            )
        },
        {
            "role": "user",
            "content": (
                f"Update the story object for {code}.\n\n"
                f"NEW SEARCH RESULTS:\n{search_results}\n\n"
                f"EXISTING OBJECT (preserve structure and all fields — update content only):\n{existing_object}"
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

    # Only advance the updated date when content actually changed
    _updated_re = re.compile(r'\bupdated:\s*["\'][^"\']*["\'],?\s*\n?')
    old_content = _updated_re.sub('', existing_object).strip()
    new_content = _updated_re.sub('', new_object).strip()
    if old_content != new_content:
        new_object = re.sub(
            r'(updated:\s*["\'])[^"\']*(["\'])',
            rf'\g<1>{date_str}\g<2>',
            new_object, count=1
        )
        date_label = date_str
    else:
        date_label = "unchanged"

    updated_tracker = tracker_text[:start] + new_object + tracker_text[end + 1:]
    TRACKER.write_text(updated_tracker, encoding="utf-8")

    changes = load_changes()
    if code not in changes["written"]:
        changes["written"].append(code)
    save_changes(changes)

    log(f"  [{code}] Written ({date_label})")
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
        "Use single quotes inside strings.\n"
        "  ai_pulse: array of {label, value, delta} — 4-5 AI industry metrics to display. "
        "Use real current figures: model releases, funding rounds, policy shifts, capability benchmarks. "
        "Keep label under 25 chars, value concise (e.g. '$3B', '1M tokens'), delta 1-3 words with direction. "
        "Use single quotes inside strings. Do NOT include an 'Active security alerts' entry.\n"
        "  events: array of {code, type, content} — up to 8 most significant new facts, "
        "status changes, or heat changes from today's updates. "
        "type is one of: NEW_FACT, STATUS_CHANGE, HEAT_CHANGE, STATUS_UPDATE, ALERT. "
        "content is 1-2 sentences. Use single quotes inside strings.\n"
        "  cross_story_alerts: array of {codes, date, title, alert, severity} — 0-3 alerts where "
        "two or more stories are actively interacting in a way that changes the risk or trajectory "
        "of both. codes is an array of story code strings. date is today's date string. "
        "title is a short label (4-6 words). alert is 2-3 sentences explaining the interaction and "
        "why it matters structurally — not just what happened, but what the combination produces. "
        "severity is one of: critical, high, medium. Only include alerts where the cross-story "
        "interaction is genuinely new or has materially changed today. Use single quotes inside strings.\n"
        "  proposed_stories: array of {title, code, reason} — 1-3 new story ideas worth tracking. "
        "Derive from today's search results. code is a short all-caps hyphenated ID like 'CHIP-02'.\n"
        "  retirement_candidates: array of {code, reason} — stories that appear stale or resolved.\n\n"
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
    ai_pulse_raw          = parsed.get("ai_pulse", [])
    events_raw            = parsed.get("events", [])
    cross_alerts_raw      = parsed.get("cross_story_alerts", [])
    proposed_stories      = parsed.get("proposed_stories", [])
    retirement_candidates = parsed.get("retirement_candidates", [])

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

    # Update AI_PULSE constant
    if ai_pulse_raw:
        tracker_text = _update_ai_pulse(tracker_text, ai_pulse_raw)

    # Prepend new events to EVENTS log
    if events_raw:
        tracker_text = _prepend_events(tracker_text, events_raw, today_str())

    # Update cross-story alerts in OVERVIEW
    if cross_alerts_raw:
        tracker_text = _update_cross_story_alerts(tracker_text, cross_alerts_raw)

    TRACKER.write_text(tracker_text, encoding="utf-8")
    log(f"[Tier 3] Synthesis complete. Updated {len(lb_changes)} leaderboard entries.")

    # Write pending stories file
    if proposed_stories or retirement_candidates:
        _write_pending_stories(proposed_stories, retirement_candidates)

def _update_ai_pulse(tracker_text, pulse_items):
    """Replace the AI_PULSE constant array with fresh items from synthesis."""
    entries = []
    for item in pulse_items:
        if not isinstance(item, dict):
            continue
        label = js_safe(item.get("label", ""))
        value = js_safe(item.get("value", ""))
        delta = js_safe(item.get("delta", ""))
        if label and value:
            entries.append(f'{{\n  label: "{label}",\n  value: "{value}",\n  delta: "{delta}"\n}}')
    if not entries:
        return tracker_text
    new_block = "const AI_PULSE = [" + ", ".join(entries) + "];"
    updated = re.sub(
        r'const AI_PULSE\s*=\s*\[[\s\S]*?\];',
        new_block,
        tracker_text, count=1
    )
    if updated == tracker_text:
        log("  [AI Pulse] Pattern not found — skipping update.")
    else:
        log(f"  [AI Pulse] Updated with {len(entries)} entries.")
    return updated

def _update_cross_story_alerts(tracker_text, alerts):
    """Replace cross_story_alerts array inside OVERVIEW with fresh alerts from synthesis."""
    entries = []
    for a in alerts:
        if not isinstance(a, dict):
            continue
        codes   = a.get("codes", [])
        date    = js_safe(a.get("date", today_str()))
        title   = js_safe(a.get("title", ""))
        alert   = js_safe(a.get("alert", ""))
        sev     = a.get("severity", "medium")
        if not (codes and title and alert):
            continue
        codes_js = "[" + ", ".join(f'"{c}"' for c in codes) + "]"
        entries.append(
            f'{{\n    codes: {codes_js},\n    date: "{date}",\n    title: "{title}",\n'
            f'    alert: "{alert}",\n    severity: "{sev}"\n  }}'
        )
    if not entries:
        return tracker_text

    new_array = "cross_story_alerts: [\n  " + ",\n  ".join(entries) + "\n]"

    # Replace existing cross_story_alerts array if present
    updated = re.sub(
        r'cross_story_alerts:\s*\[[\s\S]*?\]',
        new_array,
        tracker_text, count=1
    )
    if updated != tracker_text:
        log(f"  [Cross-story alerts] Replaced with {len(entries)} alerts.")
        return updated

    # Not present yet — insert before closing }; of OVERVIEW
    overview_m = re.search(r'const OVERVIEW\s*=\s*\{', tracker_text)
    if not overview_m:
        log("  [Cross-story alerts] OVERVIEW not found — skipping.")
        return tracker_text
    # Find the closing }; of OVERVIEW (the leaderboard array ends, then the object closes)
    lb_m = re.search(r'leaderboard:\s*\[', tracker_text[overview_m.start():])
    if not lb_m:
        return tracker_text
    lb_start = overview_m.start() + lb_m.end()
    depth, pos = 1, lb_start
    for i in range(lb_start, len(tracker_text)):
        if tracker_text[i] == '[':   depth += 1
        elif tracker_text[i] == ']':
            depth -= 1
            if depth == 0:
                pos = i + 1
                break
    # pos is now just after the leaderboard closing ]
    insert = f",\n  {new_array}"
    tracker_text = tracker_text[:pos] + insert + tracker_text[pos:]
    log(f"  [Cross-story alerts] Inserted {len(entries)} alerts into OVERVIEW.")
    return tracker_text

def _write_pending_stories(proposed, retired):
    """Write arc-pending-stories.md with new story proposals and retirement candidates."""
    today = today_str()
    lines = [f"# ARC Pending Stories — {today}\n"]

    if proposed:
        lines.append("## Proposed New Stories\n")
        for s in proposed:
            if not isinstance(s, dict):
                continue
            title  = s.get("title", "Untitled")
            code   = s.get("code", "???")
            reason = s.get("reason", "")
            lines.append(f"### [{code}] {title}\n{reason}\n")

    if retired:
        lines.append("## Retirement Candidates\n")
        for s in retired:
            if not isinstance(s, dict):
                continue
            code   = s.get("code", "???")
            reason = s.get("reason", "")
            lines.append(f"- **{code}**: {reason}\n")

    Path("arc-pending-stories.md").write_text("\n".join(lines), encoding="utf-8")
    log(f"  [Pending] Wrote arc-pending-stories.md ({len(proposed)} proposed, {len(retired)} retirement).")

def _prepend_events(tracker_text, new_events, date_str):
    """Prepend new event entries to the front of the EVENTS array."""
    if not new_events:
        return tracker_text
    events_m = re.search(r'const EVENTS\s*=\s*\[', tracker_text)
    if not events_m:
        return tracker_text
    entries = []
    for ev in new_events:
        if not isinstance(ev, dict):
            continue
        code    = ev.get("code", "")
        etype   = ev.get("type", "NEW_FACT")
        content = js_safe(ev.get("content", ""))
        if code and content:
            entries.append(
                f'{{\n  date: "{date_str}",\n  code: "{code}",\n  type: "{etype}",\n'
                f'  content: "{content}"\n}}'
            )
    if not entries:
        return tracker_text
    insert_pos = events_m.end()
    new_block = "\n" + ",\n".join(entries) + ","
    tracker_text = tracker_text[:insert_pos] + new_block + tracker_text[insert_pos:]
    log(f"  [Events] Prepended {len(entries)} new events.")
    return tracker_text

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
