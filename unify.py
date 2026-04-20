#!/usr/bin/env python3
"""
Unify tracker.jsx: merge all story arrays into STORIES with tab/featured metadata.
Phase 1: Data changes only.
Phase 2: UI fixes.
"""
import re, sys

with open('tracker.jsx', 'r', encoding='utf-8') as f:
    src = f.read()

# ---------------------------------------------------------------------------
# PHASE 1 — Add tab/featured fields to stories, merge into one STORIES array
# ---------------------------------------------------------------------------

# 1a. Add tab:"arc",featured:true, to each story in the original STORIES array
#     Each arc story starts with: id:N,cat:
#     We inject right after the opening { of each top-level story object.
#     Pattern: "  {\n    id:N," → inject tab/featured after id line
def add_arc_meta(m):
    return m.group(0).replace(
        'id:' + m.group(1) + ',',
        'id:' + m.group(1) + ',tab:"arc",featured:true,'
    )

# Match stories in STORIES block (numeric ids 1-12)
# Find STORIES section (lines 23-254)
stories_block_end = src.find('\n];\n\nconst AI_ALERTS')
assert stories_block_end != -1, "Could not find end of STORIES block"
stories_section = src[:stories_block_end + 3]  # up to and including ];

# Add tab/featured to each arc story — insert after `id:N,`
stories_section = re.sub(
    r'(?<=\n  \{\n    )(id:\d+,)',
    r'\1tab:"arc",featured:true,',
    stories_section
)

# 1b. Extract & transform each secondary array, then append to STORIES
# Helper: extract array body between `const NAME = [` and the matching `];`
def extract_array_body(name):
    """Return the content between 'const NAME = [\n' and '\n];'"""
    start = src.find(f'\nconst {name} = [\n')
    assert start != -1, f"Could not find {name}"
    start_bracket = src.find('[\n', start) + 2  # skip past `[\n`
    end_bracket = src.find('\n];', start_bracket)
    assert end_bracket != -1, f"Could not find end of {name}"
    return src[start_bracket:end_bracket]

def inject_after_id(body, tab, extra_fields=""):
    """
    Inject tab field (and optionally extra fields) right after the id field
    in each top-level story object.
    Pattern: `    id:"X...",` at start of story object.
    """
    # Match string ids like id:"W01", id:"F01", id:"C01", id:"P01", id:"CL01" etc.
    return re.sub(
        r'(    id:"[^"]+",)',
        r'\1' + f'tab:"{tab}",' + extra_fields,
        body
    )

EMPTY_FIELDS = 'connections:[],canada:null,implications:[],risks:[],'

# AI_STORIES
ai_body = extract_array_body('AI_STORIES')
ai_body = inject_after_id(ai_body, 'ai', EMPTY_FIELDS)

# WAR_STORIES
war_body = extract_array_body('WAR_STORIES')
war_body = inject_after_id(war_body, 'war', EMPTY_FIELDS)

# CANADA_STORIES — already have connections/canada, just need implications/risks
canada_body = extract_array_body('CANADA_STORIES')
canada_body = inject_after_id(canada_body, 'canada', 'implications:[],risks:[],')

# POWER_STORIES
power_body = extract_array_body('POWER_STORIES')
power_body = inject_after_id(power_body, 'power', EMPTY_FIELDS)

# CLIMATE_STORIES
climate_body = extract_array_body('CLIMATE_STORIES')
climate_body = inject_after_id(climate_body, 'climate', EMPTY_FIELDS)

# 1c. Build new STORIES section: arc stories + all others before the closing ];
merged_stories_section = stories_section + ',\n' + ai_body + ',\n' + war_body + ',\n' + canada_body + ',\n' + power_body + ',\n' + climate_body

# 1d. Remove old const declarations for the merged arrays
# We keep the section from `\n];` (closing of STORIES) onward, but strip out
# the other const array declarations.
rest = src[stories_block_end + 3:]  # everything after STORIES ];

# Remove: const AI_STORIES = [ ... ];
# Remove: // WAR WATCH DATA comment + const WAR_STORIES = [ ... ];
# Remove: const CANADA_STORIES = [ ... ];
# Remove: const POWER_STORIES = [ ... ];
# Remove: const CLIMATE_STORIES = [ ... ];

def remove_const_array(text, name, comment_prefix=None):
    """Remove `const NAME = [ ... ];` block, optionally with a preceding comment block."""
    # Find the start
    if comment_prefix:
        start = text.find(comment_prefix)
        if start == -1:
            start = text.find(f'\nconst {name}')
    else:
        start = text.find(f'\nconst {name}')
    if start == -1:
        print(f"WARNING: could not find {name} to remove", file=sys.stderr)
        return text

    # Find the closing `\n];`
    bracket_start = text.find('[\n', start)
    end = text.find('\n];', bracket_start)
    end += 3  # include the `\n];`

    return text[:start] + text[end:]

WAR_COMMENT = '\n// ============================================================\n// WAR WATCH DATA'
CANADA_COMMENT = None  # Canada panel comment comes AFTER CANADA_STORIES
POWER_COMMENT = None
CLIMATE_COMMENT_BLOCK = '\n// ============================================================\n// CLIMATE & ENERGY WATCH DATA'

rest = remove_const_array(rest, 'AI_STORIES')
rest = remove_const_array(rest, 'WAR_STORIES', WAR_COMMENT)
rest = remove_const_array(rest, 'CANADA_STORIES')
rest = remove_const_array(rest, 'POWER_STORIES')
rest = remove_const_array(rest, 'CLIMATE_STORIES', CLIMATE_COMMENT_BLOCK)

# Clean up leftover empty comment blocks from WAR and CLIMATE removals
# (the === comment lines that were part of those comment blocks)
rest = re.sub(r'\n// ={60}\n// WAR WATCH DATA\n// ={60}\n', '\n', rest)
rest = re.sub(r'\n// ={60}\n// CLIMATE & ENERGY WATCH DATA\n// ={60}\n', '\n', rest)

# ---------------------------------------------------------------------------
# PHASE 2 — UI fixes
# ---------------------------------------------------------------------------

# 2a. WarWatchPanel: replace WAR_STORIES with local filter
# Add `const warStories = STORIES.filter(s=>s.tab==="war");` at top of component
# Replace all WAR_STORIES references inside the component with warStories
rest = rest.replace(
    'function WarWatchPanel() {\n  const [activeStory, setActiveStory] = useState("W01");',
    'function WarWatchPanel({ navTarget, clearNav }) {\n  const warStories = STORIES.filter(s=>s.tab==="war");\n  const [activeStory, setActiveStory] = useState("W01");'
)
# Replace all WAR_STORIES.xxx in WarWatchPanel body
# We need to be careful to only replace within that component's scope
# Since the component ends before the next `function`, we can do targeted replacements
rest = rest.replace('const activeWarCount = WAR_STORIES.filter(s=>s.status==="active-war").length;',
                    'const activeWarCount = warStories.filter(s=>s.status==="active-war").length;')
rest = rest.replace('const story = WAR_STORIES.find(s=>s.id===activeStory);',
                    'const story = warStories.find(s=>s.id===activeStory);')
rest = rest.replace('{WAR_STORIES.length} conflicts tracked',
                    '{warStories.length} conflicts tracked')
rest = rest.replace('{WAR_STORIES.filter(s=>s.status==="active-war").length}',
                    '{warStories.filter(s=>s.status==="active-war").length}')
# Sidebar story map in WarWatchPanel
rest = rest.replace('{WAR_STORIES.map(s=>{\n            const st2 = STATUS[s.status];',
                    '{warStories.map(s=>{\n            const st2 = STATUS[s.status];')

# Add useEffect for navTarget in WarWatchPanel (after selectStory definition)
rest = rest.replace(
    '  const selectStory = (id) => {\n    setActiveStory(id);\n    setTab("front");',
    '  React.useEffect(()=>{\n    if(navTarget&&navTarget.tab==="war"){selectStory(navTarget.id);clearNav();}\n  },[navTarget]);\n  const selectStory = (id) => {\n    setActiveStory(id);\n    setTab("front");'
)

# 2b. AIWatchPanel: replace AI_STORIES with local filter
rest = rest.replace(
    'function AIWatchPanel() {\n  const [activeStory, setActiveStory] = useState("F01");',
    'function AIWatchPanel({ navTarget, clearNav }) {\n  const aiStories = STORIES.filter(s=>s.tab==="ai");\n  const [activeStory, setActiveStory] = useState("F01");'
)
rest = rest.replace('  const story = AI_STORIES.find(s=>s.id===activeStory);',
                    '  const story = aiStories.find(s=>s.id===activeStory);')
rest = rest.replace('{AI_STORIES.map(s=>{\n            const sc2 = statusColors[s.status]||"#7ba7d4";',
                    '{aiStories.map(s=>{\n            const sc2 = statusColors[s.status]||"#7ba7d4";')
# Add useEffect for navTarget in AIWatchPanel (after selectStory definition)
rest = rest.replace(
    "  const selectStory = (id) => {\n    setActiveStory(id);\n    setTab(id===\"F03\"?\"alerts\":\"insights\");",
    '  React.useEffect(()=>{\n    if(navTarget&&navTarget.tab==="ai"){selectStory(navTarget.id);clearNav();}\n  },[navTarget]);\n  const selectStory = (id) => {\n    setActiveStory(id);\n    setTab(id==="F03"?"alerts":"insights");'
)

# 2c. CanadaWatchPanel: replace CANADA_STORIES with local filter
rest = rest.replace(
    'function CanadaWatchPanel() {\n  const [activeStory, setActiveStory] = useState("C01");',
    'function CanadaWatchPanel({ navTarget, clearNav }) {\n  const canadaStories = STORIES.filter(s=>s.tab==="canada");\n  const [activeStory, setActiveStory] = useState("C01");'
)
rest = rest.replace('  const story = CANADA_STORIES.find(s=>s.id===activeStory);',
                    '  const story = canadaStories.find(s=>s.id===activeStory);')
rest = rest.replace('{CANADA_STORIES.length} stories · domestic & foreign',
                    '{canadaStories.length} stories · domestic & foreign')
rest = rest.replace('{CANADA_STORIES.map(s=>{\n            const sc = STATUS[s.status].color;',
                    '{canadaStories.map(s=>{\n            const sc = STATUS[s.status].color;')
# Add useEffect for navTarget in CanadaWatchPanel (after selectStory def)
rest = rest.replace(
    '  const selectStory = (id) => {\n    setActiveStory(id);\n    setTab("insights");\n    if(mainRef.current && window.innerWidth <= 700) {\n      setTimeout(()=>{\n        const el = mainRef.current;\n        const top = el.getBoundingClientRect().top + window.scrollY - 56;\n        window.scrollTo({top, behavior:"smooth"});\n      }, 60);\n    }\n  };\n\n  return (\n    <div style={{display:"flex",flex:1,flexDirection:"column"}}>\n      {/* CANADA WATCH HEADER */}',
    '  React.useEffect(()=>{\n    if(navTarget&&navTarget.tab==="canada"){selectStory(navTarget.id);clearNav();}\n  },[navTarget]);\n  const selectStory = (id) => {\n    setActiveStory(id);\n    setTab("insights");\n    if(mainRef.current && window.innerWidth <= 700) {\n      setTimeout(()=>{\n        const el = mainRef.current;\n        const top = el.getBoundingClientRect().top + window.scrollY - 56;\n        window.scrollTo({top, behavior:"smooth"});\n      }, 60);\n    }\n  };\n\n  return (\n    <div style={{display:"flex",flex:1,flexDirection:"column"}}>\n      {/* CANADA WATCH HEADER */'
)

# 2d. GenericWatchPanel: add navTarget support
rest = rest.replace(
    'function GenericWatchPanel({ stories, color, headerLabel, headerSub, defaultStory, showScience }) {',
    'function GenericWatchPanel({ stories, color, headerLabel, headerSub, defaultStory, showScience, navTarget, clearNav, tabId }) {'
)
# Add useEffect for navTarget in GenericWatchPanel (after selectStory def)
rest = rest.replace(
    '  const selectStory = (id) => {\n    setActiveStory(id);\n    setTab("insights");\n    if(mainRef.current && window.innerWidth <= 700) {\n      setTimeout(()=>{\n        const el = mainRef.current;\n        const top = el.getBoundingClientRect().top + window.scrollY - 56;\n        window.scrollTo({top, behavior:"smooth"});\n      }, 60);\n    }\n  };\n\n  return (\n    <div style={{display:"flex",flex:1,flexDirection:"column"}}>\n      <div style={{padding:"10px 16px",borderBottom:"1px solid rgba(255,255,255,0.055)",background:"rgba(255,255,255,0.02)"',
    '  React.useEffect(()=>{\n    if(navTarget&&tabId&&navTarget.tab===tabId){selectStory(navTarget.id);clearNav();}\n  },[navTarget]);\n  const selectStory = (id) => {\n    setActiveStory(id);\n    setTab("insights");\n    if(mainRef.current && window.innerWidth <= 700) {\n      setTimeout(()=>{\n        const el = mainRef.current;\n        const top = el.getBoundingClientRect().top + window.scrollY - 56;\n        window.scrollTo({top, behavior:"smooth"});\n      }, 60);\n    }\n  };\n\n  return (\n    <div style={{display:"flex",flex:1,flexDirection:"column"}}>\n      <div style={{padding:"10px 16px",borderBottom:"1px solid rgba(255,255,255,0.055)",background:"rgba(255,255,255,0.02)"'
)

# 2e. ConnectionsTab: rename goToStory prop to navigate, use conn.code instead of linked.id
rest = rest.replace(
    'function ConnectionsTab({story, goToStory}) {',
    'function ConnectionsTab({story, navigate}) {'
)
rest = rest.replace(
    'onClick={()=>linked&&goToStory(linked.id)}',
    'onClick={()=>linked&&navigate(linked.code)}'
)

# 2f. ARC() component: add navTarget state, navigate function, pass to panels

# Fix header count
rest = rest.replace(
    '{STORIES.length} STORIES · {WAR_STORIES.length} CONFLICTS',
    '{STORIES.filter(s=>s.featured).length} STORIES · {STORIES.filter(s=>s.tab==="war").length} CONFLICTS'
)

# Fix top tab bar active-war badge
rest = rest.replace(
    '{WAR_STORIES.filter(s=>s.status==="active-war").length}',
    '{STORIES.filter(s=>s.tab==="war"&&s.status==="active-war").length}'
)

# Fix ConnectionsTab usage in ARC stories detail
rest = rest.replace(
    '{tab==="connections"&&<ConnectionsTab story={story} goToStory={goToStory}/>}',
    '{tab==="connections"&&<ConnectionsTab story={story} navigate={navigate}/>}'
)

# Fix ARC sidebar STORIES list to only show arc tab stories
rest = rest.replace(
    '                const list = STORIES.filter(s=>s.cat===cat.id);',
    '                const list = STORIES.filter(s=>s.tab==="arc"&&s.cat===cat.id);'
)

# Add navTarget state and navigate function to ARC() component
# Insert after `const arcMainRef = React.useRef(null);`
rest = rest.replace(
    '  const arcMainRef = React.useRef(null);\n\n  const story = STORIES.find(s=>s.id===active);',
    '  const arcMainRef = React.useRef(null);\n  const [navTarget, setNavTarget] = useState(null);\n  const clearNav = () => setNavTarget(null);\n\n  const navigate = (code) => {\n    const s = STORIES.find(st=>st.code===code);\n    if(!s) return;\n    if(s.tab==="arc") {\n      setActive(s.id);\n      setTab("insights");\n      setView("stories");\n      scrollToMain(arcMainRef);\n    } else {\n      setMainTab(s.tab);\n      setNavTarget({tab:s.tab, id:s.id});\n    }\n  };\n\n  const story = STORIES.find(s=>s.id===active);'
)

# Keep goToStory for backward compat (used internally by overview leaderboard click)
# goToStory is already defined and works for arc stories, leave it

# Pass navTarget and clearNav to each panel
rest = rest.replace(
    '<AIWatchPanel/>',
    '<AIWatchPanel navTarget={navTarget} clearNav={clearNav}/>'
)
rest = rest.replace(
    '<WarWatchPanel/>',
    '<WarWatchPanel navTarget={navTarget} clearNav={clearNav}/>'
)
rest = rest.replace(
    '<CanadaWatchPanel/>',
    '<CanadaWatchPanel navTarget={navTarget} clearNav={clearNav}/>'
)

# Update GenericWatchPanel calls to pass navTarget, clearNav, tabId
rest = rest.replace(
    '''<GenericWatchPanel
            stories={POWER_STORIES}
            color={POWER_COLOR}
            headerLabel="⚖ POWER & MONEY WATCH"
            headerSub="Concentrated power, accountability, and mechanisms of impunity"
            defaultStory="P01"
            showScience={false}
          />''',
    '''<GenericWatchPanel
            stories={STORIES.filter(s=>s.tab==="power")}
            color={POWER_COLOR}
            headerLabel="⚖ POWER & MONEY WATCH"
            headerSub="Concentrated power, accountability, and mechanisms of impunity"
            defaultStory="P01"
            showScience={false}
            navTarget={navTarget}
            clearNav={clearNav}
            tabId="power"
          />'''
)
rest = rest.replace(
    '''<GenericWatchPanel
            stories={CLIMATE_STORIES}
            color={CLIMATE_COLOR}
            headerLabel="◉ CLIMATE & ENERGY WATCH"
            headerSub="The slow emergency — science, transition, and the Iran war forcing function"
            defaultStory="CL01"
            showScience={true}
          />''',
    '''<GenericWatchPanel
            stories={STORIES.filter(s=>s.tab==="climate")}
            color={CLIMATE_COLOR}
            headerLabel="◉ CLIMATE & ENERGY WATCH"
            headerSub="The slow emergency — science, transition, and the Iran war forcing function"
            defaultStory="CL01"
            showScience={true}
            navTarget={navTarget}
            clearNav={clearNav}
            tabId="climate"
          />'''
)

# 2g. Phase 3: ARC leaderboard uses featured stories
# Fix STORIES used in ARC sidebar overview (leaderboard is OVERVIEW.leaderboard — unchanged)
# Fix STORIES used in sidebar stories view (already done above with tab==="arc" filter)
# No change needed to OVERVIEW.leaderboard — that's a static editorial object

# ---------------------------------------------------------------------------
# Write result
# ---------------------------------------------------------------------------
result = merged_stories_section + rest

with open('tracker.jsx', 'w', encoding='utf-8') as f:
    f.write(result)

print("Done! tracker.jsx unified.")
