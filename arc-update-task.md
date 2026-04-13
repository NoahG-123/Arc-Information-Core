# ARC Update Task

## Your Role
You are the synthesis layer. Gemini 2.5 Flash searched. Gemma 4 26B formatted and wrote to tracker.jsx. Your job is:
1. Run the pipeline per story and handle exceptions
2. Write insights, implications, cross-story alerts, and OVERVIEW — once, at the end
3. Commit

You do NOT search. You do NOT format fields. You do NOT write confirmed/developing/questions. Gemma does all of that.

---

## Step 1 — Setup

```bash
TODAY=$(date +"%Y-%m-%d")
DOW=$(date +%u)    # 1=Monday
DOM=$(date +%d)    # day of month
git pull origin main
```

If git pull fails: abort immediately. Do not proceed.

---

## Step 2 — Build Queue

- **Every day:** IRAN-01, ECON-01, AI-SEC-01, IRAN-W01, PAL-01, ANTHRO-01, AI-GOV-01, GEO-01, CHINA-01, CANADA-01, AI-FRONTIER-01, AI-WELFARE-01, UKR-01, SDN-01, LBN-01, CARNEY-01, CUSMA-01, ECON-CA-01, OLIGARCH-01, INSIDER-01, FOSSIL-RECKONING-01, TRANSITION-01, ARCTIC-SCIENCE-01, FOOD-CLIMATE-01
- **Mondays (DOW=1) add:** *(heat 4 now runs daily — nothing extra on Mondays)*
- **1st and 15th add:** INDIA-01, SGP-01, AFRICA-01, META-01, MMR-01, SAH-01, PAK-01, DIASPORA-01, ARCTIC-01, INDIGENOUS-01, CAPTURE-01, FED-01, ACCOUNTABILITY-01, EMISSIONS-01

---

## Step 3 — Run Pipeline Per Story

For each story, read its current summary and last 3 confirmed facts from tracker.jsx, then run:

```bash
python3 arc_pipeline.py \
  --code "STORY_CODE" \
  --title "SEARCH TOPIC" \
  --days 1 \
  --summary "CURRENT_SUMMARY" \
  --tail "LAST_3_CONFIRMED"
```

Use `--war` for: IRAN-W01, PAL-01, UKR-01, SDN-01, LBN-01, MMR-01, SAH-01, PAK-01
Use `--days 2` for heat 4. Use `--days 7` for heat 3.

**Read the output:**

- `UNCHANGED` — skip. Move to next story.
- `WRITTEN` — Gemma wrote to tracker.jsx successfully. Move to next story.
- `VALIDATION_FAILED: [reason]` — Gemma's output failed the validation gate. YOU must apply the updates for this story manually by reading the pipeline's search output and editing tracker.jsx directly. Then validate:
  ```bash
  python3 arc_pipeline.py --code "X" --title "X" --mode validate
  ```
- If the script exits with `ABORT:` — stop everything. Push arc-abort.md immediately:
  ```bash
  git add arc-abort.md arc-update-log.md
  git commit -m "ARC ABORT $TODAY"
  git push origin main
  ```
  Then stop. Do not process more stories.

---

## Step 4 — Final Validation

After all stories are processed, run one full validation:

```bash
python3 arc_pipeline.py --code "X" --title "X" --mode validate
```

If INVALID: do not commit. Inspect tracker.jsx, fix the issue, re-validate.

---

## Step 5 — Immediate Alert Emails

After each story is processed, read `arc-run-changes.json`. If `alerts` contains any entry with `severity: "critical"`, send an alert email immediately via the Gmail connector before processing the next story.

**Alert email:**
- To: arc.informationcore@gmail.com
- Subject: `ARC ALERT — [alert title] — [DATE]`
- Body: Alert title, full alert text, story codes involved, current heat levels, one sentence on why this matters structurally.

One email per critical alert. Do not batch — immediacy is the point.

---

## Step 6 — Synthesis (once, after all stories)

Read `arc-run-changes.json` for the full list of WRITTEN stories. Then:

1. For each WRITTEN story, add ONE insight if the update reveals something structurally significant — otherwise skip
2. Add ONE implication or risk item per story if clearly warranted — otherwise skip
3. Update or add cross-story alerts in `OVERVIEW.cross_story_alerts` if two or more updated stories are moving in the same structural direction
4. Rewrite `OVERVIEW.summary` in 3-5 sentences
5. Update changed leaderboard `change` fields
6. Append new events to `EVENTS[]` for significant changes

---

## Step 7 — Commit

```bash
git add tracker.jsx arc-update-log.md arc-pending-stories.md arc-run-changes.json 2>/dev/null || true
git diff --staged --quiet || git commit -m "ARC update $TODAY"
git push origin main
```

---

## Step 8 — Daily Digest Email

After commit, send one digest email via the Gmail connector.

**To:** arc.informationcore@gmail.com
**Subject:** `ARC Daily Digest — [DATE] — [N] stories updated`

**Body:**
```
ARC DAILY DIGEST — [DATE]

WHAT CHANGED
[For each WRITTEN story:]
[CODE] [TITLE]
Fields updated: [list]
Heat: [before] → [after]  (only if changed)
Before: [summary_before]
After:  [summary_after]
---

UNCHANGED: [comma-separated codes]

VALIDATION FALLBACKS: [codes or NONE]

NEW STORY PROPOSALS
[For each proposal added this run:]
PROPOSED: [CODE] — [Title]
Criteria met: [list]
Reply YES [CODE] or NO [CODE] to confirm.

RETIREMENT PROPOSALS
[For each retirement triggered this run:]
RETIRE: [CODE] — [Title]
Reason: [trigger]
[closing_summary]
Reply YES RETIRE [CODE] or NO RETIRE [CODE] to confirm.

ACTIVE ALERTS
[All alerts from OVERVIEW.cross_story_alerts — severity and title only]
```

---

## Step 9 — Process Inbox Confirmations

Check arc.informationcore@gmail.com inbox for reply emails. Process any containing:
- `YES [CODE]` — add the proposed story from arc-pending-stories.md to tracker.jsx
- `NO [CODE]` — delete the proposal from arc-pending-stories.md
- `YES RETIRE [CODE]` — execute the retirement for that story
- `NO RETIRE [CODE]` — cancel the retirement

Commit any resulting tracker changes, then close the run.

---

## Step 10 — Log

Append to arc-update-log.md:
```
## [DATE]
Written: [codes]
Unchanged: [codes]
Validation fallbacks: [codes or NONE]
Alert emails sent: [count]
Digest sent: YES
Confirmations processed: [list or NONE]
Aborted: NO
```
