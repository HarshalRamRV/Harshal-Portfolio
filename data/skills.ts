export interface SkillCategory {
  name: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    skills: ["Next.js", "React.js", "TypeScript", "JavaScript", "TailwindCSS", "React Query"],
  },
  {
    name: "Backend",
    skills: ["Node.js", "Express.js", "MongoDB", "Firebase", "REST APIs"],
  },
  {
    name: "DevOps",
    skills: ["Linux", "Git", "GitHub", "Render", "Docker"],
  },
  {
    name: "AI/ML Tools",
    skills: ["Cursor", "Codex", "Claude Code", "Gemini AI"],
  },
  {
    name: "Soft Skills",
    skills: ["Leadership", "Public Speaking", "Team Collaboration", "Adaptability"],
  },
];

export const achievements = [
  {
    id: "vice-president",
    title: "Vice President, Cryptera",
    description: "Conducted a technical symposium with 1,000+ participants",
    period: "July 2024 - Apr 2025",
    icon: "trophy",
  },
  {
    id: "best-outgoing",
    title: "Best Outgoing Student Award",
    description: "PSG Tech Alumni Association",
    period: "July 2021 - Apr 2022",
    icon: "award",
  },
];

export const certifications = [
  {
    id: "docker",
    title: "Docker for the Absolute Beginner - Hands On - DevOps",
    issuer: "Udemy",
  },
  {
    id: "blockchain",
    title: "BlockChain Essentials",
    issuer: "Cognitive Class",
  },
];
