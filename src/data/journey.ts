export interface JourneyMilestone {
  phase: string;
  title: string;
  period: string;
  description: string;
  highlights: string[];
}

export const journeyMilestones: JourneyMilestone[] = [
  {
    phase: "CURIOUS",
    title: "The Spark",
    period: "Early Days",
    description:
      "It started with curiosity — tinkering with HTML pages, wondering how the internet actually worked. Every broken layout was a lesson.",
    highlights: [
      "First lines of HTML & CSS",
      "Building static pages",
      "Discovering the browser console",
    ],
  },
  {
    phase: "LEARN",
    title: "Foundations",
    period: "2023 — 2024",
    description:
      "Systematic learning — JavaScript, React, Node.js. Moving from tutorials to building actual things. The gap between watching and doing became clear.",
    highlights: [
      "JavaScript fundamentals",
      "React & component thinking",
      "Backend with Node.js & Express",
      "Database design",
    ],
  },
  {
    phase: "BUILD",
    title: "First Real Projects",
    period: "2024 — 2025",
    description:
      "The transition from learner to builder. Shipping real projects, dealing with real users, solving real problems. Every deployment taught something new.",
    highlights: [
      "Full-stack applications",
      "User-facing products",
      "API design & integration",
      "Cloud deployment basics",
    ],
  },
  {
    phase: "BREAK",
    title: "Into AI/ML",
    period: "2025",
    description:
      "AI changed everything. Suddenly, the systems I was building could think, adapt, and respond. The learning curve was steep but the possibilities were infinite.",
    highlights: [
      "Machine learning fundamentals",
      "AI-103 certification",
      "First AI-powered features",
      "Natural language processing",
    ],
  },
  {
    phase: "ITERATE",
    title: "Cloud & Scale",
    period: "2025 — 2026",
    description:
      "Building locally wasn't enough. Google Cloud, AWS, Azure — learning to deploy, scale, and manage infrastructure became essential to shipping real products.",
    highlights: [
      "Google Cloud Platform",
      "Docker & containerization",
      "Serverless architecture",
      "CI/CD pipelines",
    ],
  },
  {
    phase: "COLLABORATE",
    title: "Open Source & Community",
    period: "2026",
    description:
      "Code isn't written in isolation. Contributing to open source, joining GSSoC & SSoC, reviewing PRs — collaboration made me a better engineer.",
    highlights: [
      "GSSoC '26 contributor",
      "SSoC '26 participant",
      "OSCI involvement",
      "Code reviews & collaboration",
    ],
  },
  {
    phase: "SHIP",
    title: "Hackathons & Products",
    period: "2026",
    description:
      "Hackathons compressed months into hours. Building under pressure — AgentProof, Tidecast, DealForge — each one a masterclass in rapid problem-solving.",
    highlights: [
      "AI Agent Builder Series — 2nd place at Google Office",
      "Spark Hack 2026",
      "Tidecast multi-agent system",
      "AgentProof verification infrastructure",
    ],
  },
  {
    phase: "EXPLORE",
    title: "What's Next",
    period: "Now",
    description:
      "Google Student Ambassador '26. McKinsey Forward Alumni. Still building, still learning. The next chapter is being written right now.",
    highlights: [
      "GSA '26 — reimagining with Gemini",
      "AI agent evaluation systems",
      "Product experimentation",
      "Creative technology",
    ],
  },
];
