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
    id: "salessense-ai",
    title: "SalesSense-AI",
    subtitle: "Text-to-SQL Analytics Platform",
    description:
      "AI-driven customer support chatbot that utilizes Gemini-1.5-Flash to interpret user inputs and generate SQL queries for fetching relevant sales data.",
    longDescription:
      "Created an AI-driven customer support chatbot that utilizes the Gemini-1.5-Flash to interpret user inputs and generate SQL queries for fetching relevant sales data. It uses the generated SQL queries to fetch data from the database and deliver accurate, contextually relevant responses to queries.",
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
  {
    id: "evault",
    title: "Evault",
    subtitle: "Secure Decentralized File Storage",
    description:
      "Blockchain-based file storage application using smart contracts and IPFS for decentralized, secure file management on the Ethereum blockchain.",
    longDescription:
      "Implemented smart contracts in Solidity to oversee file uploads and manage access controls, ensuring secure and transparent interactions among users on the Ethereum blockchain. Leveraged the InterPlanetary File System (IPFS) for decentralized file storage.",
    technologies: ["React", "Solidity", "Ethereum", "IPFS"],
    githubUrl: "https://github.com/HarshalRamRV/Project-eVault",
    featured: true,
    date: "Sep 2023 - Oct 2023",
  },
];
