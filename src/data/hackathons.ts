export interface HackathonEntry {
  id: string;
  name: string;
  projectBuilt: string;
  roleOrOutcome: string;
  location: string;
  year: string;
  image: string;
  isWinner?: boolean;
  summary: string;
}

export const hackathonsData: HackathonEntry[] = [
  {
    id: "ai-agent-builder-2026",
    name: "AI Agent Builder Series 2026 — Grand Finale",
    projectBuilt: "IntelliASHA",
    roleOrOutcome: "1st Place Winner",
    location: "Google Office, Bengaluru · Google & AI House",
    year: "2026",
    image: "/assets/hackathons/ai-agent-builder-2026.png",
    isWinner: true,
    summary:
      "Awarded 1st Place at the Grand Finale hackathon hosted at Google Office, Bengaluru. Architected IntelliASHA — a multi-agent AI system to digitize and verify field visits for India's ASHA workers 👩‍⚕️, the backbone of last-mile healthcare who still operate with almost no digital verification layer.",
  },
  {
    id: "agentic-premier-league-2026",
    name: "Agentic Premier League 2026",
    projectBuilt: "VenueIQ",
    roleOrOutcome: "Grand Finalist",
    location: "Google Cloud · Gurugram",
    year: "2026",
    image: "/assets/hackathons/agentic-premier-league.png",
    isWinner: false,
    summary:
      "Selected as a Grand Finalist at Google Cloud's Agentic Premier League in Gurugram. Engineered VenueIQ — an AI-powered smart venue intelligence system for cricket stadiums, managing crowd flow, gate logistics, and real-time operations.",
  },
  {
    id: "drophack-2026",
    name: "DropHack 2026 — Grand Finale",
    projectBuilt: "Tidecast",
    roleOrOutcome: "Grand Finalist",
    location: "Paytm Office",
    year: "2026",
    image: "/assets/hackathons/drophack-2026.png",
    isWinner: false,
    summary:
      "Grand Finalist at the Paytm Office hackathon. Built Tidecast — a life-saving multi-agent system delivering real-time cyclone warnings and ocean fishing-zone advisories directly to coastal fishermen in their regional native dialects.",
  },
  {
    id: "tech-spark-2026",
    name: "Tech Spark National Level Hackathon 2026",
    projectBuilt: "MedoVeda",
    roleOrOutcome: "National Finalist",
    location: "Sanskriti University",
    year: "2026",
    image: "/assets/hackathons/tech-spark-2026.png",
    isWinner: false,
    summary:
      "National Finalist at Tech Spark 2026 held at Sanskriti University. Built MedoVeda — an AI health intelligence platform parsing packaged food labels, exposing misleading health claims, and providing clinical nutrition advisories.",
  },
];
