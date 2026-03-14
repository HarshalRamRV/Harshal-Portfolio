"use client";

import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";
import { personalInfo } from "@/data/personal";

const links = [
  {
    name: "GitHub",
    href: personalInfo.social.github,
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: personalInfo.social.linkedin,
    icon: Linkedin,
  }
];

interface SocialLinksProps {
  size?: "sm" | "md" | "lg";
  showLabels?: boolean;
}

export function SocialLinks({ size = "md", showLabels = false }: SocialLinksProps) {
  const iconSizes = {
    sm: "h-4 w-4",
    md: "h-5 w-5",
    lg: "h-6 w-6",
  };

  const containerSizes = {
    sm: "p-2",
    md: "p-2.5",
    lg: "p-3",
  };

  return (
    <div className="flex items-center gap-3">
      {links.map((link, index) => (
        <motion.a
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 + index * 0.1 }}
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.95 }}
          className={`${containerSizes[size]} flex items-center gap-2 rounded-xl border border-white/10 bg-slate-950/45 text-white/78 shadow-[0_18px_40px_rgba(2,6,23,0.28)] backdrop-blur-md transition-all duration-300 hover:border-primary/35 hover:bg-primary/15 hover:text-white`}
        >
          <link.icon className={iconSizes[size]} />
          {showLabels && <span className="text-sm font-medium">{link.name}</span>}
          <span className="sr-only">{link.name}</span>
        </motion.a>
      ))}
    </div>
  );
}
