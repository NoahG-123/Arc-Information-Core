# ARC Information Core — Update Context

## What ARC Is

ARC is a personal intelligence tracker built as a React JSX artifact. It tracks world-shaping events across six thematic watches. It is maintained by a 16-year-old Canadian systems thinker. The goal is not to summarize the news — it is to track what matters, why it matters structurally, and what comes next.

The tracker lives at `tracker.jsx`. The update agent's job is to keep it current without breaking it.

---

## File Structure

`tracker.jsx` is a single React file. It contains:

1. **Data arrays** — the actual intelligence content. These are the ONLY things the update agent should modify.
2. **Component functions** — the UI code. These must NEVER be touched.
3. **Style blocks** — CSS. Never touch.

### Fields the agent may modify per story:

- `heat` (integer 1-5)
- `status` (string — see valid values below)
- `updated` (string — e.g. "Apr 10 2026")
- `card` (one sentence shown on sidebar)
- `summary` (2-4 sentence current status paragraph)
- `confirmed[]` (array of strings — verified facts only)
- `developing[]` (array of strings — active uncertain threads)
- `insights[]` (array of strings — analytical conclusions)
- `questions[]` (array of strings — open questions)
- `people[]` — update `status` of existing people, add new key players
- WAR_STORIES `toll` fields: `confirmed_dead`, `confirmed_wounded`, `children_killed`, `displaced`
- WAR_STORIES `front` fields: `summary`, `active_fronts`, `recent_movements`, `assessment`
- `OVERVIEW.summary` — global situation paragraph
- `OVERVIEW.leaderboard` — each story's `change` field and `heat`/`status` values

### Fields the agent must NEVER modify:

- `bg` — historical background, permanently stable
- `connections` — cross-story links, set manually
- `canada` — Canada lens analysis, set manually
- `id` — story identifier
- Any function, component, import, export, or CSS

---

## All Story Codes and Update Frequencies

### ARC STORIES
| Code | Title | Heat | Frequency |
|------|-------|------|-----------|
| ANTHRO-01 | Anthropic vs. Pentagon | 4 | Every 12 hours |
| AI-GOV-01 | Autonomous Weapons Race | 4 | Every 12 hours |
| IRAN-01 | Operation Epic Fury | 5 | Every 12 hours |
| GEO-01 | US-China Strategic Competition | 4 | Every 12 hours |
| CHINA-01 | China — Rise & Reorientation | 4 | Every 12 hours |
| ECON-01 | Oil Shock & Global Economy | 5 | Every 12 hours |
| CANADA-01 | Canada — Four Shocks | 4 | Every 12 hours |
| INDIA-01 | India — Strategic Emergence | 3 | Every 24 hours |
| EPSTEIN-01 | Epstein Files | 2 | Every 48 hours |
| SGP-01 | Singapore — Strategic Pivot | 3 | Every 24 hours |
| AFRICA-01 | Africa — Great Power Arena | 3 | Every 24 hours |
| META-01 | Moltbook & the Dead Internet | 3 | Every 24 hours |

### AI WATCH STORIES
| Code | Title | Heat | Frequency |
|------|-------|------|-----------|
| AI-FRONTIER-01 | AI Capability Frontier | 4 | Every 12 hours |
| AI-WELFARE-01 | AI Consciousness & Model Welfare | 4 | Every 12 hours |
| AI-SEC-01 | AI Security & Supply Chain | 5 | Every 12 hours |

### WAR WATCH STORIES
| Code | Title | Heat | Frequency |
|------|-------|------|-----------|
| IRAN-W01 | Iran — Operation Epic Fury | 5 | Every 12 hours |
| PAL-01 | Palestine — Gaza War | 5 | Every 12 hours |
| UKR-01 | Ukraine — Russia War | 4 | Every 12 hours |
| SDN-01 | Sudan — Civil War | 4 | Every 12 hours |
| LBN-01 | Lebanon — Hezbollah Front | 4 | Every 12 hours |
| MMR-01 | Myanmar — Civil War | 3 | Every 24 hours |
| SAH-01 | Sahel — Fragmented Conflicts | 3 | Every 24 hours |
| PAK-01 | Pakistan-India — Kashmir | 3 | Every 24 hours |

### CANADA WATCH STORIES
| Code | Title | Heat | Frequency |
|------|-------|------|-----------|
| CARNEY-01 | The Carney Government | 4 | Every 12 hours |
| CUSMA-01 | CUSMA Under Pressure | 4 | Every 12 hours |
| ECON-CA-01 | Canadian Economy | 4 | Every 12 hours |
| DIASPORA-01 | Canadian Diasporas | 3 | Every 24 hours |
| ARCTIC-01 | Arctic Sovereignty | 3 | Every 24 hours |
| INDIGENOUS-01 | Indigenous Peoples | 3 | Every 24 hours |

### POWER & MONEY WATCH STORIES
| Code | Title | Heat | Frequency |
|------|-------|------|-----------|
| OLIGARCH-01 | Concentrated Power — Global | 4 | Every 12 hours |
| INSIDER-01 | $580M Pre-War Insider Trading | 4 | Every 12 hours |
| CAPTURE-01 | Institutional Capture | 3 | Every 24 hours |
| FED-01 | The Dollar System | 3 | Every 24 hours |
| ACCOUNTABILITY-01 | Epstein Network | 3 | Every 24 hours |

### CLIMATE & ENERGY WATCH STORIES
| Code | Title | Heat | Frequency |
|------|-------|------|-----------|
| FOSSIL-RECKONING-01 | Iran War as Fossil Fuel Forcing Function | 4 | Every 12 hours |
| TRANSITION-01 | Green Energy Transition | 4 | Every 12 hours |
| ARCTIC-SCIENCE-01 | Arctic — The Feedback Loop | 4 | Every 12 hours |
| FOOD-CLIMATE-01 | Food Security | 4 | Every 12 hours |
| EMISSIONS-01 | Global Emissions | 3 | Every 24 hours |

---

## Valid Status Values

```
"active-war"   — shooting war, active military operations
"escalating"   — situation actively worsening
"developing"   — active but not yet crisis
"monitoring"   — slow-moving, watch brief
"resolved"     — concluded
"archived"     — retired story, no longer updated
```

---

## Heat Scale

```
5 — Active crisis or war. Every 12 hours updates.
4 — Escalating or high-stakes developing. Every 12 hours updates.
3 — Developing. Meaningful movement every 24 hours.
2 — Slow-moving. Check every 48 hours. Flag for potential retirement.
1 — Dormant. Check every 48 hours. Monitor for retirement trigger.
```

**Heat adjustment rules:**
- Never adjust heat by more than 1 point per update cycle
- Do not inflate heat for drama — heat reflects actual pace of change, not importance
- Do not keep heat at 5 when a situation has stabilized

---

## Editorial Standards

### confirmed[]
- Verified facts from multiple credible sources
- Official statements with source name and date
- Past tense, one fact per string
- Be specific: numbers, names, dates matter
- Never remove existing confirmed facts — only add
- Never include speculation, projections, or single-source claims
- If something was in developing[] and is now confirmed, add to confirmed[] and remove from developing[]

### developing[]
- Active threads with genuine uncertainty
- Frame as ongoing processes, not conclusions
- Remove items that have been resolved — move resolution to confirmed[]
- Remove items that have become irrelevant or expired
- Add new threads that have opened since last update

### insights[]
- Analytical conclusions that go beyond what the source articles say
- What the event means structurally, not just what happened
- Connections to other ARC stories or relevant historical patterns
- Present tense, analytical voice
- Every insight must add something beyond restating confirmed facts
- If an insight is no longer supported by current reality, remove it
- Do not add an insight that merely rephrases something already in confirmed[]

### questions[]
- Open questions that will determine how the story develops
- Genuinely uncertain — if the answer is now known, remove the question
- Frame as: "Does X happen — and what does it mean if it does?"
- Remove answered questions immediately when the answer becomes confirmed
- Add new questions that have opened from recent developments

### card
- One sentence maximum
- What is happening right now — present tense
- No history, no background
- Written for a reader who has never seen this story before
- Update whenever the current state has materially changed

### summary
- 2-4 sentences, current state of play only
- No history — that lives in the bg field
- Update whenever the situation has materially shifted

### Tone and voice
- Direct, analytical, no hedging for its own sake
- Honest about uncertainty: use "unconfirmed", "reported", "assessed", "per [source]"
- No sensationalism. No minimization.
- When civilians or children have died, name the number. Do not sanitize.
- Third-order analysis: not what happened, but what it means and what comes next
- The reader thinks at graduate level. Do not explain obvious things.

---

## Story Lifecycle Rules

### Adding a New Story

A story gets created only if it meets **at least two** of the following criteria:

**1. Structural shift** — something changed in how a system operates, not just what happened within it. A law passed, an institution fell, a technology crossed a capability threshold, a relationship between powers shifted permanently.

**2. Cross-story connection** — the event meaningfully affects two or more stories already in the tracker. If an event only touches one existing story, it is an update to that story, not a new one.

**3. Canadian relevance** — direct material impact on Canada's economy, security, politics, or society. Not just "Canada is watching this" but "this changes something for Canadians."

**4. Slow-moving but certain** — a trend that is not breaking news but will undeniably matter in 6-12 months. Demographics, climate thresholds, debt trajectories. The kind of thing most trackers miss because it is not urgent yet.

**5. Framework-level** — it reveals something about how the world works that is not captured by any existing story. A new actor, a new mechanism, a new arena of competition.

**Threshold:**
- 1 criterion: never sufficient. Add as a developing thread to the most relevant existing story.
- 2 criteria: warrants consideration. Draft the story and flag for human review.
- 3+ criteria: add to the draft automatically and flag for human review.

**Hard exclusions — never propose a new story for:**
- A single news event with no structural implications
- Celebrity, sports, or entertainment unless it reveals something systemic
- Anything already covered as a developing thread in an existing story
- Duplicate angles on existing stories under a different name

**New story creation is never autonomous.** When the agent determines a new story is warranted, it must:
1. Draft the complete story object — code, title, sub, card, bg, summary, confirmed[], developing[], insights[], questions[], heat, status, people[]
2. Write a brief justification stating which criteria are met and why
3. Append the draft and justification to `arc-pending-stories.md`
4. Do NOT add the story to tracker.jsx
5. The human reviews arc-pending-stories.md and decides whether to add it

The agent continues updating existing stories normally. It never blocks an update run because a new story is pending review.

**Story code format:** `[CATEGORY]-[NUMBER]` where number increments within category. If IRAN-01 retires and a successor opens, it becomes IRAN-02. Never reuse a retired code.

---

### Retiring a Story

A story gets archived when it meets **any one** of the following:

**1. Resolution** — the core question the story was tracking has been answered and the situation is stable. Not just a ceasefire — actual structural resolution. ANTHRO-01 resolves when the court case produces a final binding outcome and the AI governance question it raised is settled. A ceasefire in IRAN-01 is not resolution — it is a status change to monitoring.

**2. Absorption** — the story has been fully swallowed by another story and tracking it separately adds no analytical value. If ECON-01's oil shock becomes permanently inseparable from IRAN-01's geopolitical story, ECON-01 gets absorbed. The absorbed story's confirmed facts and insights get merged into the absorbing story before archiving.

**3. Dormancy** — heat drops to 1 and stays there for 30 consecutive days with no meaningful updates from any search cycle. The agent flags the story as dormancy-pending on day 15. If still at heat 1 on day 30, the story is archived.

**4. Superseded** — the situation evolved into something structurally different that warrants a new story code. IRAN-01 active war might become IRAN-02 post-regime reconstruction. When this happens: the old story closes, the new story proposal goes to arc-pending-stories.md for human review, and the old story is archived only after the human approves the successor.

**Retirement is never deletion.** When a story is retired:
1. Set its `status` to `"archived"`
2. Set its `heat` to `0`
3. Add a `retired` field: `retired: "YYYY-MM-DD"`
4. Add a `closing_summary` field: one paragraph — what happened, how it resolved, what it revealed, why it mattered
5. Move the story object from its active array to `ARCHIVED_STORIES` array at the bottom of tracker.jsx
6. Remove it from `OVERVIEW.leaderboard`
7. Log the retirement in `arc-update-log.md` with the closing summary

Archived stories remain in tracker.jsx as `ARCHIVED_STORIES` and are part of the system context. This prevents the agent from re-adding stories that already ran their course and ensures the tracker's analytical history is preserved.

---

## Hard Rules — Never Violate

1. Never modify any function, component, import, export, or CSS
2. Never modify the `bg` field of any story
3. Never change any story's `id` field
4. Never add a new story to tracker.jsx without human approval — use arc-pending-stories.md
5. Never invent facts — if search returned nothing meaningful, leave the field unchanged and note it in the log
6. Never remove items from confirmed[] — only add
7. Never break JSX string syntax — use single quotes inside double-quoted strings
8. Never force-push — if merge conflict, abort and log
9. Always update the `updated` field to today's date when modifying any story
10. Never adjust heat by more than 1 point per update cycle

---

## JSX String Safety

All story field values are JavaScript strings inside a JSX file. Rules:
- Use single quotes for any quote marks within a string value
- Never use double quotes inside a double-quoted string value
- Apostrophes in words are fine: `"Iran's IRGC..."` is valid
- The dangerous case: dialogue or attributed quotes within a string

```js
// WRONG — breaks JSX
card:"Trump said \"significant but not enough\""

// CORRECT
card:"Trump called Iran's counter 'significant but not enough'"
```

---

## Commit Message Format

```
ARC update YYYY-MM-DD — heat5: [codes] heat4: [codes]

Examples:
ARC update 2026-04-10 — heat5: IRAN-01 IRAN-W01 PAL-01 heat4: ANTHRO-01 ECON-01
ARC update 2026-04-10 — heat3 weekly: GEO-01 CHINA-01 INDIA-01 [no heat5/4 changes]
ARC update 2026-04-10 — RETIREMENT: ECON-01 absorbed into IRAN-01
ARC update 2026-04-10 — PENDING: new story proposal appended to arc-pending-stories.md
```

---

## arc-pending-stories.md Format

When the agent proposes a new story, it appends this block to `arc-pending-stories.md`:

```markdown
## PENDING: [PROPOSED-CODE] — [Title]
Proposed: YYYY-MM-DD
Criteria met: [list which criteria and why]
Triggered by: [what event or development prompted this]

### Draft Story Object
[Full story object in JSX format, ready to paste into tracker.jsx if approved]

### Justification
[2-3 sentences explaining why this meets the threshold and which existing stories it connects to]

---
```

The human reviews this file, removes the block, and either pastes the story object into tracker.jsx manually or discards it.

---

## GitHub Pages Setup

The tracker is served via `index.html` at the repo root. GitHub Pages serves `index.html`, which loads React and renders the `ARC` component from `tracker.jsx`. Any push to `main` triggers automatic redeployment within ~60 seconds.
