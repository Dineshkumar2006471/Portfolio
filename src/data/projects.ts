export interface Project {
  id: string;
  number: string;
  title: string;
  tagline: string;
  oneLiner: string;
  description?: string;
  whatItIs: string;
  whyIBuiltIt: string;
  workflowSteps?: { step: string; label: string }[];
  role: string;
  stack: string[];
  year: string;
  image: string;
  category: string;
  featured: boolean;
  liveUrl?: string;
  githubUrl?: string;
}

export const pinnedProjects: Project[] = [
  {
    id: "agentproof",
    number: "01",
    title: "AgentProof",
    tagline: "You claim it works — prove it.",
    oneLiner: "Verification infrastructure layer for autonomous AI agents.",
    whatItIs:
      "A developer verification layer that converts fuzzy natural-language promises into formal executable contracts, then automatically runs adversarial test suites to prove whether an agent reliably keeps them. 15 tests. 15 passed. 0 critical findings.",
    whyIBuiltIt:
      "AI benchmarks measure generic test scores, but enterprise users need deterministic guarantees. I built AgentProof to replace vague benchmark scores with cryptographically provable execution evidence before agents ship to customers.",
    workflowSteps: [
      { step: "01", label: "PROMISES" },
      { step: "02", label: "CONTRACTS" },
      { step: "03", label: "EXECUTABLE TESTS" },
      { step: "04", label: "EVIDENCE" },
      { step: "05", label: "VERIFICATION" },
    ],
    role: "Solo Architect & Builder",
    stack: ["AI Agents", "Python", "React", "TypeScript", "FastAPI", "Verification"],
    year: "2026",
    image: "/assets/projects/Agentproof.png",
    category: "AI Infrastructure",
    featured: true,
    githubUrl: "https://github.com/Dineshkumar2006471/AgentProof",
    liveUrl: "#",
  },
  {
    id: "intelliasha",
    number: "02",
    title: "IntelliASHA",
    tagline: "Digitizing and verifying last-mile healthcare field visits.",
    oneLiner: "Multi-agent field verification system for India's ASHA workers.",
    whatItIs:
      "A multi-agent AI system to digitize and verify field visits for India's ASHA workers 👩‍⚕️, the backbone of last-mile healthcare who still operate with almost no digital verification layer. Awarded 1st Place at the Grand Finale at Google Office, Bengaluru.",
    whyIBuiltIt:
      "Over a million ASHA workers perform essential doorstep maternal, neonatal, and primary healthcare across rural India with manual paper registers. IntelliASHA replaces manual logging with autonomous voice-first reporting, tamper-proof location verification, and real-time clinical escalations.",
    role: "Lead Systems Architect (1st Place @ Google Office)",
    stack: ["AI Agents", "Python", "FastAPI", "React", "Voice AI", "Healthcare"],
    year: "2026",
    image: "/assets/projects/Intelliasha.png",
    category: "Healthcare AI",
    featured: true,
    liveUrl: "https://github.com/Dineshkumar2006471/IntelliASHA",
    githubUrl: "https://github.com/Dineshkumar2006471/IntelliASHA",
  },
  {
    id: "cropsentinel",
    number: "03",
    title: "CropSentinel",
    tagline: "Don't guess the price. Know your market.",
    oneLiner: "AI-driven agricultural price intelligence & mandi analytics platform.",
    whatItIs:
      "Empowers Indian farmers with real-time mandi price tracking, historical commodity trends, predictive sell-or-wait signals, and multi-market distance comparisons — delivered in regional Indian languages.",
    whyIBuiltIt:
      "Middlemen exploit information asymmetry, buying produce from farmers below fair value. CropSentinel gives smallholder farmers the same pricing intelligence as large institutional buyers.",
    role: "Full-Stack Developer",
    stack: ["React", "Node.js", "Python", "AI/ML", "FastAPI", "MongoDB"],
    year: "2026",
    image: "/assets/projects/cropsentinel.png",
    category: "AgriTech",
    featured: true,
    githubUrl: "https://github.com/Dineshkumar2006471/CropSentinel",
    liveUrl: "#",
  },
  {
    id: "dealforge",
    number: "04",
    title: "DealForge",
    tagline: "Close more deals. Without losing control.",
    oneLiner: "Autonomous revenue agent for policy-compliant sales conversations.",
    whatItIs:
      "A controlled autonomous sales copilot that conducts real-time client conversations, negotiates pricing within strict pre-defined business policy guardrails, and triggers automated tool execution across CRM systems.",
    whyIBuiltIt:
      "Most sales bots either hallucinate discounts or provide frustrating canned responses. DealForge combines conversational reasoning with deterministic boundary enforcement.",
    role: "Lead Builder",
    stack: ["AI Agents", "React", "TypeScript", "Node.js", "Voice AI"],
    year: "2026",
    image: "/assets/projects/Dealforge.png",
    category: "SalesTech",
    featured: true,
    githubUrl: "https://github.com/Dineshkumar2006471/DealForge",
    liveUrl: "#",
  },
  {
    id: "intelliplant",
    number: "05",
    title: "IntelliPlant",
    tagline: "Your plant's industrial intelligence copilot.",
    oneLiner: "Knowledge graph copilot unifying scattered industrial engineering documents.",
    whatItIs:
      "Industrial Intelligence copilot that indexes engineering manuals, P&ID diagrams, and maintenance logs into one connected, queryable knowledge graph for factory operators.",
    whyIBuiltIt:
      "Critical downtime in manufacturing plants frequently occurs because operators spend hours searching through PDF binders. IntelliPlant turns paper diagrams into interactive conversational answers.",
    role: "Full-Stack Developer",
    stack: ["Knowledge Graph", "AI/ML", "React", "Node.js", "TypeScript"],
    year: "2026",
    image: "/assets/projects/intelliplant.png",
    category: "Industrial AI",
    featured: true,
    githubUrl: "https://github.com/Dineshkumar2006471/Intelliplant",
    liveUrl: "https://intelliplant.vercel.app",
  },
  {
    id: "medoveda",
    number: "06",
    title: "MedoVeda",
    tagline: "Know what you eat.",
    oneLiner: "Consumer health intelligence analyzing packaged food and marketing claims.",
    whatItIs:
      "Health intelligence platform that parses ingredient labels on packaged foods, cross-references clinical safety databases, exposes misleading health claims, and provides personalized intake advisories powered by an Anthropic Claude multi-agent pipeline.",
    whyIBuiltIt:
      "Packaged foods hide ultra-processed sugars and preservatives behind misleading front-of-pack claims. MedoVeda gives consumers scientific clarity on what they put into their bodies.",
    role: "Full-Stack Developer",
    stack: ["React", "Anthropic Claude", "AI/ML", "Node.js", "Computer Vision"],
    year: "2026",
    image: "/assets/projects/medoveda.png",
    category: "HealthTech",
    featured: true,
    githubUrl: "https://github.com/Dineshkumar2006471/Medo-veda",
    liveUrl: "#",
  },
  {
    id: "career-spark",
    number: "07",
    title: "CareerSpark",
    tagline: "One workspace to accelerate your tech career.",
    oneLiner: "Infosys Springboard career intelligence platform with proctored certifications.",
    whatItIs:
      "An AI-powered career workspace featuring proctored technical certification exams, ATS resume scoring algorithms, and dynamic engineering roadmap recommendations.",
    whyIBuiltIt:
      "Engineered during the Infosys Springboard internship to bridge the gap between classroom theory and industry job requirements.",
    role: "Full-Stack Developer & Intern",
    stack: ["React", "Node.js", "AI/ML", "PostgreSQL", "Cloud"],
    year: "2026",
    image: "/assets/projects/Career-Spark.png",
    category: "EdTech",
    featured: true,
    githubUrl: "https://github.com/Dineshkumar2006471/Career-Spark",
    liveUrl: "https://career-spark-ashy.vercel.app",
  },
];

export const projects = pinnedProjects;
