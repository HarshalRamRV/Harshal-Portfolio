"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
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
  },
  {
    name: "Email",
    href: `mailto:${personalInfo.email}`,
    icon: Mail,
  },
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
          whileHover={{ scale: 1.1, y: -3 }}
          whileTap={{ scale: 0.95 }}
          className={`${containerSizes[size]} rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-colors flex items-center gap-2`}
        >
          <link.icon className={iconSizes[size]} />
          {showLabels && <span className="text-sm font-medium">{link.name}</span>}
          <span className="sr-only">{link.name}</span>
        </motion.a>
      ))}
    </div>
  );
}
