export interface Hackathon {
  id: string;
  name: string;
  year: string;
  location: string;
  image: string;
  problem: string;
  built: string;
  role: string;
  outcome: string;
  lesson: string;
}

export const hackathons: Hackathon[] = [
  {
    id: "ai-agent-builder-series",
    name: "AI Agent Builder Series — Grand Finale",
    year: "2026",
    location: "Google Office, Bengaluru",
    image: "/assets/hackathons/2ndwin.jpeg",
    problem: "Building AI agents that solve real-world problems",
    built: "Tidecast — a multi-agent system for fishing-zone and cyclone advisories",
    role: "Lead Builder",
    outcome: "2nd Place — Grand Finale at Google Office",
    lesson:
      "The system broke during the live demo. We fixed it live, under pressure, in front of judges. Building for real constraints matters more than building for a leaderboard.",
  },
  {
    id: "spark-hack-2026",
    name: "Spark Hack 2026",
    year: "2026",
    location: "Sanskriti University",
    image: "/assets/hackathons/tech-spark.jpeg",
    problem: "24-hour hackathon — rapid prototyping under extreme time pressure",
    built: "Full-stack solution addressing the hackathon challenge",
    role: "Builder",
    outcome: "Competed in 24-hour intensive build",
    lesson:
      "Sleep deprivation teaches you what parts of your stack you actually know vs. what you've been copy-pasting. Pressure reveals true skill.",
  },
  {
    id: "drophack-26",
    name: "Drophack '26",
    year: "2026",
    location: "Paytm Office",
    image: "/assets/hackathons/Drophack26-1.jpeg",
    problem: "Industry hackathon at Paytm — real-world fintech challenges",
    built: "Innovation prototype for the fintech space",
    role: "Builder",
    outcome: "Participated and networked with industry professionals",
    lesson:
      "Being in the same room as people who've built products used by millions changes your sense of what's possible.",
  },
];

export interface Event {
  id: string;
  name: string;
  year: string;
  location: string;
  image: string;
  description: string;
  category: "summit" | "conference" | "meetup" | "visit" | "hackathon";
}

export const events: Event[] = [
  {
    id: "india-ai-impact-summit",
    name: "India AI Impact Summit",
    year: "2026",
    location: "New Delhi",
    image: "/assets/events/summit-sundar-pichai.jpeg",
    description:
      "Attended the India AI Impact Summit — a national-level gathering of AI leaders, policymakers, and builders shaping India's AI future.",
    category: "summit",
  },
  {
    id: "google-cloud-summit",
    name: "Google Cloud Summit",
    year: "2026",
    location: "Google Office",
    image: "/assets/events/summit-google.jpeg",
    description:
      "Experienced Google Cloud infrastructure and innovation firsthand. Connected with Google engineers and cloud architects.",
    category: "summit",
  },
  {
    id: "the-next-tech",
    name: "The Next Tech 1.0",
    year: "2026",
    location: "Masters' Union, School of AI",
    image: "/assets/events/next-tech.jpeg",
    description:
      "A premier AI & tech conference co-powered by Cisco and InVideo. Explored cutting-edge AI applications and networked with industry leaders.",
    category: "conference",
  },
  {
    id: "google-office-visit",
    name: "Google Office Visit",
    year: "2026",
    location: "Google, Bengaluru",
    image: "/assets/events/summit-google-1.jpeg",
    description:
      "Visited Google's Bengaluru office as part of the AI Agent Builder Series Grand Finale. An unforgettable experience of Google's innovation culture.",
    category: "visit",
  },
  {
    id: "google-cloud-visit",
    name: "Google Cloud Office",
    year: "2026",
    location: "Google Cloud",
    image: "/assets/events/2nd-win-2.jpeg",
    description:
      "Visited Google Cloud facilities, experiencing the infrastructure that powers millions of services globally.",
    category: "visit",
  },
];

export interface Achievement {
  id: string;
  title: string;
  issuer: string;
  year: string;
  description: string;
  image?: string;
  type: "certification" | "program" | "award" | "recognition";
}

export const achievements: Achievement[] = [
  {
    id: "gsa-26",
    title: "Google Student Ambassador '26",
    issuer: "Google",
    year: "2026",
    description:
      "Selected as a Google Student Ambassador — reimagining cities with Gemini, creating AI-powered content, connecting builders, and hosting community events.",
    image: "/assets/gsa/GSA-kit-me.jpeg",
    type: "recognition",
  },
  {
    id: "ai-agent-builder-2nd",
    title: "2nd Place — AI Agent Builder Series Grand Finale",
    issuer: "Google & AI House",
    year: "2026",
    description:
      "Won 2nd place at the Grand Finale hackathon held at Google Office, Bengaluru. Built Tidecast — a multi-agent system for fishing advisories.",
    image: "/assets/hackathons/2ndwin.jpeg",
    type: "award",
  },
  {
    id: "ai-103",
    title: "AI-103 Certified",
    issuer: "Microsoft Azure",
    year: "2025",
    description:
      "Microsoft Azure AI Engineer Associate certification — demonstrating proficiency in AI solutions on Azure.",
    type: "certification",
  },
  {
    id: "mckinsey-forward",
    title: "McKinsey Forward Alumni",
    issuer: "McKinsey & Company",
    year: "2025",
    description:
      "Completed the McKinsey Forward program — developing problem-solving, communication, and leadership skills.",
    type: "program",
  },
  {
    id: "infosys-springboard",
    title: "Infosys Springboard Intern",
    issuer: "Infosys",
    year: "2026",
    description:
      "Internship at Infosys Springboard — building CareerSpark, an AI career intelligence platform for students.",
    type: "program",
  },
  {
    id: "gssoc-26",
    title: "GSSoC '26 Contributor",
    issuer: "GirlScript Foundation",
    year: "2026",
    description:
      "Contributing to open-source projects as part of GirlScript Summer of Code 2026.",
    type: "program",
  },
  {
    id: "ssoc-26",
    title: "SSoC '26 Participant",
    issuer: "Social Summer of Code",
    year: "2026",
    description:
      "Participating in Social Summer of Code — contributing to meaningful open-source projects.",
    type: "program",
  },
];

export const gsaExperiences = [
  {
    phase: "LEARN",
    title: "Google Cloud & Gemini",
    description: "Deep-diving into Google's AI ecosystem — Gemini, Vertex AI, Cloud Run, and the tools shaping the future of AI.",
  },
  {
    phase: "CREATE",
    title: "AI-Powered Content",
    description: "Creating AI-powered experiences and content that demonstrate what's possible with Google's technology stack.",
  },
  {
    phase: "CONNECT",
    title: "Builder Community",
    description: "Connecting with a global network of student builders, sharing knowledge, and learning from diverse perspectives.",
  },
  {
    phase: "HOST",
    title: "Fund My Crazy",
    description: "Hosting community events like 'Fund My Crazy' — bringing together ideas, builders, and the energy to make things happen.",
  },
  {
    phase: "SHARE",
    title: "Reimagine With Gemini",
    description: "Sharing what we learn — reimagining our city with Gemini, making AI accessible, and inspiring the next wave of builders.",
  },
];

export const openSource = {
  title: "OPEN SOURCE",
  description:
    "Code isn't written in isolation. Contributing to open source taught me how collaboration makes software better — for everyone.",
  programs: [
    {
      name: "GSSoC '26",
      fullName: "GirlScript Summer of Code 2026",
      role: "Contributor",
      description: "Contributing to open-source projects, reviewing code, and collaborating with maintainers across the ecosystem.",
    },
    {
      name: "SSoC '26",
      fullName: "Social Summer of Code 2026",
      role: "Participant",
      description: "Building meaningful open-source solutions that create social impact.",
    },
    {
      name: "OSCI",
      fullName: "Open Source Community Initiative",
      role: "Member",
      description: "Part of the broader open-source community — learning, contributing, and advocating for open collaboration.",
    },
  ],
  flow: ["ISSUE", "PR", "REVIEW", "MERGE"],
};
