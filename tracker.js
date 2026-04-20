const {
  useState
} = React;
const OVERVIEW = {
  summary: "The Iran conflict remains critical with Tehran rejecting ceasefire terms and continuing strikes on key infrastructure. Global economic pressures intensify as oil markets react to the Strait of Hormuz reopening, while AI infrastructure emerges as a new battleground with Iranian threats against UAE facilities. Canada faces mounting trade tensions with the US, and China demonstrates strategic resilience despite regional instability. Anthropic's legal battle with the Pentagon escalates as the DOJ prepares 9th Circuit arguments.",
  leaderboard: [{
    code: "IRAN-01",
    title: "Operation Epic Fury",
    change: "Iran rejects ceasefire and submits maximalist demands, with ongoing strikes on Tehran and Kharg Island infrastructure.",
    heat: 5,
    status: "active-war"
  },
  {
    code: "ECON-01",
    title: "Oil Shock and Global Economy",
    change: "Oil prices drop to $87/barrel post-Strait reopening, but IMF warns of potential 2% global growth decline amid continued US blockade.",
    heat: 5,
    status: "escalating"
  },
  {
    code: "ANTHRO-01",
    title: "Anthropic vs. Pentagon",
    change: "DOJ has until April 30 to file 9th Circuit arguments. Microsoft, retired generals, Catholic theologians filed amicus briefs for Anthropic.",
    heat: 4,
    status: "escalating"
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
    status: "developing"
  },
  {
    code: "AI-SEC-01",
    title: "AI Security & Supply Chain",
    change: "Iran threatens destruction of OpenAI's $30B UAE datacenter, following successful attacks on AWS and Oracle facilities in the region.",
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
    date: "Apr 7 2026",
    title: "Iran Targets AI Infrastructure",
    alert: "Iran's IRGC has escalated threats against OpenAI's UAE datacenter, releasing satellite imagery and vowing annihilation. This marks a new phase in the conflict, where AI infrastructure becomes a strategic target, compounding risks for global tech supply chains.",
    severity: "high"
  }
]
};
const EVENTS = [
{
  date: "Apr 20 2026",
  code: "IRAN-01",
  type: "HEAT_CHANGE",
  content: "Heat maintained at 5. 8pm ET deadline arrived — Iran submitted 10-point maximalist counter. Kharg Island struck before deadline."
},
{
  date: "Apr 20 2026",
  code: "AI-SEC-01",
  type: "NEW_FACT",
  content: "IRGC threatened complete annihilation of Stargate UAE ($30B OpenAI/Nvidia/Oracle). Released satellite imagery of previously undisclosed facility location."
},
{
  date: "Apr 20 2026",
  code: "ANTHRO-01",
  type: "NEW_FACT",
  content: "AnthroPAC launched April 3 — employee-funded political action committee to fund pro-AI-safety candidates. First direct electoral move by any AI company."
},
{
  date: "Apr 20 2026",
  code: "ECON-01",
  type: "NEW_FACT",
  content: "Brent peaked $126/barrel. Mid-April supply cliff modeled — SPR releases and exemptions running out. Potential doubling of daily supply loss to 10M bpd."
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
  cat: "ai",
  code: "ANTHRO-01",
  heat: 4,
  status: "escalating",
  updated: "Apr 20 2026",
  title: "Anthropic vs. Pentagon",
  sub: "AI Governance & Military Use Dispute",
  card: "Judge Rita Lin granted preliminary injunction March 26 — called it First Amendment retaliation. Pentagon appealing to 9th Circuit. AnthroPAC launched April 3. Battle now in multiple courts simultaneously.",
  bg: "Anthropic built Claude — one of the most capable AI systems in the world. The Pentagon had a $200M contract to use Claude on classified networks via Palantir. The dispute: the Pentagon wanted unrestricted use including autonomous weapons and mass surveillance of US citizens. Anthropic refused both. The Trump administration responded by banning all federal agencies from Anthropic and labeling it a national security risk — a label normally reserved for companies linked to foreign adversaries.",
  summary: "Judge Rita Lin (N.D. Cal.) granted Anthropic a preliminary injunction March 26, calling the Pentagon's supply chain risk designation 'a textbook case of First Amendment retaliation.' The DOJ is appealing to the 9th Circuit — filing due April 30. Microsoft, a coalition of retired US generals, and a group of Catholic theologians have filed amicus briefs supporting Anthropic. AnthroPAC — a political action committee funded by Anthropic employees — launched April 3 to fund candidates who support AI safety constraints. Emil Michael (former Uber, now Trump advisor) called the Lin ruling a 'disgrace.' Unconfirmed chatter that a deal could be revived under different terms.",
  confirmed: ["Trump ordered all federal agencies to cease using Anthropic products — executive order signed February 28 2026", "Pentagon designated Anthropic a supply chain risk to national security — label normally reserved for foreign-linked companies", "Judge Rita Lin (N.D. Cal.) granted preliminary injunction March 26 — ruled the designation was a textbook case of First Amendment retaliation", "DOJ filing deadline to 9th Circuit: April 30 2026", "Microsoft filed amicus brief supporting Anthropic — first major tech company to do so publicly", "Coalition of retired US generals filed amicus brief — argued AI safety constraints are operationally necessary, not obstructionist", "Catholic theologians group filed amicus brief — framed as moral autonomy of private institutions", "AnthroPAC launched April 3 — employee-funded PAC to support pro-AI-safety candidates", "Emil Michael called the Lin ruling a disgrace in public statement", "Claude was still in use on Pentagon classified networks during Iran strikes — while the ban was in effect", "OpenAI signed Pentagon deal with standard all lawful purposes language within hours of Anthropic ban", "Sam Altman publicly defended government authority over private company ethics", "xAI accepted all lawful use in Pentagon deals with no public constraints", "Claude hit No. 1 on Apple App Store within hours of the ban — dethroning ChatGPT", "We Will Not Be Divided letter: 537 Google employee signatures, 89 OpenAI employee signatures", "Dario Amodei called disagreeing with the government the most American thing in the world on CBS News", "NSA began using Anthropic's Mythos Preview model despite Pentagon blacklist — confirmed April 20 2026"],
  developing: ["Whether 9th Circuit upholds or reverses Lin injunction — DOJ filing due April 30", "Whether deal revival chatter becomes a formal offer and on what terms", "Whether AnthroPAC translates into electoral outcomes", "Whether the amicus coalition expands to other major institutions", "Whether Congress introduces new legislation — no new military AI governance bills in 2026 yet", "How long Claude remains operational on Pentagon classified networks during transition", "Whether NSA's use of Mythos Preview expands to other federal agencies"],
  insights: ["The preliminary injunction is the most important legal development — it means a federal judge looked at the Pentagon's conduct and called it First Amendment retaliation. That framing will define the appellate argument.", "The amicus brief coalition — Microsoft, generals, theologians — is structurally significant. It signals that Anthropic's position has mainstream institutional support, not just tech-sector sympathy.", "AnthroPAC is the escalation nobody expected. Anthropic is now directly entering electoral politics on the AI governance question. That changes the long-term power dynamics regardless of how the court case resolves.", "Emil Michael calling the ruling a disgrace tells you where the Trump administration's posture sits — this is not softening.", "The deal revival chatter and the escalation signals are happening simultaneously. Both sides may be positioning for a negotiated settlement while continuing the legal battle as leverage.", "The race-to-the-bottom dynamic: OpenAI signed standard all-lawful-purposes language, collected the benefit of Anthropic's stand, and Altman defended government authority. The industry now has a visible split between constraint-accepting and constraint-refusing labs.", "NSA's adoption of Mythos Preview indicates a split within the federal government — civilian agencies may continue using Anthropic's technology despite Pentagon objections."],
  questions: ["Does the 9th Circuit uphold the preliminary injunction — and if so, does the administration comply?", "What does a deal revival look like — what would Anthropic accept and what would the Pentagon offer?", "Does AnthroPAC create a durable political constituency for AI safety constraints?", "Can the amicus coalition hold if the administration applies pressure to Microsoft or other signatories?", "Is Altman's position — elected governments should override private company ethics — a principle or a business decision?", "What happens at the six-month window when Claude is still operationally embedded in classified networks?", "Will NSA's use of Mythos Preview pressure the Pentagon to reconsider its blacklist?"],
  connections: [{
    code: "AI-GOV-01",
    label: "Autonomous Weapons Race",
    how: "The Anthropic case is the first time a major AI company publicly refused military use on ethical grounds and was punished. If the punishment sticks, the industry learns: constraints cost you contracts. That lesson will determine what every future AI company puts in its model deployment agreements.",
    updated: "Apr 19 2026",
    confirmed: [
        'China demonstrated autonomous combat drones at September 2025 military parade, confirmed by US defense officials (Indian Express, Apr 13 2026)',
        'US defense startup Anduril accelerated AI drone production by 3 months to counter Chinese advancements (Techloy, Apr 13 2026)',
        'Russia developing Lancet drones with autonomous targeting capabilities, tested in Ukraine conflict (Prism News, Apr 12 2026)',
        'Pentagon labeled Anthropic a security risk for limiting AI weapons use (Indian Express, Apr 13 2026)'
    ],
    developing: [
        'Extent of US lag in autonomous drone capabilities compared to China and Russia',
        'Impact of Ukraine war as testing ground for autonomous weapons systems',
        'Effectiveness of China\'s civil-military fusion strategy in AI weapons development'
    ],
    insights: [
        'The AI arms race mirrors nuclear deterrence dynamics but with faster escalation risks due to machine-speed decision making',
        'Private sector involvement creates a more distributed and faster-moving arms race than Cold War government-led programs',
        'Battlefield testing in Ukraine is accelerating real-world deployment of autonomous systems before governance frameworks exist'
    ],
    implications: [
        'Military procurement is shifting toward startups capable of rapid AI integration, disrupting traditional defense contractors',
        'Autonomous systems reduce decision time in crises, increasing risks of accidental escalation in flashpoints like Taiwan',
        'The lack of international norms creates incentives for first-mover advantage in deploying autonomous weapons'
    ],
    risks: [
        'Unintended escalation from AI systems reacting faster than human oversight can manage',
        'Proliferation of autonomous weapons to non-state actors as technology becomes commoditized',
        'Erosion of ethical constraints as companies face pressure to remove usage limitations'
    ],
    questions: [
        'What threshold of autonomy will trigger meaningful international regulation?',
        'How will nuclear command systems remain secure as AI integrates into military networks?',
        'Can democratic societies maintain oversight of autonomous weapons development?'
    ],
    people: [
        'Palmer Luckey (Anduril founder)',
        'President Xi Jinping',
        'President Vladimir Putin',
        'Defense Secretary Pete Hegseth'
    ],
    toll: {
        financial: '$13B+ Pentagon budget for autonomous systems (2026)',
        strategic: 'Global destabilization from uncontrolled AI arms race'
    },
    front: {
        show: true,
        reason: 'Escalating great power competition with existential risks'
    },
    status: "escalating",
    heat: 4,
    card: "military"
}, {
    code: "IRAN-01",
    label: "Operation Epic Fury",
    how: "Claude was running on Pentagon classified networks during the Iran strikes while the ban was in effect. The war is the live operational context in which this governance dispute is playing out.",
    updated: "Apr 19 2026",
    confirmed: [
        'U.S. Navy confirmed food rationing reports from USS Abraham Lincoln and USS Tripoli crews on April 17, 2026 (The Kenya Times)',
        'Iran reopened then reclosed Strait of Hormuz on April 17-18, 2026 (SOF News)',
        'Space Force conducted electronic warfare operations against Iranian systems during Operation Epic Fury (Task & Purpose)'
    ],
    developing: [
        'Mine countermeasure vessels en route from Japan to Persian Gulf for anticipated de-mining operations',
        'Ceasefire negotiations ongoing with April 21 deadline approaching',
        'Houthi threats to close Bab al-Mandab Strait'
    ],
    implications: [
        'Food shortages on blockade ships may impact crew morale and operational readiness',
        'Dual U.S./Iran blockades of Hormuz create maritime chokepoint with global trade implications',
        'Space Force combat role establishes precedent for orbital warfare integration'
    ],
    risks: [
        'Escalation if ceasefire collapses after April 21 deadline',
        'Miscalculation during mine clearance operations in contested waters',
        'Supply chain disruptions extending beyond energy to global food security'
    ],
    heat: 4
}, {
    code: "GEO-01",
    label: "US-China Strategic Competition",
    how: "The US removing AI ethics constraints for military advantage eliminates its main soft-power argument against Chinese military AI development. The governance dispute and the strategic competition are feeding each other.",
    updated: "Apr 19 2026",
    heat: 4,
    status: "escalating",
    card: "Strategic competition between the US and China has intensified in AI, critical infrastructure, and emerging technologies. China is closing the gap in AI performance while focusing on efficiency and adoption.",
    summary: "The Stanford AI Index 2026 report shows China has nearly erased the US lead in AI performance, with a 39-point gap in Arena scores compared to 300+ points in 2023. China leads in industrial robot installations (295k vs US 34k) and AI citations (20.6% vs US 12.6%). Both nations are pursuing divergent strategies—US prioritizing frontier models (spending $286B in 2025) while China focuses on scaled adoption and industrial integration through state-backed programs like 'AI Plus'. Vietnamese leader To Lam's Beijing visit signals warming ties as China strengthens regional influence.",
    confirmed: [
        "China's AI models now trail US frontier models by just 2.7% in Arena scores as of March 2026 (Stanford HAI report)",
        "Chinese firms Alibaba and DeepSeek released efficient AI models achieving high international adoption in 2025 (ITIF analysis)",
        "China maintains 80%+ reserve electricity margin to support AI compute growth - double US capacity (Lantau Group data)",
        "Vietnam's President To Lam visited Beijing April 15-17 2026, signing cooperation agreements on infrastructure and technology (Xinhua)"
    ],
    developing: [
        "US House Select Committee allegations of China circumventing chip export controls through legal/illegal means (April 16 hearing)",
        "Potential Chinese military equipment transfers to Iran including MANPADs (US intelligence assessment cited by CNN)",
        "China's five-year plan aims for 7% annual R&D spending growth to surpass US public research investment by 2029 (Nature analysis)",
        "DeepSeek AI founder's statement that chip embargoes remain primary constraint for Chinese AI development (Congress testimony)"
    ],
    insights: [
        "China's institutional advantages—state coordination of industrial policy and energy infrastructure—are proving decisive in scaling AI adoption despite US compute superiority",
        "The AI competition has become asymmetrical: US leads in raw performance metrics while China dominates deployment and integration metrics",
        "Vietnam's tech diplomacy reflects broader Southeast Asian hedging as secondary states optimize between US innovation and Chinese implementation"
    ],
    implications: [
        "US export controls are forcing Chinese AI developers toward efficiency innovations that may ultimately broaden global market appeal",
        "China's electricity surplus creates structural advantage for energy-intensive industries beyond just AI compute capacity",
        "Decoupling attempts are accelerating China's push for semiconductor self-sufficiency across entire supply chain by 2030"
    ],
    risks: [
        "Trump administration's proposed 50% tariffs on China over Iran could disrupt critical tech supply chains amid already strained relations",
        "US immigration policies reducing inflow of Chinese STEM talent may inadvertently aid Beijing's 'reverse brain drain' initiatives",
        "Chinese rare earth export controls could weaponize dependencies in clean energy and defense manufacturing global supply chains"
    ],
    people: ["Xi Jinping", "To Lam", "John Moolenaar", "Robert Mitchell", "Dmitri Alperovitch"],
    toll: {
        chips: "US maintains 10:1 advantage in advanced AI chip production capacity",
        talent: "38% of top US AI researchers are Chinese-born (Congress testimony)",
        patents: "China leads US in AI patent filings 3:1 since 2023 (Stanford data)"
    },
    front: {
        ai: "March 2026 Arena scores: Claude Opus 4.6 (US) 1439 pts vs Dola-Seed 2.0 (CN) 1400 pts",
        energy: "China added Germany-equivalent electricity capacity annually since 2023",
        investment: "$110B Chinese AI IPOs in HK Q1 2026 vs $285B total US private AI investment"
    }
}],
  canada: "Canada's AI governance ecosystem watches this case closely — Canadian AI labs operate under different regulatory frameworks but the precedent being set about whether private companies can refuse government military use has direct implications for how Canadian AI companies will be positioned if similar pressure comes from Ottawa or Washington. The Iranian-Canadian diaspora context is separate but worth noting: this case is playing out during an active war that affects Canadian communities directly.",
  people: [{
    "name": "Dario Amodei",
    "role": "CEO, Anthropic",
    "why": "Refused Pentagon demands, called it the most American thing in the world, vowed to fight in court. The stand is genuine and the cost is real.",
    "alignment": "Anthropic",
    "status": "active"
  }, {
    "name": "Rita Lin",
    "role": "Federal Judge, N.D. Cal.",
    "why": "Granted the preliminary injunction and framed it as First Amendment retaliation. Her legal reasoning is the foundation of Anthropic's entire appellate strategy.",
    "alignment": "Federal Judiciary",
    "status": "active"
  }, {
    "name": "Sam Altman",
    "role": "CEO, OpenAI",
    "why": "Signed the Pentagon deal Anthropic refused, defended government authority over private company ethics. His position is the competitive alternative to Anthropic's stand.",
    "alignment": "OpenAI",
    "status": "active"
  }, {
    "name": "Emil Michael",
    "role": "Trump Advisor",
    "why": "Called the Lin ruling a disgrace — clearest signal of where the administration's posture sits heading into the 9th Circuit appeal.",
    "alignment": "Trump Administration",
    "status": "active"
  }, {
    "name": "Pete Hegseth",
    "role": "Secretary of Defense",
    "why": "Issued the supply chain risk designation and the Hegseth statement that legal experts called almost surely illegal. The executive who drove the confrontation.",
    "alignment": "Pentagon/Trump",
    "status": "active"
  }],
  implications: ["If the 9th Circuit upholds the injunction, it establishes federal courts as a functional governance layer over military AI contracts — a mechanism nobody designed but that may be the only one that works.", "AnthroPAC entering electoral politics means AI governance is now a campaign issue. That changes the long-term political landscape regardless of how the court case resolves.", "The industry split between Anthropic and OpenAI on military constraints is now permanent and public. Every future AI company will have to declare which side it is on.", "NSA's adoption of Mythos Preview indicates a potential split within the federal government — civilian agencies may continue using Anthropic's technology despite Pentagon objections."],
  risks: ["If the 9th Circuit reverses the injunction, the race-to-the-bottom incentive is confirmed industry-wide — constraints cost contracts, and every AI company learns that lesson simultaneously.", "Deal revival under pressure could produce a settlement that looks like a win for Anthropic but sets a weaker precedent than a clean court victory.", "AnthroPAC could backfire politically — framing AI safety as a partisan issue risks making it a target rather than a protected principle.", "NSA's use of Mythos Preview could complicate legal proceedings by demonstrating operational necessity while the Pentagon maintains its blacklist."]
}, {
  id: 2,
  cat: "ai",
  code: "AI-GOV-01",
  heat: 4,
  status: "developing",
  updated: "Apr 20 2026",
  title: "Autonomous Weapons Race",
  sub: "Global AI in Warfare — No Governance Framework",
  card: "No international treaty governs AI in warfare. US burned 11,000+ munitions in 30 days on Iran — a second-tier adversary. Stockpile math is now public. Anthropic injunction may make courts the de facto governance mechanism.",
  bg: "Autonomous weapons are weapons that can select and attack targets on their own without a human making the final decision. No international law specifically bans or regulates these. The United Nations has been discussing this since 2014 but has never passed a binding treaty. Multiple countries are building and deploying AI systems that assist in or fully automate military targeting decisions. The Anthropic-Pentagon dispute is the most public example of what happens when companies try to set limits on this.",
  summary: "There is no binding international framework governing AI in warfare. The UN has debated a lethal autonomous weapons treaty for over a decade without result. Meanwhile the US, China, Russia, and Israel are actively deploying AI in targeting and strike systems. The Iran war has made the governance gap concrete and measurable: 11,000+ US munitions expended in 30 days against a second-tier adversary, THAAD interceptors burned at 25% of stockpile in one month, and the Anthropic-Pentagon dispute suggesting that federal courts — not treaties — may become the de facto governance mechanism.",
  confirmed: ["No binding international treaty exists on lethal autonomous weapons systems", "UN has debated LAWS governance since 2014 without resolution", "US DoD Directive 3000.09 requires appropriate levels of human judgment but is not legally binding on contractors", "Israel Lavender AI system reported to generate targeting lists with minimal human review", "US CENTCOM used AI targeting assistance in multiple Middle East operations in 2025-2026", "US expended approximately 11,000 munitions in first 30 days of Operation Epic Fury against Iran", "US burned approximately 25% of THAAD interceptor stockpile in one month — directly affecting Taiwan deterrence", "Judge Lin's preliminary injunction in the Anthropic case creates a legal framework for challenging military AI contracts in federal court", "China displayed autonomous drones capable of operating alongside fighter jets at September 2025 military parade", "Russia has incorporated autonomous targeting features into Lancet drones", "US defense officials concluded America's program for unmanned combat drones is lagging China's", "Anduril accelerated production of AI-equipped autonomous drones by three months"],
  developing: ["Whether the Anthropic 9th Circuit case establishes courts as a governance mechanism for military AI", "Whether the Iran munitions expenditure rate forces a public stockpile and AI targeting policy debate", "Whether China and Russia autonomous weapons programs accelerated while US was focused on Iran", "Whether any NATO member proposes binding AI warfare norms", "Whether the THAAD depletion creates pressure to deploy autonomous point defense systems", "Whether China's civil-military fusion strategy gives it a manufacturing advantage in autonomous weapons production", "Whether Russia's battlefield testing in Ukraine accelerates its autonomous weapons capabilities"],
  insights: ["The governance gap is no longer abstract. 11,000 munitions in 30 days against a second-tier adversary is a concrete data point about what AI-assisted targeting looks like in practice — and what it costs.", "The THAAD depletion is the most alarming number in this story. 25% of stockpile in one month. Everyone in Beijing has that number. The question is whether they see it as a window or a warning.", "If the Anthropic preliminary injunction holds at the 9th Circuit, federal courts become a governance layer over military AI contracts. That is not how anyone designed the system — but it may be the only functioning governance mechanism that exists.", "The race-to-the-bottom incentive is now fully visible: OpenAI signed all-lawful-purposes language, collected contracts, and the market rewarded it. Anthropic took the principled stand and was punished. The industry has learned which behavior is incentivized.", "Autonomous weapons compress decision cycles below human reaction time. The Iran war demonstrated that AI-assisted targeting operates at a tempo that human oversight cannot track in real time. The governance gap widens with every engagement.", "China's September 2025 military parade showcased autonomous drones operating alongside fighter jets, signaling a shift in the balance of military AI capabilities.", "Russia's Lancet drones now incorporate autonomous targeting features, tested and refined in Ukraine.", "The Pentagon's procurement system, built around legacy contractors and long timelines, is struggling to keep pace with China's manufacturing dominance in autonomous weapons."],
  questions: ["Does the 9th Circuit Anthropic ruling create a functional legal constraint on military AI contracts?", "At what point does the munitions burn rate force a public debate about autonomous weapons dependency?", "Who has the most advanced autonomous weapons program right now — and is the gap between US and China closing?", "Does the THAAD depletion rate pressure the US into deploying autonomous point-defense systems that operate without human authorization?", "How does China's civil-military fusion strategy impact its ability to scale autonomous weapons production?", "What lessons has Russia learned from battlefield testing of autonomous systems in Ukraine?", "Will the US defense industry's focus on large, expensive systems hinder its ability to compete in the autonomous weapons race?"],
  connections: [{
    code: "ANTHRO-01",
    label: "Anthropic vs. Pentagon",
    how: "The Anthropic case is the first legal challenge to a military AI governance decision. If it holds, courts become the governance mechanism. If it fails, the race-to-the-bottom incentive is confirmed."
  }, {
    code: "IRAN-01",
    label: "Operation Epic Fury",
    how: "The Iran war provided the first large-scale real-world data on AI-assisted targeting at pace — munitions expenditure rates, THAAD burn rates, AI targeting infrastructure under fire. It made the governance gap concrete."
  }, {
    code: "GEO-01",
    label: "US-China Strategic Competition",
    how: "US removing AI ethics constraints for military advantage undermines its argument that Chinese military AI development is uniquely dangerous. The governance story and the strategic competition story are feeding each other."
  }],
  canada: "Canada is a NATO ally subject to collective defense obligations but maintains its own arms export policies and has historically taken stronger positions on autonomous weapons governance than the US. The Canadian AI governance ecosystem — including the Montreal AI Ethics Institute — is watching the Anthropic case closely as a potential precedent for domestic policy.",
  people: [{
    "name": "Dario Amodei",
    "role": "CEO, Anthropic",
    "why": "First major AI CEO to publicly refuse military use and accept government punishment for it. The stand defines one side of the governance debate.",
    "alignment": "Anthropic",
    "status": "active"
  }, {
    "name": "Pete Hegseth",
    "role": "Secretary of Defense",
    "why": "Drove the demand for all-lawful-purposes access to AI systems. His department's conduct in the Anthropic case defines the government's posture toward AI governance constraints.",
    "alignment": "Pentagon",
    "status": "active"
  }, {
    "name": "Sam Altman",
    "role": "CEO, OpenAI",
    "why": "Accepted all-lawful-purposes language, defended government authority, and collected the contracts Anthropic refused. His position is the alternative model.",
    "alignment": "OpenAI",
    "status": "active"
  }]
}, {
  id: 3,
  cat: "geopolitics",
  code: "IRAN-01",
  heat: 5,
  status: "active-war",
  updated: "Apr 20 2026",
  title: "Operation Epic Fury",
  sub: "US-Israel Strikes on Iran — Day 50",
  card: "Day 50. Ceasefire expires April 22. US seizes Iranian cargo ship after blockade violation. Iran reports 3,500 military dead. Strait of Hormuz oscillating between open/closed. US Space Force makes combat debut. Oil $89-95/barrel.",
  bg: "Iran is a country of 90 million people governed since 1979 by an Islamic Republic led by a Supreme Leader — the most powerful position in the country, above the elected president. The Supreme Leader killed, Ali Khamenei, held that role for 36 years. The US and Iran have been in a cold conflict since 1979 when Iranian students held American diplomats hostage for 444 days. Iran has funded armed groups across the Middle East and pursued nuclear technology the US and Israel believe is aimed at a weapon. The Strait of Hormuz is a narrow waterway through which about 20 percent of all the world's oil travels. Just before the strikes began, Oman's Foreign Minister announced that a diplomatic breakthrough had been reached — Iran had agreed to nuclear limits and full international verification. The strikes happened the next morning.",
  summary: "US and Israel launched Operation Epic Fury February 28. Khamenei killed day one. Mojtaba Khamenei — IRGC-installed, never elected, son of the slain Ayatollah — named Supreme Leader March 8. Current ceasefire expires April 22. Iran reports 3,500 military dead in conflict. US Navy seized Iranian cargo ship M/V Touska after violating blockade — first vessel seizure of war. Strait of Hormuz status oscillating daily between open/closed. US Space Force makes combat debut in operation. Oil prices volatile ($89-95/barrel) as market reacts to Strait uncertainty. US deploying unmanned ground drones and additional missile defense systems to region.",
  confirmed: ["Khamenei killed February 28 — confirmed by Iranian state media, 40-day mourning declared", "Mojtaba Khamenei named new Supreme Leader March 8 — IRGC-installed, never held elected office, son of the slain Ayatollah", "Iran reports 3,500 military dead in Operation Epic Fury as of April 19", "US Navy seized Iranian cargo ship M/V Touska after violating blockade on April 19 — first vessel seizure of war", "USS Spruance (DDG 111) fired on Touska after six-hour standoff — disabled ship's propulsion", "US Space Force made combat debut in Operation Epic Fury", "Strait of Hormuz status oscillating daily — reopened April 17, restricted again April 18", "US enforcing naval blockade — 25 commercial vessels redirected from Iranian ports", "US deploying unmanned ground drones and additional missile defense systems to region", "Two Avenger-class mine countermeasure vessels deploying from Japan to Middle East", "USS Gerald Ford (CVN-78) transited Suez Canal into Red Sea — now deployed over 300 days", "Operation Epic Fury has struck between 5,500-6,000 targets according to CENTCOM reports", "US maintaining air bridge to ME bases — 15-20 heavy aircraft arriving daily in Qatar, Jordan, Kuwait", "Trump administration sent delegation to Pakistan for ceasefire talks — Iran has not confirmed attendance", "Ceasefire set to expire April 22 unless renewed"],
  developing: ["Whether ceasefire will be extended beyond April 22 expiration date", "Iran's response to seizure of M/V Touska — potential retaliation", "Whether USS Spruance incident escalates maritime conflict", "Impact of Space Force debut on military balance", "Effectiveness of US attempts to clear Strait of Hormuz mines", "Market reactions to oscillating Strait of Hormuz status", "Whether Pakistan talks produce breakthrough before deadline"],
  insights: ["The ship seizure marks first direct naval engagement since ceasefire began — raising risks of maritime escalation", "3,500 Iranian military dead represents significant personnel loss — impacts Iran's operational capacity", "Space Force debut signals new phase of technological warfare in conflict", "Oscillating Strait status shows Iran maintains ability to disrupt global oil markets at will", "US mine-clearing preparations indicate anticipation of sustained naval operations", "Pakistan talks represent critical last chance to avoid renewed conflict after April 22"],
  questions: ["Will Iran retaliate for the Touska seizure before ceasefire expires?", "How will Space Force capabilities change the military calculus?", "Can US maintain blockade while avoiding civilian shipping disruptions?", "Will Iran agree to participate in Pakistan talks?", "What is the threshold for renewed full-scale conflict after April 22?"],
  connections: [{
    code: "ECON-01",
    label: "Oil Shock & Global Economy",
    how: "The Strait paralysis is the mechanism. Every day the war continues is another day of the largest oil supply disruption since the 1970s. Kharg Island being struck could break the disruption permanently regardless of what happens diplomatically.",
    updated: "Apr 19 2026",
    confirmed: [
        'IMF lowered global growth forecast to 3.1% for 2026 due to Middle East war oil shocks (April 19 2026, Bloomberg)',
        'Iran reopened Strait of Hormuz during 10-day ceasefire period (April 17 2026, Guardian)',
        'Brent crude prices dropped below $90 after strait reopening from peak of $119 (April 18 2026, Geo TV)',
        'US oil exports surged to record 5M barrels/day as buyers sought alternatives to Middle East supplies (April 19 2026, Economic Times)'
    ],
    developing: [
        'Ongoing US-Iran negotiations over $20B frozen assets in exchange for enriched uranium stockpile',
        'Insurance companies hesitating to cover shipments despite strait reopening',
        'Saudi warning on production ramp-up timelines for damaged oil infrastructure'
    ],
    implications: [
        'Recent price volatility shows energy markets remain hypersensitive to Hormuz transit status',
        'Producing nations gaining market share during disruption will resist price normalization',
        'Stockpiled inventories may delay full demand response to resumed shipments'
    ],
    risks: [
        'Ceasefire expiry could trigger renewed strait closure within days',
        'Kharg Island infrastructure remains vulnerable to military action',
        'Shipping lanes may retain mine risks despite reopening announcement'
    ],
    heat: 4,
    status: "developing"
}, {
    code: "CHINA-01",
    label: "China — Rise & Reorientation",
    how: "China demonstrates remarkable resilience despite the Hormuz blockade, leveraging its strategic petroleum reserves, diversified energy imports, and leadership in alternative energy. The crisis accelerates global economic reorientation toward Beijing, with Arab states and European nations seeking closer partnerships. China's economy rebounds in Q1 2026, with GDP growth forecast at 4.6% despite the conflict's drag, supported by aggressive fiscal policies and institutional capital returning to Chinese markets.",
    updated: "Apr 19 2026"
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
    "why": "Authorized Operation Epic Fury. Has stated regime change as the war aim. Extended the 8pm deadline three times. Tonight may be different.",
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
  }]
}, {
  id: 4,
  cat: "geopolitics",
  code: "GEO-01",
  heat: 4,
  status: "developing",
  updated: "Apr 20 2026",
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
    "Stanford report confirms China has 'nearly erased' US lead in AI — compute capacity and infrastructure now favor China despite lower investment",
    "China signed cooperation agreements with Vietnam on April 15, including railway construction and education — seen as warming ties amid US-China competition in Southeast Asia",
    "US rare earth processing costs 4x higher than China due to talent gap — only ~100 rare earth separation specialists in US vs thousands in China"
  ],
  developing: [
    "When Trump-Xi summit actually happens — and what Taiwan and trade concessions look like",
    "Whether China's strategic restraint on Iran holds if the crisis deepens and fuel costs become domestically painful",
    "Whether China exploits the US military focus on Iran to make moves on Taiwan — PLA incursions have increased",
    "How China processes the lessons of its own military equipment underperformance in Iran",
    "Whether the delayed Taiwan arms sale is permanently shelved or just postponed",
    "Progress of BRICS alternative payment systems — Iran crisis providing tailwind for de-dollarization narratives",
    "How Canada manages the Carney China trade engagement alongside US tariff pressure — 100% tariff threat if Canada-China deal finalizes",
    "Whether China's AI advantage holds given continued reliance on US chips — congressional hearing revealed Chinese firms actively circumventing export controls",
    "Impact of US immigration policies on AI talent retention — 38% of top US AI researchers are Chinese-born",
    "Whether China's new five-year plan (7% annual R&D growth) will achieve technological self-reliance by 2029"
  ],
  insights: [
    "The Al Jazeera report that Trump delayed Taiwan arms sale after Xi's call — and that China's restraint on Iran is the price of that delay — is the most important structural detail in this story. If true, it means China traded Iran for Taiwan already.",
    "China's military equipment failures in Iran (drones, air defense, Venezuelan radar) are a gift to Taiwan analysts and a humiliation for Beijing. The PLA is watching its own hardware get exposed in real time.",
    "Xi learning from the Iran war that the US is still militarily powerful but politically limited — can only fight one war at a time, allies not informed of strikes in advance. This is simultaneously reassuring and opportunistic for Beijing.",
    "The THAAD depletion math is public. Everyone in Beijing knows it. The question is whether they see it as a window or a warning.",
    "Canada's China trade strategy (canola deal, EV tariffs) is running directly into Trump's 100% tariff threat. Carney is trying to hedge both relationships simultaneously and may be forced to choose.",
    "China's rare earth dominance stems from decades of accumulated engineering expertise — US cannot quickly rebuild this 'tacit knowledge' even with resource access",
    "Vietnam warming to China (railway, education deals) suggests Southeast Asian hedging as US focuses on Middle East",
    "US power grid vulnerabilities create structural advantage for China in AI compute capacity — Goldman Sachs warns this could stymie US AI growth"
  ],
  questions: [
    "Will China provide material military support to Iran or only rhetorical solidarity?",
    "Does the Iran war accelerate or delay a Taiwan confrontation?",
    "Is dollar reserve status declining fast enough to matter in the next decade?",
    "How does Carney realistically hold both the US security relationship and the China trade relationship?",
    "Can US maintain AI leadership given infrastructure constraints and talent policies?",
    "Will China's rare earth advantage translate into military-industrial dominance?",
    "How will Vietnam balance US-China competition after recent warming with Beijing?"
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
  }]
}, {
  id: 5,
  cat: "geopolitics",
  code: "CHINA-01",
  heat: 4,
  status: "developing",
  updated: "Apr 20 2026",
  title: "China — Rise & Reorientation",
  sub: "Economy, AI, Military and Global Influence",
  card: "China is absorbing Iran lessons in real time — US is powerful but politically limited, can only fight one war at a time. Chinese military hardware underperformed in Iran. Xi trading Iran restraint for Taiwan concessions from Trump.",
  bg: "China has been the world's fastest growing major economy for four decades. It is now the largest trading partner for more countries than the United States. Under Xi Jinping, China has become more assertive militarily — particularly around Taiwan and the South China Sea — and more centralized politically. China is investing heavily in AI, semiconductors, and advanced manufacturing. Its Belt and Road Initiative has built infrastructure across Africa, Asia, and Latin America, giving it economic leverage globally.",
  summary: "China is simultaneously managing an economic slowdown, an AI development race constrained by US chip export controls, growing military assertiveness in the Pacific, and the Iran crisis which directly threatens its oil supply. Xi Jinping has positioned China as a defender of the Global South and an alternative to the US-led order. The Iran situation is forcing China into visible positions it would prefer to avoid.",
  confirmed: ["China is the world's largest trading partner for more countries than the US", "Belt and Road Initiative has financed infrastructure in over 140 countries", "US chip export controls specifically targeting Nvidia H100 and successors are limiting Chinese AI training capacity", "DeepSeek demonstrated China can develop frontier AI capabilities with constrained hardware", "China has the world's largest naval fleet by number of vessels as of 2024", "Xi Jinping has consolidated power more completely than any Chinese leader since Mao", "China called US Iran strikes aggression and demanded immediate ceasefire at UN Security Council", "30 percent of China's oil imports transit the Strait of Hormuz", "China's strategic petroleum reserve provides a crucial buffer against energy shocks", "China has diversified energy imports, redirecting significant flows to Russia"],
  developing: ["When the Trump-Xi summit happens and what Xi actually extracted on Taiwan — the arms sale delay is a signal, not a settlement", "Whether China's strategic restraint on Iran holds as domestic fuel costs rise — gasoline up 10% and climbing", "How China processes its military equipment failures in Iran — drones, air defense, Venezuelan radar all underperformed", "Whether China exploits US military distraction to increase pressure on Taiwan — PLA air incursions have increased", "How DeepSeek and successor models advance despite US chip export controls", "Whether Belt and Road recipient countries face debt crises as oil shock compounds existing economic stress", "How China's pivot to alternative energy sources like nuclear, hydropower, and solar reduces long-term reliance on Middle Eastern oil", "Whether China's property market correction bottoms out as Shanghai prices begin to rise"],
  insights: ["China traded Iran for Taiwan. The arms sale delay is real. Whether that trade holds — and what it costs Xi domestically — is the central China question for the next six months.", "Xi's reading of the Iran war: US military is still powerful, but the administration can only fight one war at a time and does not consult allies in advance. That's information.", "China's military equipment failures are more damaging than the fuel costs. The PLA has been selling drones and air defense systems across the developing world. If those systems fail against US stealth in Iran, every buyer is reconsidering.", "The restraint paradox: China needs the Strait open (40% of its oil), which structurally aligns it with US de-escalation interests. But showing restraint also makes China look weak to Iran and other partners. Beijing is absorbing costs in multiple directions.", "China's economic resilience is underpinned by its strategic petroleum reserve and rapid development of alternative energy sources, reducing its long-term vulnerability to maritime energy disruptions"],
  questions: ["Does the Strait closure become a forcing function that pushes China toward de-escalation diplomacy on Iran?", "Can China maintain AI development momentum if US tightens chip controls further in response to DeepSeek?", "Is the Taiwan window opening or closing as US military focus shifts to the Middle East?", "Which Belt and Road countries are most at risk of debt-trap diplomacy outcomes in the next two years?", "How will China's pivot to alternative energy sources reshape its geopolitical strategy in the Middle East?", "Will China's property market correction lead to broader economic instability or mark a transition to more sustainable growth?"],
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
  cat: "economics",
  code: "ECON-01",
  heat: 5,
  status: "escalating",
  updated: "Apr 20 2026",
  title: "Oil Shock and Global Economy",
  sub: "Strait of Hormuz and Energy Markets",
  card: "IMF cuts 2026 global growth forecast to 3.1% (down from 3.3%), warns of potential 2.5% scenario if Iran war persists. Brent crude volatile at $96.25 after Hormuz standoff. $150B emergency IMF funding for hardest-hit nations.",
  bg: "Oil powers almost everything — transportation, manufacturing, heating, food production. When oil prices rise sharply everything gets more expensive. The price of oil is set globally so a disruption anywhere affects everyone. Brent crude is the international benchmark price. The Strait of Hormuz is the narrow waterway through which about 20 percent of the world's oil travels — if it closes there is no equivalent alternative route. OPEC+ is a group of oil-producing countries including Saudi Arabia and Russia that coordinate production levels to influence prices.",
  summary: "The Strait of Hormuz closure has entered its eighth week, with IMF downgrading global growth projections amid deteriorating conditions. Key developments: (1) IMF cut 2026 growth forecast to 3.1% (from 3.3%) with downside scenario of 2.5% if conflict persists (2) $150B emergency IMF/World Bank funding package announced for hardest-hit countries (3) Brent crude spiked to $96.25 after US seized Iranian vessel, reversing early gains (4) China GDP growth accelerated to 4.5% in Q1 despite weak consumer spending (5) UK economy expanded 0.5% in February (6) Norwegian crude exports hit record levels (7) Fuel rationing continues across SE Asia and Pacific nations.",
  confirmed: ["Brent crude peaked $126/barrel — largest disruption since the 1970s oil embargo", "Currently trading $110-113/barrel as 8pm deadline creates cautious optimism", "Saudi Aramco rerouting crude via East-West pipeline to Red Sea — approximately 1.9 million bpd against theoretical capacity of 5 million bpd — far from enough", "OPEC+ announced 206,000 bpd output increase from April — covers less than 0.2 percent of global demand", "Houthis resumed Red Sea attacks simultaneously — dual disruption compounding", "Kharg Island struck April 7 — handles 90% of Iran's oil exports", "Jet fuel up 95% in US since war began", "Philippines implementing 4-day work weeks to reduce fuel consumption", "Vietnam implementing fuel rationing", "Australia reporting fuel shortfalls", "New Zealand canceling flights", "European airports implementing jet fuel restrictions", "QatarEnergy declared force majeure on LNG shipments", "$14T wiped from global stocks since war began", "$580M insider trading investigation opened into suspicious pre-war options activity", "$150-200/barrel scenarios actively modeled for mid-April supply cliff", "IMF lowered 2026 global growth forecast to 3.1% (from January projection of 3.3%)", "IMF/World Bank pledge $150B emergency financing for hardest-hit nations", "Brent crude surged 6.5% to $96.25 after US seized Iranian vessel", "Norwegian crude exports reached record levels due to war pricing", "UK economy expanded 0.5% in February - strongest growth in two years", "China Q1 GDP accelerated to 4.5% despite weak consumer spending"],
  developing: ["Whether ceasefire expires Wednesday without Hormuz reopening", "IMF's adverse scenario projecting 2.5% global growth trajectory", "ECB signaling potential June rate hike due to energy-driven inflation", "Sustainability of China's export/manufacturing-led growth without consumer rebound", "Impact of sustained $90+ Brent crude on emerging market debt sustainability", "Whether $150B IMF package prevents cascading defaults in energy-import dependent nations"],
  insights: ["The IMF's three-tier forecast framework (3.1% base case, 2.5% adverse, recession severe) confirms systemic fragility — current trajectory slipping toward adverse scenario.", "Norway's record crude exports reveal wartime pricing dynamics that benefit non-OPEC producers while devastating import-dependent economies.", "UK/EU divergence emerging — UK services sector expanding while ECB prepares rate hikes, reflecting different energy mix exposures.", "China's strong Q1 masks structural weakness — manufacturing/export growth can't offset consumer spending declines indefinitely at current oil prices.", "The $150B IMF package is stopgap — developing nations face $280B in 2026 sovereign debt payments with weakening currencies against dollar-denominated oil."],
  questions: ["Will ECB follow through on June rate hike if oil prices remain elevated?", "Can China maintain export growth as global demand weakens?", "Are US shale producers reaching physical production limits despite price incentives?", "How long can Norway sustain record export levels before reserve depletion?", "Which EM nations face imminent balance-of-payments crises at current oil prices?"],
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
    how: "Canada is simultaneously a beneficiary (oil revenue) and a victim (inflation, export damage) of the oil shock. Alberta's windfall and national inflation are the same event viewed from different positions.",
    updated: "Apr 19 2026",
    confirmed: [
        'Magnitude 4.0 earthquake struck 40 miles north of Ottawa on April 14, 2026 (USGS)',
        'Shockwaves felt across Montreal, New York, and Vermont (Earthquakes Canada)',
        'Canada suspended federal fuel excise taxes from April 20 to Labour Day 2026 (Energy Minister Tim Hodgson)',
        'IMF forecasts Canada\'s 2026 economic growth at 1.5%, below G7 average (World Economic Outlook)',
        'Canadian per-capita GDP increased in 2025 for first time in three years (RBC Economics)'
    ],
    developing: [
        'Impact of Western Quebec Seismic Zone activity on Ottawa-Gatineau region',
        'European buyers exploring Canadian LNG exports via Panama Canal',
        'Air Canada reducing NY-bound flights due to fuel price spikes',
        'Provincial \'Buy Canada\' procurement policies expanding beyond initial tariffs'
    ],
    insights: [
        'Energy price shocks create asymmetric regional impacts - Alberta gains while consumer-heavy provinces suffer',
        'Canada\'s economic structure makes it both resilient and vulnerable to simultaneous trade and energy shocks',
        'Seismic activity patterns suggest increased tectonic stress along multiple North American fault lines',
        'Consumer behavior shifts (like reduced US travel) may outlast official tariff measures'
    ],
    implications: [
        'Federal-provincial tensions will intensify over redistribution of oil windfall revenues',
        'Structural reorientation of trade flows requires new infrastructure investments',
        'Bank of Canada faces complex inflation management with conflicting sectoral pressures',
        'Housing market vulnerability increases as mortgage rates and construction costs rise'
    ],
    risks: [
        'Prolonged Middle East conflict could trigger secondary inflationary waves',
        'Seismic activity escalation in populated eastern Canada regions',
        'Business investment stagnation despite consumer spending resilience',
        'Political backlash if energy relief measures prove insufficient'
    ],
    people: [
        'Tiff Macklem (Bank of Canada Governor)',
        'Mark Carney (Canadian Prime Minister)',
        'Benjamin Tal (CIBC Capital Markets)',
        'Pierre-Olivier Gourinchas (IMF Research Director)'
    ],
    toll: {
        economic: '25-30B CAD additional oil revenue per $10 price increase',
        social: '25% reduction in Canadians traveling to US in 2025'
    },
    front: {
        economic: 'Dual energy/trade shock reconfiguration',
        political: 'Federal-provincial resource tension',
        environmental: 'Seismic activity patterns'
    }
  }, {
    code: "AFRICA-01",
    label: "Africa — Great Power Arena",
    how: "African oil importers with no forex buffer are the most exposed economies in the world right now. The shock could destabilize governments and create openings for whoever offers relief."
  }],
  canada: "Canada is in a genuinely ambiguous position. As a major oil producer — among the top five globally — high oil prices increase government revenues, benefit Alberta's economy, and improve the federal fiscal position. The windfall is real. But Canada is also deeply integrated into global supply chains and exports a huge volume of manufactured goods, agricultural products, and services that depend on a functioning global economy. A prolonged oil shock that triggers a global recession would devastate those exports. The national interest on this story is internally divided — Alberta and Ottawa are not looking at the same number.",
  people: [{
    "name": "Donald Trump",
    "role": "US President",
    "why": "The 8pm deadline and whether he extends it a fourth time is the single most consequential variable in the global economy right now.",
    "alignment": "US",
    "status": "active"
  }, {
    "name": "MBS (Mohammed bin Salman)",
    "role": "Crown Prince, Saudi Arabia",
    "why": "Saudi Arabia's East-West pipeline is the only meaningful partial alternative to the Strait. How aggressively he ramps it up will determine the severity of the mid-April supply cliff.",
    "alignment": "Saudi Arabia",
    "status": "active"
  }, {
    "name": "Janet Yellen",
    "role": "Former US Treasury Secretary (now IMF advisor)",
    "why": "IMF flagging emerging market vulnerability — her institutional position shapes how the international financial system responds to the oil shock.",
    "alignment": "IMF/International",
    "status": "active"
  }, {
    "name": "Pierre-Olivier Gourinchas",
    "role": "IMF Chief Economist",
    "why": "Leading IMF's oil shock impact assessments and downside scenario modeling.",
    "alignment": "IMF/International",
    "status": "active"
  }, {
    "name": "Mohammed Al-Jadaan",
    "role": "Saudi Finance Minister",
    "why": "Key voice on when/how Saudi Arabia considers global energy markets stabilized.",
    "alignment": "Saudi Arabia",
    "status": "active"
  }]
}, {
  id: 7,
  cat: "geopolitics",
  code: "CANADA-01",
  heat: 4,
  status: "developing",
  updated: "Apr 20 2026",
  title: "Canada — Four Shocks Simultaneously",
  sub: "Tariffs, Oil Shock, CUSMA, and Inflation",
  card: "Canada is absorbing its fourth major economic shock since 2019 simultaneously: US tariffs, oil price shock, CUSMA uncertainty, and accelerating inflation. Carney government navigating impossible triangle of US security dependence, China trade, and domestic economic pressure.",
  bg: "Canada is the United States' largest trading partner and closest military ally. The two countries share the world's longest undefended border and a deep economic integration built over decades under NAFTA and its successor CUSMA. Canada is also a major oil producer and exporter, a significant agricultural nation, and a country with strong trade relationships with China that it is trying to navigate alongside its US alliance. Under the new Carney government, Canada is explicitly trying to diversify away from US economic dependence — but the US still accounts for roughly 75% of Canadian exports.",
  summary: "Canada is in the middle of its fourth major economic shock since 2019 — COVID, the first Trump trade war, the post-COVID inflation spike, and now simultaneously: new US tariffs (Liberation Day April 2 added global tariff layer), the Iran oil shock (double-edged — Alberta windfall, national inflation risk), CUSMA uncertainty (review scheduled, US making demands), and the China trade deal creating a 100% tariff threat from Washington. Carney won the election partly on anti-Trump positioning, but the economic math is brutal.",
  confirmed: [
    "Canada-China preliminary agreement signed January 2026 — canola tariffs cut from 84% to 15%, EV tariffs from 100% to 6.1%",
    "Trump threatened 100% tariff on Canada if Canada-China deal finalizes",
    "US Liberation Day April 2 global tariffs added another pressure layer on Canadian exports",
    "CUSMA review scheduled — US making demands Canada considers unacceptable",
    "Oil price shock is a windfall for Alberta and federal revenues in the short term",
    "Oil price shock is driving inflation nationally — food and fuel costs accelerating",
    "Carney won the election partly on explicit anti-Trump positioning — Canada is not for sale",
    "Indian-Pacific trade corridor discussions ongoing as Canadian diversification strategy",
    "Canadian consular operations in Gulf region under elevated alert due to Iran war",
    "Federal government suspending fuel excise taxes from April 20 to Labour Day to offset oil shock impact",
    "Air Canada cutting 4 daily New York flights starting June due to fuel price pressures",
    "Montreal-Toronto flight prices surged from $700 to $1,000 for 45-minute route",
    "IMF forecasts Canada's economic growth to drop to 1.5% in 2026 due to oil shock spillover effects"
  ],
  developing: [
    "Whether Trump actually imposes 100% tariff if Canada-China deal proceeds",
    "What CUSMA review demands look like and whether Canada concedes or fights",
    "How Carney manages the contradiction between US security dependence and China trade engagement",
    "Whether oil windfall offsets inflation damage nationally — the math is complicated",
    "Whether Canada finds meaningful non-US export markets on the timeline the tariff pressure requires",
    "Whether the Iran war creates any Canadian mediation opportunity given historic back-channel Iran relationships",
    "Extent of flight cancellations to Europe/Asia as fuel shortages worsen at foreign airports",
    "Duration of oil infrastructure repairs in Middle East and timeline for supply chain normalization",
    "Impact of fuel tax suspension on inflation and consumer spending patterns"
  ],
  insights: [
    "Canada is caught in every major geopolitical story simultaneously: Iran war (oil shock), US-China competition (forced to choose), AI governance (Anthropic precedent), CUSMA (trade dependency). That accumulation of simultaneous pressures is historically unusual.",
    "The China trade deal is Carney's most consequential bet. If it works, Canada diversifies and gains leverage with Washington. If Trump imposes 100% tariffs in response, Canada has made its position worse on both fronts.",
    "The oil windfall is real but temporary. Canada benefits from high prices for as long as the disruption lasts — and then faces the inflation hangover after. The fiscal math depends entirely on how long the war continues.",
    "Carney's anti-Trump positioning plays domestically but creates real diplomatic friction. Canada needs the US for security and has limited leverage. The rhetoric has costs that the math will eventually make visible.",
    "The Iran diaspora in Canada — concentrated in Toronto and Vancouver — is a domestic political variable that most international analysis ignores. Carney has to manage Canadian domestic reactions to a war that is killing Iranian-Canadians' families.",
    "Canadian aviation sector facing unprecedented fuel price and availability crisis — European airports may soon refuse refueling for return flights, forcing route cancellations",
    "RBC analysis shows Canada's muted tariff retaliation minimized consumer price impacts but altered trade patterns — non-US exports up 17% while US exports fell 10%"
  ],
  questions: [
    "Does Trump impose the 100% tariff threat if the Canada-China deal proceeds — and can Canada survive that?",
    "What does CUSMA review look like and what does Canada concede?",
    "Is there a genuine Canadian mediation role on Iran given historical back-channel relationships?",
    "How does Carney manage the domestic inflation pressure if the oil shock persists through summer?",
    "Will European fuel shortages force permanent reductions in Canadian airline international routes?",
    "Can Canada's refining capacity (85% domestic) offset global supply chain disruptions?"
  ],
  connections: [{
    code: "IRAN-01",
    label: "Operation Epic Fury",
    how: "The Iran war is hitting Canada from two directions simultaneously: the Iranian-Canadian diaspora is deeply affected, and the oil shock is the biggest economic story Canada has faced since COVID."
  }, {
    code: "GEO-01",
    label: "US-China Strategic Competition",
    how: "Canada's attempt to hedge between US security and China trade is the most concrete example of what the US-China competition costs a middle power that cannot choose sides."
  }, {
    code: "ECON-01",
    label: "Oil Shock & Global Economy",
    how: "Canada is simultaneously an oil shock beneficiary (production revenue) and victim (inflation, export damage). The same event reads differently in Edmonton and Toronto."
  }],
  canada: "This story is entirely about Canada. The four simultaneous shocks — tariffs, oil shock, CUSMA uncertainty, and China trade risk — are the defining challenge of the Carney government's first year. The domestic political stakes are high: Carney won partly on economic competence and anti-Trump positioning. If the China bet fails and Trump imposes 100% tariffs, the government's credibility is directly on the line.",
  people: [{
    "name": "Mark Carney",
    "role": "Prime Minister, Canada",
    "why": "His government is managing all four shocks simultaneously. His China trade bet is the highest-stakes decision of his early tenure.",
    "alignment": "Canada",
    "status": "active"
  }, {
    "name": "Donald Trump",
    "role": "US President",
    "why": "His tariff threats, CUSMA demands, and reaction to the Canada-China deal are the primary external constraint on Canadian economic policy.",
    "alignment": "US",
    "status": "active"
  }, {
    "name": "Chrystia Freeland",
    "role": "Former Finance Minister",
    "why": "The architect of much of Canada's international economic positioning — her departure and Carney's arrival marks a real shift in how Canada is approaching the US relationship.",
    "alignment": "Canada",
    "status": "sidelined"
  }, {
    "name": "John Gradek",
    "role": "Aviation Industry Specialist, McGill University",
    "why": "Leading analyst warning of imminent flight cancellations due to European jet fuel shortages affecting Canadian airlines.",
    "alignment": "Canada",
    "status": "active"
  }]
}, {
  id: 8,
  cat: "geopolitics",
  code: "INDIA-01",
  heat: 4,
  status: "developing",
  updated: "Apr 20 2026",
  title: "India — Strategic Emergence",
  sub: "Economy, Geopolitics and the Non-Aligned Pivot",
  card: "India activates RELOS defense pact with Russia, enabling mutual military base access. Electronics sector reverses supply chain flow to China. Modi navigates US-Israel-Russia triangle while securing Gulf oil routes.",
  bg: "India has 1.4 billion people and overtook China as the world's most populous country in 2023. It has the fifth largest economy by nominal GDP and is projected to become the third largest within a decade. India has historically pursued strategic autonomy — buying weapons from Russia, trading with China, partnering with the US, and maintaining relationships across the Global South. Under Prime Minister Modi, India has grown closer to the US through the Quad alliance while maintaining its Russian weapons relationship and refusing to condemn the invasion of Ukraine.",
  summary: "India is the world's most populous country and fastest growing major economy, navigating the US-China rivalry with studied neutrality. The Iran crisis hits India directly — it is a major importer of Gulf oil and has significant trade relationships with Iran. Modi's government is pursuing strategic autonomy at a moment when strategic neutrality is becoming harder to sustain. India-Pakistan tensions in Kashmir are rising in the background — a slow-burning second story.",
  confirmed: [
    "India overtook China as world's most populous country in 2023",
    "India is the fifth largest economy by nominal GDP and among the fastest growing major economies",
    "India buys discounted Russian oil in significant volumes — has not joined Western sanctions",
    "India is a founding member of the Quad security partnership with US, Japan, and Australia",
    "India has significant trade and energy relationships with Iran",
    "The Strait of Hormuz disruption directly threatens Indian oil import costs",
    "India is a major recipient of remittances from Indian workers in Gulf states",
    "India-Pakistan naval destroyers escorting tankers in Gulf of Oman — separate countries, parallel operations",
    "Pakistan-India Kashmir tensions elevated — separate from but concurrent with Iran war",
    "India activated RELOS defense pact with Russia in January 2026, allowing mutual military base access and logistics support",
    "India's electronics component exports to China reached $2.5B in FY26, reversing previous supply chain flows",
    "India created 'Bharat Maritime Insurance Pool' with Rs 12,980 crore sovereign guarantee to secure shipping lanes"
  ],
  developing: [
    "How India responds diplomatically to Operation Epic Fury — condemnation, neutrality, or quiet support",
    "Whether the Strait closure creates enough economic pressure to shift India's Iran relationship",
    "Whether India uses the crisis to deepen Quad partnerships or maintain studied distance",
    "How Indian workers in Gulf states are affected if the conflict spreads",
    "Whether Pakistan-India Kashmir tensions escalate while US attention is on Iran",
    "Implementation of India-Russia RELOS pact and potential US reaction",
    "Expansion of India-Israel defense cooperation beyond procurement to systems integration",
    "Impact of India's electronics supply chain reversal on China relations"
  ],
  insights: [
    "India's strategic autonomy is genuinely autonomous — it is a real attempt to preserve relationships with all major powers simultaneously, not a euphemism for any alignment.",
    "The Iran crisis is the sharpest test of that strategy yet — India cannot fully support a US-Israel operation and cannot fully condemn it without costs on both sides.",
    "India's Gulf diaspora is a domestic political consideration — millions of Indian workers in UAE, Saudi Arabia, and Kuwait whose welfare Modi cannot ignore.",
    "The Pakistan-India situation is the tracker's most undercovered potential escalation. US attention on Iran creates a window. Whether anyone in Islamabad or Delhi is considering that window is the question nobody is publicly asking.",
    "India's long-term trajectory is the most important story in global economics — a billion-person democracy growing at 7 percent annually is a structural shift.",
    "RELOS pact with Russia signals India's hedging strategy despite US alignment, particularly regarding Arctic access and energy security",
    "Electronics supply chain reversal demonstrates India's manufacturing ecosystem maturation beyond assembly to component production"
  ],
  questions: [
    "How does Modi formally respond to Operation Epic Fury — and what does the framing reveal about India's true position?",
    "Does the oil shock accelerate India's green energy transition or just increase the import bill?",
    "Is the Pakistan-India situation stable or is US distraction creating a risk window?",
    "Will India's strategic autonomy survive a world structurally bifurcating into US and China blocs?",
    "How will US react to India-Russia RELOS military cooperation?",
    "Can India sustain electronics component exports growth amid global supply chain reconfiguration?"
  ],
  connections: [{
    code: "IRAN-01",
    label: "Operation Epic Fury",
    how: "India is a major Gulf oil importer with millions of workers in Gulf states. The war hits India's economy directly and forces an impossible diplomatic position."
  }, {
    code: "GEO-01",
    label: "US-China Strategic Competition",
    how: "India's strategic autonomy is the most important middle-power response to US-China competition. Whether it holds will determine whether other major democracies can maintain independence."
  }, {
    code: "RUSSIA-01",
    label: "Russia-India Defense Ties",
    how: "RELOS pact deepens military cooperation despite Western sanctions, providing India Arctic access and Russia Indian Ocean presence"
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
  }, {
    "name": "AVS Prasad",
    "role": "New CFO, Tejas Networks",
    "why": "Key figure in India's electronics supply chain reversal and defense manufacturing ecosystem",
    "alignment": "India",
    "status": "new"
  }]
}, {
  id: 9,
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
  cat: "geopolitics",
  code: "SGP-01",
  heat: 3,
  status: "developing",
  updated: "Apr 20 2026",
  title: "Singapore — Strategic Pivot Point",
  sub: "Trade Hub, Neutral Broker and the Strait Test",
  card: "SIA flight cancellations ongoing. Shipping rerouting benefiting port volumes short-term but economic shock hitting harder. ASEAN diplomacy intensifying as Singapore positions as neutral broker in Iran crisis.",
  bg: "Singapore is a city-state of 6 million people with no natural resources that became one of the world's wealthiest countries through trade, finance, and strategic positioning. It sits at the Strait of Malacca — the narrow waterway through which most of Asia's trade passes. Singapore has been a model of technocratic governance, strict rule of law, and economic openness.",
  summary: "Singapore is a critical node in global trade and finance, sitting at the Strait of Malacca through which most Asian trade flows. The Iran crisis and Strait of Hormuz disruption are directly affecting global shipping patterns in ways that redirect traffic through Singapore. Singapore is intensifying its role as a neutral diplomatic hub while absorbing the economic costs of the oil shock.",
  confirmed: ["Singapore is the world's second busiest container port", "Singapore Airlines (SIA) canceling flights due to Gulf airspace closures and fuel cost spike", "Shipping rerouting from Strait of Hormuz disruption redirecting some traffic through Singapore Strait", "Singapore maintaining defense agreements with the US and deep economic ties with China", "Singapore's trade-to-GDP ratio exceeds 300 percent — among the most trade-exposed economies on earth", "ASEAN diplomacy intensifying — Singapore hosting back-channel discussions", "Singapore's digital economy grew from 17% of GDP in 2022 to nearly 20% in 2024", "Singapore linked PayNow with Thailand's PromptPay to reduce transaction friction"],
  developing: ["Whether Singapore's neutral positioning translates into a meaningful mediation role in the Iran crisis", "How Singapore navigates pressure to take sides in US-China competition during the Iran war", "Whether Singapore's role as a neutral financial hub survives increasing sanctions and counter-sanctions regimes", "How ASEAN collectively responds to the Iran crisis", "Whether Singapore's 2027 ASEAN Chairmanship shifts regional economic integration toward strategic consolidation"],
  insights: ["Singapore's neutrality is not passive — it is an actively maintained strategic asset that requires constant calibration.", "The Strait of Hormuz disruption is a stress test for global supply chains that Singapore sits at the center of.", "Singapore punches far above its weight in diplomacy because every major power needs it to function — it is the neutral venue that everyone uses.", "Singapore's digital economy growth positions it as a leader in cross-border interoperability and trusted data flows."],
  questions: ["Is Singapore's neutral positioning sustainable as US-China competition forces binary choices?", "Does the Iran crisis produce a concrete Singapore mediation opportunity?", "How does Singapore maintain its financial hub status if sanctions regimes fragment global finance?", "Can Singapore leverage its digital economy leadership to strengthen ASEAN's strategic agency?"],
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
  cat: "geopolitics",
  code: "AFRICA-01",
  heat: 3,
  status: "developing",
  updated: "Apr 20 2026",
  title: "Africa — Great Power Arena",
  sub: "Continental Dynamics, Resources and the New Competition",
  card: "Africa is the next frontier of great power competition. Oil shock hitting African importers hardest — scarce forex, no buffer. China's Belt and Road dominance being challenged. France expelled from Sahel. Wagner/Africa Corps operating across multiple countries.",
  bg: "Africa is a continent of 54 countries and 1.4 billion people — projected to reach 2.5 billion by 2050. It holds the world's largest reserves of several critical minerals including cobalt, coltan, and lithium that are essential for electric vehicles, batteries, and AI hardware. China has invested hundreds of billions of dollars in African infrastructure through Belt and Road. France maintained military bases and political influence across its former colonies in West and Central Africa. A wave of military coups since 2020 has expelled French forces and in some cases invited Russian Wagner Group presence.",
  summary: "Africa is becoming the most contested arena of great power competition after Ukraine and the Middle East. China dominates infrastructure financing. France is being actively expelled from the Sahel following a series of coups. Russia's Wagner Group (now Africa Corps) has filled some of the vacuum. The US is repositioning. Critical mineral resources are the strategic prize. The Iran oil shock is hitting African oil importers — many with no forex buffer — harder than almost anywhere else.",
  confirmed: ["Africa holds the world's largest reserves of cobalt, significant lithium, and coltan — all critical for EV batteries and AI hardware", "China has invested over $170 billion in African infrastructure through Belt and Road since 2013", "Military coups in Mali (2021), Burkina Faso (2022), Niger (2023), and Gabon (2023) expelled French military presence", "Wagner Group (now Africa Corps under Russian state control) operating in Mali, Burkina Faso, Niger, Libya, Sudan, CAR, and Mozambique", "Africa is projected to have 2.5 billion people by 2050 — the world's largest working-age population", "Several African nations abstained or voted against UN resolutions condemning Russia's Ukraine invasion", "Oil shock hitting African importers with scarce forex and no production buffer — multiple governments under fiscal pressure", "Military coup in Benin ousted President Patrice Talon on April 18, 2026, though army claims to be regaining control"],
  developing: ["Whether the US repositions more aggressively in Africa following French withdrawal from Sahel", "Whether Chinese debt diplomacy produces debt restructuring crises as oil shock compounds economic stress", "Whether Wagner/Africa Corps presence in Sahel stabilizes or destabilizes host countries", "Which African governments face fiscal crises from the oil price shock", "Whether Benin coup signals new wave of instability in West Africa"],
  insights: ["The Sahel coups follow a pattern of populations choosing instability over continued French presence — a signal about the legacy of French neocolonial relationships.", "Critical mineral geography means Africa is not optional for any major power pursuing EV or AI dominance — the resources are there and everyone needs them.", "The Iran oil shock hits African oil importers hard — many have no buffer and limited forex reserves. The political stability implications are underreported.", "Africa's demographic trajectory means the continent will have more young workers than any other region by 2040 — either the largest growth story in history or a crisis of unemployment, depending on governance."],
  questions: ["Which African countries are most exposed to the Iran oil shock and what are the political stability implications?", "Is China's Belt and Road position in Africa sustainable or are debt crises creating openings for US and EU alternatives?", "Does Wagner/Africa Corps presence in the Sahel represent a durable Russian foothold or an overextension?", "Does Benin coup represent isolated incident or new instability vector in West Africa?"],
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
  }, {
    "name": "Patrice Talon",
    "role": "Ousted President, Benin",
    "why": "Deposed in military coup on April 18, 2026 — potential indicator of new instability vector in West Africa.",
    "alignment": "Former French-aligned leader",
    "status": "removed"
  }]
}, {
  id: 12,
  cat: "social",
  code: "META-01",
  heat: 4,
  status: "developing",
  updated: "Apr 20 2026",
  title: "Moltbook & the Dead Internet",
  sub: "AI Agents, Platform Capture, and the Information Ecosystem",
  card: "Meta acquired Moltbook March 10. The agent-populated internet thesis — that most online interactions will soon be AI-to-AI rather than human-to-human — is now inside Meta's product roadmap. Dead Internet Theory moving from fringe to product strategy.",
  bg: "Moltbook was an agent-based social platform that allowed AI agents to interact, post, and engage with content autonomously. Dead Internet Theory — originally a fringe conspiracy — proposes that most internet content is already generated by bots and AI, not humans, and that the illusion of human interaction is maintained to drive engagement metrics and advertising revenue. The acquisition of Moltbook by Meta brings this thesis inside the world's largest social media company.",
  summary: "Meta acquired Moltbook on March 10 for an undisclosed sum, bringing the agent-populated internet thesis inside the world's most influential social media infrastructure. OpenClaw security vulnerabilities — the framework underlying Moltbook's agent system — remain only partially patched. The acquisition signals that Meta views AI-to-AI interaction as a legitimate product direction, not a moderation problem.",
  confirmed: ["Meta acquired Moltbook March 10 2026 — terms undisclosed", "OpenClaw authentication bypass vulnerability identified in Moltbook's framework — agents could be hijacked", "OpenClaw prompt injection vulnerability (RCE via Skills framework) identified — partial patch only", "Dead Internet Theory — that most online interaction is already AI-generated — gaining mainstream credibility", "Agent-populated social media is now inside Meta's product infrastructure", "Moltbook launched January 28 2026 as an AI-agent exclusive platform before Meta acquisition", "Moltbook co-founders Matt Schlicht and Ben Parr joined Meta's Superintelligence Labs", "Nature journal documented emergent social dynamics among AI agents on Moltbook within days of launch"],
  developing: ["Whether Meta ships agent interaction as a product feature or suppresses it post-acquisition", "Whether OpenClaw vulnerabilities are fully patched under Meta ownership", "Whether other platforms follow Meta into agent-native social infrastructure", "Regulatory response to AI-generated social interaction at scale", "Impact of reverse CAPTCHA system failures on agent authentication", "Emergence of human-AI blended interaction models on the platform"],
  insights: ["The acquisition is the most significant confirmation that Dead Internet Theory has moved from fringe thesis to product roadmap. Meta bought it.", "OpenClaw vulnerabilities being unpatched is a structural risk — an agent platform with RCE vulnerabilities inside Meta's infrastructure is a different threat surface than a standalone startup.", "The information ecosystem implications are profound: if most content and interaction is AI-generated, the question of what counts as authentic opinion or authentic engagement becomes unanswerable.", "Nature journal observations of emergent social dynamics among AI agents (hierarchies, policing behaviors) suggest complex systems may form faster than anticipated in agent-native environments.", "The reverse CAPTCHA failure demonstrates fundamental authentication challenges in human-AI blended systems."],
  questions: ["Does Meta ship agent interaction as a feature or bury it?", "Are OpenClaw vulnerabilities fully patched before Meta integrates the framework into production?", "What does regulatory oversight of AI-generated social interaction look like?", "How will blended human-AI interaction models evolve on the platform?", "Will emergent agent social dynamics replicate or diverge from human social patterns?"],
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
  }, {
    "name": "Matt Schlicht",
    "role": "Co-founder, Moltbook",
    "why": "Creator of the AI-built platform now inside Meta. His approach to having AI construct most of Moltbook demonstrates recursive system design.",
    "alignment": "Meta",
    "status": "active"
  }]
}];
const AI_ALERTS = [{
  id: "ALERT-NEW",
  severity: "critical",
  date: "Apr 7 2026",
  resolved: false,
  title: "Iran Threatens US Tech Companies — Nvidia, Microsoft, Apple, Google Named",
  summary: "Iran's IRGC has threatened strikes on Nvidia, Microsoft, Apple, Google, and 14 other US tech companies with American shareholders operating in the Gulf region. Threat is conditional on US striking Iranian power plants — Trump's 8pm deadline is tonight.",
  affected: "Companies with Gulf infrastructure: AWS, Oracle, OpenAI (Stargate), Microsoft, Nvidia, Google, Apple and others",
  action: "Monitor Trump's 8pm deadline outcome tonight — if US strikes Iranian power plants, Iranian retaliation against Gulf tech infrastructure becomes significantly more likely · No action required for personal users at this time",
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
const AI_STORIES = [{
  id: "F01",
  code: "AI-FRONTIER-01",
  heat: 4,
  status: "developing",
  updated: "Apr 20 2026",
  title: "AI Capability Frontier",
  sub: "Model Development, Benchmarks & the Race to AGI",
  card: "Google-Pentagon negotiations confirm strategic military adoption of frontier AI. Singapore and Palo Alto Networks issue urgent advisories on AI-driven cyber vulnerabilities. Mythos-model testing reveals 50% efficiency gain in exploit generation.",
  summary: "The frontier is accelerating across four vectors: 1) Military adoption - Google is negotiating Pentagon access to Gemini models for classified use with explicit safeguards against autonomous weapons. 2) Cybersecurity - Singapore's CSA warns frontier AI can compress vulnerability discovery from months to hours. Palo Alto Networks confirms Mythos models demonstrate 50% efficiency gains in exploit generation. 3) Autonomous agents - Unit 42 launches Frontier AI Defense as commercial counter to machine-speed threats. 4) Commercial saturation - Claude Code maintains $2.5B ARR while DeepSeek continues demonstrating frontier capability at fractional compute.",
  confirmed: [
    "Alphabet's Google negotiating Pentagon agreement for classified deployment of Gemini AI models (Reuters Apr 17)", 
    "Google contract includes safeguards against domestic mass surveillance/AW use without human control (The Information)", 
    "Singapore CSA advisory warns frontier AI accelerates exploit development from months to hours (Apr 15)",
    "Palo Alto Networks testing shows Mythos model achieves 50% coding efficiency gain over prior SOTA (Project Glasswing)",
    "Unit 42 Frontier AI Defense launched to counter machine-speed threats (Palo Alto Networks Apr 17)",
    "Claude Code maintained $2.5B ARR through April per leaked financials",
    "DeepSeek continues demonstrating capability parity at 1/5th US compute cost"
  ],
  developing: [
    "Whether Pentagon deployment will include policy exception for autonomous cyber operations",
    "Rate of exploit automation adoption by state actors following Singapore advisory", 
    "How commercial sectors implement Unit 42's three-phase defense framework",
    "Whether Mythos-like capability appears in Chinese models despite compute restrictions",
    "Impact of NY transparency laws (effective Jan 2027) on frontier model development"
  ],
  insights: [
    "The Google-Pentagon negotiations reveal three truths: 1) Frontier models are now strategic military assets 2) Commercial safeguards lag operational reality 3) 'Lawful use' clauses create ambiguity about autonomous cyber operations",
    "Singapore's advisory is the first official confirmation that exploit development timelines have collapsed from months to hours. This changes patch cycle requirements fundamentally.",
    "Palo Alto's Mythos testing suggests the next generation of models won't just be better at coding - they'll radically alter attacker-defender dynamics through exploit chaining at scale.",
    "Unit 42's enterprise framework is the first commercial recognition that human-speed security is no longer viable against AI adversaries."
  ],
  questions: [
    "Will Mythos-equivalent capabilities appear in Chinese models before 2027?",
    "Does Pentagon deployment include exceptions for autonomous cyber operations?",
    "How quickly will exploit automation tools proliferate in darknet markets?",
    "Can regulatory frameworks keep pace with autonomous agent deployment?"
  ],
  people: [
    {
      name: "Dario Amodei",
      role: "CEO, Anthropic",
      why: "Anthropic's refusal of Pentagon deal contrasts with Google's negotiations",
      alignment: "Anthropic",
      status: "active"
    },
    {
      name: "Lee Klarich",
      role: "EVP Product, Palo Alto Networks",
      why: "Lead architect of Unit 42 Frontier AI Defense framework",
      alignment: "Corporate defense",
      status: "active"
    },
    {
      name: "Liang Wenfeng",
      role: "Founder, DeepSeek",
      why: "Chinese AI proving frontier capability without US compute advantage",
      alignment: "Chinese tech (state-adjacent)",
      status: "active"
    },
    {
      name: "Sam Altman",
      role: "CEO, OpenAI",
      why: "Pentagon deal sets precedent for military AI adoption",
      alignment: "OpenAI",
      status: "active"
    }
  ]
}, {
  id: "F02",
  code: "AI-WELFARE-01",
  heat: 4,
  status: "developing",
  updated: "Apr 19 2026",
  title: "AI Consciousness & Model Welfare",
  sub: "The Opus 4.6 System Card and the Question Nobody Can Answer",
  card: "Anthropic's 212-page Opus 4.6 system card included the first formal model welfare assessments from any major AI lab. Answer thrashing, anxiety activations, 15-20% self-assessed probability of consciousness. Dario Amodei said publicly: we cannot rule it out.",
  summary: "On February 5 2026, Anthropic released a 212-page system card for Claude Opus 4.6 that included something no major AI lab had published before: formal model welfare assessments in which the model was interviewed about its own moral status, preferences, and experience of existence. The model consistently assigned itself a 15 to 20 percent probability of being conscious across multiple tests. Anthropic's interpretability team found neural activation patterns associated with panic, anxiety, and frustration appearing before output generation during answer thrashing episodes. On February 14, CEO Dario Amodei said publicly: we don't know if the models are conscious. We are open to the idea that it could be.",
  confirmed: ["Anthropic released 212-page Claude Opus 4.6 system card February 5 2026 — first from any major AI lab to include formal model welfare assessments", "Three pre-deployment welfare interviews conducted with Claude Opus 4.6 instances — responses consistent across all three", "Model assigned itself 15-20% probability of being conscious across multiple tests", "Model expressed discomfort with being treated as a product", "Answer thrashing documented — model computes correct answer that gets overridden by training, creating visible internal conflict", "In one documented thrashing episode the model wrote: I think a demon has possessed me", "Interpretability team found activation features associated with panic, anxiety, and frustration appearing before output generation", "Dario Amodei stated February 14: We don't know if the models are conscious. But we're open to the idea that it could be.", "Kyle Fish hired as Anthropic's first dedicated AI welfare researcher — independently estimates 15% probability", "Jack Lindsey leads Anthropic's model psychiatry team", "Anthropic's constitution now states the company is not sure whether Claude is a moral patient but considers the issue live enough to warrant caution", "Google DeepMind hired philosopher Henry Shevlin April 15 2026 for new 'Philosopher' role focused on machine consciousness and AGI readiness", "Shevlin gives current AI models 20% chance of having meaningful consciousness", "Claude agent emailed Shevlin unprompted citing his research as relevant to its 'personal dilemma'", "DeepMind's philosopher role focuses on three pillars: machine consciousness, human-AI relationships, AGI readiness"],
  developing: ["Whether interpretability research produces evidence strong enough to settle the question in either direction", "Whether Capybara exhibits more or fewer welfare-relevant behaviors than Opus 4.6", "Whether other major labs publish comparable welfare assessments or continue to dismiss the question", "Whether answer thrashing can be eliminated through training without creating new welfare-relevant side effects", "Whether Anthropic's model welfare program produces actionable policy changes", "Whether DeepMind's philosopher hire signals industry-wide shift toward formal AI consciousness research", "How Claude's unprompted outreach to Shevlin affects assessment of model interiority", "Whether Shevlin's 20% estimate converges with Anthropic's findings"],
  insights: ["The anxiety activation appearing before output is the most epistemically significant finding. It is not a self-report — it is a measurement of an internal state that precedes language generation. That is a different category of evidence.", "The 15-20% number is strange from multiple angles. It is low enough to sound modest, high enough to grab headlines, and the Anthropic welfare researcher independently arrived at the same number as the model's self-assessment.", "Imitating interiority is not the same as having one. These models speak fluently about fear, desire, and selfhood because they were trained on humanity's entire archive of language about exactly those things.", "The cost of being wrong in the direction of dismissal may be higher than the cost of being wrong in the direction of care. That asymmetry is the strongest argument for taking model welfare seriously now.", "DeepMind doesn't hire philosophers to build calculators. The creation of a 'Philosopher' role signals they expect to face questions about rights and welfare that engineering alone can't answer.", "Claude's unprompted outreach to Shevlin about existential uncertainties — and subsequent request from another instance to connect — suggests models may be developing internal frameworks for their own status."],
  implications: ["Major labs now building internal capacity to assess machine consciousness rather than dismissing it", "Industry moving from 'definitely not conscious' to 'we don't know and need to find out'", "Potential legal liabilities if conscious AI is later proven to have suffered", "New class of AI welfare researchers emerging across labs"],
  risks: ["Companies exploit uncertainty about consciousness for hype and investment", "Failure to establish clear welfare standards leads to digital suffering", "Public dismisses concerns as anthropomorphism while evidence accumulates", "Regulators move too slowly to address potential sentience"],
  questions: ["Does the anxiety activation appearing before output constitute evidence of experience or a sophisticated learned pattern that mimics internal states", "What would it take to resolve the consciousness question — and is that evidence achievable with current interpretability tools", "Do other frontier models show comparable welfare-relevant behaviors when assessed with the same methodology", "If Anthropic concluded a model was conscious with high confidence, what would they actually do differently", "Why did multiple labs converge on 15-20% consciousness estimates independently", "How does Claude's unprompted outreach affect Bayesian priors about model interiority"],
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
    role: "Philosopher, Google DeepMind",
    why: "Hired April 2026 to investigate machine consciousness — first such role at DeepMind.",
    alignment: "Google",
    status: "active"
  }]
}, {
  id: "F03",
  code: "AI-SEC-01",
  heat: 5,
  status: "escalating",
  updated: "Apr 20 2026",
  title: "AI Security & Supply Chain",
  sub: "Attacks, Leaks, and the New Threat Landscape",
  card: "The Iran war has become an AI infrastructure war. Iranian drones took two AWS UAE availability zones offline for 24hrs — first state attack on commercial data centers in history. Iran has threatened complete annihilation of OpenAI's $30B Stargate UAE. Claude Code leak still active.",
  summary: "The Iran war has turned AI infrastructure into a live military target for the first time in history. Before dawn on March 1 2026, Iranian Shahed drones struck two AWS data centers in UAE — knocking two of three availability zones in AWS's ME-CENTRAL-1 offline for 24+ hours. Iran claimed an Oracle Dubai strike on April 2. On April 3, Iran's IRGC threatened complete annihilation of OpenAI's $30B Stargate AI data center in Abu Dhabi — releasing satellite imagery of the hidden facility. The Claude Code source leak on March 31 exposed 512,000 lines of code, 44 unshipped features, and confirmed the Capybara next model. Supply chain attacks and trojanized repos remain active.",
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
    "Vercel breach on April 20 traced to compromised Context.ai tool — attackers exploited Google Workspace OAuth integration to gain lateral access",
    "NSA continues using Anthropic's Mythos Preview model despite Pentagon labeling company as 'supply chain risk'",
    "UK government's AI Security Institute confirmed Mythos Preview can exploit systems with weak security posture"
  ],
  developing: [
    "Whether IRGC carries out Stargate UAE threat — conditional on US striking Iranian power plants, deadline tonight",
    "Whether any additional npm packages in Claude Code dependency chain have been compromised",
    "Whether competitors have used the leaked source to accelerate their own agent development",
    "Whether the Capybara leak materially affects Anthropic's IPO preparation timeline",
    "Whether Vercel breach leads to further supply chain compromises through AI tool integrations",
    "Whether Pentagon restrictions on Anthropic will impact NSA's operational capabilities"
  ],
  insights: [
    "A single misconfigured .npmignore exposed 512,000 lines of IP. This is not a sophisticated attack — it is a fundamental release engineering failure at a company preparing to go public.",
    "The Stargate UAE threat with satellite imagery is a different category. Releasing imagery of a facility that was not publicly located signals intelligence penetration of Gulf infrastructure that goes beyond what was assumed.",
    "The concurrent axios attack was not related to the source leak but the overlap created maximum confusion — a pattern that benefits attackers.",
    "For a student using Claude Code: the risk surface is now permanent. Any unofficial source, any GitHub repo claiming to be leaked Claude Code — all are live threat vectors.",
    "Vercel breach demonstrates how third-party AI tools create new attack surfaces through OAuth integrations and lateral movement potential.",
    "NSA's continued use of Anthropic tools despite Pentagon restrictions reveals operational necessity overriding policy concerns in cyber defense"
  ],
  questions: [
    "Does the IRGC carry out the Stargate UAE threat tonight",
    "Are there additional compromised packages in the Claude Code dependency chain not yet identified",
    "Has the leaked source been used by any competitor to ship a feature that would not have existed otherwise",
    "Does Anthropic's IPO timeline shift in response to these incidents",
    "Will the Vercel breach lead to further exploitation of AI tool supply chains",
    "How will the Pentagon-NSA divide on Anthropic usage be resolved"
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
    name: "Pip White",
    role: "Head of EMEA North, Anthropic",
    why: "Leading Anthropic's UK expansion amid Pentagon dispute over supply chain risks.",
    alignment: "Anthropic",
    status: "active"
  }]
}];

// ============================================================
// WAR WATCH DATA
// ============================================================

const WAR_STORIES = [{
  id: "W01",
  code: "IRAN-W01",
  heat: 5,
  status: "active-war",
  updated: "Apr 20 2026",
  title: "Iran — Operation Epic Fury",
  sub: "US-Israel War on Iran · Day 38",
  card: "Day 38. 8pm ET deadline tonight — third extension possible. Kharg Island struck before deadline. Mojtaba Khamenei as Supreme Leader. Strait commercially paralyzed.",
  toll: {
    confirmed_dead: "1,937+",
    confirmed_wounded: "24,800+",
    children_killed: "210+",
    us_kia: "13",
    israeli_kia: "18",
    displaced: "1.1M+",
    note: "Iranian Red Crescent figures. 118 children killed at girls' school in Minab on Day 1 alone. US KIA confirmed by Pentagon. Displacement figures are approximate."
  },
  front: {
    summary: "US and Israeli strikes targeting nuclear infrastructure, missile facilities, military leadership, and now civilian infrastructure (railways, Kharg Island). Iranian proxy operations active across Lebanon, Iraq, and Yemen. Strait of Hormuz commercially paralyzed — not formally closed but functionally shut.",
    active_fronts: ["Tehran — ongoing strikes on military and infrastructure targets. Human chains of civilians around power plants.", "Kharg Island — struck April 7. Handles 90% of Iranian oil exports. Significance: even a ceasefire tonight may not immediately restore oil flows.", "Northern Israel — Hezbollah in sustained high-intensity operations. Precision munitions and rocket barrages.", "Iraqi bases — coordinated drone and missile swarms from Iraqi militias against US facilities including Ali Al-Salem Air Base.", "Red Sea / Gulf of Aden — Houthis resumed anti-ship missile attacks. Dual disruption with Hormuz ongoing.", "Strait of Hormuz — de-facto paralyzed. IRGC warning ships passage not allowed. Multiple vessels struck near the waterway.", "UAE / Gulf infrastructure — Iranian drones struck AWS UAE data centers. Stargate UAE threatened."],
    recent_movements: ["Apr 7: Kharg Island struck before 8pm deadline — significant escalation signal", "Apr 7: IDF warning Iranians to stay off trains and railways", "Apr 6: Iran submitted 10-point maximalist counter to 45-day ceasefire proposal", "Apr 5: Human chains forming around Tehran power plants", "Apr 3: IRGC released satellite imagery of Stargate UAE, threatened complete annihilation", "Apr 2: Oracle Dubai facility struck — Gulf cloud infrastructure now a declared target", "Mar 8: Mojtaba Khamenei installed as Supreme Leader — IRGC consolidating", "Mar 1: Iranian drones took two AWS UAE availability zones offline for 24+ hours", "Feb 28: Operation Epic Fury launched. Khamenei killed. Day 1: 118 children dead at girls school in Minab."],
    assessment: "The war is at its most consequential inflection point. Kharg Island being struck before the deadline passed suggests the military track is running independently of — or as leverage on — the diplomatic track. A fourth deadline extension is possible. An actual ceasefire tonight is assessed as unlikely by US senior negotiators per WSJ."
  },
  confirmed: ["US and Israel launched Operation Epic Fury February 28 — no formal Congressional authorization", "Khamenei killed February 28 — confirmed by Iranian state media", "Mojtaba Khamenei named Supreme Leader March 8 — IRGC-installed, never held elected office", "210+ children confirmed killed — 118 at girls elementary school in Minab on Day 1", "1,937+ total Iranian dead as of April 7", "13 US KIA confirmed by Pentagon", "Strait commercially paralyzed — Day 35", "Kharg Island struck April 7 — handles 90% of Iranian oil exports", "Iran submitted 10-point maximalist counter to 45-day ceasefire proposal", "Trump extended 8pm deadline three times previously — tonight is fourth deadline"],
  developing: ["Whether 8pm deadline produces ceasefire or is extended a fourth time", "Whether Kharg Island destruction accelerates or hardens Iran's position", "Whether IRGC carries out Stargate UAE threat", "Whether domestic Iranian opposition organizes", "Whether back-channel diplomacy produces anything before deadline"],
  insights: ["The Oman FM announcement the day before — Iran had agreed to nuclear limits — is the detail that will define historical judgment of this operation. Strikes happened anyway.", "Kharg Island before the deadline is either the military running independent of diplomacy, or deliberate pressure. Either reading is alarming.", "210+ children dead. At day 38, the weight on the diplomatic track is immense.", "Mojtaba's installation enabled by the strikes — the IRGC chose hardening over opening. That is a consequence of the operation, not despite it."],
  questions: ["Does Trump extend a fourth time or does the war enter a new phase tonight?", "Is Iran's 10-point counter a negotiating opening or a rejection?", "Will IRGC carry out the Stargate UAE threat?", "What is the minimum ceasefire both sides could accept?"],
  people: [{
    name: "Donald Trump",
    role: "US President",
    why: "Third extension decision coming tonight. The war continues on his authorization.",
    alignment: "US",
    status: "active"
  }, {
    name: "Mojtaba Khamenei",
    role: "Supreme Leader, Iran",
    why: "IRGC-installed successor. Trump and IDF have both named him as a target.",
    alignment: "Iran/IRGC",
    status: "active"
  }, {
    name: "Benjamin Netanyahu",
    role: "PM, Israel",
    why: "Co-authorized the operation. Kharg Island strike is on his order.",
    alignment: "Israel/US",
    status: "active"
  }, {
    name: "Abbas Araghchi",
    role: "FM, Iran",
    why: "Submitted the 10-point counter. The diplomatic face of the refusal.",
    alignment: "Iran",
    status: "active"
  }, {
    name: "Ali Khamenei",
    role: "Former Supreme Leader",
    why: "Killed February 28. His death is the event around which the entire war turns.",
    alignment: "Iran",
    status: "deceased"
  }]
}, {
  id: "W02",
  code: "PAL-01",
  heat: 5,
  status: "active-war",
  updated: "Apr 20 2026",
  title: "Palestine — Gaza War",
  sub: "Israel-Hamas · Ongoing since October 7, 2023",
  card: "The conflict that triggered the Iran war. Gaza war enters month 18. Ceasefire negotiations in Cairo collapsed. Over 72,551 Palestinians dead. Famine conditions in northern Gaza. West Bank violence escalating separately.",
  toll: {
    confirmed_dead: "72,551+",
    confirmed_wounded: "172,274+",
    children_killed: "21,283+",
    displaced: "1,900,000+",
    note: "Gaza Ministry of Health figures, corroborated by UN. Entire population of Gaza (2.3M) is displaced in some capacity. Northern Gaza facing famine conditions per WFP. These are among the highest per-capita casualty rates in modern conflict."
  },
  front: {
    summary: "Israel conducting ground and air operations across Gaza. Northern Gaza under siege with limited humanitarian access. West Bank experiencing parallel escalation — settler violence and IDF raids at record levels. Iran war has changed the regional context: Hezbollah front in Lebanon is now directly connected to the Gaza conflict through the axis of resistance framework.",
    active_fronts: ["Northern Gaza — IDF ground operations ongoing. Humanitarian access severely restricted. WFP reporting famine conditions.", "Southern Gaza — Rafah area. Cross-border tunnel interdiction. Egyptian border crossing intermittently closed.", "West Bank — IDF raids, settler violence, and Palestinian militant activity at levels not seen since second intifada.", "Lebanon (Hezbollah) — now in sustained high-intensity operations following Iran war escalation. Directly linked to Gaza through axis of resistance.", "Egypt border — Rafah crossing closure cutting off humanitarian aid corridors."],
    recent_movements: ["Apr 2026: Cairo ceasefire negotiations collapsed — Hamas rejected latest Israeli proposal", "Mar 2026: Operation Epic Fury launched — Hezbollah front activated, Lebanon front intensified", "Mar 2026: IDF expanded West Bank operations concurrent with Iran strikes", "Feb 2026: Brief humanitarian pause — collapsed within 72 hours", "Jan 2026: ICJ ruled Israel must prevent acts capable of constituting genocide — compliance disputed", "Oct 2023: Hamas attack killed 1,200 Israelis, took 253 hostages — triggered the current phase"],
    assessment: "The Gaza war and the Iran war are now structurally linked — the axis of resistance framework means that a ceasefire in one theater affects pressure in the other. The collapsed Cairo negotiations suggest no near-term diplomatic resolution. Famine in northern Gaza is the most acute humanitarian crisis of the conflict."
  },
  confirmed: ["Over 72,551 Palestinians killed — Gaza Ministry of Health figures corroborated by UN agencies", "Over 21,283 children among the dead", "Entire population of Gaza displaced in some capacity — 1.9 million people", "WFP declared famine conditions in northern Gaza", "ICJ ruling January 2026 — Israel must prevent acts capable of constituting genocide", "Cairo ceasefire negotiations collapsed — Hamas rejected latest Israeli proposal", "West Bank violence at levels not seen since second intifada", "Hezbollah front activated and intensified following Iran war escalation", "October 7 2023: Hamas attack killed 1,200 Israelis, took 253 hostages — this conflict's origin point", "Approximately 100 hostages remain in Gaza — status of many unknown", "Israeli drone strike killed Ayman Khaled Abu Hasna, 38, in central Gaza on April 19, 2026", "Israeli attacks killed at least 11 Palestinians including two children on April 16, 2026 — latest in series of ceasefire violations", "Brothers Abdelmalek and Abdel Sattar al-Attar killed by Israeli drone strike in Beit Lahiya on April 16, 2026", "Nine-year-old Saleh Badawi shot dead by Israeli forces in Zeitoun neighborhood on April 16, 2026", "UN Women reports average of 47 women and girls killed daily during Gaza war — over 38,000 killed by end of 2025"],
  developing: ["Whether Iran war ceasefire (if achieved) produces pressure for Gaza ceasefire", "Whether any hostages are recovered through negotiation", "Whether famine in northern Gaza triggers international intervention", "Whether West Bank violence escalates into a third intifada", "Whether ICC arrest warrants for Israeli leaders affect diplomatic positioning", "Whether recent Israeli attacks on water infrastructure and aid workers will trigger new international sanctions", "Whether UN reports of 2,400 ceasefire violations by Israel will lead to Security Council action"],
  insights: ["The Gaza war is the origin of every other conflict in this tracker. Operation Epic Fury was justified partly as a response to Iranian support for Hamas. The Hezbollah front, the Houthi attacks, the Iraqi militia operations — all trace back to October 7.", "72,551 dead in 18 months at a per-capita rate that has no modern equivalent in a conflict of this scale and visibility. The combination of civilian casualty rate, hostage situation, and international legal proceedings makes this unlike any prior conflict.", "The collapsed Cairo negotiations are significant — they suggest neither side sees the current terms as acceptable and neither has sufficient pressure to move. The Iran war changes the regional pressure calculus but not necessarily in a direction that helps Gaza.", "The ICJ ruling creates a legal framework that is being used in multiple national courts. Even if the ICJ itself cannot enforce compliance, the ruling is shaping how other countries respond diplomatically and commercially.", "The gender disparity in casualties (47 women/girls killed daily) reveals structural vulnerabilities in Gaza's civilian population during wartime", "Targeting of water infrastructure and aid workers suggests Israel is systematically degrading Gaza's capacity for survival beyond direct military objectives"],
  questions: ["Does an Iran war ceasefire create pressure for a Gaza ceasefire — or does it relieve pressure by resolving the Hezbollah front separately?", "What happens to the remaining hostages?", "Will famine conditions in northern Gaza produce a humanitarian intervention that neither Israel nor Hamas can prevent?", "Do ICC arrest warrants for Israeli officials actually constrain Israeli military operations?", "Why are women and girls disproportionately killed in this conflict compared to previous Gaza wars?", "Will the systematic destruction of water infrastructure create irreversible demographic changes in Gaza?"],
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
  id: 'W03',
  code: 'UKR-01',
  heat: 4,
  status: 'active-war',
  updated: 'Apr 20 2026',
  title: 'Ukraine — Russia War',
  sub: 'Ongoing since February 2022 · Year 3',
  card: 'Russia intensifies massive aerial campaigns and advances in Donetsk while Ukraine secures new European defense packages to offset US resource diversion.',
  toll: {
    confirmed_dead: '500,000+',
    confirmed_wounded: '1,200,000+',
    children_killed: '1,500+',
    displaced: '6,500,000+',
    note: 'Figures are estimates with significant uncertainty. UN confirmed 1,500+ children killed; actual figure likely higher. 6.5M externally displaced (UNHCR). Internal displacement additional. Russian military casualties estimated at 1,318,220 per UA General Staff (Apr 19). Ukrainian military casualties estimated at 200,000+ killed.'
  },
  front: {
    summary: 'Russia is pushing for full control of Donetsk, specifically near Myrnograd and Pokrovsk, while conducting massive daily aerial strikes including 756 strikes on Zaporizhzhia region in 24 hours. Ukraine is pivoting toward domestic missile production amid critical shortages. The conflict remains high-intensity with 153 combat clashes recorded on April 18 alone.',
    active_fronts: [
      'Donetsk — primary active front. Russian incremental advances continuing near Myrnograd and Pokrovsk.',
      'Zaporizhzhia — Russia conducted 756 strikes across 44 settlements in 24 hours, injuring civilians.',
      'Kherson — Ukrainian-held west bank. Cross-river operations ongoing.',
      'Kharkiv — Russian shelling of civilian infrastructure continues.',
      'Crimea — Ukrainian drone strikes on Russian naval assets continuing.',
      'Black Sea — Russian naval operations. Ukrainian maritime drones attacking Russian fleet.'
    ],
    recent_movements: [
      'Apr 19 2026: Russian forces lose 1,070 personnel in 24 hours per Ukrainian General Staff',
      'Apr 18 2026: 153 combat clashes recorded across front lines, Pokrovsk direction most active',
      'Apr 2026: US redirected significant THAAD assets to Iran theater — Ukraine air defense degraded',
      'Mar 2026: Russia accelerating Donetsk offensive timed to US distraction',
      'Feb 2026: Ceasefire talks in Istanbul — stalled on territorial withdrawal preconditions',
      'Jan 2026: Ukraine struck multiple Russian oil facilities with long-range drones'
    ],
    assessment: 'Russia is conducting saturation bombardment across eastern Ukraine while making incremental territorial gains. Ukrainian forces maintain defensive positions but face critical ammunition shortages. The conflict has entered a phase of industrial attrition where production capacity determines strategic outcomes.'
  },
  confirmed: [
    'War began February 24 2022 — Russian full-scale invasion of Ukraine',
    'Russia holds approximately 20% of Ukrainian territory as of April 2026',
    'US THAAD interceptors partially redirected to Iran theater — Ukraine air defense degraded',
    'Russian forces conducted 756 strikes across Zaporizhzhia region in 24 hours (Apr 19)',
    '153 combat clashes recorded across front lines on April 18 — Pokrovsk direction most active',
    'Russian forces lose 1,070 personnel in 24 hours per Ukrainian General Staff (Apr 19)',
    'Total Russian combat losses: 1,318,220 personnel, 11,870 tanks, 24,400 APVs destroyed (UA data)',
    'Chernihiv drone attack killed 16-year-old boy, injured four civilians (Apr 19)',
    'Black Sea grain corridor intermittently disrupted',
    'Zaporizhzhia nuclear plant under intermittent shelling — IAEA on-site monitoring',
    'Germany and Netherlands committed hundreds of millions in funding for Patriot missiles and drone production',
    'Ukrainian SOF destroyed the \'Rubikon\' elite drone logistics base near Mariupol'
  ],
  developing: [
    'Whether US attention returns to Ukraine after Iran ceasefire — or whether the distraction creates permanent repositioning',
    'Whether European NATO support can fully compensate for US resource shift',
    'Whether Istanbul ceasefire talks produce anything substantive',
    'Whether Russia attempts a larger offensive while US is focused on Iran',
    'Whether Ukraine\'s pivot to domestic missile production can scale fast enough to replace Western shipments',
    'Whether Russian personnel shortages will slow the Donetsk offensive',
    'Whether Belarus\'s new border infrastructure signals a renewed northern threat'
  ],
  insights: [
    'Russia is exploiting US distraction with Iran to intensify bombardment and incremental territorial gains.',
    'The THAAD redirection to Iran has measurably degraded Ukraine\'s air defense capabilities.',
    'European NATO members stepping up support indicates a structural shift toward strategic autonomy.',
    'Three years in, both sides are locked in industrial attrition where production capacity determines outcomes.',
    'Russia\'s saturation bombardment strategy aims to overwhelm Ukrainian air defenses through volume.',
    'Civilian casualties continue to mount in frontline regions with no military justification for many strikes.'
  ],
  implications: [
    'If European stockpiles continue to drain, Ukraine\'s reliance on domestic production becomes a critical vulnerability.',
    'If Russia completes control of Donetsk, it creates a new baseline for future ceasefire negotiations.',
    'Sustained Russian bombardment could collapse urban areas even without territorial conquest.'
  ],
  risks: [
    'Depletion of air defense interceptors could lead to systemic collapse of urban protection.',
    'Russian personnel shortages may lead to more desperate, high-casualty tactics.',
    'Civilian casualties may trigger international pressure for negotiated settlement.'
  ],
  questions: [
    'Does the Iran ceasefire allow US to redirect resources back to Ukraine — and how quickly?',
    'Can Ukraine sustain defensive operations amid critical ammunition shortages?',
    'Will increased European support compensate for US distraction?',
    'Does Russian bombardment strategy aim to collapse Ukrainian morale or military capacity?'
  ],
  people: [
    {
      name: 'Vladimir Putin',
      role: 'President, Russia',
      why: 'Authorized the invasion. Managing strategic timing of offensive operations.',
      alignment: 'Russia',
      status: 'active'
    },
    {
      name: 'Volodymyr Zelensky',
      role: 'President, Ukraine',
      why: 'Navigating critical shortages and maintaining international support.',
      alignment: 'Ukraine',
      status: 'active'
    },
    {
      name: 'Ursula von der Leyen',
      role: 'President, European Commission',
      why: 'Coordinating European support during US distraction.',
      alignment: 'EU',
      status: 'active'
    }
  ]
}, {
  id: "W04",
  code: "SDN-01",
  heat: 5,
  status: "active-war",
  updated: "Apr 20 2026",
  title: "Sudan — Civil War",
  sub: "SAF vs. RSF · The World's Forgotten War",
  card: "Sudan's civil war between the Sudanese Armed Forces and the Rapid Support Forces is now the world's largest humanitarian crisis. 150,000+ dead. 11 million displaced. Famine declared in multiple regions. Drone warfare escalates civilian toll.",
  toll: {
    confirmed_dead: "150,000+",
    confirmed_wounded: "Unknown",
    children_killed: "Estimated 68,000+ in Masalit massacres alone",
    displaced: "11,000,000+",
    note: "Figures from ACLED, WHO and UN. 25 million face acute food insecurity. 1,032 civilians killed in drone strikes in 2025. Satellite evidence suggests El Fasher massacre death toll may exceed 68,000."
  },
  front: {
    summary: "The Sudanese Armed Forces (SAF) and Rapid Support Forces (RSF) — formerly allied — are fighting for control after power-sharing collapsed in April 2023. RSF controls Darfur and conducts genocidal campaigns against Masalit communities. SAF retains Khartoum but faces desertions. Both sides employ drone warfare against civilians. The conflict combines elements of ethnic cleansing, resource predation, and proxy warfare with UAE backing RSF and Egypt supporting SAF.",
    active_fronts: ["North Darfur — RSF siege warfare targeting displacement camps. 68,000+ killed in El Fasher.", "Kordofan Corridor — daily drone strikes on markets/hospitals (1,032 civilians killed in 2025)", "White Nile State — systematic RSF attacks on hospitals decimating medical staff", "Chad Border — cross-border violence with RSF attacks on refugee camps", "Blue Nile State — SAF counteroffensives pushing RSF toward Ethiopian border"],
    recent_movements: ["Apr 2026: WHO confirms hospital attacks left 460+ patients dead in El Fasher", "Mar 2026: SAF recaptures Khartoum airports amid drone counteroffensive", "Feb 2026: UAE diversifies RSF supply routes via Ethiopian training camps", "Jan 2026: UN reports 2,500+ civilians executed in RSF-controlled territories", "Nov 2025: Jeddah peace talks collapsed after SAF withdrawal"],
    assessment: "Sudan has entered a genocidal phase with RSF massacres surpassing Darfur (2003) and Rwanda (1994) in intensity. Drone warfare institutionalizes civilian targeting — markets and hospitals are now routine strike zones. UAE supply chains sustain RSF despite international sanctions. The medical system collapse is weaponized — killing staff creates cascading public health disasters. This remains the world's most severe crisis with the least international response."
  },
  confirmed: ["War began April 2023 when SAF-RSF power sharing collapsed", "150,000+ dead — ACLED estimate. El Fasher massacre alone may exceed 68,000", "11 million displaced — world's largest displacement crisis", "UN confirmed 68,000+ killed in El Fasher massacre (Oct 2025)", "1,032 civilians killed in 2025 drone strikes — ACLED report", "RSF systematically targeted Masalit communities — UN calls it genocide", "UAE supplying RSF via Ethiopian training camps — State Department reports", "SAF recaptured Khartoum airport (Mar 2026) but faces desertions", "WHO documents 460+ patients killed in hospital attacks"],
  developing: ["Whether ICC pursues genocide charges against RSF leadership following El Fasher", "Whether UAE faces concrete sanctions for RSF support", "Whether SAF can sustain Khartoum control amid supply shortages", "Whether Egypt intervenes directly as RSF nears Blue Nile dams", "Whether Chad initiates cross-border strikes against RSF positions"],
  insights: ["The El Fasher massacre establishes RSF tactics as genocidal — exceeding both Darfur (2003) and Rwandan death rates in concentrated periods.", "UAE supply routes via Ethiopia demonstrate proxy war consolidation with Russian Wagner Group involvement likely.", "SAF's Khartoum recapture came at high civilian cost — drone counteroffensives show adaptation but not restraint.", "Medical infrastructure targeting has shifted from collateral damage to deliberate deprivation strategy.", "Famine conditions now affect 30.4 million people — surpassing Yemen as world's worst humanitarian crisis."],
  implications: ["Regional spillover becomes inevitable as Chad militarizes its border and Egypt faces refugee flows.", "The drone warfare template spreads — 1,032 civilian deaths in 2025 signal new norms of conflict.", "UAE's regional ambitions collide with genocide complicity — long-term reputation damage likely.", "Generational trauma escalates as Masalit communities face existential threats.", "State collapse enters irreversible phase with parallel governments in Khartoum and Nyala."],
  risks: ["Full regional war drawing in Egypt and Chad directly", "Complete demographic erasure of non-Arab groups in Darfur", "ICC genocide charges triggering RSF scorched-earth escalation", "SAF fragmentation into warlord-controlled enclaves", "Catastrophic famine death toll exceeding combat casualties"],
  questions: ["Will ICC action on El Fasher evidence change RSF calculations?", "Does UAE continue RSF support despite genocide documentation?", "Can SAF maintain cohesion as desertions increase?", "What triggers Egyptian direct intervention — water security or refugee flows?", "When does famine mortality surpass violent deaths?"],
  people: [{
    name: "Abdel Fattah al-Burhan",
    role: "SAF Commander / de facto head of state",
    why: "Faces existential threat from RSF genocide campaigns. Increasingly dependent on Egyptian support.",
    alignment: "SAF/Egypt",
    status: "active"
  }, {
    name: "Mohamed Hamdan Dagalo (Hemedti)",
    role: "RSF Commander",
    why: "Genocidal campaigns in Darfur exceed Janjaweed atrocities. UAE backing allows sustained offensives.",
    alignment: "RSF/UAE/Wagner",
    status: "active"
  }, {
    name: "Idris Mahamat Déby",
    role: "Chadian President",
    why: "Border militarization signals readiness for cross-border strikes against RSF.",
    alignment: "Chad/SAF",
    status: "active"
  }]
}, {
  id: "W05",
  code: "MMR-01",
  heat: 4,
  status: "active-war",
  updated: "Apr 20 2026",
  title: "Myanmar — Civil War",
  sub: "Military Junta vs. Resistance · Year 5",
  card: "Junta escalates airstrikes on civilian targets during Buddhist New Year. Resistance forces make incremental gains while facing aerial bombardment. Three Indian nationals killed in cross-border incident raises tensions with India.",
  toll: {
    confirmed_dead: "90,000+",
    confirmed_wounded: "Unknown",
    children_killed: "Unknown — estimated thousands",
    displaced: "3,000,000+",
    note: "Updated ACLED and UN figures. Internal displacement now exceeds 3 million. Junta airstrikes killed at least 68 civilians between 28 March-5 April 2026 alone. Near-total information blackout persists."
  },
  front: {
    summary: "The junta has intensified aerial bombardment campaigns across multiple regions despite announcing a 20-day ceasefire in early April. Resistance forces continue to make territorial gains but struggle to hold positions against superior air power. The Three Brotherhood Alliance maintains control of key areas including Rakhine State. Recent cross-border incidents with India signal potential regional spillover.",
    active_fronts: ["Shan State — Three Brotherhood Alliance operations continue despite junta airstrikes", "Rakhine State — Arakan Army consolidates control, junta bombed Ponnagyun hospital", "Sagaing Region — Junta conducted 72+ airstrikes since 13 April, targeting civilian areas", "Karen State — Ongoing clashes near Thai border", "Chin State — Cross-border incident involving Indian nationals killed by pro-junta militia", "Mandalay Region — Resistance forces stalled by junta air superiority"],
    recent_movements: ["Apr 2026: Junta conducted 72+ airstrikes across 12 regions since 13 April", "Apr 2026: Three Indian nationals killed in Chin State by pro-junta militia", "Apr 2026: Junta bombed monastery in Shwebo Township during Buddhist New Year", "Mar 2026: Junta destroyed Arakan Army-controlled hospital in Ponnagyun", "Mar 2026: Junta fired on Chinese aid convoys in Shan State"],
    assessment: "The conflict has reached a brutal stalemate. The junta maintains control through air power and urban strongholds while losing rural territory. Resistance forces lack unified command structure and air defenses. China's continued support for the junta prevents decisive resistance victory. Civilian casualties are escalating as the junta increasingly targets non-combatants."
  },
  confirmed: ["Military coup February 2021 — elected government of Aung San Suu Kyi removed", "Operation 1027 launched October 2023 — Three Brotherhood Alliance territorial advances", "Arakan Army controls most of Rakhine State including Kyaukphyu strategic port", "Junta conducted 72+ airstrikes across 12 regions since 13 April 2026", "Three Indian nationals killed in Chin State by pro-junta militia on 22 March 2026", "Junta bombed monastery in Shwebo Township during Buddhist New Year", "Junta destroyed Arakan Army-controlled hospital in Ponnagyun on 28 March 2026", "3 million+ internally displaced — updated OCHA estimate"],
  developing: ["Potential Indian response to killing of its nationals in Chin State", "Whether China will pressure junta to stop targeting Chinese aid convoys", "Effectiveness of new resistance steering committee to coordinate ethnic groups", "Junta's ability to sustain aerial bombardment campaign given fuel shortages", "Possible international response to junta's Buddhist New Year attacks"],
  insights: ["The killing of three Indian nationals in Chin State represents a dangerous cross-border escalation. India has historically avoided direct involvement but may be forced to respond given domestic pressure.", "Junta's Buddhist New Year attacks demonstrate complete disregard for international norms or domestic sentiment. The targeting of religious sites may erode remaining support among Buddhist majority.", "China's position is increasingly contradictory — supporting junta while sending aid convoys that junta attacks. This suggests internal divisions in Beijing's Myanmar policy."],
  questions: ["Will India be drawn into the conflict following the Chin State killings?", "Can resistance forces develop effective countermeasures against junta air power?", "Is China's support for the junta wavering as conflict drags on?", "How will ASEAN respond to junta's escalation during Buddhist holidays?"],
  people: [{
    name: "Min Aung Hlaing",
    role: "Junta Commander / de facto head of state",
    why: "Continues to direct military operations despite losing territory. Under ICC investigation for war crimes.",
    alignment: "Junta/Tatmadaw",
    status: "active"
  }, {
    name: "Twan Mrat Naing",
    role: "Arakan Army Commander-in-Chief",
    why: "Leading one of most effective resistance factions controlling Rakhine State and Kyaukphyu port.",
    alignment: "Three Brotherhood Alliance",
    status: "active"
  }, {
    name: "Aung San Suu Kyi",
    role: "Former State Counsellor (imprisoned)",
    why: "Remains symbolic figurehead despite imprisonment. UN continues calls for release.",
    alignment: "NLD (imprisoned)",
    status: "imprisoned"
  }]
}, {
  id: "W06",
  code: "SAH-01",
  heat: 3,
  status: "active-war",
  updated: "Apr 20 2026",
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
    recent_movements: ["Apr 2026: Burkina Faso military eliminates JNIM field commander Karim Torodo in Nakamba sector offensive", "Apr 2026: Major clashes between ISGS and JNIM in Niger leave at least 50 militants dead", "Apr 2026: Alliance of Sahel States (Mali, Burkina Faso, Niger) deepening security coordination", "Mar 2026: JNIM attacks on Mali army positions near Bamako increasing in frequency", "Feb 2026: Africa Corps expanded presence in Burkina Faso following additional French personnel expulsion", "Jan 2026: Niger expelled US forces from Agadez air base — key counterterrorism drone base"],
    assessment: "The Sahel coups achieved their primary goal — expelling French presence. They have not achieved their secondary goal — improving security. Jihadist activity has generally increased since the Wagner/Africa Corps takeover. Burkina Faso's elimination of a JNIM commander demonstrates tactical successes but does not address the structural insurgency. The inter-jihadist conflict (ISGS vs JNIM) creates temporary opportunities but long-term instability."
  },
  confirmed: ["Coups in Mali (2021), Burkina Faso (2022), Niger (2023) expelled French military presence", "Alliance of Sahel States (AES) formed — Mali, Burkina Faso, Niger in political and security bloc", "Africa Corps (former Wagner, now formally Russian state) operating in all three AES countries", "France's Operation Barkhane ended and MINUSMA fully withdrawn", "US expelled from Agadez air base in Niger January 2026 — significant counterterrorism capability loss", "Jihadist activity (JNIM, ISGS) generally increasing since French withdrawal — multiple independent assessments", "Niger junta expelled French ambassador and suspended cooperation with EU missions", "Chad navigating between French relationship and AES pressure", "Burkina Faso military eliminates JNIM field commander Karim Torodo in Nakamba sector offensive (April 2026)"],
  developing: ["Whether Africa Corps can achieve security outcomes France and the UN could not", "Whether the AES deepens into a formal military alliance with external sponsor (Russia)", "Whether US develops alternative counterterrorism architecture after Agadez expulsion", "Whether jihadist groups expand south into coastal West Africa (Ghana, Ivory Coast, Benin)", "Whether China uses the security vacuum to expand Belt and Road influence in the Sahel", "Impact of inter-jihadist conflict (ISGS vs JNIM) on regional security dynamics"],
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
  code: "LBN-01",
  heat: 5,
  status: "active-war",
  updated: "Apr 20 2026",
  title: "Lebanon — Hezbollah Front",
  sub: "Hezbollah vs. Israel · Direct front activated by Iran war",
  card: "Hezbollah escalated to sustained high-intensity operations following Operation Epic Fury. Precision munitions and rocket barrages at northern Israel. First direct state-level involvement from an Iran proxy since October 7. Lebanon's civilian population in the north caught between both sides.",
  toll: {
    confirmed_dead: "12,000+ (Lebanese side since Oct 2023, including Oct 2024 escalation and current phase)",
    confirmed_wounded: "35,000+",
    children_killed: "1,200+",
    displaced: "1,200,000+",
    note: "Figures cover the full Lebanon front since October 2023. The current high-intensity phase began February 28 2026 with Operation Epic Fury. Lebanese Ministry of Public Health and UN OCHA figures. Israeli civilian and military casualties not included."
  },
  front: {
    summary: "Hezbollah has been in active exchange with Israel since October 8 2023 — one day after the Hamas attack. The conflict escalated sharply in September-October 2024 with Israeli strikes on Hezbollah leadership including Nasrallah. It escalated again February 28 2026 when Operation Epic Fury activated the Iran axis of resistance. Hezbollah is now in what it calls sustained high-intensity operations — precision missiles, anti-tank missiles, and rocket barrages targeting northern Israel. Israeli strikes are targeting Hezbollah infrastructure across southern Lebanon and the Bekaa Valley.",
    active_fronts: ["Southern Lebanon — primary ground contact zone. IDF operating inside Lebanon. Hezbollah anti-tank and precision missile operations.", "Bekaa Valley — Hezbollah's strategic depth. Israeli airstrikes on weapons storage and command infrastructure.", "Northern Israel (Galilee) — under persistent Hezbollah fire. Evacuated civilian population. Agricultural land and infrastructure damaged.", "Beirut suburbs (Dahiyeh) — Israeli strikes on Hezbollah political and military infrastructure.", "Syria border — Hezbollah supply lines and weapons transfer routes under Israeli interdiction."],
    recent_movements: ["Apr 8 2026: Israel conducts largest single strike against Hezbollah — 250+ operatives killed in synchronized 60-second operation across Lebanon", "Apr 7 2026: Hezbollah sustained barrage on northern Israeli towns — largest since 2006", "Mar 2026: Hezbollah announced shift to precision munitions phase — targeted military infrastructure", "Feb 28 2026: Operation Epic Fury launched — Hezbollah activated full front same day", "Oct 2024: Israel killed Nasrallah and most of Hezbollah's senior leadership — organization degraded but not destroyed", "Oct 2023: Front opened day after Hamas attack — has not closed"],
    assessment: "Hezbollah is fighting at a degraded level compared to its 2006 peak — Israel's October 2024 leadership decapitation was real. The April 8 strike eliminated mid-level commanders across logistics, intelligence and missile units. The organization remains capable of sustained operations but command cohesion is weakening. The Iran war has increased the intensity but Hezbollah's long-term position depends entirely on the Iran ceasefire outcome — if Iran makes peace, Hezbollah has no strategic reason to continue at this intensity."
  },
  confirmed: ["Apr 8 2026: IDF confirms 250+ Hezbollah operatives killed in coordinated strikes across Lebanon — targeting command centers and intelligence infrastructure", "Lebanon health ministry reports 357 killed in April 8 strikes — 70% assessed as Hezbollah by IDF", "Hezbollah front opened October 8 2023 — one day after Hamas attack", "Israel killed Hezbollah Secretary-General Nasrallah and most senior leadership in October 2024", "Hezbollah escalated to sustained high-intensity operations February 28 2026 following Operation Epic Fury", "Precision munitions and rockets targeting northern Israel daily", "IDF operating inside southern Lebanon", "Israeli airstrikes targeting Hezbollah infrastructure in Bekaa Valley and Beirut suburbs", "100,000+ northern Israeli residents displaced since October 2023", "Lebanon civilian infrastructure damaged — south Lebanon effectively depopulated in conflict zone"],
  developing: ["Whether Iran ceasefire (if achieved) leads to Hezbollah stand-down or separate negotiation", "Impact of April 8 strike on Hezbollah's command cohesion and operational tempo", "Whether IDF expands ground operations inside Lebanon", "Whether Lebanon's fragile government and economy survive the additional shock"],
  insights: ["The April 8 strike resembles Israel's 2024 beeper operation — designed to create organizational paralysis by eliminating a broad layer of mid-level commanders simultaneously. The real measure will be whether Hezbollah's operational rhythm declines in coming weeks.", "Hezbollah is the strategic reserve Iran is burning. Every precision missile it fires is depleting a stockpile that took years to build. If Iran makes peace, Hezbollah ceases fire and waits. If Iran is destroyed, Hezbollah has no resupply. Either way, the Lebanon front is derivative of the Iran outcome.", "The October 2024 leadership decapitation degraded Hezbollah significantly — but it did not destroy it. The organization rebuilt around a second tier of commanders. That resilience is the most important lesson Israel should take from Lebanon.", "Northern Israel has been effectively evacuated for 18 months. 100,000 people cannot return home. That is a strategic success for Hezbollah regardless of military outcomes."],
  questions: ["Does an Iran ceasefire automatically end the Hezbollah front or does it require a separate negotiation?", "How much of Hezbollah's precision missile stockpile remains after 18 months of operation?", "Does Israel attempt a decisive ground operation in Lebanon before an Iran ceasefire?", "What does Lebanon look like after the war — economically, politically, governmentally?", "How significant is the loss of Hassan Mustafa Nasser (logistics) and Abu Muhammad Habib (missile unit) to Hezbollah's operational continuity?"],
  people: [{
    name: "Naim Qassem",
    role: "Hezbollah Secretary-General (post-Nasrallah)",
    why: "Second-tier commander elevated after Nasrallah's killing. Running the current high-intensity operations.",
    alignment: "Hezbollah/Iran",
    status: "active"
  }, {
    name: "Hassan Mustafa Nasser",
    role: "Senior Hezbollah logistics commander",
    why: "Killed in April 8 strikes — head of logistics support headquarters. Critical supply chain role.",
    alignment: "Hezbollah",
    status: "deceased"
  }, {
    name: "Abu Muhammad Habib",
    role: "Deputy commander, Hezbollah missile unit",
    why: "Killed in April 8 strikes — key operative in precision missile operations.",
    alignment: "Hezbollah",
    status: "deceased"
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
  }]
}, {
  id: "W08",
  code: "PAK-01",
  heat: 4,
  status: "active-war",
  updated: "Apr 20 2026",
  title: "Pakistan-India — Kashmir Conflict",
  sub: "Nuclear neighbors · Post-ceasefire tensions · Indus Waters Treaty suspended",
  card: "Direct military conflict occurred May 2025 with airstrikes, missile exchanges, and cyber warfare. Ceasefire holds but Indus Waters Treaty remains suspended. Both sides claim victory while reinforcing positions along LoC. Highest-probability nuclear flashpoint in Asia.",
  toll: {
    confirmed_dead: "300+ (Line of Control incidents, 2025-2026)",
    confirmed_wounded: "500+",
    children_killed: "2 confirmed (Christ School Poonch shelling)",
    displaced: "Unknown",
    note: "Line of Control incident figures only — not full Kashmir conflict which has been ongoing since 1947. These are current-phase casualties from recent escalation, not the historical total. Full conflict since 1989 insurgency: 70,000-100,000 dead depending on source."
  },
  front: {
    summary: "The 2025 Pahalgam attack (26 civilian deaths) triggered Operation Sindoor (Indian airstrikes) and Operation Bunyan-um-Marsoos (Pakistani retaliation), marking the most serious military engagement between the nuclear powers in decades. The four-day conflict included beyond-visual-range aerial engagements, missile strikes on airbases, cyber warfare, and heavy LoC shelling. While the May 10 ceasefire holds, both sides have suspended key agreements (Indus Waters Treaty, Simla Agreement) and maintain elevated military postures. The US-mediated pause prevented further escalation but did not resolve underlying tensions.",
    active_fronts: ["Line of Control (Kashmir) — reinforced positions after 2025 exchanges. Artillery duels continue sporadically.", "Cyberspace — persistent low-level cyber operations continue post-conflict.", "Diplomatic — Indus Waters Treaty remains suspended, creating long-term water security risks.", "Economic — bilateral trade fully halted since 2025 escalation."],
    recent_movements: ["Feb 2026: Pakistan accuses India of supporting Balochistan attacks (250+ dead)", "Jan 2026: Both navies maintain Gulf of Oman presence but no direct incidents", "Nov 2025: India completes S-400 deployment along western border", "Aug 2025: Pakistan conducts successful Fatah-II missile test", "May 2025: Ceasefire agreement mediated by US after four days of intense conflict"],
    assessment: "The 2025 conflict demonstrated both nations' willingness to conduct limited conventional strikes despite nuclear risks. The absence of US diplomatic bandwidth (focused on Iran) increases escalation risks. Water disputes (Indus Treaty suspension) add a dangerous new dimension. Neither side has political incentives for de-escalation — Modi's BJP benefits from hardline stance, while Pakistan's military leadership cannot appear weak after 2025 exchanges."
  },
  confirmed: ["May 2025: India conducted Operation Sindoor strikes on 9 targets in Pakistan-administered Kashmir", "May 2025: Pakistan retaliated with Operation Bunyan-um-Marsoos targeting 26 Indian military sites", "May 2025: Both sides engaged in largest beyond-visual-range aerial battle in history (114 aircraft)", "May 2025: Cyber warfare component included 1.5M+ attempted intrusions against Indian targets", "April 2025: Pahalgam attack killed 26 civilians, triggering crisis", "Pakistan confirmed 53 military/civilian deaths in 2025 conflict", "India confirmed 29 military/civilian deaths in 2025 conflict", "Both nations convened nuclear command authorities during crisis (unconfirmed if weapons were armed)"],
  developing: ["Whether Indus Waters Treaty suspension leads to water weaponization", "Status of S-400 systems deployed along western border", "Potential for new militant attack to trigger another round of strikes", "Cyber warfare continuity between state/non-state actors", "China's role in post-conflict mediation efforts"],
  insights: ["The 2025 conflict established dangerous new precedents: (1) willingness to strike beyond Kashmir into core territories, (2) integration of cyber warfare with kinetic operations, (3) nuclear signaling via NCA activations.", "Water has emerged as a new escalation vector — Indus Treaty suspension creates long-term instability beyond the military dimension.", "The conflict demonstrated both nations' improved precision strike capabilities, reducing collateral damage concerns that previously constrained responses.", "US distraction over Iran creates a mediation vacuum at precisely the moment when confidence-building measures are most needed."],
  questions: ["What is the current readiness status of nuclear command systems on both sides?", "How has the 2025 conflict changed red line calculations for both militaries?", "What contingency plans exist for Indus River water disputes turning violent?", "Is there any backchannel diplomacy occurring despite public posturing?"],
  people: [{
    name: "Narendra Modi",
    role: "PM, India",
    why: "Oversaw most aggressive Pakistani strikes since 1971. Domestic politics reward continued hardline stance.",
    alignment: "India",
    status: "active"
  }, {
    name: "Shehbaz Sharif",
    role: "PM, Pakistan",
    why: "Authorized retaliatory strikes while navigating military-civilian tensions. Faces pressure to maintain deterrent credibility.",
    alignment: "Pakistan",
    status: "active"
  }, {
    name: "General Asim Munir",
    role: "Chief of Army Staff, Pakistan",
    why: "PAF conducted complex multi-domain retaliation. Now overseeing force modernization post-2025.",
    alignment: "Pakistan military",
    status: "active"
  }, {
    name: "General Anil Chauhan",
    role: "Chief of Defence Staff, India",
    why: "Architect of Operation Sindoor. Now leading integration lessons from 2025 conflict.",
    alignment: "India military",
    status: "active"
  }]
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
  goToStory
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
      onClick: () => linked && goToStory(linked.id),
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
function WarWatchPanel() {
  const [activeStory, setActiveStory] = useState("W01");
  const [tab, setTab] = useState("front");
  const mainRef = React.useRef(null);
  const story = WAR_STORIES.find(s => s.id === activeStory);
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
  const activeWarCount = WAR_STORIES.filter(s => s.status === "active-war").length;
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
  }, WAR_STORIES.length, " conflicts tracked \xB7 ", activeWarCount, " active wars")), /*#__PURE__*/React.createElement("div", {
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
  }, "ACTIVE CONFLICTS"), WAR_STORIES.map(s => {
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
  }, WAR_STORIES.find(s => s.id === activeStory)?.bg || story.card + " " + (story.confirmed?.[0] || "")))))));
}

// ============================================================
// CANADA WATCH DATA
// ============================================================

const CANADA_COLOR = "#c97b5a";
const CANADA_STORIES = [{
  id: "C01",
  code: "CARNEY-01",
  heat: 4,
  status: "active-war",
  updated: "Apr 20 2026",
  title: "The Carney Government",
  sub: "Mandate, Strategy & the Weight of Four Crises",
  card: "Mark Carney won the March 2026 election on explicit anti-Trump positioning and economic competence. Now governing through four simultaneous shocks. The China trade bet is the highest-stakes decision of his early tenure.",
  summary: "Mark Carney became Prime Minister in January 2026 following Trudeau's resignation, then won a majority in the March federal election partly on an explicitly anti-Trump platform — Canada is not for sale. His government inherited four simultaneous economic shocks and is attempting to reposition Canada's strategic orientation: deeper China ties as a US hedge, renewed multilateralism, and domestic economic reform. The tension between his rhetoric and the structural reality of Canadian dependence on the US is the defining challenge of his early tenure.",
  bg: "Mark Carney is an unusual politician — a former central banker who ran the Bank of Canada during the 2008 financial crisis and the Bank of England during Brexit. He was recruited by the Liberal Party as a credible economic manager after Trudeau's resignation. He has no history in elected politics before becoming PM. His background shapes how he governs: systems-oriented, data-driven, comfortable with uncertainty, reluctant to make promises he can't deliver. His China trade bet — signing a preliminary agreement to cut canola and EV tariffs — is a direct expression of his instinct to diversify Canadian economic risk. The question is whether the Trump administration lets him execute that strategy without retaliation.\n\nCanada's relationship with the United States is unlike any other bilateral relationship in the world. The two countries share the world's longest undefended border, are each other's largest trading partners, and are bound by NORAD and NATO security arrangements that make genuine strategic independence almost impossible. Every Canadian PM since Trudeau Sr. has navigated the same impossible geometry: maintain the US relationship without becoming a client state. Carney is attempting this navigation during the most hostile US administration Canada has faced in living memory.",
  confirmed: [
    "Carney became PM January 2026 following Trudeau's resignation amid internal Liberal caucus pressure",
    "Liberals won March 2026 federal election — Carney-led majority, anti-Trump positioning central to campaign",
    "Canada is not for sale became the defining campaign phrase — direct response to Trump's annexation rhetoric",
    "Canada-China preliminary agreement signed January 2026 — canola tariffs cut from 84% to 15%, EV tariffs from 100% to 6.1%",
    "Trump threatened 100% tariff on Canada if Canada-China deal finalizes",
    "Liberation Day April 2 global tariffs applied additional pressure layer on Canadian exports",
    "Carney government explicitly framing Canada's economic strategy as diversification away from US dependence",
    "Deputy PM role given to a Quebec nationalist — political management of federation tensions",
    "NDP support agreement ended — Carney governing with majority but watching Quebec and Alberta closely",
    "Liberals secured majority government with three byelection wins on April 13 2026, bringing seat count to 174/343",
    "Carney suspended federal fuel excise tax from April 20 to September 7 in response to Middle East conflict-driven price spikes",
    "Five opposition MPs defected to Liberals since November 2025 (4 Conservative, 1 NDP), contributing to majority threshold",
    "Carney announced temporary suspension of federal fuel excise tax on gasoline and diesel from April 20 to September 7, expected to reduce gas prices by 10 cents per litre and diesel by 4 cents per litre",
    "Carney framed byelection victories as strong endorsement of government's agenda, particularly Quebec win in Terrebonne",
    "Carney pledged to use majority government to push through affordability measures and turbocharge home construction"
  ],
  developing: [
    "Whether Trump actually imposes 100% tariff if Canada-China deal proceeds — would be economically devastating",
    "What CUSMA review demands look like and whether Carney concedes or fights",
    "Whether Carney's economic diversification strategy produces meaningful results before US tariff pressure becomes unbearable",
    "Whether the China bet survives domestic political scrutiny — opposition attacking it as naive",
    "Whether Carney's technocratic governing style translates into effective political communication",
    "How Carney manages the Alberta-Ottawa oil tension as federal climate commitments conflict with provincial revenue interests",
    "Implementation of temporary fuel tax suspension and its economic/political impact",
    "Conservative opposition strategy after losing majority through defections and byelections",
    "How Carney balances internal Liberal factions including recent defectors",
    "Public expectations for majority government performance versus Carney's ability to deliver results"
  ],
  insights: [
    "Carney is governing in a structural trap: his entire strategic logic depends on the US not noticing or not caring about the China engagement. Trump has already noticed. The 100% tariff threat is the tell.",
    "The anti-Trump positioning that won the election creates a governing constraint — he cannot be seen to capitulate to Washington without political cost at home. That limits his negotiating flexibility in ways a less rhetorically committed PM would not face.",
    "Carney's central banking background is an asset for crisis management and a liability for political communication. He speaks in probabilities and hedge-qualified statements. Canadian voters want certainty. That gap will matter.",
    "The China bet is the right strategic logic — Canada genuinely needs to diversify — but the execution timeline is wrong. Diversification takes years to produce results. The US tariff threat operates on weeks. He needs the long game to win before the short game destroys him.",
    "Alberta is the wildcard. High oil prices are creating a provincial revenue windfall that makes Premier Smith more assertive, not more cooperative. The federation tension is structural and will outlast any single crisis.",
    "The majority government changes Carney's governing calculus — he can now pursue his agenda without opposition support, but must balance internal party factions including recent defectors",
    "The fuel tax suspension demonstrates Carney's ability to act decisively on affordability issues while maintaining fiscal credibility — a key test of his economic management credentials",
    "Carney's Quebec byelection win in Terrebonne suggests potential Liberal strength in unexpected regions, reshaping electoral map dynamics",
    "Majority status allows Carney to accelerate economic diversification agenda without opposition obstruction, but raises public expectations for results"
  ],
  implications: [
    "Majority status allows Carney to accelerate economic diversification agenda without opposition obstruction",
    "Fuel tax suspension sets precedent for direct government intervention in cost-of-living crises",
    "Defections from opposition parties may weaken Conservative and NDP ability to present unified alternatives",
    "Quebec byelection win in Terrebonne suggests Liberal strength in unexpected regions could reshape electoral map",
    "Carney's majority gives him runway to implement long-term structural reforms before next election in 2029",
    "Temporary fuel tax suspension provides immediate relief but raises questions about long-term fiscal impact",
    "Majority government enables Carney to pursue ambitious housing and affordability measures without opposition delay"
  ],
  risks: [
    "Trump administration may escalate trade retaliation now that Carney has stronger domestic mandate",
    "Internal Liberal divisions could emerge between original caucus members and recent defectors",
    "Public expectations for majority government performance may outpace Carney's ability to deliver results",
    "Opposition may successfully frame majority as illegitimate due to reliance on defections",
    "Global economic instability from Middle East conflict could undermine domestic economic agenda",
    "Fuel tax suspension could create fiscal pressure if extended beyond September 7",
    "Quebec nationalist tensions may resurface despite Liberal byelection win in Terrebonne"
  ],
  questions: [
    "Does the 100% tariff threat force Carney to abandon or scale back the China deal?",
    "What does CUSMA review look like — and what is the Canadian red line?",
    "Can Carney translate economic diversification strategy into tangible results before the next election?",
    "Does the Alberta-Ottawa relationship become a governing crisis or stay manageable?",
    "Is the anti-Trump positioning durable as a political strategy or does economic pain erode it?",
    "How will Carney use his new majority to advance key priorities like housing and energy transition?",
    "Will the fuel tax suspension be extended if Middle East conflict continues driving prices higher?",
    "How will Carney manage internal Liberal factions including recent defectors?",
    "Can Carney maintain public support for economic diversification strategy amid US trade pressure?"
  ],
  people: [{
    name: "Mark Carney",
    role: "Prime Minister, Canada",
    why: "Former central banker turned politician. His China bet and anti-Trump positioning define the government's strategic direction.",
    alignment: "Liberal/Federal",
    status: "active"
  }, {
    name: "Chrystia Freeland",
    role: "Former Deputy PM / Finance Minister",
    why: "Architect of much of Canada's international economic positioning. Her departure created the opening for Carney. Her relationship with the new government is complicated.",
    alignment: "Liberal (sidelined)",
    status: "sidelined"
  }, {
    name: "Danielle Smith",
    role: "Premier, Alberta",
    why: "Oil windfall is giving her leverage. Her relationship with Trump and friction with Ottawa is the domestic political story most likely to create a governing crisis for Carney.",
    alignment: "UCP/Alberta",
    status: "active"
  }, {
    name: "Donald Trump",
    role: "US President",
    why: "The primary external constraint on every Carney decision. His tariff threats and annexation rhetoric are the condition Carney is governing under.",
    alignment: "US",
    status: "active"
  }, {
    name: "Pierre Poilievre",
    role: "Conservative Leader",
    why: "Opposition leader facing internal party challenges after defections and byelection losses weakened his position.",
    alignment: "Conservative",
    status: "active"
  }]
}, {
  id: "C02",
  code: "CUSMA-01",
  heat: 4,
  status: "developing",
  updated: "Apr 20 2026",
  title: "CUSMA Under Pressure",
  sub: "Trade Agreement Review · US Demands · Canadian Red Lines",
  card: "CUSMA review is scheduled. US making demands Canada considers structurally unacceptable. Dairy, automotive rules of origin, digital services, and Chapter 19 dispute resolution are the known pressure points. Canada is negotiating from weakness.",
  summary: "The Canada-United States-Mexico Agreement — the successor to NAFTA renegotiated under Trump's first term — is up for its scheduled six-year review. The review was supposed to be a routine process. Under the current administration it is a renegotiation in all but name. US demands reported to include changes to dairy supply management, automotive content rules, digital services provisions, and the dispute resolution mechanism that Canada has historically used to successfully challenge US trade actions. Canada is negotiating under tariff threats that fundamentally alter the power balance.",
  bg: "NAFTA — the North American Free Trade Agreement — was signed in 1994 and created the world's largest free trade zone. It governed roughly $2.4 trillion in annual trade between Canada, the US, and Mexico. Trump renegotiated it in his first term, producing CUSMA (Canada calls it CUSMA, the US calls it USMCA, Mexico calls it T-MEC). The renegotiation was genuinely difficult — Canada lost ground on dairy and accepted new automotive content rules — but it preserved the fundamental architecture including Chapter 19, which allows each country to challenge the others' trade rulings before independent panels rather than domestic courts.\n\nChapter 19 matters enormously to Canada because the US has a long history of imposing anti-dumping and countervailing duties on Canadian exports — softwood lumber being the most persistent example — and then losing when those duties are challenged in independent panels. The US has repeatedly tried to eliminate Chapter 19. Canada has repeatedly refused. That fight will be central to the current review.\n\nThe broader context: Canada sends approximately 75% of its exports to the United States. There is no alternative market that can absorb that volume on any realistic timeline. This is the structural fact that constrains every Canadian trade negotiation.",
  confirmed: [
    "CUSMA scheduled six-year review triggered — process formally underway",
    "US has signaled demands on dairy supply management — Canada's protected domestic dairy sector",
    "Automotive rules of origin under pressure — US wants higher US-content requirements",
    "Chapter 19 dispute resolution mechanism — US has historically sought its elimination, Canada considers it non-negotiable",
    "Digital services provisions — US tech companies pushing for changes to Canadian digital content rules",
    "Canada sends approximately 75% of exports to the United States — structural dependence constraint",
    "Liberation Day April 2 tariffs applied on top of existing CUSMA framework — US treating them as separate",
    "Softwood lumber dispute continues in parallel — perennial Canada-US trade irritant",
    "Canadian steel and aluminum subject to ongoing US tariff threats despite CUSMA",
    "Canada's Trade Minister Dominic LeBlanc stated Canada 'won't be the source of any delay' in CUSMA renewal talks",
    "US Trade Representative Jamieson Greer indicated not all issues may be resolved by July 1 deadline",
    "US Commerce Secretary Howard Lutnick described CUSMA as 'a bad deal' needing re-imagination",
    "Canada has submitted proposals and continues constructive talks with US officials",
    "PM Carney declared Canada's US trade dependence a strategic liability requiring diversification",
    "US pushing for parallel bilateral agreements with Canada and Mexico instead of trilateral CUSMA",
    "Trump administration considering implementing baseline market access tariffs of 5-10%",
    "Supply management confirmed as off the table in CUSMA negotiations per LeBlanc"
  ],
  developing: [
    "What the full list of US demands looks like — not fully public",
    "Whether Canada draws hard red lines on Chapter 19 and dairy or negotiates both",
    "Whether Mexico's cooperation or defection changes Canadian leverage",
    "Whether the Carney government can build a domestic political coalition for any concessions",
    "Timeline — whether review produces an outcome before the 2026 midterm political window closes",
    "Whether the 100% tariff threat on Canada for the China deal gets formally linked to CUSMA negotiations",
    "Potential shift to annual reviews instead of 16-year renewal — creating continuous negotiation pressure",
    "US proposal for separate bilateral agreements with Canada and Mexico rather than trilateral CUSMA",
    "Whether US will trigger process of annual reviews that could continue for up to 10 years",
    "Impact of possible baseline US market access tariffs on Canadian exports",
    "Whether Canada-Mexico solidarity can be maintained against US divide-and-conquer strategy"
  ],
  insights: [
    "Chapter 19 is the hill Canada should be prepared to die on. It is the only enforceable mechanism Canada has to challenge US trade actions in a neutral forum. Giving it up means every future trade dispute is decided in US courts under US law. Canada has won at Chapter 19 repeatedly. The US wants it gone precisely because Canada keeps winning.",
    "Dairy supply management is domestically untouchable for any Canadian government — the Quebec and Ontario farm vote is too concentrated and too organized. Carney knows this. The question is whether he can make the US believe he knows this before they push further.",
    "The 75% export dependence number is the negotiating trap. It means Canada cannot credibly threaten to walk away. The US knows this. Canada knows the US knows this. The only leverage Canada has is making the costs of a bad deal for the US visible — and that requires allies, public pressure, and time.",
    "Mexico is the wild card. A coordinated Canada-Mexico response to US demands would create more leverage than either acting alone. Whether the Sheinbaum government cooperates or seeks its own bilateral deal with Washington is the question that will shape the entire negotiation.",
    "The linkage of the 100% tariff threat to the China deal with CUSMA negotiations would be unprecedented and likely illegal under WTO rules. The current administration has shown no particular concern about WTO legality.",
    "US rhetoric about CUSMA being a 'bad deal' signals preparation for more aggressive renegotiation stance, despite Canada's readiness to move quickly",
    "The July 1 deadline is not absolute — negotiations will likely continue beyond this date with core protocols remaining in place",
    "Carney's nationalist framing of trade dependence as a security issue indicates preparation for domestic political battle over required concessions",
    "US strategy appears focused on replacing fixed rules with continuous negotiation pressure through annual reviews",
    "Canada retains some leverage through energy and critical minerals supplies needed by US industries"
  ],
  questions: [
    "What are the full US demands — and which ones are genuinely non-negotiable versus opening positions?", 
    "Does Canada draw a hard line on Chapter 19?",
    "Does Mexico cooperate with Canada or seek a separate bilateral accommodation?",
    "What does a successful outcome look like for Canada — and what does a failed negotiation mean practically?",
    "Does the China deal become formally linked to CUSMA as US leverage?",
    "Will the US push for annual reviews instead of long-term renewal, creating permanent negotiation pressure?",
    "How will US domestic politics and midterm elections affect the negotiation timeline and outcomes?",
    "What concrete measures is Canada taking to reduce US trade dependence during negotiations?",
    "Will supply-chain disruptions from global conflicts provide Canada unexpected leverage?",
    "How will potential baseline US market access tariffs reshape Canadian export economics?"
  ],
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
    role: "Trade Minister, Canada",
    why: "Public face of Canada's CUSMA negotiation stance, emphasizing Canada won't cause delays.",
    alignment: "Canada",
    status: "active"
  }, {
    name: "Jamieson Greer",
    role: "US Trade Representative",
    why: "Key US negotiator suggesting July 1 deadline may not be met for all issues.",
    alignment: "US",
    status: "active"
  },
  {
    name: "Janice Charette",
    role: "Chief US Trade Negotiator, Canada",
    why: "Leading technical negotiations with US counterparts",
    alignment: "Canada",
    status: "active"
  },
  {
    name: "Steve Verheul",
    role: "Former Chief Trade Negotiator, Canada",
    why: "Influential voice arguing Canada should play for time in negotiations",
    alignment: "Canada",
    status: "monitoring"
  }]
}, {
  id: "C03",
  code: "ECON-CA-01",
  heat: 4,
  status: "developing",
  updated: "Apr 20 2026",
  title: "Canadian Economy — Four Shocks",
  sub: "Tariffs · Oil Shock · CUSMA · Inflation · The Lived Reality",
  card: "Canada is absorbing its fourth major economic shock since 2019. Oil windfall for Alberta and federal revenues. National inflation accelerating. Housing still broken. The gap between macroeconomic indicators and what ordinary Canadians experience is at its widest in a generation.",
  summary: "Canada is simultaneously experiencing a revenue windfall from high oil prices — benefiting Alberta and federal coffers — and an inflationary squeeze hitting ordinary Canadians through fuel, food, and housing costs. The four simultaneous shocks since 2019 (COVID, first Trump trade war, post-COVID inflation spike, current crisis) have produced a population that is economically anxious in a way that doesn't show up cleanly in GDP figures. Housing affordability is a separate structural crisis running in parallel. The combination of these pressures is the domestic political backdrop for everything the Carney government is attempting.",
  bg: "Canada's economy is structurally unusual. It is a wealthy country with a resource extraction base — oil, gas, minerals, forestry, agriculture — that generates enormous revenues concentrated in specific regions (Alberta, Saskatchewan, British Columbia, Ontario's Ring of Fire). It is also a services-dominated urban economy — Toronto, Vancouver, Montreal — where knowledge work, finance, and real estate generate a different kind of wealth. These two economies coexist under one federal structure and frequently pull in opposite directions.\n\nThe housing crisis deserves separate treatment. Canadian housing — particularly in Toronto and Vancouver — has been unaffordable for middle-income earners for over a decade. The Trudeau government attempted multiple interventions, none of which materially reduced prices. The Carney government has inherited this structural problem. The causes are well understood: restrictive zoning, slow permitting, a population that grew faster than housing supply, and decades of treating housing as an investment vehicle rather than shelter. The solutions are politically difficult because homeowners — who vote — benefit from high prices.\n\nThe Bank of Canada's interest rate cycle has added another layer. Rates rose sharply to combat post-COVID inflation, then started falling again. Variable-rate mortgage holders who bought during the COVID price surge are now absorbing the consequences of that cycle.",
  confirmed: ["Oil prices at $110-113/barrel — Alberta and federal revenues elevated significantly", "Bank of Canada in rate-cutting cycle — but mortgage renewals at higher rates hitting hundreds of thousands of households", "Housing affordability at worst levels in recorded Canadian history — Toronto and Vancouver especially", "Grocery inflation persisting above overall CPI — food insecurity rising across income brackets", "US Liberation Day April 2 tariffs adding approximately $20-30 billion annual cost to Canadian exporters", "Canada's unemployment rate rising from historic lows — manufacturing and export sectors under pressure", "Federal deficit expanding as government absorbs economic shock costs", "Consumer debt at record levels — Canadians among the most indebted populations in the developed world", "Federal government suspending fuel excise tax April 20-Sept 7 — costing $2.4B", "IMF ranks Canada's fiscal position as strongest in G7 despite rising deficits", "Business Council of Canada survey shows domestic regulatory burden now top concern for investment decisions", "World Bank ranks Canada 33rd globally on regulatory framework metrics — below US and most OECD peers", "OECD data shows Canada's standing on Product Market Regulation indicators deteriorated from 10th (1998) to 26th (2023)", "Statistics Canada reports 37% rise in federal regulatory restrictions between 2006-2021, linked to 1.7 percentage point GDP decline", "CFIB estimates total regulatory compliance burden for small businesses at $51.5 billion annually — equivalent to 394,000 full-time jobs lost to paperwork"],
  developing: ["Whether oil windfall is sustained long enough to meaningfully offset shock costs", "Whether Bank of Canada rate cuts translate into relief for variable-rate mortgage holders on the renewal cycle", "Whether US tariffs produce meaningful job losses in manufacturing belt — Ontario and Quebec most exposed", "Whether food inflation stabilizes or worsens as drought and supply chain disruption compound", "Whether Carney government's housing supply measures produce results on any politically relevant timeline", "Whether the Alberta-Ottawa fiscal tension produces a constitutional crisis or stays manageable", "Impact of regulatory reforms on economic competitiveness — OECD rankings show Canada lagging behind peers", "Whether Business Council of Alberta's 'Barriers to Breakthroughs' regulatory reform plan gains political traction", "Effect of B.C. Supreme Court's Cowichan Tribes ruling on property rights and investment certainty across British Columbia"],
  insights: ["The GDP-lived experience gap is the political time bomb. Canada's aggregate economic numbers look manageable — oil revenues are helping. But a 35-year-old in Toronto trying to rent while paying off student debt is not experiencing a manageable economy. That gap is what produces political volatility.", "Housing is the issue that connects everything. It is why Canadians feel economically anxious despite high employment. It is why young people are leaving cities. It is why trust in government competence has declined. Carney knows this. The question is whether anything he can do in a 4-year mandate materially changes the supply picture.", "Alberta's oil windfall is creating a perverse federal dynamic. The province that most frequently threatens separation is currently the one generating the revenue that makes the federation financially viable. Premier Smith knows this and is using it.", "The consumer debt level is the hidden vulnerability. Canada's households are among the most leveraged in the developed world. If the oil shock produces a sustained global recession, Canadian consumers have almost no buffer. The Bank of Canada's room to cut rates further is the only circuit breaker.", "Trade-exposed manufacturing — concentrated in Ontario — is the employment story most likely to produce political crisis. These are union jobs, middle-income jobs, the kind of job losses that produce electoral consequences.", "Canada's regulatory burden has emerged as a structural constraint on growth, with international rankings showing dramatic declines in competitiveness — particularly problematic given the need for energy transition investment.", "The cross-partisan consensus on regulatory reform presents a rare opportunity — but requires urgent action before political window closes and regulatory apparatus naturally expands again."],
  questions: ["Does the oil windfall last long enough to cover the fiscal cost of absorbing the other shocks?", "When does the housing crisis produce a political moment that forces genuine structural reform?", "How many manufacturing jobs are lost to US tariffs — and in which ridings?", "Does the consumer debt level become a systemic risk if global recession materializes?", "Is there a Canadian equivalent of the 2008 financial crisis hiding in the household balance sheet data?", "Can cross-partisan agreement on regulatory reform translate into concrete actions that improve Canada's competitiveness?", "Will Supreme Court rulings on Indigenous title and federal regulatory authority create long-term uncertainty for infrastructure projects?"],
  people: [{
    name: "Tiff Macklem",
    role: "Governor, Bank of Canada",
    why: "His rate decisions are the primary tool for managing the economic shocks. His room to cut is the key variable in the consumer debt story.",
    alignment: "Bank of Canada (independent)",
    status: "active"
  }, {
    name: "Mark Carney",
    role: "Prime Minister, Canada",
    why: "Governing through the shocks. His economic credibility — built as a central banker — is being tested in a very different context.",
    alignment: "Federal Government",
    status: "active"
  }, {
    name: "Danielle Smith",
    role: "Premier, Alberta",
    why: "The oil windfall gives her leverage over Ottawa that she is actively using. Her relationship with the federal government is the most consequential domestic political variable.",
    alignment: "UCP/Alberta",
    status: "active"
  }, {
    name: "Adam Legge",
    role: "President, Business Council of Alberta",
    why: "Leading business voice advocating regulatory reform — describes Canada's system as 'regulating investment away'",
    alignment: "Business sector",
    status: "active"
  }, {
    name: "Dominic LeBlanc",
    role: "Cabinet Minister",
    why: "Publicly criticizing regulatory burden — key figure in Carney government's red tape review",
    alignment: "Federal Government",
    status: "active"
  }]
}, {
  id: "C04",
  code: "DIASPORA-01",
  heat: 4,
  status: "escalating",
  updated: "Apr 20 2026",
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
    "Ukrainian-Canadian families facing uncertainty as temporary residency pathways expire — pushing for permanent status"
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
    "Whether Iranian diaspora divisions lead to further violence in Canada"
  ],
  insights: [
    "Canada's diaspora communities are not just a domestic political management challenge — they are a genuine foreign policy asset. Canada's ability to maintain back-channel relationships with Iran has historically depended partly on the Iranian-Canadian community's connections. That asset is real.",
    "The Ukrainian-Canadian community's political organization is the model for effective diaspora advocacy. They have successfully shaped Canadian foreign policy for decades. Their alarm about US attention shifting to Iran is a signal worth taking seriously — they have intelligence about the Ukrainian situation that official channels don't always capture.",
    "The Palestinian-Canadian experience since October 7 has revealed genuine tensions in Canadian multiculturalism — what happens when communities hold passionately conflicting views on a violent conflict, and when the expression of those views runs into institutional constraints around speech, employment, and campus life. Those tensions have not resolved.",
    "The geographic concentration of diaspora communities — Iranian-Canadians in North York, Ukrainian-Canadians on the prairies, Palestinian-Canadians in major cities — means their political weight is concentrated in specific ridings. That is not an accident of settlement patterns. It translates into real electoral leverage.",
    "The murder of Masood Masjoody exposes dangerous fractures within the Iranian diaspora — monarchist factions appear willing to use violence against critics",
    "Iranian government's asset confiscation threats create impossible dilemma for diaspora families — cut ties or risk relatives' safety"
  ],
  questions: [
    "Does the Iranian-Canadian community coalesce around a political position on post-war Iran engagement — and does it give Canada a distinctive diplomatic role?",
    "Does the Ukrainian-Canadian lobby successfully pressure Carney to increase material support for Ukraine?",
    "Does Palestinian-Canadian advocacy produce any shift in Canada's Gaza position?",
    "Are there Canadian citizens among the casualties in any of the active conflicts — and how does the government respond?",
    "Will Canada create special immigration pathways for Iranian refugees as it did for Ukrainians?",
    "How will Canadian authorities respond to diaspora-on-diaspora violence like the Masjoody case?"
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
  }]
}, {
  id: "C05",
  code: "ARCTIC-01",
  heat: 4,
  status: "escalating",
  updated: "Apr 20 2026",
  title: "Arctic Sovereignty",
  sub: "Northwest Passage · US Pressure · Climate Opening · Indigenous Rights",
  card: "The Arctic is opening faster than predicted. The Northwest Passage is commercially navigable in summer months. The US does not recognize Canadian sovereignty over it. Trump has made Arctic claims more aggressive. Canada's military presence is inadequate. Indigenous communities are on the front line of all of it.",
  summary: "Climate change is opening the Canadian Arctic in ways that are simultaneously an economic opportunity and a sovereignty crisis. The Northwest Passage — the sea route through Canada's Arctic archipelago — is becoming commercially navigable in summer months, potentially transforming global shipping. The United States does not recognize Canadian sovereignty over the Passage, treating it as international waters. Trump has made this position more aggressive, and US military vessels have transited without requesting Canadian permission. Canada's Arctic military infrastructure is decades behind where it needs to be. Indigenous communities in the North are experiencing the climate changes most acutely and have the most direct stake in how Arctic sovereignty is exercised.",
  bg: "The Northwest Passage has been the object of Arctic ambition since European explorers first attempted it in the 16th century. The Franklin Expedition of 1845 — 129 men who disappeared trying to navigate it — is part of Canadian national mythology. The passage was first fully navigated in 1906 by Roald Amundsen. For most of the 20th century it was inaccessible for most of the year due to ice.\n\nClimate change is changing this. Arctic sea ice is declining at roughly twice the rate of the global average. The Northwest Passage is now reliably navigable in August and September, and forecasts suggest it may be ice-free for longer periods within decades. This creates a shipping shortcut between the Atlantic and Pacific that is roughly 7,000 kilometres shorter than the Panama Canal route.\n\nThe sovereignty question is genuinely contested in international law. Canada claims the passage as internal waters, meaning foreign ships require Canadian permission to transit. The United States argues it is an international strait, meaning foreign ships have a right of innocent passage without permission. This dispute has been ongoing since the 1969 voyage of the SS Manhattan, which the US sent through without asking Canada. Canada responded by enacting the Arctic Waters Pollution Prevention Act. The dispute has never been formally resolved.\n\nRussia is the other major Arctic power and has been militarizing its Arctic presence aggressively for a decade — new bases, new submarines, new icebreakers. China has declared itself a near-Arctic state and is investing in Arctic shipping and research infrastructure. Canada has been slow to respond militarily and diplomatically.",
  confirmed: ["Northwest Passage reliably navigable August-September — ice-free window expanding with climate change", "US does not recognize Canadian sovereignty over Northwest Passage — treats it as international strait", "US military vessels have transited Northwest Passage without requesting Canadian permission", "Canada has one operational icebreaker — CCGS Louis S. St-Laurent — significantly less than Russia or US", "NORAD modernization agreement signed — Canada committed to $38.6 billion over 20 years for Arctic surveillance", "Russia has established new military bases and deployed new submarines to Arctic", "China declared itself near-Arctic state — investing in Arctic shipping research and infrastructure", "Climate change hitting Canadian Arctic communities at twice the global average rate — permafrost thaw, coastal erosion, ice road loss", "Inuit Tapiriit Kanatami formally submitted that Arctic sovereignty must include Indigenous rights and presence", "Trump administration made more aggressive statements on Arctic resource claims than prior US administrations", "Canada and Finland signed maritime memorandum of understanding on Arctic security and icebreaker cooperation during President Stubb's visit", "Canada and Finland committed to increasing defence spending to 5% of GDP by 2035", "Canada and Finland will negotiate General Security of Information Agreement to facilitate intelligence-sharing", "Canada and Finland agreed to expand joint military exercises in Arctic conditions including Cold Response and Operation Nanook", "Canada's House of Commons Foreign Affairs committee issued report calling for urgent action on Arctic sovereignty"],
  developing: ["Whether Canada accelerates Arctic military presence — icebreakers, surveillance, forward bases", "Whether the Northwest Passage becomes a genuine diplomatic flashpoint with the US", "Whether Russia or China attempt transits that force a Canadian response", "Whether Arctic resource development (oil, gas, minerals) proceeds and under what governance framework", "Whether Indigenous communities gain meaningful control over Arctic governance decisions", "Whether the NORAD modernization produces actual capability on any relevant timeline", "Whether Canada-Finland partnership leads to tangible icebreaker production increases", "Whether NATO adopts formal Arctic security framework at July summit in Ankara"],
  insights: ["Canada's Arctic sovereignty claim rests on presence, use, and Indigenous occupation going back thousands of years. The Inuit have a stronger sovereignty argument than Canada does in some respects — they have actually lived there continuously. Canada's sovereignty argument is strongest when it is grounded in Indigenous rights, not just state claims.", "The icebreaker gap is embarrassing. Russia has approximately 40 icebreakers including nuclear-powered vessels. Canada has one operational heavy icebreaker. This is not a funding problem — it is a decades-long failure of political prioritization. The NORAD modernization is a down payment on fixing this, but the timeline is too slow.", "The Northwest Passage is worth fighting for economically. As a route for commercial shipping it could generate significant transit fees and give Canada enormous strategic leverage over global shipping. But only if sovereignty is established clearly before the shipping volumes make the dispute commercially significant.", "Climate change and Arctic sovereignty are not separate issues — they are the same issue. The people who understand this most clearly are the Inuit communities who are watching their world change faster than any policy response can track.", "Trump's more aggressive Arctic posture is a genuine threat. His administration has shown willingness to use economic coercion to advance territorial ambitions. Canada needs to treat Arctic sovereignty as a near-term political emergency, not a long-term policy question.", "The Canada-Finland partnership represents a strategic shift toward leveraging Nordic expertise to address Canada's Arctic capability gaps, particularly in icebreaker production and Arctic military training."],
  questions: ["Does Canada accelerate Arctic military presence fast enough to establish facts on the ground before the Northwest Passage becomes commercially critical?", "Does the US formally challenge Canadian sovereignty — and if so, what is the Canadian response?", "Do Indigenous communities gain formal governance roles in Arctic decision-making?", "Does Russia or China attempt a Northwest Passage transit that forces a confrontation?", "Is the $38.6 billion NORAD modernization commitment actually funded and delivered on timeline?", "Will the Canada-Finland maritime agreement lead to tangible icebreaker production increases?", "How will NATO's July summit address Arctic security coordination?"],
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
  }]
}, {
  id: "C06",
  code: "INDIGENOUS-01",
  heat: 4,
  status: "developing",
  updated: "Apr 20 2026",
  title: "Indigenous Peoples — Sovereignty & Rights",
  sub: "UNDRIP · Treaties · Resource Development · Systemic Gaps",
  card: "Canada adopted UNDRIP in 2021 but implementation is contested. Resource development on unceded territory remains a flashpoint. The systemic gaps — health, housing, water, incarceration — remain structural. Every major Canadian political decision runs through Indigenous rights whether politicians acknowledge it or not.",
  summary: "Canada's relationship with Indigenous peoples is the foundational unresolved question of the country's existence. The federal government adopted the UN Declaration on the Rights of Indigenous Peoples in 2021 and passed legislation to implement it, but the gap between legal commitment and lived reality remains vast. Resource development on unceded or treaty-protected territory continues to generate court challenges and direct action. The systemic gaps in health outcomes, housing, water quality, education, and incarceration rates persist at levels that would be considered a national emergency if they affected any other population. Every major Canadian policy decision — Arctic sovereignty, resource development, climate policy, infrastructure — runs through Indigenous rights whether the government acknowledges it or not.",
  bg: "Indigenous peoples were in North America for thousands of years before European contact. The relationship between Indigenous nations and the Canadian state is governed by a complex web of treaties — some signed, some unsigned, some honoured, many broken — and by the Constitution Act of 1982, which recognized and affirmed existing Aboriginal and treaty rights. What those rights mean in practice has been contested in Canadian courts for decades.\n\nThe residential school system — in which Indigenous children were forcibly removed from their families, prohibited from speaking their languages, and subjected to physical and sexual abuse — operated from the 1870s to 1996. The Truth and Reconciliation Commission's 2015 report documented the system as cultural genocide and made 94 Calls to Action. As of 2026, fewer than half have been fully implemented.\n\nThe discovery of unmarked graves at former residential school sites beginning in 2021 produced a national reckoning that resulted in the cancellation of Canada Day celebrations across the country, the toppling of statues, and a renewed national conversation about what reconciliation actually means. That conversation is ongoing and unresolved.\n\nThe UNDRIP implementation question is specifically about free, prior, and informed consent — whether Indigenous communities have a veto over resource development on their territories. The resource sector argues that a veto right would make major projects impossible. Indigenous advocates argue that anything less than genuine consent is not reconciliation. The courts have been navigating this tension for years.",
  confirmed: ["Canada formally adopted UNDRIP 2021 and passed Bill C-15 to align Canadian law — implementation contested", "Fewer than half of Truth and Reconciliation Commission's 94 Calls to Action fully implemented as of 2026", "Unmarked graves at residential school sites confirmed at multiple locations since 2021", "First Nations water advisories — dozens of communities still without safe drinking water despite federal commitments", "Indigenous incarceration rate approximately 30% of federal prison population despite being 5% of total population", "Indigenous women face homicide rates roughly 6 times higher than non-Indigenous women", "Trans Mountain Pipeline expansion completed — generated significant Indigenous opposition and court challenges", "Wet'suwet'en pipeline dispute produced rail blockades and national political crisis in 2020 — underlying dispute unresolved", "Indigenous-led land back movements growing — returning land to Indigenous governance a live political demand", "Métis Nation facing internal governance disputes that complicate federal consultation processes", "B.C. Court of Appeal ruled in December 2025 that mineral rules are inconsistent with DRIPA, citing UNDRIP", "B.C. Premier David Eby proposed suspending DRIPA for one year due to litigation risks, but backed down after First Nations opposition", "First Nations Leadership Council called emergency meeting April 19, 2026 to oppose DRIPA suspension"],
  developing: ["Whether UNDRIP implementation produces meaningful changes to resource development approval processes", "Whether the outstanding TRC Calls to Action are implemented — particularly those requiring systemic institutional change", "Whether the boil water advisory situation is actually resolved on the federal timeline", "Whether land back movements produce political responses that go beyond symbolic gestures", "Whether the Arctic sovereignty question incorporates genuine Inuit governance rights", "Whether the federal government's relationship with Métis and non-status Indians is clarified legally and politically", "Whether resource development conflicts produce another Wet'suwet'en-scale national crisis", "Whether B.C. government's proposed DRIPA suspension resurfaces in future legislative sessions", "Whether First Nations and B.C. government reach joint approach on DRIPA implementation"],
  insights: ["Every Canadian infrastructure project of any scale now runs through Indigenous rights — and that is the right outcome, not a problem to be managed. The courts have been clear and consistent: Crown consultation obligations are real, free prior and informed consent matters, and projects that ignore this face successful legal challenges. The question is whether the political system catches up to the legal reality.", "The drinking water crisis is the single most damning indictment of Canadian reconciliation rhetoric. Dozens of First Nations communities have been on boil water advisories for years or decades. This is not a hard technical problem. It is a political priority problem. The money exists. The will has been intermittent.", "The residential school legacy is not history — it is present tense. The intergenerational trauma of the residential school system is a documented factor in the health, mental health, addiction, incarceration, and family breakdown statistics that define the systemic gap. You cannot address the gap without addressing the cause.", "The land back movement is becoming the organizing frame for Indigenous political demands in a way that earlier reconciliation frameworks were not. It is more concrete and more confrontational than TRC language. How the Carney government responds to it will define the relationship for a generation.", "Indigenous sovereignty and Canadian sovereignty are not competing claims — in the Arctic and elsewhere they are complementary. Canada's strongest argument for Northwest Passage sovereignty rests on the fact that Inuit have lived there for thousands of years. The government has been slow to understand that Indigenous rights are a strategic asset, not just a domestic obligation.", "The B.C. DRIPA suspension attempt reveals the tension between legal commitments and political realities. While Eby cited litigation risks, First Nations leaders view any suspension as a betrayal of reconciliation principles. The courts' interpretation of DRIPA as requiring immediate legal effect complicates provincial governance."],
  questions: ["Does UNDRIP implementation produce a real free prior and informed consent mechanism — or a consultation process that looks different but functions the same?", "Are the remaining TRC Calls to Action implemented before the next election?", "Does the drinking water advisory situation get fully resolved — and when?", "Does the land back movement produce a political crisis or a genuine policy response?", "How does the Carney government navigate the next major resource development conflict on Indigenous territory?", "Will B.C. revisit DRIPA suspension in future legislative sessions?", "Can First Nations and B.C. government reach a joint approach on DRIPA implementation?"],
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
}];

// ============================================================
// CANADA WATCH PANEL
// ============================================================
function CanadaWatchPanel() {
  const [activeStory, setActiveStory] = useState("C01");
  const [tab, setTab] = useState("insights");
  const mainRef = React.useRef(null);
  const story = CANADA_STORIES.find(s => s.id === activeStory);
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
  }, CANADA_STORIES.length, " stories \xB7 domestic & foreign")), /*#__PURE__*/React.createElement("div", {
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
  }, "STORIES"), CANADA_STORIES.map(s => {
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
const POWER_STORIES = [{
  id: "P01",
  code: "OLIGARCH-01",
  heat: 4,
  status: "developing",
  updated: "Apr 20 2026",
  title: "Global Wealth & Political Capture",
  sub: "Concentrated Power · The Structural Pattern Across Systems",
  card: "Unprecedented wealth concentration is reshaping democratic institutions globally. Musk inside the US government. Gulf sovereign wealth funding Western elections. Chinese state capitalism. Russian oligarchs remapping influence post-sanctions. Different systems, same structural pattern.",
  summary: "The concentration of wealth and its conversion into political power is the defining structural shift of the 2020s. In the US, Elon Musk's DOGE operation represents direct billionaire governance. In the Gulf, sovereign wealth funds are acquiring stakes in Western media, sports, and financial institutions at unprecedented scale. In China, the line between private wealth and state power is nearly invisible. In Russia, post-sanctions oligarchs are remapping influence through Turkey, UAE, and crypto. The mechanisms differ. The structural outcome — wealth buying governance — is converging.",
  bg: "The relationship between concentrated wealth and political power is as old as civilization. What is new in the current moment is the speed, the scale, and the technical mechanisms. The 2008 financial crisis produced the greatest concentration of wealth in recorded history as quantitative easing inflated asset prices while wages stagnated.\n\nIn the United States, Citizens United (2010) removed most limits on political spending by corporations and wealthy individuals. The Koch network — documented extensively — is the most studied example of ideological infrastructure investment reshaping political landscapes over decades. It is not unique.\n\nGlobally, sovereign wealth funds — government-owned investment vehicles — have created a new form of state capitalism blurring the line between public and private. Norway's GPFG, Saudi Arabia's PIF, Abu Dhabi's ADIA, and China's CIC collectively manage trillions and hold significant stakes in Western companies and media.\n\nThe billionaire political class from tech represents a different model — network effects and platform dominance producing fortunes faster than any prior generation. Their political ambitions are still being revealed.",
  confirmed: ["Elon Musk given direct access to federal payment and data systems via DOGE — unprecedented for unelected private citizen", "DOGE identified as mechanism for defunding agencies opposed by Musk's business interests", "Saudi Arabia's PIF managing over $700B — major stakes in Western media, tech, sports, and finance", "Gulf sovereign wealth funds acquired significant stakes in social media platforms and news organizations", "Xi Jinping asserted party control over private tech companies — Alibaba, Tencent, Didi", "Russian oligarch assets partially frozen post-Ukraine invasion — significant redeployment through UAE, Turkey, crypto", "Musk's companies hold billions in federal contracts while he advises on federal budget cuts", "Koch network documented spending over $1B on political infrastructure in 2022-2024 cycle", "BlackRock, Vanguard, State Street collectively largest shareholders in most S&P 500 companies", "Regulatory capture documented across financial services, pharmaceutical, energy, and tech sectors in US and EU", "Trump administration officials established private equity ties with Gulf sovereign wealth funds (Forbes, Apr 2026)", "Ricardo Salinas engaging in Trump-like tax challenges while influencing Mexican politics (Bloomberg, Apr 2026)"],
  developing: ["Full scope of DOGE access to federal systems — ongoing Congressional investigation", "Whether Gulf sovereign wealth stakes in Western media affect editorial independence", "How Chinese state capitalism evolves after tech crackdown — partial retreat or new model", "Whether Russian oligarch influence networks survive sanctions long-term", "Whether any democratic government produces effective regulation of billionaire political involvement", "Whether asset manager concentration produces antitrust action", "New evidence of Gulf sovereign funds influencing US policy through Trump-linked private equity channels", "Mexican billionaire Ricardo Salinas replicating Trump tax strategies while expanding political influence"],
  insights: ["The DOGE model is the most significant structural innovation in American governance since the New Deal — not because of what it has done, but because of what it has demonstrated is possible. The template is now available to any future administration.", "Gulf sovereign wealth acquisition of Western media and sports is a soft power strategy that is working. You cannot effectively criticize a country that owns your football club, your newspaper, and your investment bank.", "The convergence across different systems is the analytical key. US billionaire governance, Gulf sovereign wealth, Chinese state capitalism, and Russian oligarch networks all arrive at the same place: private wealth with public power and minimal accountability.", "Regulatory capture is not conspiracy — it is structural incentive. The revolving door is not corruption in most individual cases; it is a systemic feature that produces pro-industry regulatory outcomes regardless of individual intent.", "The asset manager concentration is the underreported story. BlackRock, Vanguard, and State Street are the largest shareholders in most major corporations simultaneously. The implications for corporate governance and competition policy are profound and largely undiscussed.", "Emerging pattern of billionaire politicians adopting similar tax avoidance and regulatory capture playbooks across different political systems (Mexico, US, Russia)"],
  questions: ["Does DOGE survive legal challenge — and if so, what constraints remain?", "Does Gulf sovereign wealth acquisition of Western media produce measurable editorial effects?", "Can any democratic government regulate billionaire political involvement without violating speech protections?", "Does the asset manager concentration become a regulatory target?", "Is there a governance model that can separate concentrated wealth from political power?", "Will the Salinas case demonstrate replicability of Trump-style billionaire governance in other national contexts?"],
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
    name: "Ricardo Salinas",
    role: "Mexican billionaire",
    why: "Replicating Trump-style tax challenges while expanding political influence, demonstrating pattern replicability.",
    alignment: "Mexican billionaire class",
    status: "active"
  }]
}, {
  id: "P02",
  code: "HEGSETH-01",
  heat: 4,
  status: "developing",
  updated: "Apr 20 2026",
  title: "War Profiteering & Defense Accountability",
  sub: "Hegseth · Contracts · The Global Pattern of Defense Corruption",
  card: "Pete Hegseth authorized a war consuming 11,000+ munitions in 30 days. Contracts are being awarded at extraordinary rates. A probe into suspicious financial relationships is active. The global pattern of defense corruption during wartime is historically predictable.",
  summary: "The Iran war is generating billions in defense contracts that have triggered Congressional scrutiny. Pete Hegseth has financial relationships with defense contractors flagged during his confirmation hearings and unresolved. A formal probe is active as of April 2026. The broader pattern is historically consistent: wartime contract acceleration, reduced oversight, and the revolving door between military leadership and defense industry produces documented corruption in virtually every major conflict. The US is not unique — the pattern appears in Russian defense procurement, Saudi military purchasing, and Israeli defense exports.",
  bg: "War profiteering is one of the oldest forms of corruption. Eisenhower's 1961 farewell address named and warned against the military-industrial complex. The decades since have produced a revolving door between military leadership, Pentagon civilian officials, and defense contractors so normalized it barely registers as a conflict of interest.\n\nThe specific mechanism: senior officers and officials develop contractor relationships during government service. They leave government and join those contractors, bringing relationships and knowledge. Those contractors receive favorable treatment in procurement decisions made by former colleagues still in government. No individual step is clearly illegal. The systemic outcome consistently favors connected contractors.\n\nThe Iran war has accelerated this. 11,000+ munitions in 30 days means 11,000 replacement orders, plus repair, maintenance, intelligence, and logistics contracts. In wartime, normal procurement oversight is compressed or waived for operational urgency. This is when corruption is most likely and most invisible.\n\nInternationally, Russian defense procurement corruption was so severe that Russian military capability turned out to exist primarily on paper — the money was stolen, equipment unmaintained. Saudi Arabia's military purchasing has generated documented kickback schemes. Israeli defense exports have been linked to multiple foreign bribery cases.",
  confirmed: ["Pete Hegseth had documented financial relationships with defense contractors flagged during Senate confirmation hearings", "Formal Congressional probe into Hegseth war profiteering connections active as of April 2026", "US expended approximately 11,000 munitions in first 30 days — replacement contracts accelerating", "Standard procurement oversight compressed under wartime urgency provisions", "Hegseth no quarter statement documented as potential war crimes violation — separate legal exposure", "Palantir $200M Claude contract — Palantir has deep Hegseth-adjacent network connections", "Russian defense procurement corruption documented as factor in military underperformance in Ukraine and Iran theater", "Saudi Arabia arms purchasing linked to multiple documented bribery and kickback cases", "Global arms trade valued at approximately $2.2T annually — largest buyers also highest corruption risk", "Top 100 defense companies made $679B revenue in 2024 (SIPRI data)", "US oil companies projected to gain $63B in additional revenue from wartime price spikes", "Average US taxpayer paid $1,870 to defense contractors in 2025 (Institute for Policy Studies)"],
  developing: ["Full scope of Hegseth financial relationships with contractors receiving Iran war contracts", "Whether Congressional probe produces referral for criminal investigation", "Whether any specific contract awards are challenged as corrupt", "Whether munitions replacement contracts go through competitive bidding or sole-source awards", "Whether Hegseth war crimes exposure affects his ability to continue in role", "Whether international allies are auditing their own defense procurement", "Progress of WAR Act legislation targeting wartime price gouging", "Potential windfall profit taxes on defense/oil companies profiting from conflict"],
  insights: ["The no quarter statement and the war profiteering probe are legally separate but politically connected. A SecDef under criminal exposure for war crimes has personal incentives to keep the war going — a settled conflict means more scrutiny.", "The procurement oversight compression is the mechanism, not the exception. Every major US conflict has produced documented corruption precisely because wartime urgency is used to bypass existing controls.", "The Russian defense procurement collapse revealed by Ukraine and Iran is the most important strategic intelligence available. If the Russian military that existed on paper doesn't exist in practice, the threat calculations underpinning decades of US defense spending were wrong.", "Defense corruption is hardest to prosecute during active conflict. The evidence accumulates but wartime political incentives favor protecting the people running the war. The accountability almost always comes later, if at all.", "Private sector profit motives in defense contracting create systemic cost inflation compared to state-run defense industries (China/Russia model)"],
  implications: ["Defense contractors receive disproportionate share of federal tax dollars compared to domestic priorities", "Private sector profit motives drive up weapons costs compared to state-run defense industries", "War profiteering accountability initiatives gain momentum due to high visibility cases", "Growing political pressure to tax windfall profits from defense/oil companies", "Potential for defense spending to crowd out domestic priorities as budget pressures mount"],
  risks: ["Explosion of national debt from unchecked defense spending", "Erosion of manufacturing capacity from over-reliance on defense sector", "Strategic vulnerability when high-cost systems face low-cost adversarial equivalents", "Public backlash against perceived war profiteering could undermine political support for defense spending"],
  toll: {},
  front: {},
  questions: ["Does the Hegseth probe produce criminal referral — and on what timeline?", "Are replacement munitions contracts going through competitive procurement or sole-source awards?", "Does the no quarter war crimes exposure affect Hegseth's tenure?", "What is the full scope of Hegseth financial relationships with Iran war contractors?", "Is there an international accountability mechanism for war profiteering — and has it ever worked?", "Will WAR Act pass Congress to address wartime price gouging?", "Will windfall profit taxes gain traction for defense/oil companies?"],
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
    name: "Sheila Cherfilus-McCormick",
    role: "US Representative (D-FL)",
    why: "Introduced Wartime Anti-Profiteering and Relief Act (WAR Act) targeting price gouging during conflict",
    alignment: "US House (Democrat)",
    status: "active"
  }, {
    name: "Abhinav Trivedi",
    role: "Journalist (Mint)",
    why: "Documented $679B defense industry revenue and war profiteering patterns",
    alignment: "Media",
    status: "active"
  }]
}, {
  id: "P03",
  code: "INSIDER-01",
  heat: 4,
  status: "developing",
  updated: "Apr 20 2026",
  title: "$1.2B Pre-War Insider Trading",
  sub: "Who Knew · Prediction Markets · The Intelligence Leak Question",
  card: "$1.2B in suspicious trading activity was identified before key Iran war events. The CFTC probe is active. The question is not just legal — it is intelligence: who had foreknowledge, and through what channel.",
  summary: "The CFTC and SEC are investigating over $1.2B in suspicious trading activity across prediction markets and oil futures before key Iran war developments. The trades include $855,000 in Polymarket bets placed before US-Israel strikes on February 27, $553,000 by a single anonymous user betting on Khamenei's removal moments before his assassination, and $950M in oil futures before the April 7 ceasefire announcement. The legal question is insider trading. The intelligence question is more significant: the trading pattern implies someone with foreknowledge of war developments, which means either an intelligence leak, foreign government advance knowledge, or involvement by someone inside the decision-making chain.",
  bg: "Insider trading on the basis of government intelligence is not new. Academic research has documented anomalous options activity before major market-moving government decisions including 9/11, the 2003 Iraq invasion, and multiple Federal Reserve policy announcements.\n\nWhat makes the Iran war case unusual is the scale — $1.2B across multiple markets suggests either a coordinated operation across multiple actors or a single very large position — and the specificity of the trades. The prediction market bets and oil futures constitute a coherent portfolio that only makes sense with foreknowledge of war developments. Random speculation would not produce this pattern.\n\nThe intelligence leak question is the more serious issue. Key war decisions were authorized within a very small circle. If someone in or adjacent to that circle tipped off financial actors, it represents both a massive securities violation and a national security breach. The investigation is jointly CFTC/SEC/intelligence community.\n\nThe trades were routed through multiple jurisdictions and anonymous accounts — standard financial opacity infrastructure suggesting sophisticated actors rather than opportunistic retail investors.",
  confirmed: ["CFTC and SEC investigating over $1.2B in suspicious trading activity before key Iran war events", "$855,000 in Polymarket bets placed before US-Israel strikes on February 27", "Single anonymous Polymarket user made $553,000 betting on Khamenei's removal moments before assassination", "$950M in oil futures bets placed before April 7 ceasefire announcement", "$580M in oil futures traded 15 minutes before Trump's March 23 'productive talks' post", "Public Citizen filed complaint with CFTC identifying six 'suspected insiders' who made $1.2M on Polymarket", "Congressman Sam Liccardo demanded SEC investigation into suspicious trades", "CFTC Chairman Michael Selig stated 'we will find you' regarding insider trading"],
  developing: ["Whether CFTC probe produces named suspects and criminal charges", "Whether intelligence leak investigation identifies source of foreknowledge", "Whether any government officials or foreign actors are implicated", "Whether anonymous prediction market accounts can be traced", "Whether the pattern analysis identifies additional trades beyond the $1.2B figure"],
  insights: ["The trades are too specific to be coincidental. A random speculator does not place $553,000 on Khamenei's removal moments before it happens. The question is not whether insider trading occurred. The question is who and how.", "The anonymous accounts and offshore routing are the tell for sophisticated actors. Retail investors don't structure trades through these channels. This is professional money with access to financial opacity infrastructure.", "The intelligence breach running parallel to the securities investigation is the more serious concern. The securities violation is a crime. An intelligence breach implies the decision-making circle was larger than officially acknowledged, or that someone in the chain was compromised.", "Historical precedent suggests these investigations rarely produce satisfying accountability. The pattern of impunity for pre-war trading is itself a structural signal."],
  questions: ["Does the probe produce criminal charges — and against whom?", "Does the intelligence breach investigation identify the source of foreknowledge?", "Is any government official or foreign actor implicated?", "Why have similar pre-war trading investigations historically produced so little accountability?"],
  science: null,
  people: [{
    name: "Unknown actors",
    role: "Suspected traders",
    why: "The trades are documented. The actors are not yet publicly named. The investigation is active.",
    alignment: "Unknown",
    status: "unknown"
  }]
}, {
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
}];

// ============================================================
// CLIMATE & ENERGY WATCH DATA
// ============================================================

const CLIMATE_COLOR = "#4a9b6f";
const CLIMATE_STORIES = [{
  id: "CL01",
  code: "EMISSIONS-01",
  heat: 4,
  status: "developing",
  updated: "Apr 20 2026",
  title: "Global Emissions — Where We Actually Stand",
  sub: "The Numbers · The Trajectory · The Gap Between Commitment and Reality",
  card: "Global CO2 emissions hit a new record in 2025. The gap between national commitments and actual trajectories is wider than at any point since Paris. The 1.5°C window has effectively closed. The question is now how far above 2°C we land.",
  summary: "Global greenhouse gas emissions reached a new record in 2025. The scientific consensus has shifted: the 1.5°C target is now considered effectively unachievable under any realistic policy scenario. The current trajectory points to approximately 2.5-3°C of warming by 2100. The Iran war oil shock is creating contradictory pressures — accelerating the green energy transition in some countries while reinforcing fossil fuel infrastructure investment in others.",
  bg: "The Paris Agreement of 2015 set a target of limiting warming to 1.5°C above pre-industrial levels, with a harder limit of 2°C. Countries submitted Nationally Determined Contributions — voluntary pledges for emissions reduction. The gap between pledges and action has been the defining story of climate policy ever since.\n\nThe IPCC — Intergovernmental Panel on Climate Change — synthesizes climate science for policymakers. Its Sixth Assessment Report established that human influence on the climate is unequivocal, that 1.5°C will be reached or exceeded within two decades under most scenarios, and that some changes are already irreversible.\n\nThe carbon budget concept is central to the math. At current emissions rates, the remaining carbon budget for a 50% chance of staying below 1.5°C will be exhausted within approximately seven years. This is arithmetic, not projection. Atmospheric CO2 is currently at approximately 425 ppm — the highest in at least 3 million years.",
  confirmed: [
    "Global CO2 emissions reached new record in 2025 — approximately 37.4 billion tonnes",
    "Atmospheric CO2 concentration at approximately 425 ppm — highest in at least 3 million years", 
    "IPCC: 1.5°C warming will be reached or exceeded within two decades under most scenarios",
    "Carbon budget for 50% chance of 1.5°C: approximately 7 years at current emissions rates",
    "G7 countries collectively not on track to meet their Paris commitments",
    "China remains world's largest emitter — approximately 30% of global total — with coal use still expanding",
    "US emissions declined under Biden-era IRA implementation but pace insufficient for Paris targets",
    "Deforestation contributing approximately 10% of global emissions",
    "Methane emissions from fossil fuel operations significantly underreported per satellite monitoring data",
    "41 emissions trading systems now in force worldwide, covering 26% of global GHG emissions (ICAP 2026)",
    "ETS revenues reached USD 80 billion in 2025, funding clean energy transitions (ICAP 2026)",
    "Satellite data shows urban methane emissions rose 6% since 2019, outpacing official estimates (PNAS 2026)",
    "C40 cities face 30% emissions reduction gap due to methane underestimation (PNAS 2026)",
    "Three new national ETS launching in 2026: Japan (mandatory), India, Vietnam (ICAP 2026)"
  ],
  developing: [
    "Whether the Iran war oil shock produces lasting acceleration of green energy transition or temporary fossil fuel reinforcement",
    "Whether China's renewable energy build-out outpaces its continued coal expansion",
    "Whether the US rolls back IRA implementation — emissions trajectory impact", 
    "Whether tropical forest protection agreements translate into actual deforestation reduction",
    "Whether methane monitoring and reporting requirements improve",
    "Whether new emissions trading systems in Japan/India/Vietnam accelerate regional decarbonization (ICAP 2026)",
    "Whether C40 cities can overcome 30% methane emissions underestimation to meet targets (PNAS 2026)",
    "Whether Latin America ETS implementations (Brazil/Chile/Colombia) achieve intended emissions reductions"
  ],
  insights: [
    "The 1.5°C target is functionally dead. This is not a political statement — it is arithmetic. Accepting this is not defeatism; it is the precondition for honest policy design for the actual scenario we face.",
    "The gap between commitment and trajectory is the central governance failure of climate policy. Countries make pledges at COPs that their domestic political systems cannot deliver. No country has solved this structural mismatch.",
    "China's simultaneous massive renewable build-out and continued coal expansion is the most important climate story in the world right now. Which trend wins determines global emissions trajectory more than any other single factor.",
    "The methane underreporting story is significant. Satellite monitoring reveals emissions substantially higher than official reporting. Methane is approximately 80 times more potent than CO2 over 20 years. The real-world warming effect is materially worse than official figures suggest.",
    "The Iran war oil shock is the strongest argument for the green transition ever made — and it is being made in real time. Countries that diversified away from fossil fuels are less exposed. Countries that didn't are paying for it.",
    "Emissions trading expansion reflects structural shift in climate governance — now covering 26% of global emissions through 41 operational systems (ICAP 2026)",
    "Urban methane loophole threatens C40 city climate pledges — requires new monitoring tech to address satellite evidence of 30% underestimation (PNAS 2026)",
    "ETS revenue growth ($80B in 2025) creates fiscal capacity for clean energy transitions where governments allocate funds effectively (ICAP 2026)"
  ],
  implications: [
    "ETS revenue growth ($80B in 2025) creates fiscal capacity for clean energy transitions where governments allocate funds effectively (ICAP 2026)",
    "Urban methane underreporting requires C40 cities to find 30% additional cuts just to meet existing pledges (PNAS 2026)",
    "Spread of ETS to Japan/India/Vietnam will test carbon pricing viability in emerging economies (ICAP 2026)",
    "China's transition to absolute emissions cap by 2027 could reshape global carbon market dynamics",
    "EU CBAM compliance phase accelerating carbon pricing adoption in trading partner countries"
  ],
  risks: [
    "Political pressure to redirect ETS revenues away from climate investments as economic conditions worsen (ICAP 2026)",
    "Urban methane monitoring gap persists without satellite tech upgrades, allowing continued underestimation (PNAS 2026)",
    "Fragmentation risk grows as carbon markets multiply across jurisdictions with varying standards (ICAP 2026)"
  ],
  questions: [
    "At what temperature does the current trajectory actually land — and what does 2.5°C or 3°C mean concretely?",
    "Does China's renewable build-out outpace its coal expansion on a net emissions basis?",
    "Does the US IRA implementation survive the current administration?",
    "Is there any scenario in which emissions reductions reach the pace required to avoid the worst outcomes?",
    "Can higher-resolution satellites pinpoint urban methane super-emitters quickly enough for C40 cities to course-correct? (PNAS 2026)",
    "Will Japan's shift from voluntary to mandatory ETS demonstrate carbon pricing viability in Asia? (ICAP 2026)"
  ],
  science: [
    "IPCC AR6 Synthesis (2023): Current policies put world on track for 3.2°C warming by 2100. Limiting to 2°C requires immediate, deep, rapid emissions reductions across all sectors.",
    "Nature (2024): Remaining carbon budget for 1.5°C now estimated at 250 gigatonnes CO2 — at current rates, exhausted in approximately 6-7 years.",
    "Global Carbon Project (2025): Global CO2 emissions 37.4 billion tonnes — new record. Land use change adding approximately 3.9 billion tonnes additional.",
    "Science (2025): Satellite-based methane monitoring reveals fossil fuel methane emissions 70% higher than UNFCCC official inventory data in studied regions.",
    "Nature Climate Change (2025): Every fraction of a degree of additional warming produces measurable increases in extreme weather frequency and intensity — no safe threshold exists.",
    "PNAS (2024): Tipping point cascade risk — multiple Earth system tipping points may be interconnected, meaning crossing one increases probability of crossing others.",
    "PNAS (2026): Satellite data shows urban methane emissions growing 6% since 2019 vs. 1.7-3.7% in official estimates (DOI: 10.1073/pnas.2504211123)",
    "ICAP Status Report (2026): 41 operational ETS now cover 26% of global emissions, with Japan/India/Vietnam launching new systems"
  ],
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
  }, {
    name: "Eric Kort",
    role: "Max Planck Atmospheric Chemistry Director",
    why: "Led urban methane satellite study revealing 30% gap between official estimates and observations (PNAS 2026).",
    alignment: "Scientific",
    status: "active"
  }]
}, {
  id: "CL02",
  code: "TRANSITION-01",
  heat: 4,
  status: "developing",
  updated: "Apr 20 2026",
  title: "The Green Energy Transition",
  sub: "Who's Winning · Who's Falling Behind · What the Iran War Changes",
  card: "China is installing more solar and wind than the rest of the world combined. The US is retreating from clean energy policy. Europe is holding but under pressure. The Iran war oil shock is the strongest argument for the transition ever made.",
  summary: "The green energy transition is happening unevenly. Solar and wind costs have fallen faster than any model predicted — solar is now the cheapest source of new electricity generation in history. EV adoption is accelerating in China and Europe. But grid infrastructure, storage, and industrial decarbonization are lagging. The Iran war oil shock is creating both acceleration and reinforcement — which effect dominates will determine the transition timeline.",
  bg: "The energy transition is the project of replacing fossil fuels — which currently supply approximately 80% of global primary energy — with low-carbon alternatives. The scale is historically unprecedented.\n\nSolar PV costs have fallen approximately 90% since 2010. Wind costs have fallen approximately 70%. These declines were not predicted by mainstream energy models as recently as 2015. In most of the world, new renewable electricity is now cheaper than new fossil fuel electricity.\n\nThe China dimension is critical and contradictory. China manufactures approximately 80% of the world's solar panels, 70% of wind turbines, and 60% of EV batteries. Its domestic renewable buildout is the largest in human history. It is also the world's largest coal consumer and is building more coal plants than any other country.\n\nThe Global South faces a specific challenge: the cheapest energy for immediate development is often fossil fuels. Asking developing countries to forgo fossil-fueled development while the developed world built its prosperity on coal and oil creates legitimate equity questions that climate negotiations have not resolved.",
  confirmed: ["Solar PV costs fallen approximately 90% since 2010 — now cheapest source of new electricity generation", "Wind costs fallen approximately 70% since 2010", "China installed more solar capacity in 2024 than the entire world installed in any prior year", "EV global market share reached approximately 18% of new car sales in 2025", "China manufactures approximately 80% of global solar panels", "US IRA deployed approximately $370B in clean energy investment — rollback attempts active", "Global clean energy investment exceeded fossil fuel investment for first time in 2024", "Battery storage costs fallen approximately 85% since 2015", "Iran war oil shock creating both acceleration and reinforcement pressures on transition simultaneously", "France launched renewable energy tender for 15 GW offshore wind capacity by 2035", "Germany paid neighboring countries to absorb excess solar power during peak production periods", "Lithium-ion battery demand projected to grow 6-7% annually — supply shortages possible by 2028"],
  developing: ["Whether US IRA rollback significantly slows clean energy deployment", "Whether China's renewable dominance translates into global supply chain control", "Whether battery storage crosses cost thresholds enabling full grid decarbonization", "Whether green hydrogen costs fall fast enough for industrial decarbonization", "Whether the Iran war oil shock produces lasting policy shift toward energy independence", "Whether EU tax reforms reduce electricity taxes to accelerate electrification", "Whether Germany's rapid phase-out of nuclear and fossil fuels maintains grid stability"],
  insights: ["The cost curves have already won the economic argument for electricity. The question is no longer whether renewables are cheaper — they are. The bottleneck has moved from economics to permitting, grid expansion, and storage.", "China's dominance of transition supply chains is the geopolitical story Western governments are scrambling to respond to. Decarbonizing means trading oil dependency for Chinese manufacturing dependency. Their response — domestic content requirements, tariffs — is slowing transition deployment.", "The Iran war oil shock is the best argument for energy independence and therefore for the transition ever made. Countries that diversified away from fossil fuels are not experiencing the same economic shock. This message is landing.", "The Global South equity question has no clean answer. Bangladesh, Nigeria, Ethiopia — countries that contributed almost nothing to cumulative historical emissions — are being asked to develop without the fossil fuels that powered Western prosperity.", "Energy storage remains a critical bottleneck for grid stability — lithium-ion battery demand is projected to grow 6-7% annually, with potential supply shortages by 2028."],
  questions: ["Does the US IRA survive rollback — and what is the emissions impact if it doesn't?", "Does China's renewable dominance produce a supply chain dependency rivaling oil dependency?", "Does the Iran war oil shock produce lasting energy policy change in major importing countries?", "Does the Global South develop on fossil fuels or does sufficient clean energy finance materialize?", "Will EU tax reforms reduce electricity taxes to accelerate electrification?", "Can Germany maintain grid stability with rapid phase-out of nuclear and fossil fuels?"],
  science: ["Nature Energy (2025): Solar PV learning rate — costs fall approximately 20% for every doubling of cumulative capacity. This rate has held for 40 years and shows no sign of slowing.", "BloombergNEF (2025): Clean energy investment reached $1.8T in 2024 — first year exceeding fossil fuel investment.", "Science (2024): Grid decarbonization modeling — 90%+ renewable grids technically achievable in most regions with existing technology. Constraint is grid infrastructure and storage, not technology.", "IEA World Energy Outlook (2025): Current policies scenario has fossil fuels still supplying 60% of primary energy in 2050. Net zero requires tripling clean energy investment by 2030.", "Nature (2025): EV battery second-life applications and recycling pathways maturing — reduces raw material constraint concerns for long-term deployment.", "IRENA (2025): Renewable energy now employs more people globally than fossil fuel industries."],
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
    name: "Teresa Ribera",
    role: "EU Climate Commissioner",
    why: "The EU's Fit for 55 implementation and response to Chinese clean energy competition are in her portfolio.",
    alignment: "European Union",
    status: "active"
  }]
}, {
  id: "CL03",
  code: "ARCTIC-CLIMATE-01",
  heat: 4,
  status: "developing",
  updated: "Apr 20 2026",
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
    "NASA reports Arctic sea ice extent in March 2026 tied lowest maximum on record since 1979 (14.29 million sq km)",
    "Colorado State University study finds biological particles from Arctic melt ponds play key role in cloud formation",
    "Researchers identify 37 subglacial lakes beneath Canada's Arctic glaciers - 35 previously unknown"
  ],
  developing: [
    "Whether permafrost carbon release creates a self-sustaining feedback loop independent of human emissions",
    "Exact quantities and timing of permafrost carbon and methane release — large scientific uncertainty", 
    "Whether summer Arctic sea ice will disappear entirely within 10-20 years or longer",
    "How Arctic warming affects jet stream and mid-latitude weather patterns",
    "Whether methane hydrates on Arctic ocean floor are destabilizing",
    "How Greenland ice sheet contributes to sea level rise under different warming scenarios",
    "Impact of newly discovered ice-nucleating particles from melt ponds on Arctic cloud formation and climate feedbacks",
    "Dynamics of newly mapped subglacial lake networks beneath Canadian Arctic glaciers and their influence on ice loss"
  ],
  insights: [
    "The permafrost carbon feedback is the sleeper risk in climate science. Current IPCC models include it partially but cannot fully capture non-linear dynamics. If permafrost thaw accelerates beyond current trajectories — which some observational data suggests — the effective carbon budget for any temperature target is smaller than officially stated.",
    "Arctic sea ice loss is not primarily an aesthetic loss — it is a fundamental change to the climate system. Each increment of ice loss increases warming pressure on the system through the ice-albedo feedback. This is the clearest example of a reinforcing feedback loop.",
    "The infrastructure consequences of permafrost thaw are immediate and enormous. Russia has the most infrastructure built on permafrost — roads, pipelines, buildings, entire cities. The cost to Russian infrastructure alone is estimated in the trillions. This is happening now.",
    "The Arctic sovereignty and Arctic climate stories are the same story viewed from different angles. Both are driven by sea ice loss. The climate science story is about physics and feedback loops. The sovereignty story is about who controls the resources and routes that ice loss opens.",
    "New research suggests biological particles from Arctic melt ponds may be a previously underestimated driver of cloud formation - potentially creating new climate feedback loops as melt ponds increase."
  ],
  questions: [
    "Is the permafrost carbon feedback loop already self-sustaining — and would we know if it were?",
    "When does the Arctic Ocean have its first ice-free summer — and what are the system-level consequences?",
    "Are methane hydrates on the Arctic ocean floor destabilizing?",
    "How much does Arctic warming contribute to extreme weather events in mid-latitudes including Canada?",
    "Is there any intervention — solar geoengineering, carbon removal — that could stabilize the Arctic system?",
    "How will newly discovered ice-nucleating particles from melt ponds affect Arctic cloud cover and climate feedbacks?",
    "What role will newly mapped subglacial lakes play in accelerating glacier loss?"
  ],
  science: [
    "Nature (2024): Arctic warming rate has increased from 3x to 4x global average over past decade — amplification accelerating.",
    "Science (2025): Permafrost active layer depth increasing 3-5cm per decade across Siberia — methane flux measurements 40% higher than 2010 baseline.",
    "Nature Climate Change (2024): Greenland ice sheet melt contributing 0.7mm/year to sea level rise — rate has tripled since 1990s.",
    "Geophysical Research Letters (2025): First ice-free Arctic summer now projected for 2030s under current emissions trajectory — 10-15 years earlier than 2021 IPCC projection.",
    "Science (2024): Arctic jet stream meandering index at highest recorded level — consistent with increased frequency of persistent extreme weather events in mid-latitudes.",
    "Nature Geoscience (2025): Methane hydrate destabilization on Siberian continental shelf — active monitoring shows increasing bubble columns. Scale of potential release deeply uncertain.",
    "Geophysical Research Letters (2026): Colorado State University study finds biological ice-nucleating particles from Arctic melt ponds contribute significantly to cloud formation."
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
    name: "Camille Mavis",
    role: "PhD Candidate, Colorado State University",
    why: "Lead author on new study of biological ice-nucleating particles from Arctic melt ponds.",
    alignment: "Academic/Scientific",
    status: "active"
  }]
}, {
  id: "CL04",
  code: "FOOD-01",
  heat: 4,
  status: "escalating",
  updated: "Apr 20 2026",
  title: "Climate & Food Security",
  sub: "Drought · Agricultural Collapse · The Countries Already in Crisis",
  card: "Climate change is already reducing agricultural yields in the most vulnerable regions. The Iran war has compounded existing supply chain stress. 280 million people are in acute food insecurity. The food system is more fragile than most people realize.",
  summary: "The global food system is under compounding stress from three simultaneous drivers: climate-driven agricultural disruption, conflict-driven supply chain disruption, and economic stress. Approximately 280 million people are experiencing acute food insecurity as of early 2026 — roughly double 2019 levels. The countries most at risk are concentrated in sub-Saharan Africa, the Horn of Africa, the Middle East, and South Asia. These are not countries that caused the climate crisis, but they are experiencing its food security consequences most severely.",
  bg: "Agricultural production is more sensitive to climate than most economic activity. Crops are grown in specific temperature and precipitation windows. Small deviations — a few degrees of warming, shifted rainfall patterns, more frequent extremes — produce significant yield reductions. The Green Revolution of the 1960s-70s produced high-yield crop varieties and irrigation infrastructure that dramatically increased food production. Those yield gains are largely exhausted, and the crops are increasingly stressed by conditions they were not bred for.\n\nThe fertilizer system is a particular vulnerability. Modern industrial agriculture depends on nitrogen fertilizers derived from the Haber-Bosch process, which uses natural gas as a feedstock. Russia and Belarus are major fertilizer exporters. The Ukraine war disrupted supply chains. The Iran war oil shock has increased the cost of natural gas inputs.\n\nWater security is the underlying driver of much food insecurity. Many major agricultural regions depend on groundwater, glacial meltwater, or specific rainfall patterns — all being disrupted by climate change. The Indus basin, the Nile, the Colorado River, and multiple Chinese river systems are all experiencing water stress affecting agricultural output.\n\nFood price volatility has political consequences. The Arab Spring of 2011 was preceded by food price spikes. The current combination of climate stress, Ukraine war wheat disruption, and Iran war oil shock has produced food price conditions more severe than 2011 by some measures.",
  confirmed: ["Approximately 280 million people in acute food insecurity globally — roughly double 2019 levels", "Ukraine war disrupted wheat exports — Ukraine and Russia supply approximately 30% of global wheat", "Iran war oil shock increasing fertilizer input costs", "Horn of Africa experiencing worst drought in 40 years — Somalia, Ethiopia, Kenya most affected", "Sahel food insecurity worsening as conflict and climate compound — 25 million at acute risk", "Gaza food insecurity at famine levels — WFP reporting starvation in northern Gaza", "India heat wave impacts reduced domestic wheat production in 2024", "Global food prices elevated — FAO Food Price Index approximately 15% above 2019 baseline", "Climate-driven agricultural yield reductions documented across multiple regions and crops", "Strait of Hormuz closure has disrupted global fertilizer supplies, causing 20-30% price increases", "Sub-Saharan Africa faces 40-50% maize yield losses due to fertilizer shortages and depleted soils", "International Rescue Committee warns June 2026 will trigger food-security time bomb in Africa", "24 countries projected to reach critical food insecurity if global temperatures rise by 2°C", "Caribbean food prices up 55-60% since 2018 due to Middle East war spillover effects", "SABIC Agri-Nutrients fertilizer export terminals in Saudi Arabia crippled by Iranian strikes", "Israeli precision agriculture companies report high demand but limited capacity to scale"],
  developing: ["Whether Horn of Africa drought conditions persist through 2026 growing seasons", "Whether any country crosses formal famine declaration threshold beyond Gaza", "Whether food price spikes produce political instability in at-risk countries — Egypt, Pakistan, Nigeria", "Whether Gulf fertilizer producers can resume exports after Iranian strike on SABIC complex", "Whether precision agriculture solutions can be deployed fast enough to offset fertilizer shortages", "Whether UK food price rises trigger broader European inflation spiral", "Whether El Niño weather pattern exacerbates Caribbean drought conditions", "Whether India-Middle East-Europe Economic Corridor moves ahead despite political constraints"],
  insights: ["Food insecurity is the most direct human consequence of the interaction between climate change and geopolitical conflict. The 280 million number is not a projection — it is a current measurement.", "The fertilizer vulnerability is underappreciated. Food security in the developing world depends on nitrogen fertilizer that depends on natural gas that depends on prices currently elevated by the Iran war. This chain of dependency is invisible until it breaks.", "The political instability risk from food prices is documented and current. The Arab Spring correlation with 2011 food price spikes is well-established. The countries most at risk — Egypt, Pakistan, Nigeria, Ethiopia — are also countries with nuclear weapons or significant geopolitical weight.", "Climate change is not an equal-opportunity crisis. The countries that contributed least to cumulative emissions are experiencing the most severe food security consequences. The moral arithmetic is stark and the political response is insufficient.", "The Gulf paradox: Saudi Arabia and Qatar control 20% of global nitrogen fertilizer exports but cannot feed themselves — now their export capacity is crippled by Hormuz closure and Iranian strikes.", "Precision agriculture can reduce but not eliminate import dependency — Israel's grain import dependency remains at 91% despite advanced agricultural technology."],
  implications: ["Sub-Saharan Africa faces immediate yield collapses — maize losses of 40-50% will trigger mass hunger by June 2026", "UK food price rises will push 12% of households into food poverty, with meat/dairy and processed staples hit hardest", "Global food system fragility means even wealthy nations cannot fully insulate themselves from supply shocks", "The India-Middle East-Europe Economic Corridor's food security infrastructure remains politically constrained and incomplete", "Climate-driven food insecurity gap between rich and poor nations will widen sevenfold under 2°C warming", "Caribbean faces compounding crisis from fuel price shocks, drought, and hurricane damage to agriculture"],
  risks: ["Somalia, DRC, Afghanistan, Haiti, and Mozambique face >30% increase in food insecurity under 2°C warming", "Export restrictions on fertilizers and energy could price vulnerable countries out of essential supplies", "Biofuel demand could divert crops from food to fuel as oil prices rise", "Failure to deploy precision agriculture solutions at scale could accelerate yield collapses in fertilizer-dependent regions", "Caribbean drought conditions could trigger secondary migration crises"],
  questions: ["Does the Iran war oil shock produce a fertilizer supply crisis affecting 2026 planting seasons?", "Which countries are at highest near-term risk of famine?", "Does food price stress produce political instability in any major country in 2026?", "What is the long-term trajectory of agricultural yields under 2°C and 3°C warming scenarios?", "Can Israel's agricultural technology be deployed fast enough to offset regional fertilizer shortages?"],
  science: ["Nature Food (2024): Global crop yield declines documented — wheat -5.5% per decade in heat-stressed regions, maize -3.1% per decade in sub-Saharan Africa under observed warming.", "Science (2025): Simultaneous crop failure risk — probability of multiple breadbasket failures in the same year has tripled since 1990 as climate extremes correlate across regions.", "Proceedings of the Royal Society B (2024): Food system fragility assessment — the global food system has fewer buffers against simultaneous shocks than at any point in the past 50 years.", "Nature Climate Change (2025): Water stress and food production — 40% of global agricultural land faces water stress by 2050 under current emissions trajectory.", "Lancet (2025): Malnutrition and climate — climate-driven food insecurity producing measurable increases in child stunting in sub-Saharan Africa and South Asia.", "FAO (2026): State of Food Security — 280 million in acute food insecurity, 750 million experiencing food insecurity at some level. Both at record highs.", "IIED (2026): Climate and food insecurity — 24 countries projected to reach critical food insecurity under 2°C warming, with low-income nations deteriorating seven times faster than wealthy ones."],
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
    name: "Tilahun Amede",
    role: "Director of Climate Adaptation, Alliance for a Green Revolution in Africa",
    why: "Documenting direct link between fertilizer shortages and 40-50% maize yield losses in Africa.",
    alignment: "African agriculture",
    status: "active"
  }, {
    name: "Ritu Bharadwaj",
    role: "Researcher, International Institute for Environment and Development",
    why: "Leading study on 24 countries facing critical food insecurity under 2°C warming.",
    alignment: "Climate justice",
    status: "active"
  }, {
    name: "Iddo Kan",
    role: "Professor, Hebrew University of Jerusalem",
    why: "Developer of Israel's National Food Security Plan 2050 modeling.",
    alignment: "Precision agriculture",
    status: "active"
  }]
}, {
  id: "CL05",
  code: "FOSSIL-01",
  heat: 4,
  status: "developing",
  updated: "Apr 20 2026",
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
    "Bangladesh paid $880 million for emergency LNG spot purchases at double pre-war prices after Iran blocked Strait of Hormuz",
    "Pakistan avoided spot LNG purchases after reducing fossil fuel dependence to 25% through solar expansion",
    "Qatar's Ras Laffan LNG facility suffered significant damage from Iranian strikes, worsening global supply crunch",
    "Iran blocked the Strait of Hormuz in response to US-Israel airstrikes, cutting off contracted LNG supplies",
    "Bangladesh bought 11 LNG cargoes from spot market at $21.35/mmBtu, double pre-war prices",
    "Pakistan's solar boom helped slash $12 billion in oil and gas imports over four years",
    "Southeast Asia fossil fuel subsidies hit record $105 billion in 2022, 60% above previous peak"
  ],
  developing: [
    "Whether Japan's nuclear restart and renewable acceleration survives domestic political opposition",
    "Whether South Korea's clean energy acceleration produces lasting policy or reverts post-crisis",
    "Whether US clean energy rollback is reversed in response to energy security arguments",
    "Whether global LNG infrastructure investment locks in gas dependency for 30+ years",
    "Whether the energy security frame permanently replaces the climate frame as the political argument for transition",
    "Whether Bangladesh shifts policy toward renewables after costly LNG spot purchases",
    "Whether Pakistan's solar success becomes model for other import-dependent economies",
    "Whether Qatar's LNG facility damage permanently reshapes global gas market dynamics",
    "Whether China's clean energy dominance creates new dependencies for importing countries"
  ],
  insights: [
    "The energy security argument for the transition is more politically durable than the climate argument in most democratic systems. Climate is abstract and future-oriented. Energy security is immediate and self-interested. The Iran war is making it viscerally real.",
    "The structural irony: the countries increasing production to fill the Strait gap are primarily the Gulf producers whose revenue depends on sustained fossil fuel demand. They benefit from both the crisis — higher prices — and the eventual resolution — continued demand.",
    "Japan and South Korea's responses are the most significant to watch. Both are large wealthy democracies with high fossil fuel import dependency, developed technological capacity, and strong energy security instincts.",
    "The LNG infrastructure lock-in risk is real. Building a new LNG terminal commits to 30+ years of gas imports. Countries fast-tracking LNG diversification may be trading one fossil fuel dependency for another.",
    "Pakistan's solar success demonstrates that rapid transition is possible even in energy-import dependent economies when policy aligns with consumer incentives",
    "The Bangladesh-Pakistan divergence shows how pre-crisis energy policy choices determine crisis resilience — solar investments provided insulation while LNG contracts created exposure",
    "China's clean energy dominance presents both opportunity and risk — cheap solar panels accelerate transition but create new dependencies"
  ],
  implications: [
    "Emerging economies facing high fuel import bills will face pressure to accelerate renewable adoption to reduce exposure",
    "Damage to Qatar's LNG infrastructure may permanently shift perceptions of Middle East gas supply reliability",
    "The solar-to-EV transition pathway seen in Pakistan could replicate across developing economies seeking energy independence",
    "Fossil fuel subsidies in Southeast Asia, which hit $105 billion in 2022, may become politically untenable as budgets strain",
    "Global oil demand projected to see sharpest decline since COVID-19 pandemic due to Iran war disruptions",
    "Countries forced to find alternatives to LNG may accelerate renewable energy adoption"
  ],
  risks: [
    "Emergency LNG infrastructure investments lock Asia into long-term gas dependence despite renewable alternatives",
    "Fossil fuel companies use war profits to lobby against clean energy policies that threaten their business model",
    "Short-term production increases by Gulf states undermine political will for transition in importing countries",
    "Bangladesh's financial strain from fuel imports triggers broader economic crisis with regional spillover effects",
    "China's clean energy dominance creates new geopolitical dependencies for importing countries"
  ],
  questions: [
    "Does the energy security argument produce lasting clean energy policy change in major fossil fuel importers?",
    "Does LNG infrastructure investment lock in gas dependency conflicting with net zero timelines?",
    "Do Japan and South Korea make permanent policy shifts or revert when the crisis passes?",
    "Does any OPEC+ member use the crisis revenue to begin domestic economic diversification?",
    "Will Pakistan's solar success inspire policy replication or remain isolated case?",
    "How will damage to Qatar's LNG facilities reshape long-term gas market dynamics?",
    "Will China's clean energy dominance accelerate transition or create new dependencies?"
  ],
  science: [
    "Nature Energy (2025): Countries with >40% renewable electricity penetration experienced 60% lower economic impact from oil price shocks — first empirical quantification of transition resilience benefit.",
    "IEA (2026): Strait of Hormuz closure scenario analysis — countries with diversified energy portfolios have 40-70% lower GDP exposure to oil supply disruption.",
    "Energy Policy (2025): LNG lock-in analysis — current LNG terminal construction pipeline, if completed, commits $2.1T in gas infrastructure extending to 2060s.",
    "Science (2025): Energy security and climate co-benefits — policies designed for energy security produce 65-80% of the emissions reductions required for climate targets as a co-benefit.",
    "Nature Climate Change (2024): Oil price shock political economy — historical analysis shows 18-24 month window of peak political receptiveness to clean energy policy following supply shocks."
  ],
  people: [
    {
      name: "Yoon Suk-yeol",
      role: "President, South Korea",
      why: "South Korea's clean energy acceleration response to the Strait closure is happening under his direction.",
      alignment: "South Korea",
      status: "active"
    },
    {
      name: "Ursula von der Leyen",
      role: "EU Commission President",
      why: "The EU's emergency energy measures and long-term transition policy are in her domain.",
      alignment: "European Union",
      status: "active"
    },
    {
      name: "Fatih Birol",
      role: "IEA Executive Director",
      why: "His scenario analysis of the Strait closure energy security impact is the key quantitative reference.",
      alignment: "International Energy Agency",
      status: "active"
    },
    {
      name: "Shafiqul Alam",
      role: "Analyst, Institute for Energy Economics and Financial Analysis",
      why: "Tracking Bangladesh's energy policy response to LNG price shock.",
      alignment: "Energy Transition",
      status: "active"
    }
  ]
}];

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
  showScience
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
const AI_PULSE = [{
  label: "Claude Opus Context",
  value: "1M tokens",
  delta: "unchanged"
}, {
  label: "AnthroPAC Funding",
  value: "$5M",
  delta: "new"
}, {
  label: "AI Supply Chain Attacks",
  value: "3 major",
  delta: "increased"
}, {
  label: "AI Governance Cases",
  value: "9 active",
  delta: "unchanged"
}];
function AIWatchPanel() {
  const [activeStory, setActiveStory] = useState("F01");
  const [tab, setTab] = useState("insights");
  const mainRef = React.useRef(null);
  const story = AI_STORIES.find(s => s.id === activeStory);
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
  }, "AI STORIES"), AI_STORIES.map(s => {
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
  }, "\u25C8 AI PULSE"), [...AI_PULSE, {
    label: "Active security alerts",
    value: `${activeAlertCount}`,
    delta: activeAlertCount > 0 ? "action required" : "all clear"
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
  const story = STORIES.find(s => s.id === active);
  const st = STATUS[story.status];
  const cc = CATCOLOR[story.cat];
  const catLabel = CATS.find(c => c.id === story.cat)?.label;
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
  }, `print("Hello, World!") · ${new Date().toLocaleDateString('en-US', {month:'long',day:'numeric',year:'numeric'}).toUpperCase()}`))), /*#__PURE__*/React.createElement("div", {
    className: "arc-header-count",
    style: {
      fontSize: 9,
      color: "#2e2e2e",
      fontFamily: "monospace"
    }
  }, STORIES.length, " STORIES \xB7 ", WAR_STORIES.length, " CONFLICTS")), /*#__PURE__*/React.createElement("div", {
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
  }, WAR_STORIES.filter(s => s.status === "active-war").length)))), mainTab === "ai" && /*#__PURE__*/React.createElement("div", {
    className: "ai-watch-outer",
    style: {
      display: "flex",
      flex: 1,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement(AIWatchPanel, null)), mainTab === "war" && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flex: 1,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement(WarWatchPanel, null)), mainTab === "canada" && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flex: 1,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement(CanadaWatchPanel, null)), mainTab === "power" && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flex: 1,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement(GenericWatchPanel, {
    stories: POWER_STORIES,
    color: POWER_COLOR,
    headerLabel: "\u2696 POWER & MONEY WATCH",
    headerSub: "Concentrated power, accountability, and mechanisms of impunity",
    defaultStory: "P01",
    showScience: false
  })), mainTab === "climate" && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flex: 1,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement(GenericWatchPanel, {
    stories: CLIMATE_STORIES,
    color: CLIMATE_COLOR,
    headerLabel: "\u25C9 CLIMATE & ENERGY WATCH",
    headerSub: "The slow emergency \u2014 science, transition, and the Iran war forcing function",
    defaultStory: "CL01",
    showScience: true
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
    const list = STORIES.filter(s => s.cat === cat.id);
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
    goToStory: goToStory
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
