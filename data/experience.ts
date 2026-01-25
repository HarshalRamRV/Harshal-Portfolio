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
      "Built a Sales Agent integrated with client databases to provide actionable insights and improve sales",
      "Developed a real-time Sales Coaching Application using Gemini Live API to simulate sales calls and provide feedback",
      "Created an agent framework accessible via REST API to support developers with research tasks",
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
      "Built an Agentic Research Platform with advanced customizable agents for complex research and simpler agents for general research",
      "Integrated Internet Search and Semantic Search tools for comprehensive research capabilities",
      "Designed backend for an Agentic chatbot, integrating a RAG framework for efficient PDF summarization",
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
      "Created user profiles and interactive feeds for sharing photos, audio, and video posts in a Social Media Application MVP",
      "Implemented RESTful APIs for user registration, authentication, and post management",
    ],
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js"],
  },
];
