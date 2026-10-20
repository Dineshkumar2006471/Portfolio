export interface CommunityMembership {
  id: string;
  name: string;
  organization: string;
  role: string;
  period: string;
  location: string;
  badge: string;
  badgeContainerClass: string;
  category: string;
  journeyStage?: string;
  summary: string;
  keyContributions: string[];
}

export interface NetworkingEvent {
  id: string;
  event: string;
  date: string;
  year: string;
  location: string;
  context: string;
  whyIAttended: string;
  whatIConnectedWith: string;
  whatILearned: string;
  image: string;
  caption: string;
  link?: string;
}

export const communityMemberships: CommunityMembership[] = [
  {
    id: "google-student-ambassador",
    name: "Google Student Ambassador Program",
    organization: "Google India · Gemini Student Ambassador",
    role: "Campus Ambassador",
    period: "May 2026 – Present",
    location: "India · Campus & Developer Ecosystem",
    badge: "/assets/networking/google-g-logo.svg",
    badgeContainerClass: "w-[75px] h-[75px]",
    category: "AI Ecosystem & Campus Leadership",
    journeyStage: "Active Ambassador Cohort 2026",
    summary:
      "Selected as a Google Student Ambassador for the 2026 cohort under the Gemini Student Ambassador Program, run by Communique Marketing Solutions in collaboration with Google India. Leading AI campus initiatives, empowering student developers with Gemini multimodal models and Google Cloud developer tools, and organizing builder communities.",
    keyContributions: [
      "Spearheading campus developer initiatives on Gemini multimodal APIs and Google Cloud deployment workflows.",
      "Fostering collegiate AI builder communities, organizing technical workshops and prompt architecture sessions.",
      "Representing student builders at official Google technology summits and cloud conferences.",
    ],
  },
  {
    id: "mckinsey-forward",
    name: "Forward Program",
    organization: "McKinsey & Company",
    role: "Forward Learner ➔ Forward Network Alumni",
    period: "2023 – Jun 2026 (Issued Jun 2026)",
    location: "Global Digital Network",
    badge: "/assets/networking/mckinsey-forward-badge.png",
    badgeContainerClass: "w-[75px] h-[75px]",
    category: "Executive Leadership & Problem Solving",
    journeyStage: "Forward Learner (2023) ➔ Forward Network Alumni (Issued Jun 2026)",
    summary:
      "First joined as a Forward Learner in 2023, advancing through McKinsey & Company's flagship leadership development program to graduate and become an active Forward Network Alumni in June 2026. Mastered structured business problem-solving, digital communication, adaptable leadership, and collaborative execution under McKinsey's global framework.",
    keyContributions: [
      "Advanced across all program stages from foundational Forward Learner to verified Forward Network Alumni status.",
      "Mastered structured hypothesis-driven problem-solving and executive communication frameworks.",
      "Collaborated in cross-functional peer cohorts analyzing global digital strategy and organizational agility.",
    ],
  },
];

export const networkingEvents: NetworkingEvent[] = [
  {
    id: "india-ai-impact-summit",
    event: "India AI Impact Summit",
    date: "2026",
    year: "2026",
    location: "New Delhi, India",
    context:
      "A national-level summit convening key policymakers, research pioneers, and enterprise technology executives to define India's sovereign AI roadmap.",
    whyIAttended:
      "To understand how national policy, frontier AI infrastructure, and grassroots student innovation intersect, and how Google is supporting sovereign AI initiatives in India.",
    whatIConnectedWith:
      "Connected with AI research leaders, policy fellows, and startup founders deploying generative AI across healthcare and governance.",
    whatILearned:
      "The greatest impact of AI in India won't be incremental productivity in Silicon Valley; it will be solving foundational challenges in healthcare, vernacular access, and agricultural supply chains.",
    image: "/assets/events/summit-sundar-pichai.jpeg",
    caption: "At the India AI Impact Summit — Witnessing the national vision for sovereign AI",
  },
  {
    id: "google-cloud-summit",
    event: "Google Cloud Summit",
    date: "2026",
    year: "2026",
    location: "Google Office, Bengaluru",
    context:
      "Deep technical summit bringing together cloud architects, enterprise engineering leads, and developer champions across Google Cloud Platform.",
    whyIAttended:
      "As a Google Student Ambassador, to learn about emerging Vertex AI architectures, Cloud Run optimizations, and modern multimodal deployment patterns.",
    whatIConnectedWith:
      "Interacted directly with Google Cloud developer advocates, solution architects, and fellow student community organizers.",
    whatILearned:
      "Scaling AI isn't just about prompt engineering; it requires rock-solid containerization, managed compute boundaries, and cost-effective serverless pipelines.",
    image: "/assets/events/summit-google.jpeg",
    caption: "Google Cloud Summit — Engaging with Google engineers and cloud architects",
  },
  {
    id: "the-next-tech",
    event: "The Next Tech 1.0",
    date: "2026",
    year: "2026",
    location: "Masters' Union, School of AI",
    context:
      "Premier AI & Frontier Technology convention co-powered by Cisco and InVideo, spotlighting next-generation product design and autonomous software agents.",
    whyIAttended:
      "To explore how consumer-facing AI products are designed for intuitive everyday human interactions, moving past chat interfaces into ambient software.",
    whatIConnectedWith:
      "Exchanged ideas with product designers, AI startup founders, and venture builders building 0→1 software tools.",
    whatILearned:
      "Technical complexity must be hidden behind invisible, joyful user experiences. Great software feels effortless.",
    image: "/assets/events/next-tech.jpeg",
    caption: "The Next Tech 1.0 — Exploring frontier AI product interfaces and autonomous tools",
  },
  {
    id: "google-bengaluru-visit",
    event: "Google Bengaluru Office & AI Agent Showcase",
    date: "2026",
    year: "2026",
    location: "Google Campus, Bengaluru",
    context:
      "On-site immersion during the AI Agent Builder Series Grand Finale, presenting real-time agent architectures inside Google's flagship development hub.",
    whyIAttended:
      "Selected as one of India's top builder teams to present our multi-agent prototype directly to Google judges and technical leaders.",
    whatIConnectedWith:
      "Spent intensive days with Google engineering evaluators, AI mentors, and top collegiate builder teams from across the nation.",
    whatILearned:
      "High-velocity teams ship through clear separation of concerns, uncompromising testing rigor, and authentic storytelling during live demonstrations.",
    image: "/assets/events/summit-google-1.jpeg",
    caption: "Inside Google Bengaluru Campus — Grand Finale of AI Agent Builder Series",
  },
];
