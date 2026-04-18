# ARC Pipeline — How It Works

This is a fully automated GitHub Actions pipeline. It does not require manual intervention.

---

## Architecture

| Tier | Model | Role | Cost |
|------|-------|------|------|
| 1 | Gemini 2.5 Flash + Google Search | Search Google News for each story | Free |
| 2 | Llama 3.3 70B (OpenRouter) | Format search results → update story fields in tracker.js | Free |
| 3 | DeepSeek V3 (OpenRouter) | Synthesize OVERVIEW.summary + leaderboard change texts | Paid |

---

## What Runs When

The queue is built dynamically from story heat levels in STORIES[]:

| Heat | Frequency |
|------|-----------|
| 5 | Daily (1-day search window) |
| 4 | Daily (2-day search window) |
| 3 | Mondays only (7-day window) |
| 1–2 | 1st and 15th of month (14-day window) |

Scheduled: weekdays at 10:00 UTC. Can also be triggered manually via GitHub Actions (workflow_dispatch).

---

## Flow

1. `run_pipeline.sh` calls `arc_pipeline.py --mode queue` to get today's story queue
2. For each story: `arc_pipeline.py --code X --title "Y" --days N [--war]`
   - Tier 1: Gemini searches Google News → returns bullet-point facts
   - Tier 2: Llama reads facts + existing story object → writes updated story object to tracker.js
   - Failures are skipped (logged, not fatal)
   - Each run retries 3 times with backoff before skipping
3. After all stories: `arc_pipeline.py --mode synthesize`
   - DeepSeek reads today's changes → outputs `{summary, leaderboard_changes}` as JSON
   - Python writes summary to OVERVIEW.summary, syncs leaderboard heat/status/change
4. CI commits `tracker.js` and `arc-run-changes.json` and pushes once (triggers Vercel redeploy)

---

## Files

| File | Purpose |
|------|---------|
| `tracker.js` | The live data file served by Vercel. Pipeline writes here. |
| `arc-run-changes.json` | Tracks `written[]` and `skipped[]` codes for the current run |
| `arc-update-context.md` | Field rules passed to the format model |
| `arc-abort.md` | Written only on hard abort (missing API keys, etc.) |

---

## Error Behavior

- **Single story search fails** → logged as skipped, pipeline continues
- **Single story format fails** → logged as skipped, pipeline continues
- **Tier 3 synthesis fails** → logged, existing OVERVIEW kept, pipeline still commits
- **Hard abort** → only if GEMINI_API_KEY or OPENROUTER_KEY is missing

---

## Adding / Retiring Stories

Stories are defined in `STORIES[]` in `tracker.js`. The queue builder reads heat from STORIES[] automatically.

To add a story: add an object to STORIES[] with all required fields (id, cat, code, heat, status, updated, title, sub, card, bg, summary, confirmed, developing, insights, implications, risks, questions, connections, canada, people).

To retire a story: set `status: "archived"`, `heat: 0`, move to ARCHIVED_STORIES[].

---

## Push Timing

All story writes happen in memory during the pipeline run. A **single git commit + push** happens at the end, triggering one Vercel redeploy. There is no push after individual stories.
