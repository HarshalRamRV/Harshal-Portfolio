"use client";

import { Github, Linkedin, Mail, Heart, ArrowUp, Code2 } from "lucide-react";
import { motion } from "framer-motion";
import { personalInfo, navLinks } from "@/data/personal";

const socialLinks = [
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

export function Footer() {
  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-border overflow-hidden">
      {/* Premium gradient background */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-background to-background" />
      <div className="absolute inset-0 dot-pattern opacity-50" />

      {/* Decorative gradient blur */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-32 bg-gradient-to-t from-primary/10 to-transparent blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main footer content */}
        <div className="flex justify-between w-full mb-12">
          {/* Brand section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
              <div className="p-2 rounded-lg bg-primary/10">
                <Code2 className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-xl font-bold gradient-text">
                {personalInfo.name}
              </h3>
            </div>
            <p className="text-muted-foreground text-sm max-w-xs mx-auto md:mx-0">
              {personalInfo.tagline}
            </p>
          </motion.div>


          {/* Connect section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center md:text-right"
          >
            <h4 className="font-semibold mb-4 text-foreground">Connect</h4>
            <div className="flex justify-center md:justify-end gap-3">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-xl bg-card border border-border hover:border-primary/50 hover:bg-primary/10 transition-all shadow-sm"
                >
                  <link.icon className="h-5 w-5" />
                  <span className="sr-only">{link.name}</span>
                </motion.a>
              ))}
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              {personalInfo.email}
            </p>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="glow-line mb-8" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm text-muted-foreground flex items-center gap-1"
          >
            © {new Date().getFullYear()} {personalInfo.name}
          </motion.p>

          {/* Back to top button */}
          <motion.button
            onClick={scrollToTop}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
          >
            <span>Back to top</span>
            <div className="p-1.5 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
              <ArrowUp className="h-4 w-4" />
            </div>
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
