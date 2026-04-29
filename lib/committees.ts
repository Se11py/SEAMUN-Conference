export interface CommitteeTopic {
    emoji: string;
    text: string;
    diff: string;
}

export interface CommitteeData {
    name: string;
    fullName: string;
    type: string;
    grades: string;
    chairs: string;
    delegates: string;
    metaLabel: string;
    topics: CommitteeTopic[];
    topicNote: string | null;
    allocations: string[];
}

export const LOGOS: Record<string, string> = {
    ecosoc: "/assets/committee-pics/ECOSOC.png",
    press: "/assets/committee-pics/PRESS%20CORP.png",
    unhrc: "/assets/committee-pics/UNHRC.png",
    unodc: "/assets/committee-pics/UNODC.png",
    unsc: "/assets/committee-pics/UNSC.png",
    unwomen: "/assets/committee-pics/UN%20WOMEN.png",
    disec: "/assets/committee-pics/DISEC.png",
    fwc: "/assets/committee-pics/FWC.png",
    interpol: "/assets/committee-pics/INTERPOL.png",
    who: "/assets/committee-pics/WHO.png",
    f1: "/assets/committee-pics/F1.png",
    hsc: "/assets/committee-pics/HSC.png",
};

export const LOGO_IS_FULL: Record<string, boolean> = {
    ecosoc: true,
    fwc: true,
};

export const COMMITTEES: Record<string, CommitteeData> = {
    ecosoc: {
        name: "ECOSOC", fullName: "Economic and Social Council", type: "Traditional", grades: "7–12", chairs: "2", delegates: "22", metaLabel: "Chairs", topics: [
            { emoji: "💰", text: "The Question of Implementing a Globally Coordinated Universal Basic Income (UBI) Programme as a Strategy for Poverty Eradication and Economic Stability", diff: "Beginner" },
            { emoji: "🏥", text: "The Question of Exploring International Mechanisms for Reallocating Military Expenditures Towards the Development and Strengthening of Global Public Health Systems", diff: "Beginner" }
        ], topicNote: null, allocations: ["Bangladesh", "Brazil", "China", "Costa Rica", "Cuba", "Ethiopia", "Finland", "Germany", "India", "Indonesia", "Israel", "Japan", "Norway", "Russia", "Saudi Arabia", "Singapore", "South Africa", "South Korea", "Switzerland", "Thailand", "United States", "Vietnam"]
    },
    press: {
        name: "Press Corps", fullName: "Media", type: "Specialized", grades: "7–12", chairs: "2", delegates: "15", metaLabel: "Editors", topics: [
            { emoji: "📰", text: "The Question of Determining the Circumstances in Which Journalists Can and Should Report on Public Affairs", diff: "Beginner" }
        ], topicNote: null, allocations: ["Al Jazeera", "BBC News", "Bangkok Post", "Deutsche Welle (DW)", "Fox News", "Reuters", "Russia Today", "The Associated Press (AP)", "The Lancet", "The New York Times", "The Onion", "The Straits Times", "Vice News", "Wikileak", "Xinhua News Agency"]
    },
    unhrc: {
        name: "UNHRC", fullName: "United Nations Human Rights Council", type: "Traditional", grades: "9–12", chairs: "2", delegates: "23", metaLabel: "Chairs", topics: [
            { emoji: "☠️", text: "The Question of Promoting the Standardised Regulation of the Death Penalty and Respect for the Right to Life", diff: "Intermediate" },
            { emoji: "🔒", text: "The Question of the Obligation to Prevent Cruel, Inhuman, or Degrading Treatments Arising from Deficiencies in Prison Administrations and Justice Systems", diff: "Intermediate" }
        ], topicNote: null, allocations: ["Brazil", "Canada", "China", "Egypt", "El Salvador", "France", "Germany", "India", "Indonesia", "Iran", "Japan", "Mexico", "Nigeria", "Norway", "Pakistan", "Philippines", "Saudi Arabia", "Singapore", "South Africa", "Thailand", "Turkey", "United States", "Vietnam"]
    },
    unodc: {
        name: "UNODC", fullName: "United Nations Office on Drugs and Crime", type: "Specialized", grades: "9–12", chairs: "2", delegates: "22", metaLabel: "Chairs", topics: [
            { emoji: "⚖️", text: "The Question of Policy Analysis of Alternatives to Conviction and Punishment for Drug Possession for Personal Use", diff: "Intermediate" },
            { emoji: "🌿", text: "The Question of Addressing the Inter-generational Impact of Substance Abuse and Addiction", diff: "Intermediate" }
        ], topicNote: null, allocations: ["Afghanistan", "Australia", "Brazil", "Canada", "China", "Colombia", "Estonia", "India", "Indonesia", "Kenya", "Mexico", "Netherlands", "Philippines", "Portugal", "Russia", "Singapore", "South Africa", "Switzerland", "Thailand", "United States", "Uruguay", "Vietnam"]
    },
    unsc: {
        name: "UNSC (CRISIS)", fullName: "United Nations Security Council", type: "Traditional", grades: "7–12", chairs: "3", delegates: "15", metaLabel: "Chairs", topics: [
            { emoji: "🕊️", text: "The Question of Developing and Standardising Best Practices for Peacekeeping Operations to Ensure Scalable and Sustainable Global Implementation", diff: "Intermediate" }
        ], topicNote: null, allocations: ["Bahrain", "China", "Colombia", "Democratic Republic of the Congo", "Denmark", "France", "Greece", "Latvia", "Liberia", "Pakistan", "Panama", "Russia", "Somalia", "United Kingdom", "United States"]
    },
    unwomen: {
        name: "UN Women", fullName: "United Nations Entity for Gender Equality and the Empowerment of Women", type: "Specialized", grades: "9–12", chairs: "2", delegates: "22", metaLabel: "Chairs", topics: [
            { emoji: "💜", text: "The Question of Affirming and Guaranteeing Women's Reproductive Autonomy by Establishing International Legal Standards on Access to Safe and Legal Abortion", diff: "Intermediate" },
            { emoji: "👶", text: "The Question of Examining the Recognition of Universal Childcare as a Fundamental Human Right and Its Role in Addressing Declining Birth Rates and Supporting Gender Equality in the Workforce", diff: "Intermediate" }
        ], topicNote: null, allocations: ["Argentina", "Canada", "Egypt", "France", "Hungary", "Iceland", "India", "Iran", "Japan", "Kenya", "Malta", "Mexico", "Philippines", "Poland", "Saudi Arabia", "Singapore", "South Africa", "South Korea", "Sweden", "Thailand", "United States", "Vietnam"]
    },
    disec: {
        name: "DISEC", fullName: "Disarmament and International Security Committee", type: "Traditional", grades: "7–12", chairs: "2", delegates: "23", metaLabel: "Chairs", topics: [
            { emoji: "☢️", text: "The Question of Strengthening International Protocols and Logistics for Securing the Cross-Border Transport of Lethal Weapons and Related Materials", diff: "Advanced" },
            { emoji: "🔫", text: "The Question of Developing Mechanisms to Prevent the Diversion of Legally Traded Conventional Arms to Illicit Markets and Non-State Actors", diff: "Advanced" }
        ], topicNote: null, allocations: ["Brazil", "China", "Colombia", "France", "Germany", "India", "Iran", "Israel", "Mexico", "Myanmar", "Nigeria", "Pakistan", "Philippines", "Russia", "Saudi Arabia", "Singapore", "South Africa", "Switzerland", "Thailand", "Turkey", "United Kingdom", "United States", "Vietnam"]
    },
    fwc: {
        name: "FWC (CRISIS)", fullName: "Fantasy World Committee", type: "Fantasy", grades: "9–12", chairs: "2", delegates: "15", metaLabel: "Chairs", topics: [
            { emoji: "🔮", text: "The Question of Preventing Harm Caused by Psychic/Psychokinetic Child Experimentation and Ensuring the Protection and Rehabilitation of Gifted Minors", diff: "Advanced" },
            { emoji: "🧠", text: "The Question of Addressing the Weaponization of the Human Mind and Establishing International Protocols for the Containment and Non-Proliferation of Psychic Technologies", diff: "Advanced" }
        ], topicNote: null, allocations: ["Agent Connie Frazier", "Colonel KGB", "Dr. Arlo Beck", "Dr. Martin Brenner", "Dr. Sam Owens", "Eleven (011/Jane Ives)", "Hawkins School Counsellor", "Henry Creel (001/Vecna)", "Jim Hopper", "Joyce Byers", "Kali Prasad (008)", "Lt. Colonel Jack Sullivan", "Subject 002", "Terry Ives", "Truant Officer"]
    },
    interpol: {
        name: "Interpol", fullName: "International Criminal Police Organization", type: "Specialized", grades: "9–12", chairs: "2", delegates: "22", metaLabel: "Chairs", topics: [
            { emoji: "🏥", text: "The Question of Combating Transnational Organized Crime in Underground Medical Markets and Unregulated Surgical Practices", diff: "Advanced" },
            { emoji: "🌐", text: "The Question of Strengthening Cross-Border Security Frameworks to Mitigate the Nexus of Narcotic Trafficking with a Focus on the Schengen Area and the Golden Triangle", diff: "Advanced" }
        ], topicNote: null, allocations: ["Australia", "Brazil", "China", "Colombia", "France", "Germany", "India", "Israel", "Italy", "Laos", "Mexico", "Myanmar", "Netherlands", "Philippines", "Russia", "South Africa", "Spain", "Thailand", "Turkey", "United Arab Emirates", "United States", "Vietnam"]
    },
    who: {
        name: "WHO", fullName: "World Health Organization", type: "Specialized", grades: "9–12", chairs: "2", delegates: "22", metaLabel: "Chairs", topics: [
            { emoji: "💊", text: "The Question of Examining the Ethical and Regulatory Landscape for the Clinical Use of Psychedelic Drugs in the Treatment of Trauma-Based Mental Health Conditions", diff: "Advanced" },
            { emoji: "🦠", text: "The Question of Examining Measures for Combating, Addressing, and Recovering from Pandemics or Severe Outbreaks", diff: "Advanced" }
        ], topicNote: null, allocations: ["Australia", "Brazil", "Canada", "China", "Ethiopia", "France", "Germany", "India", "Indonesia", "Israel", "Jamaica", "Mexico", "Netherlands", "Norway", "Russia", "Singapore", "South Africa", "Switzerland", "Thailand", "United Kingdom", "United States", "Vietnam"]
    },
    f1: {
        name: "F1 (CRISIS)", fullName: "Formula One Committee", type: "Fantasy", grades: "9–12", chairs: "TBD", delegates: "TBD", metaLabel: "Chairs", topics: [
            { emoji: "🏎️", text: "Agenda to be announced.", diff: "Advanced" }
        ], topicNote: "More details coming soon.", allocations: []
    },
    hsc: {
        name: "HSC (CRISIS)", fullName: "Historical Security Council", type: "Traditional", grades: "9–12", chairs: "TBD", delegates: "TBD", metaLabel: "Chairs", topics: [
            { emoji: "📜", text: "Agenda to be announced.", diff: "Advanced" }
        ], topicNote: "More details coming soon.", allocations: []
    },
};

export const COMMITTEE_CARD_DATA: { id: string; dataGrades: string; dataType: string }[] = [
    { id: "unhrc", dataGrades: "9-12", dataType: "traditional" },
    { id: "disec", dataGrades: "7-12", dataType: "traditional" },
    { id: "unwomen", dataGrades: "9-12", dataType: "specialized" },
    { id: "interpol", dataGrades: "9-12", dataType: "specialized" },
    { id: "press", dataGrades: "7-12", dataType: "specialized" },
    { id: "who", dataGrades: "9-12", dataType: "specialized" },
    { id: "unsc", dataGrades: "7-12", dataType: "traditional" },
    { id: "unodc", dataGrades: "9-12", dataType: "specialized" },
    { id: "ecosoc", dataGrades: "7-12", dataType: "traditional" },
    { id: "fwc", dataGrades: "9-12", dataType: "fantasy" },
    { id: "f1", dataGrades: "9-12", dataType: "fantasy" },
    { id: "hsc", dataGrades: "9-12", dataType: "traditional" },
];
