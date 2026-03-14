export interface Experience {
  id: string;
  company: string;
  location: string;
  role: string;
  period: string;
  description: string[];
  technologies: string[];
  current?: boolean;
}

export const experiences: Experience[] = [
  {
    id: "prodgain-junior",
    company: "ProdGain Private Limited",
    location: "Hyderabad",
    role: "Junior Software Engineer",
    period: "Jun 2025 – Present",
    current: true,
    description: [
      "Built a Sales Agent integrated with client databases for actionable insights",
      "Developed a real-time Sales Coaching App using Gemini Live API",
      "Created a REST API agent framework for developer research tasks",
    ],
    technologies: ["TypeScript", "Next.js", "Node.js", "Gemini AI", "MongoDB"],
  },
  {
    id: "prodgain-intern",
    company: "ProdGain Private Limited",
    location: "Hyderabad",
    role: "Intern Software Engineer",
    period: "Jan 2025 – May 2025",
    description: [
      "Built an Agentic Research Platform with customizable agents for complex and general research",
      "Integrated Internet and Semantic Search tools for comprehensive research",
      "Designed backend for an Agentic chatbot with RAG-based PDF summarization",
    ],
    technologies: ["TypeScript", "Next.js", "MongoDB", "Node.js", "Express.js"],
  },
  {
    id: "blocksurvey",
    company: "BlockSurvey Technologies Private Limited",
    location: "Bangalore",
    role: "Intern MERN Stack Developer",
    period: "Sep 2023 - Oct 2023",
    description: [
      "Built user profiles and feeds for a Social Media MVP with photo, audio, and video posts",
      "Implemented RESTful APIs for auth, registration, and post management",
    ],
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js"],
  },
];
