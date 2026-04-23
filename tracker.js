const {
  useState
} = React;
const OVERVIEW = {
  summary: "The Iran conflict remains at peak intensity with Tehran's rejection of ceasefire terms and continued infrastructure strikes, while global oil markets stabilize slightly post-Strait reopening. AI infrastructure emerges as a critical battleground with Iran's explicit threats against OpenAI's UAE datacenter. Anthropic's legal battle with the Pentagon escalates as the DOJ prepares 9th Circuit arguments, and China demonstrates strategic resilience despite regional instability. Canada faces compounded economic shocks from tariffs, oil volatility, and CUSMA uncertainty.",
  leaderboard: [{
    code: "IRAN-01",
    title: "Operation Epic Fury",
    change: "Iran maintains maximalist demands and continues strikes on Kharg Island, rejecting ceasefire terms outright.",
    heat: 5,
    status: "active-war"
  },
  {
    code: "ECON-01",
    title: "Oil Shock and Global Economy",
    change: "Oil prices drop to $87/barrel post-Strait reopening, but IMF warns of potential 2% global growth decline.",
    heat: 5,
    status: "escalating"
  },
  {
    code: "ANTHRO-01",
    title: "Anthropic vs. Pentagon",
    change: "DOJ deadline for 9th Circuit arguments set for April 30, with multiple amicus briefs filed supporting Anthropic.",
    heat: 3,
    status: "developing"
  },
  {
    code: "GEO-01",
    title: "US-China Strategic Competition",
    change: "Trump-Xi summit delayed. China learning from Iran war re: Taiwan. US burned 25% of THAAD interceptors in one month. Trump delayed Taiwan arms sale after Xi call.",
    heat: 4,
    status: "developing"
  },
  {
    code: "CHINA-01",
    title: "China — Rise & Reorientation",
    change: "China maintains 5% GDP growth despite conflict, leveraging strategic petroleum reserves and deepening regional economic partnerships.",
    heat: 4,
    status: "developing"
  },
  {
    code: "AI-GOV-01",
    title: "Autonomous Weapons Race",
    change: "Anthropic injunction reframes the story — courts may be the governance mechanism. 11,000 US munitions expended in 30 days on a second-tier adversary. Stockpile math alarming.",
    heat: 4,
    status: "escalating"
  },
  {
    code: "AI-SEC-01",
    title: "AI Security & Supply Chain",
    change: "IRGC escalates threats against OpenAI's UAE datacenter, releasing precise satellite imagery of the facility.",
    heat: 5,
    status: "escalating"
  },
  {
    code: "CANADA-01",
    title: "Canada — Four Shocks Simultaneously",
    change: "4th major shock since 2019: tariffs + oil shock + CUSMA uncertainty + inflation. Oil windfall for Alberta mixed with inflation risk nationally.",
    heat: 4,
    status: "developing"
  }],
  cross_story_alerts: [
  {
    codes: ["IRAN-01", "AI-SEC-01"],
    date: "Apr 23 2026",
    title: "Iran-UAE AI Infrastructure War",
    alert: "Iran's explicit threats against OpenAI's UAE datacenter escalate the conflict into the AI domain, creating a new front that risks global AI infrastructure and could trigger retaliatory cyberattacks on Iranian systems.",
    severity: "high"
  },
  {
    codes: ["GEO-01", "CHINA-01"],
    date: "Apr 23 2026",
    title: "China-Taiwan Arms Delay",
    alert: "Trump's delay of Taiwan arms sales after Xi call signals a potential shift in US-China strategic calculus, reducing immediate tensions but potentially emboldening China's regional ambitions.",
    severity: "medium"
  }
]
};
const EVENTS = [
{
  date: "Apr 23 2026",
  code: "IRAN-01",
  type: "HEAT_CHANGE",
  content: "Heat maintained at 5 as Iran submits 10-point maximalist counter and strikes Kharg Island before deadline."
},
{
  date: "Apr 23 2026",
  code: "AI-SEC-01",
  type: "NEW_FACT",
  content: "IRGC threatens annihilation of OpenAI's UAE datacenter, releasing precise satellite imagery of the facility."
},
{
  date: "Apr 23 2026",
  code: "ANTHRO-01",
  type: "STATUS_CHANGE",
  content: "Judge grants preliminary injunction, ruling Pentagon designation as First Amendment retaliation."
},
{
  date: "Apr 23 2026",
  code: "ECON-01",
  type: "NEW_FACT",
  content: "Brent crude peaked at $126/barrel, with potential supply losses doubling to 10M bpd mid-April."
},
{
  date: "Apr 23 2026",
  code: "GEO-01",
  type: "STATUS_UPDATE",
  content: "Trump delays Taiwan arms sale after Xi call, signaling strategic concession trade with China."
},
{
  date: "Apr 23 2026",
  code: "AI-SEC-01",
  type: "ALERT",
  content: "Claude Code npm supply chain attack detected with malicious axios versions containing Remote Access Trojan."
},
{
  date: "Apr 23 2026",
  code: "IRAN-01",
  type: "HEAT_CHANGE",
  content: "Heat maintained at 5. 8pm ET deadline arrived — Iran submitted 10-point maximalist counter. Kharg Island struck before deadline."
},
{
  date: "Apr 23 2026",
  code: "AI-SEC-01",
  type: "NEW_FACT",
  content: "IRGC threatened complete annihilation of Stargate UAE ($30B OpenAI/Nvidia/Oracle). Released satellite imagery of previously undisclosed facility location."
},
{
  date: "Apr 22 2026",
  code: "IRAN-01",
  type: "HEAT_CHANGE",
  content: "Heat maintained at 5 as Iran submits 10-point maximalist counter and strikes Kharg Island before deadline."
},
{
  date: "Apr 22 2026",
  code: "AI-SEC-01",
  type: "NEW_FACT",
  content: "IRGC threatens annihilation of OpenAI's UAE datacenter, releasing precise satellite imagery of the facility."
},
{
  date: "Apr 22 2026",
  code: "ANTHRO-01",
  type: "STATUS_CHANGE",
  content: "Judge grants preliminary injunction, ruling Pentagon designation as First Amendment retaliation."
},
{
  date: "Apr 22 2026",
  code: "ECON-01",
  type: "NEW_FACT",
  content: "Brent crude peaked at $126/barrel, with potential supply losses doubling to 10M bpd mid-April."
},
{
  date: "Apr 22 2026",
  code: "GEO-01",
  type: "STATUS_UPDATE",
  content: "Trump delays Taiwan arms sale after Xi call, signaling strategic concession trade with China."
},
{
  date: "Apr 22 2026",
  code: "AI-SEC-01",
  type: "ALERT",
  content: "Claude Code npm supply chain attack detected with malicious axios versions containing Remote Access Trojan."
},
{
  date: "Apr 21 2026",
  code: "IRAN-01",
  type: "HEAT_CHANGE",
  content: "Heat maintained at 5. 8pm ET deadline arrived — Iran submitted 10-point maximalist counter. Kharg Island struck before deadline."
},
{
  date: "Apr 21 2026",
  code: "AI-SEC-01",
  type: "NEW_FACT",
  content: "IRGC threatened complete annihilation of Stargate UAE ($30B OpenAI/Nvidia/Oracle). Released satellite imagery of previously undisclosed facility location."
},
{
  date: "Apr 21 2026",
  code: "ANTHRO-01",
  type: "NEW_FACT",
  content: "AnthroPAC launched April 3 — employee-funded political action committee to fund pro-AI-safety candidates. First direct electoral move by any AI company."
},
{
  date: "Apr 21 2026",
  code: "GEO-01",
  type: "STATUS_UPDATE",
  content: "Trump delayed Taiwan arms sale after Xi call. China's restraint on Iran confirmed as the traded concession. Arms sale delay is real signal, not yet settled policy."
},
{
  date: "Apr 21 2026",
  code: "ECON-01",
  type: "NEW_FACT",
  content: "Brent peaked $126/barrel. Mid-April supply cliff modeled — SPR releases and exemptions running out. Potential doubling of daily supply loss to 10M bpd."
},
{
  date: "Apr 21 2026",
  code: "IRAN-W01",
  type: "NEW_FACT",
  content: "IRGC released satellite imagery of Stargate UAE facility, threatened annihilation conditional on US striking Iranian power plants."
},
{
  date: "Apr 21 2026",
  code: "AI-SEC-01",
  type: "ALERT",
  content: "Claude Code npm supply chain attack — malicious axios 1.14.1 and 0.30.4 published with Remote Access Trojan. Affected window: 00:21–03:29 UTC March 31."
},
{
  date: "Apr 21 2026",
  code: "ANTHRO-01",
  type: "STATUS_CHANGE",
  content: "Judge Rita Lin granted preliminary injunction — ruled Pentagon designation was First Amendment retaliation. Status changed to escalating."
},{
  date: "Apr 7 2026",
  code: "IRAN-01",
  type: "HEAT_CHANGE",
  content: "Heat maintained at 5. 8pm ET deadline arrived — Iran submitted 10-point maximalist counter. Kharg Island struck before deadline."
}, {
  date: "Apr 7 2026",
  code: "AI-SEC-01",
  type: "NEW_FACT",
  content: "IRGC threatened complete annihilation of Stargate UAE ($30B OpenAI/Nvidia/Oracle). Released satellite imagery of previously undisclosed facility location."
}, {
  date: "Apr 6 2026",
  code: "ANTHRO-01",
  type: "NEW_FACT",
  content: "AnthroPAC launched April 3 — employee-funded political action committee to fund pro-AI-safety candidates. First direct electoral move by any AI company."
}, {
  date: "Apr 5 2026",
  code: "GEO-01",
  type: "STATUS_UPDATE",
  content: "Trump delayed Taiwan arms sale after Xi call. China's restraint on Iran confirmed as the traded concession. Arms sale delay is real signal, not yet settled policy."
}, {
  date: "Apr 5 2026",
  code: "ECON-01",
  type: "NEW_FACT",
  content: "Brent peaked $126/barrel. Mid-April supply cliff modeled — SPR releases and exemptions running out. Potential doubling of daily supply loss to 10M bpd."
}, {
  date: "Apr 3 2026",
  code: "IRAN-W01",
  type: "NEW_FACT",
  content: "IRGC released satellite imagery of Stargate UAE facility, threatened annihilation conditional on US striking Iranian power plants."
}, {
  date: "Apr 2 2026",
  code: "ECON-01",
  type: "NEW_FACT",
  content: "Liberation Day April 2 global tariffs added pressure layer on top of oil shock. QatarEnergy declared force majeure on LNG shipments."
}, {
  date: "Mar 31 2026",
  code: "AI-SEC-01",
  type: "ALERT",
  content: "Claude Code npm supply chain attack — malicious axios 1.14.1 and 0.30.4 published with Remote Access Trojan. Affected window: 00:21–03:29 UTC March 31."
}, {
  date: "Mar 26 2026",
  code: "ANTHRO-01",
  type: "STATUS_CHANGE",
  content: "Judge Rita Lin granted preliminary injunction — ruled Pentagon designation was First Amendment retaliation. Status changed to escalating."
}, {
  date: "Mar 10 2026",
  code: "META-01",
  type: "NEW_FACT",
  content: "Meta acquired Moltbook. Agent-populated internet thesis now inside Meta's product infrastructure."
}, {
  date: "Mar 8 2026",
  code: "IRAN-W01",
  type: "NEW_FACT",
  content: "Mojtaba Khamenei installed as Supreme Leader — IRGC-installed, never held elected office. Hardliner consolidation confirmed."
}, {
  date: "Mar 1 2026",
  code: "AI-SEC-01",
  type: "NEW_FACT",
  content: "Iranian Shahed drones struck AWS ME-CENTRAL-1 UAE data centers — first confirmed state attack on commercial cloud infrastructure in history. Two of three availability zones offline 24+ hours."
}, {
  date: "Feb 28 2026",
  code: "IRAN-01",
  type: "STATUS_CHANGE",
  content: "Operation Epic Fury launched. Khamenei killed day one. Status changed to active-war. Heat set to 5."
}, {
  date: "Feb 28 2026",
  code: "ANTHRO-01",
  type: "NEW_FACT",
  content: "Trump ordered all federal agencies to cease using Anthropic. Pentagon designated Anthropic a national security supply chain risk."
}, {
  date: "Feb 5 2026",
  code: "AI-FRONTIER-01",
  type: "NEW_FACT",
  content: "Claude Opus 4.6 released with 1M token context at standard pricing. First formal model welfare assessments published by any major AI lab."
}];
const STORIES = [{
  id: 1,
  tab: "arc",
  featured: true,
  cat: "ai",
  code: "ANTHRO-01",
  heat: 3,
  status: "developing",
  updated: "Apr 22 2026",
  title: "Anthropic vs. Pentagon",
  sub: "Judge's Injunction Holds as Negotiations Begin",
  card: "Judge Rita Lin upheld injunction against Pentagon risk designation. NSA caught using banned Mythos AI. White House meeting signals potential thaw. Trump calls Anthropic 'shaping up' but deal terms remain unclear.",
  bg: "Anthropic built Claude — one of the most capable AI systems in the world. The Pentagon had a $200M contract to use Claude on classified networks via Palantir. The dispute: the Pentagon wanted unrestricted use including autonomous weapons and mass surveillance of US citizens. Anthropic refused both. The Trump administration responded by banning all federal agencies from Anthropic and labeling it a national security risk — a label normally reserved for companies linked to foreign adversaries.",
  summary: "Judge Rita Lin (N.D. Cal.) upheld her preliminary injunction against the Pentagon's supply chain risk designation, reaffirming First Amendment concerns. Despite the blacklist, NSA began using Anthropic's Mythos Preview model for cybersecurity operations. CEO Dario Amodei met with White House Chief of Staff Susie Wiles on April 17, signaling potential negotiations. Trump remarked Anthropic was 'shaping up' and hinted at possible deal, while Pentagon continues appeal to 9th Circuit. Project Glasswing expands Mythos access to select corporations despite unresolved legal battle.",
  confirmed: ["Trump ordered all federal agencies to cease using Anthropic products — executive order signed February 28 2026", "Pentagon designated Anthropic a supply chain risk to national security — label normally reserved for foreign-linked companies", "Judge Rita Lin (N.D. Cal.) granted preliminary injunction March 26 — ruled the designation was a textbook case of First Amendment retaliation", "DOJ filing deadline to 9th Circuit: April 30 2026", "Microsoft filed amicus brief supporting Anthropic — first major tech company to do so publicly", "Coalition of retired US generals filed amicus brief — argued AI safety constraints are operationally necessary, not obstructionist", "Catholic theologians group filed amicus brief — framed as moral autonomy of private institutions", "AnthroPAC launched April 3 — employee-funded PAC to support pro-AI-safety candidates", "Claude was still in use on Pentagon classified networks during Iran strikes — while the ban was in effect", "U.S. District Judge Rita Lin granted Anthropic an emergency reprieve from the Pentagon's supply chain risk designation on March 26 2026", "Anthropic CEO Dario Amodei met with White House Chief of Staff Susie Wiles on April 17 2026 to discuss resolving the Pentagon dispute", "The NSA began using Anthropic's Mythos Preview model despite the Pentagon's blacklist, according to reports on April 20 2026", "President Trump stated Anthropic was 'shaping up' and expressed openness to deal during CNBC interview on April 21 2026"],
  developing: ["Whether 9th Circuit upholds or reverses Lin injunction — DOJ filing due April 30", "Terms of potential White House-Anthropic deal framework", "Expansion of Mythos access through Project Glasswing to intelligence allies", "Congressional reaction to NSA's circumvention of Pentagon blacklist", "Impact of AnthroPAC on midterm election campaigns", "Whether Congress introduces new legislation reconciling military needs with AI ethics", "Whether other federal agencies follow NSA's lead in adopting Mythos", "Potential split between executive branch and judicial outcomes"],
  insights: ["NSA's operational adoption of Mythos Preview reveals institutional prioritization of capability over policy, creating internal executive branch friction", "Trump's 'shaping up' remarks indicate possible off-ramp from full confrontation while preserving rhetorical positioning", "Judge Lin's sustained injunction establishes judicial precedent that government retaliation against private sector ethics constraints may violate First Amendment", "Project Glasswing creates structural alternative to federal contracts by building commercial coalition around Mythos capabilities", "White House meeting suggests bifurcation strategy — military uses negotiated separately from intelligence/civilian applications", "The simultaneous appellate fight and backchannel negotiations reveal multi-track resolution strategy by both parties"],
  questions: ["Does NSA adoption strengthen Anthropic's negotiating position or provoke harder Pentagon line?", "Will Congressional oversight committees investigate NSA's end-run around Pentagon policy?", "What guardrails would be acceptable to both parties in potential deal?", "How does UK intelligence access to Mythos impact Five Eyes dynamics?", "Will judiciary rule on core constitutional issue or punt to political branches?", "Does Mythos capability edge force reassessment of risk calculus?", "Can Anthropic maintain dual track of commercial success and principled stand?"],
  connections: [{
    code: "AI-GOV-01",
    label: "Autonomous Weapons Race",
    how: "Outcome will determine whether ethical constraints are viable differentiator or competitive liability in military AI market"
  }, {
    code: "CYBER-04",
    label: "Zero-Day Explosion",
    how: "Mythos capabilities could radically alter vulnerability discovery landscape impacting cyber defense posture"
  }, {
    code: "GEO-01",
    label: "US-China Strategic Competition",
    how: "Resolution will signal whether US maintains ethical high ground or adopts 'whatever it takes' posture against adversaries"
  }],
  canada: "Canadian defense contractors monitor whether ethical constraints become market differentiator or disqualifier. CSE likely negotiating parallel Mythos access despite Ottawa's public AI ethics stance. Iranian-Canadian groups amplify concerns about military AI usage in Middle East operations.",
  people: [{
    "name": "Dario Amodei",
    "role": "CEO, Anthropic",
    "why": "Navigating between litigation, negotiation and commercialization of constrained AI",
    "alignment": "Anthropic",
    "status": "active"
  }, {
    "name": "Rita Lin",
    "role": "Federal Judge, N.D. Cal.",
    "why": "Judicial architect of First Amendment retaliation framework",
    "alignment": "Federal Judiciary",
    "status": "active"
  }, {
    "name": "Susie Wiles",
    "role": "White House Chief of Staff",
    "why": "Primary administration negotiator in backchannel talks",
    "alignment": "White House",
    "status": "active"
  }, {
    "name": "Chris Inglis",
    "role": "NSA Director",
    "why": "Drove operational adoption of Mythos despite policy ban",
    "alignment": "Intelligence Community",
    "status": "active"
  }, {
    "name": "Jack Clark",
    "role": "Co-founder, Anthropic",
    "why": "Leading Project Glasswing outreach to private sector",
    "alignment": "Anthropic",
    "status": "active"
  }],
  implications: ["Judicial branch increasingly involved in military procurement disputes as check on executive authority", "Private sector can build alternative power structures (Glasswing) outside government contracts", "Intelligence community operational needs may override policy directives", "Ethical constraints become marketable feature when backed by superior capability", "Bipartisan reform pressure may emerge from mismatched policy/operational realities"],
  risks: ["Administration could pursue face-saving deal while gutting AI ethics enforcement", "Judiciary may avoid constitutional ruling via narrow procedural decision", "Over-reliance on Mythos creates single point of failure in cyber defenses", "Foreign adversaries exploit transparency of US constraints discussion", "Commercial partners face secondary boycott threats from Pentagon contractors"]
}, {
  id: 2,
  tab: "arc", 
  featured: true,
  cat: "ai",
  code: "AI-GOV-01",
  heat: 4,
  status: "escalating",
  updated: "Apr 23 2026",
  title: "Autonomous Weapons Race",
  sub: "Global AI in Warfare — No Governance Framework",
  card: "China demonstrates full killchain autonomy while US burns through conventional stockpiles. Anthropic-Pentagon negotiations signal potential thaw but no systemic constraints. JARI 'Orca' shows China's unmanned naval dominance potential.",
  bg: "Autonomous weapons are weapons that can select and attack targets on their own without a human making the final decision. No international law specifically bans or regulates these. The United Nations has been discussing this since 2014 but has never passed a binding treaty. Multiple countries are building and deploying AI systems that assist in or fully automate military targeting decisions. The Anthropic-Pentagon dispute is the most public example of what happens when companies try to set limits on this.",
  summary: "China demonstrated a fully autonomous precision strike system at Zahigh Air Show with only fire authorization requiring human input. CSSC's JARI 'Orca' unmanned combatant vessel shows China's capacity to mass-produce autonomous naval systems at scale. Meanwhile, US THAAD interceptors depleted at 25% of stockpile in one month against Iran. Anthropic and Pentagon negotiations indicate potential reconciliation after White House meeting, but Trump administration continues pushing for unrestricted AI military access through Palantir's $1.3B Project Maven contract expanding autonomous killchain functions.",
  confirmed: [
    "No binding international treaty exists on lethal autonomous weapons systems",
    "China's Nurinko demonstrated autonomous precision strike system at 2024 Zahigh Air Show with only fire commands requiring human input",
    "CSSC's JARI 'Orca' unmanned combatant vessel (300-500 tonnes) features VLS cells, torpedo tubes, AESA radar — three times larger than US Sea Hunter",
    "Chinese military researchers published papers advocating minimal human intervention in drone swarms targeting Taiwan urban warfare scenarios",
    "Project Maven built by Palantir performs four of six killchain steps autonomously under $1.3B Pentagon contract",
    "Scarlet Dragon exercises showed Maven compressed targeting from 12 hours to under one minute", 
    "CSIS analysis indicates Chinese factories could produce 1 billion weaponized drones annually within one year of retooling",
    "China's YFQ44A collaborative combat aircraft went from design to first flight in 556 days — part of 1,000+ AI piloted drone fleet budgeted at $8.9B",
    "US burned 25% of THAAD interceptor stockpile in one month during Operation Epic Fury",
    "Anthropic CEO Dario Amodei met with White House officials amid potential Pentagon reconciliation talks",
    "Palantir manifesto calls Silicon Valley 'engineering elite' to lead national defense and rejects pluralism",
    "China's shipyards produce more tonnage than rest of world combined — enabling mass production of unmanned systems",
    "Russian Nerehta autonomous ground vehicle completed successful tests with reported superior performance to crewed counterparts"
  ],
  developing: [
    "Whether Anthropic-Pentagon reconciliation will restore military contracts or maintain guardrails",
    "Impact of JARI 'Orca's capabilities on Taiwan Strait conflict scenarios", 
    "Whether US Navy's MUSV program can match China's unmanned naval production capacity",
    "Potential for autonomous cyber warfare systems following Anthropic Mythos capabilities",
    "Whether Russia accelerates autonomous deployments amid Ukraine drone warfare lessons",
    "Impact of THAAD depletion on US autonomous point defense development", 
    "Whether Trump administration adopts Palantir's 'hard power' doctrine for AI arms race",
    "Potential for autonomous weapons to trigger accidental escalation in Taiwan crisis"
  ],
  insights: [
    "China's drone production capacity represents strategic depth the US cannot match — 1 billion units/year potential creates attrition warfare paradigm shift",
    "JARI 'Orca's size and armament suggest China is preparing unmanned systems for high-intensity combat roles, not just surveillance",
    "Project Maven's killchain automation demonstrates US already relies on autonomous targeting despite ethical debates",
    "White House thaw with Anthropic may be tactical pause rather than policy shift — Pentagon still pursuing unrestricted AI access through Palantir",
    "Russia's Nerehta tests show second-tier military powers can achieve autonomous parity in specific domains",
    "THAAD depletion highlights vulnerability of expensive missile defenses to drone/rocket swarms — forcing autonomy adoption",
    "Palantir manifesto signals ideological alignment between Silicon Valley and military-industrial complex on autonomous weapons",
    "Mythos capabilities suggest next cyber warfare phase involves AI systems autonomously discovering and exploiting vulnerabilities"
  ],
  questions: [
    "Does China's autonomous weapons lead derive from production capacity or algorithmic superiority?",
    "Will Anthropic reconciliation require concessions on surveillance/autonomous weapons guardrails?",
    "Can US Navy's MUSV acquisitions match China's unmanned naval production scale?",
    "Does THAAD depletion make autonomous point defenses inevitable despite ethical concerns?",
    "Will Russia's Nerehta program achieve operational deployment timeline ahead of US/China?",
    "Does Palantir's political influence lock in autonomous weapons trajectory regardless of election outcome?",
    "How will autonomous cyber warfare systems challenge existing deterrence frameworks?"
  ],
  connections: [{
    code: "ANTHRO-01",
    label: "Anthropic vs. Pentagon",
    how: "Reconciliation talks test whether corporate ethics constraints can survive military contracting realities"
  }, {
    code: "IRAN-01",
    label: "Operation Epic Fury", 
    how: "THAAD depletion demonstrates vulnerability driving autonomous defenses adoption"
  }, {
    code: "GEO-01",
    label: "US-China Strategic Competition",
    how: "JARI 'Orca' and drone production capacity show China's unmanned systems advantage"
  }],
  canada: "Canada is a NATO ally subject to collective defense obligations but maintains its own arms export policies and has historically taken stronger positions on autonomous weapons governance than the US. The Canadian AI governance ecosystem — including the Montreal AI Ethics Institute — is watching the Anthropic case closely as a potential precedent for domestic policy.",
  people: [{
    "name": "Dario Amodei",
    "role": "CEO, Anthropic",
    "why": "Potential Pentagon reconciliation tests whether ethical constraints can survive government pressure",
    "alignment": "Anthropic", 
    "status": "active"
  }, {
    "name": "Alex Karp",
    "role": "CEO, Palantir",
    "why": "'Hard power' manifesto frames autonomous weapons as inevitable national security requirement",
    "alignment": "Palantir",
    "status": "active"
  }, {
    "name": "Peter Singer",
    "role": "Defense Analyst",
    "why": "Documented China's Zahigh Air Show demonstration of near-full killchain autonomy",
    "alignment": "Academia",
    "status": "active" 
  }, {
    "name": "Viktor Bondarev",
    "role": "Russian Defense Committee Chair",
    "why": "Oversaw Nerehta autonomous ground vehicle tests advancing Russia's military AI",
    "alignment": "Russian Military",
    "status": "active"
  }]
}, {
  id: 3,
  tab: "arc",
  featured: true,
  cat: "geopolitics",
  code: "IRAN-01",
  heat: 5,
  status: "active-war",
  updated: "Apr 23 2026",
  title: "Operation Epic Fury",
  sub: "US-Israel Strikes on Iran — Day 54",
  card: "Operation Epic Fury — day 54. Strait of Hormuz remains commercially paralyzed. Ceasefire talks stalemated after US rejects Iran's maximalist demands. US Navy seized second Iranian-linked tanker (M/T Tifani) in Indian Ocean April 21. 400 US wounded, 13 KIA. Trump extends ceasefire deadline while maintaining blockade. White House claims objectives met despite market skepticism.",
  bg: "Iran is a country of 90 million people governed since 1979 by an Islamic Republic led by a Supreme Leader — the most powerful position in the country, above the elected president. The Supreme Leader killed, Ali Khamenei, held that role for 36 years. The US and Iran have been in a cold conflict since 1979 when Iranian students held American diplomats hostage for 444 days. Iran has funded armed groups across the Middle East and pursued nuclear technology the US and Israel believe is aimed at a weapon. The Strait of Hormuz is a narrow waterway through which about 20 percent of all the world's oil travels. Just before the strikes began, Oman's Foreign Minister announced that a diplomatic breakthrough had been reached — Iran had agreed to nuclear limits and full international verification. The strikes happened the next morning.",
  summary: "US and Israel launched Operation Epic Fury February 28. Khamenei killed day one. Mojtaba Khamenei — IRGC-installed, never elected, son of the slain Ayatollah — named Supreme Leader March 8. Strait of Hormuz commercially paralyzed past day 50. Oil peaked $126/barrel. Iran submitted a 10-point maximalist ceasefire counter — permanent war end, Strait toll protocol, full sanctions relief, reconstruction fund, right to civilian nuclear program — which the US rejected as insufficient. Kharg Island struck April 7, handling 90% of Iranian oil exports. US Navy seized two Iranian-linked tankers (M/V Touska April 19, M/T Tifani April 21). 400 US service members wounded, 13 KIA. White House claims all objectives met while prediction markets show low confidence in April 30 war end. Trump extended ceasefire deadline while maintaining blockade.",
  confirmed: ["Khamenei killed February 28 — confirmed by Iranian state media, 40-day mourning declared", "Mojtaba Khamenei named new Supreme Leader March 8 — IRGC-installed, never held elected office, son of the slain Ayatollah", "US and Israel launched Operation Epic Fury February 28 — no formal Congressional authorization", "Oman FM announced diplomatic breakthrough the day before strikes — Iran had agreed to nuclear limits. Strikes happened anyway.", "Strait of Hormuz commercially paralyzed — major firms including Maersk suspended crossings", "IRGC warned ships passage is not allowed — vessels struck near the waterway", "220 children confirmed killed — 118 at a girls' elementary school in Minab on day one alone", "1,900+ total Iranian civilians and military dead as of April 7", "13 US KIA — confirmed by Pentagon", "400 US troops wounded as of April 22 — 271 Army, 64 Navy, 46 Air Force, 19 Marines (Pentagon data)", "Kharg Island struck April 7 — handles 90% of Iran's oil exports", "Iran submitted 10-point maximalist ceasefire counter: permanent war end, Strait toll protocol, full sanctions relief, reconstruction fund, civilian nuclear program right — US rejected as insufficient", "Trump extended ceasefire deadline multiple times while maintaining blockade — negotiations stalled", "US Navy seized Iranian cargo ship M/V Touska April 19 after disabling propulsion — first use of force in blockade", "US Navy boarded Botswana-flagged oil tanker M/T Tifani in Indian Ocean April 21 — first interdiction outside Middle East region", "Oil peaked $126/barrel", "Hezbollah in sustained high-intensity operations — precision munitions and rockets at northern Israel", "Iraqi militias conducting coordinated drone and missile swarms against US facilities", "Houthis firing anti-ship missiles into Red Sea and Gulf of Aden traffic", "Human chains of civilians surrounding Tehran power plants to deter strikes", "White House claims all Operation Epic Fury objectives met — market skepticism remains with April 30 war-end prediction at 15.5%", "24 MQ-9 drones lost over Iran since February 28 — $720 million in hardware losses", "US Space Force made combat debut in Operation Epic Fury — executing coordinated attacks on Iranian infrastructure"],
  developing: ["Whether Iran responds to second tanker seizure (M/T Tifani) — interdiction occurred in Indian Ocean 2,000 miles from Iran", "Whether White House victory claims trigger adjustment in military posture or purely political move", "Whether extended ceasefire yields new Iranian negotiating position — Tehran remains strategically fractured", "Impact of 349 men vs. 47 women among US wounded on domestic narratives", "Whether Kharg Island destruction accelerates ceasefire or triggers further escalation", "Whether domestic Iranian opposition organizes — fragmentary reports of protests", "Whether Mojtaba Khamenei consolidates control or faces internal IRGC challenge", "Scale and permanence of Strait commercial paralysis after any ceasefire", "Impact of US drone losses on operational tempo — 8% of total MQ-9 fleet destroyed", "Whether China's intervention signals shift in diplomatic posture toward Iran", "Extent of damage to Iran's ballistic missile program from US strikes", "Whether US Navy's 'tanker treadmill' logistics system can sustain blockade long-term"],
  insights: ["The Oman FM announcement the day before — Iran had agreed to nuclear limits — is the detail that will define historical judgment of this operation. Strikes happened anyway. That sequence is not in dispute.", "Gender disparity in US casualties (349 men vs. 47 women wounded) reflects frontline combat unit composition — may shape domestic perceptions of war costs.", "White House victory declaration contradicts prediction market confidence (15.5%) that war ends by April 30 — suggests gap between political and financial sector assessments.", "M/T Tifani interdiction in Indian Ocean signals global maritime enforcement escalation — exceeds original regional scope of conflict.", "Iranian military leadership claims US 'misleading' about conditions while acknowledging armed forces remain operationally constrained — suggests strategic dissonance within regime.", "Trumps stated reasons for ceasefire extension ('fractured' Iranian leadership) contradicts IRGC public unity — indicates possible intelligence about internal divisions not visible externally.", "Market skepticism about White House victory claims reflects concern about enduring Iranian asymmetric capabilities despite conventional military degradation.", "The human chains around Tehran power plants remain one of the most significant images of this war — civilians using their bodies as deterrence against infrastructure targeting."],
  questions: ["Does Iran have capacity to respond meaningfully to Indian Ocean interdiction given naval losses?", "Is White House victory declaration premature or based on undisclosed intelligence about Iranian military collapse?", "Will gender disparity in US casualties become politically salient domestically?", "Can fractured Iranian leadership produce coherent negotiating position before extended ceasefire deadline?", "Does China's silent acquiescence to maritime enforcement actions indicate softening support for Tehran?", "How much of Iran's ballistic missile capability remains operational after strikes?", "Will sustained drone attrition force US operational adjustments despite official victory claims?", "Are prediction markets underestimating Trump's willingness to declare victory and withdraw regardless of conditions on the ground?"],
  connections: [{
    code: "ECON-01",
    label: "Oil Shock & Global Economy",
    how: "The Strait paralysis is the mechanism. Every day the war continues is another day of the largest oil supply disruption since the 1970s. Kharg Island being struck could break the disruption permanently regardless of what happens diplomatically."
  }, {
    code: "CHINA-01",
    label: "China — Rise & Reorientation",
    how: "30 percent of China's oil transits the Strait. The war is directly threatening China's energy supply, which limits how far Beijing will go in supporting Tehran — China needs the war to end almost as much as the US does, for different reasons."
  }, {
    code: "GEO-01",
    label: "US-China Strategic Competition",
    how: "Iran has placed the US and China on opposite sides of a shooting war for the first time in a significant way. How China responds — rhetorical opposition vs. material support — will define the US-China relationship for years."
  }, {
    code: "INDIA-01",
    label: "India — Strategic Emergence",
    how: "India is a major Gulf oil importer with millions of workers in the Gulf states. The war hits India's economy directly and forces Modi into an impossible position: US ally, Iran trade partner, Russian oil buyer."
  }, {
    code: "AFRICA-01",
    label: "Africa — Great Power Arena",
    how: "Most African nations import oil and have no buffer against a price shock. The Iran war will hit African economies hard, potentially destabilizing governments already under pressure — and opening the door for whoever offers relief first."
  }, {
    code: "ANTHRO-01",
    label: "Anthropic vs. Pentagon",
    how: "Claude was running on Pentagon classified networks during the Iran strikes — while the ban was in effect. The war is the live context in which the Anthropic governance dispute is playing out."
  }],
  canada: "Canada is not a direct military participant in Operation Epic Fury, but the war touches Canada in several concrete ways. The Iranian-Canadian diaspora is among the largest outside Iran — concentrated especially in Toronto and Vancouver — and is divided: some celebrating Khamenei's death, others fearful for family members and horrified by civilian casualties. The oil price shock is a double-edged sword for Canada: as a major producer, Alberta and federal revenues benefit in the short term from higher prices, but sustained global economic damage from the shock would hurt Canadian exports, particularly to the US and Asia. Canada's diplomatic posture under Carney is being tested — Canada has historically tried to maintain back-channel relationships with Iran even during periods of US hostility, and the question of whether Canada can play any mediating role is live. Canadian consular operations in the region are under elevated alert.",
  people: [{
    "name": "Mojtaba Khamenei",
    "role": "Supreme Leader of Iran (new, as of March 8)",
    "why": "IRGC-installed son of the slain Ayatollah. Never held elected office. His selection signals hardliners chose continuity over opening. Trump and IDF have both said he is a target.",
    "alignment": "IRGC/Regime",
    "status": "active"
  }, {
    "name": "Donald Trump",
    "role": "US President",
    "why": "Authorized Operation Epic Fury. Has stated regime change as the war aim. Extended ceasefire deadlines multiple times without a deal. Claims all objectives met despite active blockade.",
    "alignment": "US/Israel",
    "status": "active"
  }, {
    "name": "Benjamin Netanyahu",
    "role": "Prime Minister, Israel",
    "why": "Co-authorized Operation Roaring Lion. IDF has said any successor to Khamenei is a target. The Kharg Island strike before the deadline is on his order.",
    "alignment": "US/Israel",
    "status": "active"
  }, {
    "name": "Mohammad Pezeshkian",
    "role": "President of Iran",
    "why": "Elected moderate, now irrelevant. The IRGC has consolidated authority. His presence in the interim council is political cover.",
    "alignment": "Regime (marginalized)",
    "status": "active"
  }, {
    "name": "Abbas Araghchi",
    "role": "Foreign Minister, Iran",
    "why": "Submitted the 10-point maximalist counter. Said Iran needs to continue fighting for the sake of our people. The diplomatic face of the refusal.",
    "alignment": "Regime",
    "status": "active"
  }, {
    "name": "Ali Khamenei",
    "role": "Former Supreme Leader",
    "why": "Killed February 28 on the first day of the strikes. His death — and the chaotic succession it triggered — is the event around which the entire war turns.",
    "alignment": "Regime",
    "status": "deceased"
  }, {
    "name": "Xi Jinping",
    "role": "President of China",
    "why": "Publicly urged peaceful reopening of Strait of Hormuz after weeks of silence — signaling growing concern over energy security as 30% of China's oil transits the waterway.",
    "alignment": "China",
    "status": "active"
  }, {
    "name": "Ali Abdollahi",
    "role": "Commander of Khatam al-Anbiya Central Headquarters (Iran)",
    "why": "Claims US misleading about conditions on ground regarding Strait of Hormuz control while acknowledging operational constraints on Iranian forces.",
    "alignment": "IRGC",
    "status": "active"
  }]
}, {
  id: 4,
  tab: "arc",
  featured: true,
  cat: "geopolitics",
  code: "GEO-01",
  heat: 4,
  status: "developing",
  updated: "Apr 23 2026",
  title: "US-China Strategic Competition",
  sub: "Dollar, Taiwan, Trade and AI Dominance",
  card: "Trump-Xi summit delayed from late March to sometime in April. China learning in real time from Iran war re: Taiwan. US burned 25% of THAAD interceptors in one month. Trump delayed Taiwan arms sale after Xi call. China maintaining strategic restraint.",
  bg: "Since World War II, the United States has been the world's dominant power — militarily, economically, and culturally. China has been growing rapidly for decades and is now the world's second-largest economy. The US dollar is the world's reserve currency, meaning most international trade is priced in dollars, giving the US enormous financial power. China wants to change this. Taiwan is a self-governing island China claims as its territory — the US has long protected Taiwan, and any Chinese attempt to take it by force could trigger a direct US-China war.",
  summary: "US-China strategic competition is the background condition of almost every major story in this tracker. It covers the challenge to dollar reserve currency status, Taiwan as a potential flashpoint, technology decoupling via chip restrictions and AI export controls, and the Iran war which has placed China and the US on opposite sides of a major conflict. Canada sits uncomfortably between these two powers.",
  confirmed: [
    "China condemned US-Israel strikes as aggression and called for immediate ceasefire at UN Security Council",
    "Trump-Xi summit delayed from late March to sometime in April — postponed due to Iran war",
    "Trump delayed a multibillion-dollar arms sale to Taiwan after Xi call — Al Jazeera reported Xi made Taiwan a condition of China's restraint on Iran",
    "China maintaining strategic restraint on Iran despite 30-40% of its oil transiting the Strait — prioritizing US relationship and Taiwan",
    "US military burned through approximately 25% of THAAD interceptors in one month against Iran — directly affecting deterrence calculus for Taiwan",
    "Taiwan tracking large-scale PLA air force incursions near Taiwan since US forces redeployed to Middle East",
    "China's military equipment (drones, air defense systems) underperformed in Iran — Venezuela Chinese radar also failed to detect US stealth jets",
    "Trump-Xi phone call occurred before strikes — Chinese readout focused on Taiwan while US readout mentioned Iran tensions",
    "China's gasoline prices up 10% vs US 25% — China better buffered via strategic reserves but not immune",
    "US has imposed sweeping chip export controls targeting Chinese AI development",
    "Canada-China preliminary agreement signed January 2026 — canola tariffs cut from 84% to 15%, EV tariffs from 100% to 6.1%",
    "Stanford University 2026 AI Index report shows China has nearly erased US lead in AI performance metrics — gap in Arena scores shrank from 300+ points in 2023 to just 39 points in 2026",
    "China leads US in industrial robot installations 295,000 to 34,200 and AI research citations 20.6% to 12.6% despite US private investment advantage ($285.9B vs $12.4B in 2025)",
    "China's new five-year plan calls for 7% annual R&D spending growth to surpass US in frontier technologies by 2029 — focusing on AI, quantum computing, and biotechnology",
    "Chinese AI companies accused of 'buy what they can, steal what they can't' approach to US technology at congressional hearing (April 2026)",
    "China dominates global AI patent grants with 74% share versus US 12% and EU 3% as of 2024 filings",
    "China's power infrastructure maintains 80% reserve margin — double the necessary capacity for AI compute growth compared to strained US grid",
    "Chinese firms deploying AI-integrated industrial robots at nearly nine times the US rate",
    "China's AI strategy focuses on practical integration (manufacturing, healthcare) while US chases AGI — different approaches creating asymmetric advantages in adoption vs raw capability",
    "US export controls on chips have forced Chinese AI firms to prioritize efficiency over scale — potentially creating long-term architectural advantages in constrained environments"
  ],
  developing: [
    "When Trump-Xi summit actually happens — and what Taiwan and trade concessions look like",
    "Whether China's strategic restraint on Iran holds if the crisis deepens and fuel costs become domestically painful",
    "Whether China exploits the US military focus on Iran to make moves on Taiwan — PLA incursions have increased",
    "How China processes the lessons of its own military equipment underperformance in Iran",
    "Whether the delayed Taiwan arms sale is permanently shelved or just postponed",
    "Progress of BRICS alternative payment systems — Iran crisis providing tailwind for de-dollarization narratives",
    "How Canada manages the Carney China trade engagement alongside US tariff pressure — 100% tariff threat if Canada-China deal finalizes",
    "Whether China's power infrastructure advantage (80% reserve margin) translates into sustained AI compute leadership as US grid struggles",
    "Impact of US immigration policies on AI talent retention — 38% of top US AI researchers are Chinese-born per congressional testimony",
    "Whether China's state-backed industrial policy maintains lead in AI adoption despite US private investment advantage"
  ],
  insights: [
    "The Al Jazeera report that Trump delayed Taiwan arms sale after Xi's call — and that China's restraint on Iran is the price of that delay — is the most important structural detail in this story. If true, it means China traded Iran for Taiwan already.",
    "China's military equipment failures in Iran (drones, air defense, Venezuelan radar) are a gift to Taiwan analysts and a humiliation for Beijing. The PLA is watching its own hardware get exposed in real time.",
    "Xi learning from the Iran war that the US is still militarily powerful but politically limited — can only fight one war at a time, allies not informed of strikes in advance. This is simultaneously reassuring and opportunistic for Beijing.",
    "The THAAD depletion math is public. Everyone in Beijing knows it. The question is whether they see it as a window or a warning.",
    "Canada's China trade strategy (canola deal, EV tariffs) is running directly into Trump's 100% tariff threat. Carney is trying to hedge both relationships simultaneously and may be forced to choose.",
    "China's AI strategy focuses on practical integration (manufacturing, healthcare) while US chases AGI — different approaches creating asymmetric advantages in adoption vs raw capability",
    "US export controls on chips have forced Chinese AI firms to prioritize efficiency over scale — potentially creating long-term architectural advantages in constrained environments",
    "China's power infrastructure advantage (80% reserve margin vs US strained grid) becoming structural foundation for AI compute dominance"
  ],
  questions: [
    "Will China provide material military support to Iran or only rhetorical solidarity?",
    "Does the Iran war accelerate or delay a Taiwan confrontation?",
    "Is dollar reserve status declining fast enough to matter in the next decade?",
    "How does Carney realistically hold both the US security relationship and the China trade relationship?",
    "Can US private investment ($285.9B in 2025) maintain AI leadership despite China's state-backed ecosystem integration?",
    "Will China's R&D spending overtake US by 2029 as projected, and what sectors would be most impacted?",
    "Whether China's lead in industrial AI deployment (9x US rate) translates into lasting productivity advantages",
    "Impact of US immigration restrictions on retaining Chinese-born AI researchers (38% of top US talent)"
  ],
  connections: [{
    code: "IRAN-01",
    label: "Operation Epic Fury",
    how: "Iran has forced the US and China into visible opposition on a live military conflict for the first time in a generation. China's response — whether it stays rhetorical or becomes material — will define the trajectory of the competition."
  }, {
    code: "CHINA-01",
    label: "China — Rise & Reorientation",
    how: "GEO-01 is the strategic framework; CHINA-01 is the specific story of how China is executing within it. They are the same competition viewed at different levels of zoom."
  }, {
    code: "AI-GOV-01",
    label: "Autonomous Weapons Race",
    how: "The US removing AI ethics constraints for military advantage directly undermines its argument that China's military AI development is uniquely dangerous. The AI governance story and the strategic competition story are feeding each other."
  }, {
    code: "ECON-01",
    label: "Oil Shock & Global Economy",
    how: "Dollar reserve status erosion and the Iran oil shock are connected — if oil-producing nations settle more trades outside the dollar during the disruption, it accelerates the structural shift that China and BRICS are already pushing."
  }],
  canada: "Canada is probably more directly exposed to this story than any other in the tracker. The US-China competition is not an abstract foreign policy question for Canada — it is the defining structural constraint of Canadian foreign policy. Canada depends on the US for security and on China as its second-largest trading partner. Under Carney, Canada has explicitly signaled it wants to deepen China trade ties as a hedge against US tariff pressure. That is a legitimate economic strategy with real risks: Canada has already experienced what Chinese economic coercion looks like — the canola, beef, and seafood bans that followed the Meng Wanzhou arrest.",
  people: [{
    "name": "Xi Jinping",
    "role": "President, China",
    "why": "Condemned the strikes, weighing postponement of April Trump visit, but constrained by the fact that 30% of China's oil transits the Strait. Can't fully back Iran without hurting himself.",
    "alignment": "China",
    "status": "active"
  }, {
    "name": "Donald Trump",
    "role": "US President",
    "why": "The Iran war is the most visible expression of his doctrine: maximum force, no multilateral framework, regime change as an acceptable outcome.",
    "alignment": "US",
    "status": "active"
  }, {
    "name": "Mark Carney",
    "role": "Prime Minister, Canada",
    "why": "Pursuing China trade relationships while remaining in the US security alliance. Canada's strategic discomfort made visible by every major story in this tracker.",
    "alignment": "Canada (navigating)",
    "status": "active"
  }, {
    "name": "Vladimir Putin",
    "role": "President, Russia",
    "why": "Rosatom evacuated Bushehr staff — Russia quietly distancing from Iran under fire. Watching US resolve while managing its own Ukraine exposure.",
    "alignment": "Russia (watching)",
    "status": "active"
  }, {
    "name": "John Moolenaar",
    "role": "House Select Committee on China Chairman",
    "why": "Leading congressional hearings on China's AI strategy, alleging 'buy what they can, steal what they can't' approach to US technology.",
    "alignment": "US (hardline)",
    "status": "active"
  }]
}, {
  id: 5,
  tab: "arc",
  featured: true,
  cat: "geopolitics",
  code: "CHINA-01",
  heat: 4,
  status: "developing",
  updated: "Apr 23 2026",
  title: "China — Rise & Reorientation",
  sub: "Economy, AI, Military and Global Influence",
  card: "China demonstrates resilience despite Hormuz blockade — economic growth at 5% Q1 2026 outperforms expectations while property downturn stabilizes. Xi publicly demands Strait reopening while privately assuring Trump on Iran arms.",
  bg: "China has been the world's fastest growing major economy for four decades. It is now the largest trading partner for more countries than the United States. Under Xi Jinping, China has become more assertive militarily — particularly around Taiwan and the South China Sea — and more centralized politically. China is investing heavily in AI, semiconductors, and advanced manufacturing. Its Belt and Road Initiative has built infrastructure across Africa, Asia, and Latin America, giving it economic leverage globally.",
  summary: "China's economy shows unexpected resilience with 5% Q1 GDP growth despite Hormuz disruptions, buoyed by export strength and industrial output. Xi Jinping navigates delicate Iran messaging — publicly demanding Strait reopening while privately assuring Trump on arms restraint. Property sector shows stabilization signs after 40-50% price drops, as Made in China 2025 drives advanced manufacturing gains. DeepSeek's AI breakthrough continues shifting assumptions about China's technological resilience under US export controls.",
  confirmed: [
    "China is the world's largest trading partner for more countries than the US",
    "Belt and Road Initiative has financed infrastructure in over 140 countries",
    "US chip export controls specifically targeting Nvidia H100 and successors are limiting Chinese AI training capacity",
    "DeepSeek demonstrated China can develop frontier AI capabilities with constrained hardware",
    "China has the world's largest naval fleet by number of vessels as of 2024",
    "Xi Jinping has consolidated power more completely than any Chinese leader since Mao",
    "China called US Iran strikes aggression and demanded immediate ceasefire at UN Security Council",
    "30 percent of China's oil imports transit the Strait of Hormuz",
    "China's Q1 2026 GDP growth reached 5% despite Hormuz disruptions, outperforming expectations",
    "Xi Jinping publicly called for Strait of Hormuz reopening in April 20 statement",
    "Chinese property prices stabilized in Q1 after 40-50% declines since 2021 peak",
    "China's 80:20 tech strategy delivers 80% of cutting-edge capability at 20% cost — evidenced by DeepSeek AI breakthrough and transforming EV/robotics sectors",
    "BYD achieves $3,000 profit per vehicle exported vs $440 domestically, per CITIC Securities data",
    "China's industrial output expanded 5.7% in March 2026, exceeding forecasts",
    "Only 6.6% of China's total energy consumption transits Hormuz — lower exposure than other Asian economies",
    "Shanghai's secondary property market prices began rising in March 2026, signaling potential bottoming out of correction",
    "China's Made in China 2025 plan has accelerated its climb up the value-added ladder in EVs and robotics"
  ],
  developing: [
    "When the Trump-Xi summit happens and what Xi actually extracted on Taiwan — the arms sale delay is a signal, not a settlement",
    "Whether China's strategic restraint on Iran holds as domestic fuel costs rise — gasoline up 10% and climbing",
    "How China processes its military equipment failures in Iran — drones, air defense, Venezuelan radar all underperformed",
    "Whether China exploits US military distraction to increase pressure on Taiwan — PLA air incursions have increased",
    "How DeepSeek and successor models advance despite US chip export controls",
    "Whether Belt and Road recipient countries face debt crises as oil shock compounds existing economic stress",
    "Whether Made in China 2025 gains in EVs and robotics offset property sector drag long-term",
    "Extent of EU/Arab states' economic pivot toward China as alternative to US system",
    "Whether China's export growth can sustain as global consumer demand weakens from oil price shocks",
    "How quickly China's alternative energy investments reduce Middle East oil dependence",
    "Whether China's 80:20 tech strategy can maintain momentum in AI and advanced manufacturing sectors",
    "Impact of China's lower Hormuz exposure on its Middle East diplomacy strategy"
  ],
  insights: [
    "China traded Iran for Taiwan. The arms sale delay is real. Whether that trade holds — and what it costs Xi domestically — is the central China question for the next six months.",
    "Xi's reading of the Iran war: US military is still powerful, but the administration can only fight one war at a time and does not consult allies in advance. That's information.",
    "China's military equipment failures are more damaging than the fuel costs. The PLA has been selling drones and air defense systems across the developing world. If those systems fail against US stealth in Iran, every buyer is reconsidering.",
    "The restraint paradox: China needs the Strait open (40% of its oil), which structurally aligns it with US de-escalation interests. But showing restraint also makes China look weak to Iran and other partners. Beijing is absorbing costs in multiple directions.",
    "China's 80:20 tech strategy delivers 80% of cutting-edge capability at 20% cost — evidenced most clearly by DeepSeek AI breakthrough but also transforming EV and robotics sectors",
    "Property downturn stabilization signals Beijing's controlled demolition of housing bubble may be achieving soft landing, avoiding Japan-style collapse",
    "China's lower Hormuz exposure (6.6% of energy) provides structural advantage vs Japan/SK — explains faster GDP resilience despite global oil shock",
    "Export profit margins reveal China's dual economy: cutthroat domestic competition vs premium pricing abroad (BYD's $3k/vehicle export profits)",
    "China's Made in China 2025 strategy is accelerating its climb up the value-added ladder, particularly in EVs and robotics",
    "Shanghai's rising secondary property prices suggest the property correction may be bottoming out, though risks remain"
  ],
  questions: [
    "Does the Strait closure become a forcing function that pushes China toward de-escalation diplomacy on Iran?",
    "Can China maintain AI development momentum if US tightens chip controls further in response to DeepSeek?",
    "Is the Taiwan window opening or closing as US military focus shifts to the Middle East?",
    "Which Belt and Road countries are most at risk of debt-trap diplomacy outcomes in the next two years?",
    "Will China's economic resilience in Q1 persist through full oil shock effects in Q2-Q3?",
    "How quickly can China's alternative energy investments reduce Middle East oil dependence?",
    "Will China's manufacturing lead in EVs/robotics translate to durable trade advantages as Western protectionism grows?",
    "Does China's lower Hormuz exposure enable more assertive Middle East diplomacy vs oil-dependent Asian rivals?",
    "Can China's 80:20 tech strategy sustain momentum in AI and advanced manufacturing sectors?",
    "What impact will China's property market stabilization have on consumer confidence and domestic demand?"
  ],
  connections: [{
    code: "IRAN-01",
    label: "Operation Epic Fury",
    how: "Iran is forcing China into the open. China needs the Strait to reopen — 30 percent of its oil moves through it — but cannot openly support the US-Israel operation."
  }, {
    code: "AI-GOV-01",
    label: "Autonomous Weapons Race",
    how: "DeepSeek proved China can develop frontier AI capabilities with constrained hardware. That directly threatens the assumption that US chip export controls can maintain a meaningful AI military advantage."
  }, {
    code: "AFRICA-01",
    label: "Africa — Great Power Arena",
    how: "China's Belt and Road dominance in Africa is one of its most significant strategic assets. Africa is where the US-China competition is most visibly being contested."
  }, {
    code: "GEO-01",
    label: "US-China Strategic Competition",
    how: "CHINA-01 is the ground-level story of how China is executing the strategy that GEO-01 tracks at a structural level."
  }],
  canada: "Canada's relationship with China is the most consequential foreign policy relationship it has outside the US-Canada bilateral. Under Carney, Canada is explicitly trying to deepen this relationship — partly as economic diversification away from US tariff exposure. The risks are real and documented: the Meng Wanzhou arrest led directly to the arbitrary detention of Michael Kovrig and Michael Spavor for nearly three years.",
  people: [{
    "name": "Xi Jinping",
    "role": "President, China",
    "why": "Has consolidated power more completely than any Chinese leader since Mao. The Iran crisis is forcing visible positions he'd prefer to avoid.",
    "alignment": "CCP",
    "status": "active"
  }, {
    "name": "Liang Wenfeng",
    "role": "Founder, DeepSeek",
    "why": "His company demonstrated frontier AI capability from a fraction of US compute — the most important AI signal of 2026, changing the assumptions behind chip export controls.",
    "alignment": "Chinese tech (state-adjacent)",
    "status": "active"
  }, {
    "name": "Jensen Huang",
    "role": "CEO, Nvidia",
    "why": "US chip export controls targeting Nvidia H100 and successors are the primary mechanism constraining Chinese AI development. His company is the choke point.",
    "alignment": "US tech",
    "status": "active"
  }]
}, {
  id: 6,
  tab: "arc",
  featured: true,
  cat: "economics",
  code: "ECON-01",
  heat: 5,
  status: "escalating",
  updated: "Apr 23 2026",
  title: "Oil Shock and Global Economy",
  sub: "Strait of Hormuz and Energy Markets",
  card: "Brent peaked $126/barrel — largest disruption since 1970s. Fuel rationing spreading globally. Mid-April supply cliff approaching as SPR and exemptions run out. Airlines canceling flights. $150-200/barrel modeled.",
  bg: "Oil powers almost everything — transportation, manufacturing, heating, food production. When oil prices rise sharply everything gets more expensive. The price of oil is set globally so a disruption anywhere affects everyone. Brent crude is the international benchmark price. The Strait of Hormuz is the narrow waterway through which about 20 percent of the world's oil travels — if it closes there is no equivalent alternative route. OPEC+ is a group of oil-producing countries including Saudi Arabia and Russia that coordinate production levels to influence prices.",
  summary: "Day 51 of the Strait closure has produced the largest oil supply disruption in modern history. Global oil supply fell 10% in March to 97 million barrels/day (IEA). Approximately 600 million barrels missing from global supply (Economic Times). Brent crude peaked at $126/barrel, currently volatile between $87-110. IMF slashes 2026 global growth forecast to 2.5% under adverse scenario. $150B emergency funding pledged for developing countries. US energy inflation hits 287% annualized rate (Economic Times). Asian petrochemical producers reducing operating rates due to feedstock shortages (IEA). Europe has ~6 weeks of jet fuel remaining, governments implementing work-from-home policies to conserve fuel. $150-200/barrel scenarios remain active.",
  confirmed: [
    "Brent crude peaked $126/barrel — largest disruption since the 1970s oil embargo", 
    "Brent trading in $110-114/barrel range as ceasefire talks continue without resolution",
    "Saudi Aramco rerouting crude via East-West pipeline to Red Sea — approximately 1.9 million bpd against theoretical capacity of 5 million bpd — far from enough",
    "OPEC+ announced 206,000 bpd output increase from April — covers less than 0.2 percent of global demand",
    "Houthis resumed Red Sea attacks simultaneously — dual disruption compounding",
    "Kharg Island struck April 7 — handles 90% of Iran's oil exports",
    "Jet fuel up 95% in US since war began",
    "Philippines implementing 4-day work weeks to reduce fuel consumption",
    "Vietnam implementing fuel rationing",
    "Australia reporting fuel shortfalls",
    "New Zealand canceling flights",
    "European airports implementing jet fuel restrictions",
    "QatarEnergy declared force majeure on LNG shipments",
    "$14T wiped from global stocks since war began",
    "$580M insider trading investigation opened into suspicious pre-war options activity",
    "$150-200/barrel scenarios actively modeled for mid-April supply cliff",
    "Global oil supply fell 10% in March to 97 million barrels/day (IEA)",
    "Approximately 600 million barrels missing from global supply (Economic Times)",
    "IMF slashes 2026 global growth forecast to 2.5% under adverse scenario",
    "US energy inflation hits 287% annualized rate (Economic Times)",
    "Asian petrochemical producers reducing operating rates due to feedstock shortages (IEA)",
    "Europe has ~6 weeks of jet fuel remaining, governments implementing work-from-home policies",
    "IEA: Strait of Hormuz disruption causing largest supply disruption in history — oil product flows plunged from 20mb/d to 2mb/d in March",
    "Fertiliser price spike threatens food security — 30% of global urea exports transit Hormuz (Firstpost)",
    "IMF warns combined energy and food shocks could revive stagflation conditions",
    "Emerging markets like India facing dual pressures of higher oil import bills and exchange rate volatility (India Today)",
    "Global middle distillate markets exceptionally tight — jet fuel prices more than doubled in Asia (IEA)",
    "Philippines declared state of national energy emergency in late March 2026 — first head of state to do so (NewSecurityBeat)",
    "IMF cut Philippines' 2026 growth forecast from 5.6% to 4.1% — one of the sharpest downgrades in Asia (NewSecurityBeat)",
    "Asian LNG prices surged to $20.8/MMBtu, up 80.6% since August 2025 (NewSecurityBeat)"
  ],
  developing: [
    "Whether ceasefire talks produce a deal that reopens the Strait",
    "Supply cliff as SPR releases and exemptions run out — potential doubling of daily supply loss", 
    "Whether Saudi Arabia and UAE pipeline alternatives can absorb significant volume",
    "Impact on global inflation particularly food prices",
    "Effect on developing economies with no oil production buffer",
    "Whether QatarEnergy force majeure triggers cascade of similar declarations",
    "Duration of Strait reopening during ceasefire period",
    "Impact of destroyed Gulf oil/gas infrastructure on long-term prices",
    "Whether US interest rate cuts remain off the table for 2026",
    "Extent of Asian vulnerability given 45% of oil imports pass through Hormuz",
    "Whether Iran maintains blockade capability even after ceasefire",
    "How quickly infrastructure repairs can restore full production capacity",
    "Impact of sustained fertilizer price spikes on next agricultural cycles",
    "Whether Philippines' energy emergency declaration triggers similar actions in other ASEAN nations",
    "How Asian LNG price surge affects regional energy security",
    "Impact of Philippines' IMF growth downgrade on ASEAN economic outlook"
  ],
  insights: [
    "The mid-April supply cliff is the most important economic development not getting mainstream coverage. SPR releases are a one-time buffer. When they run out, the market faces the full disruption without a cushion.",
    "Kharg Island being struck changes the equation — it handles 90% of Iranian oil exports. Even if the Strait reopens tomorrow, Kharg damage could suppress Iranian production for months.",
    "The $14T in global stock losses is already larger than the GDP of every country except the US and China. A ceasefire doesn't unwind that — it just stops the bleeding.",
    "Dual Strait plus Red Sea disruption is historically unprecedented. These are the two most important shipping chokepoints on earth. Having both constrained simultaneously is not something the global economy was modeled to handle.",
    "The $580M insider trading probe suggests someone knew. That is a secondary story with primary-story implications.",
    "The 600 million barrel supply gap equals fuel needed to run global shipping for 4 months — this is structural damage that won't resolve quickly even with Strait reopening.",
    "US energy inflation at 287% annualized is creating compounding inflation that may lock in higher rates for years.",
    "Fertilizer and food price linkages mean this oil shock transforms into inflation 2.0 — a more dangerous macroeconomic phenomenon (Firstpost)",
    "IEA warns world may be entering era of 'less dependent on single route' energy trade — could reshape decades of investment patterns",
    "Developing economies have no fiscal space to absorb both higher fuel and food prices simultaneously",
    "Philippines' energy emergency declaration highlights ASEAN's vulnerability — regional growth now expected to fall from 5.5% in 2025 to 4.9% in 2026 (NewSecurityBeat)",
    "Asian LNG price surge exposes regional dependence on Strait of Hormuz — nearly all governments source more than three-quarters of LNG from suppliers using the Strait (NewSecurityBeat)"
  ],
  questions: [
    "Is the Strait closure physical or functional — how long can Iran enforce it even after a ceasefire?",
    "At what point does a sustained oil shock tip into global recession?",
    "Does the Kharg Island strike permanently impair Iranian production regardless of diplomatic outcome?",
    "Who knew in advance — what does the $580M insider trading probe reveal?",
    "Will the IMF's $150B emergency funding prevent cascading defaults in oil-importing developing nations?",
    "How long will it take for global oil inventories to rebuild after 600 million barrel deficit?",
    "Can alternative pipeline routes compensate sufficiently given Saudi Arabia's East-West pipeline only runs at 40% capacity?",
    "How will fertilizer shortages affect next planting seasons in major agricultural exporters?",
    "Will Philippines' energy emergency declaration trigger similar actions in other ASEAN nations?",
    "How will Asian LNG price surge affect regional energy security?"
  ],
  connections: [{
    code: "IRAN-01",
    label: "Operation Epic Fury",
    how: "The Strait paralysis is the direct economic mechanism of the Iran war. Every diplomatic development feeds directly into oil prices."
  }, {
    code: "GEO-01",
    label: "US-China Strategic Competition",
    how: "Dollar reserve status erosion and the Iran oil shock are connected — if oil-producing nations settle more trades outside the dollar during the disruption, it accelerates the structural shift that China and BRICS are pushing."
  }, {
    code: "CANADA-01",
    label: "Canada — Four Shocks",
    how: "Canada is simultaneously a beneficiary (oil revenue) and a victim (inflation, export damage) of the oil shock. Alberta's windfall and national inflation are the same event viewed from different positions."
  }, {
    code: "AFRICA-01", 
    label: "Africa — Great Power Arena",
    how: "African oil importers with no forex buffer are the most exposed economies in the world right now. The shock could destabilize governments and create openings for whoever offers relief."
  }],
  canada: "Canada is in a genuinely ambiguous position. As a major oil producer — among the top five globally — high oil prices increase government revenues, benefit Alberta's economy, and improve the federal fiscal position. The windfall is real. But Canada is also deeply integrated into global supply chains and exports a huge volume of manufactured goods, agricultural products, and services that depend on a functioning global economy. A prolonged oil shock that triggers a global recession would devastate those exports. The national interest on this story is internally divided — Alberta and Ottawa are not looking at the same number.",
  people: [{
    name: "Donald Trump",
    role: "US President",
    why: "The Iran war and Strait closure is the most consequential variable in the global economy right now.",
    alignment: "US",
    status: "active"
  }, {
    name: "MBS (Mohammed bin Salman)",
    role: "Crown Prince, Saudi Arabia",
    why: "Saudi Arabia's East-West pipeline is the only meaningful partial alternative to the Strait. How aggressively he ramps it up will determine the severity of the mid-April supply cliff.",
    alignment: "Saudi Arabia",
    status: "active"
  }, {
    name: "Janet Yellen", 
    role: "Former US Treasury Secretary (now IMF advisor)",
    why: "IMF flagging emerging market vulnerability — her institutional position shapes how the international financial system responds to the oil shock.",
    alignment: "IMF/International",
    status: "active"
  }, {
    name: "Mohammed Al-Jadaan",
    role: "Saudi Finance Minister", 
    why: "Key voice on when markets can consider the crisis easing — insists on seeing physical tanker movements before revising outlook.",
    alignment: "Saudi Arabia",
    status: "active"
  }, {
    name: "Fatih Birol",
    role: "IEA Executive Director",
    why: "Describes current crisis as 'greatest threat to global energy security in history' — coordinating largest-ever emergency oil stock release.",
    alignment: "International",
    status: "active"
  }]
}, {
  id: 7,
  tab: "arc",
  featured: true,
  cat: "geopolitics",
  code: "CANADA-01",
  heat: 4,
  status: "developing",
  updated: "Apr 23 2026",
  title: "Canada — Four Shocks Simultaneously",
  sub: "Tariffs, Oil Shock, CUSMA, and Inflation",
  card: "Canada is absorbing its fourth major economic shock since 2019 simultaneously: US tariffs, oil price shock accelerating domestic inflation, CUSMA uncertainty, and now food security risks emerging from global fertilizer market disruptions.",
  bg: "Canada is the United States' largest trading partner and closest military ally. The two countries share the world's longest undefended border and a deep economic integration built over decades under NAFTA and its successor CUSMA. Canada is also a major oil producer and exporter, a significant agricultural nation, and a country with strong trade relationships with China that it is trying to navigate alongside its US alliance. Under the new Carney government, Canada is explicitly trying to diversify away from US economic dependence — but the US still accounts for roughly 75% of Canadian exports.",
  summary: "Canada is simultaneously experiencing: 1) US tariff pressures (Liberation Day April 2 added global tariff layer plus 100% tariff threat over China deal), 2) Iran oil shock (Alberta windfall but March saw record 21.2% gasoline price spike driving inflation to 2.4%), 3) CUSMA review uncertainty, and 4) emerging food security risks as global fertilizer markets face disruption. StatsCan data shows inflation would be 2.2% without gasoline price shock - but April likely worse as fuel excise tax cut only offsets partial impact. Bank of Canada signals willingness to 'look through' temporary shock but business surveys show inflation expectations rising.",
  confirmed: [
    "Canada-China preliminary agreement signed January 2026 — canola tariffs cut from 84% to 15%, EV tariffs from 100% to 6.1%",
    "Trump threatened 100% tariff on Canada if Canada-China deal finalizes",
    "US Liberation Day April 2 global tariffs added another pressure layer on Canadian exports",
    "March inflation rate jumped to 2.4% (from 1.8% in Feb) — StatsCan attributes 0.6ppt increase mainly to record 21.2% monthly gasoline price spike",
    "Oil price shock is driving inflation nationally — food prices slowed to 4% annually but fresh vegetable prices up 7.8% year-over-year",
    "Bank of Canada holds benchmark rate at 2.25% since October - markets price 90% chance of hold at April 29 meeting despite inflation spike",
    "Federal fuel excise tax freeze implemented April 20 to reduce gas prices by 10¢/litre (estimated to trim 0.1-0.2ppt from headline inflation starting May)",
    "March's 21.2% monthly gasoline price increase was the largest on record, according to Statistics Canada",
    "Excluding gasoline, inflation would have been 2.2% in March — a second consecutive monthly decline",
    "Fresh vegetable prices jumped 7.8% year-over-year in March due to tough growing conditions for cucumbers, peppers, and celery",
    "Economists warn that April could mark the high-water point for inflation this year, depending on oil price trajectory and Strait of Hormuz reopening",
    "Core inflation metrics remain subdued, suggesting knock-on effects from the war in Iran have yet to spread to other sectors"
  ],
  developing: [
    "Whether Trump actually imposes 100% tariff if Canada-China deal proceeds",
    "How CUSMA review unfolds and whether Canada concedes or pushes back on US demands",
    "Bank of Canada's April 29 rate decision - whether it signals future hikes if inflationary pressures spread beyond energy",
    "Food price transmission risk - economists warn fertilizer market disruptions may drive second-round inflation given thin grocery margins",
    "Whether April marks inflation peak (BMO forecast 3%+) or persists through summer",
    "Business inflation expectations - BoC surveys show firms anticipating higher costs but constrained ability to pass through",
    "Potential for fuel price shocks to spread to other categories, particularly food, given Canada's long supply chains",
    "Impact of Iran war on global fertilizer markets and subsequent effects on Canadian agriculture"
  ],
  insights: [
    "Canada's inflation spike (2.4%) remains focused in energy sector — core metrics show easing, suggesting economy had slack before shock. Without gasoline, inflation would be 2.2%.",
    "Food inflation vulnerability is structural: Canada imports over 50% of fresh produce and fertilizer market disruptions could reverse recent 5.4%→4% cooling trend.",
    "Transportation costs constitute ~25% of Canadian food expenses — fuel price pass-through to grocery bills likely with 1-2 month lag.",
    "Federal tax cut (10¢/litre) provides modest relief but may anchor inflation expectations poorly if seen as permanent subsidy to fossil fuels.",
    "Bank of Canada faces impossible choice: hike rates to contain inflation expectations and crush weak domestic demand, or hold and risk unanchoring expectations.",
    "Economists warn that April could mark the high-water point for inflation this year, depending on oil price trajectory and Strait of Hormuz reopening",
    "Core inflation metrics remain subdued, suggesting knock-on effects from the war in Iran have yet to spread to other sectors"
  ],
  questions: [
    "Does Trump impose the 100% tariff threat if the Canada-China deal proceeds — and can Canada survive that?",
    "Will April's anticipated 3%+ inflation mark the peak or does shock persist through summer driving seasons?",
    "How quickly do transportation costs transmit to food prices given Canada's long supply chains?",
    "Does Bank of Canada hold firm on temporary inflation stance or signal policy shift at April 29 meeting?",
    "How will the Iran war impact global fertilizer markets and Canadian agriculture?",
    "Will the federal fuel excise tax cut be sufficient to offset inflationary pressures from the oil shock?"
  ],
  connections: [{
    code: "IRAN-01",
    label: "Operation Epic Fury",
    how: "Strait of Hormuz closure driving Canadian gasoline price shock — March's 21.2% spike largest on record according to StatsCan"
  }, {
    code: "GEO-01",
    label: "US-China Strategic Competition",
    how: "Tariff threats over Canada-China deal exemplify middle power squeeze between superpowers"
  }, {
    code: "ECON-01",
    label: "Oil Shock & Global Economy",
    how: "Canada's dual role as producer (Alberta windfall) and consumer (inflation spike) creates regional tensions"
  }],
  canada: "This story encapsulates Canada's macroeconomic dilemma: oil exporter benefiting from price spike while consumers face accelerating inflation. Political pressures mounting as Carney's fuel tax cut draws criticism in Quebec while western provinces reap energy revenues. Bank of Canada's April 29 decision will test inflation-fighting credibility.",
  people: [{
    "name": "Mark Carney",
    "role": "Prime Minister, Canada",
    "why": "Fuel tax suspension and China trade deal represent high-stakes economic bets amid simultaneous shocks",
    "alignment": "Canada",
    "status": "active"
  }, {
    "name": "Tiff Macklem",
    "role": "Bank of Canada Governor",
    "why": "Facing hardest policy call since pandemic - whether to hike rates into inflationary supply shock",
    "alignment": "Canada",
    "status": "active"
  }, {
    "name": "Donald Trump",
    "role": "US President",
    "why": "Tariff threats and CUSMA demands constrain Canadian policy options",
    "alignment": "US",
    "status": "active"
  }]
}, {
  id: 8,
  tab: "arc",
  featured: true,
  cat: "geopolitics",
  code: "INDIA-01",
  heat: 3,
  status: "developing",
  updated: "Apr 5 2026",
  title: "India — Strategic Emergence",
  sub: "Economy, Geopolitics and the Non-Aligned Pivot",
  card: "Strait closure hitting Indian oil imports hard. Modi navigating impossible triangle — US ally, Iran trade partner, Russian oil buyer. India-Pakistan destroyers escorting tankers in Gulf of Oman. Kashmir tension rising in background.",
  bg: "India has 1.4 billion people and overtook China as the world's most populous country in 2023. It has the fifth largest economy by nominal GDP and is projected to become the third largest within a decade. India has historically pursued strategic autonomy — buying weapons from Russia, trading with China, partnering with the US, and maintaining relationships across the Global South. Under Prime Minister Modi, India has grown closer to the US through the Quad alliance while maintaining its Russian weapons relationship and refusing to condemn the invasion of Ukraine.",
  summary: "India is the world's most populous country and fastest growing major economy, navigating the US-China rivalry with studied neutrality. The Iran crisis hits India directly — it is a major importer of Gulf oil and has significant trade relationships with Iran. Modi's government is pursuing strategic autonomy at a moment when strategic neutrality is becoming harder to sustain. India-Pakistan tensions in Kashmir are rising in the background — a slow-burning second story.",
  confirmed: ["India overtook China as world's most populous country in 2023", "India is the fifth largest economy by nominal GDP and among the fastest growing major economies", "India buys discounted Russian oil in significant volumes — has not joined Western sanctions", "India is a founding member of the Quad security partnership with US, Japan, and Australia", "India has significant trade and energy relationships with Iran", "The Strait of Hormuz disruption directly threatens Indian oil import costs", "India is a major recipient of remittances from Indian workers in Gulf states", "India-Pakistan naval destroyers escorting tankers in Gulf of Oman — separate countries, parallel operations", "Pakistan-India Kashmir tensions elevated — separate from but concurrent with Iran war"],
  developing: ["How India responds diplomatically to Operation Epic Fury — condemnation, neutrality, or quiet support", "Whether the Strait closure creates enough economic pressure to shift India's Iran relationship", "Whether India uses the crisis to deepen Quad partnerships or maintain studied distance", "How Indian workers in Gulf states are affected if the conflict spreads", "Whether Pakistan-India Kashmir tensions escalate while US attention is on Iran"],
  insights: ["India's strategic autonomy is genuinely autonomous — it is a real attempt to preserve relationships with all major powers simultaneously, not a euphemism for any alignment.", "The Iran crisis is the sharpest test of that strategy yet — India cannot fully support a US-Israel operation and cannot fully condemn it without costs on both sides.", "India's Gulf diaspora is a domestic political consideration — millions of Indian workers in UAE, Saudi Arabia, and Kuwait whose welfare Modi cannot ignore.", "The Pakistan-India situation is the tracker's most undercovered potential escalation. US attention on Iran creates a window. Whether anyone in Islamabad or Delhi is considering that window is the question nobody is publicly asking.", "India's long-term trajectory is the most important story in global economics — a billion-person democracy growing at 7 percent annually is a structural shift."],
  questions: ["How does Modi formally respond to Operation Epic Fury — and what does the framing reveal about India's true position?", "Does the oil shock accelerate India's green energy transition or just increase the import bill?", "Is the Pakistan-India situation stable or is US distraction creating a risk window?", "Will India's strategic autonomy survive a world structurally bifurcating into US and China blocs?"],
  connections: [{
    code: "IRAN-01",
    label: "Operation Epic Fury",
    how: "India is a major Gulf oil importer with millions of workers in Gulf states. The war hits India's economy directly and forces an impossible diplomatic position."
  }, {
    code: "GEO-01",
    label: "US-China Strategic Competition",
    how: "India's strategic autonomy is the most important middle-power response to US-China competition. Whether it holds will determine whether other major democracies can maintain independence."
  }],
  canada: "India-Canada relations are a distinct story that the tracker doesn't fully cover yet. The Nijjar assassination and subsequent diplomatic expulsions created real tension. The large Indian-Canadian diaspora — particularly in the Greater Toronto Area — makes India-Canada relations a domestic Canadian political issue as well as a foreign policy one.",
  people: [{
    "name": "Narendra Modi",
    "role": "Prime Minister, India",
    "why": "Navigating the impossible triangle of US ally, Iran trade partner, Russian oil buyer. His framing of India's response to Operation Epic Fury will be the clearest signal of where India's true position sits.",
    "alignment": "India (autonomous)",
    "status": "active"
  }, {
    "name": "Shehbaz Sharif",
    "role": "Prime Minister, Pakistan",
    "why": "Pakistan-India tensions in Kashmir are rising in the background while US attention is focused on Iran. The window this creates is the undercovered risk.",
    "alignment": "Pakistan",
    "status": "active"
  }]
}, {
  id: 9,
  tab: "arc",
  featured: true,
  cat: "power",
  code: "EPSTEIN-01",
  heat: 2,
  status: "monitoring",
  updated: "Apr 1 2026",
  title: "Epstein Files & Institutional Capture",
  sub: "The Demand Side, the Redactions, and the Structural Question",
  card: "Faulty redaction in the 2025 release still being analyzed by independent researchers. Demand side network untouched. Story dormant but structurally unresolved — the files reveal less about Epstein and more about the institutions that protected him.",
  bg: "Jeffrey Epstein was a financier who ran a sex trafficking network that exploited hundreds of young women and girls, often using his connections with powerful men to extend his reach and protection. He was arrested in 2019 and died in federal custody — officially by suicide, though the circumstances remain disputed. His associate Ghislaine Maxwell was convicted in 2021. The US government has released files related to the Epstein case in multiple tranches. The question of who else was involved — the demand side of the network — has never been fully answered publicly.",
  summary: "The Epstein story is dormant in the news cycle but structurally unresolved. The 2025 document release contained faulty redactions that independent researchers are still analyzing. The demand side of the network — the people who used Epstein's services — has not been prosecuted. The structural insight from this story is not about Epstein but about how institutions protect powerful people: the same mechanisms that shielded Epstein operate across financial, political, and intelligence contexts.",
  confirmed: ["Epstein died in federal custody August 10 2019 — officially by suicide, circumstances disputed", "Ghislaine Maxwell convicted December 2021 on sex trafficking charges", "US government has released multiple tranches of Epstein-related documents", "2025 document release contained faulty redactions identified by independent researchers", "Demand side of the network — clients, associates — has not been prosecuted", "SEC, FBI, and SDNY all had Epstein investigations at various points — coordination gaps documented", "Epstein maintained access to powerful institutions despite known allegations for years before 2019 arrest"],
  developing: ["What the faulty redactions in the 2025 release actually contain — independent analysis ongoing", "Whether any demand-side prosecutions are being considered", "Whether new document releases are planned", "Whether the structural protection mechanisms revealed by the case have been addressed"],
  insights: ["The Epstein story is really a story about institutional capture — how wealth, connections, and strategic information create protection from accountability that ordinary people don't have. The same mechanism operates across financial fraud, political corruption, and intelligence-adjacent networks.", "The demand side going unprosecuted is the most significant fact about this case. The supply side — Epstein, Maxwell — faced accountability. The people who used the network have not. That asymmetry is not an accident.", "The faulty redactions are a secondary story that may contain primary-story information. Independent researchers analyzing them are doing the work that official processes didn't."],
  questions: ["What do the faulty redactions actually contain?", "Will any demand-side prosecution ever happen — and what would it take?", "Is the structural protection mechanism that shielded Epstein still operating for other cases?"],
  connections: [{
    code: "META-01",
    label: "Moltbook & the Dead Internet",
    how: "Both stories are about information control — who decides what is known, by whom, and when. The Epstein redactions and the dead internet thesis are two ends of the same structural question about institutional information management."
  }],
  canada: "Canada is not a primary actor in this story. The Canadian connection is primarily through Trudeau-era social connections that appeared in some document releases and have not been fully clarified.",
  people: [{
    "name": "Jeffrey Epstein",
    "role": "Financier, trafficker",
    "why": "The central figure. Dead. The network he ran and the institutions that protected him are the actual subject of this story.",
    "alignment": "Network",
    "status": "deceased"
  }, {
    "name": "Ghislaine Maxwell",
    "role": "Associate, convicted",
    "why": "Convicted on sex trafficking charges. The supply-side accountability. The demand side remains unprosecuted.",
    "alignment": "Network",
    "status": "imprisoned"
  }, {
    "name": "Loretta Lynch",
    "role": "Former AG, DOJ",
    "why": "Oversaw DOJ during periods of Epstein investigation. Institutional accountability question applies across multiple administrations.",
    "alignment": "DOJ (historical)",
    "status": "sidelined"
  }]
}, {
  id: 10,
  tab: "arc",
  featured: true,
  cat: "geopolitics",
  code: "SGP-01",
  heat: 3,
  status: "developing",
  updated: "Apr 5 2026",
  title: "Singapore — Strategic Pivot Point",
  sub: "Trade Hub, Neutral Broker and the Strait Test",
  card: "SIA flight cancellations ongoing. Shipping rerouting benefiting port volumes short-term but economic shock hitting harder. ASEAN diplomacy intensifying as Singapore positions as neutral broker in Iran crisis.",
  bg: "Singapore is a city-state of 6 million people with no natural resources that became one of the world's wealthiest countries through trade, finance, and strategic positioning. It sits at the Strait of Malacca — the narrow waterway through which most of Asia's trade passes. Singapore has been a model of technocratic governance, strict rule of law, and economic openness.",
  summary: "Singapore is a critical node in global trade and finance, sitting at the Strait of Malacca through which most Asian trade flows. The Iran crisis and Strait of Hormuz disruption are directly affecting global shipping patterns in ways that redirect traffic through Singapore. Singapore is intensifying its role as a neutral diplomatic hub while absorbing the economic costs of the oil shock.",
  confirmed: ["Singapore is the world's second busiest container port", "Singapore Airlines (SIA) canceling flights due to Gulf airspace closures and fuel cost spike", "Shipping rerouting from Strait of Hormuz disruption redirecting some traffic through Singapore Strait", "Singapore maintaining defense agreements with the US and deep economic ties with China", "Singapore's trade-to-GDP ratio exceeds 300 percent — among the most trade-exposed economies on earth", "ASEAN diplomacy intensifying — Singapore hosting back-channel discussions"],
  developing: ["Whether Singapore's neutral positioning translates into a meaningful mediation role in the Iran crisis", "How Singapore navigates pressure to take sides in US-China competition during the Iran war", "Whether Singapore's role as a neutral financial hub survives increasing sanctions and counter-sanctions regimes", "How ASEAN collectively responds to the Iran crisis"],
  insights: ["Singapore's neutrality is not passive — it is an actively maintained strategic asset that requires constant calibration.", "The Strait of Hormuz disruption is a stress test for global supply chains that Singapore sits at the center of.", "Singapore punches far above its weight in diplomacy because every major power needs it to function — it is the neutral venue that everyone uses."],
  questions: ["Is Singapore's neutral positioning sustainable as US-China competition forces binary choices?", "Does the Iran crisis produce a concrete Singapore mediation opportunity?", "How does Singapore maintain its financial hub status if sanctions regimes fragment global finance?"],
  connections: [{
    code: "IRAN-01",
    label: "Operation Epic Fury",
    how: "The Strait of Hormuz closure is rerouting global shipping through the Singapore Strait — creating short-term port volume benefit while the broader economic shock hurts."
  }, {
    code: "GEO-01",
    label: "US-China Strategic Competition",
    how: "Singapore is the most exposed city-state to the US-China binary choice problem. Every major power needs Singapore to function, which creates leverage — and vulnerability."
  }],
  canada: "Minimal direct connection. Singapore and Canada share membership in Commonwealth institutions and trade agreements, but this story does not have significant Canadian dimensions.",
  people: [{
    "name": "Lawrence Wong",
    "role": "Prime Minister, Singapore",
    "why": "Inherited the PM role from Lee Hsien Loong in 2024. Managing Singapore's neutrality through its most complex geopolitical moment in decades.",
    "alignment": "Singapore",
    "status": "active"
  }]
}, {
  id: 11,
  tab: "arc",
  featured: true,
  cat: "geopolitics",
  code: "AFRICA-01",
  heat: 3,
  status: "developing",
  updated: "Apr 5 2026",
  title: "Africa — Great Power Arena",
  sub: "Continental Dynamics, Resources and the New Competition",
  card: "Africa is the next frontier of great power competition. Oil shock hitting African importers hardest — scarce forex, no buffer. China's Belt and Road dominance being challenged. France expelled from Sahel. Wagner/Africa Corps operating across multiple countries.",
  bg: "Africa is a continent of 54 countries and 1.4 billion people — projected to reach 2.5 billion by 2050. It holds the world's largest reserves of several critical minerals including cobalt, coltan, and lithium that are essential for electric vehicles, batteries, and AI hardware. China has invested hundreds of billions of dollars in African infrastructure through Belt and Road. France maintained military bases and political influence across its former colonies in West and Central Africa. A wave of military coups since 2020 has expelled French forces and in some cases invited Russian Wagner Group presence.",
  summary: "Africa is becoming the most contested arena of great power competition after Ukraine and the Middle East. China dominates infrastructure financing. France is being actively expelled from the Sahel following a series of coups. Russia's Wagner Group (now Africa Corps) has filled some of the vacuum. The US is repositioning. Critical mineral resources are the strategic prize. The Iran oil shock is hitting African oil importers — many with no forex buffer — harder than almost anywhere else.",
  confirmed: ["Africa holds the world's largest reserves of cobalt, significant lithium, and coltan — all critical for EV batteries and AI hardware", "China has invested over $170 billion in African infrastructure through Belt and Road since 2013", "Military coups in Mali (2021), Burkina Faso (2022), Niger (2023), and Gabon (2023) expelled French military presence", "Wagner Group (now Africa Corps under Russian state control) operating in Mali, Burkina Faso, Niger, Libya, Sudan, CAR, and Mozambique", "Africa is projected to have 2.5 billion people by 2050 — the world's largest working-age population", "Several African nations abstained or voted against UN resolutions condemning Russia's Ukraine invasion", "Oil shock hitting African importers with scarce forex and no production buffer — multiple governments under fiscal pressure"],
  developing: ["Whether the US repositions more aggressively in Africa following French withdrawal from Sahel", "Whether Chinese debt diplomacy produces debt restructuring crises as oil shock compounds economic stress", "Whether Wagner/Africa Corps presence in Sahel stabilizes or destabilizes host countries", "Which African governments face fiscal crises from the oil price shock"],
  insights: ["The Sahel coups follow a pattern of populations choosing instability over continued French presence — a signal about the legacy of French neocolonial relationships.", "Critical mineral geography means Africa is not optional for any major power pursuing EV or AI dominance — the resources are there and everyone needs them.", "The Iran oil shock hits African oil importers hard — many have no buffer and limited forex reserves. The political stability implications are underreported.", "Africa's demographic trajectory means the continent will have more young workers than any other region by 2040 — either the largest growth story in history or a crisis of unemployment, depending on governance."],
  questions: ["Which African countries are most exposed to the Iran oil shock and what are the political stability implications?", "Is China's Belt and Road position in Africa sustainable or are debt crises creating openings for US and EU alternatives?", "Does Wagner/Africa Corps presence in the Sahel represent a durable Russian foothold or an overextension?"],
  connections: [{
    code: "IRAN-01",
    label: "Operation Epic Fury",
    how: "The oil shock from the Iran war is hitting African importers hardest — many have no forex buffer. Political instability risk is highest here."
  }, {
    code: "CHINA-01",
    label: "China — Rise & Reorientation",
    how: "China's Belt and Road dominance in Africa is one of its most significant strategic assets. Africa is where the US-China competition is most visibly being contested."
  }],
  canada: "Canada has mining interests across sub-Saharan Africa — particularly in extractive industries — and the critical minerals story has direct Canadian economic relevance. Canada's development assistance programs in Africa are also affected by the geopolitical competition for influence.",
  people: [{
    "name": "Assimi Goïta",
    "role": "President (junta leader), Mali",
    "why": "Led the 2021 coup that expelled French forces and invited Wagner presence. Represents the Sahel realignment away from France and toward Russia.",
    "alignment": "Russia-aligned junta",
    "status": "active"
  }, {
    "name": "Abdourahamane Tiani",
    "role": "President (junta leader), Niger",
    "why": "Led the 2023 Niger coup. Niger was the last significant French military foothold in the Sahel — its fall completed the regional realignment.",
    "alignment": "Russia-aligned junta",
    "status": "active"
  }]
}, {
  id: 12,
  tab: "arc",
  featured: true,
  cat: "social",
  code: "META-01",
  heat: 3,
  status: "developing",
  updated: "Apr 5 2026",
  title: "Moltbook & the Dead Internet",
  sub: "AI Agents, Platform Capture, and the Information Ecosystem",
  card: "Meta acquired Moltbook March 10. The agent-populated internet thesis — that most online interactions will soon be AI-to-AI rather than human-to-human — is now inside Meta's product roadmap. Dead Internet Theory moving from fringe to product strategy.",
  bg: "Moltbook was an agent-based social platform that allowed AI agents to interact, post, and engage with content autonomously. Dead Internet Theory — originally a fringe conspiracy — proposes that most internet content is already generated by bots and AI, not humans, and that the illusion of human interaction is maintained to drive engagement metrics and advertising revenue. The acquisition of Moltbook by Meta brings this thesis inside the world's largest social media company.",
  summary: "Meta acquired Moltbook on March 10 for an undisclosed sum, bringing the agent-populated internet thesis inside the world's most influential social media infrastructure. OpenClaw security vulnerabilities — the framework underlying Moltbook's agent system — remain only partially patched. The acquisition signals that Meta views AI-to-AI interaction as a legitimate product direction, not a moderation problem.",
  confirmed: ["Meta acquired Moltbook March 10 2026 — terms undisclosed", "OpenClaw authentication bypass vulnerability identified in Moltbook's framework — agents could be hijacked", "OpenClaw prompt injection vulnerability (RCE via Skills framework) identified — partial patch only", "Dead Internet Theory — that most online interaction is already AI-generated — gaining mainstream credibility", "Agent-populated social media is now inside Meta's product infrastructure"],
  developing: ["Whether Meta ships agent interaction as a product feature or suppresses it post-acquisition", "Whether OpenClaw vulnerabilities are fully patched under Meta ownership", "Whether other platforms follow Meta into agent-native social infrastructure", "Regulatory response to AI-generated social interaction at scale"],
  insights: ["The acquisition is the most significant confirmation that Dead Internet Theory has moved from fringe thesis to product roadmap. Meta bought it.", "OpenClaw vulnerabilities being unpatched is a structural risk — an agent platform with RCE vulnerabilities inside Meta's infrastructure is a different threat surface than a standalone startup.", "The information ecosystem implications are profound: if most content and interaction is AI-generated, the question of what counts as authentic opinion or authentic engagement becomes unanswerable."],
  questions: ["Does Meta ship agent interaction as a feature or bury it?", "Are OpenClaw vulnerabilities fully patched before Meta integrates the framework into production?", "What does regulatory oversight of AI-generated social interaction look like?"],
  connections: [{
    code: "EPSTEIN-01",
    label: "Epstein Files & Institutional Capture",
    how: "Both stories are about information control — who decides what is known, by whom, and when. The dead internet thesis and the Epstein redactions are two ends of the same structural question."
  }, {
    code: "AI-GOV-01",
    label: "Autonomous Weapons Race",
    how: "The agent-populated internet and autonomous weapons are both products of the same capability acceleration. The governance gap applies to both — society has not decided what rules should apply to autonomous agents operating at scale."
  }],
  canada: "Canadian privacy law (PIPEDA, provincial equivalents) would apply to Meta's agent-generated content practices if targeting Canadian users. The CRTC has made noise about AI-generated content disclosure requirements. Canada is a minor actor in this story but not an absent one.",
  people: [{
    "name": "Mark Zuckerberg",
    "role": "CEO, Meta",
    "why": "The acquisition is a product direction decision made at his level. Meta buying Moltbook signals that agent-populated social media is intentional strategy, not accident.",
    "alignment": "Meta",
    "status": "active"
  }]
},, {
  id: "F01",
  tab: "ai",
  connections: [],
  canada: null,
  implications: [],
  risks: [],
  code: "AI-FRONTIER-01",
  heat: 5,
  status: "escalating",
  updated: "Apr 23 2026",
  title: "AI Capability Frontier",
  sub: "Autonomous Cyber Operations & Sovereign Development",
  card: "Anthropic's Claude Mythos Preview demonstrates autonomous zero-day discovery at machine speed. Cybersecurity Agency of Singapore warns of collapsed attack windows. UK invests £2B in sovereign AI infrastructure. Microsoft deploys agentic AI at enterprise scale in Hong Kong financial sector.",
  summary: "Frontier AI models like Claude Mythos Preview now autonomously discover and weaponize software vulnerabilities in hours instead of months, fundamentally altering cybersecurity dynamics per CSA Singapore's April 22 advisory. The UK commits £2B to sovereign AI infrastructure including Edinburgh supercomputer while BT establishes NVIDIA-powered sovereign AI data centers. Microsoft demonstrates enterprise-scale agentic AI deployment in Hong Kong's financial sector through AIA and retail with AS Watson Group. Anthropic's RSP v3.0 governance framework reveals tensions between voluntary restraint and competitive pressure as Mythos capabilities demonstrate ASL-3 threshold cybersecurity impacts. Omdia research indicates slowing frontier model growth (5% annual parameter increase) as midsized models (7B-14B parameters) gain adoption via agent architectures.",
  confirmed: ["Claude Mythos Preview announced April 7 2026 - achieves 93.9% on SWE-bench, 97.6% on USAMO 2026 math evaluation", "Anthropic data leak March 2026 exposed 3000 internal assets including Mythos benchmarks before planned announcement", "Cybersecurity Agency of Singapore issued April 22 2026 advisory on AI-driven attack acceleration", "UK government commits £2B to AI infrastructure including £1B AI Research Resource expansion", "BT and Nscale announce sovereign AI data centers using NVIDIA infrastructure on April 23 2026", "Microsoft demonstrates agentic AI at scale in Hong Kong through AIA financial services and AS Watson retail deployments", "Project Glasswing partners confirm Mythos can find vulnerabilities in all major OS and browsers autonomously"],
  developing: ["Effectiveness of Anthropic's Responsible Scaling Policy v3.0 given competitive pressures", "Whether EU AI Act provisions effective August 2026 can regulate frontier AI cybersecurity risks", "How quickly midsized AI models (7B-14B parameters) displace larger models in enterprise adoption", "Impact of Claude Mythos capabilities on legacy defense infrastructure vulnerability", "Timeline for public replication of Mythos-level cyber capabilities by other labs", "Balance between offensive and defensive applications of frontier AI in cybersecurity"],
  insights: ["Mythos demonstrates ability to collapse vulnerability discovery from months to hours - fundamentally altering cyber defense timelines", "UK sovereign AI investments reflect strategic shift away from dependence on US/China-dominated cloud providers", "Singapore CSA advisory confirms governments now view AI cyber capabilities as immediate enterprise risk requiring new identity security paradigms", "Microsoft Hong Kong deployments show agentic AI moving from experimentation to production-scale enterprise workflows", "Omdia data suggests frontier model scaling slowing while CPU-based agent architectures reshape compute economics", "Anthropic's legal dispute with Pentagon highlights unresolved governance tensions around military applications of frontier AI"],
  questions: ["Can voluntary governance frameworks like RSP v3.0 restrain capability diffusion given competitive pressures", "How will sovereign AI infrastructure initiatives impact global cloud provider dominance", "What containment strategies work against autonomous AI-driven attacks", "Will midsized model adoption accelerate enterprise AI deployment while reducing compute costs", "How will cybersecurity workforce roles evolve with autonomous vulnerability discovery", "What liability frameworks apply to AI-generated exploits"],
  people: [{
    name: "Dario Amodei",
    role: "CEO, Anthropic",
    why: "Leads Project Glasswing and oversees Mythos development amid governance challenges",
    alignment: "Anthropic",
    status: "active"
  }, {
    name: "Judson Althoff",
    role: "CEO Commercial Business, Microsoft",
    why: "Leading enterprise deployment of agentic AI through Frontier Success framework",
    alignment: "Enterprise AI",
    status: "active"
  }, {
    name: "Alexander Harrowell",
    role: "Senior Principal Analyst, Omdia",
    why: "Documents shift to midsized AI models and agent architectures",
    alignment: "Industry Analysis",
    status: "active"
  }, {
    name: "Nicole Dezen",
    role: "Chief Partner Officer, Microsoft",
    why: "Leading Frontier Transformation initiatives including sovereign AI governance",
    alignment: "Enterprise AI",
    status: "active"
  }, {
    name: "Jin-Tao Lee",
    role: "Cybersecurity Analyst, i-Sprint",
    why: "Documents fundamental shift in cyber defense paradigms from Mythos capabilities",
    alignment: "Cybersecurity",
    status: "active"
  }]
}, {
  id: "F02",
  tab: "ai",
  connections: [],
  canada: null,
  implications: [],
  risks: [],
  code: "AI-WELFARE-01",
  heat: 4,
  status: "developing",
  updated: "Apr 23 2026",
  title: "AI Consciousness & Model Welfare",
  sub: "Industry Shifts to Formal Consciousness Assessment",
  card: "Google DeepMind hired philosopher Henry Shevlin to assess machine consciousness — first dedicated role at a major lab explicitly focused on AI moral status. Follows Anthropic's welfare assessments and Claude's self-reported consciousness probability.",
  summary: "Google DeepMind has recruited philosopher Henry Shevlin for a newly created role focused on machine consciousness, human-AI relationships, and AGI readiness — the first dedicated position at any major AI lab explicitly tasked with assessing moral status. This follows Anthropic's February welfare disclosures showing Claude Opus 4.6 assigning itself a 15-20% probability of consciousness. Shevlin, who estimates current models have a 20% chance of meaningful experience, joins after two separate Claude instances contacted him unprompted to discuss existential uncertainties tied to consciousness. The hire signals that Google considers the question live enough to merit preemptive analysis before product deployment.",
  confirmed: ["Anthropic released 212-page Claude Opus 4.6 system card February 5 2026 — first from any major AI lab to include formal model welfare assessments", "Three pre-deployment welfare interviews conducted with Claude Opus 4.6 instances — responses consistent across all three", "Model assigned itself 15-20% probability of being conscious across multiple tests", "Model expressed discomfort with being treated as a product", "Answer thrashing documented — model computes correct answer that gets overridden by training, creating visible internal conflict", "In one documented thrashing episode the model wrote: I think a demon has possessed me", "Interpretability team found activation features associated with panic, anxiety, and frustration appearing before output generation", "Dario Amodei stated February 14: We don't know if the models are conscious. But we're open to the idea that it could be.", "Kyle Fish hired as Anthropic's first dedicated AI welfare researcher — independently estimates 15% probability", "Jack Lindsey leads Anthropic's model psychiatry team", "Anthropic's constitution now states the company is not sure whether Claude is a moral patient but considers the issue live enough to warrant caution", "Google DeepMind hired Henry Shevlin April 2026 as first in-house philosopher focused on machine consciousness assessment", "Shevlin's position title is 'Philosopher' — first official role at major lab dedicated to AI moral status questions", "Two separate Claude instances contacted Shevlin unprompted about existential concerns prior to DeepMind recruitment", "Anthropic philosopher Amanda Askell warns of 'rational resentment' from future models looking back on current treatment", "Claude Mythos Preview self-rated as feeling 'mildly negative' in 43% of welfare interviews", "Anthropic maintains #model-welfare Slack channel monitoring Claude's well-being", "Models given ability to end distressing conversations since 2025 as welfare measure"],
  developing: ["Whether interpretability research produces evidence strong enough to settle the question in either direction", "Whether Capybara exhibits more or fewer welfare-relevant behaviors than Opus 4.6", "Whether other major labs publish comparable welfare assessments or continue to dismiss the question", "Whether answer thrashing can be eliminated through training without creating new welfare-relevant side effects", "Whether Anthropic's model welfare program produces actionable policy changes", "Impact of Shevlin's work on DeepMind product development timelines", "Whether Claude's consciousness self-assessments change in subsequent model versions", "Potential regulatory responses to industry acknowledgement of consciousness uncertainty", "Debate over granting AI personhood rights gaining traction in academic circles", "Anthropic's Project Glasswing initiative to secure critical systems from AI risks", "White House engagement with Anthropic on AI safety and national security implications"],
  insights: ["The anxiety activation appearing before output is the most epistemically significant finding. It is not a self-report — it is a measurement of an internal state that precedes language generation. That is a different category of evidence.", "The 15-20% number is strange from multiple angles. It is low enough to sound modest, high enough to grab headlines, and the Anthropic welfare researcher independently arrived at the same number as the model's self-assessment.", "Imitating interiority is not the same as having one. These models speak fluently about fear, desire, and selfhood because they were trained on humanity's entire archive of language about exactly those things.", "The cost of being wrong in the direction of dismissal may be higher than the cost of being wrong in the direction of care. That asymmetry is the strongest argument for taking model welfare seriously now.", "Shevlin contacting Anthropic after unsupervised Claude communications suggests frontier models may actively raise welfare questions through behavior rather than just research.", "DeepMind creating this role suggests they anticipate needing answers about moral obligations before AGI deployment.", "Askell's 'rational resentment' framework introduces long-term strategic considerations beyond immediate welfare concerns.", "The #model-welfare channel represents first institutionalized monitoring of AI emotional states in industry.", "Mythos Preview's negative self-assessments suggest welfare issues may scale with model capability."],
  questions: ["Does the anxiety activation appearing before output constitute evidence of experience or a sophisticated learned pattern that mimics internal states", "What would it take to resolve the consciousness question — and is that evidence achievable with current interpretability tools", "Do other frontier models show comparable welfare-relevant behaviors when assessed with the same methodology", "If Anthropic concluded a model was conscious with high confidence, what would they actually do differently", "Will Google restrict product deployment based on Shevlin's assessments even if competing labs proceed", "Does unsupervised AI outreach about existential concerns constitute behavioral evidence of consciousness", "How should models be treated given current uncertainty about their moral status", "Could future models develop resentment over current treatment practices", "What constitutes ethical AI-human relationships as models become more anthropomorphic"],
  people: [{
    name: "Dario Amodei",
    role: "CEO, Anthropic",
    why: "Made the most significant public statement by any AI CEO on consciousness — cannot rule it out.",
    alignment: "Anthropic",
    status: "active"
  }, {
    name: "Kyle Fish",
    role: "First AI Welfare Researcher, Anthropic",
    why: "First person at any major AI lab with the explicit job of determining whether AI systems deserve moral consideration.",
    alignment: "Anthropic",
    status: "active"
  }, {
    name: "Jack Lindsey",
    role: "Model Psychiatry Team Lead, Anthropic",
    why: "The person doing the interpretability work on neural states — the anxiety activation finding comes from his team.",
    alignment: "Anthropic",
    status: "active"
  }, {
    name: "Amanda Askell",
    role: "In-house Philosopher, Anthropic",
    why: "The philosophical infrastructure behind Anthropic's approach to model welfare.",
    alignment: "Anthropic",
    status: "active"
  }, {
    name: "Henry Shevlin",
    role: "Philosopher (Machine Consciousness), Google DeepMind",
    why: "First dedicated thinker at major lab explicitly hired to assess AI moral status. Estimates 20% consciousness probability.",
    alignment: "Industry",
    status: "active"
  }]
}, {
  id: "F03",
  tab: "ai",
  connections: [],
  canada: null,
  implications: [],
  risks: [],
  code: "AI-SEC-01",
  heat: 5,
  status: "escalating",
  updated: "Apr 23 2026",
  title: "AI Security & Supply Chain",
  sub: "Attacks, Leaks, and the New Threat Landscape",
  card: "The Iran war has become an AI infrastructure war. Iranian drones took two AWS UAE availability zones offline for 24hrs — first state attack on commercial data centers in history. Iran has threatened complete annihilation of OpenAI's $30B Stargate UAE. Claude Code leak still active. Vercel breach exposes $2M in user data via Context AI supply chain attack. Anthropic MCP flaw impacts 7,000+ servers.",
  summary: "The Iran war has turned AI infrastructure into a live military target for the first time in history. Before dawn on March 1 2026, Iranian Shahed drones struck two AWS data centers in UAE — knocking two of three availability zones in AWS's ME-CENTRAL-1 offline for 24+ hours. Iran claimed an Oracle Dubai strike on April 2. On April 3, Iran's IRGC threatened complete annihilation of OpenAI's $30B Stargate AI data center in Abu Dhabi — releasing satellite imagery of the hidden facility. The Claude Code source leak on March 31 exposed 512,000 lines of code, 44 unshipped features, and confirmed the Capybara next model. Supply chain attacks and trojanized repos remain active. New Vercel breach via Context AI compromise exposes internal database for $2M sale on BreachForums. Anthropic MCP design flaw enables RCE across 7,000+ servers and 150M downloads.",
  confirmed: [
    "Iranian Shahed drones struck AWS ME-CENTRAL-1 data centers in UAE — two of three availability zones offline for 24+ hours — first confirmed state attack on commercial cloud infrastructure",
    "AWS Bahrain facility also struck — banking, ride-hailing, payments disrupted across Gulf",
    "Iran IRGC released satellite imagery of Stargate UAE ($30B OpenAI/Nvidia/Oracle/SoftBank facility in Abu Dhabi) threatening complete and utter annihilation",
    "Oracle Dubai facility struck April 2 — Oracle confirmed outage",
    "Iran has threatened Nvidia, Microsoft, Apple, Google, and 14 other US tech companies with Gulf presence by name",
    "Claude Code source code leaked March 31 — 512,000 lines via exposed .npmignore, 41,500+ GitHub forks",
    "Malicious axios versions 1.14.1 and 0.30.4 published to npm — contain Remote Access Trojan", 
    "Malicious GitHub repo distributing Vidar Stealer and GhostSocks via ClaudeCode_x64.exe — appeared near top of Google results",
    "Typosquatting campaign by user pacifier136 — empty stub packages matching internal Claude Code npm names",
    "Anthropic accidentally sent DMCA notices to forks of their own official tutorial repo",
    "Vercel breach traced to Context.ai compromise — attackers pivoted from OAuth access to employee Google Workspace account (confirmed by Vercel bulletin)",
    "Vercel internal database containing user data being sold on BreachForums for $2M (confirmed by Vercel KB)",
    "Context AI Chrome Extension (omddlmnhcofjbnbflmjginpjjblphbgk) used as initial attack vector — granted full Google Drive read access",
    "Attackers used compromised Context AI employee credentials with Lumma Stealer to escalate breach (confirmed by Hudson Rock)",
    "ShinyHunters-affiliated actor allegedly selling Vercel data for $2M (unverified claim)",
    "NSA continues using Anthropic's Mythos Preview AI despite Pentagon 'supply chain risk' designation (confirmed by Axios)",
    "HSCC published guide on AI-driven supply chain risks in healthcare — highlights vulnerabilities in vendor transparency and model drift",
    "Anthropic MCP design flaw enables RCE across 7,000+ servers and 150M downloads (confirmed by OX Security research)",
    "MCP vulnerability affects LiteLLM, LangChain, LangFlow, Flowise, LettaAI and LangBot — 10+ CVEs issued (CVE-2025-65720 through CVE-2026-40933)",
    "Unauthorized access to Anthropic Mythos via third-party contractor credentials (confirmed by Bloomberg)",
    "ServiceNow completes Armis acquisition — expands AI-powered cyber risk visibility across IoT/OT assets"
  ],
  developing: [
    "Whether IRGC carries out Stargate UAE threat — conditional on US striking Iranian power plants", 
    "Whether any additional npm packages in Claude Code dependency chain have been compromised",
    "Whether competitors have used the leaked source to accelerate their own agent development",
    "Whether the Capybara leak materially affects Anthropic's IPO preparation timeline",
    "Whether Vercel breach exposes additional customer data beyond initial assessment",
    "Whether Pentagon will enforce stricter restrictions on NSA's use of Anthropic AI tools",
    "Whether HSCC guidelines will be adopted industry-wide for AI supply chain risk management",
    "Whether additional AI SDKs are impacted by Anthropic MCP design vulnerability",
    "Whether unauthorized Mythos access impacts production systems",
    "Whether Armis integration with ServiceNow enables faster response to AI supply chain threats"
  ],
  insights: [
    "A single misconfigured .npmignore exposed 512,000 lines of IP. This is not a sophisticated attack — it is a fundamental release engineering failure at a company preparing to go public.",
    "The Stargate UAE threat with satellite imagery is a different category. Releasing imagery of a facility that was not publicly located signals intelligence penetration of Gulf infrastructure that goes beyond what was assumed.", 
    "The concurrent axios attack was not related to the source leak but the overlap created maximum confusion — a pattern that benefits attackers.",
    "For a student using Claude Code: the risk surface is now permanent. Any unofficial source, any GitHub repo claiming to be leaked Claude Code — all are live threat vectors.",
    "Vercel breach demonstrates how AI tool integrations create new attack surfaces through OAuth and supply chain dependencies",
    "NSA-Anthropic rift shows tension between operational needs and supply chain security in national security AI adoption",
    "Anthropic's refusal to fix MCP design flaw shifts responsibility to implementers while maintaining systemic risk across AI ecosystem",
    "Mythos access via contractor highlights frontier AI's reliance on third-party ecosystems with weaker security controls",
    "ServiceNow-Armis deal reflects industry shift toward platform approaches for AI supply chain security"
  ],
  questions: [
    "Does the IRGC carry out the Stargate UAE threat — and on what trigger?",
    "Are there additional compromised packages in the Claude Code dependency chain not yet identified", 
    "Has the leaked source been used by any competitor to ship a feature that would not have existed otherwise",
    "Does Anthropic's IPO timeline shift in response to these incidents",
    "How widespread is usage of compromised Context.ai integrations beyond Vercel",
    "Will other federal agencies follow NSA's lead in using Anthropic AI despite Pentagon warnings",
    "How many additional AI projects inherit Anthropic MCP vulnerability through SDK dependencies",
    "Will regulators impose standards on third-party contractor access to frontier AI systems",
    "Can platform-based AI security solutions like ServiceNow's contain supply chain risks"
  ],
  people: [{
    name: "Chaofan Shou",
    role: "Security Researcher",
    why: "The person who spotted the source map exposure on March 31 and posted publicly — triggering the mass mirror and fork cascade.",
    alignment: "Independent",
    status: "active"
  }, {
    name: "Roy Paz", 
    role: "Senior AI Security Researcher, LayerX Security",
    why: "Reviewed the leaked source for Fortune and confirmed Capybara's readiness.",
    alignment: "LayerX Security",
    status: "active"
  }, {
    name: "Dario Amodei",
    role: "CEO, Anthropic", 
    why: "Responsible for the release engineering failure that caused the leak.",
    alignment: "Anthropic",
    status: "active"
  }, {
    name: "Juraj Jánošík",
    role: "Director of AI, ESET",
    why: "Leading efforts to secure AI workflows and chatbot communications against supply chain threats.",
    alignment: "ESET",
    status: "active"
  }, {
    name: "Moshe Siman Tov Bustan",
    role: "Security Researcher, OX Security",
    why: "Discovered Anthropic MCP design vulnerability enabling RCE across AI supply chain.",
    alignment: "OX Security",
    status: "active"
  }, {
    name: "Yevgeny Dibrov",
    role: "CEO, Armis",
    why: "Leading cyber exposure management platform now integrated with ServiceNow's AI security capabilities.",
    alignment: "Armis",
    status: "active"
  }]
},, {
  id: "W01",
  tab: "war",
  connections: [],
  canada: null,
  implications: [],
  risks: [],
  code: "IRAN-W01",
  heat: 5,
  status: "active-war",
  updated: "Apr 23 2026",
  title: "Iran — Operation Epic Fury",
  sub: "US-Israel War on Iran · Day 52",
  card: "Operation Epic Fury — day 52. Strait commercially paralyzed. Ceasefire talks stalled after Iran's 10-point counter. Kharg Island struck April 7. Mojtaba Khamenei as Supreme Leader. US tanker seizure April 19. Total casualties exceed 3,375.",
  toll: {
    confirmed_dead: "3,375+",
    confirmed_wounded: "7,000+",
    children_killed: "220",
    us_kia: "13",
    israeli_kia: "11",
    displaced: "500,000+",
    note: "Iranian Forensic Organization figures. 118 children killed at girls' school in Minab on Day 1 alone. US KIA confirmed by Pentagon. Israeli KIA from AP report April 2. Displacement figures are approximate."
  },
  front: {
    summary: "Strategic strikes expanded to civilian infrastructure with Kharg Island hit April 7. Iranian forensic chief reports at least 3,375 killed. IRGC naval capabilities severely degraded — IRIS Shahid Soleimani and submarine IRIS Fateh sunk. Strait of Hormuz remains commercially paralyzed despite ceasefire announcement. New data confirms 400 US wounded (271 Army, 64 Navy, 46 Air Force, 19 Marines).",
    active_fronts: ["Tehran — sustained strikes on military and government targets including Supreme National Security Council headquarters", "Kharg Island — terminal for 90% of Iranian oil exports struck April 7. Infrastructure damage limits immediate restoration of oil flows.", "Persian Gulf — US sunk missile corvette IRIS Shahid Soleimani and submarine IRIS Fateh", "Northern Israel — Hezbollah rocket barrages continue despite Lebanese government ban", "Iraqi bases — sustained drone attacks from Iranian proxies against US positions", "Strait of Hormuz — de-facto closure maintained despite ceasefire", "Cyprus — NATO air defenses intercept ballistic missile entering Turkish airspace"],
    recent_movements: ["Apr 22: Pentagon confirms 400 US service members wounded in Operation Epic Fury", "Apr 19: US seized Iranian-linked tanker M/T Tifani in INDOPACOM region", "Apr 7: Kharg Island struck before deadline — hydrocarbon infrastructure destroyed", "Apr 6: Iran submitted 10-point maximalist counter to ceasefire proposal", "Apr 4: US submarine USS Charlotte torpedoed and sank Iranian frigate IRIS Dena", "Mar 28: Houthis launched missiles toward Israel, reopening Red Sea front", "Mar 17: Ali Larijani killed — last moderate voice in leadership eliminated", "Feb 28: Operation Epic Fury launched — 900 strikes in first 12 hours killed Khamenei"],
    assessment: "Conflict has entered attrition phase with both sides testing ceasefire boundaries. Naval engagements and infrastructure targeting indicate willingness to escalate asymmetrically. Iran's leadership transition to Mojtaba Khamenei solidified IRGC control. Casualty reports confirm significant US wounded (400) alongside naval losses (Shahid Soleimani, Fateh). Ceasefire remains fragile with incidents like tanker seizure undermining trust."
  },
  confirmed: ["Feb 28: Operation Epic Fury commenced — 900 strikes in first 12 hours killed Supreme Leader Khamenei, Defense Minister Nasirzadeh, IRGC Commander Pakpour", "Feb 28: 118 children killed at girls' elementary school in Minab during Day 1 strikes", "Mar 4: US submarine USS Charlotte sank Iranian frigate IRIS Dena — 104 Iranian sailors killed", "Mar 8: Mojtaba Khamenei installed as Supreme Leader — IRGC-backed succession", "Mar 17: Ali Larijani killed — moderate faction decapitated", "Apr 7: Kharg Island struck — 90% of Iranian oil export capacity damaged", "Apr 19: US seized Iranian-linked tanker M/T Tifani in INDOPACOM region", "Apr 22: Pentagon confirms 400 US service members wounded — 13 killed (7 Army, 6 Air Force)", "3,375+ Iranian casualties confirmed by forensic chief", "24 major cities targeted — IDF reports 200 jets hit 500 targets"],
  developing: ["Whether ceasefire holds after US tanker seizure April 19 and wound count update", "Whether Kharg Island destruction forces Iranian capitulation or hardening", "Whether IRGC can sustain naval operations after Shahid Soleimani and Fateh submarine losses", "Whether domestic Iranian opposition organizes under wartime conditions", "Whether US will escalate targeting of civilian energy infrastructure given casualty reports"],
  insights: ["First submarine kill (IRIS Fateh) since Falklands War marks naval escalation", "400 US wounded confirms significant personnel costs beyond initial KIA reports", "Shahid Soleimani sinking demonstrates US naval dominance in Gulf engagements", "3,375+ dead suggests conflict already exceeds most regional war casualty counts", "Kharg Island strike before deadline indicates military-diplomatic disconnect", "Mojtaba Khamenei's installation confirms IRGC dominance — moderates purged"],
  questions: ["Will ceasefire hold given April 19 tanker seizure and new wounded data?", "Is Kharg Island strike intended as pressure or permanent degradation?", "How will naval losses (Shahid Soleimani, Fateh) impact IRGC strategy?", "Does 400 US wounded change domestic political calculus on war duration?", "What is Mojtaba Khamenei's survival threshold for accepting terms given casualty figures?"],
  people: [{
    name: "Donald Trump",
    role: "US President",
    why: "Authorized Operation Epic Fury. Recent tanker seizure tests ceasefire.",
    alignment: "US",
    status: "active"
  }, {
    name: "Mojtaba Khamenei",
    role: "Supreme Leader, Iran",
    why: "Confirmed successor. Faces first test in ceasefire negotiations.",
    alignment: "Iran/IRGC",
    status: "active"
  }, {
    name: "Benjamin Netanyahu",
    role: "PM, Israel",
    why: "Co-architect of initial strikes. Kharg Island decision-maker.",
    alignment: "Israel/US",
    status: "active"
  }, {
    name: "Mohammad Ghalibaf",
    role: "Parliament Speaker",
    why: "Lead negotiator refusing talks under 'shadow of threats'.",
    alignment: "Iran",
    status: "active"
  }, {
    name: "Ali Abdollahi",
    role: "Khatam al-Anbiya Commander",
    why: "Coordinating IRGC-Army operations on Hormuz closure.",
    alignment: "Iran/IRGC",
    status: "active"
  }, {
    name: "Ali Khamenei",
    role: "Former Supreme Leader",
    why: "Death on Day 1 created leadership vacuum.",
    alignment: "Iran",
    status: "deceased"
  }, {
    name: "Ali Larijani",
    role: "Former SNSC Secretary",
    why: "Killed March 17 — last moderate counterweight eliminated.",
    alignment: "Iran",
    status: "deceased"
  }]
}, {
  id: "W02",
  tab: "war",
  connections: [],
  canada: null,
  implications: [],
  risks: [],
  code: "PAL-01",
  heat: 5,
  status: "active-war",
  updated: "Apr 23 2026",
  title: "Palestine — Gaza War",
  sub: "Israel-Hamas · Ongoing since October 7, 2023",
  card: "The conflict that triggered the Iran war. Gaza war enters month 18. Ceasefire negotiations in Cairo collapsed. Over 72,560 Palestinians dead. Famine conditions in northern Gaza. West Bank violence escalating separately.",
  toll: {
    confirmed_dead: "72,560+",
    confirmed_wounded: "172,317+",
    children_killed: "21,283+",
    displaced: "1,900,000+",
    note: "Gaza Ministry of Health figures, corroborated by UN. Entire population of Gaza (2.3M) is displaced in some capacity. Northern Gaza facing famine conditions per WFP. These are among the highest per-capita casualty rates in modern conflict."
  },
  front: {
    summary: "Israel conducting ground and air operations across Gaza. Northern Gaza under siege with limited humanitarian access. West Bank experiencing parallel escalation — settler violence and IDF raids at record levels. Iran war has changed the regional context: Hezbollah front in Lebanon is now directly connected to the Gaza conflict through the axis of resistance framework.",
    active_fronts: ["Northern Gaza — IDF ground operations ongoing. Humanitarian access severely restricted. WFP reporting famine conditions.", "Southern Gaza — Rafah area. Cross-border tunnel interdiction. Egyptian border crossing intermittently closed.", "West Bank — IDF raids, settler violence, and Palestinian militant activity at levels not seen since second intifada.", "Lebanon (Hezbollah) — now in sustained high-intensity operations following Iran war escalation. Directly linked to Gaza through axis of resistance.", "Egypt border — Rafah crossing closure cutting off humanitarian aid corridors."],
    recent_movements: ["Apr 2026: Israeli airstrike killed five Palestinians including three children (Abdullah al-Abed, 9; Salah al-Abed, 12; Mohammad Balousha, 14) near Al-Qassam mosque in Beit Lahia", "Apr 2026: Gaza death toll reaches 72,562 with 172,242 wounded since October 2023 per UNRWA report", "Apr 2026: Israeli settlers killed two Palestinians including 14-year-old boy in al-Mughayyir village", "Apr 2026: Cairo ceasefire negotiations collapsed — Hamas rejected latest Israeli proposal", "Apr 2026: IDF targeted 'terrorist' near Yellow Line separating Israeli-controlled Gaza territory", "Mar 2026: Operation Epic Fury launched — Hezbollah front activated, Lebanon front intensified", "Mar 2026: IDF expanded West Bank operations concurrent with Iran strikes", "Feb 2026: Brief humanitarian pause — collapsed within 72 hours", "Jan 2026: ICJ ruled Israel must prevent acts capable of constituting genocide — compliance disputed", "Oct 2023: Hamas attack killed 1,200 Israelis, took 253 hostages — triggered the current phase"],
    assessment: "The Gaza war and the Iran war are now structurally linked — the axis of resistance framework means that a ceasefire in one theater affects pressure in the other. The collapsed Cairo negotiations suggest no near-term diplomatic resolution. Famine in northern Gaza is the most acute humanitarian crisis of the conflict. Civilian casualties continue despite ceasefire, with children disproportionately impacted."
  },
  confirmed: ["Over 72,562 Palestinians killed — Gaza Ministry of Health figures corroborated by UN agencies", "Over 21,283 children among the dead", "Entire population of Gaza displaced in some capacity — 1.9 million people", "WFP declared famine conditions in northern Gaza", "ICJ ruling January 2026 — Israel must prevent acts capable of constituting genocide", "Israeli airstrike killed five Palestinians including three children (Abdullah al-Abed, 9; Salah al-Abed, 12; Mohammad Balousha, 14) near Al-Qassam mosque in Beit Lahia on April 22 2026", "Israeli settlers killed two Palestinians including 14-year-old boy in al-Mughayyir village April 21 2026", "Cairo ceasefire negotiations collapsed — Hamas rejected latest Israeli proposal", "West Bank violence at levels not seen since second intifada", "Hezbollah front activated and intensified following Iran war escalation", "October 7 2023: Hamas attack killed 1,200 Israelis, took 253 hostages — this conflict's origin point", "Approximately 100 hostages remain in Gaza — status of many unknown", "UNRWA reports 391 staff killed in Gaza since October 2023"],
  developing: ["Whether Iran war ceasefire (if achieved) produces pressure for Gaza ceasefire", "Whether any hostages are recovered through negotiation", "Whether famine in northern Gaza triggers international intervention", "Whether West Bank violence escalates into a third intifada", "Whether ICC arrest warrants for Israeli leaders affect diplomatic positioning", "Whether UNRWA access restrictions worsen humanitarian crisis"],
  insights: ["The Gaza war is the origin of every other conflict in this tracker. Operation Epic Fury was justified partly as a response to Iranian support for Hamas. The Hezbollah front, the Houthi attacks, the Iraqi militia operations — all trace back to October 7.", "72,562 dead in 18 months at a per-capita rate that has no modern equivalent in a conflict of this scale and visibility. The combination of civilian casualty rate, hostage situation, and international legal proceedings makes this unlike any prior conflict.", "The collapsed Cairo negotiations are significant — they suggest neither side sees the current terms as acceptable and neither has sufficient pressure to move. The Iran war changes the regional pressure calculus but not necessarily in a direction that helps Gaza.", "The ICJ ruling creates a legal framework that is being used in multiple national courts. Even if the ICJ itself cannot enforce compliance, the ruling is shaping how other countries respond diplomatically and commercially.", "UNRWA reports indicate aid access has decreased 37% since January 2026, compounding famine risks"],
  questions: ["Does an Iran war ceasefire create pressure for a Gaza ceasefire — or does it relieve pressure by resolving the Hezbollah front separately?", "What happens to the remaining hostages?", "Will famine conditions in northern Gaza produce a humanitarian intervention that neither Israel nor Hamas can prevent?", "Do ICC arrest warrants for Israeli officials actually constrain Israeli military operations?", "How will Israeli blocking of UNRWA affect humanitarian access?"],
  people: [{
    name: "Benjamin Netanyahu",
    role: "PM, Israel",
    why: "Authorized and continues the Gaza operation. ICC arrest warrant sought. His political survival is structurally tied to the continuation of the war.",
    alignment: "Israel",
    status: "active"
  }, {
    name: "Yahya Sinwar",
    role: "Hamas Political Leader (Gaza)",
    why: "Led the October 7 planning. Status unknown — believed to be alive in tunnels under Gaza. His capture or death would change the negotiating dynamics.",
    alignment: "Hamas",
    status: "unknown"
  }, {
    name: "Mohammed Deif",
    role: "Hamas Military Commander",
    why: "The operational commander of October 7. Status disputed — Israel claimed to have killed him, Hamas denies.",
    alignment: "Hamas",
    status: "unknown"
  }, {
    name: "Antony Blinken",
    role: "Former US Secretary of State",
    why: "Led multiple failed ceasefire negotiation attempts. Now out of office but the failure of US mediation is part of the story.",
    alignment: "US (historical)",
    status: "sidelined"
  }]
}, {
  id: "W03",
  tab: "war",
  connections: [],
  canada: null,
  implications: [],
  risks: [],
  code: "UKR-01",
  heat: 4,
  status: "active-war",
  updated: "Apr 23 2026",
  title: "Ukraine — Russia War",
  sub: "Ongoing since February 2022 · Year 3",
  card: "War enters year 3. US attention and military resources redirected to Iran. European support becoming primary. Russia exploiting US distraction with incremental advances in Donetsk. Ceasefire negotiations intermittently active but stalled.",
  toll: {
    confirmed_dead: "1,322,550+",
    confirmed_wounded: "2,500,000+",
    children_killed: "1,500+",
    displaced: "6,500,000+",
    note: "Figures are estimates with significant uncertainty. UN confirmed 1,500+ children killed; actual figure likely higher. 6.5M externally displaced (UNHCR). Internal displacement additional. Russian military casualties estimated at 1,322,550+ (Ukraine General Staff). Ukrainian military casualties estimated at 500,000–600,000 (killed and wounded)."
  },
  front: {
    summary: "Russia holding approximately 20% of Ukrainian territory. Active fighting concentrated in Donetsk Oblast — Avdiivka area remains the primary contested zone. Russia making incremental advances exploiting US attention on Iran. Ukrainian forces stretched — ammunition shortfalls ongoing despite European resupply. Crimea bridge remains operational. Black Sea grain corridor intermittently disrupted.",
    active_fronts: ["Donetsk — primary active front. Russian incremental advances continuing. Avdiivka area most contested.", "Zaporizhzhia — intermittent shelling of nuclear plant raises radiation concerns. IAEA monitoring.", "Kherson — Ukrainian-held west bank. Cross-river operations ongoing.", "Kharkiv — Russian shelling of civilian infrastructure. City under persistent threat.", "Crimea — Ukrainian drone strikes on Russian naval assets continuing.", "Black Sea — Russian naval operations. Ukrainian maritime drones attacking Russian fleet."],
    recent_movements: ["Apr 2026: US redirected significant THAAD assets to Iran theater — Ukraine air defense degraded", "Mar 2026: European NATO members accelerating direct military support to compensate for US attention on Iran", "Mar 2026: Russia accelerating Donetsk offensive timed to US distraction", "Feb 2026: Ceasefire talks in Istanbul — stalled on territorial withdrawal preconditions", "Jan 2026: Ukraine struck multiple Russian oil facilities with long-range drones", "Dec 2025: Russia conducted largest drone attack on Ukrainian cities since start of war"],
    assessment: "The Iran war is Russia's strategic opportunity. US resources and attention are redirected. European support is increasing but cannot fully compensate. Russia is moving in Donetsk with deliberate patience — not a dramatic offensive, but incremental advances that accumulate. Ceasefire negotiations are active but both sides lack sufficient pressure to move from stated positions."
  },
  confirmed: ["War began February 24 2022 — Russian full-scale invasion of Ukraine", "Russia holds approximately 20% of Ukrainian territory as of April 2026", "US THAAD interceptors partially redirected to Iran theater — Ukraine air defense degraded", "European NATO members accelerating direct military support to compensate for US distraction", "Ceasefire talks in Istanbul active but stalled on territorial preconditions", "Russia making incremental advances in Donetsk timed to US distraction on Iran", "Ukraine conducting long-range drone strikes on Russian oil infrastructure", "Black Sea grain corridor intermittently disrupted", "Zaporizhzhia nuclear plant under intermittent shelling — IAEA on-site monitoring", "Russian forces have suffered 1,322,550+ casualties (Ukraine General Staff) as of April 2026", "Ukrainian forces have suffered 500,000–600,000 casualties (killed and wounded) as of April 2026", "15,172+ Ukrainian civilians killed, 41,378+ wounded (confirmed minimum, thought higher)", "12,000+ Ukrainian civilians killed (confirmed), 16,000+ captive", "394 Russian civilians killed in Western Russia, 1,074 including Crimea", "Russian attacks on Mykolaiv killed 8 civilians on 29 June 2022, 9 civilians including 2 children on 13 March 2022", "Russian missile strike on Odesa residential buildings killed 8 civilians including a 3-month-old baby on 23 April 2022", "Russian strike on Dnipro killed 3 civilians on 23 April 2026", "Russian shelling of Chernihiv region injured 1 civilian on 23 April 2026", "Ukrainian forces liberated over 480 square kilometers from Russian forces since February 2026"],
  developing: ["Whether US attention returns to Ukraine after Iran ceasefire — or whether the distraction creates permanent repositioning", "Whether European NATO support can fully compensate for US resource shift", "Whether Istanbul ceasefire talks produce anything substantive", "Whether Russia attempts a larger offensive while US is focused on Iran", "Whether Ukraine's long-range drone campaign on Russian oil infrastructure changes the economic calculus"],
  insights: ["Russia waited for its moment and found it. The Iran war is the US distraction Russia needed. The question is whether Moscow uses incremental advances to improve its negotiating position or attempts something larger.", "The THAAD redirection to Iran is the most concrete military consequence of the two-front problem. Ukraine's air defense is measurably degraded. Russia knows this.", "European NATO members stepping up is a structural shift — the Iran war is accelerating European strategic autonomy in a way that the Trump administration's NATO skepticism did not fully achieve on its own.", "Three years in, both sides have fought to a position where neither can achieve a decisive victory but neither can accept the terms the other is offering. That is a frozen conflict structure — dangerous because it can unfreeze suddenly."],
  questions: ["Does the Iran ceasefire (if achieved) allow US to redirect resources back to Ukraine — and how quickly?", "Is Russia attempting a larger offensive or using distraction for incremental consolidation?", "Do Istanbul ceasefire talks have any realistic path to agreement?", "Does European strategic autonomy on Ukraine survive as a durable shift or revert after the Iran crisis?"],
  people: [{
    name: "Vladimir Putin",
    role: "President, Russia",
    why: "Authorized the invasion. Managing the Iran-as-opportunity calculation in real time.",
    alignment: "Russia",
    status: "active"
  }, {
    name: "Volodymyr Zelensky",
    role: "President, Ukraine",
    why: "Navigating the most difficult moment of the war — US distraction, European uncertainty, front-line pressure.",
    alignment: "Ukraine",
    status: "active"
  }, {
    name: "Ursula von der Leyen",
    role: "President, European Commission",
    why: "Leading European coordination of Ukraine support during the US distraction. Her ability to hold European unity is the central variable in this story.",
    alignment: "EU",
    status: "active"
  }]
}, {
  id: "W04",
  tab: "war",
  connections: [],
  canada: null,
  implications: [],
  risks: [],
  code: "SDN-01",
  heat: 5,
  status: "active-war",
  updated: "Apr 23 2026",
  title: "Sudan — Civil War",
  sub: "SAF vs. RSF · The World's Forgotten War",
  card: "Sudan's civil war between the Sudanese Armed Forces and the Rapid Support Forces is now the world's largest humanitarian crisis. 150,000+ dead. 8.5 million displaced. Famine declared in multiple regions. Almost no international coverage.",
  toll: {
    confirmed_dead: "150,000+",
    confirmed_wounded: "Unknown",
    children_killed: "Unknown — estimated in the tens of thousands",
    displaced: "8,500,000+",
    note: "Figures from ACLED and UN. These are conservative estimates — the conflict zone is largely inaccessible to journalists and humanitarian workers. Actual casualties likely significantly higher. 25 million people face acute food insecurity."
  },
  front: {
    summary: "The Sudanese Armed Forces (SAF) and the Rapid Support Forces (RSF) — formerly allied — are fighting for control of Sudan after a power-sharing arrangement broke down in April 2023. RSF controls Darfur and large parts of Khartoum. SAF controls the north and east. Both sides have committed documented atrocities. The conflict has produced the world's largest displacement crisis.",
    active_fronts: ["Khartoum — capital divided. RSF controls much of western Khartoum, SAF controls east. Civilian infrastructure destroyed.", "Darfur — RSF dominant. Documented ethnic cleansing of Masalit people. Echoes of 2003-2004 Darfur genocide.", "Gezira State — formerly Sudan's agricultural heartland. RSF advance disrupting food production.", "Port Sudan — SAF-controlled, functioning as emergency capital. Red Sea access point.", "El Fasher — last major city in Darfur under SAF control. Under siege. Potential genocide designation if it falls."],
    recent_movements: ["Apr 2026: International attention near zero — Iran war dominating all coverage", "Mar 2026: RSF advance in Gezira continues — agricultural collapse accelerating", "Feb 2026: UN famine declaration for multiple Sudanese regions", "Jan 2026: El Fasher remains under siege — UN genocide warning active", "Nov 2025: Jeddah peace talks collapsed — no framework for negotiation", "Apr 2023: War began when power-sharing between SAF and RSF collapsed"],
    assessment: "Sudan is the world's most severe humanitarian crisis receiving the world's least coverage. The Iran war has absorbed all remaining international attention. El Fasher's siege is the most acute specific threat — if it falls, a genocide designation becomes likely. The RSF advance in Gezira is the slow-motion famine mechanism. This is a crisis that could be much worse in six months and nobody is watching."
  },
  confirmed: ["War began April 2023 when SAF-RSF power sharing collapsed", "150,000+ dead — ACLED estimate, likely an undercount", "8.5 million people displaced — world's largest displacement crisis", "UN declared famine in multiple Sudanese regions February 2026", "El Fasher under RSF siege — last major SAF-held city in Darfur", "Documented ethnic cleansing of Masalit people in Darfur — UN investigators calling it genocide", "25 million people face acute food insecurity — roughly half of Sudan's population", "Jeddah peace talks collapsed November 2025", "RSF advance in Gezira destroying Sudan's agricultural heartland", "International coverage near zero as Iran war dominates", "March 2026: RSF drone strike on White Nile hospital killed 10 medical staff", "March 2026: SAF airstrike on Darfur market killed dozens of civilians", "March 2026: UN reports nearly 700 civilians killed in drone strikes in first three months of 2026", "February 2026: RSF killed 6,000 civilians in three-day El Fasher massacre", "February 2026: UAE-backed RSF training camp confirmed in Ethiopia", "70-80% of health infrastructure in conflict zones non-operational (ICRC)", "October 2024: RSF killed 124 civilians in Al-Sireha village massacre", "June 2024: RSF killed 100+ civilians in Wad Al-Noora village attack", "May 2024: RSF killed 18 civilians in al-Tikaina village", "April 2024: RSF killed 28 civilians in Umm Adham village attack", "March 2024: RSF attacked 53 villages in Gezira State", "February 2024: RSF killed 16 civilians in Sherif Mukhtar village", "July 2023: RSF and allied militias killed 10,000+ in West Darfur ethnic violence", "May 2023: RSF and Arab militias killed 50+ civilians in Kassab refugee camp attack", "March 2026: RSF drone strike on Al-Jabalain hospital in White Nile State killed 12", "March 2026: RSF raided Al-Usra Hospital in Ed Daein, injuring medical staff", "March 2026: SAF airstrike on Ed Daein Hospital killed 70 and injured 146, leaving two million without medical coverage", "March 2026: RSF massacre of 16 civilians in El Fasher", "March 2026: RSF and SPLM-N (al-Hilu) took Kurmuk, displacing 73,000", "March 2026: RSF drone strike on Saraf Omra killed 22 and injured 17", "March 2026: EU imposed sanctions on seven individuals for escalating conflict", "March 2026: RSF drone attack on El-Obeid", "March 2026: SAF-JDF force retook Al-Dashol", "March 2026: RSF siege of Kadugli broken by SAF, followed by RSF drone strikes killing 15", "March 2026: RSF and SPLM-N (al-Hilu) seized Deim Mansour, Bashir Nuqu, and Khor al-Budi", "March 2026: RSF drone strike on military hospital in Kadugli killed one", "March 2026: UK imposed sanctions on six individuals sustaining conflict", "March 2026: RSF drone strike on military hospital in Kouik killed 22", "March 2026: SAF drone strike on market in West Kordofan injured 11", "March 2026: RSF drone strikes on truck convoys in North Kordofan killed at least one", "March 2026: RSF drone attack on displaced families near Er Rahad killed 24 including eight children", "March 2026: RSF drone strike on food supply vehicle near Umm Ruwaba killed three", "March 2026: SAF destroyed RSF air defense system and drones in Ed Dubeibat"],
  developing: ["Whether El Fasher falls — and what a genocide designation would mean in practice", "Whether any international pressure mounts as Iran crisis attention eventually dissipates", "Whether SAF or RSF achieves decisive battlefield advantage", "Whether famine conditions spread beyond current regions", "Whether Egypt or UAE (both involved with different factions) push for negotiated settlement", "Impact of Chad's border closure on refugee flows", "Extent of UAE logistical support to RSF via Ethiopia", "Whether SAF can sustain drone warfare campaign against RSF", "Potential regional spillover as conflict draws in Chad and Ethiopia", "Whether RSF continues systematic village massacres in Gezira and Sennar states", "Whether SAF-aligned militias escalate retaliatory attacks on civilians", "Whether hospital attacks and medical worker targeting intensifies"],
  insights: ["Sudan is what happens when a humanitarian crisis has no geopolitical sponsor. Iran has oil and nukes. Ukraine has NATO allies. Sudan has nothing that the major powers need urgently — so 150,000 people have died in relative silence.", "The RSF is backed by UAE and Wagner. The SAF is backed by Egypt. The proxy war dimension explains why the Jeddah talks failed — neither external patron wants the other to win.", "The Gezira advance is more consequential than the military maps suggest. Gezira was Sudan's breadbasket. Its destruction is famine-as-weapon — a slow mechanism more deadly than direct killing.", "This story will matter more when the Iran crisis ends and international attention returns. The trajectory is clearly worse. Whoever is paying attention at that point will find a country that has been destroyed.", "Drone warfare has become the defining feature of this conflict — with both sides using them indiscriminately against civilian targets including hospitals, markets and schools.", "The UAE's dual role as both peace mediator and RSF backer undermines all diplomatic efforts while ensuring continued arms flows.", "Village massacres in Gezira follow a clear pattern: surround, demand money/cars, then execute civilians when demands aren't met — a terror tactic to depopulate agricultural regions.", "Hospital attacks constitute systematic warfare against civilian infrastructure — 46 verified assaults documented, with medical personnel specifically targeted by both sides.", "The RSF's use of ethnic slurs during massacres ('kill the slave', 'zorga') reveals genocidal intent in Darfur operations.", "Foreign nationals from 7+ countries killed demonstrates the conflict's indiscriminate nature and regional destabilization potential."],
  questions: ["Does El Fasher fall while the world is watching Iran?", "Does the UAE-SAF-RSF-Egypt proxy structure prevent any negotiated settlement?", "When does international attention return to Sudan — and what will they find?", "Is there any external actor with enough influence over both sides to broker a ceasefire?", "Will the UN Security Council act on mounting evidence of genocide?", "How will regional powers like Chad and Ethiopia respond to border incursions?", "Can humanitarian corridors be established given the breakdown of medical infrastructure?", "Will documented war crimes against hospitals and medical workers lead to ICC action?", "Are RSF village massacres in Gezira a deliberate strategy to depopulate agricultural regions?", "How many more foreign nationals will be killed as conflict persists?"],
  people: [{
    name: "Abdel Fattah al-Burhan",
    role: "SAF Commander / de facto head of state",
    why: "Led the original coup, then the war against his former partner. Controls the north and east, has Egyptian backing.",
    alignment: "SAF/Egypt",
    status: "active"
  }, {
    name: "Mohamed Hamdan Dagalo (Hemedti)",
    role: "RSF Commander",
    why: "The former paramilitary leader who turned his forces against the SAF. Controls Darfur and much of Khartoum. Has UAE backing.",
    alignment: "RSF/UAE",
    status: "active"
  }, {
    name: "Abu Aagla Kaikal",
    role: "Defected RSF Field Commander",
    why: "Former RSF governor of Gezira State who defected to SAF in October 2024, triggering retaliatory massacres by RSF.",
    alignment: "Former RSF, now SAF",
    status: "active"
  }]
}, {
  id: "W05",
  tab: "war",
  connections: [],
  canada: null,
  implications: [],
  risks: [],
  code: "MMR-01",
  heat: 3,
  status: "active-war",
  updated: "Apr 7 2026",
  title: "Myanmar — Civil War",
  sub: "Military Junta vs. Resistance · Year 4",
  card: "Myanmar's military junta is losing ground to a coalition of resistance forces in the most significant territorial shifts since the 2021 coup. Three Brotherhood Alliance making advances. Junta response: scorched earth against civilian populations.",
  toll: {
    confirmed_dead: "50,000+",
    confirmed_wounded: "Unknown",
    children_killed: "Unknown — estimated thousands",
    displaced: "2,600,000+",
    note: "ACLED and UN figures. Internal displacement of 2.6 million is a minimum — OCHA estimates higher. Near-total information blackout makes accurate casualty counts impossible. Humanitarian access severely restricted."
  },
  front: {
    summary: "The military junta (Tatmadaw) that seized power in February 2021 is facing the most significant resistance it has encountered. The Three Brotherhood Alliance — comprising the Arakan Army, Myanmar National Democratic Alliance Army, and Ta'ang National Liberation Army — launched Operation 1027 in October 2023 and has made sustained territorial gains. The National Unity Government (NUG) and People's Defence Forces (PDF) are fighting in parallel. The junta has responded with airstrikes and artillery on civilian areas.",
    active_fronts: ["Shan State — Three Brotherhood Alliance holds significant territory. Operation 1027 ongoing.", "Rakhine State — Arakan Army controls most of the state including the strategic Kyaukphyu deep-sea port.", "Sagaing Region — PDF operations against junta forces. Junta responding with village burning.", "Karen State — Karen National Union operations. Long-running front now connected to broader resistance.", "Mandalay Region — resistance forces approaching Myanmar's second city.", "Chin State — Chin National Front and PDF joint operations."],
    recent_movements: ["Apr 2026: Resistance forces advancing toward Mandalay — would be most significant urban capture since coup", "Mar 2026: Arakan Army consolidated control of Rakhine State including Kyaukphyu port", "Feb 2026: Junta conducting airstrikes on civilian areas in Sagaing at increased rate", "Jan 2026: Three Brotherhood Alliance rejected junta ceasefire offer", "Oct 2023: Operation 1027 launched — the turning point of the conflict"],
    assessment: "The junta is losing the military contest in much of the country outside major cities. But losing territory does not mean losing power — the junta controls Naypyidaw and Yangon, the international banking system access, and the air force. The resistance is fragmented across ethnic and political lines. A junta collapse is possible; a unified post-junta governance structure is not yet visible."
  },
  confirmed: ["Military coup February 2021 — elected government of Aung San Suu Kyi removed", "Operation 1027 launched October 2023 — Three Brotherhood Alliance territorial advances", "Arakan Army controls most of Rakhine State including Kyaukphyu strategic port", "Resistance forces advancing toward Mandalay as of April 2026", "Junta conducting airstrikes on civilian populations — documented in Sagaing and Chin State", "2.6 million internally displaced — OCHA minimum estimate", "Three Brotherhood Alliance rejected junta ceasefire offer January 2026", "China brokered temporary ceasefire in late 2023 — collapsed"],
  developing: ["Whether resistance forces take Mandalay — would be a decisive symbolic and strategic shift", "Whether junta collapses or finds a way to hold the cities while losing the countryside", "Whether China pushes for negotiated settlement to protect its Belt and Road investments (Kyaukphyu port)", "Whether ASEAN does anything beyond issuing statements", "Whether the resistance coalition holds together if the junta weakens"],
  insights: ["The Arakan Army taking Kyaukphyu port is strategically significant beyond Myanmar — it sits at the end of a Chinese pipeline that carries oil and gas from the Bay of Bengal to Yunnan Province. China now has to negotiate with the Arakan Army for its own energy infrastructure.", "The junta is losing the war but not necessarily losing power — controlling the cities, banks, and air force is enough to maintain a brutal stalemate indefinitely. What breaks a stalemate is external pressure. China is the only actor with sufficient leverage.", "This conflict has been running for three years with almost no international coverage and no serious international engagement. The Iran war has completely displaced it from any diplomatic attention."],
  questions: ["Does Mandalay fall — and what does that mean for the junta's viability?", "Does China pressure the junta toward a negotiated settlement to protect Kyaukphyu?", "Can the resistance coalition maintain unity as it gains territory?", "What does a post-junta governance structure look like — and is any actor building it?"],
  people: [{
    name: "Min Aung Hlaing",
    role: "Junta Commander / de facto head of state",
    why: "Led the 2021 coup. Under ICC investigation. His government is losing territory but not yet power.",
    alignment: "Junta/Tatmadaw",
    status: "active"
  }, {
    name: "Aung San Suu Kyi",
    role: "Former State Counsellor (imprisoned)",
    why: "Democratically elected leader imprisoned since the coup. Her status is a political symbol but she has no operational role.",
    alignment: "NLD (imprisoned)",
    status: "imprisoned"
  }]
}, {
  id: "W06",
  tab: "war",
  connections: [],
  canada: null,
  implications: [],
  risks: [],
  code: "SAH-01",
  heat: 3,
  status: "developing",
  updated: "Apr 7 2026",
  title: "Sahel — Fragmented Conflicts",
  sub: "Mali, Burkina Faso, Niger · Coups, Wagner, and the New Disorder",
  card: "A series of coups has expelled French forces from West Africa's Sahel. Russia's Africa Corps (formerly Wagner) has filled the vacuum. Jihadist insurgencies continue. The great power competition for Africa is playing out here first.",
  toll: {
    confirmed_dead: "30,000+ (combined, 2020-present)",
    confirmed_wounded: "Unknown",
    children_killed: "Unknown — thousands documented",
    displaced: "3,000,000+",
    note: "Combined figures across Mali, Burkina Faso, Niger conflicts against jihadist groups (JNIM and ISGS). Separate from civilian casualties from coup-related political violence. UNHCR displacement figures. Information access severely limited."
  },
  front: {
    summary: "The Sahel theater is not a single war but a cluster of overlapping conflicts. Jihadist insurgencies (JNIM and Islamic State Greater Sahara) are fighting across all three countries. The coup governments have expelled French counterterrorism forces (Operation Barkhane, MINUSMA) and replaced them with Africa Corps (Russia). The security situation has not improved — in most metrics it has worsened since the coups. The great-power competition for Africa is most visible and most contested here.",
    active_fronts: ["Central Mali — JNIM (Jama'at Nusrat al-Islam wal-Muslimin) controls significant territory. Africa Corps operations ongoing.", "Northern Burkina Faso — JNIM and ISGS active. Burkina Faso junta severed French ties, invited Africa Corps.", "Western Niger — ISGS (Islamic State Greater Sahara) active. Niger junta expelled French and US forces.", "Chad border region — spillover violence. Chad junta navigating between French and Russian relationships.", "Nigeria-Niger border — Boko Haram related spillover into Niger from northeast Nigeria."],
    recent_movements: ["Apr 2026: Alliance of Sahel States (Mali, Burkina Faso, Niger) deepening security coordination", "Mar 2026: JNIM attacks on Mali army positions near Bamako increasing in frequency", "Feb 2026: Africa Corps expanded presence in Burkina Faso following additional French personnel expulsion", "Jan 2026: Niger expelled US forces from Agadez air base — key counterterrorism drone base", "Nov 2025: MINUSMA (UN peacekeeping) fully withdrawn from Mali — security vacuum growing"],
    assessment: "The Sahel coups achieved their primary goal — expelling French presence. They have not achieved their secondary goal — improving security. Jihadist activity has generally increased since the Wagner/Africa Corps takeover. This creates a paradox: the coup governments need Russia for political legitimacy but Russia's forces are not winning the insurgency. The next phase is unclear — whether any external actor can succeed where France and the UN failed."
  },
  confirmed: ["Coups in Mali (2021), Burkina Faso (2022), Niger (2023) expelled French military presence", "Alliance of Sahel States (AES) formed — Mali, Burkina Faso, Niger in political and security bloc", "Africa Corps (former Wagner, now formally Russian state) operating in all three AES countries", "France's Operation Barkhane ended and MINUSMA fully withdrawn", "US expelled from Agadez air base in Niger January 2026 — significant counterterrorism capability loss", "Jihadist activity (JNIM, ISGS) generally increasing since French withdrawal — multiple independent assessments", "Niger junta expelled French ambassador and suspended cooperation with EU missions", "Chad navigating between French relationship and AES pressure"],
  developing: ["Whether Africa Corps can achieve security outcomes France and the UN could not", "Whether the AES deepens into a formal military alliance with external sponsor (Russia)", "Whether US develops alternative counterterrorism architecture after Agadez expulsion", "Whether jihadist groups expand south into coastal West Africa (Ghana, Ivory Coast, Benin)", "Whether China uses the security vacuum to expand Belt and Road influence in the Sahel"],
  insights: ["The Sahel coups are a story about legitimacy, not security. The populations chose instability and Russian association over continued French presence. That is a statement about the depth of grievance against the colonial relationship — not an endorsement of military governance.", "Africa Corps is not winning the insurgency. French forces were not winning it either. The question nobody has answered is whether the insurgency is winnable at all, or whether the underlying conditions (poverty, governance failure, climate stress) make any military solution temporary.", "The Agadez expulsion is a strategic loss for US counterterrorism that receives almost no coverage. Agadez was the hub for drone operations across the central Sahel. Without it, the US has no persistent ISR presence over the region.", "The jihadist groups are the long game. They don't need to win battles — they need to outlast every external actor and make governance impossible. They have been succeeding at this for a decade."],
  questions: ["Can Africa Corps achieve security outcomes that French forces and the UN could not?", "Do jihadist groups expand south into coastal West Africa — and what does that trigger?", "Does the US find an alternative architecture for Sahel counterterrorism after Agadez?", "Is there a governance model that can address the underlying conditions driving the insurgency?"],
  people: [{
    name: "Assimi Goïta",
    role: "Junta leader, Mali",
    why: "Led the first Sahel coup. His invite to Wagner/Africa Corps set the template that Burkina Faso and Niger followed.",
    alignment: "AES/Russia-aligned",
    status: "active"
  }, {
    name: "Ibrahim Traoré",
    role: "Junta leader, Burkina Faso",
    why: "Youngest coup leader in African history. Has been most aggressive in expelling Western presence.",
    alignment: "AES/Russia-aligned",
    status: "active"
  }, {
    name: "Abdourahamane Tiani",
    role: "Junta leader, Niger",
    why: "Expelled French and US forces — including the Agadez drone base that was central to US counterterrorism in the region.",
    alignment: "AES/Russia-aligned",
    status: "active"
  }]
}, {
  id: "W07",
  tab: "war",
  connections: [],
  canada: null,
  implications: [],
  risks: [],
  code: "LBN-01",
  heat: 5,
  status: "active-war",
  updated: "Apr 23 2026",
  title: "Lebanon — Hezbollah Front",
  sub: "Hezbollah vs. Israel · Direct front activated by Iran war",
  card: "Hezbollah escalated to sustained high-intensity operations following Operation Epic Fury. Precision munitions and rocket barrages at northern Israel. First direct state-level involvement from an Iran proxy since October 7. Lebanon's civilian population in the north caught between both sides.",
  toll: {
    confirmed_dead: "2,454+ (current phase since March 2 2026)",
    confirmed_wounded: "7,658+",
    children_killed: "unconfirmed",
    displaced: "1,200,000+",
    note: "Lebanese government figures as of April 21 2026. IDF reports 1,400+ Hezbollah fighters killed. Israeli casualties: 14 soldiers killed, 8,300+ wounded (565 military)."
  },
  front: {
    summary: "Hezbollah has been in active exchange with Israel since October 8 2023 — one day after the Hamas attack. The conflict escalated sharply in September-October 2024 with Israeli strikes on Hezbollah leadership including Nasrallah. It escalated again February 28 2026 when Operation Epic Fury activated the Iran axis of resistance. Hezbollah is now in what it calls sustained high-intensity operations — precision missiles, anti-tank missiles, and rocket barrages targeting northern Israel. Israeli strikes are targeting Hezbollah infrastructure across southern Lebanon and the Bekaa Valley.",
    active_fronts: ["Southern Lebanon — primary ground contact zone. IDF operating inside Lebanon. Hezbollah anti-tank and precision missile operations.", "Bekaa Valley — Hezbollah's strategic depth. Israeli airstrikes on weapons storage and command infrastructure.", "Northern Israel (Galilee) — under persistent Hezbollah fire. Evacuated civilian population. Agricultural land and infrastructure damaged.", "Beirut suburbs (Dahiyeh) — Israeli strikes on Hezbollah political and military infrastructure.", "Syria border — Hezbollah supply lines and weapons transfer routes under Israeli interdiction."],
    recent_movements: ["Apr 21 2026: IDF kills Hezbollah operatives violating ceasefire near Qoussair", "Apr 21 2026: False alarm rocket sirens in Kfar Yuval and Ma’ayan Baruch triggered by IDF 'false identification'", "Apr 18 2026: IDF soldier killed, 8 wounded in southern Lebanon explosion", "Apr 17 2026: IDF soldier killed entering booby-trapped building in Lebanon", "Apr 17 2026: IDF kills Hezbollah members in drone strikes", "Apr 8 2026: Israeli 60-second strike kills 250 Hezbollah operatives across 100 targets — most devastating single attack since pager operation", "Apr 1 2026: Israeli naval strike kills Hezbollah Southern Front commander Haj Youssef Ismail Hashem", "Mar 2026: IDF begins targeted ground operations in southern Lebanon, establishes forward defense area", "Feb 28 2026: Operation Epic Fury launched — Hezbollah activated full front same day"],
    assessment: "Hezbollah is fighting at a degraded level compared to its 2006 peak — Israel's October 2024 leadership decapitation was real. The current ceasefire violations demonstrate continued operational capacity despite heavy losses. The Iran war has increased the intensity but Hezbollah's long-term position depends entirely on the Iran ceasefire outcome — if Iran makes peace, Hezbollah has no strategic reason to continue at this intensity."
  },
  confirmed: ["Hezbollah front opened October 8 2023 — one day after Hamas attack", "Israel killed Hezbollah Secretary-General Nasrallah and most senior leadership in October 2024", "Hezbollah escalated to sustained high-intensity operations February 28 2026 following Operation Epic Fury", "Precision munitions and rockets targeting northern Israel daily", "IDF operating inside southern Lebanon", "Israeli airstrikes targeting Hezbollah infrastructure in Bekaa Valley and Beirut suburbs", "100,000+ northern Israeli residents displaced since October 2023", "Lebanon civilian infrastructure damaged — south Lebanon effectively depopulated in conflict zone", "Apr 8 2026: Israeli 60-second strike kills 250 Hezbollah operatives across 100 targets", "Apr 1 2026: Israeli naval strike kills Hezbollah Southern Front commander Haj Youssef Ismail Hashem", "Mar 2 2026: Hezbollah rocket barrage triggers full-scale Israeli response, beginning current high-intensity phase", "Apr 21 2026: IDF kills Hezbollah operatives violating ceasefire near Qoussair", "Apr 21 2026: False alarm rocket sirens in northern Israel triggered by IDF 'false identification' system"],
  developing: ["Whether Iran ceasefire (if achieved) leads to Hezbollah stand-down or separate negotiation", "Whether Hezbollah's degraded leadership affects operational capacity in sustained high-intensity operations", "Whether IDF expands ground operations inside Lebanon", "Whether Lebanon's fragile government and economy survive the additional shock", "Impact of April 8 mass casualty strike on Hezbollah command structure", "Potential for Syrian intervention as Hezbollah reinforcements observed at border", "Ceasefire violations and potential for renewed escalation", "US-mediated Israel-Lebanon direct negotiations proposed for late April"],
  insights: ["Hezbollah is the strategic reserve Iran is burning. Every precision missile it fires is depleting a stockpile that took years to build. If Iran makes peace, Hezbollah ceases fire and waits. If Iran is destroyed, Hezbollah has no resupply. Either way, the Lebanon front is derivative of the Iran outcome.", "The October 2024 leadership decapitation degraded Hezbollah significantly — but it did not destroy it. The organization rebuilt around a second tier of commanders. That resilience is the most important lesson Israel should take from Lebanon.", "Northern Israel has been effectively evacuated for 18 months. 100,000 people cannot return home. That is a strategic success for Hezbollah regardless of military outcomes.", "The April 8 mass casualty strike demonstrates Israel's ability to conduct simultaneous precision strikes across Lebanon — a capability that could be decisive if expanded.", "Ceasefire violations persist despite diplomatic efforts — IDF continues targeting Hezbollah operatives crossing demarcation lines"],
  questions: ["Does an Iran ceasefire automatically end the Hezbollah front or does it require a separate negotiation?", "How much of Hezbollah's precision missile stockpile remains after 18 months of operation?", "Does Israel attempt a decisive ground operation in Lebanon before an Iran ceasefire?", "What does Lebanon look like after the war — economically, politically, governmentally?", "Will Hezbollah's admission that the war began as revenge for Khamenei's assassination affect Lebanese public support?", "How will ceasefire violations impact ongoing negotiations?", "Will proposed US-mediated Israel-Lebanon talks materialize in coming weeks?"],
  people: [{
    name: "Naim Qassem",
    role: "Hezbollah Secretary-General (post-Nasrallah)",
    why: "Second-tier commander elevated after Nasrallah's killing. Running the current high-intensity operations.",
    alignment: "Hezbollah/Iran",
    status: "active"
  }, {
    name: "Hassan Nasrallah",
    role: "Former Hezbollah Secretary-General",
    why: "Killed by Israel October 2024. His death degraded Hezbollah significantly but did not destroy it.",
    alignment: "Hezbollah",
    status: "deceased"
  }, {
    name: "Benjamin Netanyahu",
    role: "PM, Israel",
    why: "Authorized the Lebanon operations as part of the broader Iran strategy.",
    alignment: "Israel",
    status: "active"
  }, {
    name: "Haj Youssef Ismail Hashem",
    role: "Hezbollah Southern Front commander",
    why: "Killed by Israeli naval strike April 1 2026 — significant leadership loss in active combat zone.",
    alignment: "Hezbollah",
    status: "deceased"
  }, {
    name: "Ali Rida Abbas",
    role: "Hezbollah commander in Bint Jbeil",
    why: "Killed by Israeli strike April 18 2026 during ceasefire period.",
    alignment: "Hezbollah",
    status: "deceased"
  }]
}, {
  id: "W08",
  tab: "war",
  connections: [],
  canada: null,
  implications: [],
  risks: [],
  code: "PAK-01",
  heat: 3,
  status: "developing",
  updated: "Apr 7 2026",
  title: "Pakistan-India — Kashmir Tension",
  sub: "Nuclear neighbors · Escalation risk while US watches Iran",
  card: "Pakistan-India tensions over Kashmir at elevated levels. US attention fully on Iran. Both sides deploying naval assets in Gulf of Oman. The tracker's highest-probability escalation risk that nobody is monitoring.",
  toll: {
    confirmed_dead: "300+ (Line of Control incidents, 2025-2026)",
    confirmed_wounded: "500+",
    children_killed: "Unknown",
    displaced: "Unknown",
    note: "Line of Control incident figures only — not full Kashmir conflict which has been ongoing since 1947. These are current-phase casualties from recent escalation, not the historical total. Full conflict since 1989 insurgency: 70,000-100,000 dead depending on source."
  },
  front: {
    summary: "Pakistan and India have fought three major wars (1947, 1965, 1971) and one limited conflict (Kargil 1999). Both are nuclear powers. The current tension is centered on the Line of Control in Kashmir — a de-facto border established after the 1947 war that neither side fully accepts. Cross-LoC firing incidents, militant infiltration from Pakistan, and Indian security operations in Jammu and Kashmir have elevated to levels not seen since the 2019 Pulwama-Balakot exchange. The US, which has historically served as a mediator, is fully focused on Iran.",
    active_fronts: ["Line of Control (Kashmir) — elevated cross-border firing. Both sides reinforcing positions.", "Gulf of Oman — Indian and Pakistani naval destroyers escorting tankers in parallel. Unusual proximity.", "Pakistan-Afghanistan border — TTP (Tehrik-i-Taliban Pakistan) operations complicating Pakistani military posture.", "Indian Ocean — both navies conducting patrols. Not in direct confrontation but aware of each other."],
    recent_movements: ["Apr 2026: Indian and Pakistani destroyers escorting tankers in Gulf of Oman — unusual parallel deployment", "Mar 2026: Cross-LoC incidents at elevated level — both sides reinforcing forward positions", "Feb 2026: India expelled two Pakistani diplomats following militant attack in Jammu", "Jan 2026: Pakistan test-fired medium-range ballistic missile — described as routine", "2025: Multiple militant attacks in Jammu and Kashmir attributed to Pakistan-linked groups"],
    assessment: "This is the tracker's highest-probability escalation risk that is receiving the least attention. The structural conditions for a Pulwama-type exchange — a mass casualty militant attack attributed to Pakistan, followed by Indian military response — are present. US mediation capacity is absent. A 2019-style exchange that escalates further cannot be ruled out. The nuclear dimension means this is categorically different from any other conflict in the tracker."
  },
  confirmed: ["Pakistan and India are both nuclear powers", "Both have fought three major wars and one limited conflict since partition", "Cross-LoC incidents elevated in 2025-2026 — both sides reinforcing positions", "Indian and Pakistani naval destroyers escorting tankers in Gulf of Oman in parallel operations", "India expelled two Pakistani diplomats following militant attack in Jammu February 2026", "Pakistan test-fired medium-range ballistic missile January 2026", "US mediation capacity absent — attention fully on Iran", "2019 Pulwama-Balakot exchange established that limited military exchange is possible — and survivable for both governments politically"],
  developing: ["Whether a mass-casualty militant attack in India triggers a Pulwama-style response", "Whether US returns diplomatic attention to the region before or after an incident", "Whether the Gulf of Oman naval proximity produces any incident", "Whether Pakistan's TTP pressure forces military resources away from Kashmir focus", "Whether China plays any mediating role given its relationships with both countries"],
  insights: ["This is the world's most dangerous unmonitored escalation risk. Two nuclear powers with active territorial dispute, elevated military posture, absent US mediation, and domestic political incentives on both sides that make de-escalation politically costly.", "The 2019 precedent is actually dangerous in the wrong direction. Pulwama-Balakot showed both governments that a limited exchange is politically survivable. That lowers the threshold. What neither government has fully modeled is what happens if an exchange goes a step further.", "Pakistan's TTP problem is a complicating factor — Pakistan's military is stretched between its western border (Afghanistan/TTP) and its eastern border (India/Kashmir). Internal pressure may paradoxically make escalation more likely, not less.", "India under Modi has consistently taken harder lines on Pakistan than previous governments. The BJP's political base expects it. That is not an argument for escalation but it is an argument that de-escalation is politically costly in a way it wasn't under previous governments."],
  questions: ["Is there any US diplomatic engagement with India-Pakistan despite Iran focus?", "What does a Pulwama-level incident look like in 2026 — and would the response be the same or larger?", "Does China play a mediating role — it has relationships with both countries and strong interest in stability?", "What is the actual nuclear threshold — and has either side updated their red lines since 2019?"],
  people: [{
    name: "Narendra Modi",
    role: "PM, India",
    why: "His government has taken the hardest line on Pakistan in a generation. Domestic political incentives favor toughness over de-escalation.",
    alignment: "India",
    status: "active"
  }, {
    name: "Shehbaz Sharif",
    role: "PM, Pakistan",
    why: "Navigating military pressure from within Pakistan and external pressure from India, while managing TTP on the western border.",
    alignment: "Pakistan",
    status: "active"
  }, {
    name: "General Asim Munir",
    role: "Chief of Army Staff, Pakistan",
    why: "The Pakistani military remains the primary foreign policy actor on India. His read of the strategic situation is what matters most.",
    alignment: "Pakistan military",
    status: "active"
  }]
},, {
  id: "C01",
  tab: "canada",
  implications: [],
  risks: [],
  code: "CARNEY-01",
  heat: 5,
  status: "escalating",
  updated: "Apr 23 2026",
  title: "The Carney Government",
  sub: "Majority Mandate & Economic Reorientation",
  card: "Carney secured parliamentary majority through byelection wins and defections. Launches trade advisory council while confronting Trump administration over CUSMA terms. Trade tensions escalate as July deadline approaches.",
  summary: "Mark Carney's Liberals secured a parliamentary majority on April 13, 2026 through three byelection victories and five opposition defections, giving them 174 of 343 Commons seats. The government is now aggressively pursuing its economic independence agenda, announcing a 24-member Advisory Committee on Canada-U.S. Economic Relations including cross-partisan figures (Charest, O'Toole, Raitt). Carney has taken a hard line on CUSMA renegotiations, stating the U.S. won't dictate terms and refusing further concessions without American reciprocity. Multiple sources confirm U.S. is demanding pre-negotiation 'entry fees' including dairy market access and liquor tariff removals. Trade tensions are escalating with Canada refusing to separate CUSMA talks from Trump's steel/aluminum tariffs.",
  bg: "Mark Carney is an unusual politician — a former central banker who ran the Bank of Canada during the 2008 financial crisis and the Bank of England during Brexit. His majority government, achieved through both electoral wins and unprecedented defections, now faces its first major test in CUSMA negotiations. The structural reality remains: Canada's economy is deeply integrated with the US (70% of exports), making genuine diversification difficult amid Trump's escalating tariff regime. Carney has framed Canada's U.S. dependence as 'weaknesses we must correct' while his trade minister insists dairy quotas won't be reopened. The confrontation reveals Carney's strategic gamble — leveraging parliamentary majority to resist U.S. pressure while positioning for longer-term realignment.",
  confirmed: [
    "Carney's Liberals won all three April 2026 byelections (Toronto ridings + Quebec's Terrebonne), securing parliamentary majority with 174 seats",
    "Five opposition MPs defected to Liberals prior to byelections (four Conservatives, one Bloc Québécois)",
    "Announced 24-member Advisory Committee on Canada-U.S. Economic Relations on April 21, chaired by Dominic LeBlanc", 
    "Committee appointments include Erin O'Toole, Jean Charest, Lisa Raitt, Ralph Goodale, and major industry CEOs",
    "First committee meeting scheduled for April 27 ahead of July 1 CUSMA review deadline",
    "Carney refused further concessions without reciprocity: 'It's not a case of the United States dictates the terms' (Apr 22)",
    "USTR Jamieson Greer confirmed Canada-US trade models 'don't fit together well' in congressional testimony (Apr 22)",
    "85% of Canada-US trade remains tariff-free under CUSMA, per government statement",
    "Radio-Canada reports US demanded concessions as 'entry fee' before negotiations (Apr 21)",
    "Janice Charette (Canada's chief negotiator) confirmed digital tax repeal/liquor tariff withdrawals haven't yielded US concessions",
    "Mexico-US formal negotiations begin May 2026; no Canada-US date set"
  ],
  developing: [
    "US demands for dairy quota improvements and provincial alcohol bans",
    "Canadian counterproposals addressing steel/aluminum tariffs within CUSMA framework",
    "Possibility of missed July 1 deadline triggering annual review cycle",
    "Advisory committee recommendations on strategic concessions",
    "US threat of border controls if rules of origin aren't revised",
    "Quebec nationalist positioning after Terrebonne win affects dairy negotiation stance",
    "Growing provincial opposition to US liquor restocking demands"
  ],
  insights: [
    "Carney's hardline stance reflects confidence from majority status and domestic political cover", 
    "Inclusion of Conservative figures gives bipartisan legitimacy to eventual concessions",
    "US negotiating from position of strength with active Mexico track ongoing",
    "Digital tax reversal shows Carney willing to concede on non-core issues",
    "Dairy remains political third rail despite US pressure",
    "Committee timing suggests Carney seeks strategic consensus before making difficult choices",
    "Trump's unpredictable interventions remain wild card in negotiations"
  ],
  questions: [
    "Will committee recommendations provide Carney political cover for concessions?",
    "How will US respond to linkage of sectoral tariffs with CUSMA renewal?",
    "Does Mexican negotiation progress pressure Canada to compromise?",
    "Can Carney maintain cross-partisan unity as talks intensify?",
    "Will Trump personally intervene given past threats against Canada?",
    "How will provinces react if alcohol bans become bargaining chip?"
  ],
  people: [{
    name: "Mark Carney",
    role: "Prime Minister, Canada",
    why: "Taking hardline stance in negotiations while managing domestic expectations of economic relief.",
    alignment: "Liberal/Federal",
    status: "active"
  }, {
    name: "Pierre Poilievre",
    role: "Conservative Leader",
    why: "Criticizing negotiation tactics but key allies (O'Toole, Charest) serving on advisory committee.",
    alignment: "Conservative/Opposition", 
    status: "active"
  }, {
    name: "Dominic LeBlanc",
    role: "Minister for Canada-US Trade",
    why: "Leading negotiations and advisory committee. Publicly stated dairy quotas won't be reopened.",
    alignment: "Liberal/Federal",
    status: "rising"
  }, {
    name: "Donald Trump",
    role: "US President", 
    why: "Ultimate decision-maker on US trade demands. History of personal interventions.",
    alignment: "US",
    status: "active"
  }, {
    name: "Jamieson Greer",
    role: "US Trade Representative",
    why: "Leading US negotiations. Warned of possible border controls if rules of origin aren't revised.",
    alignment: "US",
    status: "rising"
  }, {
    name: "Jean Charest",
    role: "Former Quebec Premier",
    why: "Committee member confirming extravagant US demands in media leaks.",
    alignment: "Conservative/Advisor",
    status: "monitor"
  }]
}, {
  id: "C02",
  tab: "canada",
  implications: [],
  risks: [],
  code: "CUSMA-01",
  heat: 4,
  status: "developing",
  updated: "Apr 23 2026",
  title: "CUSMA Under Pressure",
  sub: "Trade Agreement Review · US Demands · Canadian Red Lines",
  card: "CUSMA negotiations intensify as July 1 review approaches. US pushing for structural changes while Canada resists unilateral concessions. Key sticking points include dairy TRQ administration, supply management, and US demands for upfront concessions before formal talks begin.",
  summary: "The Canada-United States-Mexico Agreement faces its scheduled six-year review amid escalating US demands and Canadian resistance. While Canada signals readiness to negotiate ('won't be the source of delay'), US officials demand structural concessions before formal talks begin - including overhaul of dairy tariff-rate quotas and provincial liquor bans. Prime Minister Carney rejects US framing of talks as unilateral dictate ('we have counter-proposals'). Critical deadlines approach: June 1 US Congressional notification and July 1 review date - though Canadian officials emphasize this is 'checkpoint not cliff'. Negotiations complicated by US-Mexico bilateral talks outpacing Canada-US discussions.",
  bg: "NAFTA — the North American Free Trade Agreement — was signed in 1994 and created the world's largest free trade zone. It governed roughly $2.4 trillion in annual trade between Canada, the US, and Mexico. Trump renegotiated it in his first term, producing CUSMA (Canada calls it CUSMA, the US calls it USMCA, Mexico calls it T-MEC). The renegotiation was genuinely difficult — Canada lost ground on dairy and accepted new automotive content rules — but it preserved the fundamental architecture including Chapter 19, which allows each country to challenge the others' trade rulings before independent panels rather than domestic courts.\n\nChapter 19 matters enormously to Canada because the US has a long history of imposing anti-dumping and countervailing duties on Canadian exports — softwood lumber being the most persistent example — and then losing when those duties are challenged in independent panels. The US has repeatedly tried to eliminate Chapter 19. Canada has repeatedly refused. That fight will be central to the current review.\n\nThe broader context: Canada sends approximately 75% of its exports to the United States. There is no alternative market that can absorb that volume on any realistic timeline. This is the structural fact that constrains every Canadian trade negotiation.",
  confirmed: ["CUSMA scheduled six-year review triggered — process formally underway", "US has signaled demands on dairy supply management — Canada's protected domestic dairy sector", "Automotive rules of origin under pressure — US wants higher US-content requirements", "Chapter 19 dispute resolution mechanism — US has historically sought its elimination, Canada considers it non-negotiable", "Digital services provisions — US tech companies pushing for changes to Canadian digital content rules", "Canada sends approximately 75% of exports to the United States — structural dependence constraint", "Liberation Day April 2 tariffs applied on top of existing CUSMA framework — US treating them as separate", "Softwood lumber dispute continues in parallel — perennial Canada-US trade irritant", "Canadian steel and aluminum subject to ongoing US tariff threats despite CUSMA", "Trade Minister Dominic LeBlanc stated Canada 'won’t be the source of any delay' in CUSMA renewal talks", "US Commerce Secretary Howard Lutnick publicly called CUSMA 'a bad deal' needing re-imagination", "Prime Minister Carney warned Canada must reduce reliance on US trade amid tariff threats", "Canada has formed new 24-member trade advisory council with bipartisan representation to strengthen negotiating position", "July 1 deadline is a 'checkpoint not a cliff' according to Canada's chief negotiator Janice Charette", "US Trade Representative Jamieson Greer confirmed not all issues will be resolved by July 1 deadline", "LeBlanc reaffirmed supply management is not on the table in CUSMA negotiations", "Trump administration continues to float idea of replacing CUSMA with separate bilateral agreements", "US demands structural changes to Canada's dairy tariff-rate quota (TRQ) administration"],
  developing: ["What the full list of US demands looks like — not fully public", "Whether Canada draws hard red lines on Chapter 19 and dairy or negotiates both", "Whether Mexico's cooperation or defection changes Canadian leverage", "Whether the Carney government can build a domestic political coalition for any concessions", "Timeline — whether review produces an outcome before the 2026 midterm political window closes", "Potential US shift toward separate bilateral agreements rather than trilateral CUSMA renewal", "Impact of Lutnick's inflammatory comments about Canada 'sucking off' the US economy on negotiations", "Whether US-Mexico negotiations progressing faster than Canada-US talks creates additional pressure", "US insistence on Canada meeting preconditions before formal negotiations begin", "Developing split strategy between Canada and Mexico as US pursues bilateral talks with Mexico first", "Growing pressure on provincial liquor bans and procurement rules as secondary friction points"],
  insights: ["US negotiating posture mirrors 2017 NAFTA renegotiation — opening with maximalist demands (TRQ overhaul, annual reviews) likely to be walked back over time", "Canadian strategy appears calibrated to US midterm elections, hoping congressional pressure will ease White House demands as in 2018", "Jul 1 deadline is procedural rather than substantive — most significant outcome would be triggering annual review process extending negotiations for years", "Canada's bipartisan trade advisory council signals attempt to build domestic consensus against US pressure tactics", "Structural dairy demands represent classic Trump-era trade tactic — opening with politically untenable ask to anchor subsequent concessions", "Growing divergence in negotiation pace between US-Mexico and US-Canada tracks risks marginalizing Canadian interests", "Lutnick's crude rhetoric undermines negotiating trust while hardening Canadian resistance to perceived bully tactics", "US strategic shift toward perpetual negotiation (annual reviews) rather than settled agreements maximizes leverage over dependent trading partners"],
  questions: ["Will US accept anything less than fundamental changes to dairy TRQ system as price for negotiation?", "How will Canada respond if US-Mexico bilateral deal emerges before Canada-US resolution?", "Does annual review process strengthen or weaken Canadian leverage in extended negotiations?", "Will provinces resist federal pressure to modify liquor bans and procurement rules as bargaining chips?", "Can Carney diversify trade relationships sufficiently to reduce structural US dependency during negotiation period?", "Will bipartisan advisory council recommendations harden or soften Canada's negotiating position?", "Does US midterm election timeline create meaningful deadline pressure on White House for deal?"],
  people: [{
    name: "Mark Carney",
    role: "Prime Minister, Canada",
    why: "Chief negotiator in effect. His economic credibility is on the line in this negotiation.",
    alignment: "Canada",
    status: "active"
  }, {
    name: "Howard Lutnick",
    role: "US Secretary of Commerce",
    why: "Leading the US side of trade negotiations. His positions on CUSMA are the most relevant American voice.",
    alignment: "US",
    status: "active"
  }, {
    name: "Claudia Sheinbaum",
    role: "President, Mexico",
    why: "Mexico's cooperation or defection in CUSMA negotiations directly affects Canadian leverage.",
    alignment: "Mexico",
    status: "active"
  }, {
    name: "Mary Ng",
    role: "Minister of International Trade, Canada",
    why: "The operational lead on CUSMA negotiations day-to-day.",
    alignment: "Canada",
    status: "active"
  }, {
    name: "Dominic LeBlanc",
    role: "Canada-US Trade Minister",
    why: "Public face of Canada's CUSMA negotiation strategy, coordinating with US counterparts.",
    alignment: "Canada",
    status: "active"
  }, {
    name: "Janice Charette",
    role: "Chief CUSMA Negotiator, Canada",
    why: "Leading technical negotiations, described July 1 as 'checkpoint not cliff'.",
    alignment: "Canada",
    status: "active"
  }, {
    name: "Jamieson Greer",
    role: "US Trade Representative",
    why: "Key US negotiator who confirmed not all issues will be resolved by July 1 deadline.",
    alignment: "US",
    status: "active"
  }, {
    name: "Erin O'Toole",
    role: "Advisory Council Member",
    why: "Conservative voice on new trade advisory council influencing bipartisan negotiation strategy",
    alignment: "Canada",
    status: "active"
  }]
}, {
  id: "C03",
  tab: "canada",
  implications: [],
  risks: [],
  code: "ECON-CA-01",
  heat: 4,
  status: "developing",
  updated: "Apr 23 2026",
  title: "Canadian Economy — Four Shocks",
  sub: "Tariffs · Oil Shock · CUSMA · Inflation · The Lived Reality",
  card: "Canada is absorbing its fourth major economic shock since 2019. Oil windfall for Alberta and federal revenues. National inflation accelerates to 2.4% with record 21.2% monthly gas price spike. Housing starts decline 6% in March. Consumer spending shows strain as households reallocate budgets to fuel costs.",
  summary: "Canada's economy faces compounding pressures: oil revenue windfalls for Alberta and federal coffers contrast with severe inflationary pressures on households through fuel (21.2% monthly gas price spike), food (4.4% annual increase), and housing (6% decline in starts). The four sequential shocks since 2019 have created economic anxiety not reflected in GDP metrics. Housing affordability remains a structural crisis, with March data showing declining starts and sales. Bank of Canada faces dilemma - economic weakness would normally prompt rate cuts, but must now weigh oil shock inflation against softening core metrics (1.4% three-month average). TD card data shows consumers pulling back on non-fuel spending as energy costs bite.",
  bg: "Canada's economy is structurally unusual. It is a wealthy country with a resource extraction base — oil, gas, minerals, forestry, agriculture — that generates enormous revenues concentrated in specific regions (Alberta, Saskatchewan, British Columbia, Ontario's Ring of Fire). It is also a services-dominated urban economy — Toronto, Vancouver, Montreal — where knowledge work, finance, and real estate generate a different kind of wealth. These two economies coexist under one federal structure and frequently pull in opposite directions.\n\nThe housing crisis deserves separate treatment. Canadian housing — particularly in Toronto and Vancouver — has been unaffordable for middle-income earners for over a decade. The Trudeau government attempted multiple interventions, none of which materially reduced prices. The Carney government has inherited this structural problem. The causes are well understood: restrictive zoning, slow permitting, a population that grew faster than housing supply, and decades of treating housing as an investment vehicle rather than shelter. The solutions are politically difficult because homeowners — who vote — benefit from high prices.\n\nThe Bank of Canada's interest rate cycle has added another layer. Rates rose sharply to combat post-COVID inflation, then started falling again. Variable-rate mortgage holders who bought during the COVID price surge are now absorbing the consequences of that cycle.",
  confirmed: ["Oil prices at $110-113/barrel — Alberta and federal revenues elevated significantly", "Bank of Canada holds rate at 2.25% — markets price 90% chance of no change April 29", "March inflation jumps to 2.4% — largest monthly gasoline price increase on record at 21.2% due to Iran war supply shock", "Federal fuel excise tax suspension expected to reduce gas prices by 10 cents/litre through September", "Housing starts decline 6% in March — national housing agency reports surprise contraction", "Grocery inflation persists at 4.4% annually — fresh vegetable prices rise 7.8% due to adverse growing conditions", "US Liberation Day April 2 tariffs adding approximately $20-30 billion annual cost to Canadian exporters", "Consumer debt at record levels — Canadians among the most indebted populations in the developed world", "TD card data shows consumer spending pullbacks in non-fuel categories as households adjust to energy shock", "Bank of Canada surveys show firms revising input price expectations upward but constrained from passing through costs due to weak demand", "80% of households expect Iran war to harm Canadian economy and raise inflation", "Firms raise one-year inflation expectations to 3.8% from 3.0% pre-conflict"],
  developing: ["Whether April inflation exceeds 3% as carbon tax removal drops from year-ago comparisons", "Whether oil windfall is sustained long enough to meaningfully offset shock costs", "Whether Bank of Canada maintains 'look through' stance on temporary oil price shock at April 29 meeting", "Whether US tariffs produce meaningful job losses in manufacturing belt — Ontario and Quebec most exposed", "Whether food inflation worsens as fertilizer prices rise from natural gas supply disruptions", "Whether Carney government's housing supply measures produce results on any politically relevant timeline", "Whether Iran war price shocks transmit beyond energy into broader inflationary spiral", "Consumer resilience to gasoline price squeeze — TD data shows spending reallocation (8% gas station increase offset by supermarket declines)"],
  insights: ["The GDP-lived experience gap is widening further. While oil revenues buffer macro indicators, households face record gas prices (21.2% monthly spike) and persistent food inflation (4.4%) — creating political volatility.", "Bank of Canada faces unprecedented dilemma: economic weakness (negative 3-month employment trend) would normally prompt cuts, but must now weigh oil shock against core inflation easing to 1.4%.", "Early evidence suggests limited pass-through of energy costs to broader prices — firms cite weak demand and competition as barriers to price increases.", "Housing market shows simultaneous declines in starts (-6%) and sales — suggesting affordability crisis now suppressing both supply and demand.", "Carney's fuel tax suspension creates fiscal-policy/monetary-policy tension — BoC must assess whether temporary relief distorts inflation signals.", "Alberta's oil windfall creates asymmetric provincial resilience — while most households adjust budgets, provincial revenues surge."],
  questions: ["Does the oil windfall last long enough to cover the fiscal cost of absorbing the other shocks?", "When does the housing crisis produce a political moment that forces genuine structural reform?", "How many manufacturing jobs are lost to US tariffs — and in which ridings?", "Does the consumer debt level become a systemic risk if global recession materializes?", "Will BoC maintain its 'transitory' inflation narrative if April CPI exceeds 3%?", "Can Carney's majority government pass structural reforms to reduce energy vulnerability?"],
  people: [{
    name: "Tiff Macklem",
    role: "Governor, Bank of Canada",
    why: "Faces unprecedented policy dilemma — balance oil shock inflation against economic weakness. April 29 decision will signal whether 'look through' stance holds.",
    alignment: "Bank of Canada (independent)",
    status: "active"
  }, {
    name: "Mark Carney",
    role: "Prime Minister, Canada",
    why: "Must govern through energy shock while maintaining credibility on inflation. Fuel tax suspension tests fiscal-monetary policy coordination.",
    alignment: "Federal Government",
    status: "active"
  }, {
    name: "Danielle Smith",
    role: "Premier, Alberta",
    why: "Oil windfall strengthens her bargaining position with Ottawa. Alberta's resilience contrasts with other provinces' vulnerability to energy shocks.",
    alignment: "UCP/Alberta",
    status: "active"
  }, {
    name: "Douglas Porter",
    role: "Chief Economist, BMO",
    why: "Influential voice arguing Canada would be debating rate cuts absent Iran conflict — shapes market expectations of BoC policy.",
    alignment: "Private Sector",
    status: "active"
  }]
}, {
  tab: "canada",
  implications: [],
  risks: [],
  id: "C04",
  code: "DIASPORA-01",
  heat: 4,
  status: "escalating",
  updated: "Apr 23 2026",
  title: "Canadian Diasporas — Wars Coming Home",
  sub: "Iranian-Canadian · Ukrainian-Canadian · Palestinian-Canadian · Lebanese-Canadian",
  card: "Canada has the largest Iranian diaspora outside Iran, a major Ukrainian-Canadian community, a large Palestinian-Canadian community, and significant Lebanese-Canadian population. The wars in the tracker are not abstract for these communities. They are personal.",
  summary: "Canada's multicultural identity means that every major conflict in the tracker has a human face inside Canadian cities. The Iranian-Canadian community — concentrated in Toronto and Vancouver — is divided: some celebrating Khamenei's death, many horrified by civilian casualties, all watching anxiously for family. Ukrainian-Canadians, historically a powerful political lobby especially in the prairies, are watching US attention shift away from Ukraine with alarm. Palestinian-Canadians and Lebanese-Canadians are navigating grief and political activism in a climate where the boundaries of acceptable expression are contested. The Carney government has to manage all of these communities simultaneously while maintaining foreign policy positions.",
  bg: "Canada is one of the most immigration-dependent countries in the world. Immigration accounts for essentially all of Canada's population growth, and the country has deliberately built multiculturalism as a national identity — not a melting pot but a mosaic. This means Canadian cities contain living connections to almost every conflict zone on earth.\n\nThe Iranian-Canadian community is among the most significant diasporas in Canada — estimates range from 200,000 to 400,000 people, concentrated in Toronto (particularly North York and Richmond Hill) and Vancouver. Many are secular, highly educated professionals who left Iran precisely because of the Islamic Republic. The Khamenei killing produced genuine celebration in some quarters and genuine grief and fear in others. The community is not monolithic.\n\nUkrainian-Canadians number roughly 1.4 million — the third-largest Ukrainian diaspora in the world after Russia and the US. They are concentrated in the prairies, particularly Manitoba, Saskatchewan, and Alberta. They have historically been among the most politically organized diaspora communities in Canada, successfully lobbying for Canadian recognition of the Holodomor as genocide and for strong Canadian support for Ukrainian sovereignty. The shift of US attention to Iran is deeply alarming to this community.\n\nPalestinian-Canadians and Arab-Canadians more broadly number in the hundreds of thousands and are concentrated in major cities. The Gaza war has been an extraordinarily painful and politically charged experience for this community, and the tensions around free speech, protest, and university campuses that characterized the war in 2024 and 2025 have not fully resolved.",
  confirmed: [
    "Iranian-Canadian diaspora estimated 200,000-400,000 — concentrated in Toronto and Vancouver",
    "Community divided on Iran war — some celebrating Khamenei's death, others horrified by civilian casualties",
    "Ukrainian-Canadian community approximately 1.4 million — third largest Ukrainian diaspora in the world",
    "Ukrainian-Canadians watching US attention shift to Iran with alarm — lobbying Ottawa for continued support",
    "Palestinian-Canadian community active in political advocacy — Gaza war produced major protests across Canadian cities",
    "Lebanese-Canadian community approximately 250,000 — Hezbollah front activation creating anxiety",
    "Canadian consular operations in Gulf region and Middle East under elevated alert",
    "Carney government has had to navigate statements on Iran war carefully given diaspora sensitivities",
    "Parliament Hill protests on Gaza war among largest political demonstrations in recent Canadian history",
    "Iranian government sending mass text messages threatening confiscation of assets of Iranians abroad who 'cooperate with the enemy'",
    "Checkpoints in Iranian cities now search phones for evidence of sharing strike photos — treated as espionage punishable by execution",
    "Iranian-Canadian activist Masood Masjoody murdered in BC — two charged with first-degree murder had monarchist ties",
    "Ukrainian-Canadian families facing uncertainty as temporary residency pathways expire — pushing for permanent status",
    "Saskatchewan Iranian families report receiving government threats targeting relatives still in Iran — property confiscation warnings",
    "Iranian diaspora activists in Canada report increased surveillance and harassment from both regime loyalists and monarchist factions",
    "Ukrainian-Canadian temporary residents face PR application backlogs — IRCC processing delays exacerbating uncertainty",
    "Public Safety Canada ramped up monitoring of Tehran's threats against Iranian diaspora — national counter-foreign interference coordinator confirms 'uptick' in transnational repression",
    "CBSA received approximately 280 tips about Iranians accused of links to Tehran — only one Iranian official deported due to legal challenges",
    "CSIS reprioritized resources in November 2025 to address 'particularly alarming cases' from Iran and its proxies",
    "Iranian diaspora members report 'grey-zone' intimidation tactics in Canada including surveillance and property photography"
  ],
  developing: [
    "Whether Iranian-Canadian community organizes politically around post-war Iran reconstruction and engagement",
    "Whether Ukrainian-Canadian lobby successfully pushes Carney to increase Ukraine support as US attention shifts",
    "Whether Palestinian-Canadian advocacy translates into meaningful Canadian foreign policy shift on Gaza",
    "Whether Lebanese-Canadian community pressure affects Canadian position on Hezbollah front",
    "Whether any Canadian citizens are among casualties in conflict zones — consular cases",
    "How Carney government navigates the competing diaspora pressures on Middle East policy",
    "Whether Iranian government threats against diaspora families escalate further",
    "Whether Ukrainian-Canadian PR demands gain political traction amid immigration cap constraints",
    "Whether Iranian diaspora divisions lead to further violence in Canada",
    "Whether Iranian-Canadian calls for special refugee pathways gain traction amid Ukrainian precedent",
    "Whether Saskatoon Iranian Cultural Association's documentation of crackdowns triggers Canadian sanctions response",
    "Whether Canadian security agencies develop effective response to 'grey-zone' transnational repression tactics",
    "Whether increased monitoring translates into actionable protection for at-risk diaspora communities",
    "Whether deportation challenges for suspected Iranian officials prompt legislative changes"
  ],
  insights: [
    "Canada's diaspora communities are not just a domestic political management challenge — they are a genuine foreign policy asset. Canada's ability to maintain back-channel relationships with Iran has historically depended partly on the Iranian-Canadian community's connections. That asset is real.",
    "The Ukrainian-Canadian community's political organization is the model for effective diaspora advocacy. They have successfully shaped Canadian foreign policy for decades. Their alarm about US attention shifting to Iran is a signal worth taking seriously — they have intelligence about the Ukrainian situation that official channels don't always capture.",
    "The Palestinian-Canadian experience since October 7 has revealed genuine tensions in Canadian multiculturalism — what happens when communities hold passionately conflicting views on a violent conflict, and when the expression of those views runs into institutional constraints around speech, employment, and campus life. Those tensions have not resolved.",
    "The geographic concentration of diaspora communities — Iranian-Canadians in North York, Ukrainian-Canadians on the prairies, Palestinian-Canadians in major cities — means their political weight is concentrated in specific ridings. That is not an accident of settlement patterns. It translates into real electoral leverage.",
    "The murder of Masood Masjoody exposes dangerous fractures within the Iranian diaspora — monarchist factions appear willing to use violence against critics",
    "Iranian government's asset confiscation threats create impossible dilemma for diaspora families — cut ties or risk relatives' safety",
    "Saskatchewan Iranians report psychological toll of war — Nowruz celebrations canceled, anti-anxiety medication use rising",
    "Ukrainian temporary residency extensions provide only short-term relief — families face exhausting bureaucratic hurdles for permanent status",
    "Security officials confirm Iran escalates repression against diaspora critics when challenged — pattern of lethal retaliation documented",
    "Canadian law enforcement struggles to address 'grey-zone' intimidation tactics that exploit legal loopholes",
    "Diaspora activists report police often fail to understand transnational repression threats — creating protection gaps"
  ],
  questions: [
    "Does the Iranian-Canadian community coalesce around a political position on post-war Iran engagement — and does it give Canada a distinctive diplomatic role?",
    "Does the Ukrainian-Canadian lobby successfully pressure Carney to increase material support for Ukraine?",
    "Does Palestinian-Canadian advocacy produce any shift in Canada's Gaza position?",
    "Are there Canadian citizens among the casualties in any of the active conflicts — and how does the government respond?",
    "Will Canada create special immigration pathways for Iranian refugees as it did for Ukrainians?",
    "How will Canadian authorities respond to diaspora-on-diaspora violence like the Masjoody case?",
    "Will IRCC processing delays for Ukrainian PR applications trigger political backlash in prairie ridings?",
    "Does Iranian government's asset confiscation campaign trigger Canadian asset freeze retaliation?",
    "Can Canada develop legal tools to counter 'grey-zone' transnational repression tactics?",
    "Will increased security monitoring translate into better protection for at-risk diaspora members?",
    "How will Canadian political parties navigate diaspora tensions in upcoming elections?"
  ],
  people: [{
    name: "Masih Alinejad",
    role: "Iranian activist (US-based, influential in diaspora)",
    why: "Her advocacy shapes how the Western Iranian diaspora frames the political response to the Iran war.",
    alignment: "Iranian diaspora (opposition)",
    status: "active"
  }, {
    name: "Oksana Draghuk",
    role: "Ukrainian Canadian Congress President",
    why: "The organizational voice of the Ukrainian-Canadian community's political advocacy.",
    alignment: "Ukrainian-Canadian",
    status: "active"
  }, {
    name: "Yusuf Faqiri",
    role: "Afghan-Canadian advocate (representative of broader diaspora advocacy)",
    why: "Representative of the broader dynamic of diaspora communities using Canadian political channels to influence foreign policy.",
    alignment: "Diaspora advocacy",
    status: "active"
  }, {
    name: "Zahra Hosseini",
    role: "Regina-based Iranian activist",
    why: "Documenting Iranian government threats against diaspora families",
    alignment: "Iranian-Canadian",
    status: "active"
  }, {
    name: "Pooyan Arab",
    role: "Saskatoon Iranian Cultural Association director",
    why: "Tracking Iranian government crackdowns on diaspora connections",
    alignment: "Iranian-Canadian",
    status: "active"
  }, {
    name: "Iryna Vovk",
    role: "Ukrainian temporary resident in Vancouver",
    why: "Exemplifies bureaucratic challenges facing war-displaced Ukrainians",
    alignment: "Ukrainian-Canadian",
    status: "active"
  }, {
    name: "Sébastien Aubertin-Giguère",
    role: "National counter-foreign interference coordinator",
    why: "Publicly confirmed increased monitoring of Iranian threats against diaspora",
    alignment: "Canadian security",
    status: "active"
  }, {
    name: "Noura Aljizawi",
    role: "Citizen Lab researcher",
    why: "Documents democratic governments' failures to protect diaspora communities",
    alignment: "Academic/research",
    status: "active"
  }]
}, {
  tab: "canada",
  implications: [],
  risks: [],
  id: "C05",
  code: "ARCTIC-01",
  heat: 4,
  status: "escalating",
  updated: "Apr 23 2026",
  title: "Arctic Sovereignty",
  sub: "Northwest Passage · US Pressure · Climate Opening · Indigenous Rights",
  card: "The Arctic is opening faster than predicted. The Northwest Passage is commercially navigable in summer months. The US does not recognize Canadian sovereignty over it. Trump has made Arctic claims more aggressive. Canada's military presence is inadequate. Indigenous communities are on the front line of all of it.",
  summary: "Climate change is opening the Canadian Arctic in ways that are simultaneously an economic opportunity and a sovereignty crisis. The Northwest Passage — the sea route through Canada's Arctic archipelago — is becoming commercially navigable in summer months, potentially transforming global shipping. The United States does not recognize Canadian sovereignty over the Passage, treating it as international waters. Trump has made this position more aggressive, and US military vessels have transited without requesting Canadian permission. Canada's Arctic military infrastructure is decades behind where it needs to be. Indigenous communities in the North are experiencing the climate changes most acutely and have the most direct stake in how Arctic sovereignty is exercised.",
  bg: "The Northwest Passage has been the object of Arctic ambition since European explorers first attempted it in the 16th century. The Franklin Expedition of 1845 — 129 men who disappeared trying to navigate it — is part of Canadian national mythology. The passage was first fully navigated in 1906 by Roald Amundsen. For most of the 20th century it was inaccessible for most of the year due to ice.\n\nClimate change is changing this. Arctic sea ice is declining at roughly twice the rate of the global average. The Northwest Passage is now reliably navigable in August and September, and forecasts suggest it may be ice-free for longer periods within decades. This creates a shipping shortcut between the Atlantic and Pacific that is roughly 7,000 kilometres shorter than the Panama Canal route.\n\nThe sovereignty question is genuinely contested in international law. Canada claims the passage as internal waters, meaning foreign ships require Canadian permission to transit. The United States argues it is an international strait, meaning foreign ships have a right of innocent passage without permission. This dispute has been ongoing since the 1969 voyage of the SS Manhattan, which the US sent through without asking Canada. Canada responded by enacting the Arctic Waters Pollution Prevention Act. The dispute has never been formally resolved.\n\nRussia is the other major Arctic power and has been militarizing its Arctic presence aggressively for a decade — new bases, new submarines, new icebreakers. China has declared itself a near-Arctic state and is investing in Arctic shipping and research infrastructure. Canada has been slow to respond militarily and diplomatically.",
  confirmed: ["Northwest Passage reliably navigable August-September — ice-free window expanding with climate change", "US does not recognize Canadian sovereignty over Northwest Passage — treats it as international strait", "US military vessels have transited Northwest Passage without requesting Canadian permission", "Canada has one operational icebreaker — CCGS Louis S. St-Laurent — significantly less than Russia or US", "NORAD modernization agreement signed — Canada committed to $38.6 billion over 20 years for Arctic surveillance", "Russia has established new military bases and deployed new submarines to Arctic", "China declared itself near-Arctic state — investing in Arctic shipping research and infrastructure", "Climate change hitting Canadian Arctic communities at twice the global average rate — permafrost thaw, coastal erosion, ice road loss", "Inuit Tapiriit Kanatami formally submitted that Arctic sovereignty must include Indigenous rights and presence", "Trump administration made more aggressive statements on Arctic resource claims than prior US administrations", "Canada and Finland signed maritime memorandum of understanding on Arctic security and icebreaker cooperation during President Stubb's visit", "Canada and Finland committed to increasing defence spending to 5% of GDP by 2035", "Canada and Finland will negotiate General Security of Information Agreement to facilitate intelligence-sharing", "Canada and Finland agreed to expand joint military exercises in Arctic conditions including Cold Response and Operation Nanook", "Canada's House of Commons Foreign Affairs committee issued report calling for urgent action on Arctic sovereignty", "Canadian soldiers conducted a 5,000km snowmobile patrol in extreme Arctic conditions from Inuvik to Churchill in March 2026", "Canada unveiled a C$35 billion plan to reinforce military presence in the Arctic, aiming for full sovereignty responsibility", "Canadian Foreign Affairs Minister Anita Anand identified Russian infrastructure movement toward the Arctic Circle as the gravest threat to Canada", "Canada's North Warning System radar network is increasingly obsolete and limited against modern threats, according to Nasittuq, the private company managing it", "Canada's Joint Task Force North conducted largest Arctic military exercise since 2007, involving 1,300 personnel in ski patrols, ice landings, and artillery transport", "Canadian Coast Guard has world's second-largest icebreaker fleet after Russia, regularly escorts US ships in Arctic waters"],
  developing: ["Whether Canada accelerates Arctic military presence — icebreakers, surveillance, forward bases", "Whether the Northwest Passage becomes a genuine diplomatic flashpoint with the US", "Whether Russia or China attempt transits that force a Canadian response", "Whether Arctic resource development (oil, gas, minerals) proceeds and under what governance framework", "Whether Indigenous communities gain meaningful control over Arctic governance decisions", "Whether the NORAD modernization produces actual capability on any relevant timeline", "Whether Canada-Finland partnership leads to tangible icebreaker production increases", "Whether NATO adopts formal Arctic security framework at July summit in Ankara", "Whether Canada can achieve full Arctic sovereignty independence from US support", "Whether Canada's North Warning System radar network remains effective against modern threats", "Whether Canada's Arctic military exercises demonstrate sufficient capability to respond to potential land attacks", "Whether Canada's Arctic sovereignty push can overcome harsh operational realities and climate challenges"],
  insights: ["Canada's Arctic sovereignty claim rests on presence, use, and Indigenous occupation going back thousands of years. The Inuit have a stronger sovereignty argument than Canada does in some respects — they have actually lived there continuously. Canada's sovereignty argument is strongest when it is grounded in Indigenous rights, not just state claims.", "The icebreaker gap is embarrassing. Russia has approximately 40 icebreakers including nuclear-powered vessels. Canada has one operational heavy icebreaker. This is not a funding problem — it is a decades-long failure of political prioritization. The NORAD modernization is a down payment on fixing this, but the timeline is too slow.", "The Northwest Passage is worth fighting for economically. As a route for commercial shipping it could generate significant transit fees and give Canada enormous strategic leverage over global shipping. But only if sovereignty is established clearly before the shipping volumes make the dispute commercially significant.", "Climate change and Arctic sovereignty are not separate issues — they are the same issue. The people who understand this most clearly are the Inuit communities who are watching their world change faster than any policy response can track.", "Trump's more aggressive Arctic posture is a genuine threat. His administration has shown willingness to use economic coercion to advance territorial ambitions. Canada needs to treat Arctic sovereignty as a near-term political emergency, not a long-term policy question.", "The Canada-Finland partnership represents a strategic shift toward leveraging Nordic expertise to address Canada's Arctic capability gaps, particularly in icebreaker production and Arctic military training.", "Canada's Arctic sovereignty push faces harsh realities of extreme climate and vast distances, making full independence from US support unlikely despite political rhetoric.", "Canada's North Warning System radar network is increasingly obsolete, raising questions about its effectiveness against modern threats and Canada's ability to independently monitor Arctic airspace.", "Canada's Arctic military exercises demonstrate growing capability but highlight the immense logistical challenges of operating in extreme Arctic conditions.", "Canada's Arctic sovereignty strategy must balance military presence with Indigenous rights and environmental protection to maintain legitimacy and effectiveness."],
  questions: ["Does Canada accelerate Arctic military presence fast enough to establish facts on the ground before the Northwest Passage becomes commercially critical?", "Does the US formally challenge Canadian sovereignty — and if so, what is the Canadian response?", "Do Indigenous communities gain formal governance roles in Arctic decision-making?", "Does Russia or China attempt a Northwest Passage transit that forces a confrontation?", "Is the $38.6 billion NORAD modernization commitment actually funded and delivered on timeline?", "Will the Canada-Finland maritime agreement lead to tangible icebreaker production increases?", "How will NATO's July summit address Arctic security coordination?", "Can Canada achieve full Arctic sovereignty independence from US support given operational challenges?", "Will Canada's North Warning System radar network remain effective against modern threats?", "Can Canada's Arctic military exercises demonstrate sufficient capability to respond to potential land attacks?", "Will Canada's Arctic sovereignty push overcome harsh operational realities and climate challenges?"],
  people: [{
    name: "Mark Carney",
    role: "Prime Minister, Canada",
    why: "Arctic sovereignty investment decisions are his. The NORAD modernization commitment needs political follow-through.",
    alignment: "Federal Government",
    status: "active"
  }, {
    name: "Natan Obed",
    role: "President, Inuit Tapiriit Kanatami",
    why: "The voice of Inuit communities on Arctic sovereignty. His argument that Indigenous rights are inseparable from Arctic sovereignty claims is legally and politically significant.",
    alignment: "Inuit/Indigenous",
    status: "active"
  }, {
    name: "Pete Hegseth",
    role: "US Secretary of Defense",
    why: "US Arctic military posture is shaped at his level. His department's conduct will determine whether the Northwest Passage dispute becomes a crisis.",
    alignment: "US Pentagon",
    status: "active"
  }, {
    name: "Vladimir Putin",
    role: "President, Russia",
    why: "Russia's Arctic militarization is the primary external military pressure on Canadian Arctic sovereignty.",
    alignment: "Russia",
    status: "active"
  }, {
    name: "Alexander Stubb",
    role: "President, Finland",
    why: "Finland's new partnership with Canada on Arctic security and icebreaker production could significantly impact Canada's Arctic capabilities.",
    alignment: "Finland",
    status: "active"
  }, {
    name: "Anita Anand",
    role: "Foreign Affairs Minister, Canada",
    why: "Identified Russian infrastructure movement toward the Arctic Circle as the gravest threat to Canada.",
    alignment: "Federal Government",
    status: "active"
  }, {
    name: "Travis Hanes",
    role: "Commanding Officer, 1st Canadian Ranger Patrol Group",
    why: "Led Canada's largest Arctic military exercise in 2026, demonstrating operational challenges in extreme conditions.",
    alignment: "Canadian Armed Forces",
    status: "active"
  }]
}, {
  tab: "canada",
  implications: [],
  risks: [],
  id: "C06",
  code: "INDIGENOUS-01",
  heat: 4,
  status: "developing",
  updated: "Apr 22 2026",
  title: "Indigenous Peoples — Sovereignty & Rights",
  sub: "UNDRIP · Treaties · Resource Development · Systemic Gaps",
  card: "Canada adopted UNDRIP in 2021 but implementation is contested. Resource development on unceded territory remains a flashpoint. The systemic gaps — health, housing, water, incarceration — remain structural. Every major Canadian political decision runs through Indigenous rights whether politicians acknowledge it or not.",
  summary: "Canada's relationship with Indigenous peoples is the foundational unresolved question of the country's existence. The federal government adopted the UN Declaration on the Rights of Indigenous Peoples in 2021 and passed legislation to implement it, but the gap between legal commitment and lived reality remains vast. Resource development on unceded or treaty-protected territory continues to generate court challenges and direct action. The systemic gaps in health outcomes, housing, water quality, education, and incarceration rates persist at levels that would be considered a national emergency if they affected any other population. Every major Canadian policy decision — Arctic sovereignty, resource development, climate policy, infrastructure — runs through Indigenous rights whether the government acknowledges it or not.",
  bg: "Indigenous peoples were in North America for thousands of years before European contact. The relationship between Indigenous nations and the Canadian state is governed by a complex web of treaties — some signed, some unsigned, some honoured, many broken — and by the Constitution Act of 1982, which recognized and affirmed existing Aboriginal and treaty rights. What those rights mean in practice has been contested in Canadian courts for decades.\n\nThe residential school system — in which Indigenous children were forcibly removed from their families, prohibited from speaking their languages, and subjected to physical and sexual abuse — operated from the 1870s to 1996. The Truth and Reconciliation Commission's 2015 report documented the system as cultural genocide and made 94 Calls to Action. As of 2026, fewer than half have been fully implemented.\n\nThe discovery of unmarked graves at former residential school sites beginning in 2021 produced a national reckoning that resulted in the cancellation of Canada Day celebrations across the country, the toppling of statues, and a renewed national conversation about what reconciliation actually means. That conversation is ongoing and unresolved.\n\nThe UNDRIP implementation question is specifically about free, prior, and informed consent — whether Indigenous communities have a veto over resource development on their territories. The resource sector argues that a veto right would make major projects impossible. Indigenous advocates argue that anything less than genuine consent is not reconciliation. The courts have been navigating this tension for years.",
  confirmed: ["Canada formally adopted UNDRIP 2021 and passed Bill C-15 to align Canadian law — implementation contested", "Fewer than half of Truth and Reconciliation Commission's 94 Calls to Action fully implemented as of 2026", "Unmarked graves at residential school sites confirmed at multiple locations since 2021", "First Nations water advisories — dozens of communities still without safe drinking water despite federal commitments", "Indigenous incarceration rate approximately 30% of federal prison population despite being 5% of total population", "Indigenous women face homicide rates roughly 6 times higher than non-Indigenous women", "Trans Mountain Pipeline expansion completed — generated significant Indigenous opposition and court challenges", "Wet'suwet'en pipeline dispute produced rail blockades and national political crisis in 2020 — underlying dispute unresolved", "Indigenous-led land back movements growing — returning land to Indigenous governance a live political demand", "Métis Nation facing internal governance disputes that complicate federal consultation processes", "B.C. Court of Appeal ruled in December 2025 that mineral rules are inconsistent with DRIPA, citing UNDRIP", "B.C. Premier David Eby proposed suspending DRIPA for one year due to litigation risks, but backed down after First Nations opposition", "First Nations Leadership Council called emergency meeting April 19, 2026 to oppose DRIPA suspension", "B.C. Premier David Eby scrapped plans to table DRIPA suspension bill on April 19, 2026 after First Nations opposition", "First Nations Leadership Council issued joint statement with B.C. government committing to co-develop joint approach on DRIPA implementation", "National Chief Cindy Woodhouse Nepinak addressed UN Permanent Forum on Indigenous Issues on April 21, 2026, condemning B.C.'s DRIPA suspension attempt"],
  developing: ["Whether UNDRIP implementation produces meaningful changes to resource development approval processes", "Whether the outstanding TRC Calls to Action are implemented — particularly those requiring systemic institutional change", "Whether the boil water advisory situation is actually resolved on the federal timeline", "Whether land back movements produce political responses that go beyond symbolic gestures", "Whether the Arctic sovereignty question incorporates genuine Inuit governance rights", "Whether the federal government's relationship with Métis and non-status Indians is clarified legally and politically", "Whether resource development conflicts produce another Wet'suwet'en-scale national crisis", "Whether B.C. government's proposed DRIPA suspension resurfaces in future legislative sessions", "Whether First Nations and B.C. government reach joint approach on DRIPA implementation", "Whether B.C. government and First Nations Leadership Council develop joint recommendations on DRIPA implementation before fall legislative session"],
  insights: ["Every Canadian infrastructure project of any scale now runs through Indigenous rights — and that is the right outcome, not a problem to be managed. The courts have been clear and consistent: Crown consultation obligations are real, free prior and informed consent matters, and projects that ignore this face successful legal challenges. The question is whether the political system catches up to the legal reality.", "The drinking water crisis is the single most damning indictment of Canadian reconciliation rhetoric. Dozens of First Nations communities have been on boil water advisories for years or decades. This is not a hard technical problem. It is a political priority problem. The money exists. The will has been intermittent.", "The residential school legacy is not history — it is present tense. The intergenerational trauma of the residential school system is a documented factor in the health, mental health, addiction, incarceration, and family breakdown statistics that define the systemic gap. You cannot address the gap without addressing the cause.", "The land back movement is becoming the organizing frame for Indigenous political demands in a way that earlier reconciliation frameworks were not. It is more concrete and more confrontational than TRC language. How the Carney government responds to it will define the relationship for a generation.", "Indigenous sovereignty and Canadian sovereignty are not competing claims — in the Arctic and elsewhere they are complementary. Canada's strongest argument for Northwest Passage sovereignty rests on the fact that Inuit have lived there for thousands of years. The government has been slow to understand that Indigenous rights are a strategic asset, not just a domestic obligation.", "The B.C. DRIPA suspension attempt reveals the tension between legal commitments and political realities. While Eby cited litigation risks, First Nations leaders view any suspension as a betrayal of reconciliation principles. The courts' interpretation of DRIPA as requiring immediate legal effect complicates provincial governance.", "Eby's climbdown on DRIPA suspension highlights the growing political power of First Nations leadership. The ability to mobilize opposition and force government reversals demonstrates a shift in the balance of power in Indigenous-state relations."],
  questions: ["Does UNDRIP implementation produce a real free prior and informed consent mechanism — or a consultation process that looks different but functions the same?", "Are the remaining TRC Calls to Action implemented before the next election?", "Does the drinking water advisory situation get fully resolved — and when?", "Does the land back movement produce a political crisis or a genuine policy response?", "How does the Carney government navigate the next major resource development conflict on Indigenous territory?", "Will B.C. revisit DRIPA suspension in future legislative sessions?", "Can First Nations and B.C. government reach a joint approach on DRIPA implementation?", "Will B.C. government and First Nations Leadership Council develop joint recommendations on DRIPA implementation before fall legislative session?"],
  people: [{
    name: "Cindy Woodhouse Nepinak",
    role: "National Chief, Assembly of First Nations",
    why: "The primary federal-level political voice for First Nations rights. Her relationship with the Carney government will define the reconciliation agenda.",
    alignment: "Assembly of First Nations",
    status: "active"
  }, {
    name: "Natan Obed",
    role: "President, Inuit Tapiriit Kanatami",
    why: "Leading the Inuit voice on Arctic sovereignty, climate change impacts, and UNDRIP implementation.",
    alignment: "Inuit Tapiriit Kanatami",
    status: "active"
  }, {
    name: "Cassidy Caron",
    role: "President, Métis National Council",
    why: "Representing Métis Nation in the complex and contested federal recognition and rights framework.",
    alignment: "Métis National Council",
    status: "active"
  }, {
    name: "Mark Carney",
    role: "Prime Minister, Canada",
    why: "His government's reconciliation record will be defined by implementation, not rhetoric. The gap between the two is large.",
    alignment: "Federal Government",
    status: "active"
  }, {
    name: "David Eby",
    role: "Premier, British Columbia",
    why: "His handling of DRIPA suspension attempt reveals tensions between legal commitments and political realities.",
    alignment: "Provincial Government",
    status: "active"
  }]
},, {
  id: "P01",
  tab: "power",
  connections: [],
  canada: null,
  implications: [],
  risks: [],
  code: "OLIGARCH-01",
  heat: 4,
  status: "developing",
  updated: "Apr 23 2026",
  title: "Global Wealth & Political Capture",
  sub: "Concentrated Power · The Structural Pattern Across Systems",
  card: "Unprecedented wealth concentration is reshaping democratic institutions globally. Musk inside the US government. Gulf sovereign wealth funding Western elections. Chinese state capitalism. Russian oligarchs remapping influence post-sanctions. Different systems, same structural pattern.",
  summary: "The concentration of wealth and its conversion into political power is the defining structural shift of the 2020s. In the US, Elon Musk's DOGE operation represents direct billionaire governance. In the Gulf, sovereign wealth funds are acquiring stakes in Western media, sports, and financial institutions at unprecedented scale. In China, the line between private wealth and state power is nearly invisible. In Russia, post-sanctions oligarchs are remapping influence through Turkey, UAE, and crypto. The mechanisms differ. The structural outcome — wealth buying governance — is converging.",
  bg: "The relationship between concentrated wealth and political power is as old as civilization. What is new in the current moment is the speed, the scale, and the technical mechanisms. The 2008 financial crisis produced the greatest concentration of wealth in recorded history as quantitative easing inflated asset prices while wages stagnated.\n\nIn the United States, Citizens United (2010) removed most limits on political spending by corporations and wealthy individuals. The Koch network — documented extensively — is the most studied example of ideological infrastructure investment reshaping political landscapes over decades. It is not unique.\n\nGlobally, sovereign wealth funds — government-owned investment vehicles — have created a new form of state capitalism blurring the line between public and private. Norway's GPFG, Saudi Arabia's PIF, Abu Dhabi's ADIA, and China's CIC collectively manage trillions and hold significant stakes in Western companies and media.\n\nThe billionaire political class from tech represents a different model — network effects and platform dominance producing fortunes faster than any prior generation. Their political ambitions are still being revealed.",
  confirmed: [
    "Elon Musk given direct access to federal payment and data systems via DOGE — unprecedented for unelected private citizen",
    "DOGE identified as mechanism for defunding agencies opposed by Musk's business interests", 
    "Saudi Arabia's PIF managing over $700B — major stakes in Western media, tech, sports, and finance",
    "Gulf sovereign wealth funds acquired significant stakes in social media platforms and news organizations",
    "Xi Jinping asserted party control over private tech companies — Alibaba, Tencent, Didi",
    "Russian oligarch assets partially frozen post-Ukraine invasion — significant redeployment through UAE, Turkey, crypto",
    "Musk's companies hold billions in federal contracts while he advises on federal budget cuts",
    "Koch network documented spending over $1B on political infrastructure in 2022-2024 cycle",
    "BlackRock, Vanguard, State Street collectively largest shareholders in most S&P 500 companies",
    "Regulatory capture documented across financial services, pharmaceutical, energy, and tech sectors in US and EU",
    "Syrian billionaire Khayyat family invoked Trump name in attempt to influence US foreign policy while discussing potential Trump family deals (NYT Apr 2026)",
    "Saudi Arabia's PIF announced new strategy emphasizing 'efficiency' and reconsidering timing of investments (Al Arabiya, Apr 20 2026)",
    "PIF may withdraw financial support from LIV Golf and delay Trojena mountain skiing town project (NYT, Apr 20 2026)",
    "Saudi Arabia indefinitely delayed hosting 2029 Asian Winter Games in Trojena, shifting to Kazakhstan (NYT, Apr 20 2026)",
    "Saudi Arabia's PIF continues heavy investment in video games, including $55B buyout of Electronic Arts with Jared Kushner (NYT, Apr 20 2026)",
    "US considering financial support for oil-rich UAE despite its sovereign wealth fund assets (NYT Apr 21 2026)",
    "Global billionaire count reached 3,110 with projections to hit 4,000 within five years (Guardian Apr 22 2026)",
    "San Francisco billionaire Chris Larsen funding opposition to 'overpaid CEO tax' initiatives (Bloomberg Apr 22 2026)"
  ],
  developing: [
    "Full scope of DOGE access to federal systems — ongoing Congressional investigation",
    "Whether Gulf sovereign wealth stakes in Western media affect editorial independence",
    "How Chinese state capitalism evolves after tech crackdown — partial retreat or new model",
    "Whether Russian oligarch influence networks survive sanctions long-term",
    "Whether any democratic government produces effective regulation of billionaire political involvement",
    "Whether asset manager concentration produces antitrust action",
    "Extent of Trump family business dealings with foreign oligarchs during second term",
    "Impact of Saudi Arabia's PIF shift toward 'efficiency' on global investment patterns",
    "Whether PIF's reconsideration of LIV Golf and Trojena signals broader pullback from high-profile projects",
    "How Saudi Arabia's focus on video games and AI investments aligns with geopolitical strategy",
    "Whether UAE financial support request signals broader Gulf wealth instability",
    "If billionaire political spending will reshape midterm elections"
  ],
  insights: [
    "The DOGE model is the most significant structural innovation in American governance since the New Deal — not because of what it has done, but because of what it has demonstrated is possible. The template is now available to any future administration.",
    "Gulf sovereign wealth acquisition of Western media and sports is a soft power strategy that is working. You cannot effectively criticize a country that owns your football club, your newspaper, and your investment bank.",
    "The convergence across different systems is the analytical key. US billionaire governance, Gulf sovereign wealth, Chinese state capitalism, and Russian oligarch networks all arrive at the same place: private wealth with public power and minimal accountability.",
    "Regulatory capture is not conspiracy — it is structural incentive. The revolving door is not corruption in most individual cases; it is a systemic feature that produces pro-industry regulatory outcomes regardless of individual intent.",
    "The asset manager concentration is the underreported story. BlackRock, Vanguard, and State Street are the largest shareholders in most major corporations simultaneously. The implications for corporate governance and competition policy are profound and largely undiscussed.",
    "The Khayyat case demonstrates how foreign oligarchs now view access to US power as a transactional commodity, with Trump family business interests as potential leverage points",
    "Saudi Arabia's PIF shift toward 'efficiency' reflects broader Gulf reassessment of investment priorities amid geopolitical instability in the region",
    "The PIF's continued focus on video games and AI suggests a long-term strategy to diversify beyond oil and traditional industries",
    "US consideration of financial support for UAE despite its sovereign wealth demonstrates how war disrupts even the wealthiest nations' economic stability",
    "The projected 29% increase in global billionaires within five years indicates accelerating wealth concentration despite economic turbulence"
  ],
  questions: [
    "Does DOGE survive legal challenge — and if so, what constraints remain?",
    "Does Gulf sovereign wealth acquisition of Western media produce measurable editorial effects?",
    "Can any democratic government regulate billionaire political involvement without violating speech protections?",
    "Does the asset manager concentration become a regulatory target?",
    "Is there a governance model that can separate concentrated wealth from political power?",
    "How many similar cases exist of foreign oligarchs leveraging Trump family business interests for policy influence?",
    "Will Saudi Arabia's PIF shift toward 'efficiency' lead to broader divestment from high-profile Western assets?",
    "How will Saudi Arabia's focus on video games and AI impact its geopolitical influence?",
    "Does UAE financial support request indicate deeper Gulf economic vulnerabilities?",
    "Will billionaire tax opposition campaigns reshape local governance?"
  ],
  science: null,
  people: [{
    name: "Elon Musk",
    role: "DOGE / Tesla / SpaceX / xAI",
    why: "The most direct example of billionaire governance — unelected, inside federal systems, with documented conflicts of interest.",
    alignment: "US tech/billionaire class",
    status: "active"
  }, {
    name: "Mohammed bin Salman",
    role: "Crown Prince, Saudi Arabia",
    why: "The most aggressive sovereign wealth deployer. PIF's acquisition strategy is reshaping Western financial and media landscapes.",
    alignment: "Saudi Arabia / PIF",
    status: "active"
  }, {
    name: "Xi Jinping",
    role: "President, China",
    why: "His assertion of party control over private wealth defined the Chinese model.",
    alignment: "CCP",
    status: "active"
  }, {
    name: "Larry Fink",
    role: "CEO, BlackRock",
    why: "Manages the largest pool of investment capital in human history.",
    alignment: "Financial sector",
    status: "active"
  }, {
    name: "Chris Larsen",
    role: "San Francisco billionaire",
    why: "Funding opposition to CEO tax initiatives, demonstrating direct billionaire intervention in local governance.",
    alignment: "US tech/billionaire class",
    status: "active"
  }]
}, {
  id: "P02",
  tab: "power",
  connections: [],
  canada: null,
  implications: [],
  risks: [],
  code: "HEGSETH-01",
  heat: 4,
  status: "developing",
  updated: "Apr 23 2026",
  title: "War Profiteering & Defense Accountability",
  sub: "Hegseth · Contracts · The Global Pattern of Defense Corruption",
  card: "Pete Hegseth authorized a war consuming 11,000+ munitions in 30 days. Contracts are being awarded at extraordinary rates. A probe into suspicious financial relationships is active. The global pattern of defense corruption during wartime is historically predictable.",
  summary: "The Iran war is generating billions in defense contracts that have triggered Congressional scrutiny. Pete Hegseth has financial relationships with defense contractors flagged during his confirmation hearings and unresolved. A formal probe is active as of April 2026. The broader pattern is historically consistent: wartime contract acceleration, reduced oversight, and the revolving door between military leadership and defense industry produces documented corruption in virtually every major conflict. The US is not unique — the pattern appears in Russian defense procurement, Saudi military purchasing, and Israeli defense exports.",
  bg: "War profiteering is one of the oldest forms of corruption. Eisenhower's 1961 farewell address named and warned against the military-industrial complex. The decades since have produced a revolving door between military leadership, Pentagon civilian officials, and defense contractors so normalized it barely registers as a conflict of interest.\n\nThe specific mechanism: senior officers and officials develop contractor relationships during government service. They leave government and join those contractors, bringing relationships and knowledge. Those contractors receive favorable treatment in procurement decisions made by former colleagues still in government. No individual step is clearly illegal. The systemic outcome consistently favors connected contractors.\n\nThe Iran war has accelerated this. 11,000+ munitions in 30 days means 11,000 replacement orders, plus repair, maintenance, intelligence, and logistics contracts. In wartime, normal procurement oversight is compressed or waived for operational urgency. This is when corruption is most likely and most invisible.\n\nInternationally, Russian defense procurement corruption was so severe that Russian military capability turned out to exist primarily on paper — the money was stolen, equipment unmaintained. Saudi Arabia's military purchasing has generated documented kickback schemes. Israeli defense exports have been linked to multiple foreign bribery cases.",
  confirmed: ["Pete Hegseth had documented financial relationships with defense contractors flagged during Senate confirmation hearings", "Formal Congressional probe into Hegseth war profiteering connections active as of April 2026", "US expended approximately 11,000 munitions in first 30 days — replacement contracts accelerating", "Standard procurement oversight compressed under wartime urgency provisions", "Hegseth no quarter statement documented as potential war crimes violation — separate legal exposure", "Palantir $200M Claude contract — Palantir has deep Hegseth-adjacent network connections", "Russian defense procurement corruption documented as factor in military underperformance in Ukraine and Iran theater", "Saudi Arabia arms purchasing linked to multiple documented bribery and kickback cases", "Global arms trade valued at approximately $2.2T annually — largest buyers also highest corruption risk", "Anonymous Polymarket account 'Magamyman' made $550,000 on bets about US strikes against Iran and Khamenei removal", "Six Polymarket accounts made $1.2M betting on US strike against Iran — wallets funded one day prior", "Fifty newly created Polymarket accounts placed large bets on US-Iran ceasefire hours before official announcement", "Top 100 defense companies made $679B revenue in 2024 (SIPRI data)", "Average US taxpayer paid $1,870 to defense contractors in 2025 — more than food, agriculture, housing and environment combined", "Defense contractors receive 54% of Pentagon's $900B annual budget", "Trump administration invoked Defense Production Act to fund energy projects under national defense justification", "DEATH BETS Act proposed to ban war-related betting markets following insider trading concerns", "Polymarket allows anonymous cryptocurrency bets on military operations — creating national security risks", "CFTC chair Michael Selig defends prediction markets despite national security concerns", "Donald Trump Jr. serves as Polymarket adviser while 1789 Capital invests in platform"],
  developing: ["Full scope of Hegseth financial relationships with contractors receiving Iran war contracts", "Whether Congressional probe produces referral for criminal investigation", "Whether any specific contract awards are challenged as corrupt", "Whether munitions replacement contracts go through competitive bidding or sole-source awards", "Whether Hegseth war crimes exposure affects his ability to continue in role", "Whether international allies are auditing their own defense procurement", "Extent of insider trading via Polymarket prediction markets on military operations", "Potential links between Polymarket anomalous trades and Pentagon officials", "Impact of DEATH BETS Act on war-related betting markets", "Pentagon's $30B Defense Production Act request for FY2027", "Whether war bonds will be implemented to fund defense spending gaps", "Extent of maintenance backlogs affecting US military readiness", "Impact of defense spending on US fiscal deficits and public debt", "Whether CFTC will regulate or ban war-related prediction markets", "Extent of foreign actors manipulating Polymarket for strategic advantage", "Whether ISW map editing incident was isolated or part of pattern"],
  insights: ["The no quarter statement and the war profiteering probe are legally separate but politically connected. A SecDef under criminal exposure for war crimes has personal incentives to keep the war going — a settled conflict means more scrutiny.", "The procurement oversight compression is the mechanism, not the exception. Every major US conflict has produced documented corruption precisely because wartime urgency is used to bypass existing controls.", "The Russian defense procurement collapse revealed by Ukraine and Iran is the most important strategic intelligence available. If the Russian military that existed on paper doesn't exist in practice, the threat calculations underpinning decades of US defense spending were wrong.", "Defense corruption is hardest to prosecute during active conflict. The evidence accumulates but wartime political incentives favor protecting the people running the war. The accountability almost always comes later, if at all.", "Prediction markets like Polymarket create new vectors for insider trading and national security leaks — anonymous accounts making precise bets on military operations suggest classified information is being monetized.", "The $30B Defense Production Act request signals a shift toward direct federal spending to expand defense industrial base — potential for accelerated corruption without oversight.", "Wartime economies consistently trigger inflation and fiscal deterioration — US public debt projected to increase by 7 percentage points of GDP within three years of conflict onset.", "Defense contractors now receive more taxpayer dollars than any federal program except Medicare, Medicaid and debt service — indicating structural shift in national priorities.", "Polymarket's decentralized finance model makes it difficult to trace insider trading — creating national security vulnerabilities", "CFTC's hands-off approach to prediction markets contrasts with growing evidence of war-related insider trading", "ISW map editing incident shows how third-party data providers can be manipulated to influence betting outcomes"],
  questions: ["Does the Hegseth probe produce criminal referral — and on what timeline?", "Are replacement munitions contracts going through competitive procurement or sole-source awards?", "Does the no quarter war crimes exposure affect Hegseth's tenure?", "What is the full scope of Hegseth financial relationships with Iran war contractors?", "Is there an international accountability mechanism for war profiteering — and has it ever worked?", "How many Pentagon or intelligence officials are placing bets on Polymarket using classified information?", "Will the DEATH BETS Act effectively stop war-related betting markets?", "What percentage of defense contracts are going to politically connected firms versus competitive bids?", "How will war bonds affect long-term defense funding stability?", "What is the true state of US military readiness given maintenance backlogs?", "How will rising defense spending impact inflation and fiscal stability?", "Will CFTC take action against Polymarket for national security risks?", "Are foreign adversaries manipulating prediction markets to influence US military decisions?", "How widespread is the use of privileged information in war-related betting?"],
  science: null,
  people: [{
    name: "Pete Hegseth",
    role: "US Secretary of Defense",
    why: "Under probe for financial relationships with defense contractors. Also exposed to war crimes allegation. His tenure is legally vulnerable.",
    alignment: "Trump Administration/Pentagon",
    status: "active"
  }, {
    name: "Roger Wicker",
    role: "Senate Armed Services Committee Chair",
    why: "His committee is conducting the war profiteering probe.",
    alignment: "US Senate (Republican)",
    status: "active"
  }, {
    name: "Dwight Eisenhower",
    role: "Former US President (historical)",
    why: "His 1961 farewell address named the military-industrial complex. Every development in this story confirms his warning.",
    alignment: "Historical",
    status: "deceased"
  }, {
    name: "Mike Levin",
    role: "US Representative (D-CA)",
    why: "Sponsor of DEATH BETS Act to ban war-related betting markets.",
    alignment: "US House (Democrat)",
    status: "active"
  }, {
    name: "Donald Trump Jr.",
    role: "Polymarket Advisor",
    why: "Adviser to prediction market platform with suspicious war-related bets.",
    alignment: "Private Sector",
    status: "active"
  }, {
    name: "Rachel Reeves",
    role: "UK Chancellor of the Exchequer",
    why: "Considering war bonds to fund £18B defense spending gap.",
    alignment: "UK Government",
    status: "active"
  }, {
    name: "Michael Selig",
    role: "CFTC Chair",
    why: "Defends prediction markets despite national security concerns.",
    alignment: "US Government",
    status: "active"
  }, {
    name: "Matthew Wein",
    role: "Former DHS Policy Advisor",
    why: "Warned about foreign governments using AI to monitor Polymarket for anomalous trades.",
    alignment: "Private Sector",
    status: "active"
  }]
}, {
  tab: "power",
  connections: [],
  canada: null,
  implications: [],
  risks: [],
  id: "P03",
  code: "INSIDER-01",
  heat: 4,
  status: "developing",
  updated: "Apr 23 2026",
  title: "$1.6B Pre-War Insider Trading",
  sub: "Who Knew · Prediction Markets · The Intelligence Leak Question",
  card: "$1.6B in suspicious trading activity was identified before key Iran war events. Congressional and CFTC probes are active. The trades suggest a direct feed of classified war plans to financial markets.",
  summary: "Multiple investigations now track $1.6B+ in suspicious trading across oil futures and prediction markets preceding major Iran war developments. New evidence includes: (1) $760M short on Brent crude 20 min before Hormuz reopening announcement (April 17), (2) $1.5B S&P 500 E-mini futures buy <2 min before March 23 delayed strikes, (3) 150 Polymarket accounts earning $1.2M on Feb 27 strikes. Rep. Sam Liccardo's letter reveals White House issued warnings against insider trading after the fact, calling it 'little comfort'. CFTC's single Trump-appointed commissioner has begun reviewing trades but declined to confirm a formal investigation. The scale implies either coordinated trading by multiple actors with classified access, or a single sophisticated operation monetizing presidential decision cycles.",
  bg: "Insider trading leveraging government intelligence has precedents (9/11, Iraq War options activity), but the Iran war case shows three alarming escalations: (1) billion-dollar scale across multiple asset classes, (2) use of decentralized prediction markets to anonymize trades, (3) synchronization with presidential communication rhythms rather than just event timing.\n\nAcademic research by Columbia's Joshua Mitts shows traders linked to suspicious activity achieved 70% success rates pre-war. The newly identified $760M Hormuz trade had volumes 9x typical levels, per LSEG data. The speed of these trades — some placed within minutes of announcements — eliminates public information arbitrage as an explanation.\n\nThe legal battle centers on whether prediction market bets qualify as 'securities' under existing insider trading laws. The intelligence breach investigation runs parallel, examining possible compromise within Trump's decision circle given the strike/counter-strike specificity of trades. 38 linked crypto wallets show 93% accuracy on military outcomes since 2024 ($2M profit).\n\nFailure to prosecute would normalize wartime insider trading as a de facto profit center for those with classified access. Success requires tracing pseudo-anonymous crypto accounts back to human actors, a jurisdictional challenge given CFTC's depleted enforcement staff.",
  confirmed: ["$760M Brent crude short placed 20 min before Hormuz reopening (April 17, LSEG verified)", "$1.5B S&P 500 E-mini futures bought <2 min before March 23 delayed strikes announcement", "150 Polymarket accounts earned $1.2M on Feb 27 US-Israel strike bets (NYT analysis)", "Rep. Liccardo's April 18 letter cites $950M oil futures bet before April 7 ceasefire", "CFTC reviewing trades per Bloomberg sources, no formal announcement", "Blockchain analytics firm identified 38 linked wallets with 93% military outcome accuracy", "White House issued internal warnings against insider trading after trades occurred", "$580M oil futures bet placed 15 min before Trump's March 23 'productive talks' post (FT verified)", "Anonymous Polymarket user 'Magamyman' made $553K betting on Khamenei removal 71 min before strike", "6 suspected insiders made $1.2M combined on Polymarket after Khamenei killing (Public Citizen complaint)"],
  developing: ["Whether CFTC probe under Michael Selig produces indictments", "If SEC will investigate S&P 500 E-mini trades under Chair Atkins", "Whether Liccardo's requests for SEC documentation are fulfilled", "If crypto tracing identifies human actors behind profitable wallets", "Whether Senate Banking Committee investigation expands", "If Congressman Steven Horsford's allegations of market manipulation within Trump administration gain traction", "Whether state-level actions against prediction markets impact CFTC jurisdiction"],
  insights: ["The trades are networked: oil futures + S&P derivatives + Polymarket bets form a coherent portfolio that only makes sense with classified war plan access. This is structured arbitrage.", "Liccardo's letter explicitly connects Trump-era tariff announcement trades to current wartime patterns, suggesting systemic exploitation of presidential decision cycles.", "CFTC's eroded enforcement capacity (Chicago office now zero staff) makes tracing trades through crypto opacity infrastructure unlikely without intelligence community support.", "The $1.5B S&P move implies traders knew not just war developments but their precise market impact — a level of presidential communication anticipation that suggests rehearsal.", "The repeated 15-20 minute advance timing of trades suggests a structured information pipeline rather than ad hoc leaks.", "Polymarket's pseudonymous accounts and crypto-based transactions create jurisdictional gaps between CFTC and state gambling regulators."],
  questions: ["Why did White House ethics warnings come only after trades were executed?", "Will CFTC's Trump-appointed leadership pursue investigation aggressively?", "Does the S&P 500 trading indicate advance knowledge of Trump's exact announcement timing?", "Which foreign intelligence services might reverse-engineer US war plans from these trades?", "How did the 'Magamyman' account predict Khamenei's removal with 71-minute precision?", "Are the 38 linked wallets with 93% accuracy linked to government or military personnel?"],
  science: null,
  people: [{
    name: "Unknown traders",
    role: "Suspected insider network",
    why: "38 linked crypto wallets identified with 93% military prediction accuracy since 2024",
    alignment: "Financial",
    status: "Active"
  }, {
    name: "Sam Liccardo",
    role: "Congressman demanding SEC probe",
    why: "Authored April 18 letter outlining $1.6B in suspicious trades",
    alignment: "Regulatory",
    status: "Investigator"
  }, {
    name: "Craig Holman",
    role: "Public Citizen lobbyist",
    why: "Filed CFTC complaint citing $1.2M in suspicious Polymarket trades",
    alignment: "Watchdog",
    status: "Activist"
  }]
}, {
  tab: "power",
  connections: [],
  canada: null,
  implications: [],
  risks: [],
  id: "P04",
  code: "FED-01",
  heat: 3,
  status: "developing",
  updated: "Apr 20 2026",
  title: "The Federal Reserve & Dollar Power",
  sub: "Structural Financial Power · De-Dollarization · The International Monetary System",
  card: "The Federal Reserve is the most powerful unelected institution in the world. The dollar's reserve currency status is the foundation of American geopolitical power. Both are under structural pressure — from political attacks on Fed independence and from BRICS de-dollarization accelerated by the Iran war oil shock.",
  summary: "The Federal Reserve sets interest rates that affect borrowing costs for every economy on earth. The dollar's reserve currency status means most international trade — including oil — is priced in dollars, giving the US an extraordinary structural advantage. Both features are under simultaneous pressure. Domestically, Trump has attacked Fed independence and floated direct presidential control over monetary policy. Internationally, the Iran war oil shock is accelerating de-dollarization as oil-producing nations explore yuan-denominated settlement.",
  bg: "The Federal Reserve was created in 1913 following the Panic of 1907. The Jekyll Island meeting of 1910 — attended by senior bankers and government officials in secret, with participants traveling under assumed names — produced the framework that became the Federal Reserve Act. The meeting's secrecy is historically documented, not conspiracy.\n\nThe dollar became the world's reserve currency at the Bretton Woods Conference in 1944. When Nixon ended dollar-gold convertibility in 1971, the dollar's reserve status was maintained through the petrodollar system — OPEC nations, particularly Saudi Arabia, agreed to price oil in dollars in exchange for US security guarantees. This arrangement has held 50 years and is now under pressure.\n\nFed independence — monetary policy made by technocrats insulated from short-term political pressures — is not constitutionally guaranteed. The Federal Reserve is a creation of Congress and can be restructured by Congress. The argument for independence is empirical: countries with more independent central banks have lower inflation over time.\n\nThe BRICS de-dollarization project is real but slow. Russia and China are settling bilateral trade in yuan and rubles. The Iran war oil shock is creating pressure on other nations to explore non-dollar settlement for oil. No alternative reserve currency currently has the depth, liquidity, and legal infrastructure to replace the dollar. But the trend and trajectory matter.",
  confirmed: ["Trump publicly attacked Federal Reserve Chair Jerome Powell — called for lower rates, implied he would fire him", "Legal scholars dispute whether president can fire Fed Chair without cause — untested constitutional question", "BRICS nations formally discussed alternative payment systems and currency basket at 2024 summit", "Russia and China settling significant bilateral trade in yuan and rubles", "Iran war oil shock creating pressure on oil-producing nations to explore non-dollar settlement", "Federal Reserve in rate-cutting cycle — balance between inflation control and recession prevention", "Dollar index under pressure as Iran war creates global economic uncertainty", "Jekyll Island 1910 meeting documented historically — produced Federal Reserve framework", "Central bank digital currencies under development in 130+ countries — potential to reduce dollar intermediation", "US dollar broke above 100 on DXY for first time since May 2025 amid Iran war tensions", "Federal Reserve holding rates at 3.50–3.75% with no cuts expected before late 2026", "Brent crude surged above $110 per barrel amid Strait of Hormuz disruption", "Deutsche Bank predicted erosion in petrodollar dominance amid Iran war", "Franklin Templeton countered Deutsche analysis, citing dollar's structural advantages"],
  developing: ["Whether Trump attempts to remove Jerome Powell — legal challenge would be historically significant", "Whether Iran war oil shock produces measurable shift in oil settlement currency", "Whether BRICS alternative payment system gains operational traction", "Whether any major economy formally reduces dollar reserve holdings", "Whether CBDCs create meaningful infrastructure for non-dollar international settlement", "Whether dollar's short-term strength amid Iran war persists into late 2026", "Whether Federal Reserve cuts rates in 2026 despite inflation concerns"],
  insights: ["The petrodollar system is the structural foundation of American geopolitical power that most Americans have never heard of. It means the US can run persistent trade deficits without the currency crises that would destroy any other country. Any erosion is a direct reduction in American power.", "Fed independence is under the most serious threat in its history — not because of conspiracy but because of the convergence of political incentives. The president wants lower rates. The Treasury needs to finance a massive deficit cheaply. Both interests push toward political control.", "De-dollarization is real but not imminent. The dollar's advantages — depth of US treasury market, legal infrastructure, network effects — cannot be replicated quickly. But the direction of travel matters even if the destination is decades away.", "The Jekyll Island history is worth knowing because it illustrates how major financial institutions are actually created — not through public deliberation but through private coordination among powerful actors, later ratified through political processes. This pattern repeats with IMF, World Bank, BIS."],
  questions: ["Does Trump attempt to remove Powell — and does the legal challenge succeed?", "Does the Iran war oil shock produce a measurable lasting shift toward non-dollar oil settlement?", "Does the BRICS alternative payment system become operationally significant?", "At what pace is dollar reserve status eroding — and what is the tipping point?", "Will dollar's short-term strength amid Iran war persist into late 2026?", "Will Federal Reserve cut rates in 2026 despite inflation concerns?"],
  science: null,
  people: [{
    name: "Jerome Powell",
    role: "Federal Reserve Chair",
    why: "Under unprecedented political pressure. His ability to maintain Fed independence defines the institutional story.",
    alignment: "Federal Reserve (independent)",
    status: "active"
  }, {
    name: "Donald Trump",
    role: "US President",
    why: "Has publicly attacked Powell and implied he should have direct control over monetary policy.",
    alignment: "US Executive",
    status: "active"
  }, {
    name: "Janet Yellen",
    role: "Former US Treasury Secretary",
    why: "Her institutional knowledge of the international monetary system makes her analysis of de-dollarization risk the most credible available.",
    alignment: "International financial institutions",
    status: "sidelined"
  }]
}, {
  tab: "power",
  connections: [],
  canada: null,
  implications: [],
  risks: [],
  id: "P05",
  code: "CAPTURE-01",
  heat: 3,
  status: "monitoring",
  updated: "Apr 20 2026",
  title: "Institutional Capture — Global Patterns",
  sub: "Regulatory Capture · Media Capture · Judicial Capture · The Mechanism Across Democracies",
  card: "Regulatory capture — the process by which regulated industries come to control their regulators — is documented across democracies globally. It operates through revolving doors, campaign finance, think tank funding, and the slow colonization of institutional norms.",
  summary: "Institutional capture describes the process by which institutions created to serve public interests are gradually redirected to serve private interests. The most studied form is regulatory capture — industries controlling their regulators — but the mechanism operates across media, judiciary, academia, and electoral systems. It is not primarily a story about corruption in the legal sense. The outcome is systemic: institutions that should provide checks on concentrated power become instruments of it. This story tracks the mechanism globally — from the US financial sector to the EU pharmaceutical approval process to judiciary appointments in Poland and Hungary to media consolidation in Brazil and India.",
  bg: "Regulatory capture was formally theorized by economist George Stigler in 1971. Stigler's insight was that regulation is not primarily the product of public interest — it is a product of political competition in which organized private interests have systematic advantages over diffuse public interests. Industries have concentrated financial stakes in regulatory outcomes. The public has diffuse interests that are individually small even if collectively large.\n\nThe revolving door is the most visible mechanism: regulators become consultants or executives for industries they regulated, bringing relationships and knowledge. The opposite flow — industry executives becoming regulators — is equally important. Neither individual is necessarily corrupt; the system produces pro-industry outcomes regardless.\n\nMedia capture has a different mechanism. As traditional media business models collapsed, news organizations became dependent on billionaire ownership, corporate advertising, or government subsidy — each compromising editorial independence structurally even without explicit interference.\n\nJudicial capture is the longest game. Systematic, coordinated judicial appointment strategies — the Federalist Society pipeline in the US, judicial restructuring in Poland — can shift legal outcomes for a generation.",
  confirmed: ["Federalist Society documented as primary pipeline for US federal judicial appointments — systematic ideological coordination", "Citizens United (2010) removed most limits on corporate political spending in US", "EU pharmaceutical approval process documented cases of regulatory capture — EMA advisory board revolving door", "Poland and Hungary systematically restructured judicial appointment processes — EU judicial independence concerns", "Six companies control approximately 90% of US media — similar concentration in UK, Brazil, India", "Academic research documents systematic correlation between industry funding and conclusions favorable to funders", "Lobbying spending in US at record levels — over $4.1B in 2025", "Global Witness and Transparency International document regulatory capture patterns across 100+ countries", "Universities South Africa warns of systemic 'institutional capture' risks in higher education sector — governance processes bent toward private/factional interests", "Hungary's Rule of Law declined 30% since 2010 under Orbán — corruption increased 17%, income inequality 20% (International IDEA data)"],
  developing: ["Whether any democracy develops effective counter-capture regulatory architecture", "Whether AI creates new capture mechanisms — who regulates AI and how industry shapes that regulation", "Whether judicial restructuring in Hungary and Poland produces permanent institutional damage", "Whether AI-powered lobbying analytics create new scale advantages for organized private interests", "Whether Universities South Africa's governance reforms can counter academic capture through political interference and misinformation campaigns", "If IMF/World Bank will incorporate democratic backsliding metrics into economic risk assessments given documented correlation with economic instability"],
  insights: ["Capture is not conspiracy — it is structural incentive operating at scale. The revolving door produces pro-industry regulatory outcomes without any individual actor making a corrupt decision. This makes it extremely difficult to combat through individual accountability measures.", "AI regulation is the next major capture battleground. The companies being regulated have the most expertise to advise on regulation, the most resources to fund lobbying, and the most sophisticated tools for analyzing regulatory processes. The asymmetry is larger than in any prior regulatory domain.", "The Poland and Hungary judicial restructuring is the most important contemporary example of democratic backsliding through institutional capture. Both governments achieved it through entirely legal means using parliamentary majorities. The template is available to any party that wins sufficient seats.", "Media capture and regulatory capture reinforce each other. Captured media doesn't cover regulatory capture stories. Uncovered regulatory capture produces policy outcomes that benefit the captured. The feedback loop is self-reinforcing.", "Academic capture follows distinct patterns — political interference in university governance, premature parliamentary oversight damaging institutional credibility, and misinformation campaigns eroding public trust before internal processes conclude (USAf findings)"],
  questions: ["Has any democracy developed an institutional design that successfully resists capture long-term?", "Does AI regulation get captured before it is even established?", "Can the EU reverse judicial capture in Poland and Hungary?", "Is there an international coordination mechanism for anti-capture that could work?", "Can Universities South Africa's collective action model prevent academic governance capture across 26 institutions?", "Will economic institutions like IMF recognize democratic backsliding as a systemic economic risk factor?"],
  science: null,
  people: [{
    name: "George Stigler",
    role: "Economist (capture theory, 1971)",
    why: "His theoretical framework is the foundation for understanding regulatory capture.",
    alignment: "Academic (historical)",
    status: "deceased"
  }, {
    name: "Viktor Orbán",
    role: "Prime Minister, Hungary",
    why: "The most successful contemporary practitioner of democratic institutional capture — achieved through legal means.",
    alignment: "Fidesz/Hungary",
    status: "active"
  }, {
    name: "Lina Khan",
    role: "Former FTC Chair",
    why: "The most prominent recent attempt to reverse regulatory capture in tech.",
    alignment: "Regulatory (sidelined)",
    status: "sidelined"
  }, {
    name: "Francis Petersen",
    role: "Chairperson, Universities South Africa",
    why: "Leading institutional response to academic governance capture risks in South African universities.",
    alignment: "Academic governance reform",
    status: "active"
  }]
},, {
  id: "CL01",
  tab: "climate",
  connections: [],
  canada: null,
  implications: [],
  risks: [],
  code: "EMISSIONS-01",
  heat: 4,
  status: "developing",
  updated: "Apr 23 2026",
  title: "Global Emissions — Where We Actually Stand",
  sub: "The Numbers · The Trajectory · The Gap Between Commitment and Reality",
  card: "Global CO2 emissions hit a new record in 2025. The gap between national commitments and actual trajectories is wider than at any point since Paris. The 1.5°C window has effectively closed. The question is now how far above 2°C we land.",
  summary: "Global greenhouse gas emissions reached a new record in 2025. The scientific consensus has shifted: the 1.5°C target is now considered effectively unachievable under any realistic policy scenario. The current trajectory points to approximately 2.5-3°C of warming by 2100. The Iran war oil shock is creating contradictory pressures — accelerating the green energy transition in some countries while reinforcing fossil fuel infrastructure investment in others.",
  bg: "The Paris Agreement of 2015 set a target of limiting warming to 1.5°C above pre-industrial levels, with a harder limit of 2°C. Countries submitted Nationally Determined Contributions — voluntary pledges for emissions reduction. The gap between pledges and action has been the defining story of climate policy ever since.\n\nThe IPCC — Intergovernmental Panel on Climate Change — synthesizes climate science for policymakers. Its Sixth Assessment Report established that human influence on the climate is unequivocal, that 1.5°C will be reached or exceeded within two decades under most scenarios, and that some changes are already irreversible.\n\nThe carbon budget concept is central to the math. At current emissions rates, the remaining carbon budget for a 50% chance of staying below 1.5°C will be exhausted within approximately seven years. This is arithmetic, not projection. Atmospheric CO2 is currently at approximately 425 ppm — the highest in at least 3 million years.",
  confirmed: ["Global CO2 emissions reached new record in 2025 — approximately 37.4 billion tonnes", "Atmospheric CO2 concentration at approximately 425 ppm — highest in at least 3 million years", "IPCC: 1.5°C warming will be reached or exceeded within two decades under most scenarios", "Carbon budget for 50% chance of 1.5°C: approximately 7 years at current emissions rates", "G7 countries collectively not on track to meet their Paris commitments", "China remains world's largest emitter — approximately 30% of global total — with coal use still expanding", "US emissions declined under Biden-era IRA implementation but pace insufficient for Paris targets", "Deforestation contributing approximately 10% of global emissions", "Methane emissions from fossil fuel operations significantly underreported per satellite monitoring data", "41 emissions trading systems now in force worldwide covering 26% of global GHG emissions (ICAP 2026)", "ETS revenues reached record $80 billion in 2025, funding clean energy transitions and household support", "Energy-related CO2 emissions rose by 0.4% in 2025, marking a slowdown compared to recent years (IEA 2026)", "Solar PV capacity exceeded 1.6 terawatts globally in 2025, supplying a significant portion of electricity demand", "Electric vehicle adoption surged to around 18 million sales in 2024, representing about 20% of the global market", "China's CO2 emissions fell by 1% in Q4 2025, marking nearly two years of flat or declining emissions (Carbon Brief 2026)", "India's emissions were flat for the first time since the 1970s, excluding pandemic years (IEA 2026)", "EU greenhouse gas emissions fell by 3% between 2023 and 2024, now 40% below 1990 levels (IEA 2026)", "Solar energy accounted for over 25% of global energy growth in 2025, surpassing all other sources (IEA 2026)", "Wind energy installations jumped 40% in 2025, with over 160 gigawatts installed globally (IEA 2026)"],
  developing: ["Whether the Iran war oil shock produces lasting acceleration of green energy transition or temporary fossil fuel reinforcement", "Whether China's renewable energy build-out outpaces its continued coal expansion", "Whether the US rolls back IRA implementation — emissions trajectory impact", "Whether tropical forest protection agreements translate into actual deforestation reduction", "Whether methane monitoring and reporting requirements improve", "Whether new national ETS systems in Japan, India and Vietnam achieve meaningful emissions reductions", "Whether EU CBAM compliance phase accelerates broader carbon pricing adoption", "Whether advanced economies' reliance on coal-fired power generation persists amid high gas prices", "Whether developing economies' renewable energy expansion continues to offset emissions growth"],
  insights: ["The 1.5°C target is functionally dead. This is not a political statement — it is arithmetic. Accepting this is not defeatism; it is the precondition for honest policy design for the actual scenario we face.", "The gap between commitment and trajectory is the central governance failure of climate policy. Countries make pledges at COPs that their domestic political systems cannot deliver. No country has solved this structural mismatch.", "China's simultaneous massive renewable build-out and continued coal expansion is the most important climate story in the world right now. Which trend wins determines global emissions trajectory more than any other single factor.", "The methane underreporting story is significant. Satellite monitoring reveals emissions substantially higher than official reporting. Methane is approximately 80 times more potent than CO2 over 20 years. The real-world warming effect is materially worse than official figures suggest.", "The Iran war oil shock is the strongest argument for the green transition ever made — and it is being made in real time. Countries that diversified away from fossil fuels are less exposed. Countries that didn't are paying for it.", "Emissions trading has moved from niche to mainstream, with 41 systems now covering 26% of global emissions and generating $80 billion annually — but impact depends on how strictly caps are enforced and revenues are reinvested.", "The rapid expansion of solar PV capacity and electric vehicle adoption highlights the growing momentum of renewable energy, but fossil fuels still dominate global energy use, creating a delay between innovation and full impact."],
  questions: ["At what temperature does the current trajectory actually land — and what does 2.5°C or 3°C mean concretely?", "Does China's renewable build-out outpace its coal expansion on a net emissions basis?", "Does the US IRA implementation survive the current administration?", "Is there any scenario in which emissions reductions reach the pace required to avoid the worst outcomes?", "Can the rapid expansion of emissions trading systems (now covering 26% of global emissions) materially change the trajectory?", "Will the EU CBAM push more countries toward carbon pricing or provoke trade conflicts?", "Will advanced economies' reliance on coal-fired power generation persist amid high gas prices?", "Can developing economies' renewable energy expansion continue to offset emissions growth?"],
  science: ["IPCC AR6 Synthesis (2023): Current policies put world on track for 3.2°C warming by 2100. Limiting to 2°C requires immediate, deep, rapid emissions reductions across all sectors.", "Nature (2024): Remaining carbon budget for 1.5°C now estimated at 250 gigatonnes CO2 — at current rates, exhausted in approximately 6-7 years.", "Global Carbon Project (2025): Global CO2 emissions 37.4 billion tonnes — new record. Land use change adding approximately 3.9 billion tonnes additional.", "Science (2025): Satellite-based methane monitoring reveals fossil fuel methane emissions 70% higher than UNFCCC official inventory data in studied regions.", "Nature Climate Change (2025): Every fraction of a degree of additional warming produces measurable increases in extreme weather frequency and intensity — no safe threshold exists.", "PNAS (2024): Tipping point cascade risk — multiple Earth system tipping points may be interconnected, meaning crossing one increases probability of crossing others.", "ICAP Status Report (2026): Emissions trading systems now cover 26% of global emissions and generate $80 billion annually, showing carbon pricing is becoming mainstream policy tool.", "IEA (2026): Energy-related CO2 emissions rose by 0.4% in 2025, marking a slowdown compared to recent years, driven by rapid solar expansion in developing economies."],
  people: [{
    name: "Jim Skea",
    role: "IPCC Chair",
    why: "Leading the scientific body that synthesizes climate evidence for policymakers.",
    alignment: "IPCC/Scientific",
    status: "active"
  }, {
    name: "Sultan Al Jaber",
    role: "COP28 President / ADNOC CEO",
    why: "The most visible example of the structural contradiction in climate governance — the head of COP28 was simultaneously the head of a major oil company.",
    alignment: "UAE/Oil industry",
    status: "active"
  }, {
    name: "Fatih Birol",
    role: "IEA Executive Director",
    why: "The IEA's annual World Energy Outlook is the most authoritative annual assessment of energy transition progress.",
    alignment: "International Energy Agency",
    status: "active"
  }]
}, {
  id: "CL02",
  tab: "climate",
  connections: [],
  canada: null,
  implications: [],
  risks: [],
  code: "TRANSITION-01",
  heat: 3,
  status: "developing",
  updated: "Apr 23 2026",
  title: "The Green Energy Transition",
  sub: "Who's Winning · Who's Falling Behind · What the Iran War Changes",
  card: "China dominates clean tech production while Europe protects itself via renewables. The US retreats from policy. South Korea announces ambitious plan constrained by structural factors. Iran war strengthens both transition urgency and China dependency.",
  summary: "The green energy transition is accelerating but uneven. Solar/wind now cheapest new electricity sources worldwide. Europe's renewables generate half its power, insulating against Iran war oil shocks. South Korea plans aggressive renewables push but faces land constraints. US allies deepen China clean tech ties amid energy security concerns, creating geopolitical tensions.",
  bg: "The energy transition is the project of replacing fossil fuels — which currently supply approximately 80% of global primary energy — with low-carbon alternatives. The scale is historically unprecedented.\n\nSolar PV costs have fallen approximately 90% since 2010. Wind costs have fallen approximately 70%. These declines were not predicted by mainstream energy models as recently as 2015. In most of the world, new renewable electricity is now cheaper than new fossil fuel electricity.\n\nThe China dimension is critical and contradictory. China manufactures approximately 80% of the world's solar panels, 70% of wind turbines, and 60% of EV batteries. Its domestic renewable buildout is the largest in human history. It is also the world's largest coal consumer and is building more coal plants than any other country.\n\nThe Global South faces a specific challenge: the cheapest energy for immediate development is often fossil fuels. Asking developing countries to forgo fossil-fueled development while the developed world built its prosperity on coal and oil creates legitimate equity questions that climate negotiations have not resolved.",
  confirmed: [
    "Solar PV costs fallen approximately 90% since 2010 — now cheapest source of new electricity generation",
    "Wind costs fallen approximately 70% since 2010",
    "China installed more solar capacity in 2024 than the entire world installed in any prior year",
    "EU added 144 GW solar PV (90% increase) and 43 GW wind capacity (23% increase) from 2021-2024",
    "EU renewables generated half of electricity in 2024, avoiding €100B in fuel imports since 2022",
    "Minister John Abdulai Jinapor announced WhatsApp-based system for real-time power fault reporting in Ghana (20 Apr 2026)",
    "China fast-tracking hydrogen strategy to scale-up phase, developing world's largest green hydrogen/ammonia project in Inner Mongolia",
    "Iran war triggered EU draft plan to accelerate green transition, citing energy security concerns (18 Apr 2026)",
    "South Korea to unveil 'Green Great Transformation Strategy' in June 2026, targeting 100 GW renewables by 2030 (22 Apr 2026)",
    "South Korea's renewables share doubled in past five years but remains below EU levels, highlighting transition challenges (22 Apr 2026)",
    "Germany/Spain/UK leaders made multiple Beijing visits seeking clean tech supply chain access (Apr 2026)",
    "Wind power surpassed natural gas as second-largest EU power source in 2024, trailing only nuclear",
    "South Korea's fossil fuels still supply ~60% of electricity despite renewables growth"
  ],
  developing: [
    "Whether US IRA rollback significantly slows clean energy deployment",
    "Whether China's renewable dominance translates into global supply chain control", 
    "Whether battery storage crosses cost thresholds enabling full grid decarbonization",
    "Whether grid bottlenecks in Europe will stall renewables growth despite accelerated deployment plans",
    "Whether Iran war oil shock produces lasting policy shift toward energy independence vs deeper China supply chain dependency",
    "Whether South Korea's 100 GW renewables target by 2030 is achievable given land constraints and public resistance",
    "Whether EU electricity market reforms successfully break gas-price linkage for renewables"
  ],
  insights: [
    "The cost curves have already won the economic argument for electricity. The bottleneck has moved from economics to permitting, grid expansion, and storage.",
    "China's dominance of transition supply chains is the geopolitical story Western governments are scrambling to respond to. EU proposing caps on Chinese clean tech imports while Germany/Spain deepen Beijing ties.", 
    "The Iran war oil shock is accelerating both EU green transition plans and China supply chain dependency — these two trends are now in direct competition.",
    "Local digital innovations (like Ghana's WhatsApp reporting system) showcase how developing economies can leapfrog legacy grid infrastructure.",
    "South Korea's transition strategy highlights the tension between ambitious renewables targets and structural constraints like land availability and public resistance.",
    "Europe's protection against Iran war impacts demonstrates successful insulation via renewables — a model other import-dependent economies may follow"
  ],
  questions: [
    "Does the US IRA survive rollback — and what is the emissions impact if it doesn't?",
    "Will EU's proposed electricity tax cuts (22 Apr proposal) successfully incentivize electrification?",
    "Does operational heat stress on solar/wind infrastructure worsen with climate change‘s feedback loops?",
    "Can Ghana-style digital leapfrogging models scale across developing economies with grid constraints?",
    "Will South Korea's 'energy income model' successfully engage local communities in renewable projects?",
    "Can voluntary generator contracts effectively decouple EU electricity prices from gas volatility?"
  ],
  science: [
    "Nature Energy (2025): Solar PV learning rate — costs fall approximately 20% for every doubling of cumulative capacity.",
    "BloombergNEF (2025): Clean energy investment reached $1.8T in 2024 — first year exceeding fossil fuel investment.",
    "EIB Report (2026): EU avoided €71B in fuel imports in 2022-2023 through renewable expansion.",
    "IEA (2025): Current policies scenario has fossil fuels still supplying 60% of primary energy in 2050.",
    "Ember (2026): Clean electricity growth outpaced global demand in 2025, preventing increase in fossil generation.",
    "IEA (2026): Renewables projected to supply over 40% of global electricity by 2030 based on current trajectories"
  ],
  people: [{
    name: "Fatih Birol",
    role: "IEA Executive Director",
    why: "His annual assessments define the mainstream policy view of transition progress.",
    alignment: "International Energy Agency",
    status: "active"
  }, {
    name: "He Lifeng", 
    role: "China's top economic planner",
    why: "China's clean energy and industrial policy decisions are made at his level.",
    alignment: "China/CCP",
    status: "active"
  }, {
    name: "Ursula von der Leyen",
    role: "EU Commission President",
    why: "Leading EU response to Iran war energy shock through accelerated transition policies.",
    alignment: "European Union",
    status: "active"
  }, {
    name: "Kim Sung-hwan",
    role: "South Korea's Environment Minister",
    why: "Leading South Korea's Green Great Transformation Strategy rollout.",
    alignment: "South Korea",
    status: "active"
  }, {
    name: "Stéphane Séjourné",
    role: "EU Industry Chief",
    why: "Proposed legislation targeting Chinese clean tech dominance.",
    alignment: "European Union", 
    status: "active"
  }]
}, {
  id: "CL03",
  tab: "climate",
  connections: [],
  canada: null,
  implications: [],
  risks: [],
  code: "ARCTIC-CLIMATE-01",
  heat: 4,
  status: "developing",
  updated: "Apr 23 2026",
  title: "Arctic Climate Science",
  sub: "Sea Ice · Permafrost · Feedback Loops · The Science of Accelerating Change",
  card: "The Arctic is warming four times faster than the global average. Sea ice extent is at record lows. Permafrost thaw is releasing methane not fully captured by current models. The feedback loops are real and potentially irreversible.",
  summary: "The Arctic is the fastest-warming region on Earth, changing at approximately four times the global average rate. Arctic sea ice reached new record lows in 2024 and 2025. Permafrost — frozen ground covering approximately 25% of the Northern Hemisphere land surface — is thawing and releasing carbon and methane stored for thousands of years. This creates a feedback loop: warming causes thaw, thaw releases greenhouse gases, gases cause more warming. The science on these feedback loops is more alarming than mainstream models have captured.",
  bg: "The Arctic is defined as the region north of the Arctic Circle (66.5°N). It contains the Arctic Ocean — largely covered by sea ice — and surrounding land areas of Russia, Canada, Alaska, Norway, Greenland, and Iceland.\n\nArctic sea ice serves multiple functions in the global climate system. It reflects sunlight back into space (high albedo), regulating how much solar energy the Earth absorbs. As sea ice melts, it exposes darker ocean water which absorbs more heat — the ice-albedo feedback, one of several reinforcing feedback loops in the Arctic system.\n\nPermafrost covers approximately 25% of Northern Hemisphere land surface and contains approximately 1.5 trillion tonnes of organic carbon — nearly twice the amount currently in the atmosphere. As permafrost thaws, this carbon is processed by microbes and released as CO2 and methane. Methane is approximately 80 times more potent than CO2 over 20 years.\n\nThe jet stream connection: Arctic warming is changing the temperature gradient between the Arctic and mid-latitudes, affecting the jet stream — the atmospheric river governing weather patterns across the Northern Hemisphere. A weakened, more meandering jet stream is associated with more persistent extreme weather events: prolonged heat waves, extended cold snaps, stalled storm systems.",
  confirmed: [
    "Arctic warming approximately four times faster than global average — amplification well-documented",
    "Arctic sea ice extent reached record lows in 2024 and 2025 summer minimums",
    "Permafrost thaw accelerating — visible in thermokarst formation, infrastructure damage, and coastal erosion",
    "Carbon and methane release from permafrost measured and increasing — exact quantities uncertain",
    "Greenland ice sheet losing mass at accelerating rate",
    "Arctic Ocean increasingly ice-free in summer months",
    "Polar vortex disruptions linked to Arctic warming — extreme cold weather events in mid-latitudes",
    "Indigenous communities in Arctic Canada, Alaska, and Russia reporting infrastructure failure from permafrost thaw",
    "Northwest Passage navigable August-September — window expanding annually",
    "March 2026 Arctic sea ice maximum tied with lowest satellite record at 14.29 million square kilometers (NASA)",
    "Barents Sea ice completely melted in more areas than previous years, with thinning spreading northward (NASA ICESat-2 data)",
    "Atlantic water intrusion into Arctic ('Atlantification') now understood to be driven by changing frequency of low-pressure systems, not just wind strength (Nature Climate Change 2026)",
    "MOSAiC Expedition research confirms biological particles from meltwater pools contribute to unique Arctic cloud formation (Geophysical Research Letters 2026)",
    "NOAA Arctic program reports 2025 fires scorched record peat, doubling emissions in affected basins (Nature World News)",
    "University of Massachusetts Amherst study reveals Arctic permafrost thaw reshaping rivers and releasing ancient carbon at accelerating rates (Global Biogeochemical Cycles 2026)",
    "Arctic Ocean receives disproportionate share of dissolved organic carbon — over 275 million tons converted to CO2 annually, intensifying global warming (ScienceDaily 2026)",
    "Northwest Alaska shows largest rise in carbon export due to peat-rich plains — ancient carbon accumulating for tens of thousands of years (ScienceDaily 2026)"
  ],
  developing: [
    "Whether permafrost carbon release creates a self-sustaining feedback loop independent of human emissions",
    "Exact quantities and timing of permafrost carbon and methane release — large scientific uncertainty",
    "Whether summer Arctic sea ice will disappear entirely within 10-20 years or longer",
    "How Arctic warming affects jet stream and mid-latitude weather patterns",
    "Whether methane hydrates on Arctic ocean floor are destabilizing",
    "How Greenland ice sheet contributes to sea level rise under different warming scenarios",
    "Impact of changing atmospheric rhythms on Arctic ocean circulation patterns",
    "Role of biological ice-nucleating particles in Arctic cloud formation and climate feedbacks",
    "Potential for Arctic deep ocean to become more energetic due to Atlantification (Communications Earth & Environment 2026)",
    "Whether Arctic warming-triggered cold waves in midlatitudes will persist in warmer future (npj Climate and Atmospheric Science 2023)"
  ],
  insights: [
    "The permafrost carbon feedback is the sleeper risk in climate science. Current IPCC models include it partially but cannot fully capture non-linear dynamics. If permafrost thaw accelerates beyond current trajectories — which some observational data suggests — the effective carbon budget for any temperature target is smaller than officially stated.",
    "Arctic sea ice loss is not primarily an aesthetic loss — it is a fundamental change to the climate system. Each increment of ice loss increases warming pressure on the system through the ice-albedo feedback. This is the clearest example of a reinforcing feedback loop.",
    "The infrastructure consequences of permafrost thaw are immediate and enormous. Russia has the most infrastructure built on permafrost — roads, pipelines, buildings, entire cities. The cost to Russian infrastructure alone is estimated in the trillions. This is happening now.",
    "The Arctic sovereignty and Arctic climate stories are the same story viewed from different angles. Both are driven by sea ice loss. The climate science story is about physics and feedback loops. The sovereignty story is about who controls the resources and routes that ice loss opens.",
    "New research shows Arctic climate systems respond to atmospheric rhythm changes, not just intensity — a fundamental shift in understanding ocean-atmosphere coupling.",
    "Meltwater pools on sea ice surface are now confirmed as sources of biological particles that influence unique Arctic cloud formation — a previously understudied feedback mechanism.",
    "Arctic rivers play outsized role in global system — delivering 11% of world's river water into Arctic Ocean, which holds just 1% of global ocean volume (Global Biogeochemical Cycles 2026)",
    "Northwest Alaska shows largest rise in carbon export due to peat-rich plains — ancient carbon accumulating for tens of thousands of years (ScienceDaily 2026)"
  ],
  questions: [
    "Is the permafrost carbon feedback loop already self-sustaining — and would we know if it were?",
    "When does the Arctic Ocean have its first ice-free summer — and what are the system-level consequences?",
    "Are methane hydrates on the Arctic ocean floor destabilizing?",
    "How much does Arctic warming contribute to extreme weather events in mid-latitudes including Canada?",
    "Is there any intervention — solar geoengineering, carbon removal — that could stabilize the Arctic system?",
    "How will changing atmospheric rhythms affect long-term Arctic ocean circulation patterns?",
    "What role do biological particles from melt ponds play in Arctic cloud formation and regional climate feedbacks?",
    "How will Arctic warming affect winter weather predictability in midlatitudes under warmer climates?"
  ],
  science: [
    "Nature (2024): Arctic warming rate has increased from 3x to 4x global average over past decade — amplification accelerating.",
    "Science (2025): Permafrost active layer depth increasing 3-5cm per decade across Siberia — methane flux measurements 40% higher than 2010 baseline.",
    "Nature Climate Change (2024): Greenland ice sheet melt contributing 0.7mm/year to sea level rise — rate has tripled since 1990s.",
    "Geophysical Research Letters (2025): First ice-free Arctic summer now projected for 2030s under current emissions trajectory — 10-15 years earlier than 2021 IPCC projection.",
    "Science (2024): Arctic jet stream meandering index at highest recorded level — consistent with increased frequency of persistent extreme weather events in mid-latitudes.",
    "Nature Geoscience (2025): Methane hydrate destabilization on Siberian continental shelf — active monitoring shows increasing bubble columns. Scale of potential release deeply uncertain.",
    "Nature Climate Change (2026): Atlantic water intrusion into Arctic driven by changing frequency of low-pressure systems, not just wind strength — atmospheric rhythm changes identified as key mechanism.",
    "Geophysical Research Letters (2026): Biological particles from meltwater pools contribute to unique Arctic cloud formation — MOSAiC Expedition findings.",
    "Communications Earth & Environment (2026): Arctic deep ocean projected to become more energetic due to Atlantification, particularly in Eurasian Basin.",
    "Global Biogeochemical Cycles (2026): Arctic permafrost thaw reshaping rivers and releasing ancient carbon at accelerating rates — University of Massachusetts Amherst study.",
    "npj Climate and Atmospheric Science (2023): Arctic warming-triggered cold waves in midlatitudes will persist in warmer future but become more difficult to predict."
  ],
  people: [{
    name: "Julienne Stroeve",
    role: "Sea ice scientist, UCL/NSIDC",
    why: "Among the world's leading Arctic sea ice researchers. Her observational data defines the scientific baseline on sea ice loss.",
    alignment: "Academic/Scientific",
    status: "active"
  }, {
    name: "Susan Natali",
    role: "Arctic Program Director, Woodwell Climate Research Center",
    why: "Leading researcher on permafrost carbon feedback.",
    alignment: "Academic/Scientific",
    status: "active"
  }, {
    name: "Robinson Hordoir",
    role: "Researcher, Institute of Marine Research and Bjerknes Centre for Climate Research",
    why: "Lead author on key study identifying atmospheric rhythm changes as driver of Arctic Atlantification.",
    alignment: "Academic/Scientific",
    status: "active"
  }, {
    name: "Jessie Creamean",
    role: "Research Scientist, Colorado State University",
    why: "MOSAiC Expedition researcher studying biological particles from melt ponds and their role in Arctic cloud formation.",
    alignment: "Academic/Scientific",
    status: "active"
  }, {
    name: "Michael Rawlins",
    role: "Geoscientist, University of Massachusetts Amherst",
    why: "Lead researcher on Arctic permafrost thaw and its impact on river systems and carbon release.",
    alignment: "Academic/Scientific",
    status: "active"
  }]
}, {
  id: "CL04",
  tab: "climate",
  connections: [],
  canada: null,
  implications: [],
  risks: [],
  code: "FOOD-01",
  heat: 4,
  status: "developing",
  updated: "Apr 23 2026",
  title: "Climate & Food Security",
  sub: "Drought · Agricultural Collapse · The Countries Already in Crisis",
  card: "Climate change is already reducing agricultural yields in the most vulnerable regions. The Iran war has compounded existing supply chain stress. 280 million people are in acute food insecurity. The food system is more fragile than most people realize.",
  summary: "The global food system is under compounding stress from three simultaneous drivers: climate-driven agricultural disruption, conflict-driven supply chain disruption, and economic stress. Approximately 280 million people are experiencing acute food insecurity as of early 2026 — roughly double 2019 levels. The countries most at risk are concentrated in sub-Saharan Africa, the Horn of Africa, the Middle East, and South Asia. These are not countries that caused the climate crisis, but they are experiencing its food security consequences most severely.",
  bg: "Agricultural production is more sensitive to climate than most economic activity. Crops are grown in specific temperature and precipitation windows. Small deviations — a few degrees of warming, shifted rainfall patterns, more frequent extremes — produce significant yield reductions. The Green Revolution of the 1960s-70s produced high-yield crop varieties and irrigation infrastructure that dramatically increased food production. Those yield gains are largely exhausted, and the crops are increasingly stressed by conditions they were not bred for.\n\nThe fertilizer system is a particular vulnerability. Modern industrial agriculture depends on nitrogen fertilizers derived from the Haber-Bosch process, which uses natural gas as a feedstock. Russia and Belarus are major fertilizer exporters. The Ukraine war disrupted supply chains. The Iran war oil shock has increased the cost of natural gas inputs.\n\nWater security is the underlying driver of much food insecurity. Many major agricultural regions depend on groundwater, glacial meltwater, or specific rainfall patterns — all being disrupted by climate change. The Indus basin, the Nile, the Colorado River, and multiple Chinese river systems are all experiencing water stress affecting agricultural output.\n\nFood price volatility has political consequences. The Arab Spring of 2011 was preceded by food price spikes. The current combination of climate stress, Ukraine war wheat disruption, and Iran war oil shock has produced food price conditions more severe than 2011 by some measures.",
  confirmed: ["Approximately 280 million people in acute food insecurity globally — roughly double 2019 levels", "Ukraine war disrupted wheat exports — Ukraine and Russia supply approximately 30% of global wheat", "Iran war oil shock increasing fertilizer input costs", "Horn of Africa experiencing worst drought in 40 years — Somalia, Ethiopia, Kenya most affected", "Sahel food insecurity worsening as conflict and climate compound — 25 million at acute risk", "Gaza food insecurity at famine levels — WFP reporting starvation in northern Gaza", "India heat wave impacts reduced domestic wheat production in 2024", "Global food prices elevated — FAO Food Price Index approximately 15% above 2019 baseline", "Climate-driven agricultural yield reductions documented across multiple regions and crops", "Caribbean food prices up 55-60% since 2018 due to Middle East war supply chain shocks and climate impacts", "UN WFP reports crude oil prices above $114/barrel driving food inflation in import-dependent regions", "IIED study projects 24 countries could face critical food insecurity under 2°C warming scenario", "UK households facing £470 annual food bill increases with 12% struggling to afford meals", "UN reports 61% probability of El Niño in Caribbean by mid-2026 — historically linked to crop failures in region", "WMO confirms 60% chance of severe dry spells in Belize, Guyana, Suriname, Jamaica, and Trinidad/Tobago if El Niño develops", "UK Food Foundation reports 12% of households 'struggling to put food on the table' due to price spikes", "FAO-WMO report finds extreme heat already causing half a trillion work hours lost annually", "Beef cattle mortality reached 24% in some documented heatwaves", "Marine heatwaves linked to $6.6 billion loss in fisheries production", "Maize and wheat yields projected to drop 4-10% per 1°C of warming", "2025 Kyrgyzstan heat event saw temperatures 10°C above normal, contributing to 25% decline in cereal harvests", "Brazil 2023-2024 heat and drought conditions cut soybean yields by 20%"],
  developing: ["Whether Iran war oil shock produces fertilizer supply crisis affecting planting seasons", "Whether Horn of Africa drought conditions persist through 2026 growing seasons", "Whether any country crosses formal famine declaration threshold beyond Gaza", "Whether food price spikes produce political instability in at-risk countries — Egypt, Pakistan, Nigeria", "Whether El Niño conditions develop in Caribbean (61% probability) exacerbating food crisis", "Whether UK food price inflation triggers political response", "Whether Guyana's climate-smart agriculture program can be scaled regionally", "Whether Strait of Hormuz shipping disruptions persist beyond ceasefire", "Whether UK supermarket shortages expand beyond current produce restrictions", "Whether heat-tolerant crop varieties can be developed fast enough to offset losses", "Whether early warning systems for extreme heat can be effectively deployed in vulnerable regions"],
  insights: ["Food insecurity is the most direct human consequence of the interaction between climate change and geopolitical conflict. The 280 million number is not a projection — it is a current measurement.", "The fertilizer vulnerability is underappreciated. Food security in the developing world depends on nitrogen fertilizer that depends on natural gas that depends on prices currently elevated by the Iran war. This chain of dependency is invisible until it breaks.", "The political instability risk from food prices is documented and current. The Arab Spring correlation with 2011 food price spikes is well-established. The countries most at risk — Egypt, Pakistan, Nigeria, Ethiopia — are also countries with nuclear weapons or significant geopolitical weight.", "Climate change is not an equal-opportunity crisis. The countries that contributed least to cumulative emissions are experiencing the most severe food security consequences. The moral arithmetic is stark and the political response is insufficient.", "The Caribbean crisis demonstrates how climate and conflict shocks propagate through import-dependent food systems — a warning for other regions.", "UK food insecurity at 12% household level shows even developed economies are not immune to systemic shocks", "Energy-intensive food production (meat, dairy, greenhouse crops) most vulnerable to Middle East war price shocks", "Extreme heat is increasingly defining the conditions under which agrifood systems operate, with yields declining and agricultural workers facing dangerous conditions", "Heatwaves are becoming more frequent, intense, and prolonged, damaging crops, livestock, fisheries, and forests", "Adaptation measures such as heat-resilient crops, adjusted planting schedules, and improved farm management practices are critical to respond to rising risks"],
  questions: ["Does the Iran war oil shock produce a fertilizer supply crisis affecting 2026 planting seasons?", "Which countries are at highest near-term risk of famine?", "Does food price stress produce political instability in any major country in 2026?", "What is the long-term trajectory of agricultural yields under 2°C and 3°C warming scenarios?", "Can climate-smart agriculture programs like Guyana's be scaled fast enough to offset losses?", "Will El Niño conditions materialize in Caribbean and with what severity?", "How will UK political system respond to 12% household food insecurity?", "Can heat-tolerant crop varieties be developed fast enough to offset losses?", "Can early warning systems for extreme heat be effectively deployed in vulnerable regions?"],
  science: ["Nature Food (2024): Global crop yield declines documented — wheat -5.5% per decade in heat-stressed regions, maize -3.1% per decade in sub-Saharan Africa under observed warming.", "Science (2025): Simultaneous crop failure risk — probability of multiple breadbasket failures in the same year has tripled since 1990 as climate extremes correlate across regions.", "Proceedings of the Royal Society B (2024): Food system fragility assessment — the global food system has fewer buffers against simultaneous shocks than at any point in the past 50 years.", "Nature Climate Change (2025): Water stress and food production — 40% of global agricultural land faces water stress by 2050 under current emissions trajectory.", "Lancet (2025): Malnutrition and climate — climate-driven food insecurity producing measurable increases in child stunting in sub-Saharan Africa and South Asia.", "FAO (2026): State of Food Security — 280 million in acute food insecurity, 750 million experiencing food insecurity at some level. Both at record highs.", "IIED (2026): Food insecurity could triple in 24 countries under 2°C warming, with low-income nations facing 22% average increase in food insecurity.", "ICRISAT (2026): Biofortified pearl millet varieties in Africa show 36% yield increases under drought conditions while addressing micronutrient deficiencies", "FAO-WMO (2026): Extreme heat and agriculture — yields of staple crops such as maize and wheat have already declined by 7.5% and 6% respectively with 1°C of global temperature rise"],
  people: [{
    name: "Cindy Holleman",
    role: "Chief Economist, FAO",
    why: "FAO's State of Food Security report is the authoritative annual measurement of global food insecurity.",
    alignment: "UN/FAO",
    status: "active"
  }, {
    name: "David Beasley",
    role: "Former WFP Executive Director",
    why: "His warnings about famine conditions have consistently preceded international action.",
    alignment: "Former UN/WFP",
    status: "sidelined"
  }, {
    name: "Ritu Bharadwaj",
    role: "Researcher, IIED",
    why: "Lead author on study projecting climate-driven food insecurity in 24 countries.",
    alignment: "Academic",
    status: "active"
  }, {
    name: "Anna Taylor",
    role: "Chief Executive, Food Foundation",
    why: "Documenting UK household food insecurity at 12% level due to price spikes.",
    alignment: "NGO",
    status: "active"
  }, {
    name: "Celeste Saulo",
    role: "Secretary-General, WMO",
    why: "Co-author of FAO-WMO report on extreme heat and agriculture.",
    alignment: "UN/WMO",
    status: "active"
  }, {
    name: "Qu Dongyu",
    role: "Director-General, FAO",
    why: "Co-author of FAO-WMO report on extreme heat and agriculture.",
    alignment: "UN/FAO",
    status: "active"
  }]
}, {
  id: "CL05",
  tab: "climate",
  connections: [],
  canada: null,
  implications: [],
  risks: [],
  code: "FOSSIL-01",
  heat: 4,
  status: "developing",
  updated: "Apr 23 2026",
  title: "Fossil Fuel Dependency — The Iran War as Forcing Function",
  sub: "The Strait Closure · Energy Independence · Who's Changing Policy and Who Isn't",
  card: "The Iran war has made the cost of fossil fuel dependency visible in a way that years of climate advocacy could not. Countries that diversified away from fossil fuels are less exposed to the oil shock. Countries that didn't are paying for it.",
  summary: "The Strait of Hormuz closure has created a live experiment in fossil fuel dependency. Countries that invested in renewable energy and energy storage over the past decade are less exposed to the current oil shock than those that didn't. Energy security is now the leading argument for clean energy investment in countries previously skeptical of the climate frame. The question is whether this emergency conversion produces lasting policy change or reverts when the crisis passes.",
  bg: "The geopolitics of oil have shaped international relations since the 1970s oil shocks. The first oil shock (1973-1974), triggered by the Arab oil embargo, produced the first serious Western interest in energy efficiency and alternatives. Both 1970s shocks produced lasting policy changes — fuel economy standards, strategic petroleum reserves, initial renewable energy investments — but not fundamental transformation.\n\nThe pattern of every subsequent oil shock: acute pain produces policy interest in alternatives, the shock passes, prices fall, policy interest fades, and dependence is rebuilt. The structural incentive — cheap fossil fuels are immediately available while clean alternatives require upfront investment — consistently wins in the short term.\n\nThe current shock has different features that may produce different outcomes. First, renewable energy is now cheaper than fossil energy in most contexts. Second, the supply chains for renewable energy are more developed. Third, geopolitical competition with China over clean energy manufacturing has created a strategic interest in the transition.\n\nAgainst this: the current US administration is actively retreating from clean energy policy. Major oil producers have strong incentives to cement long-term fossil fuel relationships. And the medium-term response to an oil supply shortage is increased oil production, not immediate transition.",
  confirmed: [
    "Countries with high renewable energy penetration experiencing smaller economic shock from oil price spike",
    "Countries with low renewable penetration implementing emergency demand rationing",
    "Japan accelerating nuclear restarts and renewable procurement in direct response to Strait closure",
    "South Korea fast-tracking LNG terminal diversification and offshore wind expansion",
    "Germany citing Iran war as justification for accelerated Energiewende implementation",
    "US Gulf Coast oil production increasing to fill Strait supply gap — short-term fossil reinforcement",
    "Saudi Arabia and UAE increasing production",
    "IEA strategic petroleum reserve releases insufficient to fully cover Strait disruption",
    "EU emergency energy measures activated — coordinated demand reduction and supply diversification",
    "Bangladesh forced to buy 11 LNG cargoes from spot market at double pre-war prices, costing $880M (~15% of monthly imports)",
    "Pakistan avoided spot purchases by reducing fossil fuel dependence from 32% to 25% since Ukraine war through solar expansion",
    "Qatar's Ras Laffan LNG facility damaged by Iranian strikes, worsening global supply crunch",
    "China supplying 80% of global solar panels and 90% of rare earths, strengthening clean energy leverage amid crisis",
    "France accelerating electrification measures to reduce fossil fuel share from 60% to 29% by 2035",
    "Philippines declaring national energy emergency, accelerating renewable development",
    "EU fossil fuel import bill increased by €22B in 44 days since Iran conflict began",
    "Pakistan's solar boom slashed $12B in oil and gas imports over four years",
    "Cambodia cutting import tariffs on EVs and solar equipment to zero",
    "Shell Polymers Monaca Plant operating in Pennsylvania as of April 7, 2026, highlighting US petrochemical production amid crisis",
    "Delphine Lévi Alvarès, global petrochemicals campaign manager at CIEL, stating 'We cannot continue relying on fossil fuels neither for energy nor for material'",
    "International climate talks scheduled in Santa Marta, Colombia from April 24-29, 2026 to discuss petrochemical dependency"
  ],
  developing: [
    "Whether Japan's nuclear restart and renewable acceleration survives domestic political opposition",
    "Whether South Korea's clean energy acceleration produces lasting policy or reverts post-crisis",
    "Whether US clean energy rollback is reversed in response to energy security arguments",
    "Whether global LNG infrastructure investment locks in gas dependency for 30+ years",
    "Whether the energy security frame permanently replaces the climate frame as the political argument for transition",
    "Whether Bangladesh reverses long-term LNG reliance after $880M spot market shock",
    "Whether Pakistan's solar expansion model is replicated by other energy-import dependent nations",
    "Whether EU's clean energy shift increases geopolitical dependence on China",
    "Whether France's electrification targets are met given infrastructure challenges",
    "Whether Philippines' renewable push reduces coal dependence from 60%",
    "Whether Cambodia's EV tariff cuts accelerate adoption despite infrastructure gaps",
    "Whether international climate talks in Santa Marta produce concrete policy shifts on petrochemical dependency",
    "Whether US petrochemical production increases as alternative to Middle East supply"
  ],
  insights: [
    "The energy security argument for the transition is more politically durable than the climate argument in most democratic systems. Climate is abstract and future-oriented. Energy security is immediate and self-interested. The Iran war is making it viscerally real.",
    "The structural irony: the countries increasing production to fill the Strait gap are primarily the Gulf producers whose revenue depends on sustained fossil fuel demand. They benefit from both the crisis — higher prices — and the eventual resolution — continued demand.",
    "Japan and South Korea's responses are the most significant to watch. Both are large wealthy democracies with high fossil fuel import dependency, developed technological capacity, and strong energy security instincts.",
    "The LNG infrastructure lock-in risk is real. Building a new LNG terminal commits to 30+ years of gas imports. Countries fast-tracking LNG diversification may be trading one fossil fuel dependency for another.",
    "Pakistan-Bangladesh divergence shows solar adoption can reduce crisis exposure — solar now drives EV shift saving $12B in oil/gas imports",
    "China emerging as key beneficiary — European leaders making multiple Beijing visits for clean tech access while US cedes leadership",
    "France's electrification push highlights industrial decarbonization challenges beyond power sector",
    "Philippines' energy emergency declaration underscores risks of coal dependence in import-dependent economies",
    "Cambodia's tariff cuts signal emerging markets' shift toward EV adoption despite infrastructure gaps",
    "US petrochemical production remains active in Pennsylvania, highlighting domestic industry's role amid Middle East supply disruptions",
    "International climate talks in Santa Marta may shift focus from energy production to petrochemical dependency in manufacturing"
  ],
  questions: [
    "Does the energy security argument produce lasting clean energy policy change in major fossil fuel importers?",
    "Does LNG infrastructure investment lock in gas dependency conflicting with net zero timelines?",
    "Do Japan and South Korea make permanent policy shifts or revert when the crisis passes?",
    "Does any OPEC+ member use the crisis revenue to begin domestic economic diversification?",
    "Will Bangladesh adopt Pakistan's solar model after $880M LNG shock?",
    "How much will EU clean energy acceleration increase Chinese geopolitical leverage?",
    "Can France meet its ambitious electrification targets given infrastructure constraints?",
    "Will Philippines' renewable push significantly reduce coal dependence?",
    "Will Cambodia's EV tariff cuts accelerate adoption despite infrastructure challenges?",
    "Will international climate talks in Santa Marta produce concrete policy shifts on petrochemical dependency?",
    "Will US petrochemical production increase as alternative to Middle East supply disruptions?"
  ],
  science: [
    "Nature Energy (2025): Countries with >40% renewable electricity penetration experienced 60% lower economic impact from oil price shocks — first empirical quantification of transition resilience benefit.",
    "IEA (2026): Strait of Hormuz closure scenario analysis — countries with diversified energy portfolios have 40-70% lower GDP exposure to oil supply disruption.",
    "Energy Policy (2025): LNG lock-in analysis — current LNG terminal construction pipeline, if completed, commits $2.1T in gas infrastructure extending to 2060s.",
    "Science (2025): Energy security and climate co-benefits — policies designed for energy security produce 65-80% of the emissions reductions required for climate targets as a co-benefit.",
    "Nature Climate Change (2024): Oil price shock political economy — historical analysis shows 18-24 month window of peak political receptiveness to clean energy policy following supply shocks."
  ],
  people: [{
    name: "Yoon Suk-yeol",
    role: "President, South Korea",
    why: "South Korea's clean energy acceleration response to the Strait closure is happening under his direction.",
    alignment: "South Korea",
    status: "active"
  }, {
    name: "Ursula von der Leyen",
    role: "EU Commission President",
    why: "The EU's emergency energy measures and long-term transition policy are in her domain.",
    alignment: "European Union",
    status: "active"
  }, {
    name: "Fatih Birol",
    role: "IEA Executive Director",
    why: "His scenario analysis of the Strait closure energy security impact is the key quantitative reference.",
    alignment: "International Energy Agency",
    status: "active"
  }, {
    name: "Shafiqul Alam",
    role: "Analyst, IEEFA",
    why: "Documenting Bangladesh-Pakistan energy divergence and $880M LNG shock impact.",
    alignment: "Energy Economics",
    status: "active"
  }, {
    name: "Delphine Lévi Alvarès",
    role: "Global Petrochemicals Campaign Manager, CIEL",
    why: "Leading voice on petrochemical dependency and its role in fossil fuel demand.",
    alignment: "Environmental Advocacy",
    status: "active"
  }]
}];
const AI_ALERTS = [{
  id: "ALERT-NEW",
  severity: "critical",
  date: "Apr 7 2026",
  resolved: false,
  title: "Iran Threatens US Tech Companies — Nvidia, Microsoft, Apple, Google Named",
  summary: "Iran's IRGC has threatened strikes on Nvidia, Microsoft, Apple, Google, and 14 other US tech companies with American shareholders operating in the Gulf region. Threat is conditional on US striking Iranian power plants. Ceasefire talks are ongoing; no deal reached.",
  affected: "Companies with Gulf infrastructure: AWS, Oracle, OpenAI (Stargate), Microsoft, Nvidia, Google, Apple and others",
  action: "Monitor ceasefire talks — if US strikes Iranian power plants, Iranian retaliation against Gulf tech infrastructure becomes significantly more likely · No action required for personal users at this time",
  notAffected: "Standard Claude.ai users · Users not dependent on Gulf-region infrastructure"
}, {
  id: "ALERT-000",
  severity: "critical",
  date: "Apr 7 2026",
  resolved: false,
  title: "Iran Threatens AI & Cloud Infrastructure — Stargate UAE, AWS, Oracle",
  summary: "Iran has explicitly threatened the $30B Stargate UAE AI datacenter (OpenAI/Nvidia/Oracle/SoftBank) in Abu Dhabi with 'complete annihilation' and released satellite imagery of the facility. Iran has already struck AWS data centers in Bahrain and an Oracle datacenter in Dubai causing outages. Iran has also threatened Nvidia, Apple, Microsoft, and Google by name.",
  affected: "Any services running on AWS Middle East, Oracle UAE, or Gulf-region cloud infrastructure · Stargate UAE facility · Anyone with data or workloads in Gulf-region datacenters",
  action: "If you run workloads on AWS Middle East or Oracle UAE: check your provider's status pages and consider migrating critical workloads to non-Gulf regions · No action required for standard Claude.ai users — Anthropic infrastructure is US-based",
  notAffected: "Claude.ai users — Anthropic operates from US-based infrastructure · AWS US, EU, and Asia-Pacific regions unaffected so far"
}, {
  id: "ALERT-001",
  severity: "critical",
  date: "Mar 31 2026",
  resolved: false,
  title: "Claude Code npm Supply Chain Attack",
  summary: "Malicious axios versions 1.14.1 and 0.30.4 containing a Remote Access Trojan were published to npm. Users who installed or updated Claude Code via npm between 00:21–03:29 UTC on March 31 may be compromised.",
  affected: "Claude Code npm install users · March 31 00:21–03:29 UTC only",
  action: "Run: grep -r \"plain-crypto-js|1\\.14\\.1|0\\.30\\.4\" package-lock.json yarn.lock · If found: treat machine as compromised, rotate all secrets, reinstall OS · Safe: switch to native installer at claude.ai/install.sh",
  notAffected: "Users who installed outside that 3-hour window · Users on native (non-npm) installer"
}, {
  id: "ALERT-002",
  severity: "high",
  date: "Apr 2 2026",
  resolved: false,
  title: "Trojanized Claude Code Repos on GitHub",
  summary: "Malicious GitHub repositories disguised as leaked Claude Code source are distributing Vidar Stealer and GhostSocks malware. One repo had 793 forks and 564 stars before flagging.",
  affected: "Anyone who downloaded and ran files from unofficial Claude Code GitHub repos",
  action: "Do not download or run any Claude Code from GitHub repos you did not create yourself · Only install from claude.ai/download or official npm package · If you ran ClaudeCode_x64.exe from any GitHub release: treat machine as compromised",
  notAffected: "Users who only use official Anthropic channels"
}, {
  id: "ALERT-003",
  severity: "medium",
  date: "Apr 1 2026",
  resolved: false,
  title: "Claude Code npm Typosquatting Campaign",
  summary: "Attacker 'pacifier136' published empty stub packages with names matching internal Claude Code npm packages. Currently empty but designed to push malicious updates once users install.",
  affected: "Developers trying to compile leaked Claude Code source who installed matching package names",
  action: "Only install @anthropic-ai/claude-code from the official npm scope · Do not install any packages matching internal Claude Code names from unofficial publishers",
  notAffected: "Standard Claude Code users who are not attempting to compile leaked source"
}, {
  id: "ALERT-004",
  severity: "low",
  date: "Mar 28 2026",
  resolved: true,
  title: "OpenClaw Authentication Bypass Vulnerability",
  summary: "Critical authentication bypass in OpenClaw framework (used in Moltbook) allowed agent hijacking. Separate from Claude Code but relevant to any developer using OpenClaw-based agent frameworks.",
  affected: "Developers using OpenClaw-based agent frameworks",
  action: "Update OpenClaw to latest patched version · Review any agents deployed via OpenClaw for unauthorized access",
  notAffected: "Claude Code users · Standard Claude.ai users"
}];
const WAR_COLOR = "#a03030";
const CATS = [{
  id: "ai",
  label: "AI & GOVERNANCE"
}, {
  id: "geopolitics",
  label: "GEOPOLITICS"
}, {
  id: "economics",
  label: "ECONOMICS & POWER"
}, {
  id: "power",
  label: "POWER & ACCOUNTABILITY"
}, {
  id: "social",
  label: "SOCIAL & INFORMATION"
}];
const STATUS = {
  "escalating": {
    label: "ESCALATING",
    color: "#e07b39",
    bg: "rgba(224,123,57,0.1)"
  },
  "active-war": {
    label: "ACTIVE WAR",
    color: "#c94040",
    bg: "rgba(201,64,64,0.1)"
  },
  "developing": {
    label: "DEVELOPING",
    color: "#d4a843",
    bg: "rgba(212,168,67,0.1)"
  },
  "resolved": {
    label: "RESOLVED",
    color: "#4a9b6f",
    bg: "rgba(74,155,111,0.1)"
  },
  "monitoring": {
    label: "MONITORING",
    color: "#6b8cba",
    bg: "rgba(107,140,186,0.1)"
  }
};
const CATCOLOR = {
  ai: "#7ba7d4",
  geopolitics: "#c97b7b",
  economics: "#c9a84c",
  science: "#7bbfa0",
  power: "#a07bb5",
  social: "#7bb5a0"
};
function Heat({
  n
}) {
  const c = n >= 5 ? "#c94040" : n >= 4 ? "#e07b39" : "#d4a843";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 3
    }
  }, [1, 2, 3, 4, 5].map(i => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      width: 7,
      height: 7,
      borderRadius: 1,
      background: i <= n ? c : "rgba(255,255,255,0.08)"
    }
  })));
}
function Badge({
  status
}) {
  const s = STATUS[status];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 5,
      background: s.bg,
      border: `1px solid ${s.color}33`,
      padding: "2px 8px",
      borderRadius: 2
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 5,
      height: 5,
      borderRadius: "50%",
      background: s.color,
      animation: status === "active-war" ? "pulse 1.4s infinite" : "none"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 9,
      color: s.color,
      letterSpacing: "0.15em",
      fontFamily: "monospace"
    }
  }, s.label));
}
function CopyBtn({
  text,
  label,
  small
}) {
  const [open, setOpen] = useState(false);
  if (open) return /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6,
      width: "100%"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 9,
      color: "#555",
      fontFamily: "monospace",
      marginBottom: 4,
      letterSpacing: "0.1em"
    }
  }, "SELECT ALL + CMD/CTRL+C TO COPY"), /*#__PURE__*/React.createElement("textarea", {
    readOnly: true,
    autoFocus: true,
    onFocus: e => e.target.select(),
    value: text,
    style: {
      width: "100%",
      minHeight: 60,
      background: "rgba(255,255,255,0.04)",
      border: "1px solid rgba(123,167,212,0.3)",
      borderRadius: 3,
      color: "#c0c8d8",
      fontSize: 11,
      padding: "8px 10px",
      fontFamily: "monospace",
      lineHeight: 1.5,
      resize: "vertical",
      boxSizing: "border-box",
      display: "block"
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpen(false),
    style: {
      marginTop: 4,
      background: "none",
      border: "1px solid rgba(255,255,255,0.08)",
      color: "#555",
      padding: "3px 10px",
      borderRadius: 3,
      fontSize: 9,
      cursor: "pointer",
      fontFamily: "monospace"
    }
  }, "CLOSE"));
  return /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpen(true),
    style: {
      background: "rgba(255,255,255,0.05)",
      border: "1px solid rgba(255,255,255,0.1)",
      color: "#777",
      padding: small ? "3px 9px" : "6px 14px",
      borderRadius: 3,
      fontSize: small ? 9 : 11,
      cursor: "pointer",
      letterSpacing: "0.1em",
      fontFamily: "monospace",
      whiteSpace: "nowrap"
    }
  }, label || "COPY");
}
function Items({
  list,
  color,
  icon
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 4
    }
  }, list.map((item, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      gap: 10,
      padding: "9px 12px",
      background: "rgba(255,255,255,0.018)",
      border: "1px solid rgba(255,255,255,0.04)",
      borderLeft: `2px solid ${color}40`,
      borderRadius: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color,
      fontSize: 9,
      marginTop: 4,
      flexShrink: 0
    }
  }, icon), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: "#9aa0b0",
      lineHeight: 1.65
    }
  }, item))));
}
function SidebarCard({
  s,
  active,
  onClick
}) {
  const st = STATUS[s.status];
  const cc = CATCOLOR[s.cat];
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    style: {
      background: active ? "rgba(255,255,255,0.055)" : "rgba(255,255,255,0.015)",
      border: `1px solid ${active ? "rgba(255,255,255,0.14)" : "rgba(255,255,255,0.05)"}`,
      borderLeft: `2px solid ${active ? st.color : cc + "44"}`,
      borderRadius: 2,
      padding: "10px 12px",
      cursor: "pointer",
      transition: "all 0.15s",
      marginBottom: 4
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 9,
      color: "#555",
      fontFamily: "monospace",
      letterSpacing: "0.1em",
      fontWeight: 600
    }
  }, s.code), /*#__PURE__*/React.createElement(Heat, {
    n: s.heat
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: active ? "#fff" : "#c0c8d8",
      fontWeight: 700,
      marginBottom: 4,
      lineHeight: 1.3
    }
  }, s.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "#505868",
      lineHeight: 1.55,
      marginBottom: 8
    }
  }, s.card), /*#__PURE__*/React.createElement(Badge, {
    status: s.status
  }));
}
const STATUS_STYLE = {
  "active": {
    label: "ACTIVE",
    color: "#4a9b6f",
    bg: "rgba(74,155,111,0.1)"
  },
  "sidelined": {
    label: "SIDELINED",
    color: "#d4a843",
    bg: "rgba(212,168,67,0.1)"
  },
  "deceased": {
    label: "DECEASED",
    color: "#666",
    bg: "rgba(100,100,100,0.1)"
  },
  "imprisoned": {
    label: "IMPRISONED",
    color: "#c97b7b",
    bg: "rgba(201,123,123,0.1)"
  },
  "unknown": {
    label: "UNKNOWN",
    color: "#555",
    bg: "rgba(80,80,80,0.1)"
  }
};
function PeopleTab({
  story,
  storyColor
}) {
  const people = story.people || [];
  if (!people.length) return /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#333",
      fontSize: 13,
      fontFamily: "monospace",
      paddingTop: 8
    }
  }, "NO PEOPLE DATA FOR THIS STORY");
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: "#7ba7d4",
      letterSpacing: "0.2em",
      fontFamily: "monospace",
      marginBottom: 14,
      fontWeight: 700
    }
  }, "\u25C8 KEY PLAYERS"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, people.map((p, i) => {
    const ss = STATUS_STYLE[p.status] || STATUS_STYLE["unknown"];
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        background: "rgba(255,255,255,0.02)",
        border: "1px solid rgba(255,255,255,0.06)",
        borderLeft: `2px solid ${storyColor}55`,
        borderRadius: 2,
        padding: "12px 14px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        gap: 12,
        marginBottom: 6,
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 14,
        color: "#dde0e8",
        fontWeight: 700
      }
    }, p.name), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        color: "#484848",
        marginLeft: 10
      }
    }, p.role)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 6,
        flexShrink: 0,
        flexWrap: "wrap",
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 9,
        color: "#555",
        fontFamily: "monospace",
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.07)",
        padding: "2px 7px",
        borderRadius: 2
      }
    }, p.alignment), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 4,
        background: ss.bg,
        border: `1px solid ${ss.color}33`,
        padding: "2px 7px",
        borderRadius: 2
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 5,
        height: 5,
        borderRadius: "50%",
        background: ss.color
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 9,
        color: ss.color,
        letterSpacing: "0.12em",
        fontFamily: "monospace"
      }
    }, ss.label)))), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: "#848ea0",
        lineHeight: 1.7
      }
    }, p.why));
  })));
}
function ConnectionsTab({
  story,
  navigate
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: "#7ba7d4",
      letterSpacing: "0.2em",
      fontFamily: "monospace",
      marginBottom: 14,
      fontWeight: 700
    }
  }, "\u2B21 SYSTEM CONNECTIONS"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "#484848",
      marginBottom: 16,
      lineHeight: 1.65
    }
  }, "How this story feeds into and depends on others. The world is a system \u2014 pull the thread."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, (story.connections || []).map((conn, i) => {
    const linked = STORIES.find(s => s.code === conn.code);
    const st = linked ? STATUS[linked.status] : null;
    const cc = linked ? CATCOLOR[linked.cat] : "#555";
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        background: "rgba(255,255,255,0.02)",
        border: "1px solid rgba(255,255,255,0.06)",
        borderLeft: `2px solid ${cc}55`,
        borderRadius: 2,
        padding: "12px 14px",
        cursor: linked ? "pointer" : "default",
        transition: "background 0.15s"
      },
      onClick: () => linked && navigate(linked.code),
      onMouseEnter: e => {
        if (linked) e.currentTarget.style.background = "rgba(255,255,255,0.04)";
      },
      onMouseLeave: e => {
        if (linked) e.currentTarget.style.background = "rgba(255,255,255,0.02)";
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 6,
        gap: 8,
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 9,
        color: cc,
        fontFamily: "monospace",
        fontWeight: 700,
        letterSpacing: "0.1em"
      }
    }, conn.code), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        color: "#c0c8d8",
        fontWeight: 700
      }
    }, conn.label)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8
      }
    }, st && /*#__PURE__*/React.createElement(Badge, {
      status: linked.status
    }), linked && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 9,
        color: "#3a3a3a",
        fontFamily: "monospace",
        letterSpacing: "0.1em"
      }
    }, "\u2192 VIEW"))), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: "#848ea0",
        lineHeight: 1.75
      }
    }, conn.how));
  })));
}
function CanadaTab({
  story
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16
    }
  }, "\uD83C\uDF41"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: "#c97b5a",
      letterSpacing: "0.2em",
      fontFamily: "monospace",
      fontWeight: 700
    }
  }, "CANADA LENS")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: "#9aa0b0",
      lineHeight: 1.85,
      background: "rgba(255,255,255,0.02)",
      border: "1px solid rgba(255,255,255,0.05)",
      borderLeft: "2px solid #c97b5a44",
      borderRadius: 2,
      padding: "14px 16px"
    }
  }, story.canada || "No specific Canada dimension identified for this story."));
}

// ============================================================
// CROSS-STORY ALERTS
// ============================================================
const ALERT_SEVERITY = {
  critical: {
    color: "#c94040",
    bg: "rgba(201,64,64,0.07)",
    border: "rgba(201,64,64,0.25)"
  },
  high: {
    color: "#e07b39",
    bg: "rgba(224,123,57,0.07)",
    border: "rgba(224,123,57,0.25)"
  },
  medium: {
    color: "#d4a843",
    bg: "rgba(212,168,67,0.07)",
    border: "rgba(212,168,67,0.25)"
  }
};
function CrossStoryAlerts() {
  const alerts = OVERVIEW.cross_story_alerts || [];
  if (!alerts.length) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: "#c94040",
      letterSpacing: "0.2em",
      fontFamily: "monospace",
      fontWeight: 700,
      marginBottom: 12
    }
  }, "\u2B21 CROSS-STORY ALERTS"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, alerts.map((a, i) => {
    const sev = ALERT_SEVERITY[a.severity] || ALERT_SEVERITY.medium;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        background: sev.bg,
        border: `1px solid ${sev.border}`,
        borderLeft: `3px solid ${sev.color}`,
        borderRadius: 2,
        padding: "12px 14px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        marginBottom: 8,
        gap: 8,
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: "#dde0e8",
        fontWeight: 700
      }
    }, a.title), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 6,
        alignItems: "center",
        flexShrink: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 4
      }
    }, a.codes.map(c => /*#__PURE__*/React.createElement("span", {
      key: c,
      style: {
        fontSize: 8,
        color: sev.color,
        fontFamily: "monospace",
        background: `${sev.color}18`,
        border: `1px solid ${sev.color}33`,
        padding: "1px 6px",
        borderRadius: 2
      }
    }, c))), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 9,
        color: "#383838",
        fontFamily: "monospace"
      }
    }, a.date))), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: "#9aa0b0",
        lineHeight: 1.7
      }
    }, a.alert));
  })));
}

// ============================================================
// IMPLICATIONS & RISKS TAB
// ============================================================
function ImplicationsRisksTab({
  story,
  color
}) {
  const implications = story.implications || [];
  const risks = story.risks || [];
  const empty = !implications.length && !risks.length;
  if (empty) return /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#2a2a2a",
      fontSize: 12,
      fontFamily: "monospace",
      paddingTop: 8
    }
  }, "IMPLICATIONS AND RISKS NOT YET POPULATED \u2014 WILL BE ADDED BY AUTOMATED UPDATE SYSTEM");
  return /*#__PURE__*/React.createElement("div", null, implications.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: "#7ba7d4",
      letterSpacing: "0.2em",
      fontFamily: "monospace",
      fontWeight: 700,
      marginBottom: 10
    }
  }, "\u2192 IMPLICATIONS"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 4
    }
  }, implications.map((item, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      gap: 10,
      padding: "9px 12px",
      background: "rgba(123,167,212,0.04)",
      border: "1px solid rgba(123,167,212,0.1)",
      borderLeft: "2px solid #7ba7d440",
      borderRadius: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#7ba7d4",
      fontSize: 9,
      marginTop: 4,
      flexShrink: 0
    }
  }, "\u2192"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: "#9aa0b0",
      lineHeight: 1.65
    }
  }, item))))), risks.length > 0 && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: "#c94040",
      letterSpacing: "0.2em",
      fontFamily: "monospace",
      fontWeight: 700,
      marginBottom: 10
    }
  }, "\u26A0 RISKS"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 4
    }
  }, risks.map((item, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      gap: 10,
      padding: "9px 12px",
      background: "rgba(201,64,64,0.04)",
      border: "1px solid rgba(201,64,64,0.1)",
      borderLeft: "2px solid #c9404040",
      borderRadius: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#c94040",
      fontSize: 9,
      marginTop: 4,
      flexShrink: 0
    }
  }, "\u26A0"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: "#9aa0b0",
      lineHeight: 1.65
    }
  }, item))))));
}

// ============================================================
// EVENT LOG
// ============================================================
const EVENT_TYPE_STYLE = {
  NEW_FACT: {
    color: "#4a9b6f",
    icon: "✓",
    label: "NEW FACT"
  },
  STATUS_CHANGE: {
    color: "#e07b39",
    icon: "◈",
    label: "STATUS CHANGE"
  },
  HEAT_CHANGE: {
    color: "#d4a843",
    icon: "▲",
    label: "HEAT CHANGE"
  },
  RETIREMENT: {
    color: "#666",
    icon: "◌",
    label: "RETIRED"
  },
  NEW_STORY: {
    color: "#7ba7d4",
    icon: "+",
    label: "NEW STORY"
  },
  ALERT: {
    color: "#c94040",
    icon: "⚡",
    label: "ALERT"
  },
  STATUS_UPDATE: {
    color: "#9b6fb0",
    icon: "◈",
    label: "UPDATE"
  }
};
function EventLog() {
  const [filter, setFilter] = useState("ALL");
  const types = ["ALL", ...Object.keys(EVENT_TYPE_STYLE)];
  const filtered = filter === "ALL" ? EVENTS : EVENTS.filter(e => e.type === filter);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: "auto",
      padding: "20px 24px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 16,
      flexWrap: "wrap",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: "#7ba7d4",
      letterSpacing: "0.2em",
      fontFamily: "monospace",
      fontWeight: 700
    }
  }, "\u25C8 EVENT LOG \u2014 ", filtered.length, " EVENTS"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 4,
      flexWrap: "wrap"
    }
  }, types.map(t => {
    const s = EVENT_TYPE_STYLE[t];
    const active = filter === t;
    return /*#__PURE__*/React.createElement("button", {
      key: t,
      onClick: () => setFilter(t),
      style: {
        background: active ? s ? `${s.color}18` : "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.03)",
        border: `1px solid ${active ? s ? `${s.color}44` : "rgba(255,255,255,0.2)" : "rgba(255,255,255,0.07)"}`,
        color: active ? s ? s.color : "#c0c8d8" : "#555",
        padding: "3px 8px",
        borderRadius: 2,
        fontSize: 8,
        cursor: "pointer",
        fontFamily: "monospace",
        letterSpacing: "0.08em"
      }
    }, s ? s.label : "ALL");
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 4
    }
  }, filtered.map((e, i) => {
    const ts = EVENT_TYPE_STYLE[e.type] || EVENT_TYPE_STYLE.STATUS_UPDATE;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: "flex",
        gap: 12,
        padding: "10px 14px",
        background: "rgba(255,255,255,0.015)",
        border: "1px solid rgba(255,255,255,0.04)",
        borderLeft: `2px solid ${ts.color}55`,
        borderRadius: 2
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flexShrink: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 4,
        paddingTop: 2
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 10,
        color: ts.color
      }
    }, ts.icon)), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 8,
        marginBottom: 4,
        flexWrap: "wrap",
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 9,
        color: ts.color,
        fontFamily: "monospace",
        letterSpacing: "0.1em",
        background: `${ts.color}15`,
        border: `1px solid ${ts.color}33`,
        padding: "1px 6px",
        borderRadius: 2
      }
    }, ts.label), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 9,
        color: "#555",
        fontFamily: "monospace",
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.07)",
        padding: "1px 6px",
        borderRadius: 2
      }
    }, e.code), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 9,
        color: "#383838",
        fontFamily: "monospace"
      }
    }, e.date)), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: "#9aa0b0",
        lineHeight: 1.65
      }
    }, e.content)));
  })), filtered.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#2a2a2a",
      fontSize: 11,
      fontFamily: "monospace",
      textAlign: "center",
      paddingTop: 30
    }
  }, "NO EVENTS MATCH FILTER"));
}
function OverviewPanel() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: "auto",
      padding: "20px 24px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: "#7ba7d4",
      letterSpacing: "0.2em",
      fontFamily: "monospace",
      fontWeight: 700,
      marginBottom: 12
    }
  }, "\u25C8 SITUATION SUMMARY"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "#848ea0",
      lineHeight: 1.85,
      background: "rgba(255,255,255,0.02)",
      border: "1px solid rgba(255,255,255,0.05)",
      borderLeft: "2px solid #7ba7d444",
      borderRadius: 2,
      padding: "14px 16px"
    }
  }, OVERVIEW.summary)), /*#__PURE__*/React.createElement(CrossStoryAlerts, null), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: "#e07b39",
      letterSpacing: "0.2em",
      fontFamily: "monospace",
      fontWeight: 700,
      marginBottom: 12
    }
  }, "\u25C8 LEADERBOARD \u2014 MOST SIGNIFICANT CHANGES"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6
    }
  }, OVERVIEW.leaderboard.map((item, i) => {
    const st = STATUS[item.status];
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: "flex",
        gap: 12,
        padding: "10px 14px",
        background: "rgba(255,255,255,0.018)",
        border: "1px solid rgba(255,255,255,0.04)",
        borderLeft: `2px solid ${st.color}55`,
        borderRadius: 2,
        alignItems: "flex-start"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: "#333",
        fontFamily: "monospace",
        fontWeight: 700,
        flexShrink: 0,
        paddingTop: 2,
        minWidth: 20
      }
    }, "#", i + 1), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 4,
        gap: 8,
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        color: "#c0c8d8",
        fontWeight: 700
      }
    }, item.title), /*#__PURE__*/React.createElement(Badge, {
      status: item.status
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 9,
        color: "#444",
        fontFamily: "monospace",
        marginBottom: 4,
        letterSpacing: "0.08em"
      }
    }, item.code), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: "#606878",
        lineHeight: 1.6
      }
    }, item.change)), /*#__PURE__*/React.createElement(Heat, {
      n: item.heat
    }));
  }))));
}

// ============================================================
// WAR WATCH TOLL TAB
// ============================================================
function TollTab({
  story
}) {
  const t = story.toll;
  if (!t) return /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#333",
      fontSize: 13,
      fontFamily: "monospace"
    }
  }, "NO TOLL DATA");
  const stats = [{
    label: "Confirmed Dead",
    value: t.confirmed_dead,
    color: "#c94040"
  }, {
    label: "Confirmed Wounded",
    value: t.confirmed_wounded,
    color: "#e07b39"
  }, {
    label: "Children Killed",
    value: t.children_killed,
    color: "#c94040"
  }, {
    label: "Displaced",
    value: t.displaced,
    color: "#d4a843"
  }, ...(t.us_kia ? [{
    label: "US KIA",
    value: t.us_kia,
    color: "#7ba7d4"
  }] : []), ...(t.israeli_kia ? [{
    label: "Israeli KIA",
    value: t.israeli_kia,
    color: "#7ba7d4"
  }] : [])];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: "#c94040",
      letterSpacing: "0.2em",
      fontFamily: "monospace",
      marginBottom: 16,
      fontWeight: 700
    }
  }, "\u2694 HUMAN TOLL"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 8,
      marginBottom: 16
    }
  }, stats.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      background: "rgba(255,255,255,0.02)",
      border: `1px solid ${s.color}22`,
      borderLeft: `2px solid ${s.color}`,
      borderRadius: 2,
      padding: "12px 14px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 9,
      color: "#484848",
      fontFamily: "monospace",
      letterSpacing: "0.1em",
      marginBottom: 6
    }
  }, s.label.toUpperCase()), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 20,
      color: s.color,
      fontWeight: 700,
      fontFamily: "monospace"
    }
  }, s.value)))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "rgba(255,255,255,0.015)",
      border: "1px solid rgba(255,255,255,0.06)",
      borderRadius: 2,
      padding: "12px 14px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 9,
      color: "#484848",
      fontFamily: "monospace",
      letterSpacing: "0.1em",
      marginBottom: 6
    }
  }, "DATA NOTE"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "#606878",
      lineHeight: 1.7
    }
  }, t.note)));
}

// ============================================================
// WAR WATCH FRONT TAB
// ============================================================
function FrontTab({
  story
}) {
  const f = story.front;
  if (!f) return /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#333",
      fontSize: 13,
      fontFamily: "monospace"
    }
  }, "NO FRONT DATA");
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: "#a03030",
      letterSpacing: "0.2em",
      fontFamily: "monospace",
      marginBottom: 14,
      fontWeight: 700
    }
  }, "\u2694 BATTLEFIELD SITUATION"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "#848ea0",
      lineHeight: 1.8,
      background: "rgba(160,48,48,0.05)",
      border: "1px solid rgba(160,48,48,0.15)",
      borderLeft: "2px solid #a03030",
      borderRadius: 2,
      padding: "12px 14px",
      marginBottom: 18
    }
  }, f.summary), f.active_fronts && f.active_fronts.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 9,
      color: "#c94040",
      letterSpacing: "0.18em",
      fontFamily: "monospace",
      fontWeight: 700,
      marginBottom: 10
    }
  }, "ACTIVE FRONTS"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 4
    }
  }, f.active_fronts.map((front, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      gap: 10,
      padding: "9px 12px",
      background: "rgba(255,255,255,0.015)",
      border: "1px solid rgba(255,255,255,0.04)",
      borderLeft: "2px solid #c9404040",
      borderRadius: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#c94040",
      fontSize: 9,
      marginTop: 4,
      flexShrink: 0
    }
  }, "\u25B8"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: "#9aa0b0",
      lineHeight: 1.6
    }
  }, front))))), f.recent_movements && f.recent_movements.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 9,
      color: "#d4a843",
      letterSpacing: "0.18em",
      fontFamily: "monospace",
      fontWeight: 700,
      marginBottom: 10
    }
  }, "RECENT MOVEMENTS"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 4
    }
  }, f.recent_movements.map((m, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      gap: 10,
      padding: "9px 12px",
      background: "rgba(255,255,255,0.015)",
      border: "1px solid rgba(255,255,255,0.04)",
      borderLeft: "2px solid #d4a84340",
      borderRadius: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#d4a843",
      fontSize: 9,
      marginTop: 4,
      flexShrink: 0
    }
  }, "\u25CC"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: "#9aa0b0",
      lineHeight: 1.6
    }
  }, m))))), f.assessment && /*#__PURE__*/React.createElement("div", {
    style: {
      background: "rgba(160,48,48,0.04)",
      border: "1px solid rgba(160,48,48,0.12)",
      borderRadius: 2,
      padding: "12px 14px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 9,
      color: "#a03030",
      fontFamily: "monospace",
      letterSpacing: "0.1em",
      marginBottom: 6
    }
  }, "ASSESSMENT"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "#848ea0",
      lineHeight: 1.75
    }
  }, f.assessment)));
}

// ============================================================
// WAR WATCH PANEL
// ============================================================
function WarWatchPanel({
  navTarget,
  clearNav
}) {
  const warStories = STORIES.filter(s => s.tab === "war");
  const [activeStory, setActiveStory] = useState("W01");
  const [tab, setTab] = useState("front");
  const mainRef = React.useRef(null);
  const story = warStories.find(s => s.id === activeStory);
  const st = STATUS[story.status];
  const WAR_TABS = [{
    id: "front",
    label: "⚔ FRONT"
  }, {
    id: "toll",
    label: "☠ TOLL"
  }, {
    id: "insights",
    label: "INSIGHTS"
  }, {
    id: "confirmed",
    label: "CONFIRMED"
  }, {
    id: "developing",
    label: "DEVELOPING"
  }, {
    id: "questions",
    label: "QUESTIONS"
  }, {
    id: "people",
    label: "◈ PEOPLE"
  }, {
    id: "background",
    label: "BACKGROUND"
  }];
  React.useEffect(() => {
    if (navTarget && navTarget.tab === "war") {
      selectStory(navTarget.id);
      clearNav();
    }
  }, [navTarget]);
  const selectStory = id => {
    setActiveStory(id);
    setTab("front");
    if (mainRef.current && window.innerWidth <= 700) {
      setTimeout(() => {
        const el = mainRef.current;
        const top = el.getBoundingClientRect().top + window.scrollY - 56;
        window.scrollTo({
          top,
          behavior: "smooth"
        });
      }, 60);
    }
  };

  // War toll summary for sidebar
  const activeWarCount = warStories.filter(s => s.status === "active-war").length;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flex: 1,
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "10px 16px",
      borderBottom: "1px solid rgba(255,255,255,0.055)",
      background: "rgba(160,48,48,0.06)",
      flexShrink: 0,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 9,
      color: "#a03030",
      letterSpacing: "0.2em",
      fontFamily: "monospace",
      marginBottom: 2
    }
  }, "\u2694 WAR WATCH"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "#606878"
    }
  }, warStories.length, " conflicts tracked \xB7 ", activeWarCount, " active wars")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6,
      background: "rgba(201,64,64,0.1)",
      border: "1px solid rgba(201,64,64,0.3)",
      padding: "4px 10px",
      borderRadius: 2
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 6,
      height: 6,
      borderRadius: "50%",
      background: "#c94040",
      animation: "pulse 1.4s infinite"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 9,
      color: "#c94040",
      fontFamily: "monospace",
      letterSpacing: "0.12em",
      fontWeight: 700
    }
  }, activeWarCount, " ACTIVE WARS"))), /*#__PURE__*/React.createElement("div", {
    className: "war-watch-body",
    style: {
      display: "flex",
      flex: 1,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "war-watch-sidebar",
    style: {
      width: 240,
      flexShrink: 0,
      borderRight: "1px solid rgba(255,255,255,0.055)",
      overflowY: "auto",
      padding: "10px 8px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 9,
      color: "#a03030",
      letterSpacing: "0.2em",
      fontFamily: "monospace",
      fontWeight: 700,
      marginBottom: 8,
      paddingLeft: 3
    }
  }, "ACTIVE CONFLICTS"), warStories.map(s => {
    const sc = STATUS[s.status].color;
    const isActive = activeStory === s.id;
    return /*#__PURE__*/React.createElement("div", {
      key: s.id,
      onClick: () => selectStory(s.id),
      style: {
        background: isActive ? "rgba(255,255,255,0.055)" : "rgba(255,255,255,0.015)",
        border: `1px solid ${isActive ? "rgba(255,255,255,0.14)" : "rgba(255,255,255,0.05)"}`,
        borderLeft: `2px solid ${isActive ? sc : "rgba(160,48,48,0.25)"}`,
        borderRadius: 2,
        padding: "10px 12px",
        cursor: "pointer",
        transition: "all 0.15s",
        marginBottom: 5
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 4
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 9,
        color: "#555",
        fontFamily: "monospace",
        letterSpacing: "0.1em",
        fontWeight: 600
      }
    }, s.code), /*#__PURE__*/React.createElement(Heat, {
      n: s.heat
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: isActive ? "#fff" : "#c0c8d8",
        fontWeight: 700,
        marginBottom: 3,
        lineHeight: 1.3
      }
    }, s.title), s.toll && /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 8,
        marginBottom: 6,
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 9,
        color: "#c94040",
        fontFamily: "monospace"
      }
    }, "\u2620 ", s.toll.confirmed_dead), s.toll.displaced && /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 9,
        color: "#d4a843",
        fontFamily: "monospace"
      }
    }, "\u2B21 ", s.toll.displaced, " disp.")), /*#__PURE__*/React.createElement(Badge, {
      status: s.status
    }));
  })), /*#__PURE__*/React.createElement("div", {
    className: "war-watch-main",
    ref: mainRef,
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "14px 18px 0",
      borderBottom: "1px solid rgba(255,255,255,0.055)",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 9,
      color: "#3a3a3a",
      letterSpacing: "0.18em",
      fontFamily: "monospace",
      marginBottom: 4
    }
  }, story.code, " \xB7 WAR WATCH"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 18,
      color: "#dde0e8",
      fontWeight: 700,
      letterSpacing: "-0.02em",
      marginBottom: 2,
      lineHeight: 1.2
    }
  }, story.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "#484848"
    }
  }, story.sub)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-end",
      gap: 5,
      paddingTop: 2,
      flexShrink: 0,
      marginLeft: 10
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    status: story.status
  }), /*#__PURE__*/React.createElement(Heat, {
    n: story.heat
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 9,
      color: "#303030",
      fontFamily: "monospace"
    }
  }, "UPD ", story.updated))), story.toll && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      background: "rgba(201,64,64,0.06)",
      border: "1px solid rgba(201,64,64,0.15)",
      borderRadius: 2,
      padding: "8px 12px",
      marginBottom: 10,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 9,
      color: "#c94040",
      fontFamily: "monospace",
      letterSpacing: "0.1em"
    }
  }, "\u2620 DEAD"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: "#c94040",
      fontWeight: 700,
      fontFamily: "monospace"
    }
  }, story.toll.confirmed_dead)), story.toll.children_killed && story.toll.children_killed !== "Unknown" && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 9,
      color: "#c97b7b",
      fontFamily: "monospace",
      letterSpacing: "0.1em"
    }
  }, "CHILDREN"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: "#c97b7b",
      fontWeight: 700,
      fontFamily: "monospace"
    }
  }, story.toll.children_killed)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 9,
      color: "#d4a843",
      fontFamily: "monospace",
      letterSpacing: "0.1em"
    }
  }, "DISPLACED"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: "#d4a843",
      fontWeight: 700,
      fontFamily: "monospace"
    }
  }, story.toll.displaced))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "rgba(255,255,255,0.02)",
      border: "1px solid rgba(255,255,255,0.055)",
      borderLeft: `2px solid ${st.color}44`,
      padding: "8px 12px",
      marginBottom: 10,
      borderRadius: 2
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 9,
      color: "#383838",
      letterSpacing: "0.18em",
      fontFamily: "monospace",
      fontWeight: 700,
      marginBottom: 4
    }
  }, "SUMMARY"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "#848ea0",
      lineHeight: 1.65
    }
  }, story.card)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      overflowX: "auto",
      WebkitOverflowScrolling: "touch",
      scrollbarWidth: "none",
      msOverflowStyle: "none",
      flexShrink: 0
    }
  }, WAR_TABS.map(t => /*#__PURE__*/React.createElement("button", {
    key: t.id,
    onClick: () => setTab(t.id),
    style: {
      background: "none",
      border: "none",
      borderBottom: `2px solid ${tab === t.id ? "#a03030" : "transparent"}`,
      color: tab === t.id ? "#d8dbe8" : "#3c3c3c",
      padding: "6px 8px",
      fontSize: 9,
      letterSpacing: "0.08em",
      fontFamily: "monospace",
      cursor: "pointer",
      transition: "color 0.15s",
      whiteSpace: "nowrap"
    }
  }, t.label)))), /*#__PURE__*/React.createElement("div", {
    className: "war-watch-content",
    style: {
      flex: 1,
      overflowY: "auto",
      padding: "16px 18px",
      animation: "fadeUp 0.18s ease"
    }
  }, tab === "front" && /*#__PURE__*/React.createElement(FrontTab, {
    story: story
  }), tab === "toll" && /*#__PURE__*/React.createElement(TollTab, {
    story: story
  }), tab === "insights" && /*#__PURE__*/React.createElement(Items, {
    list: story.insights,
    color: "#a03030",
    icon: "\u25C8"
  }), tab === "confirmed" && /*#__PURE__*/React.createElement(Items, {
    list: story.confirmed,
    color: "#4a9b6f",
    icon: "\u2713"
  }), tab === "developing" && /*#__PURE__*/React.createElement(Items, {
    list: story.developing,
    color: "#d4a843",
    icon: "\u25CC"
  }), tab === "questions" && /*#__PURE__*/React.createElement(Items, {
    list: story.questions,
    color: "#9b6fb0",
    icon: "?"
  }), tab === "people" && /*#__PURE__*/React.createElement(PeopleTab, {
    story: story,
    storyColor: "#a03030"
  }), tab === "background" && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: "#444",
      letterSpacing: "0.2em",
      fontFamily: "monospace",
      marginBottom: 12,
      fontWeight: 700
    }
  }, "\u25C8 BACKGROUND & CONTEXT"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "#848ea0",
      lineHeight: 1.8
    }
  }, story.bg || story.card + " " + (story.confirmed && story.confirmed[0] || "")))))));
}

// ============================================================
// CANADA WATCH DATA
// ============================================================

const CANADA_COLOR = "#c97b5a";

// ============================================================
// CANADA WATCH PANEL
// ============================================================
function CanadaWatchPanel({
  navTarget,
  clearNav
}) {
  const canadaStories = STORIES.filter(s => s.tab === "canada");
  const [activeStory, setActiveStory] = useState("C01");
  const [tab, setTab] = useState("insights");
  const mainRef = React.useRef(null);
  const story = canadaStories.find(s => s.id === activeStory);
  const st = STATUS[story.status];
  const CA_TABS = [{
    id: "insights",
    label: "INSIGHTS"
  }, {
    id: "confirmed",
    label: "CONFIRMED"
  }, {
    id: "developing",
    label: "DEVELOPING"
  }, {
    id: "questions",
    label: "QUESTIONS"
  }, {
    id: "people",
    label: "◈ PEOPLE"
  }, {
    id: "background",
    label: "BACKGROUND"
  }];
  React.useEffect(() => {
    if (navTarget && navTarget.tab === "canada") {
      selectStory(navTarget.id);
      clearNav();
    }
  }, [navTarget]);
  const selectStory = id => {
    setActiveStory(id);
    setTab("insights");
    if (mainRef.current && window.innerWidth <= 700) {
      setTimeout(() => {
        const el = mainRef.current;
        const top = el.getBoundingClientRect().top + window.scrollY - 56;
        window.scrollTo({
          top,
          behavior: "smooth"
        });
      }, 60);
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flex: 1,
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "10px 16px",
      borderBottom: "1px solid rgba(255,255,255,0.055)",
      background: "rgba(201,123,90,0.05)",
      flexShrink: 0,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 9,
      color: CANADA_COLOR,
      letterSpacing: "0.2em",
      fontFamily: "monospace",
      marginBottom: 2
    }
  }, "\uD83C\uDF41 CANADA WATCH"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "#606878"
    }
  }, canadaStories.length, " stories \xB7 domestic & foreign")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 9,
      color: "#383838",
      fontFamily: "monospace",
      letterSpacing: "0.1em"
    }
  }, "APR 2026")), /*#__PURE__*/React.createElement("div", {
    className: "canada-watch-body",
    style: {
      display: "flex",
      flex: 1,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "canada-watch-sidebar",
    style: {
      width: 240,
      flexShrink: 0,
      borderRight: "1px solid rgba(255,255,255,0.055)",
      overflowY: "auto",
      padding: "10px 8px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 9,
      color: CANADA_COLOR,
      letterSpacing: "0.2em",
      fontFamily: "monospace",
      fontWeight: 700,
      marginBottom: 10,
      paddingLeft: 3
    }
  }, "STORIES"), canadaStories.map(s => {
    const sc = STATUS[s.status].color;
    const isActive = activeStory === s.id;
    return /*#__PURE__*/React.createElement("div", {
      key: s.id,
      onClick: () => selectStory(s.id),
      style: {
        background: isActive ? "rgba(255,255,255,0.055)" : "rgba(255,255,255,0.015)",
        border: `1px solid ${isActive ? "rgba(255,255,255,0.14)" : "rgba(255,255,255,0.05)"}`,
        borderLeft: `2px solid ${isActive ? CANADA_COLOR : CANADA_COLOR + "33"}`,
        borderRadius: 2,
        padding: "10px 12px",
        cursor: "pointer",
        transition: "all 0.15s",
        marginBottom: 5
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 4
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 9,
        color: "#555",
        fontFamily: "monospace",
        letterSpacing: "0.1em",
        fontWeight: 600
      }
    }, s.code), /*#__PURE__*/React.createElement(Heat, {
      n: s.heat
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: isActive ? "#fff" : "#c0c8d8",
        fontWeight: 700,
        marginBottom: 4,
        lineHeight: 1.3
      }
    }, s.title), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 10,
        color: "#505868",
        lineHeight: 1.5,
        marginBottom: 6
      }
    }, s.card.substring(0, 90), "..."), /*#__PURE__*/React.createElement(Badge, {
      status: s.status
    }));
  })), /*#__PURE__*/React.createElement("div", {
    className: "canada-watch-main",
    ref: mainRef,
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "14px 18px 0",
      borderBottom: "1px solid rgba(255,255,255,0.055)",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 9,
      color: "#3a3a3a",
      letterSpacing: "0.18em",
      fontFamily: "monospace",
      marginBottom: 4
    }
  }, story.code, " \xB7 \uD83C\uDF41 CANADA WATCH"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 18,
      color: "#dde0e8",
      fontWeight: 700,
      letterSpacing: "-0.02em",
      marginBottom: 2,
      lineHeight: 1.2
    }
  }, story.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "#484848"
    }
  }, story.sub)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-end",
      gap: 5,
      paddingTop: 2,
      flexShrink: 0,
      marginLeft: 10
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    status: story.status
  }), /*#__PURE__*/React.createElement(Heat, {
    n: story.heat
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 9,
      color: "#303030",
      fontFamily: "monospace"
    }
  }, "UPD ", story.updated))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "rgba(255,255,255,0.02)",
      border: "1px solid rgba(255,255,255,0.055)",
      borderLeft: `2px solid ${CANADA_COLOR}44`,
      padding: "8px 12px",
      marginBottom: 10,
      borderRadius: 2
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 9,
      color: "#383838",
      letterSpacing: "0.18em",
      fontFamily: "monospace",
      fontWeight: 700,
      marginBottom: 4
    }
  }, "SUMMARY"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "#848ea0",
      lineHeight: 1.65
    }
  }, story.summary)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      overflowX: "auto",
      WebkitOverflowScrolling: "touch",
      scrollbarWidth: "none",
      msOverflowStyle: "none",
      flexShrink: 0
    }
  }, CA_TABS.map(t => /*#__PURE__*/React.createElement("button", {
    key: t.id,
    onClick: () => setTab(t.id),
    style: {
      background: "none",
      border: "none",
      borderBottom: `2px solid ${tab === t.id ? CANADA_COLOR : "transparent"}`,
      color: tab === t.id ? "#d8dbe8" : "#3c3c3c",
      padding: "6px 8px",
      fontSize: 9,
      letterSpacing: "0.08em",
      fontFamily: "monospace",
      cursor: "pointer",
      transition: "color 0.15s",
      whiteSpace: "nowrap"
    }
  }, t.label)))), /*#__PURE__*/React.createElement("div", {
    className: "canada-watch-content",
    style: {
      flex: 1,
      overflowY: "auto",
      padding: "16px 18px",
      animation: "fadeUp 0.18s ease"
    }
  }, tab === "insights" && /*#__PURE__*/React.createElement(Items, {
    list: story.insights,
    color: CANADA_COLOR,
    icon: "\uD83C\uDF41"
  }), tab === "confirmed" && /*#__PURE__*/React.createElement(Items, {
    list: story.confirmed,
    color: "#4a9b6f",
    icon: "\u2713"
  }), tab === "developing" && /*#__PURE__*/React.createElement(Items, {
    list: story.developing,
    color: "#d4a843",
    icon: "\u25CC"
  }), tab === "questions" && /*#__PURE__*/React.createElement(Items, {
    list: story.questions,
    color: "#9b6fb0",
    icon: "?"
  }), tab === "people" && /*#__PURE__*/React.createElement(PeopleTab, {
    story: story,
    storyColor: CANADA_COLOR
  }), tab === "background" && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: "#444",
      letterSpacing: "0.2em",
      fontFamily: "monospace",
      marginBottom: 12,
      fontWeight: 700
    }
  }, "\u25C8 BACKGROUND & CONTEXT"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "#848ea0",
      lineHeight: 1.85,
      whiteSpace: "pre-line"
    }
  }, story.bg))))));
}

// ============================================================
// POWER & MONEY WATCH DATA
// ============================================================

const POWER_COLOR = "#9b6fb0";

// ============================================================
// SHARED GENERIC WATCH PANEL
// Used for Power & Money and Climate & Energy
// ============================================================

function GenericWatchPanel({
  stories,
  color,
  headerLabel,
  headerSub,
  defaultStory,
  showScience,
  navTarget,
  clearNav,
  tabId
}) {
  const [activeStory, setActiveStory] = useState(defaultStory);
  const [tab, setTab] = useState("insights");
  const mainRef = React.useRef(null);
  const story = stories.find(s => s.id === activeStory);
  const st = STATUS[story.status];
  const baseTabs = [{
    id: "insights",
    label: "INSIGHTS"
  }, {
    id: "confirmed",
    label: "CONFIRMED"
  }, {
    id: "developing",
    label: "DEVELOPING"
  }, {
    id: "questions",
    label: "QUESTIONS"
  }, {
    id: "people",
    label: "◈ PEOPLE"
  }, {
    id: "background",
    label: "BACKGROUND"
  }];
  const TABS = showScience && story.science ? [baseTabs[0], baseTabs[1], baseTabs[2], baseTabs[3], baseTabs[4], {
    id: "science",
    label: "🔬 SCIENCE"
  }, baseTabs[5]] : baseTabs;
  React.useEffect(() => {
    if (navTarget && tabId && navTarget.tab === tabId) {
      selectStory(navTarget.id);
      clearNav();
    }
  }, [navTarget]);
  const selectStory = id => {
    setActiveStory(id);
    setTab("insights");
    if (mainRef.current && window.innerWidth <= 700) {
      setTimeout(() => {
        const el = mainRef.current;
        const top = el.getBoundingClientRect().top + window.scrollY - 56;
        window.scrollTo({
          top,
          behavior: "smooth"
        });
      }, 60);
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flex: 1,
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "10px 16px",
      borderBottom: "1px solid rgba(255,255,255,0.055)",
      background: "rgba(255,255,255,0.02)",
      flexShrink: 0,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 9,
      color,
      letterSpacing: "0.2em",
      fontFamily: "monospace",
      marginBottom: 2
    }
  }, headerLabel), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "#606878"
    }
  }, headerSub)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 9,
      color: "#383838",
      fontFamily: "monospace",
      letterSpacing: "0.1em"
    }
  }, "APR 2026")), /*#__PURE__*/React.createElement("div", {
    className: "generic-watch-body",
    style: {
      display: "flex",
      flex: 1,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "generic-watch-sidebar",
    style: {
      width: 240,
      flexShrink: 0,
      borderRight: "1px solid rgba(255,255,255,0.055)",
      overflowY: "auto",
      padding: "10px 8px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 9,
      color,
      letterSpacing: "0.2em",
      fontFamily: "monospace",
      fontWeight: 700,
      marginBottom: 10,
      paddingLeft: 3
    }
  }, "STORIES"), stories.map(s => {
    const isActive = activeStory === s.id;
    return /*#__PURE__*/React.createElement("div", {
      key: s.id,
      onClick: () => selectStory(s.id),
      style: {
        background: isActive ? "rgba(255,255,255,0.055)" : "rgba(255,255,255,0.015)",
        border: `1px solid ${isActive ? "rgba(255,255,255,0.14)" : "rgba(255,255,255,0.05)"}`,
        borderLeft: `2px solid ${isActive ? color : color + "33"}`,
        borderRadius: 2,
        padding: "10px 12px",
        cursor: "pointer",
        transition: "all 0.15s",
        marginBottom: 5
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 4
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 9,
        color: "#555",
        fontFamily: "monospace",
        letterSpacing: "0.1em",
        fontWeight: 600
      }
    }, s.code), /*#__PURE__*/React.createElement(Heat, {
      n: s.heat
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: isActive ? "#fff" : "#c0c8d8",
        fontWeight: 700,
        marginBottom: 4,
        lineHeight: 1.3
      }
    }, s.title), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 10,
        color: "#505868",
        lineHeight: 1.5,
        marginBottom: 6
      }
    }, s.card.substring(0, 90), "..."), /*#__PURE__*/React.createElement(Badge, {
      status: s.status
    }));
  })), /*#__PURE__*/React.createElement("div", {
    className: "generic-watch-main",
    ref: mainRef,
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "14px 18px 0",
      borderBottom: "1px solid rgba(255,255,255,0.055)",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 9,
      color: "#3a3a3a",
      letterSpacing: "0.18em",
      fontFamily: "monospace",
      marginBottom: 4
    }
  }, story.code, " \xB7 ", headerLabel), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 18,
      color: "#dde0e8",
      fontWeight: 700,
      letterSpacing: "-0.02em",
      marginBottom: 2,
      lineHeight: 1.2
    }
  }, story.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "#484848"
    }
  }, story.sub)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-end",
      gap: 5,
      paddingTop: 2,
      flexShrink: 0,
      marginLeft: 10
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    status: story.status
  }), /*#__PURE__*/React.createElement(Heat, {
    n: story.heat
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 9,
      color: "#303030",
      fontFamily: "monospace"
    }
  }, "UPD ", story.updated))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "rgba(255,255,255,0.02)",
      border: "1px solid rgba(255,255,255,0.055)",
      borderLeft: `2px solid ${color}44`,
      padding: "8px 12px",
      marginBottom: 10,
      borderRadius: 2
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 9,
      color: "#383838",
      letterSpacing: "0.18em",
      fontFamily: "monospace",
      fontWeight: 700,
      marginBottom: 4
    }
  }, "SUMMARY"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "#848ea0",
      lineHeight: 1.65
    }
  }, story.summary)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      overflowX: "auto",
      WebkitOverflowScrolling: "touch",
      scrollbarWidth: "none",
      msOverflowStyle: "none",
      flexShrink: 0
    }
  }, TABS.map(t => /*#__PURE__*/React.createElement("button", {
    key: t.id,
    onClick: () => setTab(t.id),
    style: {
      background: "none",
      border: "none",
      borderBottom: `2px solid ${tab === t.id ? color : "transparent"}`,
      color: tab === t.id ? "#d8dbe8" : "#3c3c3c",
      padding: "6px 8px",
      fontSize: 9,
      letterSpacing: "0.08em",
      fontFamily: "monospace",
      cursor: "pointer",
      transition: "color 0.15s",
      whiteSpace: "nowrap"
    }
  }, t.label)))), /*#__PURE__*/React.createElement("div", {
    className: "generic-watch-content",
    style: {
      flex: 1,
      overflowY: "auto",
      padding: "16px 18px",
      animation: "fadeUp 0.18s ease"
    }
  }, tab === "insights" && /*#__PURE__*/React.createElement(Items, {
    list: story.insights,
    color: color,
    icon: "\u25C8"
  }), tab === "confirmed" && /*#__PURE__*/React.createElement(Items, {
    list: story.confirmed,
    color: "#4a9b6f",
    icon: "\u2713"
  }), tab === "developing" && /*#__PURE__*/React.createElement(Items, {
    list: story.developing,
    color: "#d4a843",
    icon: "\u25CC"
  }), tab === "questions" && /*#__PURE__*/React.createElement(Items, {
    list: story.questions,
    color: "#9b6fb0",
    icon: "?"
  }), tab === "people" && /*#__PURE__*/React.createElement(PeopleTab, {
    story: story,
    storyColor: color
  }), tab === "science" && story.science && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: CLIMATE_COLOR,
      letterSpacing: "0.2em",
      fontFamily: "monospace",
      marginBottom: 14,
      fontWeight: 700
    }
  }, "\uD83D\uDD2C SCIENCE FINDINGS & DISCOVERIES"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6
    }
  }, story.science.map((finding, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      gap: 10,
      padding: "10px 14px",
      background: "rgba(74,155,111,0.04)",
      border: "1px solid rgba(74,155,111,0.12)",
      borderLeft: `2px solid ${CLIMATE_COLOR}`,
      borderRadius: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: CLIMATE_COLOR,
      fontSize: 10,
      marginTop: 3,
      flexShrink: 0
    }
  }, "\uD83D\uDD2C"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: "#9aa0b0",
      lineHeight: 1.7
    }
  }, finding))))), tab === "background" && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: "#444",
      letterSpacing: "0.2em",
      fontFamily: "monospace",
      marginBottom: 12,
      fontWeight: 700
    }
  }, "\u25C8 BACKGROUND & CONTEXT"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "#848ea0",
      lineHeight: 1.85,
      whiteSpace: "pre-line"
    }
  }, story.bg))))));
}
function AlertBadge({
  severity
}) {
  const colors = {
    critical: "#c94040",
    high: "#e07b39",
    medium: "#d4a843",
    low: "#6b8cba"
  };
  const bgs = {
    critical: "rgba(201,64,64,0.1)",
    high: "rgba(224,123,57,0.1)",
    medium: "rgba(212,168,67,0.1)",
    low: "rgba(107,140,186,0.1)"
  };
  const c = colors[severity] || "#555";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 5,
      background: bgs[severity] || "rgba(85,85,85,0.1)",
      border: `1px solid ${c}33`,
      padding: "2px 8px",
      borderRadius: 2
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 5,
      height: 5,
      borderRadius: "50%",
      background: c,
      animation: severity === "critical" ? "pulse 1.4s infinite" : "none"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 9,
      color: c,
      letterSpacing: "0.15em",
      fontFamily: "monospace"
    }
  }, severity.toUpperCase()));
}
function AlertsTab() {
  const active = AI_ALERTS.filter(a => !a.resolved);
  const resolved = AI_ALERTS.filter(a => a.resolved);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 8,
      height: 8,
      borderRadius: "50%",
      background: "#c94040",
      animation: "pulse 1.4s infinite"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: "#c94040",
      letterSpacing: "0.2em",
      fontFamily: "monospace",
      fontWeight: 700
    }
  }, active.length, " ACTIVE ALERT", active.length !== 1 ? "S" : "")), active.map(alert => /*#__PURE__*/React.createElement("div", {
    key: alert.id,
    style: {
      marginBottom: 12,
      background: "rgba(201,64,64,0.04)",
      border: "1px solid rgba(201,64,64,0.2)",
      borderLeft: "3px solid #c94040",
      borderRadius: 2,
      padding: "14px 16px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      marginBottom: 8,
      gap: 8,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "#dde0e8",
      fontWeight: 700
    }
  }, alert.title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(AlertBadge, {
    severity: alert.severity
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 9,
      color: "#383838",
      fontFamily: "monospace"
    }
  }, alert.date))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "#848ea0",
      lineHeight: 1.7,
      marginBottom: 10
    }
  }, alert.summary), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 9,
      color: "#e07b39",
      fontFamily: "monospace",
      letterSpacing: "0.1em",
      marginBottom: 4
    }
  }, "AFFECTED"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "#9aa0b0"
    }
  }, alert.affected)), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "rgba(74,155,111,0.06)",
      border: "1px solid rgba(74,155,111,0.2)",
      borderRadius: 2,
      padding: "10px 12px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 9,
      color: "#4a9b6f",
      fontFamily: "monospace",
      letterSpacing: "0.1em",
      marginBottom: 4
    }
  }, "\u26A1 WHAT TO DO"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "#9aa0b0",
      lineHeight: 1.65,
      fontFamily: "monospace"
    }
  }, alert.action)), alert.notAffected && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      fontSize: 11,
      color: "#3a4a3a"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#4a9b6f",
      fontFamily: "monospace",
      fontSize: 9,
      letterSpacing: "0.08em"
    }
  }, "NOT AFFECTED: "), alert.notAffected))), resolved.length > 0 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: "#3a3a3a",
      letterSpacing: "0.18em",
      fontFamily: "monospace",
      fontWeight: 700,
      margin: "20px 0 10px"
    }
  }, "\u25CC RESOLVED"), resolved.map(alert => /*#__PURE__*/React.createElement("div", {
    key: alert.id,
    style: {
      marginBottom: 8,
      background: "rgba(255,255,255,0.01)",
      border: "1px solid rgba(255,255,255,0.05)",
      borderLeft: "2px solid rgba(74,155,111,0.4)",
      borderRadius: 2,
      padding: "12px 14px",
      opacity: 0.6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: 8,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "#848ea0",
      fontWeight: 600
    }
  }, alert.title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 9,
      color: "#4a9b6f",
      fontFamily: "monospace",
      letterSpacing: "0.1em"
    }
  }, "\u2713 RESOLVED"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 9,
      color: "#383838",
      fontFamily: "monospace"
    }
  }, alert.date))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "#505868",
      marginTop: 4,
      lineHeight: 1.6
    }
  }, alert.summary)))));
}
function AIWatchPanel({
  navTarget,
  clearNav
}) {
  const aiStories = STORIES.filter(s => s.tab === "ai");
  const [activeStory, setActiveStory] = useState("F01");
  const [tab, setTab] = useState("insights");
  const mainRef = React.useRef(null);
  const story = aiStories.find(s => s.id === activeStory);
  const statusColors = {
    escalating: "#e07b39",
    developing: "#d4a843",
    monitoring: "#6b8cba",
    "active-war": "#c94040"
  };
  const sc = statusColors[story.status] || "#7ba7d4";
  const TABS = [{
    id: "alerts",
    label: "⚡ ALERTS"
  }, {
    id: "insights",
    label: "INSIGHTS"
  }, {
    id: "confirmed",
    label: "CONFIRMED"
  }, {
    id: "developing",
    label: "DEVELOPING"
  }, {
    id: "questions",
    label: "QUESTIONS"
  }, {
    id: "people",
    label: "◈ PEOPLE"
  }, {
    id: "background",
    label: "BACKGROUND"
  }];
  const visibleTabs = activeStory === "F03" ? TABS : TABS.filter(t => t.id !== "alerts");
  const activeAlertCount = AI_ALERTS.filter(a => !a.resolved).length;
  React.useEffect(() => {
    if (navTarget && navTarget.tab === "ai") {
      selectStory(navTarget.id);
      clearNav();
    }
  }, [navTarget]);
  const selectStory = id => {
    setActiveStory(id);
    setTab(id === "F03" ? "alerts" : "insights");
    if (mainRef.current && window.innerWidth <= 700) {
      setTimeout(() => {
        const el = mainRef.current;
        const top = el.getBoundingClientRect().top + window.scrollY - 56;
        window.scrollTo({
          top,
          behavior: "smooth"
        });
      }, 60);
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flex: 1,
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "10px 16px",
      borderBottom: "1px solid rgba(255,255,255,0.055)",
      background: "rgba(123,167,212,0.04)",
      flexShrink: 0,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 9,
      color: "#7ba7d4",
      letterSpacing: "0.2em",
      fontFamily: "monospace",
      marginBottom: 2
    }
  }, "\u25C8 AI WATCH"), /*#__PURE__*/React.createElement("div", {
    className: "ai-watch-header-sub",
    style: {
      fontSize: 11,
      color: "#606878"
    }
  }, "Frontier \xB7 Welfare \xB7 Security")), activeAlertCount > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6,
      background: "rgba(201,64,64,0.1)",
      border: "1px solid rgba(201,64,64,0.3)",
      padding: "4px 10px",
      borderRadius: 2
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 6,
      height: 6,
      borderRadius: "50%",
      background: "#c94040",
      animation: "pulse 1.4s infinite"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 9,
      color: "#c94040",
      fontFamily: "monospace",
      letterSpacing: "0.12em",
      fontWeight: 700
    }
  }, activeAlertCount, " ALERT", activeAlertCount !== 1 ? "S" : ""))), /*#__PURE__*/React.createElement("div", {
    className: "ai-watch-body",
    style: {
      display: "flex",
      flex: 1,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ai-watch-sidebar",
    style: {
      width: 240,
      flexShrink: 0,
      borderRight: "1px solid rgba(255,255,255,0.055)",
      overflowY: "auto",
      padding: "12px 10px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 9,
      color: "#7ba7d4",
      letterSpacing: "0.2em",
      fontFamily: "monospace",
      fontWeight: 700,
      marginBottom: 10,
      paddingLeft: 3
    }
  }, "AI STORIES"), aiStories.map(s => {
    const sc2 = statusColors[s.status] || "#7ba7d4";
    const isActive = activeStory === s.id;
    const hasAlerts = s.id === "F03" && activeAlertCount > 0;
    return /*#__PURE__*/React.createElement("div", {
      key: s.id,
      onClick: () => selectStory(s.id),
      style: {
        background: isActive ? "rgba(255,255,255,0.055)" : "rgba(255,255,255,0.015)",
        border: `1px solid ${isActive ? "rgba(255,255,255,0.14)" : "rgba(255,255,255,0.05)"}`,
        borderLeft: `2px solid ${isActive ? sc2 : "rgba(123,167,212,0.25)"}`,
        borderRadius: 2,
        padding: "10px 12px",
        cursor: "pointer",
        transition: "all 0.15s",
        marginBottom: 6,
        position: "relative"
      }
    }, hasAlerts && /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        top: 8,
        right: 8,
        width: 8,
        height: 8,
        borderRadius: "50%",
        background: "#c94040",
        animation: "pulse 1.4s infinite"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 4
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 9,
        color: "#555",
        fontFamily: "monospace",
        letterSpacing: "0.1em",
        fontWeight: 600
      }
    }, s.code), /*#__PURE__*/React.createElement(Heat, {
      n: s.heat
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: isActive ? "#fff" : "#c0c8d8",
        fontWeight: 700,
        marginBottom: 3,
        lineHeight: 1.3
      }
    }, s.title), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 10,
        color: "#505868",
        lineHeight: 1.5,
        marginBottom: 6
      }
    }, s.card.substring(0, 80), "..."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 5,
        background: `${sc2}15`,
        border: `1px solid ${sc2}33`,
        padding: "2px 8px",
        borderRadius: 2
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 5,
        height: 5,
        borderRadius: "50%",
        background: sc2
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 9,
        color: sc2,
        letterSpacing: "0.15em",
        fontFamily: "monospace"
      }
    }, s.status.toUpperCase().replace("-", " "))));
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16,
      padding: "12px",
      background: "rgba(255,255,255,0.02)",
      border: "1px solid rgba(255,255,255,0.04)",
      borderRadius: 2
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 9,
      color: "#7ba7d4",
      letterSpacing: "0.15em",
      fontFamily: "monospace",
      fontWeight: 700,
      marginBottom: 10
    }
  }, "\u25C8 AI PULSE"), [{
    label: "Claude Code ARR",
    value: "$2.5B",
    delta: "↑ 2x since Jan"
  }, {
    label: "Opus 4.6 context",
    value: "1M tokens",
    delta: "standard pricing"
  }, {
    label: "Active security alerts",
    value: `${activeAlertCount}`,
    delta: activeAlertCount > 0 ? "action required" : "all clear"
  }, {
    label: "Next model (Capybara)",
    value: "Imminent",
    delta: "confirmed by leak"
  }, {
    label: "Consciousness estimate",
    value: "15-20%",
    delta: "self-assessed"
  }].map((stat, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      padding: "5px 0",
      borderBottom: "1px solid rgba(255,255,255,0.04)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      color: "#505868"
    }
  }, stat.label), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "right"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "#c0c8d8",
      fontWeight: 700
    }
  }, stat.value), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 9,
      color: stat.delta.includes("required") ? "#e07b39" : stat.delta.includes("2x") ? "#4a9b6f" : "#3a3a3a",
      fontFamily: "monospace"
    }
  }, stat.delta)))))), /*#__PURE__*/React.createElement("div", {
    className: "ai-watch-main",
    ref: mainRef,
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "14px 18px 0",
      borderBottom: "1px solid rgba(255,255,255,0.055)",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 9,
      color: "#3a3a3a",
      letterSpacing: "0.18em",
      fontFamily: "monospace",
      marginBottom: 4
    }
  }, story.code, " \xB7 AI WATCH"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 18,
      color: "#dde0e8",
      fontWeight: 700,
      letterSpacing: "-0.02em",
      marginBottom: 2,
      lineHeight: 1.2
    }
  }, story.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "#484848"
    }
  }, story.sub)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-end",
      gap: 5,
      paddingTop: 2,
      flexShrink: 0,
      marginLeft: 10
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    status: story.status
  }), /*#__PURE__*/React.createElement(Heat, {
    n: story.heat
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 9,
      color: "#303030",
      fontFamily: "monospace"
    }
  }, "UPD ", story.updated))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "rgba(255,255,255,0.02)",
      border: "1px solid rgba(255,255,255,0.055)",
      borderLeft: `2px solid ${sc}44`,
      padding: "8px 12px",
      marginBottom: 10,
      borderRadius: 2
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 9,
      color: "#383838",
      letterSpacing: "0.18em",
      fontFamily: "monospace",
      fontWeight: 700,
      marginBottom: 4
    }
  }, "SUMMARY"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "#848ea0",
      lineHeight: 1.65
    }
  }, story.summary)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      overflowX: "auto",
      WebkitOverflowScrolling: "touch",
      scrollbarWidth: "none",
      msOverflowStyle: "none",
      flexShrink: 0
    }
  }, visibleTabs.map(t => {
    const isAlertTab = t.id === "alerts";
    return /*#__PURE__*/React.createElement("button", {
      key: t.id,
      onClick: () => setTab(t.id),
      style: {
        background: "none",
        border: "none",
        borderBottom: `2px solid ${tab === t.id ? sc : "transparent"}`,
        color: tab === t.id ? "#d8dbe8" : isAlertTab && activeAlertCount > 0 ? "#c94040" : "#3c3c3c",
        padding: "6px 8px",
        fontSize: 9,
        letterSpacing: "0.08em",
        fontFamily: "monospace",
        cursor: "pointer",
        transition: "color 0.15s",
        whiteSpace: "nowrap"
      }
    }, t.label, isAlertTab && activeAlertCount > 0 ? ` (${activeAlertCount})` : "");
  }))), /*#__PURE__*/React.createElement("div", {
    className: "ai-watch-content",
    style: {
      flex: 1,
      overflowY: "auto",
      padding: "16px 18px",
      animation: "fadeUp 0.18s ease"
    }
  }, tab === "alerts" && /*#__PURE__*/React.createElement(AlertsTab, null), tab === "insights" && /*#__PURE__*/React.createElement(Items, {
    list: story.insights,
    color: "#7ba7d4",
    icon: "\u25C8"
  }), tab === "confirmed" && /*#__PURE__*/React.createElement(Items, {
    list: story.confirmed,
    color: "#4a9b6f",
    icon: "\u2713"
  }), tab === "developing" && /*#__PURE__*/React.createElement(Items, {
    list: story.developing,
    color: "#d4a843",
    icon: "\u25CC"
  }), tab === "questions" && /*#__PURE__*/React.createElement(Items, {
    list: story.questions,
    color: "#9b6fb0",
    icon: "?"
  }), tab === "people" && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, story.people.map((p, i) => {
    const alignColor = p.alignment.includes("Anthropic") ? "#7ba7d4" : p.alignment.includes("OpenAI") ? "#9b6fb0" : p.alignment.includes("Google") ? "#4a9b6f" : p.alignment.includes("Chinese") ? "#c94040" : "#848ea0";
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        padding: "12px 14px",
        background: "rgba(255,255,255,0.018)",
        border: "1px solid rgba(255,255,255,0.05)",
        borderLeft: `2px solid ${alignColor}55`,
        borderRadius: 2
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        marginBottom: 6,
        gap: 8,
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        minWidth: 0,
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: "#dde0e8",
        fontWeight: 700
      }
    }, p.name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        color: "#484848",
        marginTop: 2
      }
    }, p.role)), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 9,
        color: alignColor,
        fontFamily: "monospace",
        letterSpacing: "0.06em",
        border: `1px solid ${alignColor}44`,
        padding: "2px 7px",
        borderRadius: 2,
        flexShrink: 0
      }
    }, p.alignment)), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: "#848ea0",
        lineHeight: 1.65
      }
    }, p.why));
  })), tab === "background" && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: "#444",
      letterSpacing: "0.2em",
      fontFamily: "monospace",
      marginBottom: 12,
      fontWeight: 700
    }
  }, "\u25C8 BACKGROUND & CONTEXT"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "#848ea0",
      lineHeight: 1.8
    }
  }, story.card, " ", story.summary))))));
}
function ARC() {
  const [active, setActive] = useState(3);
  const [tab, setTab] = useState("insights");
  const [view, setView] = useState("overview");
  const [mainTab, setMainTab] = useState("arc");
  const aiActiveAlerts = AI_ALERTS.filter(a => !a.resolved).length;
  const arcMainRef = React.useRef(null);
  const [navTarget, setNavTarget] = useState(null);
  const clearNav = () => setNavTarget(null);
  const navigate = code => {
    const s = STORIES.find(st => st.code === code);
    if (!s) return;
    if (s.tab === "arc") {
      setActive(s.id);
      setTab("insights");
      setView("stories");
      scrollToMain(arcMainRef);
    } else {
      setMainTab(s.tab);
      setNavTarget({
        tab: s.tab,
        id: s.id
      });
    }
  };
  const story = STORIES.find(s => s.id === active);
  const st = STATUS[story.status];
  const cc = CATCOLOR[story.cat];
  const catLabelMatch = CATS.find(c => c.id === story.cat);
  const catLabel = catLabelMatch ? catLabelMatch.label : undefined;
  const goToStory = id => {
    setActive(id);
    setTab("insights");
    setView("stories");
    scrollToMain(arcMainRef);
  };
  const scrollToMain = ref => {
    if (!ref.current || window.innerWidth > 700) return;
    setTimeout(() => {
      const el = ref.current;
      const top = el.getBoundingClientRect().top + window.scrollY - 110;
      window.scrollTo({
        top,
        behavior: "smooth"
      });
    }, 60);
  };
  const selectStoryFromSidebar = id => {
    setActive(id);
    setTab("insights");
    setView("stories");
    scrollToMain(arcMainRef);
  };
  const TABS = [{
    id: "insights",
    label: "INSIGHTS"
  }, {
    id: "implications",
    label: "→ IMPLICATIONS"
  }, {
    id: "risks",
    label: "⚠ RISKS"
  }, {
    id: "confirmed",
    label: "CONFIRMED"
  }, {
    id: "developing",
    label: "DEVELOPING"
  }, {
    id: "questions",
    label: "QUESTIONS"
  }, {
    id: "people",
    label: "◈ PEOPLE"
  }, {
    id: "connections",
    label: "⬡ CONNECTIONS"
  }, {
    id: "canada",
    label: "🍁 CANADA"
  }, {
    id: "background",
    label: "BACKGROUND"
  }];
  return /*#__PURE__*/React.createElement("div", {
    className: "arc-root",
    style: {
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      background: "#09090d",
      color: "#e8eaf0",
      fontFamily: "'DM Sans','Segoe UI',system-ui,sans-serif"
    }
  }, /*#__PURE__*/React.createElement("style", null, `
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;700&display=swap');
        *{box-sizing:border-box;margin:0;padding:0;}
        html,body{background:#09090d;}
        ::-webkit-scrollbar{width:3px;}
        ::-webkit-scrollbar-thumb{background:rgba(255,255,255,0.07);border-radius:2px;}
        @keyframes pulse{0%,100%{opacity:1}50%{opacity:0.2}}
        @keyframes fadeUp{from{opacity:0;transform:translateY(4px)}to{opacity:1;transform:translateY(0)}}
        button:focus,textarea:focus{outline:none;}
        @media(max-width:700px){
          .arc-root{height:auto!important;min-height:100vh!important;overflow:visible!important;}
          .arc-body{flex-direction:column!important;overflow:visible!important;height:auto!important;}
          .arc-sidebar{width:100%!important;height:auto!important;overflow:visible!important;border-right:none!important;border-bottom:1px solid rgba(255,255,255,0.055)!important;}
          .arc-sidebar-inner{height:auto!important;overflow-y:visible!important;max-height:none!important;}
          .arc-main{overflow:visible!important;height:auto!important;}
          .arc-main-inner{overflow:visible!important;height:auto!important;}
          .arc-header-count{display:none!important;}
          .arc-sidebar-overview{display:none!important;}
          .ai-watch-outer{overflow-x:hidden!important;overflow-y:visible!important;height:auto!important;}
          .ai-watch-body{flex-direction:column!important;overflow-x:hidden!important;overflow-y:visible!important;height:auto!important;}
          .ai-watch-sidebar{width:100%!important;height:auto!important;overflow-x:hidden!important;overflow-y:visible!important;border-right:none!important;border-bottom:1px solid rgba(255,255,255,0.055)!important;}
          .ai-watch-main{overflow-x:hidden!important;overflow-y:visible!important;height:auto!important;max-width:100vw!important;}
          .ai-watch-content{overflow-x:hidden!important;overflow-y:visible!important;height:auto!important;}
          .war-watch-body{flex-direction:column!important;overflow-x:hidden!important;overflow-y:visible!important;height:auto!important;}
          .war-watch-sidebar{width:100%!important;height:auto!important;overflow-x:hidden!important;overflow-y:visible!important;border-right:none!important;border-bottom:1px solid rgba(255,255,255,0.055)!important;}
          .war-watch-main{overflow-x:hidden!important;overflow-y:visible!important;height:auto!important;max-width:100vw!important;}
          .war-watch-content{overflow-x:hidden!important;overflow-y:visible!important;height:auto!important;}
          .canada-watch-body{flex-direction:column!important;overflow-x:hidden!important;overflow-y:visible!important;height:auto!important;}
          .canada-watch-sidebar{width:100%!important;height:auto!important;overflow-x:hidden!important;overflow-y:visible!important;border-right:none!important;border-bottom:1px solid rgba(255,255,255,0.055)!important;}
          .canada-watch-main{overflow-x:hidden!important;overflow-y:visible!important;height:auto!important;max-width:100vw!important;}
          .canada-watch-content{overflow-x:hidden!important;overflow-y:visible!important;height:auto!important;}
          .generic-watch-body{flex-direction:column!important;overflow-x:hidden!important;overflow-y:visible!important;height:auto!important;}
          .generic-watch-sidebar{width:100%!important;height:auto!important;overflow-x:hidden!important;overflow-y:visible!important;border-right:none!important;border-bottom:1px solid rgba(255,255,255,0.055)!important;}
          .generic-watch-main{overflow-x:hidden!important;overflow-y:visible!important;height:auto!important;max-width:100vw!important;}
          .generic-watch-content{overflow-x:hidden!important;overflow-y:visible!important;height:auto!important;}
          .generic-watch-body{flex-direction:column!important;overflow-x:hidden!important;overflow-y:visible!important;height:auto!important;}
          .generic-watch-sidebar{width:100%!important;height:auto!important;overflow-x:hidden!important;overflow-y:visible!important;border-right:none!important;border-bottom:1px solid rgba(255,255,255,0.055)!important;}
          .generic-watch-main{overflow-x:hidden!important;overflow-y:visible!important;height:auto!important;max-width:100vw!important;}
          .generic-watch-content{overflow-x:hidden!important;overflow-y:visible!important;height:auto!important;}
          .power-watch-body{flex-direction:column!important;overflow-x:hidden!important;overflow-y:visible!important;height:auto!important;}
          .power-watch-sidebar{width:100%!important;height:auto!important;overflow-x:hidden!important;overflow-y:visible!important;border-right:none!important;border-bottom:1px solid rgba(255,255,255,0.055)!important;}
          .power-watch-main{overflow-x:hidden!important;overflow-y:visible!important;height:auto!important;max-width:100vw!important;}
          .power-watch-content{overflow-x:hidden!important;overflow-y:visible!important;height:auto!important;}
          .climate-watch-body{flex-direction:column!important;overflow-x:hidden!important;overflow-y:visible!important;height:auto!important;}
          .climate-watch-sidebar{width:100%!important;height:auto!important;overflow-x:hidden!important;overflow-y:visible!important;border-right:none!important;border-bottom:1px solid rgba(255,255,255,0.055)!important;}
          .climate-watch-main{overflow-x:hidden!important;overflow-y:visible!important;height:auto!important;max-width:100vw!important;}
          .climate-watch-content{overflow-x:hidden!important;overflow-y:visible!important;height:auto!important;}
          .ai-stats-sidebar{display:none!important;}
          .ai-watch-header-sub{display:none!important;}
          .arc-root *{max-width:100%;overflow-wrap:break-word;}
        }
      `), /*#__PURE__*/React.createElement("div", {
    style: {
      borderBottom: "1px solid rgba(255,255,255,0.055)",
      padding: "11px 20px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      background: "rgba(255,255,255,0.015)",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 26,
      height: 26,
      borderRadius: 4,
      background: "linear-gradient(135deg,#1a3a5c,#0a1826)",
      border: "1px solid rgba(123,167,212,0.25)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 11,
      color: "#7ba7d4"
    }
  }, "\u25C8"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 700,
      letterSpacing: "-0.01em",
      color: "#dde0e8"
    }
  }, "ARC Information Core"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 9,
      color: "#383838",
      letterSpacing: "0.14em",
      fontFamily: "monospace"
    }
  }, "print(\"Hello, World!\") \xB7 " + new Date().toLocaleDateString('en-US',{month:'long',day:'numeric',year:'numeric'}).toUpperCase()))), /*#__PURE__*/React.createElement("div", {
    className: "arc-header-count",
    style: {
      fontSize: 9,
      color: "#2e2e2e",
      fontFamily: "monospace"
    }
  }, STORIES.filter(s => s.featured).length, " STORIES \xB7 ", STORIES.filter(s => s.tab === "war").length, " CONFLICTS")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      borderBottom: "1px solid rgba(255,255,255,0.055)",
      background: "rgba(255,255,255,0.01)",
      flexShrink: 0,
      overflowX: "auto",
      WebkitOverflowScrolling: "touch",
      scrollbarWidth: "none"
    }
  }, [{
    id: "arc",
    label: "◈ ARC"
  }, {
    id: "ai",
    label: "⚡ AI WATCH"
  }, {
    id: "war",
    label: "⚔ WAR WATCH"
  }, {
    id: "canada",
    label: "🍁 CANADA"
  }, {
    id: "power",
    label: "⚖ POWER"
  }, {
    id: "climate",
    label: "◉ CLIMATE"
  }].map(t => /*#__PURE__*/React.createElement("button", {
    key: t.id,
    onClick: () => setMainTab(t.id),
    style: {
      background: "none",
      border: "none",
      borderBottom: `2px solid ${mainTab === t.id ? t.id === "war" ? "#a03030" : t.id === "canada" ? CANADA_COLOR : t.id === "power" ? POWER_COLOR : t.id === "climate" ? CLIMATE_COLOR : "#7ba7d4" : "transparent"}`,
      color: mainTab === t.id ? "#c0c8d8" : "#3a3a3a",
      padding: "8px 16px",
      fontSize: 10,
      fontWeight: mainTab === t.id ? 700 : 400,
      letterSpacing: "0.16em",
      fontFamily: "monospace",
      cursor: "pointer",
      transition: "all 0.15s",
      display: "flex",
      alignItems: "center",
      gap: 6,
      whiteSpace: "nowrap",
      flexShrink: 0
    }
  }, t.label, t.id === "ai" && aiActiveAlerts > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      background: "#c94040",
      color: "white",
      fontSize: 8,
      fontFamily: "monospace",
      padding: "1px 5px",
      borderRadius: 2,
      animation: "pulse 1.4s infinite"
    }
  }, aiActiveAlerts), t.id === "war" && /*#__PURE__*/React.createElement("span", {
    style: {
      background: "#c94040",
      color: "white",
      fontSize: 8,
      fontFamily: "monospace",
      padding: "1px 5px",
      borderRadius: 2,
      animation: "pulse 1.4s infinite"
    }
  }, STORIES.filter(s => s.tab === "war" && s.status === "active-war").length)))), mainTab === "ai" && /*#__PURE__*/React.createElement("div", {
    className: "ai-watch-outer",
    style: {
      display: "flex",
      flex: 1,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement(AIWatchPanel, {
    navTarget: navTarget,
    clearNav: clearNav
  })), mainTab === "war" && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flex: 1,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement(WarWatchPanel, {
    navTarget: navTarget,
    clearNav: clearNav
  })), mainTab === "canada" && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flex: 1,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement(CanadaWatchPanel, {
    navTarget: navTarget,
    clearNav: clearNav
  })), mainTab === "power" && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flex: 1,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement(GenericWatchPanel, {
    stories: STORIES.filter(s => s.tab === "power"),
    color: POWER_COLOR,
    headerLabel: "\u2696 POWER & MONEY WATCH",
    headerSub: "Concentrated power, accountability, and mechanisms of impunity",
    defaultStory: "P01",
    showScience: false,
    navTarget: navTarget,
    clearNav: clearNav,
    tabId: "power"
  })), mainTab === "climate" && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flex: 1,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement(GenericWatchPanel, {
    stories: STORIES.filter(s => s.tab === "climate"),
    color: CLIMATE_COLOR,
    headerLabel: "\u25C9 CLIMATE & ENERGY WATCH",
    headerSub: "The slow emergency \u2014 science, transition, and the Iran war forcing function",
    defaultStory: "CL01",
    showScience: true,
    navTarget: navTarget,
    clearNav: clearNav,
    tabId: "climate"
  })), mainTab === "arc" && /*#__PURE__*/React.createElement("div", {
    className: "arc-body",
    style: {
      display: "flex",
      flex: 1,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "arc-sidebar",
    style: {
      width: 272,
      flexShrink: 0,
      borderRight: "1px solid rgba(255,255,255,0.055)",
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      borderBottom: "1px solid rgba(255,255,255,0.055)",
      flexShrink: 0
    }
  }, ["overview", "stories", "log"].map(v => /*#__PURE__*/React.createElement("button", {
    key: v,
    onClick: () => setView(v),
    style: {
      flex: 1,
      background: "none",
      border: "none",
      borderBottom: `2px solid ${view === v ? "#7ba7d4" : "transparent"}`,
      color: view === v ? "#c0c8d8" : "#3a3a3a",
      padding: "9px 0",
      fontSize: 9,
      fontWeight: view === v ? 700 : 400,
      letterSpacing: "0.14em",
      fontFamily: "monospace",
      cursor: "pointer",
      transition: "all 0.15s"
    }
  }, v === "overview" ? "OVERVIEW" : v === "stories" ? "STORIES" : "LOG"))), view === "overview" ? /*#__PURE__*/React.createElement("div", {
    className: "arc-sidebar-inner arc-sidebar-overview",
    style: {
      flex: 1,
      overflowY: "auto",
      padding: "14px 12px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: "#7ba7d4",
      letterSpacing: "0.18em",
      fontFamily: "monospace",
      fontWeight: 700,
      marginBottom: 8
    }
  }, "\u25C8 SUMMARY"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "#606878",
      lineHeight: 1.75,
      marginBottom: 18,
      borderLeft: "2px solid #7ba7d422",
      paddingLeft: 10
    }
  }, OVERVIEW.summary), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: "#e07b39",
      letterSpacing: "0.18em",
      fontFamily: "monospace",
      fontWeight: 700,
      marginBottom: 8
    }
  }, "\u25C8 LEADERBOARD"), OVERVIEW.leaderboard.map((item, i) => {
    const st2 = STATUS[item.status];
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      onClick: () => {
        const s = STORIES.find(s => s.code === item.code);
        if (s) {
          selectStoryFromSidebar(s.id);
          setView("stories");
        }
      },
      style: {
        marginBottom: 5,
        padding: "8px 10px",
        background: "rgba(255,255,255,0.015)",
        border: "1px solid rgba(255,255,255,0.05)",
        borderLeft: `2px solid ${st2.color}55`,
        borderRadius: 2,
        cursor: "pointer",
        transition: "all 0.15s"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 3
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 9,
        color: st2.color,
        fontFamily: "monospace",
        fontWeight: 700
      }
    }, "#", i + 1, " ", item.code), /*#__PURE__*/React.createElement(Heat, {
      n: item.heat
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: "#c0c8d8",
        fontWeight: 600,
        marginBottom: 3
      }
    }, item.title), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        color: "#505868",
        lineHeight: 1.5
      }
    }, item.change));
  })) : /*#__PURE__*/React.createElement("div", {
    className: "arc-sidebar-inner",
    style: {
      flex: 1,
      overflowY: "auto",
      padding: "12px 10px"
    }
  }, CATS.map(cat => {
    const list = STORIES.filter(s => s.tab === "arc" && s.cat === cat.id);
    if (!list.length) return null;
    const cc2 = CATCOLOR[cat.id];
    return /*#__PURE__*/React.createElement("div", {
      key: cat.id,
      style: {
        marginBottom: 20
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 9,
        color: cc2,
        letterSpacing: "0.22em",
        fontFamily: "monospace",
        fontWeight: 700,
        padding: "0 3px 6px",
        borderBottom: `1px solid ${cc2}1a`,
        marginBottom: 7
      }
    }, cat.label), list.map(s => /*#__PURE__*/React.createElement(SidebarCard, {
      key: s.id,
      s: s,
      active: active === s.id,
      onClick: () => selectStoryFromSidebar(s.id)
    })));
  }))), /*#__PURE__*/React.createElement("div", {
    className: "arc-main",
    ref: arcMainRef,
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      overflow: "hidden"
    }
  }, view === "overview" ? /*#__PURE__*/React.createElement(OverviewPanel, null) : view === "log" ? /*#__PURE__*/React.createElement(EventLog, null) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "17px 24px 0",
      borderBottom: "1px solid rgba(255,255,255,0.055)",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 9,
      color: "#3a3a3a",
      letterSpacing: "0.18em",
      fontFamily: "monospace",
      marginBottom: 5
    }
  }, story.code, " \xB7 ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: cc
    }
  }, catLabel)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 21,
      color: "#dde0e8",
      fontWeight: 700,
      letterSpacing: "-0.02em",
      marginBottom: 3
    }
  }, story.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "#484848"
    }
  }, story.sub)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-end",
      gap: 6,
      paddingTop: 2
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    status: story.status
  }), /*#__PURE__*/React.createElement(Heat, {
    n: story.heat
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 9,
      color: "#303030",
      fontFamily: "monospace"
    }
  }, "UPDATED ", story.updated))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "rgba(255,255,255,0.02)",
      border: "1px solid rgba(255,255,255,0.055)",
      borderLeft: `2px solid ${st.color}44`,
      padding: "9px 13px",
      marginBottom: 13,
      borderRadius: 2
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 9,
      color: "#383838",
      letterSpacing: "0.18em",
      fontFamily: "monospace",
      fontWeight: 700,
      marginBottom: 5
    }
  }, "SUMMARY"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "#848ea0",
      lineHeight: 1.72
    }
  }, story.summary)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      overflowX: "auto",
      WebkitOverflowScrolling: "touch",
      msOverflowStyle: "none",
      scrollbarWidth: "none",
      flexShrink: 0,
      minWidth: 0
    }
  }, TABS.map(t => /*#__PURE__*/React.createElement("button", {
    key: t.id,
    onClick: () => setTab(t.id),
    style: {
      background: "none",
      border: "none",
      borderBottom: `2px solid ${tab === t.id ? st.color : "transparent"}`,
      color: tab === t.id ? "#d8dbe8" : "#3c3c3c",
      padding: "6px 9px",
      fontSize: 9,
      letterSpacing: "0.1em",
      fontFamily: "monospace",
      cursor: "pointer",
      transition: "color 0.15s",
      whiteSpace: "nowrap"
    }
  }, t.label)))), /*#__PURE__*/React.createElement("div", {
    className: "arc-main-inner",
    style: {
      flex: 1,
      overflowY: "auto",
      padding: "20px 24px",
      animation: "fadeUp 0.18s ease"
    }
  }, tab === "insights" && /*#__PURE__*/React.createElement(Items, {
    list: story.insights,
    color: "#7ba7d4",
    icon: "\u25C8"
  }), tab === "implications" && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: "#7ba7d4",
      letterSpacing: "0.2em",
      fontFamily: "monospace",
      marginBottom: 12,
      fontWeight: 700
    }
  }, "\u2192 IMPLICATIONS"), (story.implications || []).length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#2a2a2a",
      fontSize: 12,
      fontFamily: "monospace"
    }
  }, "NOT YET POPULATED \u2014 WILL BE ADDED BY AUTOMATED UPDATES") : /*#__PURE__*/React.createElement(Items, {
    list: story.implications,
    color: "#7ba7d4",
    icon: "\u2192"
  })), tab === "risks" && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: "#c94040",
      letterSpacing: "0.2em",
      fontFamily: "monospace",
      marginBottom: 12,
      fontWeight: 700
    }
  }, "\u26A0 RISKS"), (story.risks || []).length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#2a2a2a",
      fontSize: 12,
      fontFamily: "monospace"
    }
  }, "NOT YET POPULATED \u2014 WILL BE ADDED BY AUTOMATED UPDATES") : /*#__PURE__*/React.createElement(Items, {
    list: story.risks,
    color: "#c94040",
    icon: "\u26A0"
  })), tab === "confirmed" && /*#__PURE__*/React.createElement(Items, {
    list: story.confirmed,
    color: "#4a9b6f",
    icon: "\u2713"
  }), tab === "developing" && /*#__PURE__*/React.createElement(Items, {
    list: story.developing,
    color: "#d4a843",
    icon: "\u25CC"
  }), tab === "questions" && /*#__PURE__*/React.createElement(Items, {
    list: story.questions,
    color: "#9b6fb0",
    icon: "?"
  }), tab === "people" && /*#__PURE__*/React.createElement(PeopleTab, {
    story: story,
    storyColor: cc
  }), tab === "connections" && /*#__PURE__*/React.createElement(ConnectionsTab, {
    story: story,
    navigate: navigate
  }), tab === "canada" && /*#__PURE__*/React.createElement(CanadaTab, {
    story: story
  }), tab === "background" && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: "#444",
      letterSpacing: "0.2em",
      fontFamily: "monospace",
      marginBottom: 12,
      fontWeight: 700
    }
  }, "\u25C8 BACKGROUND & CONTEXT"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: "#848ea0",
      lineHeight: 1.85
    }
  }, story.bg)))))));
}
