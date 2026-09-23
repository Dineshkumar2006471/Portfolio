export interface Project {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  role: string;
  stack: string[];
  year: string;
  image: string;
  category: string;
  featured: boolean;
  liveUrl?: string;
  githubUrl?: string;
  layout: "takeover" | "split" | "floating" | "oversized" | "vertical" | "horizontal" | "layered";
}

export const projects: Project[] = [
  {
    id: "agentproof",
    number: "01",
    title: "AgentProof",
    tagline: "You claim it works — prove it.",
    description:
      "A verification infrastructure for AI agents. Converts natural-language promises into executable contracts, then proves whether your agent keeps them. 15 tests. 15 passed. 0 failed. 0 critical findings. Proof before score.",
    role: "Solo Builder",
    stack: ["AI Agents", "Testing", "Verification", "Python", "React"],
    year: "2026",
    image: "/assets/projects/Agentproof.png",
    category: "AI Infrastructure",
    featured: true,
    layout: "takeover",
  },
  {
    id: "cropsentinel",
    number: "02",
    title: "CropSentinel",
    tagline: "Don't guess the price. Know your market.",
    description:
      "Empowering Indian farmers with data-driven price intelligence. Real mandi prices, sell-or-wait answers, and market comparisons — in your own language.",
    role: "Full-Stack Developer",
    stack: ["React", "Node.js", "AI/ML", "Data Analytics"],
    year: "2026",
    image: "/assets/projects/cropsentinel.png",
    category: "AgriTech",
    featured: true,
    layout: "split",
  },
  {
    id: "medoveda",
    number: "03",
    title: "MedoVeda",
    tagline: "Know what you eat.",
    description:
      "Analyze ingredients against global health standards with clinical precision. MedoVeda gives you the definitive verdict on every bite — clinical grade intelligence for consumer products.",
    role: "Full-Stack Developer",
    stack: ["React", "AI/ML", "Health Data", "Node.js"],
    year: "2026",
    image: "/assets/projects/medoveda.png",
    category: "HealthTech",
    featured: true,
    layout: "floating",
  },
  {
    id: "dealforge",
    number: "04",
    title: "DealForge",
    tagline: "Close more deals. Without losing control.",
    description:
      "An AI sales agent that qualifies leads using MEDDIC and negotiates within policy guardrails in a single voice call. Configured meetings and CRM actions are verified before completion.",
    role: "Builder",
    stack: ["AI Agents", "Voice AI", "CRM Integration", "React"],
    year: "2026",
    image: "/assets/projects/Dealforge.png",
    category: "SalesTech",
    featured: true,
    layout: "oversized",
  },
  {
    id: "intelliplant",
    number: "05",
    title: "IntelliPlant",
    tagline: "Empowering your plant with industrial intelligence.",
    description:
      "Turn every scattered industrial document, P&ID drawing, and maintenance record into one connected, queryable brain. Don't lose your retiring experts' knowledge.",
    role: "Full-Stack Developer",
    stack: ["Knowledge Graph", "AI/ML", "React", "Node.js"],
    year: "2026",
    image: "/assets/projects/intelliplant.png",
    category: "Industrial AI",
    featured: true,
    layout: "vertical",
  },
  {
    id: "intelliasha",
    number: "06",
    title: "IntelliASHA",
    tagline: "Data verification made easy and fast.",
    description:
      "Monitor and manage rural health visits with real-time AI data capture in 6 regional languages. Replacing manual paperwork for ASHA workers across India.",
    role: "Full-Stack Developer",
    stack: ["React", "AI/ML", "Multilingual", "Mobile"],
    year: "2026",
    image: "/assets/projects/Intelliasha.png",
    category: "HealthTech",
    featured: true,
    layout: "horizontal",
  },
  {
    id: "career-spark",
    number: "07",
    title: "CareerSpark",
    tagline: "One workspace to accelerate your tech career.",
    description:
      "Helps students work faster, smarter, and more efficiently — delivering AI career intelligence, proctored industry certifications, and ATS resume scoring in one calm plan. Built for Infosys Springboard.",
    role: "Full-Stack Developer",
    stack: ["React", "AI/ML", "Career Tech", "Node.js"],
    year: "2026",
    image: "/assets/projects/Career-Spark.png",
    category: "EdTech",
    featured: true,
    layout: "layered",
  },
];

export const archiveProjects = [
  { year: "2026", title: "Tidecast", category: "Multi-Agent System" },
  { year: "2026", title: "Syn-Gov", category: "Governance AI" },
  { year: "2025", title: "Truxify", category: "Logistics" },
  { year: "2025", title: "VenueIQ", category: "Event Tech" },
  { year: "2025", title: "ElectIQ", category: "Civic Tech" },
];
