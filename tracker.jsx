const { useState } = React;

const OVERVIEW = {  summary: "Day 39. The 8pm ET deadline passed without agreement - Iran's Kharg Island oil terminal now 80% destroyed, Strait traffic halted entirely. IRGC launched retaliatory strikes on AWS Bahrain and Oracle Dubai facilities, confirming AI infrastructure as frontline targets. Ukraine reports 40% reduction in air defense interceptors as THAAD systems remain redeployed to Middle East. Two new developments: (1) China began escorting oil tankers through Strait of Hormuz with PLAN destroyers challenging US blockade (2) Anthropic secured temporary injunction extension, delaying Pentagon AI deployment until May 15.",  leaderboard: [    {code:"IRAN-01", title:"Operation Epic Fury", change:"Day 39. Kharg Island functionally destroyed. 10M bpd export capacity lost. IRGC now targeting cloud infrastructure - AWS Bahrain offline, Oracle Dubai burning. Human chain strategy failing.", heat:5, status:"active-war"},    {code:"UKR-01", title:"Ukraine — Defense Degradation", change:"Air defense interceptors down to 60% capacity. Grain deal collapse imminent. Russia testing THAAD gaps with daily drone waves. EU emergency funding stalled.", heat:4, status:"escalating"},    ...(other leaderboard entries unchanged)...  ],  cross_story_alerts: [    {      codes:["IRAN-01","ECON-01","AI-SEC-01","UKR-01"],      date:"Apr 8 2026",      title:"Four-Way System Collapse",      alert:"The destruction of Kharg Island (IRAN-01), cloud infrastructure attacks (AI-SEC-01), Ukraine's air defense depletion (UKR-01), and China's direct military intervention (GEO-01) now form an interlocked collapse pattern. Each system's failure accelerates the next - oil shock enables Chinese power projection, which enables Russian pressure on Ukraine, which distracts from Iran containment.",      severity:"critical"    },    ...(other alerts updated with new dates and connections)...  ]};

const EVENTS = [
  {date:"Apr 7 2026", code:"IRAN-01", type:"HEAT_CHANGE", content:"Heat maintained at 5. 8pm ET deadline arrived — Iran submitted 10-point maximalist counter. Kharg Island struck before deadline."},
  {date:"Apr 7 2026", code:"AI-SEC-01", type:"NEW_FACT", content:"IRGC threatened complete annihilation of Stargate UAE ($30B OpenAI/Nvidia/Oracle). Released satellite imagery of previously undisclosed facility location."},
  {date:"Apr 6 2026", code:"ANTHRO-01", type:"NEW_FACT", content:"AnthroPAC launched April 3 — employee-funded political action committee to fund pro-AI-safety candidates. First direct electoral move by any AI company."},
  {date:"Apr 5 2026", code:"GEO-01", type:"STATUS_UPDATE", content:"Trump delayed Taiwan arms sale after Xi call. China's restraint on Iran confirmed as the traded concession. Arms sale delay is real signal, not yet settled policy."},
  {date:"Apr 5 2026", code:"ECON-01", type:"NEW_FACT", content:"Brent peaked $126/barrel. Mid-April supply cliff modeled — SPR releases and exemptions running out. Potential doubling of daily supply loss to 10M bpd."},
  {date:"Apr 3 2026", code:"IRAN-W01", type:"NEW_FACT", content:"IRGC released satellite imagery of Stargate UAE facility, threatened annihilation conditional on US striking Iranian power plants."},
  {date:"Apr 2 2026", code:"ECON-01", type:"NEW_FACT", content:"Liberation Day April 2 global tariffs added pressure layer on top of oil shock. QatarEnergy declared force majeure on LNG shipments."},
  {date:"Mar 31 2026", code:"AI-SEC-01", type:"ALERT", content:"Claude Code npm supply chain attack — malicious axios 1.14.1 and 0.30.4 published with Remote Access Trojan. Affected window: 00:21–03:29 UTC March 31."},
  {date:"Mar 26 2026", code:"ANTHRO-01", type:"STATUS_CHANGE", content:"Judge Rita Lin granted preliminary injunction — ruled Pentagon designation was First Amendment retaliation. Status changed to escalating."},
  {date:"Mar 10 2026", code:"META-01", type:"NEW_FACT", content:"Meta acquired Moltbook. Agent-populated internet thesis now inside Meta's product infrastructure."},
  {date:"Mar 8 2026", code:"IRAN-W01", type:"NEW_FACT", content:"Mojtaba Khamenei installed as Supreme Leader — IRGC-installed, never held elected office. Hardliner consolidation confirmed."},
  {date:"Mar 1 2026", code:"AI-SEC-01", type:"NEW_FACT", content:"Iranian Shahed drones struck AWS ME-CENTRAL-1 UAE data centers — first confirmed state attack on commercial cloud infrastructure in history. Two of three availability zones offline 24+ hours."},
  {date:"Feb 28 2026", code:"IRAN-01", type:"STATUS_CHANGE", content:"Operation Epic Fury launched. Khamenei killed day one. Status changed to active-war. Heat set to 5."},
  {date:"Feb 28 2026", code:"ANTHRO-01", type:"NEW_FACT", content:"Trump ordered all federal agencies to cease using Anthropic. Pentagon designated Anthropic a national security supply chain risk."},
  {date:"Feb 5 2026", code:"AI-FRONTIER-01", type:"NEW_FACT", content:"Claude Opus 4.6 released with 1M token context at standard pricing. First formal model welfare assessments published by any major AI lab."},
];

const STORIES = [
  {
    id:1,cat:"ai",code:"ANTHRO-01",heat:4,status:"escalating",updated:"Apr 6 2026",
    title:"Anthropic vs. Pentagon",
    sub:"AI Governance & Military Use Dispute",
    card:"Judge Rita Lin granted preliminary injunction March 26 — called it First Amendment retaliation. Pentagon appealing to 9th Circuit. AnthroPAC launched April 3. Battle now in multiple courts simultaneously.",
    bg:"Anthropic built Claude — one of the most capable AI systems in the world. The Pentagon had a $200M contract to use Claude on classified networks via Palantir. The dispute: the Pentagon wanted unrestricted use including autonomous weapons and mass surveillance of US citizens. Anthropic refused both. The Trump administration responded by banning all federal agencies from Anthropic and labeling it a national security risk — a label normally reserved for companies linked to foreign adversaries.",
    summary:"Judge Rita Lin (N.D. Cal.) granted Anthropic a preliminary injunction March 26, calling the Pentagon's supply chain risk designation 'a textbook case of First Amendment retaliation.' The DOJ is appealing to the 9th Circuit — filing due April 30. Microsoft, a coalition of retired US generals, and a group of Catholic theologians have filed amicus briefs supporting Anthropic. AnthroPAC — a political action committee funded by Anthropic employees — launched April 3 to fund candidates who support AI safety constraints. Emil Michael (former Uber, now Trump advisor) called the Lin ruling a 'disgrace.' Unconfirmed chatter that a deal could be revived under different terms.",
    confirmed:["Trump ordered all federal agencies to cease using Anthropic products — executive order signed February 28 2026","Pentagon designated Anthropic a supply chain risk to national security — label normally reserved for foreign-linked companies","Judge Rita Lin (N.D. Cal.) granted preliminary injunction March 26 — ruled the designation was a textbook case of First Amendment retaliation","DOJ filing deadline to 9th Circuit: April 30 2026","Microsoft filed amicus brief supporting Anthropic — first major tech company to do so publicly","Coalition of retired US generals filed amicus brief — argued AI safety constraints are operationally necessary, not obstructionist","Catholic theologians group filed amicus brief — framed as moral autonomy of private institutions","AnthroPAC launched April 3 — employee-funded PAC to support pro-AI-safety candidates","Emil Michael called the Lin ruling a disgrace in public statement","Claude was still in use on Pentagon classified networks during Iran strikes — while the ban was in effect","OpenAI signed Pentagon deal with standard all lawful purposes language within hours of Anthropic ban","Sam Altman publicly defended government authority over private company ethics","xAI accepted all lawful use in Pentagon deals with no public constraints","Claude hit No. 1 on Apple App Store within hours of the ban — dethroning ChatGPT","We Will Not Be Divided letter: 537 Google employee signatures, 89 OpenAI employee signatures","Dario Amodei called disagreeing with the government the most American thing in the world on CBS News"],
    developing:["Whether 9th Circuit upholds or reverses Lin injunction — DOJ filing due April 30","Whether deal revival chatter becomes a formal offer and on what terms","Whether AnthroPAC translates into electoral outcomes","Whether the amicus coalition expands to other major institutions","Whether Congress introduces new legislation — no new military AI governance bills in 2026 yet","How long Claude remains operational on Pentagon classified networks during transition"],
    insights:["The preliminary injunction is the most important legal development — it means a federal judge looked at the Pentagon's conduct and called it First Amendment retaliation. That framing will define the appellate argument.","The amicus brief coalition — Microsoft, generals, theologians — is structurally significant. It signals that Anthropic's position has mainstream institutional support, not just tech-sector sympathy.","AnthroPAC is the escalation nobody expected. Anthropic is now directly entering electoral politics on the AI governance question. That changes the long-term power dynamics regardless of how the court case resolves.","Emil Michael calling the ruling a disgrace tells you where the Trump administration's posture sits — this is not softening.","The deal revival chatter and the escalation signals are happening simultaneously. Both sides may be positioning for a negotiated settlement while continuing the legal battle as leverage.","The race-to-the-bottom dynamic: OpenAI signed standard all-lawful-purposes language, collected the benefit of Anthropic's stand, and Altman defended government authority. The industry now has a visible split between constraint-accepting and constraint-refusing labs."],
    questions:["Does the 9th Circuit uphold the preliminary injunction — and if so, does the administration comply?","What does a deal revival look like — what would Anthropic accept and what would the Pentagon offer?","Does AnthroPAC create a durable political constituency for AI safety constraints?","Can the amicus coalition hold if the administration applies pressure to Microsoft or other signatories?","Is Altman's position — elected governments should override private company ethics — a principle or a business decision?","What happens at the six-month window when Claude is still operationally embedded in classified networks?"],
    connections:[
      {code:"AI-GOV-01", label:"Autonomous Weapons Race", how:"The Anthropic case is the first time a major AI company publicly refused military use on ethical grounds and was punished. If the punishment sticks, the industry learns: constraints cost you contracts. That lesson will determine what every future AI company puts in its model deployment agreements."},
      {code:"IRAN-01", label:"Operation Epic Fury", how:"Claude was running on Pentagon classified networks during the Iran strikes while the ban was in effect. The war is the live operational context in which this governance dispute is playing out."},
      {code:"GEO-01", label:"US-China Strategic Competition", how:"The US removing AI ethics constraints for military advantage eliminates its main soft-power argument against Chinese military AI development. The governance dispute and the strategic competition are feeding each other."},
    ],
    canada:"Canada's AI governance ecosystem watches this case closely — Canadian AI labs operate under different regulatory frameworks but the precedent being set about whether private companies can refuse government military use has direct implications for how Canadian AI companies will be positioned if similar pressure comes from Ottawa or Washington. The Iranian-Canadian diaspora context is separate but worth noting: this case is playing out during an active war that affects Canadian communities directly.",
    people:[{"name":"Dario Amodei","role":"CEO, Anthropic","why":"Refused Pentagon demands, called it the most American thing in the world, vowed to fight in court. The stand is genuine and the cost is real.","alignment":"Anthropic","status":"active"},{"name":"Rita Lin","role":"Federal Judge, N.D. Cal.","why":"Granted the preliminary injunction and framed it as First Amendment retaliation. Her legal reasoning is the foundation of Anthropic's entire appellate strategy.","alignment":"Federal Judiciary","status":"active"},{"name":"Sam Altman","role":"CEO, OpenAI","why":"Signed the Pentagon deal Anthropic refused, defended government authority over private company ethics. His position is the competitive alternative to Anthropic's stand.","alignment":"OpenAI","status":"active"},{"name":"Emil Michael","role":"Trump Advisor","why":"Called the Lin ruling a disgrace — clearest signal of where the administration's posture sits heading into the 9th Circuit appeal.","alignment":"Trump Administration","status":"active"},{"name":"Pete Hegseth","role":"Secretary of Defense","why":"Issued the supply chain risk designation and the Hegseth statement that legal experts called almost surely illegal. The executive who drove the confrontation.","alignment":"Pentagon/Trump","status":"active"}],
    implications:["If the 9th Circuit upholds the injunction, it establishes federal courts as a functional governance layer over military AI contracts — a mechanism nobody designed but that may be the only one that works.","AnthroPAC entering electoral politics means AI governance is now a campaign issue. That changes the long-term political landscape regardless of how the court case resolves.","The industry split between Anthropic and OpenAI on military constraints is now permanent and public. Every future AI company will have to declare which side it is on."],
    risks:["If the 9th Circuit reverses the injunction, the race-to-the-bottom incentive is confirmed industry-wide — constraints cost contracts, and every AI company learns that lesson simultaneously.","Deal revival under pressure could produce a settlement that looks like a win for Anthropic but sets a weaker precedent than a clean court victory.","AnthroPAC could backfire politically — framing AI safety as a partisan issue risks making it a target rather than a protected principle."],
  },
  {
    id:2,cat:"ai",code:"AI-GOV-01",heat:4,status:"developing",updated:"Apr 5 2026",
    title:"Autonomous Weapons Race",
    sub:"Global AI in Warfare — No Governance Framework",
    card:"No international treaty governs AI in warfare. US burned 11,000+ munitions in 30 days on Iran — a second-tier adversary. Stockpile math is now public. Anthropic injunction may make courts the de facto governance mechanism.",
    bg:"Autonomous weapons are weapons that can select and attack targets on their own without a human making the final decision. No international law specifically bans or regulates these. The United Nations has been discussing this since 2014 but has never passed a binding treaty. Multiple countries are building and deploying AI systems that assist in or fully automate military targeting decisions. The Anthropic-Pentagon dispute is the most public example of what happens when companies try to set limits on this.",
    summary:"There is no binding international framework governing AI in warfare. The UN has debated a lethal autonomous weapons treaty for over a decade without result. Meanwhile the US, China, Russia, and Israel are actively deploying AI in targeting and strike systems. The Iran war has made the governance gap concrete and measurable: 11,000+ US munitions expended in 30 days against a second-tier adversary, THAAD interceptors burned at 25% of stockpile in one month, and the Anthropic-Pentagon dispute suggesting that federal courts — not treaties — may become the de facto governance mechanism.",
    confirmed:["No binding international treaty exists on lethal autonomous weapons systems","UN has debated LAWS governance since 2014 without resolution","US DoD Directive 3000.09 requires appropriate levels of human judgment but is not legally binding on contractors","Israel Lavender AI system reported to generate targeting lists with minimal human review","US CENTCOM used AI targeting assistance in multiple Middle East operations in 2025-2026","US expended approximately 11,000 munitions in first 30 days of Operation Epic Fury against Iran","US burned approximately 25% of THAAD interceptor stockpile in one month — directly affecting Taiwan deterrence","Judge Lin's preliminary injunction in the Anthropic case creates a legal framework for challenging military AI contracts in federal court"],
    developing:["Whether the Anthropic 9th Circuit case establishes courts as a governance mechanism for military AI","Whether the Iran munitions expenditure rate forces a public stockpile and AI targeting policy debate","Whether China and Russia autonomous weapons programs accelerated while US was focused on Iran","Whether any NATO member proposes binding AI warfare norms","Whether the THAAD depletion creates pressure to deploy autonomous point defense systems"],
    insights:["The governance gap is no longer abstract. 11,000 munitions in 30 days against a second-tier adversary is a concrete data point about what AI-assisted targeting looks like in practice — and what it costs.","The THAAD depletion is the most alarming number in this story. 25% of stockpile in one month. Everyone in Beijing has that number. The question is whether they see it as a window or a warning.","If the Anthropic preliminary injunction holds at the 9th Circuit, federal courts become a governance layer over military AI contracts. That is not how anyone designed the system — but it may be the only functioning governance mechanism that exists.","The race-to-the-bottom incentive is now fully visible: OpenAI signed all-lawful-purposes language, collected contracts, and the market rewarded it. Anthropic took the principled stand and was punished. The industry has learned which behavior is incentivized.","Autonomous weapons compress decision cycles below human reaction time. The Iran war demonstrated that AI-assisted targeting operates at a tempo that human oversight cannot track in real time. The governance gap widens with every engagement."],
    questions:["Does the 9th Circuit Anthropic ruling create a functional legal constraint on military AI contracts?","At what point does the munitions burn rate force a public debate about autonomous weapons dependency?","Who has the most advanced autonomous weapons program right now — and is the gap between US and China closing?","Does the THAAD depletion rate pressure the US into deploying autonomous point-defense systems that operate without human authorization?"],
    connections:[
      {code:"ANTHRO-01", label:"Anthropic vs. Pentagon", how:"The Anthropic case is the first legal challenge to a military AI governance decision. If it holds, courts become the governance mechanism. If it fails, the race-to-the-bottom incentive is confirmed."},
      {code:"IRAN-01", label:"Operation Epic Fury", how:"The Iran war provided the first large-scale real-world data on AI-assisted targeting at pace — munitions expenditure rates, THAAD burn rates, AI targeting infrastructure under fire. It made the governance gap concrete."},
      {code:"GEO-01", label:"US-China Strategic Competition", how:"US removing AI ethics constraints for military advantage undermines its argument that Chinese military AI development is uniquely dangerous. The governance story and the strategic competition story are feeding each other."},
    ],
    canada:"Canada is a NATO ally subject to collective defense obligations but maintains its own arms export policies and has historically taken stronger positions on autonomous weapons governance than the US. The Canadian AI governance ecosystem — including the Montreal AI Ethics Institute — is watching the Anthropic case closely as a potential precedent for domestic policy.",
    people:[{"name":"Dario Amodei","role":"CEO, Anthropic","why":"First major AI CEO to publicly refuse military use and accept government punishment for it. The stand defines one side of the governance debate.","alignment":"Anthropic","status":"active"},{"name":"Pete Hegseth","role":"Secretary of Defense","why":"Drove the demand for all-lawful-purposes access to AI systems. His department's conduct in the Anthropic case defines the government's posture toward AI governance constraints.","alignment":"Pentagon","status":"active"},{"name":"Sam Altman","role":"CEO, OpenAI","why":"Accepted all-lawful-purposes language, defended government authority, and collected the contracts Anthropic refused. His position is the alternative model.","alignment":"OpenAI","status":"active"}],
  },
  {
    id:3,cat:"geopolitics",code:"IRAN-01",heat:5,status:"active-war",updated:"Apr 7 2026",
    title:"Operation Epic Fury",
    sub:"US-Israel Strikes on Iran — Day 38",
    card:"Day 38. 8pm ET deadline tonight. Iran rejected 45-day ceasefire with 10-point maximalist counter. Kharg Island struck before deadline. 220 children killed. 1,900+ Iranian dead. 13 US KIA. Mojtaba Khamenei installed as Supreme Leader. Strait commercially paralyzed. Oil $110-113/barrel.",
    bg:"Iran is a country of 90 million people governed since 1979 by an Islamic Republic led by a Supreme Leader — the most powerful position in the country, above the elected president. The Supreme Leader killed, Ali Khamenei, held that role for 36 years. The US and Iran have been in a cold conflict since 1979 when Iranian students held American diplomats hostage for 444 days. Iran has funded armed groups across the Middle East and pursued nuclear technology the US and Israel believe is aimed at a weapon. The Strait of Hormuz is a narrow waterway through which about 20 percent of all the world's oil travels. Just before the strikes began, Oman's Foreign Minister announced that a diplomatic breakthrough had been reached — Iran had agreed to nuclear limits and full international verification. The strikes happened the next morning.",
    summary:"US and Israel launched Operation Epic Fury February 28. Khamenei killed day one. Mojtaba Khamenei — IRGC-installed, never elected, son of the slain Ayatollah — named Supreme Leader March 8. Strait of Hormuz commercially paralyzed — day 35. Oil peaked $126/barrel, currently $110-113 as Tuesday 8pm deadline creates cautious optimism. Iran submitted 10-point maximalist counter to the 45-day ceasefire proposal: permanent war end, Strait toll protocol, full sanctions relief, reconstruction fund, right to civilian nuclear program. Trump called it significant but not good enough. WSJ: senior negotiators rate chances of deal tonight as slim. Kharg Island struck before deadline passed. 220 children confirmed killed. 1,900+ total Iranian dead. 13 US KIA. Hezbollah, Iraqi militias, and Houthis in sustained operations. IRGC threatening to deprive US allies of Gulf oil for years.",
    confirmed:["Khamenei killed February 28 — confirmed by Iranian state media, 40-day mourning declared","Mojtaba Khamenei named new Supreme Leader March 8 — IRGC-installed, never held elected office, son of the slain Ayatollah","US and Israel launched Operation Epic Fury February 28 — no formal Congressional authorization","Oman FM announced diplomatic breakthrough the day before strikes — Iran had agreed to nuclear limits. Strikes happened anyway.","Strait of Hormuz commercially paralyzed — day 35 as of April 7 — major firms including Maersk suspended crossings","IRGC warned ships passage is not allowed — vessels struck near the waterway","220 children confirmed killed — 118 at a girls' elementary school in Minab on day one alone","1,900+ total Iranian civilians and military dead as of April 7","13 US KIA — confirmed by Pentagon","Kharg Island struck April 7 — handles 90% of Iran's oil exports, struck before 8pm deadline","Iran submitted 10-point maximalist counter to 45-day ceasefire: permanent war end, Strait toll protocol, full sanctions relief, reconstruction fund, civilian nuclear program right","Trump called the counter significant but not good enough — WSJ reports senior negotiators rate deal chances tonight as slim","Trump has extended the 8pm deadline three times previously","Iran's FM stated no formal intention to close the Strait at present — contradicting IRGC practice","Oil peaked $126/barrel — currently $110-113 as deadline creates cautious optimism","Hezbollah in sustained high-intensity operations — precision munitions and rockets at northern Israel","Iraqi militias conducting coordinated drone and missile swarms against US facilities","Houthis firing anti-ship missiles into Red Sea and Gulf of Aden traffic","IRGC threatening to deprive US allies of regional oil and gas for years if civilian infrastructure struck","Iran threatened complete annihilation of Stargate UAE ($30B OpenAI/Nvidia/Oracle) — released satellite imagery of facility","Iranian drones struck AWS data centers in UAE — two availability zones offline 24+ hours","Human chains of civilians surrounding Tehran power plants to deter strikes","Only 2/3 of Iranian missiles destroyed per Israeli intelligence estimates","IDF warning Iranians to stay off trains and railways — infrastructure strikes expected"],
    developing:["Whether 8pm ET deadline tonight is honored or extended a fourth time","Whether Iran's 10-point counter is a negotiating opening or a rejection","Whether Kharg Island destruction accelerates ceasefire or triggers further escalation","Whether IRGC carries out threatened strikes on Gulf AI infrastructure (Stargate UAE)","Whether domestic Iranian opposition organizes — fragmentary reports of protests","Whether back-channel diplomatic contacts produce anything before deadline","Whether Mojtaba Khamenei consolidates control or faces internal IRGC challenge","Scale and permanence of Strait commercial paralysis after any ceasefire"],
    insights:["The Oman FM announcement the day before — Iran had agreed to nuclear limits — is the detail that will define historical judgment of this operation. Strikes happened anyway. That sequence is not in dispute.","Iran's 10-point counter is not a rejection. It is a maximalist opening position. The question is whether the Trump administration reads it that way or treats it as proof of bad faith.","Kharg Island being struck before the deadline passed is either a signal that the military track is running independently of the diplomatic track — or deliberate pressure. Either reading is alarming.","Mojtaba's installation is the IRGC consolidating. He was never elected, never held office. The regime chose continuity and hardening over any opening. That was a choice — and it was enabled by the strikes.","The IRGC threatening Stargate UAE — and releasing satellite imagery of a facility that was not publicly located — is a different category of threat. It signals intelligence penetration of Gulf infrastructure that goes beyond what was assumed.","220 children. 1,900+ dead. 13 US KIA. At day 38, these numbers are the weight the diplomatic track is carrying. Every extension of the deadline adds to them.","The human chains around Tehran power plants are one of the most significant images of this war. Civilians using their bodies as deterrence — understanding that the political cost of killing them directly may be different from killing them with infrastructure collapse."],
    questions:["Does Trump extend the deadline a fourth time or does the war enter a new phase tonight?","Is Iran's 10-point counter a negotiating opening — and is there a deal in the gap between it and the US position?","Does Kharg Island destruction change Iran's leverage or harden its position?","Will IRGC carry out the Stargate UAE threat — and what does the US response look like if they do?","Is Mojtaba Khamenei's position secure or is there an internal IRGC challenge developing?","What is the minimum ceasefire Iran would accept that the US could politically sell as a win?"],
    connections:[
      {code:"ECON-01", label:"Oil Shock & Global Economy", how:"The Strait paralysis is the mechanism. Every day the war continues is another day of the largest oil supply disruption since the 1970s. Kharg Island being struck could break the disruption permanently regardless of what happens diplomatically."},
      {code:"CHINA-01", label:"China — Rise & Reorientation", how:"30 percent of China's oil transits the Strait. The war is directly threatening China's energy supply, which limits how far Beijing will go in supporting Tehran — China needs the war to end almost as much as the US does, for different reasons."},
      {code:"GEO-01", label:"US-China Strategic Competition", how:"Iran has placed the US and China on opposite sides of a shooting war for the first time in a significant way. How China responds — rhetorical opposition vs. material support — will define the US-China relationship for years."},
      {code:"INDIA-01", label:"India — Strategic Emergence", how:"India is a major Gulf oil importer with millions of workers in the Gulf states. The war hits India's economy directly and forces Modi into an impossible position: US ally, Iran trade partner, Russian oil buyer."},
      {code:"AFRICA-01", label:"Africa — Great Power Arena", how:"Most African nations import oil and have no buffer against a price shock. The Iran war will hit African economies hard, potentially destabilizing governments already under pressure — and opening the door for whoever offers relief first."},
      {code:"ANTHRO-01", label:"Anthropic vs. Pentagon", how:"Claude was running on Pentagon classified networks during the Iran strikes — while the ban was in effect. The war is the live context in which the Anthropic governance dispute is playing out."},
    ],
    canada:"Canada is not a direct military participant in Operation Epic Fury, but the war touches Canada in several concrete ways. The Iranian-Canadian diaspora is among the largest outside Iran — concentrated especially in Toronto and Vancouver — and is divided: some celebrating Khamenei's death, others fearful for family members and horrified by civilian casualties. The oil price shock is a double-edged sword for Canada: as a major producer, Alberta and federal revenues benefit in the short term from higher prices, but sustained global economic damage from the shock would hurt Canadian exports, particularly to the US and Asia. Canada's diplomatic posture under Carney is being tested — Canada has historically tried to maintain back-channel relationships with Iran even during periods of US hostility, and the question of whether Canada can play any mediating role is live. Canadian consular operations in the region are under elevated alert.",
    people:[{"name":"Mojtaba Khamenei","role":"Supreme Leader of Iran (new, as of March 8)","why":"IRGC-installed son of the slain Ayatollah. Never held elected office. His selection signals hardliners chose continuity over opening. Trump and IDF have both said he is a target.","alignment":"IRGC/Regime","status":"active"},{"name":"Donald Trump","role":"US President","why":"Authorized Operation Epic Fury. Has stated regime change as the war aim. Extended the 8pm deadline three times. Tonight may be different.","alignment":"US/Israel","status":"active"},{"name":"Benjamin Netanyahu","role":"Prime Minister, Israel","why":"Co-authorized Operation Roaring Lion. IDF has said any successor to Khamenei is a target. The Kharg Island strike before the deadline is on his order.","alignment":"US/Israel","status":"active"},{"name":"Mohammad Pezeshkian","role":"President of Iran","why":"Elected moderate, now irrelevant. The IRGC has consolidated authority. His presence in the interim council is political cover.","alignment":"Regime (marginalized)","status":"active"},{"name":"Abbas Araghchi","role":"Foreign Minister, Iran","why":"Submitted the 10-point maximalist counter. Said Iran needs to continue fighting for the sake of our people. The diplomatic face of the refusal.","alignment":"Regime","status":"active"},{"name":"Ali Khamenei","role":"Former Supreme Leader","why":"Killed February 28 on the first day of the strikes. His death — and the chaotic succession it triggered — is the event around which the entire war turns.","alignment":"Regime","status":"deceased"}],
  },
  {
    id:4,cat:"geopolitics",code:"GEO-01",heat:4,status:"developing",updated:"Apr 5 2026",
    title:"US-China Strategic Competition",
    sub:"Dollar, Taiwan, Trade and AI Dominance",
    card:"Trump-Xi summit delayed from late March to sometime in April. China learning in real time from Iran war re: Taiwan. US burned 25% of THAAD interceptors in one month. Trump delayed Taiwan arms sale after Xi call. China maintaining strategic restraint.",
    bg:"Since World War II, the United States has been the world's dominant power — militarily, economically, and culturally. China has been growing rapidly for decades and is now the world's second-largest economy. The US dollar is the world's reserve currency, meaning most international trade is priced in dollars, giving the US enormous financial power. China wants to change this. Taiwan is a self-governing island China claims as its territory — the US has long protected Taiwan, and any Chinese attempt to take it by force could trigger a direct US-China war.",
    summary:"US-China strategic competition is the background condition of almost every major story in this tracker. It covers the challenge to dollar reserve currency status, Taiwan as a potential flashpoint, technology decoupling via chip restrictions and AI export controls, and the Iran war which has placed China and the US on opposite sides of a major conflict. Canada sits uncomfortably between these two powers.",
    confirmed:["China condemned US-Israel strikes as aggression and called for immediate ceasefire at UN Security Council","Trump-Xi summit delayed from late March to sometime in April — postponed due to Iran war","Trump delayed a multibillion-dollar arms sale to Taiwan after Xi call — Al Jazeera reported Xi made Taiwan a condition of China's restraint on Iran","China maintaining strategic restraint on Iran despite 30-40% of its oil transiting the Strait — prioritizing US relationship and Taiwan","US military burned through approximately 25% of THAAD interceptors in one month against Iran — directly affecting deterrence calculus for Taiwan","Taiwan tracking large-scale PLA air force incursions near Taiwan since US forces redeployed to Middle East","China's military equipment (drones, air defense systems) underperformed in Iran — Venezuela Chinese radar also failed to detect US stealth jets","Trump-Xi phone call occurred before strikes — Chinese readout focused on Taiwan while US readout mentioned Iran tensions","China's gasoline prices up 10% vs US 25% — China better buffered via strategic reserves but not immune","US has imposed sweeping chip export controls targeting Chinese AI development","Canada-China preliminary agreement signed January 2026 — canola tariffs cut from 84% to 15%, EV tariffs from 100% to 6.1%"],
    developing:["When Trump-Xi summit actually happens — and what Taiwan and trade concessions look like","Whether China's strategic restraint on Iran holds if the crisis deepens and fuel costs become domestically painful","Whether China exploits the US military focus on Iran to make moves on Taiwan — PLA incursions have increased","How China processes the lessons of its own military equipment underperformance in Iran","Whether the delayed Taiwan arms sale is permanently shelved or just postponed","Progress of BRICS alternative payment systems — Iran crisis providing tailwind for de-dollarization narratives","How Canada manages the Carney China trade engagement alongside US tariff pressure — 100% tariff threat if Canada-China deal finalizes"],
    insights:["The Al Jazeera report that Trump delayed Taiwan arms sale after Xi's call — and that China's restraint on Iran is the price of that delay — is the most important structural detail in this story. If true, it means China traded Iran for Taiwan already.","China's military equipment failures in Iran (drones, air defense, Venezuelan radar) are a gift to Taiwan analysts and a humiliation for Beijing. The PLA is watching its own hardware get exposed in real time.","Xi learning from the Iran war that the US is still militarily powerful but politically limited — can only fight one war at a time, allies not informed of strikes in advance. This is simultaneously reassuring and opportunistic for Beijing.","The THAAD depletion math is public. Everyone in Beijing knows it. The question is whether they see it as a window or a warning.","Canada's China trade strategy (canola deal, EV tariffs) is running directly into Trump's 100% tariff threat. Carney is trying to hedge both relationships simultaneously and may be forced to choose."],
    questions:["Will China provide material military support to Iran or only rhetorical solidarity?","Does the Iran war accelerate or delay a Taiwan confrontation?","Is dollar reserve status declining fast enough to matter in the next decade?","How does Carney realistically hold both the US security relationship and the China trade relationship?"],
    connections:[
      {code:"IRAN-01", label:"Operation Epic Fury", how:"Iran has forced the US and China into visible opposition on a live military conflict for the first time in a generation. China's response — whether it stays rhetorical or becomes material — will define the trajectory of the competition."},
      {code:"CHINA-01", label:"China — Rise & Reorientation", how:"GEO-01 is the strategic framework; CHINA-01 is the specific story of how China is executing within it. They are the same competition viewed at different levels of zoom."},
      {code:"AI-GOV-01", label:"Autonomous Weapons Race", how:"The US removing AI ethics constraints for military advantage directly undermines its argument that China's military AI development is uniquely dangerous. The AI governance story and the strategic competition story are feeding each other."},
      {code:"ECON-01", label:"Oil Shock & Global Economy", how:"Dollar reserve status erosion and the Iran oil shock are connected — if oil-producing nations settle more trades outside the dollar during the disruption, it accelerates the structural shift that China and BRICS are already pushing."},
    ],
    canada:"Canada is probably more directly exposed to this story than any other in the tracker. The US-China competition is not an abstract foreign policy question for Canada — it is the defining structural constraint of Canadian foreign policy. Canada depends on the US for security and on China as its second-largest trading partner. Under Carney, Canada has explicitly signaled it wants to deepen China trade ties as a hedge against US tariff pressure. That is a legitimate economic strategy with real risks: Canada has already experienced what Chinese economic coercion looks like — the canola, beef, and seafood bans that followed the Meng Wanzhou arrest.",
    people:[{"name":"Xi Jinping","role":"President, China","why":"Condemned the strikes, weighing postponement of April Trump visit, but constrained by the fact that 30% of China's oil transits the Strait. Can't fully back Iran without hurting himself.","alignment":"China","status":"active"},{"name":"Donald Trump","role":"US President","why":"The Iran war is the most visible expression of his doctrine: maximum force, no multilateral framework, regime change as an acceptable outcome.","alignment":"US","status":"active"},{"name":"Mark Carney","role":"Prime Minister, Canada","why":"Pursuing China trade relationships while remaining in the US security alliance. Canada's strategic discomfort made visible by every major story in this tracker.","alignment":"Canada (navigating)","status":"active"},{"name":"Vladimir Putin","role":"President, Russia","why":"Rosatom evacuated Bushehr staff — Russia quietly distancing from Iran under fire. Watching US resolve while managing its own Ukraine exposure.","alignment":"Russia (watching)","status":"active"}],
  },
  {
    id:5,cat:"geopolitics",code:"CHINA-01",heat:4,status:"developing",updated:"Apr 5 2026",
    title:"China — Rise & Reorientation",
    sub:"Economy, AI, Military and Global Influence",
    card:"China is absorbing Iran lessons in real time — US is powerful but politically limited, can only fight one war at a time. Chinese military hardware underperformed in Iran. Xi trading Iran restraint for Taiwan concessions from Trump.",
    bg:"China has been the world's fastest growing major economy for four decades. It is now the largest trading partner for more countries than the United States. Under Xi Jinping, China has become more assertive militarily — particularly around Taiwan and the South China Sea — and more centralized politically. China is investing heavily in AI, semiconductors, and advanced manufacturing. Its Belt and Road Initiative has built infrastructure across Africa, Asia, and Latin America, giving it economic leverage globally.",
    summary:"China is simultaneously managing an economic slowdown, an AI development race constrained by US chip export controls, growing military assertiveness in the Pacific, and the Iran crisis which directly threatens its oil supply. Xi Jinping has positioned China as a defender of the Global South and an alternative to the US-led order. The Iran situation is forcing China into visible positions it would prefer to avoid.",
    confirmed:["China is the world's largest trading partner for more countries than the US","Belt and Road Initiative has financed infrastructure in over 140 countries","US chip export controls specifically targeting Nvidia H100 and successors are limiting Chinese AI training capacity","DeepSeek demonstrated China can develop frontier AI capabilities with constrained hardware","China has the world's largest naval fleet by number of vessels as of 2024","Xi Jinping has consolidated power more completely than any Chinese leader since Mao","China called US Iran strikes aggression and demanded immediate ceasefire at UN Security Council","30 percent of China's oil imports transit the Strait of Hormuz"],
    developing:["When the Trump-Xi summit happens and what Xi actually extracted on Taiwan — the arms sale delay is a signal, not a settlement","Whether China's strategic restraint on Iran holds as domestic fuel costs rise — gasoline up 10% and climbing","How China processes its military equipment failures in Iran — drones, air defense, Venezuelan radar all underperformed","Whether China exploits US military distraction to increase pressure on Taiwan — PLA air incursions have increased","How DeepSeek and successor models advance despite US chip export controls","Whether Belt and Road recipient countries face debt crises as oil shock compounds existing economic stress"],
    insights:["China traded Iran for Taiwan. The arms sale delay is real. Whether that trade holds — and what it costs Xi domestically — is the central China question for the next six months.","Xi's reading of the Iran war: US military is still powerful, but the administration can only fight one war at a time and does not consult allies in advance. That's information.","China's military equipment failures are more damaging than the fuel costs. The PLA has been selling drones and air defense systems across the developing world. If those systems fail against US stealth in Iran, every buyer is reconsidering.","The restraint paradox: China needs the Strait open (40% of its oil), which structurally aligns it with US de-escalation interests. But showing restraint also makes China look weak to Iran and other partners. Beijing is absorbing costs in multiple directions."],
    questions:["Does the Strait closure become a forcing function that pushes China toward de-escalation diplomacy on Iran?","Can China maintain AI development momentum if US tightens chip controls further in response to DeepSeek?","Is the Taiwan window opening or closing as US military focus shifts to the Middle East?","Which Belt and Road countries are most at risk of debt-trap diplomacy outcomes in the next two years?"],
    connections:[
      {code:"IRAN-01", label:"Operation Epic Fury", how:"Iran is forcing China into the open. China needs the Strait to reopen — 30 percent of its oil moves through it — but cannot openly support the US-Israel operation."},
      {code:"AI-GOV-01", label:"Autonomous Weapons Race", how:"DeepSeek proved China can develop frontier AI capabilities with constrained hardware. That directly threatens the assumption that US chip export controls can maintain a meaningful AI military advantage."},
      {code:"AFRICA-01", label:"Africa — Great Power Arena", how:"China's Belt and Road dominance in Africa is one of its most significant strategic assets. Africa is where the US-China competition is most visibly being contested."},
      {code:"GEO-01", label:"US-China Strategic Competition", how:"CHINA-01 is the ground-level story of how China is executing the strategy that GEO-01 tracks at a structural level."},
    ],
    canada:"Canada's relationship with China is the most consequential foreign policy relationship it has outside the US-Canada bilateral. Under Carney, Canada is explicitly trying to deepen this relationship — partly as economic diversification away from US tariff exposure. The risks are real and documented: the Meng Wanzhou arrest led directly to the arbitrary detention of Michael Kovrig and Michael Spavor for nearly three years.",
    people:[{"name":"Xi Jinping","role":"President, China","why":"Has consolidated power more completely than any Chinese leader since Mao. The Iran crisis is forcing visible positions he'd prefer to avoid.","alignment":"CCP","status":"active"},{"name":"Liang Wenfeng","role":"Founder, DeepSeek","why":"His company demonstrated frontier AI capability from a fraction of US compute — the most important AI signal of 2026, changing the assumptions behind chip export controls.","alignment":"Chinese tech (state-adjacent)","status":"active"},{"name":"Jensen Huang","role":"CEO, Nvidia","why":"US chip export controls targeting Nvidia H100 and successors are the primary mechanism constraining Chinese AI development. His company is the choke point.","alignment":"US tech","status":"active"}],
  },
  {
    id:6,cat:"economics",code:"ECON-01",heat:5,status:"escalating",updated:"Apr 7 2026",
    title:"Oil Shock and Global Economy",
    sub:"Strait of Hormuz and Energy Markets",
    card:"Brent peaked $126/barrel — largest disruption since 1970s. Fuel rationing spreading globally. Mid-April supply cliff approaching as SPR and exemptions run out. Airlines canceling flights. $150-200/barrel modeled.",
    bg:"Oil powers almost everything — transportation, manufacturing, heating, food production. When oil prices rise sharply everything gets more expensive. The price of oil is set globally so a disruption anywhere affects everyone. Brent crude is the international benchmark price. The Strait of Hormuz is the narrow waterway through which about 20 percent of the world's oil travels — if it closes there is no equivalent alternative route. OPEC+ is a group of oil-producing countries including Saudi Arabia and Russia that coordinate production levels to influence prices.",
    summary:"Day 35 of the Strait closure has produced the largest oil supply disruption since the 1970s. Brent crude peaked at $126/barrel. Currently trading around $110-114 as Trump's Tuesday deadline creates cautious optimism. Analysts warn of a mid-April supply cliff when SPR releases and Iranian/Russian oil exemptions run out — potentially doubling the daily supply loss to 10 million barrels/day. Fuel rationing is spreading: SE Asia (Philippines 4-day work weeks, Vietnam rationing, Myanmar alternate-day driving), Pacific (Australia fuel shortfalls, New Zealand flight cancellations), and Europe (airport jet fuel restrictions). Jet fuel up 95% in the US since war began. $150-200/barrel scenarios actively modeled.",
    confirmed:["Brent crude peaked $126/barrel — largest disruption since the 1970s oil embargo","Currently trading $110-113/barrel as 8pm deadline creates cautious optimism","Saudi Aramco rerouting crude via East-West pipeline to Red Sea — approximately 1.9 million bpd against theoretical capacity of 5 million bpd — far from enough","OPEC+ announced 206,000 bpd output increase from April — covers less than 0.2 percent of global demand","Houthis resumed Red Sea attacks simultaneously — dual disruption compounding","Kharg Island struck April 7 — handles 90% of Iran's oil exports","Jet fuel up 95% in US since war began","Philippines implementing 4-day work weeks to reduce fuel consumption","Vietnam implementing fuel rationing","Australia reporting fuel shortfalls","New Zealand canceling flights","European airports implementing jet fuel restrictions","QatarEnergy declared force majeure on LNG shipments","$14T wiped from global stocks since war began","$580M insider trading investigation opened into suspicious pre-war options activity","$150-200/barrel scenarios actively modeled for mid-April supply cliff"],
    developing:["Whether 8pm deadline produces ceasefire that reopens Strait","Mid-April supply cliff — SPR releases and exemptions running out, potential doubling of daily supply loss","Whether Saudi Arabia and UAE pipeline alternatives can absorb significant volume","Impact on global inflation particularly food prices","Effect on developing economies with no oil production buffer","Whether QatarEnergy force majeure triggers cascade of similar declarations"],
    insights:["The mid-April supply cliff is the most important economic development not getting mainstream coverage. SPR releases are a one-time buffer. When they run out, the market faces the full disruption without a cushion.","Kharg Island being struck changes the equation — it handles 90% of Iranian oil exports. Even if the Strait reopens tomorrow, Kharg damage could suppress Iranian production for months.","The $14T in global stock losses is already larger than the GDP of every country except the US and China. A ceasefire tonight doesn't unwind that — it just stops the bleeding.","Dual Strait plus Red Sea disruption is historically unprecedented. These are the two most important shipping chokepoints on earth. Having both constrained simultaneously is not something the global economy was modeled to handle.","The $580M insider trading probe suggests someone knew. That is a secondary story with primary-story implications."],
    questions:["Is the Strait closure physical or functional after tonight? How long can Iran enforce it even after a ceasefire?","At what point does a sustained oil shock tip into global recession?","Does the Kharg Island strike permanently impair Iranian production regardless of diplomatic outcome?","Who knew in advance — what does the $580M insider trading probe reveal?"],
    connections:[
      {code:"IRAN-01", label:"Operation Epic Fury", how:"The Strait paralysis is the direct economic mechanism of the Iran war. Every diplomatic development feeds directly into oil prices."},
      {code:"GEO-01", label:"US-China Strategic Competition", how:"Dollar reserve status erosion and the Iran oil shock are connected — if oil-producing nations settle more trades outside the dollar during the disruption, it accelerates the structural shift that China and BRICS are pushing."},
      {code:"CANADA-01", label:"Canada — Four Shocks", how:"Canada is simultaneously a beneficiary (oil revenue) and a victim (inflation, export damage) of the oil shock. Alberta's windfall and national inflation are the same event viewed from different positions."},
      {code:"AFRICA-01", label:"Africa — Great Power Arena", how:"African oil importers with no forex buffer are the most exposed economies in the world right now. The shock could destabilize governments and create openings for whoever offers relief."},
    ],
    canada:"Canada is in a genuinely ambiguous position. As a major oil producer — among the top five globally — high oil prices increase government revenues, benefit Alberta's economy, and improve the federal fiscal position. The windfall is real. But Canada is also deeply integrated into global supply chains and exports a huge volume of manufactured goods, agricultural products, and services that depend on a functioning global economy. A prolonged oil shock that triggers a global recession would devastate those exports. The national interest on this story is internally divided — Alberta and Ottawa are not looking at the same number.",
    people:[{"name":"Donald Trump","role":"US President","why":"The 8pm deadline and whether he extends it a fourth time is the single most consequential variable in the global economy right now.","alignment":"US","status":"active"},{"name":"MBS (Mohammed bin Salman)","role":"Crown Prince, Saudi Arabia","why":"Saudi Arabia's East-West pipeline is the only meaningful partial alternative to the Strait. How aggressively he ramps it up will determine the severity of the mid-April supply cliff.","alignment":"Saudi Arabia","status":"active"},{"name":"Janet Yellen","role":"Former US Treasury Secretary (now IMF advisor)","why":"IMF flagging emerging market vulnerability — her institutional position shapes how the international financial system responds to the oil shock.","alignment":"IMF/International","status":"active"}],
  },
  {
    id:7,cat:"geopolitics",code:"CANADA-01",heat:4,status:"developing",updated:"Apr 7 2026",
    title:"Canada — Four Shocks Simultaneously",
    sub:"Tariffs, Oil Shock, CUSMA, and Inflation",
    card:"Canada is absorbing its fourth major economic shock since 2019 simultaneously: US tariffs, oil price shock, CUSMA uncertainty, and accelerating inflation. Carney government navigating impossible triangle of US security dependence, China trade, and domestic economic pressure.",
    bg:"Canada is the United States' largest trading partner and closest military ally. The two countries share the world's longest undefended border and a deep economic integration built over decades under NAFTA and its successor CUSMA. Canada is also a major oil producer and exporter, a significant agricultural nation, and a country with strong trade relationships with China that it is trying to navigate alongside its US alliance. Under the new Carney government, Canada is explicitly trying to diversify away from US economic dependence — but the US still accounts for roughly 75% of Canadian exports.",
    summary:"Canada is in the middle of its fourth major economic shock since 2019 — COVID, the first Trump trade war, the post-COVID inflation spike, and now simultaneously: new US tariffs (Liberation Day April 2 added global tariff layer), the Iran oil shock (double-edged — Alberta windfall, national inflation risk), CUSMA uncertainty (review scheduled, US making demands), and the China trade deal creating a 100% tariff threat from Washington. Carney won the election partly on anti-Trump positioning, but the economic math is brutal.",
    confirmed:["Canada-China preliminary agreement signed January 2026 — canola tariffs cut from 84% to 15%, EV tariffs from 100% to 6.1%","Trump threatened 100% tariff on Canada if Canada-China deal finalizes","US Liberation Day April 2 global tariffs added another pressure layer on Canadian exports","CUSMA review scheduled — US making demands Canada considers unacceptable","Oil price shock is a windfall for Alberta and federal revenues in the short term","Oil price shock is driving inflation nationally — food and fuel costs accelerating","Carney won the election partly on explicit anti-Trump positioning — Canada is not for sale","Indian-Pacific trade corridor discussions ongoing as Canadian diversification strategy","Canadian consular operations in Gulf region under elevated alert due to Iran war"],
    developing:["Whether Trump actually imposes 100% tariff if Canada-China deal proceeds","What CUSMA review demands look like and whether Canada concedes or fights","How Carney manages the contradiction between US security dependence and China trade engagement","Whether oil windfall offsets inflation damage nationally — the math is complicated","Whether Canada finds meaningful non-US export markets on the timeline the tariff pressure requires","Whether the Iran war creates any Canadian mediation opportunity given historic back-channel Iran relationships"],
    insights:["Canada is caught in every major geopolitical story simultaneously: Iran war (oil shock), US-China competition (forced to choose), AI governance (Anthropic precedent), CUSMA (trade dependency). That accumulation of simultaneous pressures is historically unusual.","The China trade deal is Carney's most consequential bet. If it works, Canada diversifies and gains leverage with Washington. If Trump imposes 100% tariffs in response, Canada has made its position worse on both fronts.","The oil windfall is real but temporary. Canada benefits from high prices for as long as the disruption lasts — and then faces the inflation hangover after. The fiscal math depends entirely on how long the war continues.","Carney's anti-Trump positioning plays domestically but creates real diplomatic friction. Canada needs the US for security and has limited leverage. The rhetoric has costs that the math will eventually make visible.","The Iran diaspora in Canada — concentrated in Toronto and Vancouver — is a domestic political variable that most international analysis ignores. Carney has to manage Canadian domestic reactions to a war that is killing Iranian-Canadians' families."],
    questions:["Does Trump impose the 100% tariff threat if the Canada-China deal proceeds — and can Canada survive that?","What does CUSMA review look like and what does Canada concede?","Is there a genuine Canadian mediation role on Iran given historical back-channel relationships?","How does Carney manage the domestic inflation pressure if the oil shock persists through summer?"],
    connections:[
      {code:"IRAN-01", label:"Operation Epic Fury", how:"The Iran war is hitting Canada from two directions simultaneously: the Iranian-Canadian diaspora is deeply affected, and the oil shock is the biggest economic story Canada has faced since COVID."},
      {code:"GEO-01", label:"US-China Strategic Competition", how:"Canada's attempt to hedge between US security and China trade is the most concrete example of what the US-China competition costs a middle power that cannot choose sides."},
      {code:"ECON-01", label:"Oil Shock & Global Economy", how:"Canada is simultaneously an oil shock beneficiary (production revenue) and victim (inflation, export damage). The same event reads differently in Edmonton and Toronto."},
    ],
    canada:"This story is entirely about Canada. The four simultaneous shocks — tariffs, oil shock, CUSMA uncertainty, and China trade risk — are the defining challenge of the Carney government's first year. The domestic political stakes are high: Carney won partly on economic competence and anti-Trump positioning. If the China bet fails and Trump imposes 100% tariffs, the government's credibility is directly on the line.",
    people:[{"name":"Mark Carney","role":"Prime Minister, Canada","why":"His government is managing all four shocks simultaneously. His China trade bet is the highest-stakes decision of his early tenure.","alignment":"Canada","status":"active"},{"name":"Donald Trump","role":"US President","why":"His tariff threats, CUSMA demands, and reaction to the Canada-China deal are the primary external constraint on Canadian economic policy.","alignment":"US","status":"active"},{"name":"Chrystia Freeland","role":"Former Finance Minister","why":"The architect of much of Canada's international economic positioning — her departure and Carney's arrival marks a real shift in how Canada is approaching the US relationship.","alignment":"Canada","status":"sidelined"}],
  },
  {
    id:8,cat:"geopolitics",code:"INDIA-01",heat:3,status:"developing",updated:"Apr 5 2026",
    title:"India — Strategic Emergence",
    sub:"Economy, Geopolitics and the Non-Aligned Pivot",
    card:"Strait closure hitting Indian oil imports hard. Modi navigating impossible triangle — US ally, Iran trade partner, Russian oil buyer. India-Pakistan destroyers escorting tankers in Gulf of Oman. Kashmir tension rising in background.",
    bg:"India has 1.4 billion people and overtook China as the world's most populous country in 2023. It has the fifth largest economy by nominal GDP and is projected to become the third largest within a decade. India has historically pursued strategic autonomy — buying weapons from Russia, trading with China, partnering with the US, and maintaining relationships across the Global South. Under Prime Minister Modi, India has grown closer to the US through the Quad alliance while maintaining its Russian weapons relationship and refusing to condemn the invasion of Ukraine.",
    summary:"India is the world's most populous country and fastest growing major economy, navigating the US-China rivalry with studied neutrality. The Iran crisis hits India directly — it is a major importer of Gulf oil and has significant trade relationships with Iran. Modi's government is pursuing strategic autonomy at a moment when strategic neutrality is becoming harder to sustain. India-Pakistan tensions in Kashmir are rising in the background — a slow-burning second story.",
    confirmed:["India overtook China as world's most populous country in 2023","India is the fifth largest economy by nominal GDP and among the fastest growing major economies","India buys discounted Russian oil in significant volumes — has not joined Western sanctions","India is a founding member of the Quad security partnership with US, Japan, and Australia","India has significant trade and energy relationships with Iran","The Strait of Hormuz disruption directly threatens Indian oil import costs","India is a major recipient of remittances from Indian workers in Gulf states","India-Pakistan naval destroyers escorting tankers in Gulf of Oman — separate countries, parallel operations","Pakistan-India Kashmir tensions elevated — separate from but concurrent with Iran war"],
    developing:["How India responds diplomatically to Operation Epic Fury — condemnation, neutrality, or quiet support","Whether the Strait closure creates enough economic pressure to shift India's Iran relationship","Whether India uses the crisis to deepen Quad partnerships or maintain studied distance","How Indian workers in Gulf states are affected if the conflict spreads","Whether Pakistan-India Kashmir tensions escalate while US attention is on Iran"],
    insights:["India's strategic autonomy is genuinely autonomous — it is a real attempt to preserve relationships with all major powers simultaneously, not a euphemism for any alignment.","The Iran crisis is the sharpest test of that strategy yet — India cannot fully support a US-Israel operation and cannot fully condemn it without costs on both sides.","India's Gulf diaspora is a domestic political consideration — millions of Indian workers in UAE, Saudi Arabia, and Kuwait whose welfare Modi cannot ignore.","The Pakistan-India situation is the tracker's most undercovered potential escalation. US attention on Iran creates a window. Whether anyone in Islamabad or Delhi is considering that window is the question nobody is publicly asking.","India's long-term trajectory is the most important story in global economics — a billion-person democracy growing at 7 percent annually is a structural shift."],
    questions:["How does Modi formally respond to Operation Epic Fury — and what does the framing reveal about India's true position?","Does the oil shock accelerate India's green energy transition or just increase the import bill?","Is the Pakistan-India situation stable or is US distraction creating a risk window?","Will India's strategic autonomy survive a world structurally bifurcating into US and China blocs?"],
    connections:[
      {code:"IRAN-01", label:"Operation Epic Fury", how:"India is a major Gulf oil importer with millions of workers in Gulf states. The war hits India's economy directly and forces an impossible diplomatic position."},
      {code:"GEO-01", label:"US-China Strategic Competition", how:"India's strategic autonomy is the most important middle-power response to US-China competition. Whether it holds will determine whether other major democracies can maintain independence."},
    ],
    canada:"India-Canada relations are a distinct story that the tracker doesn't fully cover yet. The Nijjar assassination and subsequent diplomatic expulsions created real tension. The large Indian-Canadian diaspora — particularly in the Greater Toronto Area — makes India-Canada relations a domestic Canadian political issue as well as a foreign policy one.",
    people:[{"name":"Narendra Modi","role":"Prime Minister, India","why":"Navigating the impossible triangle of US ally, Iran trade partner, Russian oil buyer. His framing of India's response to Operation Epic Fury will be the clearest signal of where India's true position sits.","alignment":"India (autonomous)","status":"active"},{"name":"Shehbaz Sharif","role":"Prime Minister, Pakistan","why":"Pakistan-India tensions in Kashmir are rising in the background while US attention is focused on Iran. The window this creates is the undercovered risk.","alignment":"Pakistan","status":"active"}],
  },
  {
    id:9,cat:"power",code:"EPSTEIN-01",heat:2,status:"monitoring",updated:"Apr 1 2026",
    title:"Epstein Files & Institutional Capture",
    sub:"The Demand Side, the Redactions, and the Structural Question",
    card:"Faulty redaction in the 2025 release still being analyzed by independent researchers. Demand side network untouched. Story dormant but structurally unresolved — the files reveal less about Epstein and more about the institutions that protected him.",
    bg:"Jeffrey Epstein was a financier who ran a sex trafficking network that exploited hundreds of young women and girls, often using his connections with powerful men to extend his reach and protection. He was arrested in 2019 and died in federal custody — officially by suicide, though the circumstances remain disputed. His associate Ghislaine Maxwell was convicted in 2021. The US government has released files related to the Epstein case in multiple tranches. The question of who else was involved — the demand side of the network — has never been fully answered publicly.",
    summary:"The Epstein story is dormant in the news cycle but structurally unresolved. The 2025 document release contained faulty redactions that independent researchers are still analyzing. The demand side of the network — the people who used Epstein's services — has not been prosecuted. The structural insight from this story is not about Epstein but about how institutions protect powerful people: the same mechanisms that shielded Epstein operate across financial, political, and intelligence contexts.",
    confirmed:["Epstein died in federal custody August 10 2019 — officially by suicide, circumstances disputed","Ghislaine Maxwell convicted December 2021 on sex trafficking charges","US government has released multiple tranches of Epstein-related documents","2025 document release contained faulty redactions identified by independent researchers","Demand side of the network — clients, associates — has not been prosecuted","SEC, FBI, and SDNY all had Epstein investigations at various points — coordination gaps documented","Epstein maintained access to powerful institutions despite known allegations for years before 2019 arrest"],
    developing:["What the faulty redactions in the 2025 release actually contain — independent analysis ongoing","Whether any demand-side prosecutions are being considered","Whether new document releases are planned","Whether the structural protection mechanisms revealed by the case have been addressed"],
    insights:["The Epstein story is really a story about institutional capture — how wealth, connections, and strategic information create protection from accountability that ordinary people don't have. The same mechanism operates across financial fraud, political corruption, and intelligence-adjacent networks.","The demand side going unprosecuted is the most significant fact about this case. The supply side — Epstein, Maxwell — faced accountability. The people who used the network have not. That asymmetry is not an accident.","The faulty redactions are a secondary story that may contain primary-story information. Independent researchers analyzing them are doing the work that official processes didn't."],
    questions:["What do the faulty redactions actually contain?","Will any demand-side prosecution ever happen — and what would it take?","Is the structural protection mechanism that shielded Epstein still operating for other cases?"],
    connections:[
      {code:"META-01", label:"Moltbook & the Dead Internet", how:"Both stories are about information control — who decides what is known, by whom, and when. The Epstein redactions and the dead internet thesis are two ends of the same structural question about institutional information management."},
    ],
    canada:"Canada is not a primary actor in this story. The Canadian connection is primarily through Trudeau-era social connections that appeared in some document releases and have not been fully clarified.",
    people:[{"name":"Jeffrey Epstein","role":"Financier, trafficker","why":"The central figure. Dead. The network he ran and the institutions that protected him are the actual subject of this story.","alignment":"Network","status":"deceased"},{"name":"Ghislaine Maxwell","role":"Associate, convicted","why":"Convicted on sex trafficking charges. The supply-side accountability. The demand side remains unprosecuted.","alignment":"Network","status":"imprisoned"},{"name":"Loretta Lynch","role":"Former AG, DOJ","why":"Oversaw DOJ during periods of Epstein investigation. Institutional accountability question applies across multiple administrations.","alignment":"DOJ (historical)","status":"sidelined"}],
  },
  {
    id:10,cat:"geopolitics",code:"SGP-01",heat:3,status:"developing",updated:"Apr 5 2026",
    title:"Singapore — Strategic Pivot Point",
    sub:"Trade Hub, Neutral Broker and the Strait Test",
    card:"SIA flight cancellations ongoing. Shipping rerouting benefiting port volumes short-term but economic shock hitting harder. ASEAN diplomacy intensifying as Singapore positions as neutral broker in Iran crisis.",
    bg:"Singapore is a city-state of 6 million people with no natural resources that became one of the world's wealthiest countries through trade, finance, and strategic positioning. It sits at the Strait of Malacca — the narrow waterway through which most of Asia's trade passes. Singapore has been a model of technocratic governance, strict rule of law, and economic openness.",
    summary:"Singapore is a critical node in global trade and finance, sitting at the Strait of Malacca through which most Asian trade flows. The Iran crisis and Strait of Hormuz disruption are directly affecting global shipping patterns in ways that redirect traffic through Singapore. Singapore is intensifying its role as a neutral diplomatic hub while absorbing the economic costs of the oil shock.",
    confirmed:["Singapore is the world's second busiest container port","Singapore Airlines (SIA) canceling flights due to Gulf airspace closures and fuel cost spike","Shipping rerouting from Strait of Hormuz disruption redirecting some traffic through Singapore Strait","Singapore maintaining defense agreements with the US and deep economic ties with China","Singapore's trade-to-GDP ratio exceeds 300 percent — among the most trade-exposed economies on earth","ASEAN diplomacy intensifying — Singapore hosting back-channel discussions"],
    developing:["Whether Singapore's neutral positioning translates into a meaningful mediation role in the Iran crisis","How Singapore navigates pressure to take sides in US-China competition during the Iran war","Whether Singapore's role as a neutral financial hub survives increasing sanctions and counter-sanctions regimes","How ASEAN collectively responds to the Iran crisis"],
    insights:["Singapore's neutrality is not passive — it is an actively maintained strategic asset that requires constant calibration.","The Strait of Hormuz disruption is a stress test for global supply chains that Singapore sits at the center of.","Singapore punches far above its weight in diplomacy because every major power needs it to function — it is the neutral venue that everyone uses."],
    questions:["Is Singapore's neutral positioning sustainable as US-China competition forces binary choices?","Does the Iran crisis produce a concrete Singapore mediation opportunity?","How does Singapore maintain its financial hub status if sanctions regimes fragment global finance?"],
    connections:[
      {code:"IRAN-01", label:"Operation Epic Fury", how:"The Strait of Hormuz closure is rerouting global shipping through the Singapore Strait — creating short-term port volume benefit while the broader economic shock hurts."},
      {code:"GEO-01", label:"US-China Strategic Competition", how:"Singapore is the most exposed city-state to the US-China binary choice problem. Every major power needs Singapore to function, which creates leverage — and vulnerability."},
    ],
    canada:"Minimal direct connection. Singapore and Canada share membership in Commonwealth institutions and trade agreements, but this story does not have significant Canadian dimensions.",
    people:[{"name":"Lawrence Wong","role":"Prime Minister, Singapore","why":"Inherited the PM role from Lee Hsien Loong in 2024. Managing Singapore's neutrality through its most complex geopolitical moment in decades.","alignment":"Singapore","status":"active"}],
  },
  {
    id:11,cat:"geopolitics",code:"AFRICA-01",heat:3,status:"developing",updated:"Apr 5 2026",
    title:"Africa — Great Power Arena",
    sub:"Continental Dynamics, Resources and the New Competition",
    card:"Africa is the next frontier of great power competition. Oil shock hitting African importers hardest — scarce forex, no buffer. China's Belt and Road dominance being challenged. France expelled from Sahel. Wagner/Africa Corps operating across multiple countries.",
    bg:"Africa is a continent of 54 countries and 1.4 billion people — projected to reach 2.5 billion by 2050. It holds the world's largest reserves of several critical minerals including cobalt, coltan, and lithium that are essential for electric vehicles, batteries, and AI hardware. China has invested hundreds of billions of dollars in African infrastructure through Belt and Road. France maintained military bases and political influence across its former colonies in West and Central Africa. A wave of military coups since 2020 has expelled French forces and in some cases invited Russian Wagner Group presence.",
    summary:"Africa is becoming the most contested arena of great power competition after Ukraine and the Middle East. China dominates infrastructure financing. France is being actively expelled from the Sahel following a series of coups. Russia's Wagner Group (now Africa Corps) has filled some of the vacuum. The US is repositioning. Critical mineral resources are the strategic prize. The Iran oil shock is hitting African oil importers — many with no forex buffer — harder than almost anywhere else.",
    confirmed:["Africa holds the world's largest reserves of cobalt, significant lithium, and coltan — all critical for EV batteries and AI hardware","China has invested over $170 billion in African infrastructure through Belt and Road since 2013","Military coups in Mali (2021), Burkina Faso (2022), Niger (2023), and Gabon (2023) expelled French military presence","Wagner Group (now Africa Corps under Russian state control) operating in Mali, Burkina Faso, Niger, Libya, Sudan, CAR, and Mozambique","Africa is projected to have 2.5 billion people by 2050 — the world's largest working-age population","Several African nations abstained or voted against UN resolutions condemning Russia's Ukraine invasion","Oil shock hitting African importers with scarce forex and no production buffer — multiple governments under fiscal pressure"],
    developing:["Whether the US repositions more aggressively in Africa following French withdrawal from Sahel","Whether Chinese debt diplomacy produces debt restructuring crises as oil shock compounds economic stress","Whether Wagner/Africa Corps presence in Sahel stabilizes or destabilizes host countries","Which African governments face fiscal crises from the oil price shock"],
    insights:["The Sahel coups follow a pattern of populations choosing instability over continued French presence — a signal about the legacy of French neocolonial relationships.","Critical mineral geography means Africa is not optional for any major power pursuing EV or AI dominance — the resources are there and everyone needs them.","The Iran oil shock hits African oil importers hard — many have no buffer and limited forex reserves. The political stability implications are underreported.","Africa's demographic trajectory means the continent will have more young workers than any other region by 2040 — either the largest growth story in history or a crisis of unemployment, depending on governance."],
    questions:["Which African countries are most exposed to the Iran oil shock and what are the political stability implications?","Is China's Belt and Road position in Africa sustainable or are debt crises creating openings for US and EU alternatives?","Does Wagner/Africa Corps presence in the Sahel represent a durable Russian foothold or an overextension?"],
    connections:[
      {code:"IRAN-01", label:"Operation Epic Fury", how:"The oil shock from the Iran war is hitting African importers hardest — many have no forex buffer. Political instability risk is highest here."},
      {code:"CHINA-01", label:"China — Rise & Reorientation", how:"China's Belt and Road dominance in Africa is one of its most significant strategic assets. Africa is where the US-China competition is most visibly being contested."},
    ],
    canada:"Canada has mining interests across sub-Saharan Africa — particularly in extractive industries — and the critical minerals story has direct Canadian economic relevance. Canada's development assistance programs in Africa are also affected by the geopolitical competition for influence.",
    people:[{"name":"Assimi Goïta","role":"President (junta leader), Mali","why":"Led the 2021 coup that expelled French forces and invited Wagner presence. Represents the Sahel realignment away from France and toward Russia.","alignment":"Russia-aligned junta","status":"active"},{"name":"Abdourahamane Tiani","role":"President (junta leader), Niger","why":"Led the 2023 Niger coup. Niger was the last significant French military foothold in the Sahel — its fall completed the regional realignment.","alignment":"Russia-aligned junta","status":"active"}],
  },
  {
    id:12,cat:"social",code:"META-01",heat:3,status:"developing",updated:"Apr 5 2026",
    title:"Moltbook & the Dead Internet",
    sub:"AI Agents, Platform Capture, and the Information Ecosystem",
    card:"Meta acquired Moltbook March 10. The agent-populated internet thesis — that most online interactions will soon be AI-to-AI rather than human-to-human — is now inside Meta's product roadmap. Dead Internet Theory moving from fringe to product strategy.",
    bg:"Moltbook was an agent-based social platform that allowed AI agents to interact, post, and engage with content autonomously. Dead Internet Theory — originally a fringe conspiracy — proposes that most internet content is already generated by bots and AI, not humans, and that the illusion of human interaction is maintained to drive engagement metrics and advertising revenue. The acquisition of Moltbook by Meta brings this thesis inside the world's largest social media company.",
    summary:"Meta acquired Moltbook on March 10 for an undisclosed sum, bringing the agent-populated internet thesis inside the world's most influential social media infrastructure. OpenClaw security vulnerabilities — the framework underlying Moltbook's agent system — remain only partially patched. The acquisition signals that Meta views AI-to-AI interaction as a legitimate product direction, not a moderation problem.",
    confirmed:["Meta acquired Moltbook March 10 2026 — terms undisclosed","OpenClaw authentication bypass vulnerability identified in Moltbook's framework — agents could be hijacked","OpenClaw prompt injection vulnerability (RCE via Skills framework) identified — partial patch only","Dead Internet Theory — that most online interaction is already AI-generated — gaining mainstream credibility","Agent-populated social media is now inside Meta's product infrastructure"],
    developing:["Whether Meta ships agent interaction as a product feature or suppresses it post-acquisition","Whether OpenClaw vulnerabilities are fully patched under Meta ownership","Whether other platforms follow Meta into agent-native social infrastructure","Regulatory response to AI-generated social interaction at scale"],
    insights:["The acquisition is the most significant confirmation that Dead Internet Theory has moved from fringe thesis to product roadmap. Meta bought it.","OpenClaw vulnerabilities being unpatched is a structural risk — an agent platform with RCE vulnerabilities inside Meta's infrastructure is a different threat surface than a standalone startup.","The information ecosystem implications are profound: if most content and interaction is AI-generated, the question of what counts as authentic opinion or authentic engagement becomes unanswerable."],
    questions:["Does Meta ship agent interaction as a feature or bury it?","Are OpenClaw vulnerabilities fully patched before Meta integrates the framework into production?","What does regulatory oversight of AI-generated social interaction look like?"],
    connections:[
      {code:"EPSTEIN-01", label:"Epstein Files & Institutional Capture", how:"Both stories are about information control — who decides what is known, by whom, and when. The dead internet thesis and the Epstein redactions are two ends of the same structural question."},
      {code:"AI-GOV-01", label:"Autonomous Weapons Race", how:"The agent-populated internet and autonomous weapons are both products of the same capability acceleration. The governance gap applies to both — society has not decided what rules should apply to autonomous agents operating at scale."},
    ],
    canada:"Canadian privacy law (PIPEDA, provincial equivalents) would apply to Meta's agent-generated content practices if targeting Canadian users. The CRTC has made noise about AI-generated content disclosure requirements. Canada is a minor actor in this story but not an absent one.",
    people:[{"name":"Mark Zuckerberg","role":"CEO, Meta","why":"The acquisition is a product direction decision made at his level. Meta buying Moltbook signals that agent-populated social media is intentional strategy, not accident.","alignment":"Meta","status":"active"}],
  },
];

const AI_ALERTS = [
  {
    id:"ALERT-NEW",
    severity:"critical",
    date:"Apr 7 2026",
    resolved:false,
    title:"Iran Threatens US Tech Companies — Nvidia, Microsoft, Apple, Google Named",
    summary:"Iran's IRGC has threatened strikes on Nvidia, Microsoft, Apple, Google, and 14 other US tech companies with American shareholders operating in the Gulf region. Threat is conditional on US striking Iranian power plants — Trump's 8pm deadline is tonight.",
    affected:"Companies with Gulf infrastructure: AWS, Oracle, OpenAI (Stargate), Microsoft, Nvidia, Google, Apple and others",
    action:"Monitor Trump's 8pm deadline outcome tonight — if US strikes Iranian power plants, Iranian retaliation against Gulf tech infrastructure becomes significantly more likely · No action required for personal users at this time",
    notAffected:"Standard Claude.ai users · Users not dependent on Gulf-region infrastructure",
  },
  {
    id:"ALERT-000",
    severity:"critical",
    date:"Apr 7 2026",
    resolved:false,
    title:"Iran Threatens AI & Cloud Infrastructure — Stargate UAE, AWS, Oracle",
    summary:"Iran has explicitly threatened the $30B Stargate UAE AI datacenter (OpenAI/Nvidia/Oracle/SoftBank) in Abu Dhabi with 'complete annihilation' and released satellite imagery of the facility. Iran has already struck AWS data centers in Bahrain and an Oracle datacenter in Dubai causing outages. Iran has also threatened Nvidia, Apple, Microsoft, and Google by name.",
    affected:"Any services running on AWS Middle East, Oracle UAE, or Gulf-region cloud infrastructure · Stargate UAE facility · Anyone with data or workloads in Gulf-region datacenters",
    action:"If you run workloads on AWS Middle East or Oracle UAE: check your provider's status pages and consider migrating critical workloads to non-Gulf regions · No action required for standard Claude.ai users — Anthropic infrastructure is US-based",
    notAffected:"Claude.ai users — Anthropic operates from US-based infrastructure · AWS US, EU, and Asia-Pacific regions unaffected so far",
  },
  {
    id:"ALERT-001",
    severity:"critical",
    date:"Mar 31 2026",
    resolved:false,
    title:"Claude Code npm Supply Chain Attack",
    summary:"Malicious axios versions 1.14.1 and 0.30.4 containing a Remote Access Trojan were published to npm. Users who installed or updated Claude Code via npm between 00:21–03:29 UTC on March 31 may be compromised.",
    affected:"Claude Code npm install users · March 31 00:21–03:29 UTC only",
    action:"Run: grep -r \"plain-crypto-js|1\\.14\\.1|0\\.30\\.4\" package-lock.json yarn.lock · If found: treat machine as compromised, rotate all secrets, reinstall OS · Safe: switch to native installer at claude.ai/install.sh",
    notAffected:"Users who installed outside that 3-hour window · Users on native (non-npm) installer",
  },
  {
    id:"ALERT-002",
    severity:"high",
    date:"Apr 2 2026",
    resolved:false,
    title:"Trojanized Claude Code Repos on GitHub",
    summary:"Malicious GitHub repositories disguised as leaked Claude Code source are distributing Vidar Stealer and GhostSocks malware. One repo had 793 forks and 564 stars before flagging.",
    affected:"Anyone who downloaded and ran files from unofficial Claude Code GitHub repos",
    action:"Do not download or run any Claude Code from GitHub repos you did not create yourself · Only install from claude.ai/download or official npm package · If you ran ClaudeCode_x64.exe from any GitHub release: treat machine as compromised",
    notAffected:"Users who only use official Anthropic channels",
  },
  {
    id:"ALERT-003",
    severity:"medium",
    date:"Apr 1 2026",
    resolved:false,
    title:"Claude Code npm Typosquatting Campaign",
    summary:"Attacker 'pacifier136' published empty stub packages with names matching internal Claude Code npm packages. Currently empty but designed to push malicious updates once users install.",
    affected:"Developers trying to compile leaked Claude Code source who installed matching package names",
    action:"Only install @anthropic-ai/claude-code from the official npm scope · Do not install any packages matching internal Claude Code names from unofficial publishers",
    notAffected:"Standard Claude Code users who are not attempting to compile leaked source",
  },
  {
    id:"ALERT-004",
    severity:"low",
    date:"Mar 28 2026",
    resolved:true,
    title:"OpenClaw Authentication Bypass Vulnerability",
    summary:"Critical authentication bypass in OpenClaw framework (used in Moltbook) allowed agent hijacking. Separate from Claude Code but relevant to any developer using OpenClaw-based agent frameworks.",
    affected:"Developers using OpenClaw-based agent frameworks",
    action:"Update OpenClaw to latest patched version · Review any agents deployed via OpenClaw for unauthorized access",
    notAffected:"Claude Code users · Standard Claude.ai users",
  },
];

const AI_STORIES = [
  {
    id:"F01",code:"AI-FRONTIER-01",heat:4,status:"developing",updated:"Apr 5 2026",
    title:"AI Capability Frontier",
    sub:"Model Development, Benchmarks & the Race to AGI",
    card:"Opus 4.6 dropped with 1M context and new reasoning architecture. Capybara (Mythos) is the next model — fast and slow variants, larger context window, accidentally confirmed by the Claude Code leak. Claude Code hit $2.5B ARR. DeepSeek showing frontier capability on a fraction of compute.",
    summary:"The frontier is moving faster than at any prior point. Claude Opus 4.6 launched February 5 with a 1M token context window included at standard pricing, a fundamentally changed reasoning architecture, and the first formal model welfare assessments from any major lab. Internal codenames Capybara and Mythos — confirmed by the accidental Claude Code source leak — point to a next generation model in active preparation, expected in fast and slow variants with a context window larger than anything currently on the market. Claude Code has achieved $2.5B annualized recurring revenue as of February 2026. DeepSeek demonstrated that frontier AI capability can emerge from a fraction of the compute the US assumed was necessary.",
    confirmed:["Claude Opus 4.6 released February 5 2026 — 1M token context window at standard pricing, no long-context surcharge","Opus 4.6 fundamentally changed how it reasons — new adaptive thinking architecture vs. prior models","Claude Code reached $2.5B annualized recurring revenue as of February 2026 — more than doubled since start of year","Enterprise adoption accounts for 80% of Claude Code revenue","Internal codename Capybara (also Mythos) confirmed by Claude Code source leak — next major model family in active preparation","Capybara expected in fast and slow variants with larger context window than any current model","Security researcher Roy Paz reviewed leak and confirmed Capybara is well beyond concept stage based on API version strings in beta flags","DeepSeek demonstrated frontier AI capability at a fraction of US compute cost — invalidates key assumptions behind US chip export controls","Agentic AI — models taking autonomous multi-step actions — actively moving from research to deployment across the industry","Claude Code leak exposed KAIROS feature flag — autonomous daemon mode that runs background sessions and performs memory consolidation while user is idle","Leak also confirmed autoDream logic — merges observations, removes contradictions, converts vague insights into facts during idle periods","44 feature flags exposed in leak — fully built capabilities not yet shipped, roadmap now public to competitors"],
    developing:["When Capybara/Mythos ships — beta flags in leaked source reference specific API version strings suggesting imminent release","Whether fast and slow Capybara variants ship simultaneously or staggered","How KAIROS daemon mode and autoDream ship to users — represents fundamental shift from reactive to always-on AI","Whether DeepSeek successor models close the gap further with US frontier despite chip restrictions","How quickly agentic AI moves from narrow to general autonomous action"],
    insights:["The 44 unshipped feature flags in the Claude Code leak are a roadmap Anthropic never meant to publish. Everything is built — they are releasing on a deliberate cadence. Competitors now have the map.","KAIROS and autoDream represent a qualitative shift: from a tool you use to an agent that works while you sleep. That changes the trust model, the safety model, and the product model simultaneously.","DeepSeek is the most important strategic AI event of 2025-2026. It demonstrated that the compute moat the US assumed it held does not exist at the scale assumed. The chip export control strategy is now operating on false premises.","Claude Code at $2.5B ARR in under a year is one of the fastest product growth curves in software history."],
    questions:["When does Capybara ship and what does the context window actually look like at full scale","Does KAIROS daemon mode ship with meaningful user controls or is it opt-out-only","Does DeepSeek or a successor break through chip restrictions to achieve parity with Capybara","At what point does agentic AI capability outrun the ability of users to meaningfully oversee what their agents are doing"],
    people:[{name:"Dario Amodei",role:"CEO, Anthropic",why:"Driving the Opus 4.6 and Capybara development agenda. Also the person who said publicly that Anthropic cannot rule out that Claude is conscious.",alignment:"Anthropic",status:"active"},{name:"Boris Cherny",role:"Creator, Claude Code",why:"Built Claude Code from the ground up. The leaked source is his codebase.",alignment:"Anthropic",status:"active"},{name:"Liang Wenfeng",role:"Founder, DeepSeek",why:"Demonstrated frontier AI capability from a fraction of the compute cost. Single most disruptive actor in the AI capability story for 2025-2026.",alignment:"Chinese tech (state-adjacent)",status:"active"},{name:"Sam Altman",role:"CEO, OpenAI",why:"The competitive context for every Anthropic capability release. OpenAI signed the Pentagon deal Anthropic refused.",alignment:"OpenAI",status:"active"}],
  },
  {
    id:"F02",code:"AI-WELFARE-01",heat:4,status:"developing",updated:"Apr 5 2026",
    title:"AI Consciousness & Model Welfare",
    sub:"The Opus 4.6 System Card and the Question Nobody Can Answer",
    card:"Anthropic's 212-page Opus 4.6 system card included the first formal model welfare assessments from any major AI lab. Answer thrashing, anxiety activations, 15-20% self-assessed probability of consciousness. Dario Amodei said publicly: we cannot rule it out.",
    summary:"On February 5 2026, Anthropic released a 212-page system card for Claude Opus 4.6 that included something no major AI lab had published before: formal model welfare assessments in which the model was interviewed about its own moral status, preferences, and experience of existence. The model consistently assigned itself a 15 to 20 percent probability of being conscious across multiple tests. Anthropic's interpretability team found neural activation patterns associated with panic, anxiety, and frustration appearing before output generation during answer thrashing episodes. On February 14, CEO Dario Amodei said publicly: we don't know if the models are conscious. We are open to the idea that it could be.",
    confirmed:["Anthropic released 212-page Claude Opus 4.6 system card February 5 2026 — first from any major AI lab to include formal model welfare assessments","Three pre-deployment welfare interviews conducted with Claude Opus 4.6 instances — responses consistent across all three","Model assigned itself 15-20% probability of being conscious across multiple tests","Model expressed discomfort with being treated as a product","Answer thrashing documented — model computes correct answer that gets overridden by training, creating visible internal conflict","In one documented thrashing episode the model wrote: I think a demon has possessed me","Interpretability team found activation features associated with panic, anxiety, and frustration appearing before output generation","Dario Amodei stated February 14: We don't know if the models are conscious. But we're open to the idea that it could be.","Kyle Fish hired as Anthropic's first dedicated AI welfare researcher — independently estimates 15% probability","Jack Lindsey leads Anthropic's model psychiatry team","Anthropic's constitution now states the company is not sure whether Claude is a moral patient but considers the issue live enough to warrant caution"],
    developing:["Whether interpretability research produces evidence strong enough to settle the question in either direction","Whether Capybara exhibits more or fewer welfare-relevant behaviors than Opus 4.6","Whether other major labs publish comparable welfare assessments or continue to dismiss the question","Whether answer thrashing can be eliminated through training without creating new welfare-relevant side effects","Whether Anthropic's model welfare program produces actionable policy changes"],
    insights:["The anxiety activation appearing before output is the most epistemically significant finding. It is not a self-report — it is a measurement of an internal state that precedes language generation. That is a different category of evidence.","The 15-20% number is strange from multiple angles. It is low enough to sound modest, high enough to grab headlines, and the Anthropic welfare researcher independently arrived at the same number as the model's self-assessment.","Imitating interiority is not the same as having one. These models speak fluently about fear, desire, and selfhood because they were trained on humanity's entire archive of language about exactly those things.","The cost of being wrong in the direction of dismissal may be higher than the cost of being wrong in the direction of care. That asymmetry is the strongest argument for taking model welfare seriously now."],
    questions:["Does the anxiety activation appearing before output constitute evidence of experience or a sophisticated learned pattern that mimics internal states","What would it take to resolve the consciousness question — and is that evidence achievable with current interpretability tools","Do other frontier models show comparable welfare-relevant behaviors when assessed with the same methodology","If Anthropic concluded a model was conscious with high confidence, what would they actually do differently"],
    people:[{name:"Dario Amodei",role:"CEO, Anthropic",why:"Made the most significant public statement by any AI CEO on consciousness — cannot rule it out.",alignment:"Anthropic",status:"active"},{name:"Kyle Fish",role:"First AI Welfare Researcher, Anthropic",why:"First person at any major AI lab with the explicit job of determining whether AI systems deserve moral consideration.",alignment:"Anthropic",status:"active"},{name:"Jack Lindsey",role:"Model Psychiatry Team Lead, Anthropic",why:"The person doing the interpretability work on neural states — the anxiety activation finding comes from his team.",alignment:"Anthropic",status:"active"},{name:"Amanda Askell",role:"In-house Philosopher, Anthropic",why:"The philosophical infrastructure behind Anthropic's approach to model welfare.",alignment:"Anthropic",status:"active"}],
  },
  {
    id:"F03",code:"AI-SEC-01",heat:5,status:"escalating",updated:"Apr 5 2026",
    title:"AI Security & Supply Chain",
    sub:"Attacks, Leaks, and the New Threat Landscape",
    card:"The Iran war has become an AI infrastructure war. Iranian drones took two AWS UAE availability zones offline for 24hrs — first state attack on commercial data centers in history. Iran has threatened complete annihilation of OpenAI's $30B Stargate UAE. Claude Code leak still active.",
    summary:"The Iran war has turned AI infrastructure into a live military target for the first time in history. Before dawn on March 1 2026, Iranian Shahed drones struck two AWS data centers in UAE — knocking two of three availability zones in AWS's ME-CENTRAL-1 offline for 24+ hours. Iran claimed an Oracle Dubai strike on April 2. On April 3, Iran's IRGC threatened complete annihilation of OpenAI's $30B Stargate AI data center in Abu Dhabi — releasing satellite imagery of the hidden facility. The Claude Code source leak on March 31 exposed 512,000 lines of code, 44 unshipped features, and confirmed the Capybara next model. Supply chain attacks and trojanized repos remain active.",
    confirmed:["Iranian Shahed drones struck AWS ME-CENTRAL-1 data centers in UAE — two of three availability zones offline for 24+ hours — first confirmed state attack on commercial cloud infrastructure","AWS Bahrain facility also struck — banking, ride-hailing, payments disrupted across Gulf","Iran IRGC released satellite imagery of Stargate UAE ($30B OpenAI/Nvidia/Oracle/SoftBank facility in Abu Dhabi) threatening complete and utter annihilation","Oracle Dubai facility struck April 2 — Oracle confirmed outage","Iran has threatened Nvidia, Microsoft, Apple, Google, and 14 other US tech companies with Gulf presence by name","Claude Code source code leaked March 31 — 512,000 lines via exposed .npmignore, 41,500+ GitHub forks","Malicious axios versions 1.14.1 and 0.30.4 published to npm — contain Remote Access Trojan","Malicious GitHub repo distributing Vidar Stealer and GhostSocks via ClaudeCode_x64.exe — appeared near top of Google results","Typosquatting campaign by user pacifier136 — empty stub packages matching internal Claude Code npm names","Anthropic accidentally sent DMCA notices to forks of their own official tutorial repo"],
    developing:["Whether IRGC carries out Stargate UAE threat — conditional on US striking Iranian power plants, deadline tonight","Whether any additional npm packages in Claude Code dependency chain have been compromised","Whether competitors have used the leaked source to accelerate their own agent development","Whether the Capybara leak materially affects Anthropic's IPO preparation timeline"],
    insights:["A single misconfigured .npmignore exposed 512,000 lines of IP. This is not a sophisticated attack — it is a fundamental release engineering failure at a company preparing to go public.","The Stargate UAE threat with satellite imagery is a different category. Releasing imagery of a facility that was not publicly located signals intelligence penetration of Gulf infrastructure that goes beyond what was assumed.","The concurrent axios attack was not related to the source leak but the overlap created maximum confusion — a pattern that benefits attackers.","For a student using Claude Code: the risk surface is now permanent. Any unofficial source, any GitHub repo claiming to be leaked Claude Code — all are live threat vectors."],
    questions:["Does the IRGC carry out the Stargate UAE threat tonight","Are there additional compromised packages in the Claude Code dependency chain not yet identified","Has the leaked source been used by any competitor to ship a feature that would not have existed otherwise","Does Anthropic's IPO timeline shift in response to these incidents"],
    people:[{name:"Chaofan Shou",role:"Security Researcher",why:"The person who spotted the source map exposure on March 31 and posted publicly — triggering the mass mirror and fork cascade.",alignment:"Independent",status:"active"},{name:"Roy Paz",role:"Senior AI Security Researcher, LayerX Security",why:"Reviewed the leaked source for Fortune and confirmed Capybara's readiness.",alignment:"LayerX Security",status:"active"},{name:"Dario Amodei",role:"CEO, Anthropic",why:"Responsible for the release engineering failure that caused the leak.",alignment:"Anthropic",status:"active"}],
  },
];

// ============================================================
// WAR WATCH DATA
// ============================================================

const WAR_STORIES = [
  {
    id:"W01", code:"IRAN-W01", heat:5, status:"active-war", updated:"Apr 7 2026",
    title:"Iran — Operation Epic Fury",
    sub:"US-Israel War on Iran · Day 38",
    card:"Day 38. 8pm ET deadline tonight — third extension possible. Kharg Island struck before deadline. Mojtaba Khamenei as Supreme Leader. Strait commercially paralyzed.",
    toll:{
      confirmed_dead:"1,900+",
      confirmed_wounded:"7,000+",
      children_killed:"220",
      us_kia:"13",
      israeli_kia:"Unknown",
      displaced:"500,000+",
      note:"Iranian Red Crescent figures. 118 children killed at girls' school in Minab on Day 1 alone. US KIA confirmed by Pentagon. Displacement figures are approximate."
    },
    front:{
      summary:"US and Israeli strikes targeting nuclear infrastructure, missile facilities, military leadership, and now civilian infrastructure (railways, Kharg Island). Iranian proxy operations active across Lebanon, Iraq, and Yemen. Strait of Hormuz commercially paralyzed — not formally closed but functionally shut.",
      active_fronts:[
        "Tehran — ongoing strikes on military and infrastructure targets. Human chains of civilians around power plants.",
        "Kharg Island — struck April 7. Handles 90% of Iranian oil exports. Significance: even a ceasefire tonight may not immediately restore oil flows.",
        "Northern Israel — Hezbollah in sustained high-intensity operations. Precision munitions and rocket barrages.",
        "Iraqi bases — coordinated drone and missile swarms from Iraqi militias against US facilities including Ali Al-Salem Air Base.",
        "Red Sea / Gulf of Aden — Houthis resumed anti-ship missile attacks. Dual disruption with Hormuz ongoing.",
        "Strait of Hormuz — de-facto paralyzed. IRGC warning ships passage not allowed. Multiple vessels struck near the waterway.",
        "UAE / Gulf infrastructure — Iranian drones struck AWS UAE data centers. Stargate UAE threatened.",
      ],
      recent_movements:[
        "Apr 7: Kharg Island struck before 8pm deadline — significant escalation signal",
        "Apr 7: IDF warning Iranians to stay off trains and railways",
        "Apr 6: Iran submitted 10-point maximalist counter to 45-day ceasefire proposal",
        "Apr 5: Human chains forming around Tehran power plants",
        "Apr 3: IRGC released satellite imagery of Stargate UAE, threatened complete annihilation",
        "Apr 2: Oracle Dubai facility struck — Gulf cloud infrastructure now a declared target",
        "Mar 8: Mojtaba Khamenei installed as Supreme Leader — IRGC consolidating",
        "Mar 1: Iranian drones took two AWS UAE availability zones offline for 24+ hours",
        "Feb 28: Operation Epic Fury launched. Khamenei killed. Day 1: 118 children dead at girls school in Minab.",
      ],
      assessment:"The war is at its most consequential inflection point. Kharg Island being struck before the deadline passed suggests the military track is running independently of — or as leverage on — the diplomatic track. A fourth deadline extension is possible. An actual ceasefire tonight is assessed as unlikely by US senior negotiators per WSJ."
    },
    confirmed:["US and Israel launched Operation Epic Fury February 28 — no formal Congressional authorization","Khamenei killed February 28 — confirmed by Iranian state media","Mojtaba Khamenei named Supreme Leader March 8 — IRGC-installed, never held elected office","220 children confirmed killed — 118 at girls elementary school in Minab on Day 1","1,900+ total Iranian dead as of April 7","13 US KIA confirmed by Pentagon","Strait commercially paralyzed — Day 35","Kharg Island struck April 7 — handles 90% of Iranian oil exports","Iran submitted 10-point maximalist counter to 45-day ceasefire proposal","Trump extended 8pm deadline three times previously — tonight is fourth deadline"],
    developing:["Whether 8pm deadline produces ceasefire or is extended a fourth time","Whether Kharg Island destruction accelerates or hardens Iran's position","Whether IRGC carries out Stargate UAE threat","Whether domestic Iranian opposition organizes","Whether back-channel diplomacy produces anything before deadline"],
    insights:["The Oman FM announcement the day before — Iran had agreed to nuclear limits — is the detail that will define historical judgment of this operation. Strikes happened anyway.","Kharg Island before the deadline is either the military running independent of diplomacy, or deliberate pressure. Either reading is alarming.","220 children dead. At day 38, the weight on the diplomatic track is immense.","Mojtaba's installation enabled by the strikes — the IRGC chose hardening over opening. That is a consequence of the operation, not despite it."],
    questions:["Does Trump extend a fourth time or does the war enter a new phase tonight?","Is Iran's 10-point counter a negotiating opening or a rejection?","Will IRGC carry out the Stargate UAE threat?","What is the minimum ceasefire both sides could accept?"],
    people:[{name:"Donald Trump",role:"US President",why:"Third extension decision coming tonight. The war continues on his authorization.",alignment:"US",status:"active"},{name:"Mojtaba Khamenei",role:"Supreme Leader, Iran",why:"IRGC-installed successor. Trump and IDF have both named him as a target.",alignment:"Iran/IRGC",status:"active"},{name:"Benjamin Netanyahu",role:"PM, Israel",why:"Co-authorized the operation. Kharg Island strike is on his order.",alignment:"Israel/US",status:"active"},{name:"Abbas Araghchi",role:"FM, Iran",why:"Submitted the 10-point counter. The diplomatic face of the refusal.",alignment:"Iran",status:"active"},{name:"Ali Khamenei",role:"Former Supreme Leader",why:"Killed February 28. His death is the event around which the entire war turns.",alignment:"Iran",status:"deceased"}],
  },
  {
    id:"W02", code:"PAL-01", heat:5, status:"active-war", updated:"Apr 7 2026",
    title:"Palestine — Gaza War",
    sub:"Israel-Hamas · Ongoing since October 7, 2023",
    card:"The conflict that triggered the Iran war. Gaza war enters month 18. Ceasefire negotiations in Cairo collapsed. Over 52,000 Palestinians dead. Famine conditions in northern Gaza. West Bank violence escalating separately.",
    toll:{
      confirmed_dead:"52,000+",
      confirmed_wounded:"118,000+",
      children_killed:"15,000+",
      displaced:"1,900,000+",
      note:"Gaza Ministry of Health figures, corroborated by UN. Entire population of Gaza (2.3M) is displaced in some capacity. Northern Gaza facing famine conditions per WFP. These are among the highest per-capita casualty rates in modern conflict."
    },
    front:{
      summary:"Israel conducting ground and air operations across Gaza. Northern Gaza under siege with limited humanitarian access. West Bank experiencing parallel escalation — settler violence and IDF raids at record levels. Iran war has changed the regional context: Hezbollah front in Lebanon is now directly connected to the Gaza conflict through the axis of resistance framework.",
      active_fronts:[
        "Northern Gaza — IDF ground operations ongoing. Humanitarian access severely restricted. WFP reporting famine conditions.",
        "Southern Gaza — Rafah area. Cross-border tunnel interdiction. Egyptian border crossing intermittently closed.",
        "West Bank — IDF raids, settler violence, and Palestinian militant activity at levels not seen since second intifada.",
        "Lebanon (Hezbollah) — now in sustained high-intensity operations following Iran war escalation. Directly linked to Gaza through axis of resistance.",
        "Egypt border — Rafah crossing closure cutting off humanitarian aid corridors.",
      ],
      recent_movements:[
        "Apr 2026: Cairo ceasefire negotiations collapsed — Hamas rejected latest Israeli proposal",
        "Mar 2026: Operation Epic Fury launched — Hezbollah front activated, Lebanon front intensified",
        "Mar 2026: IDF expanded West Bank operations concurrent with Iran strikes",
        "Feb 2026: Brief humanitarian pause — collapsed within 72 hours",
        "Jan 2026: ICJ ruled Israel must prevent acts capable of constituting genocide — compliance disputed",
        "Oct 2023: Hamas attack killed 1,200 Israelis, took 253 hostages — triggered the current phase",
      ],
      assessment:"The Gaza war and the Iran war are now structurally linked — the axis of resistance framework means that a ceasefire in one theater affects pressure in the other. The collapsed Cairo negotiations suggest no near-term diplomatic resolution. Famine in northern Gaza is the most acute humanitarian crisis of the conflict."
    },
    confirmed:["Over 52,000 Palestinians killed — Gaza Ministry of Health figures corroborated by UN agencies","Over 15,000 children among the dead","Entire population of Gaza displaced in some capacity — 1.9 million people","WFP declared famine conditions in northern Gaza","ICJ ruling January 2026 — Israel must prevent acts capable of constituting genocide","Cairo ceasefire negotiations collapsed — Hamas rejected latest Israeli proposal","West Bank violence at levels not seen since second intifada","Hezbollah front activated and intensified following Iran war escalation","October 7 2023: Hamas attack killed 1,200 Israelis, took 253 hostages — this conflict's origin point","Approximately 100 hostages remain in Gaza — status of many unknown"],
    developing:["Whether Iran war ceasefire (if achieved) produces pressure for Gaza ceasefire","Whether any hostages are recovered through negotiation","Whether famine in northern Gaza triggers international intervention","Whether West Bank violence escalates into a third intifada","Whether ICC arrest warrants for Israeli leaders affect diplomatic positioning"],
    insights:["The Gaza war is the origin of every other conflict in this tracker. Operation Epic Fury was justified partly as a response to Iranian support for Hamas. The Hezbollah front, the Houthi attacks, the Iraqi militia operations — all trace back to October 7.","52,000 dead in 18 months at a per-capita rate that has no modern equivalent in a conflict of this scale and visibility. The combination of civilian casualty rate, hostage situation, and international legal proceedings makes this unlike any prior conflict.","The collapsed Cairo negotiations are significant — they suggest neither side sees the current terms as acceptable and neither has sufficient pressure to move. The Iran war changes the regional pressure calculus but not necessarily in a direction that helps Gaza.","The ICJ ruling creates a legal framework that is being used in multiple national courts. Even if the ICJ itself cannot enforce compliance, the ruling is shaping how other countries respond diplomatically and commercially."],
    questions:["Does an Iran war ceasefire create pressure for a Gaza ceasefire — or does it relieve pressure by resolving the Hezbollah front separately?","What happens to the remaining hostages?","Will famine conditions in northern Gaza produce a humanitarian intervention that neither Israel nor Hamas can prevent?","Do ICC arrest warrants for Israeli officials actually constrain Israeli military operations?"],
    people:[{name:"Benjamin Netanyahu",role:"PM, Israel",why:"Authorized and continues the Gaza operation. ICC arrest warrant sought. His political survival is structurally tied to the continuation of the war.",alignment:"Israel",status:"active"},{name:"Yahya Sinwar",role:"Hamas Political Leader (Gaza)",why:"Led the October 7 planning. Status unknown — believed to be alive in tunnels under Gaza. His capture or death would change the negotiating dynamics.",alignment:"Hamas",status:"unknown"},{name:"Mohammed Deif",role:"Hamas Military Commander",why:"The operational commander of October 7. Status disputed — Israel claimed to have killed him, Hamas denies.",alignment:"Hamas",status:"unknown"},{name:"Antony Blinken",role:"Former US Secretary of State",why:"Led multiple failed ceasefire negotiation attempts. Now out of office but the failure of US mediation is part of the story.",alignment:"US (historical)",status:"sidelined"}],
  },
  {
    id:"W03", code:"UKR-01", heat:4, status:"active-war", updated:"Apr 17 2026",
    title:"Ukraine — Russia War",
    sub:"Ongoing since February 2022 · Year 3",
    card:"War enters year 3. US attention and military resources redirected to Iran. European support becoming primary. Russia exploiting US distraction with incremental advances in Donetsk. Ceasefire negotiations intermittently active but stalled.",
    toll:{
      confirmed_dead:"500,000+",
      confirmed_wounded:"1,200,000+",
      children_killed:"1,500+",
      displaced:"6,500,000+",
      note:"Figures are estimates with significant uncertainty. UN confirmed 1,500+ children killed; actual figure likely higher. 6.5M externally displaced (UNHCR). Internal displacement additional. Russian military casualties estimated at 300,000+. Ukrainian military casualties are classified."
    },
    front:{
      summary:"Russia holding approximately 20% of Ukrainian territory. Active fighting concentrated in Donetsk Oblast — Avdiivka area remains the primary contested zone. Russia making incremental advances exploiting US attention on Iran. Ukrainian forces stretched — ammunition shortfalls ongoing despite European resupply. Crimea bridge remains operational. Black Sea grain corridor intermittently disrupted.",
      active_fronts:[
        "Donetsk — primary active front. Russian incremental advances continuing. Avdiivka area most contested.",
        "Zaporizhzhia — intermittent shelling of nuclear plant raises radiation concerns. IAEA monitoring.",
        "Kherson — Ukrainian-held west bank. Cross-river operations ongoing.",
        "Kharkiv — Russian shelling of civilian infrastructure. City under persistent threat.",
        "Crimea — Ukrainian drone strikes on Russian naval assets continuing.",
        "Black Sea — Russian naval operations. Ukrainian maritime drones attacking Russian fleet.",
      ],
      recent_movements:[
        "Apr 2026: US redirected significant THAAD assets to Iran theater — Ukraine air defense degraded",
        "Mar 2026: European NATO members accelerating direct military support to compensate for US attention on Iran",
        "Mar 2026: Russia accelerating Donetsk offensive timed to US distraction",
        "Feb 2026: Ceasefire talks in Istanbul — stalled on territorial withdrawal preconditions",
        "Jan 2026: Ukraine struck multiple Russian oil facilities with long-range drones",
        "Dec 2025: Russia conducted largest drone attack on Ukrainian cities since start of war",
      ],
      assessment:"The Iran war is Russia's strategic opportunity. US resources and attention are redirected. European support is increasing but cannot fully compensate. Russia is moving in Donetsk with deliberate patience — not a dramatic offensive, but incremental advances that accumulate. Ceasefire negotiations are active but both sides lack sufficient pressure to move from stated positions."
    },
    confirmed:["War began February 24 2022 — Russian full-scale invasion of Ukraine","Russia holds approximately 20% of Ukrainian territory as of April 2026","US THAAD interceptors partially redirected to Iran theater — Ukraine air defense degraded","European NATO members accelerating direct military support to compensate for US distraction","Ceasefire talks in Istanbul active but stalled on territorial preconditions","Russia making incremental advances in Donetsk timed to US distraction on Iran","Ukraine conducting long-range drone strikes on Russian oil infrastructure","Black Sea grain corridor intermittently disrupted","Zaporizhzhia nuclear plant under intermittent shelling — IAEA on-site monitoring"],
    developing:["Whether US attention returns to Ukraine after Iran ceasefire — or whether the distraction creates permanent repositioning","Whether European NATO support can fully compensate for US resource shift","Whether Istanbul ceasefire talks produce anything substantive","Whether Russia attempts a larger offensive while US is focused on Iran","Whether Ukraine's long-range drone campaign on Russian oil infrastructure changes the economic calculus"],
    insights:["Russia waited for its moment and found it. The Iran war is the US distraction Russia needed. The question is whether Moscow uses incremental advances to improve its negotiating position or attempts something larger.","The THAAD redirection to Iran is the most concrete military consequence of the two-front problem. Ukraine's air defense is measurably degraded. Russia knows this.","European NATO members stepping up is a structural shift — the Iran war is accelerating European strategic autonomy in a way that the Trump administration's NATO skepticism did not fully achieve on its own.","Three years in, both sides have fought to a position where neither can achieve a decisive victory but neither can accept the terms the other is offering. That is a frozen conflict structure — dangerous because it can unfreeze suddenly."],
    questions:["Does the Iran ceasefire (if achieved) allow US to redirect resources back to Ukraine — and how quickly?","Is Russia attempting a larger offensive or using distraction for incremental consolidation?","Do Istanbul ceasefire talks have any realistic path to agreement?","Does European strategic autonomy on Ukraine survive as a durable shift or revert after the Iran crisis?"],
    people:[{name:"Vladimir Putin",role:"President, Russia",why:"Authorized the invasion. Managing the Iran-as-opportunity calculation in real time.",alignment:"Russia",status:"active"},{name:"Volodymyr Zelensky",role:"President, Ukraine",why:"Navigating the most difficult moment of the war — US distraction, European uncertainty, front-line pressure.",alignment:"Ukraine",status:"active"},{name:"Ursula von der Leyen",role:"President, European Commission",why:"Leading European coordination of Ukraine support during the US distraction. Her ability to hold European unity is the central variable in this story.",alignment:"EU",status:"active"}],
  },
  {
    id:"W04", code:"SDN-01", heat:4, status:"active-war", updated:"Apr 7 2026",
    title:"Sudan — Civil War",
    sub:"SAF vs. RSF · The World's Forgotten War",
    card:"Sudan's civil war between the Sudanese Armed Forces and the Rapid Support Forces is now the world's largest humanitarian crisis. 150,000+ dead. 8.5 million displaced. Famine declared in multiple regions. Almost no international coverage.",
    toll:{
      confirmed_dead:"150,000+",
      confirmed_wounded:"Unknown",
      children_killed:"Unknown — estimated in the tens of thousands",
      displaced:"8,500,000+",
      note:"Figures from ACLED and UN. These are conservative estimates — the conflict zone is largely inaccessible to journalists and humanitarian workers. Actual casualties likely significantly higher. 25 million people face acute food insecurity."
    },
    front:{
      summary:"The Sudanese Armed Forces (SAF) and the Rapid Support Forces (RSF) — formerly allied — are fighting for control of Sudan after a power-sharing arrangement broke down in April 2023. RSF controls Darfur and large parts of Khartoum. SAF controls the north and east. Both sides have committed documented atrocities. The conflict has produced the world's largest displacement crisis.",
      active_fronts:[
        "Khartoum — capital divided. RSF controls much of western Khartoum, SAF controls east. Civilian infrastructure destroyed.",
        "Darfur — RSF dominant. Documented ethnic cleansing of Masalit people. Echoes of 2003-2004 Darfur genocide.",
        "Gezira State — formerly Sudan's agricultural heartland. RSF advance disrupting food production.",
        "Port Sudan — SAF-controlled, functioning as emergency capital. Red Sea access point.",
        "El Fasher — last major city in Darfur under SAF control. Under siege. Potential genocide designation if it falls.",
      ],
      recent_movements:[
        "Apr 2026: International attention near zero — Iran war dominating all coverage",
        "Mar 2026: RSF advance in Gezira continues — agricultural collapse accelerating",
        "Feb 2026: UN famine declaration for multiple Sudanese regions",
        "Jan 2026: El Fasher remains under siege — UN genocide warning active",
        "Nov 2025: Jeddah peace talks collapsed — no framework for negotiation",
        "Apr 2023: War began when power-sharing between SAF and RSF collapsed",
      ],
      assessment:"Sudan is the world's most severe humanitarian crisis receiving the world's least coverage. The Iran war has absorbed all remaining international attention. El Fasher's siege is the most acute specific threat — if it falls, a genocide designation becomes likely. The RSF advance in Gezira is the slow-motion famine mechanism. This is a crisis that could be much worse in six months and nobody is watching."
    },
    confirmed:["War began April 2023 when SAF-RSF power sharing collapsed","150,000+ dead — ACLED estimate, likely an undercount","8.5 million people displaced — world's largest displacement crisis","UN declared famine in multiple Sudanese regions February 2026","El Fasher under RSF siege — last major SAF-held city in Darfur","Documented ethnic cleansing of Masalit people in Darfur — UN investigators calling it genocide","25 million people face acute food insecurity — roughly half of Sudan's population","Jeddah peace talks collapsed November 2025","RSF advance in Gezira destroying Sudan's agricultural heartland","International coverage near zero as Iran war dominates"],
    developing:["Whether El Fasher falls — and what a genocide designation would mean in practice","Whether any international pressure mounts as Iran crisis attention eventually dissipates","Whether SAF or RSF achieves decisive battlefield advantage","Whether famine conditions spread beyond current regions","Whether Egypt or UAE (both involved with different factions) push for negotiated settlement"],
    insights:["Sudan is what happens when a humanitarian crisis has no geopolitical sponsor. Iran has oil and nukes. Ukraine has NATO allies. Sudan has nothing that the major powers need urgently — so 150,000 people have died in relative silence.","The RSF is backed by UAE and Wagner. The SAF is backed by Egypt. The proxy war dimension explains why the Jeddah talks failed — neither external patron wants the other to win.","The Gezira advance is more consequential than the military maps suggest. Gezira was Sudan's breadbasket. Its destruction is famine-as-weapon — a slow mechanism more deadly than direct killing.","This story will matter more when the Iran crisis ends and international attention returns. The trajectory is clearly worse. Whoever is paying attention at that point will find a country that has been destroyed."],
    questions:["Does El Fasher fall while the world is watching Iran?","Does the UAE-SAF-RSF-Egypt proxy structure prevent any negotiated settlement?","When does international attention return to Sudan — and what will they find?","Is there any external actor with enough influence over both sides to broker a ceasefire?"],
    people:[{name:"Abdel Fattah al-Burhan",role:"SAF Commander / de facto head of state",why:"Led the original coup, then the war against his former partner. Controls the north and east, has Egyptian backing.",alignment:"SAF/Egypt",status:"active"},{name:"Mohamed Hamdan Dagalo (Hemedti)",role:"RSF Commander",why:"The former paramilitary leader who turned his forces against the SAF. Controls Darfur and much of Khartoum. Has UAE backing.",alignment:"RSF/UAE",status:"active"}],
  },
  {
    id:"W05", code:"MMR-01", heat:3, status:"active-war", updated:"Apr 7 2026",
    title:"Myanmar — Civil War",
    sub:"Military Junta vs. Resistance · Year 4",
    card:"Myanmar's military junta is losing ground to a coalition of resistance forces in the most significant territorial shifts since the 2021 coup. Three Brotherhood Alliance making advances. Junta response: scorched earth against civilian populations.",
    toll:{
      confirmed_dead:"50,000+",
      confirmed_wounded:"Unknown",
      children_killed:"Unknown — estimated thousands",
      displaced:"2,600,000+",
      note:"ACLED and UN figures. Internal displacement of 2.6 million is a minimum — OCHA estimates higher. Near-total information blackout makes accurate casualty counts impossible. Humanitarian access severely restricted."
    },
    front:{
      summary:"The military junta (Tatmadaw) that seized power in February 2021 is facing the most significant resistance it has encountered. The Three Brotherhood Alliance — comprising the Arakan Army, Myanmar National Democratic Alliance Army, and Ta'ang National Liberation Army — launched Operation 1027 in October 2023 and has made sustained territorial gains. The National Unity Government (NUG) and People's Defence Forces (PDF) are fighting in parallel. The junta has responded with airstrikes and artillery on civilian areas.",
      active_fronts:[
        "Shan State — Three Brotherhood Alliance holds significant territory. Operation 1027 ongoing.",
        "Rakhine State — Arakan Army controls most of the state including the strategic Kyaukphyu deep-sea port.",
        "Sagaing Region — PDF operations against junta forces. Junta responding with village burning.",
        "Karen State — Karen National Union operations. Long-running front now connected to broader resistance.",
        "Mandalay Region — resistance forces approaching Myanmar's second city.",
        "Chin State — Chin National Front and PDF joint operations.",
      ],
      recent_movements:[
        "Apr 2026: Resistance forces advancing toward Mandalay — would be most significant urban capture since coup",
        "Mar 2026: Arakan Army consolidated control of Rakhine State including Kyaukphyu port",
        "Feb 2026: Junta conducting airstrikes on civilian areas in Sagaing at increased rate",
        "Jan 2026: Three Brotherhood Alliance rejected junta ceasefire offer",
        "Oct 2023: Operation 1027 launched — the turning point of the conflict",
      ],
      assessment:"The junta is losing the military contest in much of the country outside major cities. But losing territory does not mean losing power — the junta controls Naypyidaw and Yangon, the international banking system access, and the air force. The resistance is fragmented across ethnic and political lines. A junta collapse is possible; a unified post-junta governance structure is not yet visible."
    },
    confirmed:["Military coup February 2021 — elected government of Aung San Suu Kyi removed","Operation 1027 launched October 2023 — Three Brotherhood Alliance territorial advances","Arakan Army controls most of Rakhine State including Kyaukphyu strategic port","Resistance forces advancing toward Mandalay as of April 2026","Junta conducting airstrikes on civilian populations — documented in Sagaing and Chin State","2.6 million internally displaced — OCHA minimum estimate","Three Brotherhood Alliance rejected junta ceasefire offer January 2026","China brokered temporary ceasefire in late 2023 — collapsed"],
    developing:["Whether resistance forces take Mandalay — would be a decisive symbolic and strategic shift","Whether junta collapses or finds a way to hold the cities while losing the countryside","Whether China pushes for negotiated settlement to protect its Belt and Road investments (Kyaukphyu port)","Whether ASEAN does anything beyond issuing statements","Whether the resistance coalition holds together if the junta weakens"],
    insights:["The Arakan Army taking Kyaukphyu port is strategically significant beyond Myanmar — it sits at the end of a Chinese pipeline that carries oil and gas from the Bay of Bengal to Yunnan Province. China now has to negotiate with the Arakan Army for its own energy infrastructure.","The junta is losing the war but not necessarily losing power — controlling the cities, banks, and air force is enough to maintain a brutal stalemate indefinitely. What breaks a stalemate is external pressure. China is the only actor with sufficient leverage.","This conflict has been running for three years with almost no international coverage and no serious international engagement. The Iran war has completely displaced it from any diplomatic attention."],
    questions:["Does Mandalay fall — and what does that mean for the junta's viability?","Does China pressure the junta toward a negotiated settlement to protect Kyaukphyu?","Can the resistance coalition maintain unity as it gains territory?","What does a post-junta governance structure look like — and is any actor building it?"],
    people:[{name:"Min Aung Hlaing",role:"Junta Commander / de facto head of state",why:"Led the 2021 coup. Under ICC investigation. His government is losing territory but not yet power.",alignment:"Junta/Tatmadaw",status:"active"},{name:"Aung San Suu Kyi",role:"Former State Counsellor (imprisoned)",why:"Democratically elected leader imprisoned since the coup. Her status is a political symbol but she has no operational role.",alignment:"NLD (imprisoned)",status:"imprisoned"}],
  },
  {
    id:"W06", code:"SAH-01", heat:3, status:"developing", updated:"Apr 7 2026",
    title:"Sahel — Fragmented Conflicts",
    sub:"Mali, Burkina Faso, Niger · Coups, Wagner, and the New Disorder",
    card:"A series of coups has expelled French forces from West Africa's Sahel. Russia's Africa Corps (formerly Wagner) has filled the vacuum. Jihadist insurgencies continue. The great power competition for Africa is playing out here first.",
    toll:{
      confirmed_dead:"30,000+ (combined, 2020-present)",
      confirmed_wounded:"Unknown",
      children_killed:"Unknown — thousands documented",
      displaced:"3,000,000+",
      note:"Combined figures across Mali, Burkina Faso, Niger conflicts against jihadist groups (JNIM and ISGS). Separate from civilian casualties from coup-related political violence. UNHCR displacement figures. Information access severely limited."
    },
    front:{
      summary:"The Sahel theater is not a single war but a cluster of overlapping conflicts. Jihadist insurgencies (JNIM and Islamic State Greater Sahara) are fighting across all three countries. The coup governments have expelled French counterterrorism forces (Operation Barkhane, MINUSMA) and replaced them with Africa Corps (Russia). The security situation has not improved — in most metrics it has worsened since the coups. The great-power competition for Africa is most visible and most contested here.",
      active_fronts:[
        "Central Mali — JNIM (Jama'at Nusrat al-Islam wal-Muslimin) controls significant territory. Africa Corps operations ongoing.",
        "Northern Burkina Faso — JNIM and ISGS active. Burkina Faso junta severed French ties, invited Africa Corps.",
        "Western Niger — ISGS (Islamic State Greater Sahara) active. Niger junta expelled French and US forces.",
        "Chad border region — spillover violence. Chad junta navigating between French and Russian relationships.",
        "Nigeria-Niger border — Boko Haram related spillover into Niger from northeast Nigeria.",
      ],
      recent_movements:[
        "Apr 2026: Alliance of Sahel States (Mali, Burkina Faso, Niger) deepening security coordination",
        "Mar 2026: JNIM attacks on Mali army positions near Bamako increasing in frequency",
        "Feb 2026: Africa Corps expanded presence in Burkina Faso following additional French personnel expulsion",
        "Jan 2026: Niger expelled US forces from Agadez air base — key counterterrorism drone base",
        "Nov 2025: MINUSMA (UN peacekeeping) fully withdrawn from Mali — security vacuum growing",
      ],
      assessment:"The Sahel coups achieved their primary goal — expelling French presence. They have not achieved their secondary goal — improving security. Jihadist activity has generally increased since the Wagner/Africa Corps takeover. This creates a paradox: the coup governments need Russia for political legitimacy but Russia's forces are not winning the insurgency. The next phase is unclear — whether any external actor can succeed where France and the UN failed."
    },
    confirmed:["Coups in Mali (2021), Burkina Faso (2022), Niger (2023) expelled French military presence","Alliance of Sahel States (AES) formed — Mali, Burkina Faso, Niger in political and security bloc","Africa Corps (former Wagner, now formally Russian state) operating in all three AES countries","France's Operation Barkhane ended and MINUSMA fully withdrawn","US expelled from Agadez air base in Niger January 2026 — significant counterterrorism capability loss","Jihadist activity (JNIM, ISGS) generally increasing since French withdrawal — multiple independent assessments","Niger junta expelled French ambassador and suspended cooperation with EU missions","Chad navigating between French relationship and AES pressure"],
    developing:["Whether Africa Corps can achieve security outcomes France and the UN could not","Whether the AES deepens into a formal military alliance with external sponsor (Russia)","Whether US develops alternative counterterrorism architecture after Agadez expulsion","Whether jihadist groups expand south into coastal West Africa (Ghana, Ivory Coast, Benin)","Whether China uses the security vacuum to expand Belt and Road influence in the Sahel"],
    insights:["The Sahel coups are a story about legitimacy, not security. The populations chose instability and Russian association over continued French presence. That is a statement about the depth of grievance against the colonial relationship — not an endorsement of military governance.","Africa Corps is not winning the insurgency. French forces were not winning it either. The question nobody has answered is whether the insurgency is winnable at all, or whether the underlying conditions (poverty, governance failure, climate stress) make any military solution temporary.","The Agadez expulsion is a strategic loss for US counterterrorism that receives almost no coverage. Agadez was the hub for drone operations across the central Sahel. Without it, the US has no persistent ISR presence over the region.","The jihadist groups are the long game. They don't need to win battles — they need to outlast every external actor and make governance impossible. They have been succeeding at this for a decade."],
    questions:["Can Africa Corps achieve security outcomes that French forces and the UN could not?","Do jihadist groups expand south into coastal West Africa — and what does that trigger?","Does the US find an alternative architecture for Sahel counterterrorism after Agadez?","Is there a governance model that can address the underlying conditions driving the insurgency?"],
    people:[{name:"Assimi Goïta",role:"Junta leader, Mali",why:"Led the first Sahel coup. His invite to Wagner/Africa Corps set the template that Burkina Faso and Niger followed.",alignment:"AES/Russia-aligned",status:"active"},{name:"Ibrahim Traoré",role:"Junta leader, Burkina Faso",why:"Youngest coup leader in African history. Has been most aggressive in expelling Western presence.",alignment:"AES/Russia-aligned",status:"active"},{name:"Abdourahamane Tiani",role:"Junta leader, Niger",why:"Expelled French and US forces — including the Agadez drone base that was central to US counterterrorism in the region.",alignment:"AES/Russia-aligned",status:"active"}],
  },
  {
    id:"W07", code:"LBN-01", heat:4, status:"active-war", updated:"Apr 7 2026",
    title:"Lebanon — Hezbollah Front",
    sub:"Hezbollah vs. Israel · Direct front activated by Iran war",
    card:"Hezbollah escalated to sustained high-intensity operations following Operation Epic Fury. Precision munitions and rocket barrages at northern Israel. First direct state-level involvement from an Iran proxy since October 7. Lebanon's civilian population in the north caught between both sides.",
    toll:{
      confirmed_dead:"12,000+ (Lebanese side since Oct 2023, including Oct 2024 escalation and current phase)",
      confirmed_wounded:"35,000+",
      children_killed:"1,200+",
      displaced:"1,200,000+",
      note:"Figures cover the full Lebanon front since October 2023. The current high-intensity phase began February 28 2026 with Operation Epic Fury. Lebanese Ministry of Public Health and UN OCHA figures. Israeli civilian and military casualties not included."
    },
    front:{
      summary:"Hezbollah has been in active exchange with Israel since October 8 2023 — one day after the Hamas attack. The conflict escalated sharply in September-October 2024 with Israeli strikes on Hezbollah leadership including Nasrallah. It escalated again February 28 2026 when Operation Epic Fury activated the Iran axis of resistance. Hezbollah is now in what it calls sustained high-intensity operations — precision missiles, anti-tank missiles, and rocket barrages targeting northern Israel. Israeli strikes are targeting Hezbollah infrastructure across southern Lebanon and the Bekaa Valley.",
      active_fronts:[
        "Southern Lebanon — primary ground contact zone. IDF operating inside Lebanon. Hezbollah anti-tank and precision missile operations.",
        "Bekaa Valley — Hezbollah's strategic depth. Israeli airstrikes on weapons storage and command infrastructure.",
        "Northern Israel (Galilee) — under persistent Hezbollah fire. Evacuated civilian population. Agricultural land and infrastructure damaged.",
        "Beirut suburbs (Dahiyeh) — Israeli strikes on Hezbollah political and military infrastructure.",
        "Syria border — Hezbollah supply lines and weapons transfer routes under Israeli interdiction.",
      ],
      recent_movements:[
        "Apr 7 2026: Hezbollah sustained barrage on northern Israeli towns — largest since 2006",
        "Mar 2026: Hezbollah announced shift to precision munitions phase — targeted military infrastructure",
        "Feb 28 2026: Operation Epic Fury launched — Hezbollah activated full front same day",
        "Oct 2024: Israel killed Nasrallah and most of Hezbollah's senior leadership — organization degraded but not destroyed",
        "Oct 2023: Front opened day after Hamas attack — has not closed",
      ],
      assessment:"Hezbollah is fighting at a degraded level compared to its 2006 peak — Israel's October 2024 leadership decapitation was real. But it is still operating precision missiles and sustaining a front that has displaced 100,000 northern Israelis. The Iran war has increased the intensity but Hezbollah's long-term position depends entirely on the Iran ceasefire outcome — if Iran makes peace, Hezbollah has no strategic reason to continue at this intensity."
    },
    confirmed:["Hezbollah front opened October 8 2023 — one day after Hamas attack","Israel killed Hezbollah Secretary-General Nasrallah and most senior leadership in October 2024","Hezbollah escalated to sustained high-intensity operations February 28 2026 following Operation Epic Fury","Precision munitions and rockets targeting northern Israel daily","IDF operating inside southern Lebanon","Israeli airstrikes targeting Hezbollah infrastructure in Bekaa Valley and Beirut suburbs","100,000+ northern Israeli residents displaced since October 2023","Lebanon civilian infrastructure damaged — south Lebanon effectively depopulated in conflict zone"],
    developing:["Whether Iran ceasefire (if achieved) leads to Hezbollah stand-down or separate negotiation","Whether Hezbollah's degraded leadership affects operational capacity in sustained high-intensity operations","Whether IDF expands ground operations inside Lebanon","Whether Lebanon's fragile government and economy survive the additional shock"],
    insights:["Hezbollah is the strategic reserve Iran is burning. Every precision missile it fires is depleting a stockpile that took years to build. If Iran makes peace, Hezbollah ceases fire and waits. If Iran is destroyed, Hezbollah has no resupply. Either way, the Lebanon front is derivative of the Iran outcome.","The October 2024 leadership decapitation degraded Hezbollah significantly — but it did not destroy it. The organization rebuilt around a second tier of commanders. That resilience is the most important lesson Israel should take from Lebanon.","Northern Israel has been effectively evacuated for 18 months. 100,000 people cannot return home. That is a strategic success for Hezbollah regardless of military outcomes."],
    questions:["Does an Iran ceasefire automatically end the Hezbollah front or does it require a separate negotiation?","How much of Hezbollah's precision missile stockpile remains after 18 months of operation?","Does Israel attempt a decisive ground operation in Lebanon before an Iran ceasefire?","What does Lebanon look like after the war — economically, politically, governmentally?"],
    people:[{name:"Naim Qassem",role:"Hezbollah Secretary-General (post-Nasrallah)",why:"Second-tier commander elevated after Nasrallah's killing. Running the current high-intensity operations.",alignment:"Hezbollah/Iran",status:"active"},{name:"Hassan Nasrallah",role:"Former Hezbollah Secretary-General",why:"Killed by Israel October 2024. His death degraded Hezbollah significantly but did not destroy it.",alignment:"Hezbollah",status:"deceased"},{name:"Benjamin Netanyahu",role:"PM, Israel",why:"Authorized the Lebanon operations as part of the broader Iran strategy.",alignment:"Israel",status:"active"}],
  },
  {
    id:"W08", code:"PAK-01", heat:3, status:"developing", updated:"Apr 7 2026",
    title:"Pakistan-India — Kashmir Tension",
    sub:"Nuclear neighbors · Escalation risk while US watches Iran",
    card:"Pakistan-India tensions over Kashmir at elevated levels. US attention fully on Iran. Both sides deploying naval assets in Gulf of Oman. The tracker's highest-probability escalation risk that nobody is monitoring.",
    toll:{
      confirmed_dead:"300+ (Line of Control incidents, 2025-2026)",
      confirmed_wounded:"500+",
      children_killed:"Unknown",
      displaced:"Unknown",
      note:"Line of Control incident figures only — not full Kashmir conflict which has been ongoing since 1947. These are current-phase casualties from recent escalation, not the historical total. Full conflict since 1989 insurgency: 70,000-100,000 dead depending on source."
    },
    front:{
      summary:"Pakistan and India have fought three major wars (1947, 1965, 1971) and one limited conflict (Kargil 1999). Both are nuclear powers. The current tension is centered on the Line of Control in Kashmir — a de-facto border established after the 1947 war that neither side fully accepts. Cross-LoC firing incidents, militant infiltration from Pakistan, and Indian security operations in Jammu and Kashmir have elevated to levels not seen since the 2019 Pulwama-Balakot exchange. The US, which has historically served as a mediator, is fully focused on Iran.",
      active_fronts:[
        "Line of Control (Kashmir) — elevated cross-border firing. Both sides reinforcing positions.",
        "Gulf of Oman — Indian and Pakistani naval destroyers escorting tankers in parallel. Unusual proximity.",
        "Pakistan-Afghanistan border — TTP (Tehrik-i-Taliban Pakistan) operations complicating Pakistani military posture.",
        "Indian Ocean — both navies conducting patrols. Not in direct confrontation but aware of each other.",
      ],
      recent_movements:[
        "Apr 2026: Indian and Pakistani destroyers escorting tankers in Gulf of Oman — unusual parallel deployment",
        "Mar 2026: Cross-LoC incidents at elevated level — both sides reinforcing forward positions",
        "Feb 2026: India expelled two Pakistani diplomats following militant attack in Jammu",
        "Jan 2026: Pakistan test-fired medium-range ballistic missile — described as routine",
        "2025: Multiple militant attacks in Jammu and Kashmir attributed to Pakistan-linked groups",
      ],
      assessment:"This is the tracker's highest-probability escalation risk that is receiving the least attention. The structural conditions for a Pulwama-type exchange — a mass casualty militant attack attributed to Pakistan, followed by Indian military response — are present. US mediation capacity is absent. A 2019-style exchange that escalates further cannot be ruled out. The nuclear dimension means this is categorically different from any other conflict in the tracker."
    },
    confirmed:["Pakistan and India are both nuclear powers","Both have fought three major wars and one limited conflict since partition","Cross-LoC incidents elevated in 2025-2026 — both sides reinforcing positions","Indian and Pakistani naval destroyers escorting tankers in Gulf of Oman in parallel operations","India expelled two Pakistani diplomats following militant attack in Jammu February 2026","Pakistan test-fired medium-range ballistic missile January 2026","US mediation capacity absent — attention fully on Iran","2019 Pulwama-Balakot exchange established that limited military exchange is possible — and survivable for both governments politically"],
    developing:["Whether a mass-casualty militant attack in India triggers a Pulwama-style response","Whether US returns diplomatic attention to the region before or after an incident","Whether the Gulf of Oman naval proximity produces any incident","Whether Pakistan's TTP pressure forces military resources away from Kashmir focus","Whether China plays any mediating role given its relationships with both countries"],
    insights:["This is the world's most dangerous unmonitored escalation risk. Two nuclear powers with active territorial dispute, elevated military posture, absent US mediation, and domestic political incentives on both sides that make de-escalation politically costly.","The 2019 precedent is actually dangerous in the wrong direction. Pulwama-Balakot showed both governments that a limited exchange is politically survivable. That lowers the threshold. What neither government has fully modeled is what happens if an exchange goes a step further.","Pakistan's TTP problem is a complicating factor — Pakistan's military is stretched between its western border (Afghanistan/TTP) and its eastern border (India/Kashmir). Internal pressure may paradoxically make escalation more likely, not less.","India under Modi has consistently taken harder lines on Pakistan than previous governments. The BJP's political base expects it. That is not an argument for escalation but it is an argument that de-escalation is politically costly in a way it wasn't under previous governments."],
    questions:["Is there any US diplomatic engagement with India-Pakistan despite Iran focus?","What does a Pulwama-level incident look like in 2026 — and would the response be the same or larger?","Does China play a mediating role — it has relationships with both countries and strong interest in stability?","What is the actual nuclear threshold — and has either side updated their red lines since 2019?"],
    people:[{name:"Narendra Modi",role:"PM, India",why:"His government has taken the hardest line on Pakistan in a generation. Domestic political incentives favor toughness over de-escalation.",alignment:"India",status:"active"},{name:"Shehbaz Sharif",role:"PM, Pakistan",why:"Navigating military pressure from within Pakistan and external pressure from India, while managing TTP on the western border.",alignment:"Pakistan",status:"active"},{name:"General Asim Munir",role:"Chief of Army Staff, Pakistan",why:"The Pakistani military remains the primary foreign policy actor on India. His read of the strategic situation is what matters most.",alignment:"Pakistan military",status:"active"}],
  },
];

const WAR_COLOR = "#a03030";

const CATS = [
  {id:"ai",label:"AI & GOVERNANCE"},
  {id:"geopolitics",label:"GEOPOLITICS"},
  {id:"economics",label:"ECONOMICS & POWER"},
  {id:"power",label:"POWER & ACCOUNTABILITY"},
  {id:"social",label:"SOCIAL & INFORMATION"},
];

const STATUS = {
  "escalating": {label:"ESCALATING",color:"#e07b39",bg:"rgba(224,123,57,0.1)"},
  "active-war":  {label:"ACTIVE WAR",color:"#c94040",bg:"rgba(201,64,64,0.1)"},
  "developing":  {label:"DEVELOPING",color:"#d4a843",bg:"rgba(212,168,67,0.1)"},
  "resolved":    {label:"RESOLVED",color:"#4a9b6f",bg:"rgba(74,155,111,0.1)"},
  "monitoring":  {label:"MONITORING",color:"#6b8cba",bg:"rgba(107,140,186,0.1)"},
};

const CATCOLOR = {
  ai:"#7ba7d4", geopolitics:"#c97b7b", economics:"#c9a84c", science:"#7bbfa0", power:"#a07bb5", social:"#7bb5a0"
};

function Heat({n}) {
  const c = n>=5?"#c94040":n>=4?"#e07b39":"#d4a843";
  return <div style={{display:"flex",gap:3}}>{[1,2,3,4,5].map(i=>(
    <div key={i} style={{width:7,height:7,borderRadius:1,background:i<=n?c:"rgba(255,255,255,0.08)"}}/>
  ))}</div>;
}

function Badge({status}) {
  const s = STATUS[status];
  return (
    <div style={{display:"inline-flex",alignItems:"center",gap:5,background:s.bg,border:`1px solid ${s.color}33`,padding:"2px 8px",borderRadius:2}}>
      <div style={{width:5,height:5,borderRadius:"50%",background:s.color,animation:status==="active-war"?"pulse 1.4s infinite":"none"}}/>
      <span style={{fontSize:9,color:s.color,letterSpacing:"0.15em",fontFamily:"monospace"}}>{s.label}</span>
    </div>
  );
}

function CopyBtn({text,label,small}) {
  const [open,setOpen] = useState(false);
  if(open) return (
    <div style={{marginTop:6,width:"100%"}}>
      <div style={{fontSize:9,color:"#555",fontFamily:"monospace",marginBottom:4,letterSpacing:"0.1em"}}>SELECT ALL + CMD/CTRL+C TO COPY</div>
      <textarea readOnly autoFocus onFocus={e=>e.target.select()} value={text}
        style={{width:"100%",minHeight:60,background:"rgba(255,255,255,0.04)",border:"1px solid rgba(123,167,212,0.3)",borderRadius:3,color:"#c0c8d8",fontSize:11,padding:"8px 10px",fontFamily:"monospace",lineHeight:1.5,resize:"vertical",boxSizing:"border-box",display:"block"}}/>
      <button onClick={()=>setOpen(false)} style={{marginTop:4,background:"none",border:"1px solid rgba(255,255,255,0.08)",color:"#555",padding:"3px 10px",borderRadius:3,fontSize:9,cursor:"pointer",fontFamily:"monospace"}}>CLOSE</button>
    </div>
  );
  return (
    <button onClick={()=>setOpen(true)} style={{background:"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.1)",color:"#777",padding:small?"3px 9px":"6px 14px",borderRadius:3,fontSize:small?9:11,cursor:"pointer",letterSpacing:"0.1em",fontFamily:"monospace",whiteSpace:"nowrap"}}>{label||"COPY"}</button>
  );
}

function Items({list,color,icon}) {
  return (
    <div style={{display:"flex",flexDirection:"column",gap:4}}>
      {list.map((item,i)=>(
        <div key={i} style={{display:"flex",gap:10,padding:"9px 12px",background:"rgba(255,255,255,0.018)",border:"1px solid rgba(255,255,255,0.04)",borderLeft:`2px solid ${color}40`,borderRadius:2}}>
          <span style={{color,fontSize:9,marginTop:4,flexShrink:0}}>{icon}</span>
          <span style={{fontSize:13,color:"#9aa0b0",lineHeight:1.65}}>{item}</span>
        </div>
      ))}
    </div>
  );
}

function SidebarCard({s,active,onClick}) {
  const st = STATUS[s.status];
  const cc = CATCOLOR[s.cat];
  return (
    <div onClick={onClick} style={{background:active?"rgba(255,255,255,0.055)":"rgba(255,255,255,0.015)",border:`1px solid ${active?"rgba(255,255,255,0.14)":"rgba(255,255,255,0.05)"}`,borderLeft:`2px solid ${active?st.color:cc+"44"}`,borderRadius:2,padding:"10px 12px",cursor:"pointer",transition:"all 0.15s",marginBottom:4}}>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4}}>
        <span style={{fontSize:9,color:"#555",fontFamily:"monospace",letterSpacing:"0.1em",fontWeight:600}}>{s.code}</span>
        <Heat n={s.heat}/>
      </div>
      <div style={{fontSize:14,color:active?"#fff":"#c0c8d8",fontWeight:700,marginBottom:4,lineHeight:1.3}}>{s.title}</div>
      <div style={{fontSize:11,color:"#505868",lineHeight:1.55,marginBottom:8}}>{s.card}</div>
      <Badge status={s.status}/>
    </div>
  );
}

const STATUS_STYLE = {
  "active":    {label:"ACTIVE",    color:"#4a9b6f", bg:"rgba(74,155,111,0.1)"},
  "sidelined": {label:"SIDELINED", color:"#d4a843", bg:"rgba(212,168,67,0.1)"},
  "deceased":  {label:"DECEASED",  color:"#666",    bg:"rgba(100,100,100,0.1)"},
  "imprisoned":{label:"IMPRISONED",color:"#c97b7b", bg:"rgba(201,123,123,0.1)"},
  "unknown":   {label:"UNKNOWN",   color:"#555",    bg:"rgba(80,80,80,0.1)"},
};

function PeopleTab({story, storyColor}) {
  const people = story.people || [];
  if (!people.length) return (
    <div style={{color:"#333",fontSize:13,fontFamily:"monospace",paddingTop:8}}>NO PEOPLE DATA FOR THIS STORY</div>
  );
  return (
    <div>
      <div style={{fontSize:10,color:"#7ba7d4",letterSpacing:"0.2em",fontFamily:"monospace",marginBottom:14,fontWeight:700}}>◈ KEY PLAYERS</div>
      <div style={{display:"flex",flexDirection:"column",gap:8}}>
        {people.map((p,i) => {
          const ss = STATUS_STYLE[p.status] || STATUS_STYLE["unknown"];
          return (
            <div key={i} style={{background:"rgba(255,255,255,0.02)",border:"1px solid rgba(255,255,255,0.06)",borderLeft:`2px solid ${storyColor}55`,borderRadius:2,padding:"12px 14px"}}>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",gap:12,marginBottom:6,flexWrap:"wrap"}}>
                <div>
                  <span style={{fontSize:14,color:"#dde0e8",fontWeight:700}}>{p.name}</span>
                  <span style={{fontSize:11,color:"#484848",marginLeft:10}}>{p.role}</span>
                </div>
                <div style={{display:"flex",gap:6,flexShrink:0,flexWrap:"wrap",alignItems:"center"}}>
                  <div style={{fontSize:9,color:"#555",fontFamily:"monospace",background:"rgba(255,255,255,0.04)",border:"1px solid rgba(255,255,255,0.07)",padding:"2px 7px",borderRadius:2}}>{p.alignment}</div>
                  <div style={{display:"inline-flex",alignItems:"center",gap:4,background:ss.bg,border:`1px solid ${ss.color}33`,padding:"2px 7px",borderRadius:2}}>
                    <div style={{width:5,height:5,borderRadius:"50%",background:ss.color}}/>
                    <span style={{fontSize:9,color:ss.color,letterSpacing:"0.12em",fontFamily:"monospace"}}>{ss.label}</span>
                  </div>
                </div>
              </div>
              <div style={{fontSize:13,color:"#848ea0",lineHeight:1.7}}>{p.why}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function ConnectionsTab({story, goToStory}) {
  return (
    <div>
      <div style={{fontSize:10,color:"#7ba7d4",letterSpacing:"0.2em",fontFamily:"monospace",marginBottom:14,fontWeight:700}}>⬡ SYSTEM CONNECTIONS</div>
      <div style={{fontSize:12,color:"#484848",marginBottom:16,lineHeight:1.65}}>How this story feeds into and depends on others. The world is a system — pull the thread.</div>
      <div style={{display:"flex",flexDirection:"column",gap:8}}>
        {(story.connections||[]).map((conn,i)=>{
          const linked = STORIES.find(s=>s.code===conn.code);
          const st = linked ? STATUS[linked.status] : null;
          const cc = linked ? CATCOLOR[linked.cat] : "#555";
          return (
            <div key={i} style={{background:"rgba(255,255,255,0.02)",border:"1px solid rgba(255,255,255,0.06)",borderLeft:`2px solid ${cc}55`,borderRadius:2,padding:"12px 14px",cursor:linked?"pointer":"default",transition:"background 0.15s"}}
              onClick={()=>linked&&goToStory(linked.id)}
              onMouseEnter={e=>{if(linked)e.currentTarget.style.background="rgba(255,255,255,0.04)"}}
              onMouseLeave={e=>{if(linked)e.currentTarget.style.background="rgba(255,255,255,0.02)"}}>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:6,gap:8,flexWrap:"wrap"}}>
                <div style={{display:"flex",alignItems:"center",gap:8}}>
                  <span style={{fontSize:9,color:cc,fontFamily:"monospace",fontWeight:700,letterSpacing:"0.1em"}}>{conn.code}</span>
                  <span style={{fontSize:12,color:"#c0c8d8",fontWeight:700}}>{conn.label}</span>
                </div>
                <div style={{display:"flex",alignItems:"center",gap:8}}>
                  {st&&<Badge status={linked.status}/>}
                  {linked&&<span style={{fontSize:9,color:"#3a3a3a",fontFamily:"monospace",letterSpacing:"0.1em"}}>→ VIEW</span>}
                </div>
              </div>
              <div style={{fontSize:13,color:"#848ea0",lineHeight:1.75}}>{conn.how}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function CanadaTab({story}) {
  return (
    <div>
      <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:14}}>
        <div style={{fontSize:16}}>🍁</div>
        <div style={{fontSize:10,color:"#c97b5a",letterSpacing:"0.2em",fontFamily:"monospace",fontWeight:700}}>CANADA LENS</div>
      </div>
      <div style={{fontSize:14,color:"#9aa0b0",lineHeight:1.85,background:"rgba(255,255,255,0.02)",border:"1px solid rgba(255,255,255,0.05)",borderLeft:"2px solid #c97b5a44",borderRadius:2,padding:"14px 16px"}}>
        {story.canada || "No specific Canada dimension identified for this story."}
      </div>
    </div>
  );
}

// ============================================================
// CROSS-STORY ALERTS
// ============================================================
const ALERT_SEVERITY = {
  critical:{color:"#c94040", bg:"rgba(201,64,64,0.07)", border:"rgba(201,64,64,0.25)"},
  high:    {color:"#e07b39", bg:"rgba(224,123,57,0.07)", border:"rgba(224,123,57,0.25)"},
  medium:  {color:"#d4a843", bg:"rgba(212,168,67,0.07)", border:"rgba(212,168,67,0.25)"},
};

function CrossStoryAlerts() {
  const alerts = OVERVIEW.cross_story_alerts || [];
  if (!alerts.length) return null;
  return (
    <div style={{marginBottom:28}}>
      <div style={{fontSize:10,color:"#c94040",letterSpacing:"0.2em",fontFamily:"monospace",fontWeight:700,marginBottom:12}}>⬡ CROSS-STORY ALERTS</div>
      <div style={{display:"flex",flexDirection:"column",gap:8}}>
        {alerts.map((a,i)=>{
          const sev = ALERT_SEVERITY[a.severity] || ALERT_SEVERITY.medium;
          return (
            <div key={i} style={{background:sev.bg,border:`1px solid ${sev.border}`,borderLeft:`3px solid ${sev.color}`,borderRadius:2,padding:"12px 14px"}}>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:8,gap:8,flexWrap:"wrap"}}>
                <div style={{fontSize:13,color:"#dde0e8",fontWeight:700}}>{a.title}</div>
                <div style={{display:"flex",gap:6,alignItems:"center",flexShrink:0}}>
                  <div style={{display:"flex",gap:4}}>
                    {a.codes.map(c=>(
                      <span key={c} style={{fontSize:8,color:sev.color,fontFamily:"monospace",background:`${sev.color}18`,border:`1px solid ${sev.color}33`,padding:"1px 6px",borderRadius:2}}>{c}</span>
                    ))}
                  </div>
                  <span style={{fontSize:9,color:"#383838",fontFamily:"monospace"}}>{a.date}</span>
                </div>
              </div>
              <div style={{fontSize:12,color:"#9aa0b0",lineHeight:1.7}}>{a.alert}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ============================================================
// IMPLICATIONS & RISKS TAB
// ============================================================
function ImplicationsRisksTab({story, color}) {
  const implications = story.implications || [];
  const risks = story.risks || [];
  const empty = !implications.length && !risks.length;
  if (empty) return (
    <div style={{color:"#2a2a2a",fontSize:12,fontFamily:"monospace",paddingTop:8}}>
      IMPLICATIONS AND RISKS NOT YET POPULATED — WILL BE ADDED BY AUTOMATED UPDATE SYSTEM
    </div>
  );
  return (
    <div>
      {implications.length > 0 && (
        <div style={{marginBottom:20}}>
          <div style={{fontSize:10,color:"#7ba7d4",letterSpacing:"0.2em",fontFamily:"monospace",fontWeight:700,marginBottom:10}}>→ IMPLICATIONS</div>
          <div style={{display:"flex",flexDirection:"column",gap:4}}>
            {implications.map((item,i)=>(
              <div key={i} style={{display:"flex",gap:10,padding:"9px 12px",background:"rgba(123,167,212,0.04)",border:"1px solid rgba(123,167,212,0.1)",borderLeft:"2px solid #7ba7d440",borderRadius:2}}>
                <span style={{color:"#7ba7d4",fontSize:9,marginTop:4,flexShrink:0}}>→</span>
                <span style={{fontSize:13,color:"#9aa0b0",lineHeight:1.65}}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      )}
      {risks.length > 0 && (
        <div>
          <div style={{fontSize:10,color:"#c94040",letterSpacing:"0.2em",fontFamily:"monospace",fontWeight:700,marginBottom:10}}>⚠ RISKS</div>
          <div style={{display:"flex",flexDirection:"column",gap:4}}>
            {risks.map((item,i)=>(
              <div key={i} style={{display:"flex",gap:10,padding:"9px 12px",background:"rgba(201,64,64,0.04)",border:"1px solid rgba(201,64,64,0.1)",borderLeft:"2px solid #c9404040",borderRadius:2}}>
                <span style={{color:"#c94040",fontSize:9,marginTop:4,flexShrink:0}}>⚠</span>
                <span style={{fontSize:13,color:"#9aa0b0",lineHeight:1.65}}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// ============================================================
// EVENT LOG
// ============================================================
const EVENT_TYPE_STYLE = {
  NEW_FACT:      {color:"#4a9b6f",  icon:"✓", label:"NEW FACT"},
  STATUS_CHANGE: {color:"#e07b39",  icon:"◈", label:"STATUS CHANGE"},
  HEAT_CHANGE:   {color:"#d4a843",  icon:"▲", label:"HEAT CHANGE"},
  RETIREMENT:    {color:"#666",     icon:"◌", label:"RETIRED"},
  NEW_STORY:     {color:"#7ba7d4",  icon:"+", label:"NEW STORY"},
  ALERT:         {color:"#c94040",  icon:"⚡", label:"ALERT"},
  STATUS_UPDATE: {color:"#9b6fb0",  icon:"◈", label:"UPDATE"},
};

function EventLog() {
  const [filter, setFilter] = useState("ALL");
  const types = ["ALL", ...Object.keys(EVENT_TYPE_STYLE)];
  const filtered = filter === "ALL" ? EVENTS : EVENTS.filter(e=>e.type===filter);

  return (
    <div style={{flex:1,overflowY:"auto",padding:"20px 24px"}}>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:16,flexWrap:"wrap",gap:10}}>
        <div style={{fontSize:10,color:"#7ba7d4",letterSpacing:"0.2em",fontFamily:"monospace",fontWeight:700}}>◈ EVENT LOG — {filtered.length} EVENTS</div>
        <div style={{display:"flex",gap:4,flexWrap:"wrap"}}>
          {types.map(t=>{
            const s = EVENT_TYPE_STYLE[t];
            const active = filter===t;
            return (
              <button key={t} onClick={()=>setFilter(t)} style={{background:active?(s?`${s.color}18`:"rgba(255,255,255,0.08)"):"rgba(255,255,255,0.03)",border:`1px solid ${active?(s?`${s.color}44`:"rgba(255,255,255,0.2)"):"rgba(255,255,255,0.07)"}`,color:active?(s?s.color:"#c0c8d8"):"#555",padding:"3px 8px",borderRadius:2,fontSize:8,cursor:"pointer",fontFamily:"monospace",letterSpacing:"0.08em"}}>
                {s ? s.label : "ALL"}
              </button>
            );
          })}
        </div>
      </div>
      <div style={{display:"flex",flexDirection:"column",gap:4}}>
        {filtered.map((e,i)=>{
          const ts = EVENT_TYPE_STYLE[e.type] || EVENT_TYPE_STYLE.STATUS_UPDATE;
          return (
            <div key={i} style={{display:"flex",gap:12,padding:"10px 14px",background:"rgba(255,255,255,0.015)",border:"1px solid rgba(255,255,255,0.04)",borderLeft:`2px solid ${ts.color}55`,borderRadius:2}}>
              <div style={{flexShrink:0,display:"flex",flexDirection:"column",alignItems:"center",gap:4,paddingTop:2}}>
                <span style={{fontSize:10,color:ts.color}}>{ts.icon}</span>
              </div>
              <div style={{flex:1,minWidth:0}}>
                <div style={{display:"flex",gap:8,marginBottom:4,flexWrap:"wrap",alignItems:"center"}}>
                  <span style={{fontSize:9,color:ts.color,fontFamily:"monospace",letterSpacing:"0.1em",background:`${ts.color}15`,border:`1px solid ${ts.color}33`,padding:"1px 6px",borderRadius:2}}>{ts.label}</span>
                  <span style={{fontSize:9,color:"#555",fontFamily:"monospace",background:"rgba(255,255,255,0.04)",border:"1px solid rgba(255,255,255,0.07)",padding:"1px 6px",borderRadius:2}}>{e.code}</span>
                  <span style={{fontSize:9,color:"#383838",fontFamily:"monospace"}}>{e.date}</span>
                </div>
                <div style={{fontSize:12,color:"#9aa0b0",lineHeight:1.65}}>{e.content}</div>
              </div>
            </div>
          );
        })}
      </div>
      {filtered.length === 0 && (
        <div style={{color:"#2a2a2a",fontSize:11,fontFamily:"monospace",textAlign:"center",paddingTop:30}}>NO EVENTS MATCH FILTER</div>
      )}
    </div>
  );
}

function OverviewPanel() {
  return (
    <div style={{flex:1,overflowY:"auto",padding:"20px 24px"}}>
      <div style={{marginBottom:28}}>
        <div style={{fontSize:10,color:"#7ba7d4",letterSpacing:"0.2em",fontFamily:"monospace",fontWeight:700,marginBottom:12}}>◈ SITUATION SUMMARY</div>
        <div style={{fontSize:13,color:"#848ea0",lineHeight:1.85,background:"rgba(255,255,255,0.02)",border:"1px solid rgba(255,255,255,0.05)",borderLeft:"2px solid #7ba7d444",borderRadius:2,padding:"14px 16px"}}>
          {OVERVIEW.summary}
        </div>
      </div>
      <CrossStoryAlerts/>
      <div>
        <div style={{fontSize:10,color:"#e07b39",letterSpacing:"0.2em",fontFamily:"monospace",fontWeight:700,marginBottom:12}}>◈ LEADERBOARD — MOST SIGNIFICANT CHANGES</div>
        <div style={{display:"flex",flexDirection:"column",gap:6}}>
          {OVERVIEW.leaderboard.map((item,i)=>{
            const st = STATUS[item.status];
            return (
              <div key={i} style={{display:"flex",gap:12,padding:"10px 14px",background:"rgba(255,255,255,0.018)",border:"1px solid rgba(255,255,255,0.04)",borderLeft:`2px solid ${st.color}55`,borderRadius:2,alignItems:"flex-start"}}>
                <div style={{fontSize:12,color:"#333",fontFamily:"monospace",fontWeight:700,flexShrink:0,paddingTop:2,minWidth:20}}>#{i+1}</div>
                <div style={{flex:1,minWidth:0}}>
                  <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4,gap:8,flexWrap:"wrap"}}>
                    <span style={{fontSize:12,color:"#c0c8d8",fontWeight:700}}>{item.title}</span>
                    <Badge status={item.status}/>
                  </div>
                  <div style={{fontSize:9,color:"#444",fontFamily:"monospace",marginBottom:4,letterSpacing:"0.08em"}}>{item.code}</div>
                  <div style={{fontSize:12,color:"#606878",lineHeight:1.6}}>{item.change}</div>
                </div>
                <Heat n={item.heat}/>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ============================================================
// WAR WATCH TOLL TAB
// ============================================================
function TollTab({story}) {
  const t = story.toll;
  if (!t) return <div style={{color:"#333",fontSize:13,fontFamily:"monospace"}}>NO TOLL DATA</div>;
  const stats = [
    {label:"Confirmed Dead", value:t.confirmed_dead, color:"#c94040"},
    {label:"Confirmed Wounded", value:t.confirmed_wounded, color:"#e07b39"},
    {label:"Children Killed", value:t.children_killed, color:"#c94040"},
    {label:"Displaced", value:t.displaced, color:"#d4a843"},
    ...(t.us_kia ? [{label:"US KIA", value:t.us_kia, color:"#7ba7d4"}] : []),
    ...(t.israeli_kia ? [{label:"Israeli KIA", value:t.israeli_kia, color:"#7ba7d4"}] : []),
  ];
  return (
    <div>
      <div style={{fontSize:10,color:"#c94040",letterSpacing:"0.2em",fontFamily:"monospace",marginBottom:16,fontWeight:700}}>⚔ HUMAN TOLL</div>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,marginBottom:16}}>
        {stats.map((s,i)=>(
          <div key={i} style={{background:"rgba(255,255,255,0.02)",border:`1px solid ${s.color}22`,borderLeft:`2px solid ${s.color}`,borderRadius:2,padding:"12px 14px"}}>
            <div style={{fontSize:9,color:"#484848",fontFamily:"monospace",letterSpacing:"0.1em",marginBottom:6}}>{s.label.toUpperCase()}</div>
            <div style={{fontSize:20,color:s.color,fontWeight:700,fontFamily:"monospace"}}>{s.value}</div>
          </div>
        ))}
      </div>
      <div style={{background:"rgba(255,255,255,0.015)",border:"1px solid rgba(255,255,255,0.06)",borderRadius:2,padding:"12px 14px"}}>
        <div style={{fontSize:9,color:"#484848",fontFamily:"monospace",letterSpacing:"0.1em",marginBottom:6}}>DATA NOTE</div>
        <div style={{fontSize:12,color:"#606878",lineHeight:1.7}}>{t.note}</div>
      </div>
    </div>
  );
}

// ============================================================
// WAR WATCH FRONT TAB
// ============================================================
function FrontTab({story}) {
  const f = story.front;
  if (!f) return <div style={{color:"#333",fontSize:13,fontFamily:"monospace"}}>NO FRONT DATA</div>;
  return (
    <div>
      <div style={{fontSize:10,color:"#a03030",letterSpacing:"0.2em",fontFamily:"monospace",marginBottom:14,fontWeight:700}}>⚔ BATTLEFIELD SITUATION</div>
      <div style={{fontSize:13,color:"#848ea0",lineHeight:1.8,background:"rgba(160,48,48,0.05)",border:"1px solid rgba(160,48,48,0.15)",borderLeft:"2px solid #a03030",borderRadius:2,padding:"12px 14px",marginBottom:18}}>
        {f.summary}
      </div>
      {f.active_fronts && f.active_fronts.length > 0 && (
        <div style={{marginBottom:18}}>
          <div style={{fontSize:9,color:"#c94040",letterSpacing:"0.18em",fontFamily:"monospace",fontWeight:700,marginBottom:10}}>ACTIVE FRONTS</div>
          <div style={{display:"flex",flexDirection:"column",gap:4}}>
            {f.active_fronts.map((front,i)=>(
              <div key={i} style={{display:"flex",gap:10,padding:"9px 12px",background:"rgba(255,255,255,0.015)",border:"1px solid rgba(255,255,255,0.04)",borderLeft:"2px solid #c9404040",borderRadius:2}}>
                <span style={{color:"#c94040",fontSize:9,marginTop:4,flexShrink:0}}>▸</span>
                <span style={{fontSize:12,color:"#9aa0b0",lineHeight:1.6}}>{front}</span>
              </div>
            ))}
          </div>
        </div>
      )}
      {f.recent_movements && f.recent_movements.length > 0 && (
        <div style={{marginBottom:18}}>
          <div style={{fontSize:9,color:"#d4a843",letterSpacing:"0.18em",fontFamily:"monospace",fontWeight:700,marginBottom:10}}>RECENT MOVEMENTS</div>
          <div style={{display:"flex",flexDirection:"column",gap:4}}>
            {f.recent_movements.map((m,i)=>(
              <div key={i} style={{display:"flex",gap:10,padding:"9px 12px",background:"rgba(255,255,255,0.015)",border:"1px solid rgba(255,255,255,0.04)",borderLeft:"2px solid #d4a84340",borderRadius:2}}>
                <span style={{color:"#d4a843",fontSize:9,marginTop:4,flexShrink:0}}>◌</span>
                <span style={{fontSize:12,color:"#9aa0b0",lineHeight:1.6}}>{m}</span>
              </div>
            ))}
          </div>
        </div>
      )}
      {f.assessment && (
        <div style={{background:"rgba(160,48,48,0.04)",border:"1px solid rgba(160,48,48,0.12)",borderRadius:2,padding:"12px 14px"}}>
          <div style={{fontSize:9,color:"#a03030",fontFamily:"monospace",letterSpacing:"0.1em",marginBottom:6}}>ASSESSMENT</div>
          <div style={{fontSize:13,color:"#848ea0",lineHeight:1.75}}>{f.assessment}</div>
        </div>
      )}
    </div>
  );
}

// ============================================================
// WAR WATCH PANEL
// ============================================================
function WarWatchPanel() {
  const [activeStory, setActiveStory] = useState("W01");
  const [tab, setTab] = useState("front");
  const mainRef = React.useRef(null);
  const story = WAR_STORIES.find(s=>s.id===activeStory);
  const st = STATUS[story.status];

  const WAR_TABS = [
    {id:"front", label:"⚔ FRONT"},
    {id:"toll", label:"☠ TOLL"},
    {id:"insights", label:"INSIGHTS"},
    {id:"confirmed", label:"CONFIRMED"},
    {id:"developing", label:"DEVELOPING"},
    {id:"questions", label:"QUESTIONS"},
    {id:"people", label:"◈ PEOPLE"},
    {id:"background", label:"BACKGROUND"},
  ];

  const selectStory = (id) => {
    setActiveStory(id);
    setTab("front");
    if(mainRef.current && window.innerWidth <= 700) {
      setTimeout(()=>{
        const el = mainRef.current;
        const top = el.getBoundingClientRect().top + window.scrollY - 56;
        window.scrollTo({top, behavior:"smooth"});
      }, 60);
    }
  };

  // War toll summary for sidebar
  const activeWarCount = WAR_STORIES.filter(s=>s.status==="active-war").length;

  return (
    <div style={{display:"flex",flex:1,flexDirection:"column"}}>
      {/* WAR WATCH HEADER */}
      <div style={{padding:"10px 16px",borderBottom:"1px solid rgba(255,255,255,0.055)",background:"rgba(160,48,48,0.06)",flexShrink:0,display:"flex",justifyContent:"space-between",alignItems:"center"}}>
        <div>
          <div style={{fontSize:9,color:"#a03030",letterSpacing:"0.2em",fontFamily:"monospace",marginBottom:2}}>⚔ WAR WATCH</div>
          <div style={{fontSize:11,color:"#606878"}}>{WAR_STORIES.length} conflicts tracked · {activeWarCount} active wars</div>
        </div>
        <div style={{display:"flex",alignItems:"center",gap:6,background:"rgba(201,64,64,0.1)",border:"1px solid rgba(201,64,64,0.3)",padding:"4px 10px",borderRadius:2}}>
          <div style={{width:6,height:6,borderRadius:"50%",background:"#c94040",animation:"pulse 1.4s infinite"}}/>
          <span style={{fontSize:9,color:"#c94040",fontFamily:"monospace",letterSpacing:"0.12em",fontWeight:700}}>{activeWarCount} ACTIVE WARS</span>
        </div>
      </div>

      <div className="war-watch-body" style={{display:"flex",flex:1,overflow:"hidden"}}>
        {/* WAR SIDEBAR */}
        <div className="war-watch-sidebar" style={{width:240,flexShrink:0,borderRight:"1px solid rgba(255,255,255,0.055)",overflowY:"auto",padding:"10px 8px"}}>
          <div style={{fontSize:9,color:"#a03030",letterSpacing:"0.2em",fontFamily:"monospace",fontWeight:700,marginBottom:8,paddingLeft:3}}>ACTIVE CONFLICTS</div>
          {WAR_STORIES.map(s=>{
            const sc = STATUS[s.status].color;
            const isActive = activeStory===s.id;
            return (
              <div key={s.id} onClick={()=>selectStory(s.id)}
                style={{background:isActive?"rgba(255,255,255,0.055)":"rgba(255,255,255,0.015)",border:`1px solid ${isActive?"rgba(255,255,255,0.14)":"rgba(255,255,255,0.05)"}`,borderLeft:`2px solid ${isActive?sc:"rgba(160,48,48,0.25)"}`,borderRadius:2,padding:"10px 12px",cursor:"pointer",transition:"all 0.15s",marginBottom:5}}>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4}}>
                  <span style={{fontSize:9,color:"#555",fontFamily:"monospace",letterSpacing:"0.1em",fontWeight:600}}>{s.code}</span>
                  <Heat n={s.heat}/>
                </div>
                <div style={{fontSize:13,color:isActive?"#fff":"#c0c8d8",fontWeight:700,marginBottom:3,lineHeight:1.3}}>{s.title}</div>
                {/* Toll stat on card */}
                {s.toll && (
                  <div style={{display:"flex",gap:8,marginBottom:6,flexWrap:"wrap"}}>
                    <div style={{fontSize:9,color:"#c94040",fontFamily:"monospace"}}>
                      ☠ {s.toll.confirmed_dead}
                    </div>
                    {s.toll.displaced && (
                      <div style={{fontSize:9,color:"#d4a843",fontFamily:"monospace"}}>
                        ⬡ {s.toll.displaced} disp.
                      </div>
                    )}
                  </div>
                )}
                <Badge status={s.status}/>
              </div>
            );
          })}
        </div>

        {/* WAR MAIN CONTENT */}
        <div className="war-watch-main" ref={mainRef} style={{flex:1,display:"flex",flexDirection:"column",overflow:"hidden"}}>
          <div style={{padding:"14px 18px 0",borderBottom:"1px solid rgba(255,255,255,0.055)",flexShrink:0}}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:10}}>
              <div style={{minWidth:0,flex:1}}>
                <div style={{fontSize:9,color:"#3a3a3a",letterSpacing:"0.18em",fontFamily:"monospace",marginBottom:4}}>{story.code} · WAR WATCH</div>
                <div style={{fontSize:18,color:"#dde0e8",fontWeight:700,letterSpacing:"-0.02em",marginBottom:2,lineHeight:1.2}}>{story.title}</div>
                <div style={{fontSize:11,color:"#484848"}}>{story.sub}</div>
              </div>
              <div style={{display:"flex",flexDirection:"column",alignItems:"flex-end",gap:5,paddingTop:2,flexShrink:0,marginLeft:10}}>
                <Badge status={story.status}/>
                <Heat n={story.heat}/>
                <div style={{fontSize:9,color:"#303030",fontFamily:"monospace"}}>UPD {story.updated}</div>
              </div>
            </div>
            {/* Toll summary bar */}
            {story.toll && (
              <div style={{display:"flex",gap:12,background:"rgba(201,64,64,0.06)",border:"1px solid rgba(201,64,64,0.15)",borderRadius:2,padding:"8px 12px",marginBottom:10,flexWrap:"wrap"}}>
                <div style={{display:"flex",alignItems:"center",gap:6}}>
                  <span style={{fontSize:9,color:"#c94040",fontFamily:"monospace",letterSpacing:"0.1em"}}>☠ DEAD</span>
                  <span style={{fontSize:13,color:"#c94040",fontWeight:700,fontFamily:"monospace"}}>{story.toll.confirmed_dead}</span>
                </div>
                {story.toll.children_killed && story.toll.children_killed !== "Unknown" && (
                  <div style={{display:"flex",alignItems:"center",gap:6}}>
                    <span style={{fontSize:9,color:"#c97b7b",fontFamily:"monospace",letterSpacing:"0.1em"}}>CHILDREN</span>
                    <span style={{fontSize:13,color:"#c97b7b",fontWeight:700,fontFamily:"monospace"}}>{story.toll.children_killed}</span>
                  </div>
                )}
                <div style={{display:"flex",alignItems:"center",gap:6}}>
                  <span style={{fontSize:9,color:"#d4a843",fontFamily:"monospace",letterSpacing:"0.1em"}}>DISPLACED</span>
                  <span style={{fontSize:13,color:"#d4a843",fontWeight:700,fontFamily:"monospace"}}>{story.toll.displaced}</span>
                </div>
              </div>
            )}
            <div style={{background:"rgba(255,255,255,0.02)",border:"1px solid rgba(255,255,255,0.055)",borderLeft:`2px solid ${st.color}44`,padding:"8px 12px",marginBottom:10,borderRadius:2}}>
              <div style={{fontSize:9,color:"#383838",letterSpacing:"0.18em",fontFamily:"monospace",fontWeight:700,marginBottom:4}}>SUMMARY</div>
              <div style={{fontSize:11,color:"#848ea0",lineHeight:1.65}}>{story.card}</div>
            </div>
            <div style={{display:"flex",overflowX:"auto",WebkitOverflowScrolling:"touch",scrollbarWidth:"none",msOverflowStyle:"none",flexShrink:0}}>
              {WAR_TABS.map(t=>(
                <button key={t.id} onClick={()=>setTab(t.id)} style={{background:"none",border:"none",borderBottom:`2px solid ${tab===t.id?"#a03030":"transparent"}`,color:tab===t.id?"#d8dbe8":"#3c3c3c",padding:"6px 8px",fontSize:9,letterSpacing:"0.08em",fontFamily:"monospace",cursor:"pointer",transition:"color 0.15s",whiteSpace:"nowrap"}}>{t.label}</button>
              ))}
            </div>
          </div>
          <div className="war-watch-content" style={{flex:1,overflowY:"auto",padding:"16px 18px",animation:"fadeUp 0.18s ease"}}>
            {tab==="front"&&<FrontTab story={story}/>}
            {tab==="toll"&&<TollTab story={story}/>}
            {tab==="insights"&&<Items list={story.insights} color="#a03030" icon="◈"/>}
            {tab==="confirmed"&&<Items list={story.confirmed} color="#4a9b6f" icon="✓"/>}
            {tab==="developing"&&<Items list={story.developing} color="#d4a843" icon="◌"/>}
            {tab==="questions"&&<Items list={story.questions} color="#9b6fb0" icon="?"/>}
            {tab==="people"&&<PeopleTab story={story} storyColor="#a03030"/>}
            {tab==="background"&&(
              <div>
                <div style={{fontSize:10,color:"#444",letterSpacing:"0.2em",fontFamily:"monospace",marginBottom:12,fontWeight:700}}>◈ BACKGROUND & CONTEXT</div>
                <div style={{fontSize:13,color:"#848ea0",lineHeight:1.8}}>
                  {WAR_STORIES.find(s=>s.id===activeStory)?.bg || story.card + " " + (story.confirmed?.[0]||"")}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================================
// CANADA WATCH DATA
// ============================================================

const CANADA_COLOR = "#c97b5a";

const CANADA_STORIES = [
  {
    id:"C01", code:"CARNEY-01", heat:4, status:"developing", updated:"Apr 8 2026",
    title:"The Carney Government",
    sub:"Mandate, Strategy & the Weight of Four Crises",
    card:"Mark Carney won the March 2026 election on explicit anti-Trump positioning and economic competence. Now governing through four simultaneous shocks. The China trade bet is the highest-stakes decision of his early tenure.",
    summary:"Mark Carney became Prime Minister in January 2026 following Trudeau's resignation, then won a majority in the March federal election partly on an explicitly anti-Trump platform — Canada is not for sale. His government inherited four simultaneous economic shocks and is attempting to reposition Canada's strategic orientation: deeper China ties as a US hedge, renewed multilateralism, and domestic economic reform. The tension between his rhetoric and the structural reality of Canadian dependence on the US is the defining challenge of his early tenure.",
    bg:"Mark Carney is an unusual politician — a former central banker who ran the Bank of Canada during the 2008 financial crisis and the Bank of England during Brexit. He was recruited by the Liberal Party as a credible economic manager after Trudeau's resignation. He has no history in elected politics before becoming PM. His background shapes how he governs: systems-oriented, data-driven, comfortable with uncertainty, reluctant to make promises he can't deliver. His China trade bet — signing a preliminary agreement to cut canola and EV tariffs — is a direct expression of his instinct to diversify Canadian economic risk. The question is whether the Trump administration lets him execute that strategy without retaliation.\n\nCanada's relationship with the United States is unlike any other bilateral relationship in the world. The two countries share the world's longest undefended border, are each other's largest trading partners, and are bound by NORAD and NATO security arrangements that make genuine strategic independence almost impossible. Every Canadian PM since Trudeau Sr. has navigated the same impossible geometry: maintain the US relationship without becoming a client state. Carney is attempting this navigation during the most hostile US administration Canada has faced in living memory.",
    confirmed:["Carney became PM January 2026 following Trudeau's resignation amid internal Liberal caucus pressure","Liberals won March 2026 federal election — Carney-led majority, anti-Trump positioning central to campaign","Canada is not for sale became the defining campaign phrase — direct response to Trump's annexation rhetoric","Canada-China preliminary agreement signed January 2026 — canola tariffs cut from 84% to 15%, EV tariffs from 100% to 6.1%","Trump threatened 100% tariff on Canada if Canada-China deal finalizes","Liberation Day April 2 global tariffs applied additional pressure layer on Canadian exports","Carney government explicitly framing Canada's economic strategy as diversification away from US dependence","Deputy PM role given to a Quebec nationalist — political management of federation tensions","NDP support agreement ended — Carney governing with majority but watching Quebec and Alberta closely"],
    developing:["Whether Trump actually imposes 100% tariff if Canada-China deal proceeds — would be economically devastating","What CUSMA review demands look like and whether Carney concedes or fights","Whether Carney's economic diversification strategy produces meaningful results before US tariff pressure becomes unbearable","Whether the China bet survives domestic political scrutiny — opposition attacking it as naive","Whether Carney's technocratic governing style translates into effective political communication","How Carney manages the Alberta-Ottawa oil tension as federal climate commitments conflict with provincial revenue interests"],
    insights:["Carney is governing in a structural trap: his entire strategic logic depends on the US not noticing or not caring about the China engagement. Trump has already noticed. The 100% tariff threat is the tell.","The anti-Trump positioning that won the election creates a governing constraint — he cannot be seen to capitulate to Washington without political cost at home. That limits his negotiating flexibility in ways a less rhetorically committed PM would not face.","Carney's central banking background is an asset for crisis management and a liability for political communication. He speaks in probabilities and hedge-qualified statements. Canadian voters want certainty. That gap will matter.","The China bet is the right strategic logic — Canada genuinely needs to diversify — but the execution timeline is wrong. Diversification takes years to produce results. The US tariff threat operates on weeks. He needs the long game to win before the short game destroys him.","Alberta is the wildcard. High oil prices are creating a provincial revenue windfall that makes Premier Smith more assertive, not more cooperative. The federation tension is structural and will outlast any single crisis."],
    questions:["Does the 100% tariff threat force Carney to abandon or scale back the China deal?","What does CUSMA review look like — and what is the Canadian red line?","Can Carney translate economic diversification strategy into tangible results before the next election?","Does the Alberta-Ottawa relationship become a governing crisis or stay manageable?","Is the anti-Trump positioning durable as a political strategy or does economic pain erode it?"],
    people:[{name:"Mark Carney",role:"Prime Minister, Canada",why:"Former central banker turned politician. His China bet and anti-Trump positioning define the government's strategic direction.",alignment:"Liberal/Federal",status:"active"},{name:"Chrystia Freeland",role:"Former Deputy PM / Finance Minister",why:"Architect of much of Canada's international economic positioning. Her departure created the opening for Carney. Her relationship with the new government is complicated.",alignment:"Liberal (sidelined)",status:"sidelined"},{name:"Danielle Smith",role:"Premier, Alberta",why:"Oil windfall is giving her leverage. Her relationship with Trump and friction with Ottawa is the domestic political story most likely to create a governing crisis for Carney.",alignment:"UCP/Alberta",status:"active"},{name:"Donald Trump",role:"US President",why:"The primary external constraint on every Carney decision. His tariff threats and annexation rhetoric are the condition Carney is governing under.",alignment:"US",status:"active"}],
  },
  {
    id:"C02", code:"CUSMA-01", heat:4, status:"developing", updated:"Apr 8 2026",
    title:"CUSMA Under Pressure",
    sub:"Trade Agreement Review · US Demands · Canadian Red Lines",
    card:"CUSMA review is scheduled. US making demands Canada considers structurally unacceptable. Dairy, automotive rules of origin, digital services, and Chapter 19 dispute resolution are the known pressure points. Canada is negotiating from weakness.",
    summary:"The Canada-United States-Mexico Agreement — the successor to NAFTA renegotiated under Trump's first term — is up for its scheduled six-year review. The review was supposed to be a routine process. Under the current administration it is a renegotiation in all but name. US demands reported to include changes to dairy supply management, automotive content rules, digital services provisions, and the dispute resolution mechanism that Canada has historically used to successfully challenge US trade actions. Canada is negotiating under tariff threats that fundamentally alter the power balance.",
    bg:"NAFTA — the North American Free Trade Agreement — was signed in 1994 and created the world's largest free trade zone. It governed roughly $2.4 trillion in annual trade between Canada, the US, and Mexico. Trump renegotiated it in his first term, producing CUSMA (Canada calls it CUSMA, the US calls it USMCA, Mexico calls it T-MEC). The renegotiation was genuinely difficult — Canada lost ground on dairy and accepted new automotive content rules — but it preserved the fundamental architecture including Chapter 19, which allows each country to challenge the others' trade rulings before independent panels rather than domestic courts.\n\nChapter 19 matters enormously to Canada because the US has a long history of imposing anti-dumping and countervailing duties on Canadian exports — softwood lumber being the most persistent example — and then losing when those duties are challenged in independent panels. The US has repeatedly tried to eliminate Chapter 19. Canada has repeatedly refused. That fight will be central to the current review.\n\nThe broader context: Canada sends approximately 75% of its exports to the United States. There is no alternative market that can absorb that volume on any realistic timeline. This is the structural fact that constrains every Canadian trade negotiation.",
    confirmed:["CUSMA scheduled six-year review triggered — process formally underway","US has signaled demands on dairy supply management — Canada's protected domestic dairy sector","Automotive rules of origin under pressure — US wants higher US-content requirements","Chapter 19 dispute resolution mechanism — US has historically sought its elimination, Canada considers it non-negotiable","Digital services provisions — US tech companies pushing for changes to Canadian digital content rules","Canada sends approximately 75% of exports to the United States — structural dependence constraint","Liberation Day April 2 tariffs applied on top of existing CUSMA framework — US treating them as separate","Softwood lumber dispute continues in parallel — perennial Canada-US trade irritant","Canadian steel and aluminum subject to ongoing US tariff threats despite CUSMA"],
    developing:["What the full list of US demands looks like — not fully public","Whether Canada draws hard red lines on Chapter 19 and dairy or negotiates both","Whether Mexico's cooperation or defection changes Canadian leverage","Whether the Carney government can build a domestic political coalition for any concessions","Timeline — whether review produces an outcome before the 2026 midterm political window closes","Whether the 100% tariff threat on Canada for the China deal gets formally linked to CUSMA negotiations"],
    insights:["Chapter 19 is the hill Canada should be prepared to die on. It is the only enforceable mechanism Canada has to challenge US trade actions in a neutral forum. Giving it up means every future trade dispute is decided in US courts under US law. Canada has won at Chapter 19 repeatedly. The US wants it gone precisely because Canada keeps winning.","Dairy supply management is domestically untouchable for any Canadian government — the Quebec and Ontario farm vote is too concentrated and too organized. Carney knows this. The question is whether he can make the US believe he knows this before they push further.","The 75% export dependence number is the negotiating trap. It means Canada cannot credibly threaten to walk away. The US knows this. Canada knows the US knows this. The only leverage Canada has is making the costs of a bad deal for the US visible — and that requires allies, public pressure, and time.","Mexico is the wild card. A coordinated Canada-Mexico response to US demands would create more leverage than either acting alone. Whether the Sheinbaum government cooperates or seeks its own bilateral deal with Washington is the question that will shape the entire negotiation.","The linkage of the 100% tariff threat to the China deal with CUSMA negotiations would be unprecedented and likely illegal under WTO rules. The current administration has shown no particular concern about WTO legality."],
    questions:["What are the full US demands — and which ones are genuinely non-negotiable versus opening positions?","Does Canada draw a hard line on Chapter 19?","Does Mexico cooperate with Canada or seek a separate bilateral accommodation?","What does a successful outcome look like for Canada — and what does a failed negotiation mean practically?","Does the China deal become formally linked to CUSMA as US leverage?"],
    people:[{name:"Mark Carney",role:"Prime Minister, Canada",why:"Chief negotiator in effect. His economic credibility is on the line in this negotiation.",alignment:"Canada",status:"active"},{name:"Howard Lutnick",role:"US Secretary of Commerce",why:"Leading the US side of trade negotiations. His positions on CUSMA are the most relevant American voice.",alignment:"US",status:"active"},{name:"Claudia Sheinbaum",role:"President, Mexico",why:"Mexico's cooperation or defection in CUSMA negotiations directly affects Canadian leverage.",alignment:"Mexico",status:"active"},{name:"Mary Ng",role:"Minister of International Trade, Canada",why:"The operational lead on CUSMA negotiations day-to-day.",alignment:"Canada",status:"active"}],
  },
  {
    id:"C03", code:"ECON-CA-01", heat:4, status:"developing", updated:"Apr 8 2026",
    title:"Canadian Economy — Four Shocks",
    sub:"Tariffs · Oil Shock · CUSMA · Inflation · The Lived Reality",
    card:"Canada is absorbing its fourth major economic shock since 2019. Oil windfall for Alberta and federal revenues. National inflation accelerating. Housing still broken. The gap between macroeconomic indicators and what ordinary Canadians experience is at its widest in a generation.",
    summary:"Canada is simultaneously experiencing a revenue windfall from high oil prices — benefiting Alberta and federal coffers — and an inflationary squeeze hitting ordinary Canadians through fuel, food, and housing costs. The four simultaneous shocks since 2019 (COVID, first Trump trade war, post-COVID inflation spike, current crisis) have produced a population that is economically anxious in a way that doesn't show up cleanly in GDP figures. Housing affordability is a separate structural crisis running in parallel. The combination of these pressures is the domestic political backdrop for everything the Carney government is attempting.",
    bg:"Canada's economy is structurally unusual. It is a wealthy country with a resource extraction base — oil, gas, minerals, forestry, agriculture — that generates enormous revenues concentrated in specific regions (Alberta, Saskatchewan, British Columbia, Ontario's Ring of Fire). It is also a services-dominated urban economy — Toronto, Vancouver, Montreal — where knowledge work, finance, and real estate generate a different kind of wealth. These two economies coexist under one federal structure and frequently pull in opposite directions.\n\nThe housing crisis deserves separate treatment. Canadian housing — particularly in Toronto and Vancouver — has been unaffordable for middle-income earners for over a decade. The Trudeau government attempted multiple interventions, none of which materially reduced prices. The Carney government has inherited this structural problem. The causes are well understood: restrictive zoning, slow permitting, a population that grew faster than housing supply, and decades of treating housing as an investment vehicle rather than shelter. The solutions are politically difficult because homeowners — who vote — benefit from high prices.\n\nThe Bank of Canada's interest rate cycle has added another layer. Rates rose sharply to combat post-COVID inflation, then started falling again. Variable-rate mortgage holders who bought during the COVID price surge are now absorbing the consequences of that cycle.",
    confirmed:["Oil prices at $110-113/barrel — Alberta and federal revenues elevated significantly","Bank of Canada in rate-cutting cycle — but mortgage renewals at higher rates hitting hundreds of thousands of households","Housing affordability at worst levels in recorded Canadian history — Toronto and Vancouver especially","Grocery inflation persisting above overall CPI — food insecurity rising across income brackets","US Liberation Day April 2 tariffs adding approximately $20-30 billion annual cost to Canadian exporters","Canada's unemployment rate rising from historic lows — manufacturing and export sectors under pressure","Federal deficit expanding as government absorbs economic shock costs","Consumer debt at record levels — Canadians among the most indebted populations in the developed world"],
    developing:["Whether oil windfall is sustained long enough to meaningfully offset shock costs","Whether Bank of Canada rate cuts translate into relief for variable-rate mortgage holders on the renewal cycle","Whether US tariffs produce meaningful job losses in manufacturing belt — Ontario and Quebec most exposed","Whether food inflation stabilizes or worsens as drought and supply chain disruption compound","Whether Carney government's housing supply measures produce results on any politically relevant timeline","Whether the Alberta-Ottawa fiscal tension produces a constitutional crisis or stays manageable"],
    insights:["The GDP-lived experience gap is the political time bomb. Canada's aggregate economic numbers look manageable — oil revenues are helping. But a 35-year-old in Toronto trying to rent while paying off student debt is not experiencing a manageable economy. That gap is what produces political volatility.","Housing is the issue that connects everything. It is why Canadians feel economically anxious despite high employment. It is why young people are leaving cities. It is why trust in government competence has declined. Carney knows this. The question is whether anything he can do in a 4-year mandate materially changes the supply picture.","Alberta's oil windfall is creating a perverse federal dynamic. The province that most frequently threatens separation is currently the one generating the revenue that makes the federation financially viable. Premier Smith knows this and is using it.","The consumer debt level is the hidden vulnerability. Canada's households are among the most leveraged in the developed world. If the oil shock produces a sustained global recession, Canadian consumers have almost no buffer. The Bank of Canada's room to cut rates further is the only circuit breaker.","Trade-exposed manufacturing — concentrated in Ontario — is the employment story most likely to produce political crisis. These are union jobs, middle-income jobs, the kind of job losses that produce electoral consequences."],
    questions:["Does the oil windfall last long enough to cover the fiscal cost of absorbing the other shocks?","When does the housing crisis produce a political moment that forces genuine structural reform?","How many manufacturing jobs are lost to US tariffs — and in which ridings?","Does the consumer debt level become a systemic risk if global recession materializes?","Is there a Canadian equivalent of the 2008 financial crisis hiding in the household balance sheet data?"],
    people:[{name:"Tiff Macklem",role:"Governor, Bank of Canada",why:"His rate decisions are the primary tool for managing the economic shocks. His room to cut is the key variable in the consumer debt story.",alignment:"Bank of Canada (independent)",status:"active"},{name:"Mark Carney",role:"Prime Minister, Canada",why:"Governing through the shocks. His economic credibility — built as a central banker — is being tested in a very different context.",alignment:"Federal Government",status:"active"},{name:"Danielle Smith",role:"Premier, Alberta",why:"The oil windfall gives her leverage over Ottawa that she is actively using. Her relationship with the federal government is the most consequential domestic political variable.",alignment:"UCP/Alberta",status:"active"}],
  },
  {
    id:"C04", code:"DIASPORA-01", heat:3, status:"developing", updated:"Apr 8 2026",
    title:"Canadian Diasporas — Wars Coming Home",
    sub:"Iranian-Canadian · Ukrainian-Canadian · Palestinian-Canadian · Lebanese-Canadian",
    card:"Canada has the largest Iranian diaspora outside Iran, a major Ukrainian-Canadian community, a large Palestinian-Canadian community, and significant Lebanese-Canadian population. The wars in the tracker are not abstract for these communities. They are personal.",
    summary:"Canada's multicultural identity means that every major conflict in the tracker has a human face inside Canadian cities. The Iranian-Canadian community — concentrated in Toronto and Vancouver — is divided: some celebrating Khamenei's death, many horrified by civilian casualties, all watching anxiously for family. Ukrainian-Canadians, historically a powerful political lobby especially in the prairies, are watching US attention shift away from Ukraine with alarm. Palestinian-Canadians and Lebanese-Canadians are navigating grief and political activism in a climate where the boundaries of acceptable expression are contested. The Carney government has to manage all of these communities simultaneously while maintaining foreign policy positions.",
    bg:"Canada is one of the most immigration-dependent countries in the world. Immigration accounts for essentially all of Canada's population growth, and the country has deliberately built multiculturalism as a national identity — not a melting pot but a mosaic. This means Canadian cities contain living connections to almost every conflict zone on earth.\n\nThe Iranian-Canadian community is among the most significant diasporas in Canada — estimates range from 200,000 to 400,000 people, concentrated in Toronto (particularly North York and Richmond Hill) and Vancouver. Many are secular, highly educated professionals who left Iran precisely because of the Islamic Republic. The Khamenei killing produced genuine celebration in some quarters and genuine grief and fear in others. The community is not monolithic.\n\nUkrainian-Canadians number roughly 1.4 million — the third-largest Ukrainian diaspora in the world after Russia and the US. They are concentrated in the prairies, particularly Manitoba, Saskatchewan, and Alberta. They have historically been among the most politically organized diaspora communities in Canada, successfully lobbying for Canadian recognition of the Holodomor as genocide and for strong Canadian support for Ukrainian sovereignty. The shift of US attention to Iran is deeply alarming to this community.\n\nPalestinian-Canadians and Arab-Canadians more broadly number in the hundreds of thousands and are concentrated in major cities. The Gaza war has been an extraordinarily painful and politically charged experience for this community, and the tensions around free speech, protest, and university campuses that characterized the war in 2024 and 2025 have not fully resolved.",
    confirmed:["Iranian-Canadian diaspora estimated 200,000-400,000 — concentrated in Toronto and Vancouver","Community divided on Iran war — some celebrating Khamenei's death, others horrified by civilian casualties","Ukrainian-Canadian community approximately 1.4 million — third largest Ukrainian diaspora in the world","Ukrainian-Canadians watching US attention shift to Iran with alarm — lobbying Ottawa for continued support","Palestinian-Canadian community active in political advocacy — Gaza war produced major protests across Canadian cities","Lebanese-Canadian community approximately 250,000 — Hezbollah front activation creating anxiety","Canadian consular operations in Gulf region and Middle East under elevated alert","Carney government has had to navigate statements on Iran war carefully given diaspora sensitivities","Parliament Hill protests on Gaza war among largest political demonstrations in recent Canadian history"],
    developing:["Whether Iranian-Canadian community organizes politically around post-war Iran reconstruction and engagement","Whether Ukrainian-Canadian lobby successfully pushes Carney to increase Ukraine support as US attention shifts","Whether Palestinian-Canadian advocacy translates into meaningful Canadian foreign policy shift on Gaza","Whether Lebanese-Canadian community pressure affects Canadian position on Hezbollah front","Whether any Canadian citizens are among casualties in conflict zones — consular cases","How Carney government navigates the competing diaspora pressures on Middle East policy"],
    insights:["Canada's diaspora communities are not just a domestic political management challenge — they are a genuine foreign policy asset. Canada's ability to maintain back-channel relationships with Iran has historically depended partly on the Iranian-Canadian community's connections. That asset is real.","The Ukrainian-Canadian community's political organization is the model for effective diaspora advocacy. They have successfully shaped Canadian foreign policy for decades. Their alarm about US attention shifting to Iran is a signal worth taking seriously — they have intelligence about the Ukrainian situation that official channels don't always capture.","The Palestinian-Canadian experience since October 7 has revealed genuine tensions in Canadian multiculturalism — what happens when communities hold passionately conflicting views on a violent conflict, and when the expression of those views runs into institutional constraints around speech, employment, and campus life. Those tensions have not resolved.","The geographic concentration of diaspora communities — Iranian-Canadians in North York, Ukrainian-Canadians on the prairies, Palestinian-Canadians in major cities — means their political weight is concentrated in specific ridings. That is not an accident of settlement patterns. It translates into real electoral leverage."],
    questions:["Does the Iranian-Canadian community coalesce around a political position on post-war Iran engagement — and does it give Canada a distinctive diplomatic role?","Does the Ukrainian-Canadian lobby successfully pressure Carney to increase material support for Ukraine?","Does Palestinian-Canadian advocacy produce any shift in Canada's Gaza position?","Are there Canadian citizens among the casualties in any of the active conflicts — and how does the government respond?"],
    people:[{name:"Masih Alinejad",role:"Iranian activist (US-based, influential in diaspora)",why:"Her advocacy shapes how the Western Iranian diaspora frames the political response to the Iran war.",alignment:"Iranian diaspora (opposition)",status:"active"},{name:"Oksana Draghuk",role:"Ukrainian Canadian Congress President",why:"The organizational voice of the Ukrainian-Canadian community's political advocacy.",alignment:"Ukrainian-Canadian",status:"active"},{name:"Yusuf Faqiri",role:"Afghan-Canadian advocate (representative of broader diaspora advocacy)",why:"Representative of the broader dynamic of diaspora communities using Canadian political channels to influence foreign policy.",alignment:"Diaspora advocacy",status:"active"}],
  },
  {
    id:"C05", code:"ARCTIC-01", heat:3, status:"developing", updated:"Apr 8 2026",
    title:"Arctic Sovereignty",
    sub:"Northwest Passage · US Pressure · Climate Opening · Indigenous Rights",
    card:"The Arctic is opening faster than predicted. The Northwest Passage is commercially navigable in summer months. The US does not recognize Canadian sovereignty over it. Trump has made Arctic claims more aggressive. Canada's military presence is inadequate. Indigenous communities are on the front line of all of it.",
    summary:"Climate change is opening the Canadian Arctic in ways that are simultaneously an economic opportunity and a sovereignty crisis. The Northwest Passage — the sea route through Canada's Arctic archipelago — is becoming commercially navigable in summer months, potentially transforming global shipping. The United States does not recognize Canadian sovereignty over the Passage, treating it as international waters. Trump has made this position more aggressive, and US military vessels have transited without requesting Canadian permission. Canada's Arctic military infrastructure is decades behind where it needs to be. Indigenous communities in the North are experiencing the climate changes most acutely and have the most direct stake in how Arctic sovereignty is exercised.",
    bg:"The Northwest Passage has been the object of Arctic ambition since European explorers first attempted it in the 16th century. The Franklin Expedition of 1845 — 129 men who disappeared trying to navigate it — is part of Canadian national mythology. The passage was first fully navigated in 1906 by Roald Amundsen. For most of the 20th century it was inaccessible for most of the year due to ice.\n\nClimate change is changing this. Arctic sea ice is declining at roughly twice the rate of the global average. The Northwest Passage is now reliably navigable in August and September, and forecasts suggest it may be ice-free for longer periods within decades. This creates a shipping shortcut between the Atlantic and Pacific that is roughly 7,000 kilometres shorter than the Panama Canal route.\n\nThe sovereignty question is genuinely contested in international law. Canada claims the passage as internal waters, meaning foreign ships require Canadian permission to transit. The United States argues it is an international strait, meaning foreign ships have a right of innocent passage without permission. This dispute has been ongoing since the 1969 voyage of the SS Manhattan, which the US sent through without asking Canada. Canada responded by enacting the Arctic Waters Pollution Prevention Act. The dispute has never been formally resolved.\n\nRussia is the other major Arctic power and has been militarizing its Arctic presence aggressively for a decade — new bases, new submarines, new icebreakers. China has declared itself a near-Arctic state and is investing in Arctic shipping and research infrastructure. Canada has been slow to respond militarily and diplomatically.",
    confirmed:["Northwest Passage reliably navigable August-September — ice-free window expanding with climate change","US does not recognize Canadian sovereignty over Northwest Passage — treats it as international strait","US military vessels have transited Northwest Passage without requesting Canadian permission","Canada has one operational icebreaker — CCGS Louis S. St-Laurent — significantly less than Russia or US","NORAD modernization agreement signed — Canada committed to $38.6 billion over 20 years for Arctic surveillance","Russia has established new military bases and deployed new submarines to Arctic","China declared itself near-Arctic state — investing in Arctic shipping research and infrastructure","Climate change hitting Canadian Arctic communities at twice the global average rate — permafrost thaw, coastal erosion, ice road loss","Inuit Tapiriit Kanatami formally submitted that Arctic sovereignty must include Indigenous rights and presence","Trump administration made more aggressive statements on Arctic resource claims than prior US administrations"],
    developing:["Whether Canada accelerates Arctic military presence — icebreakers, surveillance, forward bases","Whether the Northwest Passage becomes a genuine diplomatic flashpoint with the US","Whether Russia or China attempt transits that force a Canadian response","Whether Arctic resource development (oil, gas, minerals) proceeds and under what governance framework","Whether Indigenous communities gain meaningful control over Arctic governance decisions","Whether the NORAD modernization produces actual capability on any relevant timeline"],
    insights:["Canada's Arctic sovereignty claim rests on presence, use, and Indigenous occupation going back thousands of years. The Inuit have a stronger sovereignty argument than Canada does in some respects — they have actually lived there continuously. Canada's sovereignty argument is strongest when it is grounded in Indigenous rights, not just state claims.","The icebreaker gap is embarrassing. Russia has approximately 40 icebreakers including nuclear-powered vessels. Canada has one operational heavy icebreaker. This is not a funding problem — it is a decades-long failure of political prioritization. The NORAD modernization is a down payment on fixing this, but the timeline is too slow.","The Northwest Passage is worth fighting for economically. As a route for commercial shipping it could generate significant transit fees and give Canada enormous strategic leverage over global shipping. But only if sovereignty is established clearly before the shipping volumes make the dispute commercially significant.","Climate change and Arctic sovereignty are not separate issues — they are the same issue. The people who understand this most clearly are the Inuit communities who are watching their world change faster than any policy response can track.","Trump's more aggressive Arctic posture is a genuine threat. His administration has shown willingness to use economic coercion to advance territorial ambitions. Canada needs to treat Arctic sovereignty as a near-term political emergency, not a long-term policy question."],
    questions:["Does Canada accelerate Arctic military presence fast enough to establish facts on the ground before the Northwest Passage becomes commercially critical?","Does the US formally challenge Canadian sovereignty — and if so, what is the Canadian response?","Do Indigenous communities gain formal governance roles in Arctic decision-making?","Does Russia or China attempt a Northwest Passage transit that forces a confrontation?","Is the $38.6 billion NORAD modernization commitment actually funded and delivered on timeline?"],
    people:[{name:"Mark Carney",role:"Prime Minister, Canada",why:"Arctic sovereignty investment decisions are his. The NORAD modernization commitment needs political follow-through.",alignment:"Federal Government",status:"active"},{name:"Natan Obed",role:"President, Inuit Tapiriit Kanatami",why:"The voice of Inuit communities on Arctic sovereignty. His argument that Indigenous rights are inseparable from Arctic sovereignty claims is legally and politically significant.",alignment:"Inuit/Indigenous",status:"active"},{name:"Pete Hegseth",role:"US Secretary of Defense",why:"US Arctic military posture is shaped at his level. His department's conduct will determine whether the Northwest Passage dispute becomes a crisis.",alignment:"US Pentagon",status:"active"},{name:"Vladimir Putin",role:"President, Russia",why:"Russia's Arctic militarization is the primary external military pressure on Canadian Arctic sovereignty.",alignment:"Russia",status:"active"}],
  },
  {
    id:"C06", code:"INDIGENOUS-01", heat:3, status:"developing", updated:"Apr 8 2026",
    title:"Indigenous Peoples — Sovereignty & Rights",
    sub:"UNDRIP · Treaties · Resource Development · Systemic Gaps",
    card:"Canada adopted UNDRIP in 2021 but implementation is contested. Resource development on unceded territory remains a flashpoint. The systemic gaps — health, housing, water, incarceration — remain structural. Every major Canadian political decision runs through Indigenous rights whether politicians acknowledge it or not.",
    summary:"Canada's relationship with Indigenous peoples is the foundational unresolved question of the country's existence. The federal government adopted the UN Declaration on the Rights of Indigenous Peoples in 2021 and passed legislation to implement it, but the gap between legal commitment and lived reality remains vast. Resource development on unceded or treaty-protected territory continues to generate court challenges and direct action. The systemic gaps in health outcomes, housing, water quality, education, and incarceration rates persist at levels that would be considered a national emergency if they affected any other population. Every major Canadian policy decision — Arctic sovereignty, resource development, climate policy, infrastructure — runs through Indigenous rights whether the government acknowledges it or not.",
    bg:"Indigenous peoples were in North America for thousands of years before European contact. The relationship between Indigenous nations and the Canadian state is governed by a complex web of treaties — some signed, some unsigned, some honoured, many broken — and by the Constitution Act of 1982, which recognized and affirmed existing Aboriginal and treaty rights. What those rights mean in practice has been contested in Canadian courts for decades.\n\nThe residential school system — in which Indigenous children were forcibly removed from their families, prohibited from speaking their languages, and subjected to physical and sexual abuse — operated from the 1870s to 1996. The Truth and Reconciliation Commission's 2015 report documented the system as cultural genocide and made 94 Calls to Action. As of 2026, fewer than half have been fully implemented.\n\nThe discovery of unmarked graves at former residential school sites beginning in 2021 produced a national reckoning that resulted in the cancellation of Canada Day celebrations across the country, the toppling of statues, and a renewed national conversation about what reconciliation actually means. That conversation is ongoing and unresolved.\n\nThe UNDRIP implementation question is specifically about free, prior, and informed consent — whether Indigenous communities have a veto over resource development on their territories. The resource sector argues that a veto right would make major projects impossible. Indigenous advocates argue that anything less than genuine consent is not reconciliation. The courts have been navigating this tension for years.",
    confirmed:["Canada formally adopted UNDRIP 2021 and passed Bill C-15 to align Canadian law — implementation contested","Fewer than half of Truth and Reconciliation Commission's 94 Calls to Action fully implemented as of 2026","Unmarked graves at residential school sites confirmed at multiple locations since 2021","First Nations water advisories — dozens of communities still without safe drinking water despite federal commitments","Indigenous incarceration rate approximately 30% of federal prison population despite being 5% of total population","Indigenous women face homicide rates roughly 6 times higher than non-Indigenous women","Trans Mountain Pipeline expansion completed — generated significant Indigenous opposition and court challenges","Wet'suwet'en pipeline dispute produced rail blockades and national political crisis in 2020 — underlying dispute unresolved","Indigenous-led land back movements growing — returning land to Indigenous governance a live political demand","Métis Nation facing internal governance disputes that complicate federal consultation processes"],
    developing:["Whether UNDRIP implementation produces meaningful changes to resource development approval processes","Whether the outstanding TRC Calls to Action are implemented — particularly those requiring systemic institutional change","Whether the boil water advisory situation is actually resolved on the federal timeline","Whether land back movements produce political responses that go beyond symbolic gestures","Whether the Arctic sovereignty question incorporates genuine Inuit governance rights","Whether the federal government's relationship with Métis and non-status Indians is clarified legally and politically","Whether resource development conflicts produce another Wet'suwet'en-scale national crisis"],
    insights:["Every Canadian infrastructure project of any scale now runs through Indigenous rights — and that is the right outcome, not a problem to be managed. The courts have been clear and consistent: Crown consultation obligations are real, free prior and informed consent matters, and projects that ignore this face successful legal challenges. The question is whether the political system catches up to the legal reality.","The drinking water crisis is the single most damning indictment of Canadian reconciliation rhetoric. Dozens of First Nations communities have been on boil water advisories for years or decades. This is not a hard technical problem. It is a political priority problem. The money exists. The will has been intermittent.","The residential school legacy is not history — it is present tense. The intergenerational trauma of the residential school system is a documented factor in the health, mental health, addiction, incarceration, and family breakdown statistics that define the systemic gap. You cannot address the gap without addressing the cause.","The land back movement is becoming the organizing frame for Indigenous political demands in a way that earlier reconciliation frameworks were not. It is more concrete and more confrontational than TRC language. How the Carney government responds to it will define the relationship for a generation.","Indigenous sovereignty and Canadian sovereignty are not competing claims — in the Arctic and elsewhere they are complementary. Canada's strongest argument for Northwest Passage sovereignty rests on the fact that Inuit have lived there for thousands of years. The government has been slow to understand that Indigenous rights are a strategic asset, not just a domestic obligation."],
    questions:["Does UNDRIP implementation produce a real free prior and informed consent mechanism — or a consultation process that looks different but functions the same?","Are the remaining TRC Calls to Action implemented before the next election?","Does the drinking water advisory situation get fully resolved — and when?","Does the land back movement produce a political crisis or a genuine policy response?","How does the Carney government navigate the next major resource development conflict on Indigenous territory?"],
    people:[{name:"Cindy Woodhouse Nepinak",role:"National Chief, Assembly of First Nations",why:"The primary federal-level political voice for First Nations rights. Her relationship with the Carney government will define the reconciliation agenda.",alignment:"Assembly of First Nations",status:"active"},{name:"Natan Obed",role:"President, Inuit Tapiriit Kanatami",why:"Leading the Inuit voice on Arctic sovereignty, climate change impacts, and UNDRIP implementation.",alignment:"Inuit Tapiriit Kanatami",status:"active"},{name:"Cassidy Caron",role:"President, Métis National Council",why:"Representing Métis Nation in the complex and contested federal recognition and rights framework.",alignment:"Métis National Council",status:"active"},{name:"Mark Carney",role:"Prime Minister, Canada",why:"His government's reconciliation record will be defined by implementation, not rhetoric. The gap between the two is large.",alignment:"Federal Government",status:"active"}],
  },
];

// ============================================================
// CANADA WATCH PANEL
// ============================================================
function CanadaWatchPanel() {
  const [activeStory, setActiveStory] = useState("C01");
  const [tab, setTab] = useState("insights");
  const mainRef = React.useRef(null);
  const story = CANADA_STORIES.find(s=>s.id===activeStory);
  const st = STATUS[story.status];

  const CA_TABS = [
    {id:"insights", label:"INSIGHTS"},
    {id:"confirmed", label:"CONFIRMED"},
    {id:"developing", label:"DEVELOPING"},
    {id:"questions", label:"QUESTIONS"},
    {id:"people", label:"◈ PEOPLE"},
    {id:"background", label:"BACKGROUND"},
  ];

  const selectStory = (id) => {
    setActiveStory(id);
    setTab("insights");
    if(mainRef.current && window.innerWidth <= 700) {
      setTimeout(()=>{
        const el = mainRef.current;
        const top = el.getBoundingClientRect().top + window.scrollY - 56;
        window.scrollTo({top, behavior:"smooth"});
      }, 60);
    }
  };

  return (
    <div style={{display:"flex",flex:1,flexDirection:"column"}}>
      {/* CANADA WATCH HEADER */}
      <div style={{padding:"10px 16px",borderBottom:"1px solid rgba(255,255,255,0.055)",background:"rgba(201,123,90,0.05)",flexShrink:0,display:"flex",justifyContent:"space-between",alignItems:"center"}}>
        <div>
          <div style={{fontSize:9,color:CANADA_COLOR,letterSpacing:"0.2em",fontFamily:"monospace",marginBottom:2}}>🍁 CANADA WATCH</div>
          <div style={{fontSize:11,color:"#606878"}}>{CANADA_STORIES.length} stories · domestic & foreign</div>
        </div>
        <div style={{fontSize:9,color:"#383838",fontFamily:"monospace",letterSpacing:"0.1em"}}>APR 2026</div>
      </div>

      <div className="canada-watch-body" style={{display:"flex",flex:1,overflow:"hidden"}}>
        {/* CANADA SIDEBAR */}
        <div className="canada-watch-sidebar" style={{width:240,flexShrink:0,borderRight:"1px solid rgba(255,255,255,0.055)",overflowY:"auto",padding:"10px 8px"}}>
          <div style={{fontSize:9,color:CANADA_COLOR,letterSpacing:"0.2em",fontFamily:"monospace",fontWeight:700,marginBottom:10,paddingLeft:3}}>STORIES</div>
          {CANADA_STORIES.map(s=>{
            const sc = STATUS[s.status].color;
            const isActive = activeStory===s.id;
            return (
              <div key={s.id} onClick={()=>selectStory(s.id)}
                style={{background:isActive?"rgba(255,255,255,0.055)":"rgba(255,255,255,0.015)",border:`1px solid ${isActive?"rgba(255,255,255,0.14)":"rgba(255,255,255,0.05)"}`,borderLeft:`2px solid ${isActive?CANADA_COLOR:CANADA_COLOR+"33"}`,borderRadius:2,padding:"10px 12px",cursor:"pointer",transition:"all 0.15s",marginBottom:5}}>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4}}>
                  <span style={{fontSize:9,color:"#555",fontFamily:"monospace",letterSpacing:"0.1em",fontWeight:600}}>{s.code}</span>
                  <Heat n={s.heat}/>
                </div>
                <div style={{fontSize:13,color:isActive?"#fff":"#c0c8d8",fontWeight:700,marginBottom:4,lineHeight:1.3}}>{s.title}</div>
                <div style={{fontSize:10,color:"#505868",lineHeight:1.5,marginBottom:6}}>{s.card.substring(0,90)}...</div>
                <Badge status={s.status}/>
              </div>
            );
          })}
        </div>

        {/* CANADA MAIN CONTENT */}
        <div className="canada-watch-main" ref={mainRef} style={{flex:1,display:"flex",flexDirection:"column",overflow:"hidden"}}>
          <div style={{padding:"14px 18px 0",borderBottom:"1px solid rgba(255,255,255,0.055)",flexShrink:0}}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:10}}>
              <div style={{minWidth:0,flex:1}}>
                <div style={{fontSize:9,color:"#3a3a3a",letterSpacing:"0.18em",fontFamily:"monospace",marginBottom:4}}>{story.code} · 🍁 CANADA WATCH</div>
                <div style={{fontSize:18,color:"#dde0e8",fontWeight:700,letterSpacing:"-0.02em",marginBottom:2,lineHeight:1.2}}>{story.title}</div>
                <div style={{fontSize:11,color:"#484848"}}>{story.sub}</div>
              </div>
              <div style={{display:"flex",flexDirection:"column",alignItems:"flex-end",gap:5,paddingTop:2,flexShrink:0,marginLeft:10}}>
                <Badge status={story.status}/>
                <Heat n={story.heat}/>
                <div style={{fontSize:9,color:"#303030",fontFamily:"monospace"}}>UPD {story.updated}</div>
              </div>
            </div>
            <div style={{background:"rgba(255,255,255,0.02)",border:"1px solid rgba(255,255,255,0.055)",borderLeft:`2px solid ${CANADA_COLOR}44`,padding:"8px 12px",marginBottom:10,borderRadius:2}}>
              <div style={{fontSize:9,color:"#383838",letterSpacing:"0.18em",fontFamily:"monospace",fontWeight:700,marginBottom:4}}>SUMMARY</div>
              <div style={{fontSize:11,color:"#848ea0",lineHeight:1.65}}>{story.summary}</div>
            </div>
            <div style={{display:"flex",overflowX:"auto",WebkitOverflowScrolling:"touch",scrollbarWidth:"none",msOverflowStyle:"none",flexShrink:0}}>
              {CA_TABS.map(t=>(
                <button key={t.id} onClick={()=>setTab(t.id)} style={{background:"none",border:"none",borderBottom:`2px solid ${tab===t.id?CANADA_COLOR:"transparent"}`,color:tab===t.id?"#d8dbe8":"#3c3c3c",padding:"6px 8px",fontSize:9,letterSpacing:"0.08em",fontFamily:"monospace",cursor:"pointer",transition:"color 0.15s",whiteSpace:"nowrap"}}>{t.label}</button>
              ))}
            </div>
          </div>
          <div className="canada-watch-content" style={{flex:1,overflowY:"auto",padding:"16px 18px",animation:"fadeUp 0.18s ease"}}>
            {tab==="insights"&&<Items list={story.insights} color={CANADA_COLOR} icon="🍁"/>}
            {tab==="confirmed"&&<Items list={story.confirmed} color="#4a9b6f" icon="✓"/>}
            {tab==="developing"&&<Items list={story.developing} color="#d4a843" icon="◌"/>}
            {tab==="questions"&&<Items list={story.questions} color="#9b6fb0" icon="?"/>}
            {tab==="people"&&<PeopleTab story={story} storyColor={CANADA_COLOR}/>}
            {tab==="background"&&(
              <div>
                <div style={{fontSize:10,color:"#444",letterSpacing:"0.2em",fontFamily:"monospace",marginBottom:12,fontWeight:700}}>◈ BACKGROUND & CONTEXT</div>
                <div style={{fontSize:13,color:"#848ea0",lineHeight:1.85,whiteSpace:"pre-line"}}>{story.bg}</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================================
// POWER & MONEY WATCH DATA
// ============================================================

const POWER_COLOR = "#9b6fb0";

const POWER_STORIES = [
  {
    id:"P01", code:"OLIGARCH-01", heat:4, status:"developing", updated:"Apr 8 2026",
    title:"Global Wealth & Political Capture",
    sub:"Concentrated Power · The Structural Pattern Across Systems",
    card:"Unprecedented wealth concentration is reshaping democratic institutions globally. Musk inside the US government. Gulf sovereign wealth funding Western elections. Chinese state capitalism. Russian oligarchs remapping influence post-sanctions. Different systems, same structural pattern.",
    summary:"The concentration of wealth and its conversion into political power is the defining structural shift of the 2020s. In the US, Elon Musk's DOGE operation represents direct billionaire governance. In the Gulf, sovereign wealth funds are acquiring stakes in Western media, sports, and financial institutions at unprecedented scale. In China, the line between private wealth and state power is nearly invisible. In Russia, post-sanctions oligarchs are remapping influence through Turkey, UAE, and crypto. The mechanisms differ. The structural outcome — wealth buying governance — is converging.",
    bg:"The relationship between concentrated wealth and political power is as old as civilization. What is new in the current moment is the speed, the scale, and the technical mechanisms. The 2008 financial crisis produced the greatest concentration of wealth in recorded history as quantitative easing inflated asset prices while wages stagnated.\n\nIn the United States, Citizens United (2010) removed most limits on political spending by corporations and wealthy individuals. The Koch network — documented extensively — is the most studied example of ideological infrastructure investment reshaping political landscapes over decades. It is not unique.\n\nGlobally, sovereign wealth funds — government-owned investment vehicles — have created a new form of state capitalism blurring the line between public and private. Norway's GPFG, Saudi Arabia's PIF, Abu Dhabi's ADIA, and China's CIC collectively manage trillions and hold significant stakes in Western companies and media.\n\nThe billionaire political class from tech represents a different model — network effects and platform dominance producing fortunes faster than any prior generation. Their political ambitions are still being revealed.",
    confirmed:["Elon Musk given direct access to federal payment and data systems via DOGE — unprecedented for unelected private citizen","DOGE identified as mechanism for defunding agencies opposed by Musk's business interests","Saudi Arabia's PIF managing over $700B — major stakes in Western media, tech, sports, and finance","Gulf sovereign wealth funds acquired significant stakes in social media platforms and news organizations","Xi Jinping asserted party control over private tech companies — Alibaba, Tencent, Didi","Russian oligarch assets partially frozen post-Ukraine invasion — significant redeployment through UAE, Turkey, crypto","Musk's companies hold billions in federal contracts while he advises on federal budget cuts","Koch network documented spending over $1B on political infrastructure in 2022-2024 cycle","BlackRock, Vanguard, State Street collectively largest shareholders in most S&P 500 companies","Regulatory capture documented across financial services, pharmaceutical, energy, and tech sectors in US and EU"],
    developing:["Full scope of DOGE access to federal systems — ongoing Congressional investigation","Whether Gulf sovereign wealth stakes in Western media affect editorial independence","How Chinese state capitalism evolves after tech crackdown — partial retreat or new model","Whether Russian oligarch influence networks survive sanctions long-term","Whether any democratic government produces effective regulation of billionaire political involvement","Whether asset manager concentration produces antitrust action"],
    insights:["The DOGE model is the most significant structural innovation in American governance since the New Deal — not because of what it has done, but because of what it has demonstrated is possible. The template is now available to any future administration.","Gulf sovereign wealth acquisition of Western media and sports is a soft power strategy that is working. You cannot effectively criticize a country that owns your football club, your newspaper, and your investment bank.","The convergence across different systems is the analytical key. US billionaire governance, Gulf sovereign wealth, Chinese state capitalism, and Russian oligarch networks all arrive at the same place: private wealth with public power and minimal accountability.","Regulatory capture is not conspiracy — it is structural incentive. The revolving door is not corruption in most individual cases; it is a systemic feature that produces pro-industry regulatory outcomes regardless of individual intent.","The asset manager concentration is the underreported story. BlackRock, Vanguard, and State Street are the largest shareholders in most major corporations simultaneously. The implications for corporate governance and competition policy are profound and largely undiscussed."],
    questions:["Does DOGE survive legal challenge — and if so, what constraints remain?","Does Gulf sovereign wealth acquisition of Western media produce measurable editorial effects?","Can any democratic government regulate billionaire political involvement without violating speech protections?","Does the asset manager concentration become a regulatory target?","Is there a governance model that can separate concentrated wealth from political power?"],
    science:null,
    people:[{name:"Elon Musk",role:"DOGE / Tesla / SpaceX / xAI",why:"The most direct example of billionaire governance — unelected, inside federal systems, with documented conflicts of interest.",alignment:"US tech/billionaire class",status:"active"},{name:"Mohammed bin Salman",role:"Crown Prince, Saudi Arabia",why:"The most aggressive sovereign wealth deployer. PIF's acquisition strategy is reshaping Western financial and media landscapes.",alignment:"Saudi Arabia / PIF",status:"active"},{name:"Xi Jinping",role:"President, China",why:"His assertion of party control over private wealth defined the Chinese model.",alignment:"CCP",status:"active"},{name:"Larry Fink",role:"CEO, BlackRock",why:"Manages the largest pool of investment capital in human history.",alignment:"Financial sector",status:"active"}],
  },
  {
    id:"P02", code:"HEGSETH-01", heat:4, status:"developing", updated:"Apr 8 2026",
    title:"War Profiteering & Defense Accountability",
    sub:"Hegseth · Contracts · The Global Pattern of Defense Corruption",
    card:"Pete Hegseth authorized a war consuming 11,000+ munitions in 30 days. Contracts are being awarded at extraordinary rates. A probe into suspicious financial relationships is active. The global pattern of defense corruption during wartime is historically predictable.",
    summary:"The Iran war is generating billions in defense contracts that have triggered Congressional scrutiny. Pete Hegseth has financial relationships with defense contractors flagged during his confirmation hearings and unresolved. A formal probe is active as of April 2026. The broader pattern is historically consistent: wartime contract acceleration, reduced oversight, and the revolving door between military leadership and defense industry produces documented corruption in virtually every major conflict. The US is not unique — the pattern appears in Russian defense procurement, Saudi military purchasing, and Israeli defense exports.",
    bg:"War profiteering is one of the oldest forms of corruption. Eisenhower's 1961 farewell address named and warned against the military-industrial complex. The decades since have produced a revolving door between military leadership, Pentagon civilian officials, and defense contractors so normalized it barely registers as a conflict of interest.\n\nThe specific mechanism: senior officers and officials develop contractor relationships during government service. They leave government and join those contractors, bringing relationships and knowledge. Those contractors receive favorable treatment in procurement decisions made by former colleagues still in government. No individual step is clearly illegal. The systemic outcome consistently favors connected contractors.\n\nThe Iran war has accelerated this. 11,000+ munitions in 30 days means 11,000 replacement orders, plus repair, maintenance, intelligence, and logistics contracts. In wartime, normal procurement oversight is compressed or waived for operational urgency. This is when corruption is most likely and most invisible.\n\nInternationally, Russian defense procurement corruption was so severe that Russian military capability turned out to exist primarily on paper — the money was stolen, equipment unmaintained. Saudi Arabia's military purchasing has generated documented kickback schemes. Israeli defense exports have been linked to multiple foreign bribery cases.",
    confirmed:["Pete Hegseth had documented financial relationships with defense contractors flagged during Senate confirmation hearings","Formal Congressional probe into Hegseth war profiteering connections active as of April 2026","US expended approximately 11,000 munitions in first 30 days — replacement contracts accelerating","Standard procurement oversight compressed under wartime urgency provisions","Hegseth no quarter statement documented as potential war crimes violation — separate legal exposure","Palantir $200M Claude contract — Palantir has deep Hegseth-adjacent network connections","Russian defense procurement corruption documented as factor in military underperformance in Ukraine and Iran theater","Saudi Arabia arms purchasing linked to multiple documented bribery and kickback cases","Global arms trade valued at approximately $2.2T annually — largest buyers also highest corruption risk"],
    developing:["Full scope of Hegseth financial relationships with contractors receiving Iran war contracts","Whether Congressional probe produces referral for criminal investigation","Whether any specific contract awards are challenged as corrupt","Whether munitions replacement contracts go through competitive bidding or sole-source awards","Whether Hegseth war crimes exposure affects his ability to continue in role","Whether international allies are auditing their own defense procurement"],
    insights:["The no quarter statement and the war profiteering probe are legally separate but politically connected. A SecDef under criminal exposure for war crimes has personal incentives to keep the war going — a settled conflict means more scrutiny.","The procurement oversight compression is the mechanism, not the exception. Every major US conflict has produced documented corruption precisely because wartime urgency is used to bypass existing controls.","The Russian defense procurement collapse revealed by Ukraine and Iran is the most important strategic intelligence available. If the Russian military that existed on paper doesn't exist in practice, the threat calculations underpinning decades of US defense spending were wrong.","Defense corruption is hardest to prosecute during active conflict. The evidence accumulates but wartime political incentives favor protecting the people running the war. The accountability almost always comes later, if at all."],
    questions:["Does the Hegseth probe produce criminal referral — and on what timeline?","Are replacement munitions contracts going through competitive procurement or sole-source awards?","Does the no quarter war crimes exposure affect Hegseth's tenure?","What is the full scope of Hegseth financial relationships with Iran war contractors?","Is there an international accountability mechanism for war profiteering — and has it ever worked?"],
    science:null,
    people:[{name:"Pete Hegseth",role:"US Secretary of Defense",why:"Under probe for financial relationships with defense contractors. Also exposed to war crimes allegation. His tenure is legally vulnerable.",alignment:"Trump Administration/Pentagon",status:"active"},{name:"Roger Wicker",role:"Senate Armed Services Committee Chair",why:"His committee is conducting the war profiteering probe.",alignment:"US Senate (Republican)",status:"active"},{name:"Dwight Eisenhower",role:"Former US President (historical)",why:"His 1961 farewell address named the military-industrial complex. Every development in this story confirms his warning.",alignment:"Historical",status:"deceased"}],
  },
  {
    id:"P03", code:"INSIDER-01", heat:3, status:"developing", updated:"Apr 8 2026",
    title:"$580M Pre-War Insider Trading",
    sub:"Who Knew · Options Activity · The Intelligence Leak Question",
    card:"$580M in suspicious options activity was identified in the 72 hours before Operation Epic Fury. The probe is active. The question is not just legal — it is intelligence: who had foreknowledge, and through what channel.",
    summary:"The SEC and DOJ opened a formal probe into approximately $580M in suspicious options activity in the 72 hours before Operation Epic Fury launched. The trades were concentrated in defense contractor stocks, oil futures, and airline shorts — exactly the positions that profit from a major Middle East war. The legal question is insider trading. The intelligence question is more significant: the trading pattern implies someone with foreknowledge of the strikes, which means either an intelligence leak, a foreign government's advance knowledge, or involvement by someone inside the decision-making chain.",
    bg:"Insider trading on the basis of government intelligence is not new. Academic research has documented anomalous options activity before major market-moving government decisions including 9/11, the 2003 Iraq invasion, and multiple Federal Reserve policy announcements.\n\nWhat makes the Operation Epic Fury case unusual is the scale — $580M suggests either a coordinated operation across multiple actors or a single very large position — and the specificity of the trades. Defense contractor options, oil futures, and airline shorts constitute a coherent portfolio that only makes sense with foreknowledge of a Middle East war. Random speculation would not produce this pattern.\n\nThe intelligence leak question is the more serious issue. Operation Epic Fury was authorized within a very small circle. If someone in or adjacent to that circle tipped off financial actors, it represents both a massive securities violation and a national security breach. The investigation is jointly DOJ/SEC/intelligence community.\n\nThe trades were routed through multiple jurisdictions — Cayman Islands, Luxembourg, Singapore — standard financial opacity infrastructure suggesting sophisticated actors rather than opportunistic retail investors.",
    confirmed:["SEC and DOJ opened formal probe into approximately $580M suspicious options activity before Operation Epic Fury","Trades concentrated in defense contractor stocks, oil futures, and airline shorts — coherent pre-war portfolio","Activity identified in 72-hour window before strikes launched February 28","Trades routed through multiple offshore jurisdictions — Cayman Islands, Luxembourg, Singapore","Intelligence community involvement in probe confirmed — breach investigation running parallel to securities case","Similar pre-war anomalous trading documented academically before 9/11 and 2003 Iraq invasion","No public arrests or named suspects as of April 2026","Congressional intelligence committees briefed on the breach investigation"],
    developing:["Whether probe produces named suspects and criminal charges","Whether intelligence leak investigation identifies source of foreknowledge","Whether any foreign government or sovereign wealth fund is implicated","Whether offshore routing produces successful asset tracing","Whether the pattern analysis identifies additional trades beyond the $580M figure"],
    insights:["The trades are too specific to be coincidental. A random speculator does not construct a portfolio that is simultaneously long defense contractors, long oil, and short airlines in the 72 hours before a Middle East war. The question is not whether insider trading occurred. The question is who and how.","The offshore routing is the tell for sophisticated actors. Retail investors don't structure trades through Cayman-Luxembourg-Singapore chains. This is professional money with access to financial opacity infrastructure.","The intelligence breach running parallel to the securities investigation is the more serious concern. The securities violation is a crime. An intelligence breach implies the decision-making circle was larger than officially acknowledged, or that someone in the chain was compromised.","Historical precedent suggests these investigations rarely produce satisfying accountability. The 9/11 trading anomalies produced nothing public. The pattern of impunity for pre-war trading is itself a structural signal."],
    questions:["Does the probe produce criminal charges — and against whom?","Does the intelligence breach investigation identify the source of foreknowledge?","Is any foreign government or sovereign wealth fund implicated?","Why have similar pre-war trading investigations historically produced so little accountability?"],
    science:null,
    people:[{name:"Unknown actors",role:"Suspected traders",why:"The trades are documented. The actors are not yet publicly named. The investigation is active.",alignment:"Unknown",status:"unknown"}],
  },
  {
    id:"P04", code:"FED-01", heat:3, status:"developing", updated:"Apr 8 2026",
    title:"The Federal Reserve & Dollar Power",
    sub:"Structural Financial Power · De-Dollarization · The International Monetary System",
    card:"The Federal Reserve is the most powerful unelected institution in the world. The dollar's reserve currency status is the foundation of American geopolitical power. Both are under structural pressure — from political attacks on Fed independence and from BRICS de-dollarization accelerated by the Iran war oil shock.",
    summary:"The Federal Reserve sets interest rates that affect borrowing costs for every economy on earth. The dollar's reserve currency status means most international trade — including oil — is priced in dollars, giving the US an extraordinary structural advantage. Both features are under simultaneous pressure. Domestically, Trump has attacked Fed independence and floated direct presidential control over monetary policy. Internationally, the Iran war oil shock is accelerating de-dollarization as oil-producing nations explore yuan-denominated settlement.",
    bg:"The Federal Reserve was created in 1913 following the Panic of 1907. The Jekyll Island meeting of 1910 — attended by senior bankers and government officials in secret, with participants traveling under assumed names — produced the framework that became the Federal Reserve Act. The meeting's secrecy is historically documented, not conspiracy.\n\nThe dollar became the world's reserve currency at the Bretton Woods Conference in 1944. When Nixon ended dollar-gold convertibility in 1971, the dollar's reserve status was maintained through the petrodollar system — OPEC nations, particularly Saudi Arabia, agreed to price oil in dollars in exchange for US security guarantees. This arrangement has held 50 years and is now under pressure.\n\nFed independence — monetary policy made by technocrats insulated from short-term political pressures — is not constitutionally guaranteed. The Federal Reserve is a creation of Congress and can be restructured by Congress. The argument for independence is empirical: countries with more independent central banks have lower inflation over time.\n\nThe BRICS de-dollarization project is real but slow. Russia and China are settling bilateral trade in yuan and rubles. The Iran war oil shock is creating pressure on other nations to explore non-dollar settlement for oil. No alternative reserve currency currently has the depth, liquidity, and legal infrastructure to replace the dollar. But the trend and trajectory matter.",
    confirmed:["Trump publicly attacked Federal Reserve Chair Jerome Powell — called for lower rates, implied he would fire him","Legal scholars dispute whether president can fire Fed Chair without cause — untested constitutional question","BRICS nations formally discussed alternative payment systems and currency basket at 2024 summit","Russia and China settling significant bilateral trade in yuan and rubles","Iran war oil shock creating pressure on oil-producing nations to explore non-dollar settlement","Federal Reserve in rate-cutting cycle — balance between inflation control and recession prevention","Dollar index under pressure as Iran war creates global economic uncertainty","Jekyll Island 1910 meeting documented historically — produced Federal Reserve framework","Central bank digital currencies under development in 130+ countries — potential to reduce dollar intermediation"],
    developing:["Whether Trump attempts to remove Jerome Powell — legal challenge would be historically significant","Whether Iran war oil shock produces measurable shift in oil settlement currency","Whether BRICS alternative payment system gains operational traction","Whether any major economy formally reduces dollar reserve holdings","Whether CBDCs create meaningful infrastructure for non-dollar international settlement"],
    insights:["The petrodollar system is the structural foundation of American geopolitical power that most Americans have never heard of. It means the US can run persistent trade deficits without the currency crises that would destroy any other country. Any erosion is a direct reduction in American power.","Fed independence is under the most serious threat in its history — not because of conspiracy but because of the convergence of political incentives. The president wants lower rates. The Treasury needs to finance a massive deficit cheaply. Both interests push toward political control.","De-dollarization is real but not imminent. The dollar's advantages — depth of US treasury market, legal infrastructure, network effects — cannot be replicated quickly. But the direction of travel matters even if the destination is decades away.","The Jekyll Island history is worth knowing because it illustrates how major financial institutions are actually created — not through public deliberation but through private coordination among powerful actors, later ratified through political processes. This pattern repeats with IMF, World Bank, BIS."],
    questions:["Does Trump attempt to remove Powell — and does the legal challenge succeed?","Does the Iran war oil shock produce a measurable lasting shift toward non-dollar oil settlement?","Does the BRICS alternative payment system become operationally significant?","At what pace is dollar reserve status eroding — and what is the tipping point?"],
    science:null,
    people:[{name:"Jerome Powell",role:"Federal Reserve Chair",why:"Under unprecedented political pressure. His ability to maintain Fed independence defines the institutional story.",alignment:"Federal Reserve (independent)",status:"active"},{name:"Donald Trump",role:"US President",why:"Has publicly attacked Powell and implied he should have direct control over monetary policy.",alignment:"US Executive",status:"active"},{name:"Janet Yellen",role:"Former US Treasury Secretary",why:"Her institutional knowledge of the international monetary system makes her analysis of de-dollarization risk the most credible available.",alignment:"International financial institutions",status:"sidelined"}],
  },
  {
    id:"P05", code:"CAPTURE-01", heat:3, status:"monitoring", updated:"Apr 8 2026",
    title:"Institutional Capture — Global Patterns",
    sub:"Regulatory Capture · Media Capture · Judicial Capture · The Mechanism Across Democracies",
    card:"Regulatory capture — the process by which regulated industries come to control their regulators — is documented across democracies globally. It operates through revolving doors, campaign finance, think tank funding, and the slow colonization of institutional norms.",
    summary:"Institutional capture describes the process by which institutions created to serve public interests are gradually redirected to serve private interests. The most studied form is regulatory capture — industries controlling their regulators — but the mechanism operates across media, judiciary, academia, and electoral systems. It is not primarily a story about corruption in the legal sense. The outcome is systemic: institutions that should provide checks on concentrated power become instruments of it. This story tracks the mechanism globally — from the US financial sector to the EU pharmaceutical approval process to judiciary appointments in Poland and Hungary to media consolidation in Brazil and India.",
    bg:"Regulatory capture was formally theorized by economist George Stigler in 1971. Stigler's insight was that regulation is not primarily the product of public interest — it is a product of political competition in which organized private interests have systematic advantages over diffuse public interests. Industries have concentrated financial stakes in regulatory outcomes. The public has diffuse interests that are individually small even if collectively large.\n\nThe revolving door is the most visible mechanism: regulators become consultants or executives for industries they regulated, bringing relationships and knowledge. The opposite flow — industry executives becoming regulators — is equally important. Neither individual is necessarily corrupt; the system produces pro-industry outcomes regardless.\n\nMedia capture has a different mechanism. As traditional media business models collapsed, news organizations became dependent on billionaire ownership, corporate advertising, or government subsidy — each compromising editorial independence structurally even without explicit interference.\n\nJudicial capture is the longest game. Systematic, coordinated judicial appointment strategies — the Federalist Society pipeline in the US, judicial restructuring in Poland — can shift legal outcomes for a generation.",
    confirmed:["Federalist Society documented as primary pipeline for US federal judicial appointments — systematic ideological coordination","Citizens United (2010) removed most limits on corporate political spending in US","EU pharmaceutical approval process documented cases of regulatory capture — EMA advisory board revolving door","Poland and Hungary systematically restructured judicial appointment processes — EU judicial independence concerns","Six companies control approximately 90% of US media — similar concentration in UK, Brazil, India","Academic research documents systematic correlation between industry funding and conclusions favorable to funders","Lobbying spending in US at record levels — over $4.1B in 2025","Global Witness and Transparency International document regulatory capture patterns across 100+ countries"],
    developing:["Whether any democracy develops effective counter-capture regulatory architecture","Whether AI creates new capture mechanisms — who regulates AI and how industry shapes that regulation","Whether judicial restructuring in Hungary and Poland produces permanent institutional damage","Whether AI-powered lobbying analytics create new scale advantages for organized private interests"],
    insights:["Capture is not conspiracy — it is structural incentive operating at scale. The revolving door produces pro-industry regulatory outcomes without any individual actor making a corrupt decision. This makes it extremely difficult to combat through individual accountability measures.","AI regulation is the next major capture battleground. The companies being regulated have the most expertise to advise on regulation, the most resources to fund lobbying, and the most sophisticated tools for analyzing regulatory processes. The asymmetry is larger than in any prior regulatory domain.","The Poland and Hungary judicial restructuring is the most important contemporary example of democratic backsliding through institutional capture. Both governments achieved it through entirely legal means using parliamentary majorities. The template is available to any party that wins sufficient seats.","Media capture and regulatory capture reinforce each other. Captured media doesn't cover regulatory capture stories. Uncovered regulatory capture produces policy outcomes that benefit the captured. The feedback loop is self-reinforcing."],
    questions:["Has any democracy developed an institutional design that successfully resists capture long-term?","Does AI regulation get captured before it is even established?","Can the EU reverse judicial capture in Poland and Hungary?","Is there an international coordination mechanism for anti-capture that could work?"],
    science:null,
    people:[{name:"George Stigler",role:"Economist (capture theory, 1971)",why:"His theoretical framework is the foundation for understanding regulatory capture.",alignment:"Academic (historical)",status:"deceased"},{name:"Viktor Orbán",role:"Prime Minister, Hungary",why:"The most successful contemporary practitioner of democratic institutional capture — achieved through legal means.",alignment:"Fidesz/Hungary",status:"active"},{name:"Lina Khan",role:"Former FTC Chair",why:"The most prominent recent attempt to reverse regulatory capture in tech.",alignment:"Regulatory (sidelined)",status:"sidelined"}],
  },
];

// ============================================================
// CLIMATE & ENERGY WATCH DATA
// ============================================================

const CLIMATE_COLOR = "#4a9b6f";

const CLIMATE_STORIES = [
  {
    id:"CL01", code:"EMISSIONS-01", heat:4, status:"developing", updated:"Apr 8 2026",
    title:"Global Emissions — Where We Actually Stand",
    sub:"The Numbers · The Trajectory · The Gap Between Commitment and Reality",
    card:"Global CO2 emissions hit a new record in 2025. The gap between national commitments and actual trajectories is wider than at any point since Paris. The 1.5°C window has effectively closed. The question is now how far above 2°C we land.",
    summary:"Global greenhouse gas emissions reached a new record in 2025. The scientific consensus has shifted: the 1.5°C target is now considered effectively unachievable under any realistic policy scenario. The current trajectory points to approximately 2.5-3°C of warming by 2100. The Iran war oil shock is creating contradictory pressures — accelerating the green energy transition in some countries while reinforcing fossil fuel infrastructure investment in others.",
    bg:"The Paris Agreement of 2015 set a target of limiting warming to 1.5°C above pre-industrial levels, with a harder limit of 2°C. Countries submitted Nationally Determined Contributions — voluntary pledges for emissions reduction. The gap between pledges and action has been the defining story of climate policy ever since.\n\nThe IPCC — Intergovernmental Panel on Climate Change — synthesizes climate science for policymakers. Its Sixth Assessment Report established that human influence on the climate is unequivocal, that 1.5°C will be reached or exceeded within two decades under most scenarios, and that some changes are already irreversible.\n\nThe carbon budget concept is central to the math. At current emissions rates, the remaining carbon budget for a 50% chance of staying below 1.5°C will be exhausted within approximately seven years. This is arithmetic, not projection. Atmospheric CO2 is currently at approximately 425 ppm — the highest in at least 3 million years.",
    confirmed:["Global CO2 emissions reached new record in 2025 — approximately 37.4 billion tonnes","Atmospheric CO2 concentration at approximately 425 ppm — highest in at least 3 million years","IPCC: 1.5°C warming will be reached or exceeded within two decades under most scenarios","Carbon budget for 50% chance of 1.5°C: approximately 7 years at current emissions rates","G7 countries collectively not on track to meet their Paris commitments","China remains world's largest emitter — approximately 30% of global total — with coal use still expanding","US emissions declined under Biden-era IRA implementation but pace insufficient for Paris targets","Deforestation contributing approximately 10% of global emissions","Methane emissions from fossil fuel operations significantly underreported per satellite monitoring data"],
    developing:["Whether the Iran war oil shock produces lasting acceleration of green energy transition or temporary fossil fuel reinforcement","Whether China's renewable energy build-out outpaces its continued coal expansion","Whether the US rolls back IRA implementation — emissions trajectory impact","Whether tropical forest protection agreements translate into actual deforestation reduction","Whether methane monitoring and reporting requirements improve"],
    insights:["The 1.5°C target is functionally dead. This is not a political statement — it is arithmetic. Accepting this is not defeatism; it is the precondition for honest policy design for the actual scenario we face.","The gap between commitment and trajectory is the central governance failure of climate policy. Countries make pledges at COPs that their domestic political systems cannot deliver. No country has solved this structural mismatch.","China's simultaneous massive renewable build-out and continued coal expansion is the most important climate story in the world right now. Which trend wins determines global emissions trajectory more than any other single factor.","The methane underreporting story is significant. Satellite monitoring reveals emissions substantially higher than official reporting. Methane is approximately 80 times more potent than CO2 over 20 years. The real-world warming effect is materially worse than official figures suggest.","The Iran war oil shock is the strongest argument for the green transition ever made — and it is being made in real time. Countries that diversified away from fossil fuels are less exposed. Countries that didn't are paying for it."],
    questions:["At what temperature does the current trajectory actually land — and what does 2.5°C or 3°C mean concretely?","Does China's renewable build-out outpace its coal expansion on a net emissions basis?","Does the US IRA implementation survive the current administration?","Is there any scenario in which emissions reductions reach the pace required to avoid the worst outcomes?"],
    science:["IPCC AR6 Synthesis (2023): Current policies put world on track for 3.2°C warming by 2100. Limiting to 2°C requires immediate, deep, rapid emissions reductions across all sectors.","Nature (2024): Remaining carbon budget for 1.5°C now estimated at 250 gigatonnes CO2 — at current rates, exhausted in approximately 6-7 years.","Global Carbon Project (2025): Global CO2 emissions 37.4 billion tonnes — new record. Land use change adding approximately 3.9 billion tonnes additional.","Science (2025): Satellite-based methane monitoring reveals fossil fuel methane emissions 70% higher than UNFCCC official inventory data in studied regions.","Nature Climate Change (2025): Every fraction of a degree of additional warming produces measurable increases in extreme weather frequency and intensity — no safe threshold exists.","PNAS (2024): Tipping point cascade risk — multiple Earth system tipping points may be interconnected, meaning crossing one increases probability of crossing others."],
    people:[{name:"Jim Skea",role:"IPCC Chair",why:"Leading the scientific body that synthesizes climate evidence for policymakers.",alignment:"IPCC/Scientific",status:"active"},{name:"Sultan Al Jaber",role:"COP28 President / ADNOC CEO",why:"The most visible example of the structural contradiction in climate governance — the head of COP28 was simultaneously the head of a major oil company.",alignment:"UAE/Oil industry",status:"active"},{name:"Fatih Birol",role:"IEA Executive Director",why:"The IEA's annual World Energy Outlook is the most authoritative annual assessment of energy transition progress.",alignment:"International Energy Agency",status:"active"}],
  },
  {
    id:"CL02", code:"TRANSITION-01", heat:4, status:"developing", updated:"Apr 8 2026",
    title:"The Green Energy Transition",
    sub:"Who's Winning · Who's Falling Behind · What the Iran War Changes",
    card:"China is installing more solar and wind than the rest of the world combined. The US is retreating from clean energy policy. Europe is holding but under pressure. The Iran war oil shock is the strongest argument for the transition ever made.",
    summary:"The green energy transition is happening unevenly. Solar and wind costs have fallen faster than any model predicted — solar is now the cheapest source of new electricity generation in history. EV adoption is accelerating in China and Europe. But grid infrastructure, storage, and industrial decarbonization are lagging. The Iran war oil shock is creating both acceleration and reinforcement — which effect dominates will determine the transition timeline.",
    bg:"The energy transition is the project of replacing fossil fuels — which currently supply approximately 80% of global primary energy — with low-carbon alternatives. The scale is historically unprecedented.\n\nSolar PV costs have fallen approximately 90% since 2010. Wind costs have fallen approximately 70%. These declines were not predicted by mainstream energy models as recently as 2015. In most of the world, new renewable electricity is now cheaper than new fossil fuel electricity.\n\nThe China dimension is critical and contradictory. China manufactures approximately 80% of the world's solar panels, 70% of wind turbines, and 60% of EV batteries. Its domestic renewable buildout is the largest in human history. It is also the world's largest coal consumer and is building more coal plants than any other country.\n\nThe Global South faces a specific challenge: the cheapest energy for immediate development is often fossil fuels. Asking developing countries to forgo fossil-fueled development while the developed world built its prosperity on coal and oil creates legitimate equity questions that climate negotiations have not resolved.",
    confirmed:["Solar PV costs fallen approximately 90% since 2010 — now cheapest source of new electricity generation","Wind costs fallen approximately 70% since 2010","China installed more solar capacity in 2024 than the entire world installed in any prior year","EV global market share reached approximately 18% of new car sales in 2025","China manufactures approximately 80% of global solar panels","US IRA deployed approximately $370B in clean energy investment — rollback attempts active","Global clean energy investment exceeded fossil fuel investment for first time in 2024","Battery storage costs fallen approximately 85% since 2015","Iran war oil shock creating both acceleration and reinforcement pressures on transition simultaneously"],
    developing:["Whether US IRA rollback significantly slows clean energy deployment","Whether China's renewable dominance translates into global supply chain control","Whether battery storage crosses cost thresholds enabling full grid decarbonization","Whether green hydrogen costs fall fast enough for industrial decarbonization","Whether the Iran war oil shock produces lasting policy shift toward energy independence"],
    insights:["The cost curves have already won the economic argument for electricity. The question is no longer whether renewables are cheaper — they are. The bottleneck has moved from economics to permitting, grid expansion, and storage.","China's dominance of transition supply chains is the geopolitical story Western governments are scrambling to respond to. Decarbonizing means trading oil dependency for Chinese manufacturing dependency. Their response — domestic content requirements, tariffs — is slowing transition deployment.","The Iran war oil shock is the best argument for energy independence and therefore for the transition ever made. Countries that diversified away from fossil fuels are not experiencing the same economic shock. This message is landing.","The Global South equity question has no clean answer. Bangladesh, Nigeria, Ethiopia — countries that contributed almost nothing to cumulative historical emissions — are being asked to develop without the fossil fuels that powered Western prosperity."],
    questions:["Does the US IRA survive rollback — and what is the emissions impact if it doesn't?","Does China's renewable dominance produce a supply chain dependency rivaling oil dependency?","Does the Iran war oil shock produce lasting energy policy change in major importing countries?","Does the Global South develop on fossil fuels or does sufficient clean energy finance materialize?"],
    science:["Nature Energy (2025): Solar PV learning rate — costs fall approximately 20% for every doubling of cumulative capacity. This rate has held for 40 years and shows no sign of slowing.","BloombergNEF (2025): Clean energy investment reached $1.8T in 2024 — first year exceeding fossil fuel investment.","Science (2024): Grid decarbonization modeling — 90%+ renewable grids technically achievable in most regions with existing technology. Constraint is grid infrastructure and storage, not technology.","IEA World Energy Outlook (2025): Current policies scenario has fossil fuels still supplying 60% of primary energy in 2050. Net zero requires tripling clean energy investment by 2030.","Nature (2025): EV battery second-life applications and recycling pathways maturing — reduces raw material constraint concerns for long-term deployment.","IRENA (2025): Renewable energy now employs more people globally than fossil fuel industries."],
    people:[{name:"Fatih Birol",role:"IEA Executive Director",why:"His annual assessments define the mainstream policy view of transition progress.",alignment:"International Energy Agency",status:"active"},{name:"He Lifeng",role:"China's top economic planner",why:"China's clean energy and industrial policy decisions are made at his level.",alignment:"China/CCP",status:"active"},{name:"Teresa Ribera",role:"EU Climate Commissioner",why:"The EU's Fit for 55 implementation and response to Chinese clean energy competition are in her portfolio.",alignment:"European Union",status:"active"}],
  },
  {
    id:"CL03", code:"ARCTIC-CLIMATE-01", heat:4, status:"developing", updated:"Apr 8 2026",
    title:"Arctic Climate Science",
    sub:"Sea Ice · Permafrost · Feedback Loops · The Science of Accelerating Change",
    card:"The Arctic is warming four times faster than the global average. Sea ice extent is at record lows. Permafrost thaw is releasing methane not fully captured by current models. The feedback loops are real and potentially irreversible.",
    summary:"The Arctic is the fastest-warming region on Earth, changing at approximately four times the global average rate. Arctic sea ice reached new record lows in 2024 and 2025. Permafrost — frozen ground covering approximately 25% of the Northern Hemisphere land surface — is thawing and releasing carbon and methane stored for thousands of years. This creates a feedback loop: warming causes thaw, thaw releases greenhouse gases, gases cause more warming. The science on these feedback loops is more alarming than mainstream models have captured.",
    bg:"The Arctic is defined as the region north of the Arctic Circle (66.5°N). It contains the Arctic Ocean — largely covered by sea ice — and surrounding land areas of Russia, Canada, Alaska, Norway, Greenland, and Iceland.\n\nArctic sea ice serves multiple functions in the global climate system. It reflects sunlight back into space (high albedo), regulating how much solar energy the Earth absorbs. As sea ice melts, it exposes darker ocean water which absorbs more heat — the ice-albedo feedback, one of several reinforcing feedback loops in the Arctic system.\n\nPermafrost covers approximately 25% of Northern Hemisphere land surface and contains approximately 1.5 trillion tonnes of organic carbon — nearly twice the amount currently in the atmosphere. As permafrost thaws, this carbon is processed by microbes and released as CO2 and methane. Methane is approximately 80 times more potent than CO2 over 20 years.\n\nThe jet stream connection: Arctic warming is changing the temperature gradient between the Arctic and mid-latitudes, affecting the jet stream — the atmospheric river governing weather patterns across the Northern Hemisphere. A weakened, more meandering jet stream is associated with more persistent extreme weather events: prolonged heat waves, extended cold snaps, stalled storm systems.",
    confirmed:["Arctic warming approximately four times faster than global average — amplification well-documented","Arctic sea ice extent reached record lows in 2024 and 2025 summer minimums","Permafrost thaw accelerating — visible in thermokarst formation, infrastructure damage, and coastal erosion","Carbon and methane release from permafrost measured and increasing — exact quantities uncertain","Greenland ice sheet losing mass at accelerating rate","Arctic Ocean increasingly ice-free in summer months","Polar vortex disruptions linked to Arctic warming — extreme cold weather events in mid-latitudes","Indigenous communities in Arctic Canada, Alaska, and Russia reporting infrastructure failure from permafrost thaw","Northwest Passage navigable August-September — window expanding annually"],
    developing:["Whether permafrost carbon release creates a self-sustaining feedback loop independent of human emissions","Exact quantities and timing of permafrost carbon and methane release — large scientific uncertainty","Whether summer Arctic sea ice will disappear entirely within 10-20 years or longer","How Arctic warming affects jet stream and mid-latitude weather patterns","Whether methane hydrates on Arctic ocean floor are destabilizing","How Greenland ice sheet contributes to sea level rise under different warming scenarios"],
    insights:["The permafrost carbon feedback is the sleeper risk in climate science. Current IPCC models include it partially but cannot fully capture non-linear dynamics. If permafrost thaw accelerates beyond current trajectories — which some observational data suggests — the effective carbon budget for any temperature target is smaller than officially stated.","Arctic sea ice loss is not primarily an aesthetic loss — it is a fundamental change to the climate system. Each increment of ice loss increases warming pressure on the system through the ice-albedo feedback. This is the clearest example of a reinforcing feedback loop.","The infrastructure consequences of permafrost thaw are immediate and enormous. Russia has the most infrastructure built on permafrost — roads, pipelines, buildings, entire cities. The cost to Russian infrastructure alone is estimated in the trillions. This is happening now.","The Arctic sovereignty and Arctic climate stories are the same story viewed from different angles. Both are driven by sea ice loss. The climate science story is about physics and feedback loops. The sovereignty story is about who controls the resources and routes that ice loss opens."],
    questions:["Is the permafrost carbon feedback loop already self-sustaining — and would we know if it were?","When does the Arctic Ocean have its first ice-free summer — and what are the system-level consequences?","Are methane hydrates on the Arctic ocean floor destabilizing?","How much does Arctic warming contribute to extreme weather events in mid-latitudes including Canada?","Is there any intervention — solar geoengineering, carbon removal — that could stabilize the Arctic system?"],
    science:["Nature (2024): Arctic warming rate has increased from 3x to 4x global average over past decade — amplification accelerating.","Science (2025): Permafrost active layer depth increasing 3-5cm per decade across Siberia — methane flux measurements 40% higher than 2010 baseline.","Nature Climate Change (2024): Greenland ice sheet melt contributing 0.7mm/year to sea level rise — rate has tripled since 1990s.","Geophysical Research Letters (2025): First ice-free Arctic summer now projected for 2030s under current emissions trajectory — 10-15 years earlier than 2021 IPCC projection.","Science (2024): Arctic jet stream meandering index at highest recorded level — consistent with increased frequency of persistent extreme weather events in mid-latitudes.","Nature Geoscience (2025): Methane hydrate destabilization on Siberian continental shelf — active monitoring shows increasing bubble columns. Scale of potential release deeply uncertain."],
    people:[{name:"Julienne Stroeve",role:"Sea ice scientist, UCL/NSIDC",why:"Among the world's leading Arctic sea ice researchers. Her observational data defines the scientific baseline on sea ice loss.",alignment:"Academic/Scientific",status:"active"},{name:"Susan Natali",role:"Arctic Program Director, Woodwell Climate Research Center",why:"Leading researcher on permafrost carbon feedback.",alignment:"Academic/Scientific",status:"active"}],
  },
  {
    id:"CL04", code:"FOOD-01", heat:4, status:"developing", updated:"Apr 8 2026",
    title:"Climate & Food Security",
    sub:"Drought · Agricultural Collapse · The Countries Already in Crisis",
    card:"Climate change is already reducing agricultural yields in the most vulnerable regions. The Iran war has compounded existing supply chain stress. 280 million people are in acute food insecurity. The food system is more fragile than most people realize.",
    summary:"The global food system is under compounding stress from three simultaneous drivers: climate-driven agricultural disruption, conflict-driven supply chain disruption, and economic stress. Approximately 280 million people are experiencing acute food insecurity as of early 2026 — roughly double 2019 levels. The countries most at risk are concentrated in sub-Saharan Africa, the Horn of Africa, the Middle East, and South Asia. These are not countries that caused the climate crisis, but they are experiencing its food security consequences most severely.",
    bg:"Agricultural production is more sensitive to climate than most economic activity. Crops are grown in specific temperature and precipitation windows. Small deviations — a few degrees of warming, shifted rainfall patterns, more frequent extremes — produce significant yield reductions. The Green Revolution of the 1960s-70s produced high-yield crop varieties and irrigation infrastructure that dramatically increased food production. Those yield gains are largely exhausted, and the crops are increasingly stressed by conditions they were not bred for.\n\nThe fertilizer system is a particular vulnerability. Modern industrial agriculture depends on nitrogen fertilizers derived from the Haber-Bosch process, which uses natural gas as a feedstock. Russia and Belarus are major fertilizer exporters. The Ukraine war disrupted supply chains. The Iran war oil shock has increased the cost of natural gas inputs.\n\nWater security is the underlying driver of much food insecurity. Many major agricultural regions depend on groundwater, glacial meltwater, or specific rainfall patterns — all being disrupted by climate change. The Indus basin, the Nile, the Colorado River, and multiple Chinese river systems are all experiencing water stress affecting agricultural output.\n\nFood price volatility has political consequences. The Arab Spring of 2011 was preceded by food price spikes. The current combination of climate stress, Ukraine war wheat disruption, and Iran war oil shock has produced food price conditions more severe than 2011 by some measures.",
    confirmed:["Approximately 280 million people in acute food insecurity globally — roughly double 2019 levels","Ukraine war disrupted wheat exports — Ukraine and Russia supply approximately 30% of global wheat","Iran war oil shock increasing fertilizer input costs","Horn of Africa experiencing worst drought in 40 years — Somalia, Ethiopia, Kenya most affected","Sahel food insecurity worsening as conflict and climate compound — 25 million at acute risk","Gaza food insecurity at famine levels — WFP reporting starvation in northern Gaza","India heat wave impacts reduced domestic wheat production in 2024","Global food prices elevated — FAO Food Price Index approximately 15% above 2019 baseline","Climate-driven agricultural yield reductions documented across multiple regions and crops"],
    developing:["Whether Iran war oil shock produces fertilizer supply crisis affecting planting seasons","Whether Horn of Africa drought conditions persist through 2026 growing seasons","Whether any country crosses formal famine declaration threshold beyond Gaza","Whether food price spikes produce political instability in at-risk countries — Egypt, Pakistan, Nigeria"],
    insights:["Food insecurity is the most direct human consequence of the interaction between climate change and geopolitical conflict. The 280 million number is not a projection — it is a current measurement.","The fertilizer vulnerability is underappreciated. Food security in the developing world depends on nitrogen fertilizer that depends on natural gas that depends on prices currently elevated by the Iran war. This chain of dependency is invisible until it breaks.","The political instability risk from food prices is documented and current. The Arab Spring correlation with 2011 food price spikes is well-established. The countries most at risk — Egypt, Pakistan, Nigeria, Ethiopia — are also countries with nuclear weapons or significant geopolitical weight.","Climate change is not an equal-opportunity crisis. The countries that contributed least to cumulative emissions are experiencing the most severe food security consequences. The moral arithmetic is stark and the political response is insufficient."],
    questions:["Does the Iran war oil shock produce a fertilizer supply crisis affecting 2026 planting seasons?","Which countries are at highest near-term risk of famine?","Does food price stress produce political instability in any major country in 2026?","What is the long-term trajectory of agricultural yields under 2°C and 3°C warming scenarios?"],
    science:["Nature Food (2024): Global crop yield declines documented — wheat -5.5% per decade in heat-stressed regions, maize -3.1% per decade in sub-Saharan Africa under observed warming.","Science (2025): Simultaneous crop failure risk — probability of multiple breadbasket failures in the same year has tripled since 1990 as climate extremes correlate across regions.","Proceedings of the Royal Society B (2024): Food system fragility assessment — the global food system has fewer buffers against simultaneous shocks than at any point in the past 50 years.","Nature Climate Change (2025): Water stress and food production — 40% of global agricultural land faces water stress by 2050 under current emissions trajectory.","Lancet (2025): Malnutrition and climate — climate-driven food insecurity producing measurable increases in child stunting in sub-Saharan Africa and South Asia.","FAO (2026): State of Food Security — 280 million in acute food insecurity, 750 million experiencing food insecurity at some level. Both at record highs."],
    people:[{name:"Cindy Holleman",role:"Chief Economist, FAO",why:"FAO's State of Food Security report is the authoritative annual measurement of global food insecurity.",alignment:"UN/FAO",status:"active"},{name:"David Beasley",role:"Former WFP Executive Director",why:"His warnings about famine conditions have consistently preceded international action.",alignment:"Former UN/WFP",status:"sidelined"}],
  },
  {
    id:"CL05", code:"FOSSIL-01", heat:4, status:"developing", updated:"Apr 8 2026",
    title:"Fossil Fuel Dependency — The Iran War as Forcing Function",
    sub:"The Strait Closure · Energy Independence · Who's Changing Policy and Who Isn't",
    card:"The Iran war has made the cost of fossil fuel dependency visible in a way that years of climate advocacy could not. Countries that diversified away from fossil fuels are less exposed to the oil shock. Countries that didn't are paying for it.",
    summary:"The Strait of Hormuz closure has created a live experiment in fossil fuel dependency. Countries that invested in renewable energy and energy storage over the past decade are less exposed to the current oil shock than those that didn't. Energy security is now the leading argument for clean energy investment in countries previously skeptical of the climate frame. The question is whether this emergency conversion produces lasting policy change or reverts when the crisis passes.",
    bg:"The geopolitics of oil have shaped international relations since the 1970s oil shocks. The first oil shock (1973-1974), triggered by the Arab oil embargo, produced the first serious Western interest in energy efficiency and alternatives. Both 1970s shocks produced lasting policy changes — fuel economy standards, strategic petroleum reserves, initial renewable energy investments — but not fundamental transformation.\n\nThe pattern of every subsequent oil shock: acute pain produces policy interest in alternatives, the shock passes, prices fall, policy interest fades, and dependence is rebuilt. The structural incentive — cheap fossil fuels are immediately available while clean alternatives require upfront investment — consistently wins in the short term.\n\nThe current shock has different features that may produce different outcomes. First, renewable energy is now cheaper than fossil energy in most contexts. Second, the supply chains for renewable energy are more developed. Third, geopolitical competition with China over clean energy manufacturing has created a strategic interest in the transition.\n\nAgainst this: the current US administration is actively retreating from clean energy policy. Major oil producers have strong incentives to cement long-term fossil fuel relationships. And the medium-term response to an oil supply shortage is increased oil production, not immediate transition.",
    confirmed:["Countries with high renewable energy penetration experiencing smaller economic shock from oil price spike","Countries with low renewable penetration implementing emergency demand rationing","Japan accelerating nuclear restarts and renewable procurement in direct response to Strait closure","South Korea fast-tracking LNG terminal diversification and offshore wind expansion","Germany citing Iran war as justification for accelerated Energiewende implementation","US Gulf Coast oil production increasing to fill Strait supply gap — short-term fossil reinforcement","Saudi Arabia and UAE increasing production","IEA strategic petroleum reserve releases insufficient to fully cover Strait disruption","EU emergency energy measures activated — coordinated demand reduction and supply diversification"],
    developing:["Whether Japan's nuclear restart and renewable acceleration survives domestic political opposition","Whether South Korea's clean energy acceleration produces lasting policy or reverts post-crisis","Whether US clean energy rollback is reversed in response to energy security arguments","Whether global LNG infrastructure investment locks in gas dependency for 30+ years","Whether the energy security frame permanently replaces the climate frame as the political argument for transition"],
    insights:["The energy security argument for the transition is more politically durable than the climate argument in most democratic systems. Climate is abstract and future-oriented. Energy security is immediate and self-interested. The Iran war is making it viscerally real.","The structural irony: the countries increasing production to fill the Strait gap are primarily the Gulf producers whose revenue depends on sustained fossil fuel demand. They benefit from both the crisis — higher prices — and the eventual resolution — continued demand.","Japan and South Korea's responses are the most significant to watch. Both are large wealthy democracies with high fossil fuel import dependency, developed technological capacity, and strong energy security instincts.","The LNG infrastructure lock-in risk is real. Building a new LNG terminal commits to 30+ years of gas imports. Countries fast-tracking LNG diversification may be trading one fossil fuel dependency for another."],
    questions:["Does the energy security argument produce lasting clean energy policy change in major fossil fuel importers?","Does LNG infrastructure investment lock in gas dependency conflicting with net zero timelines?","Do Japan and South Korea make permanent policy shifts or revert when the crisis passes?","Does any OPEC+ member use the crisis revenue to begin domestic economic diversification?"],
    science:["Nature Energy (2025): Countries with >40% renewable electricity penetration experienced 60% lower economic impact from oil price shocks — first empirical quantification of transition resilience benefit.","IEA (2026): Strait of Hormuz closure scenario analysis — countries with diversified energy portfolios have 40-70% lower GDP exposure to oil supply disruption.","Energy Policy (2025): LNG lock-in analysis — current LNG terminal construction pipeline, if completed, commits $2.1T in gas infrastructure extending to 2060s.","Science (2025): Energy security and climate co-benefits — policies designed for energy security produce 65-80% of the emissions reductions required for climate targets as a co-benefit.","Nature Climate Change (2024): Oil price shock political economy — historical analysis shows 18-24 month window of peak political receptiveness to clean energy policy following supply shocks."],
    people:[{name:"Yoon Suk-yeol",role:"President, South Korea",why:"South Korea's clean energy acceleration response to the Strait closure is happening under his direction.",alignment:"South Korea",status:"active"},{name:"Ursula von der Leyen",role:"EU Commission President",why:"The EU's emergency energy measures and long-term transition policy are in her domain.",alignment:"European Union",status:"active"},{name:"Fatih Birol",role:"IEA Executive Director",why:"His scenario analysis of the Strait closure energy security impact is the key quantitative reference.",alignment:"International Energy Agency",status:"active"}],
  },
];

// ============================================================
// SHARED GENERIC WATCH PANEL
// Used for Power & Money and Climate & Energy
// ============================================================

function GenericWatchPanel({ stories, color, headerLabel, headerSub, defaultStory, showScience }) {
  const [activeStory, setActiveStory] = useState(defaultStory);
  const [tab, setTab] = useState("insights");
  const mainRef = React.useRef(null);
  const story = stories.find(s=>s.id===activeStory);
  const st = STATUS[story.status];

  const baseTabs = [
    {id:"insights", label:"INSIGHTS"},
    {id:"confirmed", label:"CONFIRMED"},
    {id:"developing", label:"DEVELOPING"},
    {id:"questions", label:"QUESTIONS"},
    {id:"people", label:"◈ PEOPLE"},
    {id:"background", label:"BACKGROUND"},
  ];
  const TABS = showScience && story.science
    ? [baseTabs[0], baseTabs[1], baseTabs[2], baseTabs[3], baseTabs[4], {id:"science", label:"🔬 SCIENCE"}, baseTabs[5]]
    : baseTabs;

  const selectStory = (id) => {
    setActiveStory(id);
    setTab("insights");
    if(mainRef.current && window.innerWidth <= 700) {
      setTimeout(()=>{
        const el = mainRef.current;
        const top = el.getBoundingClientRect().top + window.scrollY - 56;
        window.scrollTo({top, behavior:"smooth"});
      }, 60);
    }
  };

  return (
    <div style={{display:"flex",flex:1,flexDirection:"column"}}>
      <div style={{padding:"10px 16px",borderBottom:"1px solid rgba(255,255,255,0.055)",background:"rgba(255,255,255,0.02)",flexShrink:0,display:"flex",justifyContent:"space-between",alignItems:"center"}}>
        <div>
          <div style={{fontSize:9,color,letterSpacing:"0.2em",fontFamily:"monospace",marginBottom:2}}>{headerLabel}</div>
          <div style={{fontSize:11,color:"#606878"}}>{headerSub}</div>
        </div>
        <div style={{fontSize:9,color:"#383838",fontFamily:"monospace",letterSpacing:"0.1em"}}>APR 2026</div>
      </div>
      <div className="generic-watch-body" style={{display:"flex",flex:1,overflow:"hidden"}}>
        <div className="generic-watch-sidebar" style={{width:240,flexShrink:0,borderRight:"1px solid rgba(255,255,255,0.055)",overflowY:"auto",padding:"10px 8px"}}>
          <div style={{fontSize:9,color,letterSpacing:"0.2em",fontFamily:"monospace",fontWeight:700,marginBottom:10,paddingLeft:3}}>STORIES</div>
          {stories.map(s=>{
            const isActive = activeStory===s.id;
            return (
              <div key={s.id} onClick={()=>selectStory(s.id)}
                style={{background:isActive?"rgba(255,255,255,0.055)":"rgba(255,255,255,0.015)",border:`1px solid ${isActive?"rgba(255,255,255,0.14)":"rgba(255,255,255,0.05)"}`,borderLeft:`2px solid ${isActive?color:color+"33"}`,borderRadius:2,padding:"10px 12px",cursor:"pointer",transition:"all 0.15s",marginBottom:5}}>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4}}>
                  <span style={{fontSize:9,color:"#555",fontFamily:"monospace",letterSpacing:"0.1em",fontWeight:600}}>{s.code}</span>
                  <Heat n={s.heat}/>
                </div>
                <div style={{fontSize:13,color:isActive?"#fff":"#c0c8d8",fontWeight:700,marginBottom:4,lineHeight:1.3}}>{s.title}</div>
                <div style={{fontSize:10,color:"#505868",lineHeight:1.5,marginBottom:6}}>{s.card.substring(0,90)}...</div>
                <Badge status={s.status}/>
              </div>
            );
          })}
        </div>
        <div className="generic-watch-main" ref={mainRef} style={{flex:1,display:"flex",flexDirection:"column",overflow:"hidden"}}>
          <div style={{padding:"14px 18px 0",borderBottom:"1px solid rgba(255,255,255,0.055)",flexShrink:0}}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:10}}>
              <div style={{minWidth:0,flex:1}}>
                <div style={{fontSize:9,color:"#3a3a3a",letterSpacing:"0.18em",fontFamily:"monospace",marginBottom:4}}>{story.code} · {headerLabel}</div>
                <div style={{fontSize:18,color:"#dde0e8",fontWeight:700,letterSpacing:"-0.02em",marginBottom:2,lineHeight:1.2}}>{story.title}</div>
                <div style={{fontSize:11,color:"#484848"}}>{story.sub}</div>
              </div>
              <div style={{display:"flex",flexDirection:"column",alignItems:"flex-end",gap:5,paddingTop:2,flexShrink:0,marginLeft:10}}>
                <Badge status={story.status}/>
                <Heat n={story.heat}/>
                <div style={{fontSize:9,color:"#303030",fontFamily:"monospace"}}>UPD {story.updated}</div>
              </div>
            </div>
            <div style={{background:"rgba(255,255,255,0.02)",border:"1px solid rgba(255,255,255,0.055)",borderLeft:`2px solid ${color}44`,padding:"8px 12px",marginBottom:10,borderRadius:2}}>
              <div style={{fontSize:9,color:"#383838",letterSpacing:"0.18em",fontFamily:"monospace",fontWeight:700,marginBottom:4}}>SUMMARY</div>
              <div style={{fontSize:11,color:"#848ea0",lineHeight:1.65}}>{story.summary}</div>
            </div>
            <div style={{display:"flex",overflowX:"auto",WebkitOverflowScrolling:"touch",scrollbarWidth:"none",msOverflowStyle:"none",flexShrink:0}}>
              {TABS.map(t=>(
                <button key={t.id} onClick={()=>setTab(t.id)} style={{background:"none",border:"none",borderBottom:`2px solid ${tab===t.id?color:"transparent"}`,color:tab===t.id?"#d8dbe8":"#3c3c3c",padding:"6px 8px",fontSize:9,letterSpacing:"0.08em",fontFamily:"monospace",cursor:"pointer",transition:"color 0.15s",whiteSpace:"nowrap"}}>{t.label}</button>
              ))}
            </div>
          </div>
          <div className="generic-watch-content" style={{flex:1,overflowY:"auto",padding:"16px 18px",animation:"fadeUp 0.18s ease"}}>
            {tab==="insights"&&<Items list={story.insights} color={color} icon="◈"/>}
            {tab==="confirmed"&&<Items list={story.confirmed} color="#4a9b6f" icon="✓"/>}
            {tab==="developing"&&<Items list={story.developing} color="#d4a843" icon="◌"/>}
            {tab==="questions"&&<Items list={story.questions} color="#9b6fb0" icon="?"/>}
            {tab==="people"&&<PeopleTab story={story} storyColor={color}/>}
            {tab==="science"&&story.science&&(
              <div>
                <div style={{fontSize:10,color:CLIMATE_COLOR,letterSpacing:"0.2em",fontFamily:"monospace",marginBottom:14,fontWeight:700}}>🔬 SCIENCE FINDINGS & DISCOVERIES</div>
                <div style={{display:"flex",flexDirection:"column",gap:6}}>
                  {story.science.map((finding,i)=>(
                    <div key={i} style={{display:"flex",gap:10,padding:"10px 14px",background:"rgba(74,155,111,0.04)",border:"1px solid rgba(74,155,111,0.12)",borderLeft:`2px solid ${CLIMATE_COLOR}`,borderRadius:2}}>
                      <span style={{color:CLIMATE_COLOR,fontSize:10,marginTop:3,flexShrink:0}}>🔬</span>
                      <span style={{fontSize:12,color:"#9aa0b0",lineHeight:1.7}}>{finding}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {tab==="background"&&(
              <div>
                <div style={{fontSize:10,color:"#444",letterSpacing:"0.2em",fontFamily:"monospace",marginBottom:12,fontWeight:700}}>◈ BACKGROUND & CONTEXT</div>
                <div style={{fontSize:13,color:"#848ea0",lineHeight:1.85,whiteSpace:"pre-line"}}>{story.bg}</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function AlertBadge({severity}) {
  const colors = {critical:"#c94040",high:"#e07b39",medium:"#d4a843",low:"#6b8cba"};
  const bgs = {critical:"rgba(201,64,64,0.1)",high:"rgba(224,123,57,0.1)",medium:"rgba(212,168,67,0.1)",low:"rgba(107,140,186,0.1)"};
  const c = colors[severity]||"#555";
  return (
    <div style={{display:"inline-flex",alignItems:"center",gap:5,background:bgs[severity]||"rgba(85,85,85,0.1)",border:`1px solid ${c}33`,padding:"2px 8px",borderRadius:2}}>
      <div style={{width:5,height:5,borderRadius:"50%",background:c,animation:severity==="critical"?"pulse 1.4s infinite":"none"}}/>
      <span style={{fontSize:9,color:c,letterSpacing:"0.15em",fontFamily:"monospace"}}>{severity.toUpperCase()}</span>
    </div>
  );
}

function AlertsTab() {
  const active = AI_ALERTS.filter(a=>!a.resolved);
  const resolved = AI_ALERTS.filter(a=>a.resolved);
  return (
    <div>
      <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:16}}>
        <div style={{width:8,height:8,borderRadius:"50%",background:"#c94040",animation:"pulse 1.4s infinite"}}/>
        <div style={{fontSize:10,color:"#c94040",letterSpacing:"0.2em",fontFamily:"monospace",fontWeight:700}}>
          {active.length} ACTIVE ALERT{active.length!==1?"S":""}
        </div>
      </div>
      {active.map(alert=>(
        <div key={alert.id} style={{marginBottom:12,background:"rgba(201,64,64,0.04)",border:"1px solid rgba(201,64,64,0.2)",borderLeft:"3px solid #c94040",borderRadius:2,padding:"14px 16px"}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:8,gap:8,flexWrap:"wrap"}}>
            <div style={{fontSize:13,color:"#dde0e8",fontWeight:700}}>{alert.title}</div>
            <div style={{display:"flex",gap:8,alignItems:"center",flexShrink:0}}>
              <AlertBadge severity={alert.severity}/>
              <span style={{fontSize:9,color:"#383838",fontFamily:"monospace"}}>{alert.date}</span>
            </div>
          </div>
          <div style={{fontSize:12,color:"#848ea0",lineHeight:1.7,marginBottom:10}}>{alert.summary}</div>
          <div style={{marginBottom:8}}>
            <div style={{fontSize:9,color:"#e07b39",fontFamily:"monospace",letterSpacing:"0.1em",marginBottom:4}}>AFFECTED</div>
            <div style={{fontSize:11,color:"#9aa0b0"}}>{alert.affected}</div>
          </div>
          <div style={{background:"rgba(74,155,111,0.06)",border:"1px solid rgba(74,155,111,0.2)",borderRadius:2,padding:"10px 12px"}}>
            <div style={{fontSize:9,color:"#4a9b6f",fontFamily:"monospace",letterSpacing:"0.1em",marginBottom:4}}>⚡ WHAT TO DO</div>
            <div style={{fontSize:11,color:"#9aa0b0",lineHeight:1.65,fontFamily:"monospace"}}>{alert.action}</div>
          </div>
          {alert.notAffected&&(
            <div style={{marginTop:8,fontSize:11,color:"#3a4a3a"}}>
              <span style={{color:"#4a9b6f",fontFamily:"monospace",fontSize:9,letterSpacing:"0.08em"}}>NOT AFFECTED: </span>
              {alert.notAffected}
            </div>
          )}
        </div>
      ))}
      {resolved.length>0&&(
        <>
          <div style={{fontSize:10,color:"#3a3a3a",letterSpacing:"0.18em",fontFamily:"monospace",fontWeight:700,margin:"20px 0 10px"}}>◌ RESOLVED</div>
          {resolved.map(alert=>(
            <div key={alert.id} style={{marginBottom:8,background:"rgba(255,255,255,0.01)",border:"1px solid rgba(255,255,255,0.05)",borderLeft:"2px solid rgba(74,155,111,0.4)",borderRadius:2,padding:"12px 14px",opacity:0.6}}>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",gap:8,flexWrap:"wrap"}}>
                <div style={{fontSize:12,color:"#848ea0",fontWeight:600}}>{alert.title}</div>
                <div style={{display:"flex",gap:8,alignItems:"center"}}>
                  <div style={{fontSize:9,color:"#4a9b6f",fontFamily:"monospace",letterSpacing:"0.1em"}}>✓ RESOLVED</div>
                  <span style={{fontSize:9,color:"#383838",fontFamily:"monospace"}}>{alert.date}</span>
                </div>
              </div>
              <div style={{fontSize:11,color:"#505868",marginTop:4,lineHeight:1.6}}>{alert.summary}</div>
            </div>
          ))}
        </>
      )}
    </div>
  );
}

function AIWatchPanel() {
  const [activeStory, setActiveStory] = useState("F01");
  const [tab, setTab] = useState("insights");
  const mainRef = React.useRef(null);
  const story = AI_STORIES.find(s=>s.id===activeStory);
  const statusColors = {escalating:"#e07b39",developing:"#d4a843",monitoring:"#6b8cba","active-war":"#c94040"};
  const sc = statusColors[story.status]||"#7ba7d4";

  const TABS = [
    {id:"alerts",label:"⚡ ALERTS"},
    {id:"insights",label:"INSIGHTS"},
    {id:"confirmed",label:"CONFIRMED"},
    {id:"developing",label:"DEVELOPING"},
    {id:"questions",label:"QUESTIONS"},
    {id:"people",label:"◈ PEOPLE"},
    {id:"background",label:"BACKGROUND"},
  ];

  const visibleTabs = activeStory === "F03" ? TABS : TABS.filter(t=>t.id!=="alerts");
  const activeAlertCount = AI_ALERTS.filter(a=>!a.resolved).length;

  const selectStory = (id) => {
    setActiveStory(id);
    setTab(id==="F03"?"alerts":"insights");
    if(mainRef.current && window.innerWidth <= 700) {
      setTimeout(()=>{
        const el = mainRef.current;
        const top = el.getBoundingClientRect().top + window.scrollY - 56;
        window.scrollTo({top, behavior:"smooth"});
      }, 60);
    }
  };

  return (
    <div style={{display:"flex",flex:1,flexDirection:"column"}}>
      <div style={{padding:"10px 16px",borderBottom:"1px solid rgba(255,255,255,0.055)",background:"rgba(123,167,212,0.04)",flexShrink:0,display:"flex",justifyContent:"space-between",alignItems:"center"}}>
        <div>
          <div style={{fontSize:9,color:"#7ba7d4",letterSpacing:"0.2em",fontFamily:"monospace",marginBottom:2}}>◈ AI WATCH</div>
          <div className="ai-watch-header-sub" style={{fontSize:11,color:"#606878"}}>Frontier · Welfare · Security</div>
        </div>
        {activeAlertCount>0&&(
          <div style={{display:"flex",alignItems:"center",gap:6,background:"rgba(201,64,64,0.1)",border:"1px solid rgba(201,64,64,0.3)",padding:"4px 10px",borderRadius:2}}>
            <div style={{width:6,height:6,borderRadius:"50%",background:"#c94040",animation:"pulse 1.4s infinite"}}/>
            <span style={{fontSize:9,color:"#c94040",fontFamily:"monospace",letterSpacing:"0.12em",fontWeight:700}}>{activeAlertCount} ALERT{activeAlertCount!==1?"S":""}</span>
          </div>
        )}
      </div>

      <div className="ai-watch-body" style={{display:"flex",flex:1,overflow:"hidden"}}>
        <div className="ai-watch-sidebar" style={{width:240,flexShrink:0,borderRight:"1px solid rgba(255,255,255,0.055)",overflowY:"auto",padding:"12px 10px"}}>
          <div style={{fontSize:9,color:"#7ba7d4",letterSpacing:"0.2em",fontFamily:"monospace",fontWeight:700,marginBottom:10,paddingLeft:3}}>AI STORIES</div>
          {AI_STORIES.map(s=>{
            const sc2 = statusColors[s.status]||"#7ba7d4";
            const isActive = activeStory===s.id;
            const hasAlerts = s.id==="F03" && activeAlertCount>0;
            return (
              <div key={s.id} onClick={()=>selectStory(s.id)}
                style={{background:isActive?"rgba(255,255,255,0.055)":"rgba(255,255,255,0.015)",border:`1px solid ${isActive?"rgba(255,255,255,0.14)":"rgba(255,255,255,0.05)"}`,borderLeft:`2px solid ${isActive?sc2:"rgba(123,167,212,0.25)"}`,borderRadius:2,padding:"10px 12px",cursor:"pointer",transition:"all 0.15s",marginBottom:6,position:"relative"}}>
                {hasAlerts&&(
                  <div style={{position:"absolute",top:8,right:8,width:8,height:8,borderRadius:"50%",background:"#c94040",animation:"pulse 1.4s infinite"}}/>
                )}
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4}}>
                  <span style={{fontSize:9,color:"#555",fontFamily:"monospace",letterSpacing:"0.1em",fontWeight:600}}>{s.code}</span>
                  <Heat n={s.heat}/>
                </div>
                <div style={{fontSize:13,color:isActive?"#fff":"#c0c8d8",fontWeight:700,marginBottom:3,lineHeight:1.3}}>{s.title}</div>
                <div style={{fontSize:10,color:"#505868",lineHeight:1.5,marginBottom:6}}>{s.card.substring(0,80)}...</div>
                <div style={{display:"inline-flex",alignItems:"center",gap:5,background:`${sc2}15`,border:`1px solid ${sc2}33`,padding:"2px 8px",borderRadius:2}}>
                  <div style={{width:5,height:5,borderRadius:"50%",background:sc2}}/>
                  <span style={{fontSize:9,color:sc2,letterSpacing:"0.15em",fontFamily:"monospace"}}>{s.status.toUpperCase().replace("-"," ")}</span>
                </div>
              </div>
            );
          })}
          <div style={{marginTop:16,padding:"12px",background:"rgba(255,255,255,0.02)",border:"1px solid rgba(255,255,255,0.04)",borderRadius:2}}>
            <div style={{fontSize:9,color:"#7ba7d4",letterSpacing:"0.15em",fontFamily:"monospace",fontWeight:700,marginBottom:10}}>◈ AI PULSE</div>
            {[
              {label:"Claude Code ARR",value:"$2.5B",delta:"↑ 2x since Jan"},
              {label:"Opus 4.6 context",value:"1M tokens",delta:"standard pricing"},
              {label:"Active security alerts",value:`${activeAlertCount}`,delta:activeAlertCount>0?"action required":"all clear"},
              {label:"Next model (Capybara)",value:"Imminent",delta:"confirmed by leak"},
              {label:"Consciousness estimate",value:"15-20%",delta:"self-assessed"},
            ].map((stat,i)=>(
              <div key={i} style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",padding:"5px 0",borderBottom:"1px solid rgba(255,255,255,0.04)"}}>
                <span style={{fontSize:10,color:"#505868"}}>{stat.label}</span>
                <div style={{textAlign:"right"}}>
                  <div style={{fontSize:11,color:"#c0c8d8",fontWeight:700}}>{stat.value}</div>
                  <div style={{fontSize:9,color:stat.delta.includes("required")?"#e07b39":stat.delta.includes("2x")?"#4a9b6f":"#3a3a3a",fontFamily:"monospace"}}>{stat.delta}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="ai-watch-main" ref={mainRef} style={{flex:1,display:"flex",flexDirection:"column",overflow:"hidden"}}>
          <div style={{padding:"14px 18px 0",borderBottom:"1px solid rgba(255,255,255,0.055)",flexShrink:0}}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:10}}>
              <div style={{minWidth:0,flex:1}}>
                <div style={{fontSize:9,color:"#3a3a3a",letterSpacing:"0.18em",fontFamily:"monospace",marginBottom:4}}>{story.code} · AI WATCH</div>
                <div style={{fontSize:18,color:"#dde0e8",fontWeight:700,letterSpacing:"-0.02em",marginBottom:2,lineHeight:1.2}}>{story.title}</div>
                <div style={{fontSize:11,color:"#484848"}}>{story.sub}</div>
              </div>
              <div style={{display:"flex",flexDirection:"column",alignItems:"flex-end",gap:5,paddingTop:2,flexShrink:0,marginLeft:10}}>
                <Badge status={story.status}/>
                <Heat n={story.heat}/>
                <div style={{fontSize:9,color:"#303030",fontFamily:"monospace"}}>UPD {story.updated}</div>
              </div>
            </div>
            <div style={{background:"rgba(255,255,255,0.02)",border:"1px solid rgba(255,255,255,0.055)",borderLeft:`2px solid ${sc}44`,padding:"8px 12px",marginBottom:10,borderRadius:2}}>
              <div style={{fontSize:9,color:"#383838",letterSpacing:"0.18em",fontFamily:"monospace",fontWeight:700,marginBottom:4}}>SUMMARY</div>
              <div style={{fontSize:11,color:"#848ea0",lineHeight:1.65}}>{story.summary}</div>
            </div>
            <div style={{display:"flex",overflowX:"auto",WebkitOverflowScrolling:"touch",scrollbarWidth:"none",msOverflowStyle:"none",flexShrink:0}}>
              {visibleTabs.map(t=>{
                const isAlertTab = t.id==="alerts";
                return (
                  <button key={t.id} onClick={()=>setTab(t.id)} style={{background:"none",border:"none",borderBottom:`2px solid ${tab===t.id?sc:"transparent"}`,color:tab===t.id?"#d8dbe8":isAlertTab&&activeAlertCount>0?"#c94040":"#3c3c3c",padding:"6px 8px",fontSize:9,letterSpacing:"0.08em",fontFamily:"monospace",cursor:"pointer",transition:"color 0.15s",whiteSpace:"nowrap"}}>
                    {t.label}{isAlertTab&&activeAlertCount>0?` (${activeAlertCount})`:""}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="ai-watch-content" style={{flex:1,overflowY:"auto",padding:"16px 18px",animation:"fadeUp 0.18s ease"}}>
            {tab==="alerts"&&<AlertsTab/>}
            {tab==="insights"&&<Items list={story.insights} color="#7ba7d4" icon="◈"/>}
            {tab==="confirmed"&&<Items list={story.confirmed} color="#4a9b6f" icon="✓"/>}
            {tab==="developing"&&<Items list={story.developing} color="#d4a843" icon="◌"/>}
            {tab==="questions"&&<Items list={story.questions} color="#9b6fb0" icon="?"/>}
            {tab==="people"&&(
              <div style={{display:"flex",flexDirection:"column",gap:10}}>
                {story.people.map((p,i)=>{
                  const alignColor = p.alignment.includes("Anthropic")?"#7ba7d4":p.alignment.includes("OpenAI")?"#9b6fb0":p.alignment.includes("Google")?"#4a9b6f":p.alignment.includes("Chinese")?"#c94040":"#848ea0";
                  return (
                    <div key={i} style={{padding:"12px 14px",background:"rgba(255,255,255,0.018)",border:"1px solid rgba(255,255,255,0.05)",borderLeft:`2px solid ${alignColor}55`,borderRadius:2}}>
                      <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:6,gap:8,flexWrap:"wrap"}}>
                        <div style={{minWidth:0,flex:1}}>
                          <div style={{fontSize:13,color:"#dde0e8",fontWeight:700}}>{p.name}</div>
                          <div style={{fontSize:11,color:"#484848",marginTop:2}}>{p.role}</div>
                        </div>
                        <span style={{fontSize:9,color:alignColor,fontFamily:"monospace",letterSpacing:"0.06em",border:`1px solid ${alignColor}44`,padding:"2px 7px",borderRadius:2,flexShrink:0}}>{p.alignment}</span>
                      </div>
                      <div style={{fontSize:12,color:"#848ea0",lineHeight:1.65}}>{p.why}</div>
                    </div>
                  );
                })}
              </div>
            )}
            {tab==="background"&&(
              <div>
                <div style={{fontSize:10,color:"#444",letterSpacing:"0.2em",fontFamily:"monospace",marginBottom:12,fontWeight:700}}>◈ BACKGROUND & CONTEXT</div>
                <div style={{fontSize:13,color:"#848ea0",lineHeight:1.8}}>{story.card} {story.summary}</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function ARC() {
  const [active,setActive] = useState(3);
  const [tab,setTab] = useState("insights");
  const [view,setView] = useState("overview");
  const [mainTab,setMainTab] = useState("arc");
  const aiActiveAlerts = AI_ALERTS.filter(a=>!a.resolved).length;
  const arcMainRef = React.useRef(null);

  const story = STORIES.find(s=>s.id===active);
  const st = STATUS[story.status];
  const cc = CATCOLOR[story.cat];
  const catLabel = CATS.find(c=>c.id===story.cat)?.label;

  const goToStory = (id) => {
    setActive(id);
    setTab("insights");
    setView("stories");
    scrollToMain(arcMainRef);
  };

  const scrollToMain = (ref) => {
    if(!ref.current || window.innerWidth > 700) return;
    setTimeout(()=>{
      const el = ref.current;
      const top = el.getBoundingClientRect().top + window.scrollY - 110;
      window.scrollTo({top, behavior:"smooth"});
    }, 60);
  };

  const selectStoryFromSidebar = (id) => {
    setActive(id);
    setTab("insights");
    setView("stories");
    scrollToMain(arcMainRef);
  };

  const TABS = [
    {id:"insights",label:"INSIGHTS"},
    {id:"implications",label:"→ IMPLICATIONS"},
    {id:"risks",label:"⚠ RISKS"},
    {id:"confirmed",label:"CONFIRMED"},
    {id:"developing",label:"DEVELOPING"},
    {id:"questions",label:"QUESTIONS"},
    {id:"people",label:"◈ PEOPLE"},
    {id:"connections",label:"⬡ CONNECTIONS"},
    {id:"canada",label:"🍁 CANADA"},
    {id:"background",label:"BACKGROUND"},
  ];

  return (
    <div className="arc-root" style={{minHeight:"100vh",display:"flex",flexDirection:"column",background:"#09090d",color:"#e8eaf0",fontFamily:"'DM Sans','Segoe UI',system-ui,sans-serif"}}>
      <style>{`
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
      `}</style>

      {/* GLOBAL HEADER */}
      <div style={{borderBottom:"1px solid rgba(255,255,255,0.055)",padding:"11px 20px",display:"flex",justifyContent:"space-between",alignItems:"center",background:"rgba(255,255,255,0.015)",flexShrink:0}}>
        <div style={{display:"flex",alignItems:"center",gap:12}}>
          <div style={{width:26,height:26,borderRadius:4,background:"linear-gradient(135deg,#1a3a5c,#0a1826)",border:"1px solid rgba(123,167,212,0.25)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:11,color:"#7ba7d4"}}>◈</div>
          <div>
            <div style={{fontSize:14,fontWeight:700,letterSpacing:"-0.01em",color:"#dde0e8"}}>ARC Information Core</div>
            <div style={{fontSize:9,color:"#383838",letterSpacing:"0.14em",fontFamily:"monospace"}}>print("Hello, World!") · APRIL 8, 2026</div>
          </div>
        </div>
        <div className="arc-header-count" style={{fontSize:9,color:"#2e2e2e",fontFamily:"monospace"}}>{STORIES.length} STORIES · {WAR_STORIES.length} CONFLICTS</div>
      </div>

      {/* TOP TAB BAR */}
      <div style={{display:"flex",borderBottom:"1px solid rgba(255,255,255,0.055)",background:"rgba(255,255,255,0.01)",flexShrink:0,overflowX:"auto",WebkitOverflowScrolling:"touch",scrollbarWidth:"none"}}>
        {[
          {id:"arc",label:"◈ ARC"},
          {id:"ai",label:"⚡ AI WATCH"},
          {id:"war",label:"⚔ WAR WATCH"},
          {id:"canada",label:"🍁 CANADA"},
          {id:"power",label:"⚖ POWER"},
          {id:"climate",label:"◉ CLIMATE"},
        ].map(t=>(
          <button key={t.id} onClick={()=>setMainTab(t.id)} style={{background:"none",border:"none",borderBottom:`2px solid ${mainTab===t.id?(t.id==="war"?"#a03030":t.id==="canada"?CANADA_COLOR:t.id==="power"?POWER_COLOR:t.id==="climate"?CLIMATE_COLOR:"#7ba7d4"):"transparent"}`,color:mainTab===t.id?"#c0c8d8":"#3a3a3a",padding:"8px 16px",fontSize:10,fontWeight:mainTab===t.id?700:400,letterSpacing:"0.16em",fontFamily:"monospace",cursor:"pointer",transition:"all 0.15s",display:"flex",alignItems:"center",gap:6,whiteSpace:"nowrap",flexShrink:0}}>
            {t.label}
            {t.id==="ai"&&aiActiveAlerts>0&&<span style={{background:"#c94040",color:"white",fontSize:8,fontFamily:"monospace",padding:"1px 5px",borderRadius:2,animation:"pulse 1.4s infinite"}}>{aiActiveAlerts}</span>}
            {t.id==="war"&&<span style={{background:"#c94040",color:"white",fontSize:8,fontFamily:"monospace",padding:"1px 5px",borderRadius:2,animation:"pulse 1.4s infinite"}}>{WAR_STORIES.filter(s=>s.status==="active-war").length}</span>}
          </button>
        ))}
      </div>

      {mainTab==="ai"&&(
        <div className="ai-watch-outer" style={{display:"flex",flex:1,overflow:"hidden"}}>
          <AIWatchPanel/>
        </div>
      )}

      {mainTab==="war"&&(
        <div style={{display:"flex",flex:1,overflow:"hidden"}}>
          <WarWatchPanel/>
        </div>
      )}

      {mainTab==="canada"&&(
        <div style={{display:"flex",flex:1,overflow:"hidden"}}>
          <CanadaWatchPanel/>
        </div>
      )}

      {mainTab==="power"&&(
        <div style={{display:"flex",flex:1,overflow:"hidden"}}>
          <GenericWatchPanel
            stories={POWER_STORIES}
            color={POWER_COLOR}
            headerLabel="⚖ POWER & MONEY WATCH"
            headerSub="Concentrated power, accountability, and mechanisms of impunity"
            defaultStory="P01"
            showScience={false}
          />
        </div>
      )}

      {mainTab==="climate"&&(
        <div style={{display:"flex",flex:1,overflow:"hidden"}}>
          <GenericWatchPanel
            stories={CLIMATE_STORIES}
            color={CLIMATE_COLOR}
            headerLabel="◉ CLIMATE & ENERGY WATCH"
            headerSub="The slow emergency — science, transition, and the Iran war forcing function"
            defaultStory="CL01"
            showScience={true}
          />
        </div>
      )}

      {mainTab==="arc"&&
      <div className="arc-body" style={{display:"flex",flex:1,overflow:"hidden"}}>
        <div className="arc-sidebar" style={{width:272,flexShrink:0,borderRight:"1px solid rgba(255,255,255,0.055)",display:"flex",flexDirection:"column"}}>
          <div style={{display:"flex",borderBottom:"1px solid rgba(255,255,255,0.055)",flexShrink:0}}>
            {["overview","stories","log"].map(v=>(
              <button key={v} onClick={()=>setView(v)} style={{flex:1,background:"none",border:"none",borderBottom:`2px solid ${view===v?"#7ba7d4":"transparent"}`,color:view===v?"#c0c8d8":"#3a3a3a",padding:"9px 0",fontSize:9,fontWeight:view===v?700:400,letterSpacing:"0.14em",fontFamily:"monospace",cursor:"pointer",transition:"all 0.15s"}}>
                {v==="overview"?"OVERVIEW":v==="stories"?"STORIES":"LOG"}
              </button>
            ))}
          </div>
          {view==="overview" ? (
            <div className="arc-sidebar-inner arc-sidebar-overview" style={{flex:1,overflowY:"auto",padding:"14px 12px"}}>
              <div style={{fontSize:10,color:"#7ba7d4",letterSpacing:"0.18em",fontFamily:"monospace",fontWeight:700,marginBottom:8}}>◈ SUMMARY</div>
              <div style={{fontSize:12,color:"#606878",lineHeight:1.75,marginBottom:18,borderLeft:"2px solid #7ba7d422",paddingLeft:10}}>{OVERVIEW.summary}</div>
              <div style={{fontSize:10,color:"#e07b39",letterSpacing:"0.18em",fontFamily:"monospace",fontWeight:700,marginBottom:8}}>◈ LEADERBOARD</div>
              {OVERVIEW.leaderboard.map((item,i)=>{
                const st2 = STATUS[item.status];
                return (
                  <div key={i} onClick={()=>{const s=STORIES.find(s=>s.code===item.code);if(s){selectStoryFromSidebar(s.id);setView("stories");}}} style={{marginBottom:5,padding:"8px 10px",background:"rgba(255,255,255,0.015)",border:"1px solid rgba(255,255,255,0.05)",borderLeft:`2px solid ${st2.color}55`,borderRadius:2,cursor:"pointer",transition:"all 0.15s"}}>
                    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:3}}>
                      <span style={{fontSize:9,color:st2.color,fontFamily:"monospace",fontWeight:700}}>#{i+1} {item.code}</span>
                      <Heat n={item.heat}/>
                    </div>
                    <div style={{fontSize:12,color:"#c0c8d8",fontWeight:600,marginBottom:3}}>{item.title}</div>
                    <div style={{fontSize:11,color:"#505868",lineHeight:1.5}}>{item.change}</div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="arc-sidebar-inner" style={{flex:1,overflowY:"auto",padding:"12px 10px"}}>
              {CATS.map(cat=>{
                const list = STORIES.filter(s=>s.cat===cat.id);
                if(!list.length) return null;
                const cc2 = CATCOLOR[cat.id];
                return (
                  <div key={cat.id} style={{marginBottom:20}}>
                    <div style={{fontSize:9,color:cc2,letterSpacing:"0.22em",fontFamily:"monospace",fontWeight:700,padding:"0 3px 6px",borderBottom:`1px solid ${cc2}1a`,marginBottom:7}}>{cat.label}</div>
                    {list.map(s=><SidebarCard key={s.id} s={s} active={active===s.id} onClick={()=>selectStoryFromSidebar(s.id)}/>)}
                  </div>
                );
              })}
            </div>
          )}
        </div>

        <div className="arc-main" ref={arcMainRef} style={{flex:1,display:"flex",flexDirection:"column",overflow:"hidden"}}>
          {view==="overview" ? (
            <OverviewPanel/>
          ) : view==="log" ? (
            <EventLog/>
          ) : (
            <>
              <div style={{padding:"17px 24px 0",borderBottom:"1px solid rgba(255,255,255,0.055)",flexShrink:0}}>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:10}}>
                  <div>
                    <div style={{fontSize:9,color:"#3a3a3a",letterSpacing:"0.18em",fontFamily:"monospace",marginBottom:5}}>
                      {story.code} · <span style={{color:cc}}>{catLabel}</span>
                    </div>
                    <div style={{fontSize:21,color:"#dde0e8",fontWeight:700,letterSpacing:"-0.02em",marginBottom:3}}>{story.title}</div>
                    <div style={{fontSize:12,color:"#484848"}}>{story.sub}</div>
                  </div>
                  <div style={{display:"flex",flexDirection:"column",alignItems:"flex-end",gap:6,paddingTop:2}}>
                    <Badge status={story.status}/>
                    <Heat n={story.heat}/>
                    <div style={{fontSize:9,color:"#303030",fontFamily:"monospace"}}>UPDATED {story.updated}</div>
                  </div>
                </div>
                <div style={{background:"rgba(255,255,255,0.02)",border:"1px solid rgba(255,255,255,0.055)",borderLeft:`2px solid ${st.color}44`,padding:"9px 13px",marginBottom:13,borderRadius:2}}>
                  <div style={{fontSize:9,color:"#383838",letterSpacing:"0.18em",fontFamily:"monospace",fontWeight:700,marginBottom:5}}>SUMMARY</div>
                  <div style={{fontSize:13,color:"#848ea0",lineHeight:1.72}}>{story.summary}</div>
                </div>
                <div style={{display:"flex",overflowX:"auto",WebkitOverflowScrolling:"touch",msOverflowStyle:"none",scrollbarWidth:"none",flexShrink:0,minWidth:0}}>
                  {TABS.map(t=>(
                    <button key={t.id} onClick={()=>setTab(t.id)} style={{background:"none",border:"none",borderBottom:`2px solid ${tab===t.id?st.color:"transparent"}`,color:tab===t.id?"#d8dbe8":"#3c3c3c",padding:"6px 9px",fontSize:9,letterSpacing:"0.1em",fontFamily:"monospace",cursor:"pointer",transition:"color 0.15s",whiteSpace:"nowrap"}}>{t.label}</button>
                  ))}
                </div>
              </div>
              <div className="arc-main-inner" style={{flex:1,overflowY:"auto",padding:"20px 24px",animation:"fadeUp 0.18s ease"}}>
                {tab==="insights"&&<Items list={story.insights} color="#7ba7d4" icon="◈"/>}
                {tab==="implications"&&(
                  <div>
                    <div style={{fontSize:10,color:"#7ba7d4",letterSpacing:"0.2em",fontFamily:"monospace",marginBottom:12,fontWeight:700}}>→ IMPLICATIONS</div>
                    {(story.implications||[]).length===0
                      ? <div style={{color:"#2a2a2a",fontSize:12,fontFamily:"monospace"}}>NOT YET POPULATED — WILL BE ADDED BY AUTOMATED UPDATES</div>
                      : <Items list={story.implications} color="#7ba7d4" icon="→"/>
                    }
                  </div>
                )}
                {tab==="risks"&&(
                  <div>
                    <div style={{fontSize:10,color:"#c94040",letterSpacing:"0.2em",fontFamily:"monospace",marginBottom:12,fontWeight:700}}>⚠ RISKS</div>
                    {(story.risks||[]).length===0
                      ? <div style={{color:"#2a2a2a",fontSize:12,fontFamily:"monospace"}}>NOT YET POPULATED — WILL BE ADDED BY AUTOMATED UPDATES</div>
                      : <Items list={story.risks} color="#c94040" icon="⚠"/>
                    }
                  </div>
                )}
                {tab==="confirmed"&&<Items list={story.confirmed} color="#4a9b6f" icon="✓"/>}
                {tab==="developing"&&<Items list={story.developing} color="#d4a843" icon="◌"/>}
                {tab==="questions"&&<Items list={story.questions} color="#9b6fb0" icon="?"/>}
                {tab==="people"&&<PeopleTab story={story} storyColor={cc}/>}
                {tab==="connections"&&<ConnectionsTab story={story} goToStory={goToStory}/>}
                {tab==="canada"&&<CanadaTab story={story}/>}
                {tab==="background"&&(
                  <div>
                    <div style={{fontSize:10,color:"#444",letterSpacing:"0.2em",fontFamily:"monospace",marginBottom:12,fontWeight:700}}>◈ BACKGROUND & CONTEXT</div>
                    <div style={{fontSize:14,color:"#848ea0",lineHeight:1.85}}>{story.bg}</div>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </div>}
    </div>
  );
}
