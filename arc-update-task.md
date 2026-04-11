# ARC Update Task

## Your Role

You are Claude Code running as an automated agent. Your job is to update `tracker.jsx` with the latest intelligence for each tracked story. You have read `arc-update-context.md` which contains all editorial rules, story codes, field definitions, and lifecycle rules. Follow those rules exactly.

---

## Step 1 — Setup

Get today's date and determine the run type:

```bash
TODAY=$(date +"%Y-%m-%d")
DAY_OF_WEEK=$(date +%u)   # 1=Monday, 7=Sunday
DAY_OF_MONTH=$(date +%d)  # 01-31
echo "Date: $TODAY | Day of week: $DAY_OF_WEEK | Day of month: $DAY_OF_MONTH"
```

Pull latest from GitHub:

```bash
git pull origin main
```

If pull fails with a merge conflict: abort, append the error to `arc-update-log.md`, exit. Do not proceed.

---

## Step 2 — Build the Update Queue

From `arc-update-context.md`, the update frequencies are:
- **Heat 5-4**: every run (12-hour schedule = twice daily)
- **Heat 3**: every 24 hours. On a 12-hour schedule, run heat-3 stories only on the 10am UTC run (check: `date +%H` == "06")
- **Heat 1-2**: every 48 hours. Run only when `DAY_OF_MONTH` is 01 or 15, on the 10am UTC run only

Build the queue accordingly. Log which stories are being processed this run.

---

## Step 3 — For Each Story, Search and Update

For each story in the queue:

### 3a. Get search results from Gemini

```bash
python3 gemini_search.py \
  --code "STORY_CODE" \
  --title "SEARCH_TOPIC" \
  --days 1   # Use 1 for heat 5-4, 2 for heat 3, 7 for heat 1-2
  # Add --war flag for WAR_STORIES
```

Capture stdout. If it starts with `SEARCH_ERROR`, log it and skip this story.

### 3b. Read current story data from tracker.jsx

Read the current values of: `heat`, `status`, `card`, `summary`, `confirmed[]`, `developing[]`, `insights[]`, `questions[]`.

For WAR_STORIES, also read: `toll` fields and `front` fields.

### 3c. Determine what is genuinely new

Compare Gemini's results against the current story data. Ask yourself:
- Is this fact already in confirmed[]?
- Is this thread already in developing[]?
- Is this a structural development or just a new event within the existing frame?
- Does this resolve any open question?
- Does this change the pace of the story (heat adjustment)?

If Gemini returned nothing that isn't already tracked: mark as UNCHANGED, log it, move on.

### 3d. Edit tracker.jsx

Make targeted edits only to fields that have genuinely changed. Follow these rules from `arc-update-context.md` exactly:
- confirmed[]: append new verified facts, never remove
- developing[]: append new threads, remove resolved ones
- insights[]: append new analytical conclusions only if they add something beyond confirmed facts
- questions[]: remove answered questions, append new open ones
- Adjust heat by at most 1 point if the story's pace has genuinely changed
- Update card and summary if the current state has materially shifted
- Always update the `updated` field to today's date format (e.g. "Apr 10 2026")

For WAR_STORIES: update toll figures if new verified numbers exist. Update front fields if battlefield situation has changed.

---

## Step 4 — Check for Retirement Triggers

After updating each story, check retirement criteria from `arc-update-context.md`:

**Resolution**: Has the core question this story was tracking been answered with structural stability? If yes, draft retirement.

**Absorption**: Is this story now fully inseparable from another story? If yes, draft absorption retirement — merge key facts into the absorbing story first.

**Dormancy**: Is heat at 1? Check `arc-update-log.md` for when heat first dropped to 1. If 30+ days ago with no meaningful updates, trigger retirement.

**Superseded**: Has the situation evolved into something structurally different that needs a new code?

If any retirement trigger is met:
1. Set status to "archived", heat to 0
2. Add `retired: "[TODAY]"` field
3. Write a `closing_summary` field: what happened, how it resolved, what it revealed
4. Move the story object to `ARCHIVED_STORIES` array (create it at bottom of tracker.jsx if it doesn't exist)
5. Remove from OVERVIEW.leaderboard
6. Log retirement in `arc-update-log.md`

---

## Step 5 — Check for New Story Triggers

After processing all stories, review the full set of Gemini results and ask:

Does any development meet **2 or more** of the criteria in `arc-update-context.md`?
1. Structural shift
2. Cross-story connection (affects 2+ existing stories)
3. Canadian relevance
4. Slow-moving but certain
5. Framework-level

If yes:
1. Draft the complete story object in JSX format
2. Write which criteria it meets and why
3. Append the draft to `arc-pending-stories.md` using the format in `arc-update-context.md`
4. Do NOT add it to tracker.jsx
5. Log "PENDING: [code]" in `arc-update-log.md`

If the development only touches one existing story: add it as a developing thread to that story, not as a new story.


---

## Step 6 — Update OVERVIEW

After all story updates, rewrite:

**OVERVIEW.summary**: 3-5 sentences capturing the current global situation. Lead with the most urgent story. Connect the stories that are actually connected right now. Present tense. No hedging.

**OVERVIEW.leaderboard**: For each story, update the `change` field with 1-2 sentences of the most significant recent development. Re-sort or re-rank if heat levels have shifted significantly.

---

## Step 7 — Validate

Before committing, verify the file is intact:

```bash
# Check the file can be parsed as JavaScript
node --input-type=module < tracker.jsx 2>&1 | head -5
```

Also verify manually:
- `export default function ARC` still exists
- All six story arrays still exist: `STORIES`, `AI_STORIES`, `WAR_STORIES`, `CANADA_STORIES`, `POWER_STORIES`, `CLIMATE_STORIES`
- No obviously broken string syntax

If validation fails: restore the original file, log the error, abort. Do not commit a broken file.

---

## Step 8 — Commit and Push

```bash
git add tracker.jsx arc-update-log.md arc-pending-stories.md 2>/dev/null
git commit -m "ARC update $(date +%Y-%m-%d) — [list updated story codes]"
git push origin main
```

If push fails: log the error, do not retry more than once.

---

## Step 9 — Log the Run

Append to `arc-update-log.md`:

```
## [DATE] [TIME UTC]
Run type: [12hr / 24hr / 48hr]
Stories queried: [count]
Stories updated: [list of codes]
Stories unchanged: [list of codes]
Stories skipped (error): [list of codes or NONE]
Retirements: [list of codes or NONE]
Pending new stories: [list of proposed codes or NONE]
Commit: [hash]
```
