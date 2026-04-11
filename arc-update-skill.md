# ARC Update Skill

## Purpose

This skill tells Claude Code exactly how to execute an ARC tracker update. Run this skill at the start of every automated update session.

---

## Step 1 — Determine Which Stories to Update Today

Read `arc-update-context.md` for the full story list and heat levels.

Build the update queue based on today's date:

```python
from datetime import date

today = date.today()
day_of_week = today.weekday()   # 0=Monday, 6=Sunday
day_of_month = today.day

# Always update (daily)
daily = [s for s in ALL_STORIES if s.heat >= 4]

# Weekly update — run on Mondays
weekly = [s for s in ALL_STORIES if s.heat == 3] if day_of_week == 0 else []

# Biweekly update — run on 1st and 15th of each month
biweekly = [s for s in ALL_STORIES if s.heat <= 2] if day_of_month in [1, 15] else []

update_queue = daily + weekly + biweekly
```

---

## Step 2 — Pull Latest Tracker from GitHub

```bash
git pull origin main
```

If there is a merge conflict: abort, log the error, exit. Do not proceed.

---

## Step 3 — For Each Story in the Update Queue, Query Gemini

Use the Gemini 1.5 Flash API with Google Search grounding enabled.

### API Call Structure

```python
import google.generativeai as genai
import os

genai.configure(api_key=os.environ["GEMINI_API_KEY"])
model = genai.GenerativeModel("gemini-1.5-flash")

def search_story(story_code, story_title, current_summary, open_questions):
    prompt = f"""You are a research assistant for an intelligence tracker. 
Search for the latest developments on this story as of today {date.today()}.

STORY: {story_code} — {story_title}
CURRENT STATUS: {current_summary}
OPEN QUESTIONS TO ANSWER IF POSSIBLE: {open_questions}

Search for news from the last 24-48 hours (or last 7 days for weekly stories).

Return a structured report with these exact sections:

NEW CONFIRMED FACTS:
(List only verified facts from credible sources. Include source and date. If nothing new, write NONE.)

DEVELOPING THREADS UPDATED:
(List threads that have moved. If nothing, write NONE.)

RESOLVED QUESTIONS:
(List any open questions that now have answers. If none, write NONE.)

NEW KEY PLAYERS:
(Any new significant people who have entered this story. If none, write NONE.)

TOLL UPDATE (war stories only):
(Updated casualty/displacement figures if available. If none, write NONE.)

FRONT UPDATE (war stories only):
(Any territorial or operational changes. If none, write NONE.)

RAW SOURCES:
(List the 2-3 most credible sources you drew from, with dates.)
"""
    response = model.generate_content(
        prompt,
        tools=[{"google_search": {}}]
    )
    return response.text
```

### Rate Limiting

Gemini 1.5 Flash free tier: 15 requests per minute. Add a 5-second delay between calls.

```python
import time
time.sleep(5)
```

---

## Step 4 — Pass Gemini Output to Claude for Analysis

For each story, send Gemini's research report to Claude (the agent itself) with this instruction:

```
You are updating the ARC Intelligence Tracker. You have just received a research report from Gemini Search about {story_code}.

EXISTING STORY DATA:
{paste current story fields: summary, confirmed, developing, insights, questions}

GEMINI RESEARCH REPORT:
{paste gemini output}

Your task:
1. Identify what is genuinely new vs what was already in the tracker
2. Write updated versions of the fields that have changed
3. For confirmed[]: add new verified facts, never remove existing ones
4. For developing[]: add new threads, remove any that are now resolved
5. For insights[]: add new analytical conclusions only if they genuinely add something beyond the confirmed facts
6. For questions[]: remove answered questions, add new genuinely open ones
7. Update heat (integer 1-5) if the story's pace has meaningfully changed
8. Update status if appropriate
9. Update card (one sentence) to reflect current state
10. Update summary (2-4 sentences) to reflect current state
11. Update updated field to today's date

Return ONLY the updated field values in this exact format:

HEAT: [integer]
STATUS: [string]
UPDATED: [date string]
CARD: [string]
SUMMARY: [string]
NEW_CONFIRMED: [list of new strings to append]
REMOVE_DEVELOPING: [list of existing strings to remove — exact match]
NEW_DEVELOPING: [list of new strings to append]
NEW_INSIGHTS: [list of new strings to append]
REMOVE_QUESTIONS: [list of existing strings to remove — exact match]
NEW_QUESTIONS: [list of new strings to append]
TOLL_UPDATE: [only for war stories — updated toll fields as key:value pairs, or NONE]
FRONT_UPDATE: [only for war stories — updated front fields, or NONE]

If a field has no changes, write UNCHANGED for that field.
If Gemini returned nothing meaningful, write UNCHANGED for all fields.
```

---

## Step 5 — Apply Updates to tracker.jsx

Parse Claude's structured response and make targeted edits to `tracker.jsx`.

### Parsing the response

```python
def parse_claude_response(response_text):
    updates = {}
    lines = response_text.strip().split('\n')
    current_key = None
    current_value = []
    
    for line in lines:
        if line.startswith('HEAT:'):
            updates['heat'] = int(line.split(':')[1].strip())
        elif line.startswith('STATUS:'):
            updates['status'] = line.split(':')[1].strip()
        elif line.startswith('UPDATED:'):
            updates['updated'] = line.split(':', 1)[1].strip()
        elif line.startswith('CARD:'):
            updates['card'] = line.split(':', 1)[1].strip()
        elif line.startswith('SUMMARY:'):
            updates['summary'] = line.split(':', 1)[1].strip()
        # ... etc for each field
    
    return updates
```

### Applying to tracker.jsx

Use Python's `re` module to make targeted replacements. The strategy is to find the story by its `code` field and then find the specific field within that story's object.

**Critical:** Always validate the edited file parses as valid JavaScript before committing. Use a simple bracket/quote balance check.

```python
def validate_jsx(content):
    # Check for unbalanced brackets
    depth = 0
    in_string = False
    string_char = None
    
    for i, char in enumerate(content):
        if in_string:
            if char == string_char and content[i-1] != '\\':
                in_string = False
        elif char in ('"', "'", '`'):
            in_string = True
            string_char = char
        elif char in ('{', '[', '('):
            depth += 1
        elif char in ('}', ']', ')'):
            depth -= 1
            if depth < 0:
                return False, f"Unbalanced bracket at position {i}"
    
    return depth == 0, f"Unbalanced brackets: depth={depth}"
```

If validation fails: do not commit. Log the error. Keep the original file.

---

## Step 6 — Update OVERVIEW

After all individual story updates, regenerate the OVERVIEW:

**summary field:** Write a single paragraph (3-5 sentences) capturing the current global situation across all watches. Lead with the most urgent story. Connect the stories that are actually connected. Today's date is {today}.

**leaderboard:** Re-sort all stories by current heat (descending). Update each entry's `change` field with a 1-2 sentence description of the most significant recent development.

---

## Step 7 — Validate and Commit

```bash
# Validate the file can be parsed
node --check tracker.jsx 2>&1
# If error: abort, log, exit

# Stage only the tracker file
git add tracker.jsx

# Commit with structured message
git commit -m "ARC update $(date +%Y-%m-%d) — heat5: [list] heat4: [list]"

# Push
git push origin main
```

If push fails: log the error, do not retry more than once.

---

## Step 8 — Log the Run

Append to `arc-update-log.md`:

```markdown
## [DATE] [TIME UTC]

Run type: [daily/weekly/biweekly]
Stories queried: [count]
Stories updated: [count]
Stories unchanged: [count]
Gemini API calls: [count]
Errors: [list or NONE]
Commit: [hash]
```

---

## Error Handling Summary

| Error | Action |
|-------|--------|
| Merge conflict on pull | Abort, log, exit |
| Gemini API rate limit | Wait 60 seconds, retry once |
| Gemini API error | Skip story, mark as SKIPPED in log |
| Claude analysis produces malformed output | Skip story, log |
| JSX validation fails after edit | Revert to original, log |
| git push fails | Log, do not retry |
| Any unhandled exception | Log full traceback, exit cleanly |

---

## Environment Variables Required

```
GEMINI_API_KEY       — Gemini 1.5 Flash API key (free tier)
ANTHROPIC_API_KEY    — Claude API key (for Claude Code agent)
GITHUB_TOKEN         — GitHub personal access token with repo write access
REPO_PATH            — Local path to cloned ARC repository
```

---

## GitHub Actions Workflow

Save as `.github/workflows/arc-update.yml` in the repo:

```yaml
name: ARC Daily Update

on:
  schedule:
    # Daily at 6am UTC (2am ET)
    - cron: '0 6 * * *'
  workflow_dispatch:  # Allow manual trigger

jobs:
  update:
    runs-on: ubuntu-latest
    
    steps:
      - name: Checkout
        uses: actions/checkout@v4
        with:
          token: ${{ secrets.GITHUB_TOKEN }}
          fetch-depth: 0

      - name: Set up Python
        uses: actions/setup-python@v5
        with:
          python-version: '3.11'

      - name: Install dependencies
        run: |
          pip install anthropic google-generativeai

      - name: Install Claude Code
        run: |
          npm install -g @anthropic-ai/claude-code

      - name: Run ARC update
        env:
          GEMINI_API_KEY: ${{ secrets.GEMINI_API_KEY }}
          ANTHROPIC_API_KEY: ${{ secrets.ANTHROPIC_API_KEY }}
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
        run: |
          claude --skill arc-update-skill.md \
                 --context arc-update-context.md \
                 --task "Run the ARC update for today"

      - name: Push changes
        run: |
          git config user.name "ARC Update Bot"
          git config user.email "arc-bot@users.noreply.github.com"
          git push origin main
```

---

## GitHub Pages Setup

In your repo settings:
- Go to Settings → Pages
- Source: Deploy from branch
- Branch: `main`, folder: `/` (root) or `/docs` if you move files there
- Your tracker will be live at `https://[username].github.io/[repo-name]/`

The `tracker.jsx` needs to be served via a minimal `index.html` that loads React and renders the component. Create `index.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ARC Information Core</title>
  <script src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
  <script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
</head>
<body>
  <div id="root"></div>
  <script type="text/babel" src="tracker.jsx"></script>
  <script type="text/babel">
    ReactDOM.createRoot(document.getElementById('root')).render(
      React.createElement(ARC)
    );
  </script>
</body>
</html>
```
