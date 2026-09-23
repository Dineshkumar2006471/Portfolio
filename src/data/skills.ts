export interface SkillCategory {
  name: string;
  icon: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  usedIn: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "FRONTEND",
    icon: "◇",
    skills: [
      { name: "React", usedIn: ["AgentProof", "CropSentinel", "MedoVeda", "CareerSpark"] },
      { name: "Next.js", usedIn: ["Portfolio", "CareerSpark"] },
      { name: "TypeScript", usedIn: ["AgentProof", "DealForge", "IntelliPlant"] },
      { name: "JavaScript", usedIn: ["CropSentinel", "MedoVeda", "IntelliASHA"] },
      { name: "Tailwind CSS", usedIn: ["AgentProof", "CareerSpark", "DealForge"] },
      { name: "HTML / CSS", usedIn: ["All Projects"] },
    ],
  },
  {
    name: "BACKEND",
    icon: "□",
    skills: [
      { name: "Node.js", usedIn: ["CropSentinel", "MedoVeda", "CareerSpark"] },
      { name: "Express", usedIn: ["CropSentinel", "IntelliASHA"] },
      { name: "Python", usedIn: ["AgentProof", "AI Agents", "ML Models"] },
      { name: "FastAPI", usedIn: ["AI Services", "AgentProof"] },
    ],
  },
  {
    name: "AI / ML",
    icon: "△",
    skills: [
      { name: "AI Agents", usedIn: ["AgentProof", "Tidecast", "DealForge"] },
      { name: "Gemini", usedIn: ["Tidecast", "GSA Projects"] },
      { name: "Vertex AI", usedIn: ["Cloud AI Services"] },
      { name: "NLP", usedIn: ["DealForge", "CropSentinel"] },
      { name: "Computer Vision", usedIn: ["MedoVeda"] },
    ],
  },
  {
    name: "CLOUD",
    icon: "○",
    skills: [
      { name: "Google Cloud", usedIn: ["Tidecast", "AgentProof", "GSA"] },
      { name: "AWS", usedIn: ["CareerSpark", "Deployments"] },
      { name: "Azure", usedIn: ["AI-103 Projects"] },
      { name: "Cloud Run", usedIn: ["Tidecast", "API Services"] },
      { name: "Firebase / Firestore", usedIn: ["Tidecast", "Web Apps"] },
    ],
  },
  {
    name: "DEVOPS",
    icon: "⬡",
    skills: [
      { name: "Docker", usedIn: ["Containerized Deployments"] },
      { name: "Git / GitHub", usedIn: ["All Projects", "Open Source"] },
      { name: "CI/CD", usedIn: ["Automated Pipelines"] },
    ],
  },
  {
    name: "DATABASES",
    icon: "◈",
    skills: [
      { name: "PostgreSQL", usedIn: ["Backend Services"] },
      { name: "MongoDB", usedIn: ["Web Applications"] },
      { name: "Supabase", usedIn: ["Rapid Prototypes"] },
      { name: "BigQuery", usedIn: ["Data Analytics"] },
    ],
  },
  {
    name: "TOOLS",
    icon: "✦",
    skills: [
      { name: "Figma", usedIn: ["UI Design", "Prototyping"] },
      { name: "VS Code", usedIn: ["Daily Development"] },
      { name: "Postman", usedIn: ["API Testing"] },
    ],
  },
];
