export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription?: string;
  image?: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  date: string;
}

export const projects: Project[] = [
  {
    id: "query-llm",
    title: "Query LLM",
    subtitle: "AI-Powered Chat Application",
    description:
      "Full-stack AI chat application with real-time streaming, tool orchestration, and a stateless AI server architecture.",
    longDescription:
      "Built a full-stack AI chat platform featuring a Next.js frontend, a RESTful Node.js/Express API backend, and a dedicated AI server. The AI server supports dual transport (custom SSE and Vercel AI SDK Data Stream Protocol), typed stream events, and a tool registry with Zod-validated parameters. Integrates Firebase Auth for authentication and PostgreSQL/Prisma for persistence.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Prisma",
      "Firebase Auth",
      "Vercel AI SDK",
      "TailwindCSS",
      "shadcn/ui",
    ],
    liveUrl: "https://query-llm-frontend.vercel.app/",
    featured: true,
    date: "2025",
  },
  {
    id: "salessense-ai",
    title: "SalesSense-AI",
    subtitle: "Text-to-SQL Analytics Platform",
    description:
      "AI-driven analytics chatbot that converts natural language questions into SQL queries, fetching sales insights from a database.",
    longDescription:
      "Built an AI-driven customer support and analytics chatbot powered by Gemini-1.5-Flash. The system interprets natural language user inputs, generates precise SQL queries, and executes them against a SQLite database to surface accurate sales insights. Features a React-based conversational UI with a Node.js/Express backend, enabling non-technical users to query sales data without writing a single line of SQL.",
    technologies: [
      "React.js",
      "Vite",
      "Node.js",
      "Express.js",
      "SQLite",
      "TailwindCSS",
      "Gemini AI",
    ],
    githubUrl: "https://github.com/HarshalRamRV/SalesSense-AI",
    featured: true,
    date: "Aug 2024 – Sep 2024",
  },
];
