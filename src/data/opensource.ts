export interface OpenSourceProgram {
  id: string;
  name: string;
  role: string;
  period: string;
  location: string;
  badge: string;
  summary: string;
  technologies: string[];
}

export const openSourcePrograms: OpenSourceProgram[] = [
  {
    id: "osci-2026",
    name: "Open Source Connect India",
    role: "Open-Source Contributor",
    period: "Aug 2026 – Present",
    location: "India · Remote",
    badge: "/assets/opensource/osci-badge.png",
    summary:
      "Selected as an official Contributor for Open Source Connect India 2026 — one of India's largest open source initiatives. Contributing to real-world open source projects with mentorship from industry maintainers.",
    technologies: ["Git", "GitHub", "TypeScript", "Node.js", "Python"],
  },
  {
    id: "gssoc-2026",
    name: "GirlScript Summer of Code (GS Labs)",
    role: "Open Source Contributor",
    period: "May 2026 – Present",
    location: "India · Remote",
    badge: "/assets/opensource/gssoc-badge.png",
    summary:
      "Selected as a contributor for GirlScript Summer of Code 2026 (GSSoC), India's largest open source program. Contributing to real-world open source projects while collaborating with mentors and developers globally.",
    technologies: ["Open Source", "React", "TypeScript", "Python"],
  },
  {
    id: "ssoc-2026",
    name: "Social Summer of Code",
    role: "Open Source Contributor",
    period: "2026",
    location: "India · Remote",
    badge: "/assets/opensource/ssoc-badge.png",
    summary:
      "Selected as an official Contributor for Social Summer of Code 2026. Contributing to real-world open source projects while collaborating with mentors and developers globally.",
    technologies: ["Open Source", "JavaScript", "React", "Community"],
  },
];
