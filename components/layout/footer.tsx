"use client";

import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";
import { personalInfo } from "@/data/personal";

const socialLinks = [
  { name: "GitHub", href: personalInfo.social.github, icon: Github },
  { name: "LinkedIn", href: personalInfo.social.linkedin, icon: Linkedin },
  { name: "Email", href: `mailto:${personalInfo.email}`, icon: Mail },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-semibold text-foreground">{personalInfo.name}</p>
            <p className="text-sm text-muted-foreground mt-0.5">{personalInfo.tagline}</p>
          </div>

          <div className="flex items-center gap-3">
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2 }}
                className="p-2.5 rounded-lg bg-card border border-border text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
              >
                <link.icon className="h-4 w-4" />
                <span className="sr-only">{link.name}</span>
              </motion.a>
            ))}
          </div>
        </div>

        <div className="mt-8 flex items-center justify-between">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} {personalInfo.name}
          </p>
          <button
            onClick={scrollToTop}
            className="text-xs text-muted-foreground hover:text-primary transition-colors flex items-center gap-1.5"
          >
            Back to top
            <ArrowUp className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
