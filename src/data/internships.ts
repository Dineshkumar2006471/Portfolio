export interface Internship {
  id: string;
  number: string;
  company: string;
  role: string;
  period: string;
  location: string;
  logo: string;
  logoContainerClass: string;
  category: string;
  summary: string;
  whatIWorkedOn: string[];
  whatILearned: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export const internships: Internship[] = [
  {
    id: "unified-mentor",
    number: "01",
    company: "Unified Mentor",
    role: "Full Stack Developer Intern",
    period: "Aug 2025 – Nov 2025",
    location: "Remote / Virtual",
    logo: "/assets/logos/unified-mentor-official.png",
    logoContainerClass: "w-[170px] sm:w-[190px] h-[64px] sm:h-[72px]",
    category: "Full-Stack Web Architecture",
    featured: true,
    summary:
      "Built production-ready web applications, engineered responsive full-stack features, and developed robust RESTful APIs connecting relational and document databases.",
    whatIWorkedOn: [
      "Designed and implemented end-to-end full stack architecture using React, Node.js, Express, and MongoDB.",
      "Built secure REST APIs, authentication pipelines, and structured modular state management.",
      "Optimized frontend component rendering and responsiveness across desktop and mobile form factors.",
      "Collaborated in Agile code reviews, API integrations, and bug triage cycles.",
    ],
    whatILearned:
      "Mastered clean architectural separation between presentation layers and backend services, standardizing robust error handling and database index optimization.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "JavaScript", "Tailwind CSS", "REST APIs"],
    liveUrl: "https://www.unifiedmentor.com",
    githubUrl: "https://github.com/Dineshkumar2006471",
  },
  {
    id: "bluestock-fintech",
    number: "02",
    company: "Bluestock Fintech",
    role: "Software Development Intern",
    period: "Nov 2025 – Dec 2025",
    location: "Pune, India (Hybrid)",
    logo: "/assets/logos/bluestock-official.png",
    logoContainerClass: "w-[190px] sm:w-[220px] h-[52px] sm:h-[60px]",
    category: "FinTech & Real-Time Analytics",
    featured: true,
    summary:
      "Engineered fintech software modules, real-time analytics data pipelines, and stock market simulation tools with strict financial accuracy and sub-second calculation latency.",
    whatIWorkedOn: [
      "Developed modular financial analytics services handling high-frequency stock metrics and market data.",
      "Integrated interactive charting and stock data visualization interfaces using React, TypeScript, and Tailwind CSS.",
      "Designed backend microservices and schema validations for financial risk calculations and trade logging.",
      "Implemented rigorous unit testing and API validation layers to safeguard transactional accuracy.",
    ],
    whatILearned:
      "Deepened practical understanding of deterministic numeric precision, real-time data throttling, and building resilient UI under volatile market conditions.",
    technologies: ["Python", "React", "TypeScript", "Fintech APIs", "PostgreSQL", "Node.js"],
    liveUrl: "https://bluestock.in",
    githubUrl: "https://github.com/Dineshkumar2006471",
  },
  {
    id: "infosys-springboard",
    number: "03",
    company: "Infosys Springboard",
    role: "AI Intern",
    period: "Jun 2026 – Aug 2026",
    location: "Bengaluru, India (Virtual)",
    logo: "/assets/logos/infosys-springboard-official.png",
    logoContainerClass: "w-[115px] sm:w-[130px] h-[75px] sm:h-[85px]",
    category: "Corporate AI & Career Intelligence",
    featured: true,
    summary:
      "Engineered CareerSpark — an enterprise-grade AI-powered career workspace featuring proctored technical certification exams, ATS resume scoring algorithms, and dynamic engineering roadmap recommendations.",
    whatIWorkedOn: [
      "Architected CareerSpark's full-stack AI system using React, Node.js, and cloud services under industry mentorship.",
      "Developed an NLP-driven resume parser and scoring model evaluating candidate profiles against enterprise job benchmarks.",
      "Engineered proctored assessment modules with automated skill verification tests and fraud-prevention telemetry.",
      "Constructed dynamic learning pathway engines delivering personalized roadmaps based on skill gap analysis.",
    ],
    whatILearned:
      "Gained hands-on experience building for enterprise scale, understanding strict reliability requirements, and designing intuitive student-first UI flows under senior corporate mentorship.",
    technologies: ["AI/ML", "NLP", "React", "Node.js", "PostgreSQL", "Cloud", "CareerSpark"],
    liveUrl: "https://career-spark-ashy.vercel.app",
    githubUrl: "https://github.com/Dineshkumar2006471/Career-Spark",
  },
  {
    id: "1m1b",
    number: "04",
    company: "1M1B (1 Million For 1 Billion)",
    role: "Green Skills & Applied AI Intern",
    period: "Oct 2026 – Present",
    location: "New Delhi / Bengaluru (Hybrid)",
    logo: "/assets/logos/1m1b-official.png",
    logoContainerClass: "w-[80px] sm:w-[90px] h-[75px] sm:h-[85px]",
    category: "Applied AI & Sustainability",
    featured: true,
    summary:
      "Applying generative AI workflows and computational data analysis to address sustainability metrics, green skills training, and eco-impact measurement under UN Sustainable Development Goals.",
    whatIWorkedOn: [
      "Spearheaded research and practical application of LLMs and generative agents for sustainability and environmental literacy.",
      "Architected data visualization models tracking carbon-neutral competencies and green industry skill transitions.",
      "Constructed conversational AI tooling to educate youth builders on actionable climate tech and AI ethics.",
      "Synthesized qualitative impact metrics across pilot cohorts to present evidence-backed green skills findings.",
    ],
    whatILearned:
      "Learned how to align deep technical capabilities with tangible societal and environmental impact, designing trustworthy AI interfaces for diverse global communities.",
    technologies: ["Applied AI", "Green Skills", "Python", "Data Analytics", "GenAI", "SDGs"],
    liveUrl: "https://1m1b.org",
    githubUrl: "https://github.com/Dineshkumar2006471",
  },
];
