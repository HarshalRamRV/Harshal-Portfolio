"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, Download, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SocialLinks } from "@/components/shared/social-links";
import { FloatingShapes } from "@/components/animations/floating-shapes";
import { useTypewriter } from "@/hooks/use-typewriter";
import { personalInfo } from "@/data/personal";

const RESUME_URL = "/resume/Resume_HarshalRamRV.docx.pdf";

const roles = [
  "Full-Stack Developer",
  "AI Engineer",
  "Problem Solver",
  "Tech Innovator",
];

export function Hero() {
  const { text } = useTypewriter({
    words: roles,
    typeSpeed: 80,
    deleteSpeed: 40,
    delayBetweenWords: 2500,
  });

  const handleScrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden section-mesh">
      <FloatingShapes />

      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 rounded-full bg-gradient-to-br from-primary/30 to-transparent blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 rounded-full bg-gradient-to-tr from-secondary/30 to-transparent blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="shrink-0"
          >
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-secondary to-accent p-1">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <Image
                    src="/images/profile.jpeg"
                    alt={personalInfo.name}
                    width={256}
                    height={256}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <div className="text-center lg:text-left">
            {/* Greeting with icon */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center justify-center lg:justify-start gap-2 mb-2"
            >
              <Sparkles className="h-5 w-5 text-primary" />
              <p className="text-lg text-muted-foreground">
                Hi, I'm
              </p>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-3"
            >
              <span className="gradient-text">{personalInfo.name}</span>
            </motion.h1>

            {/* Role with Typewriter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl sm:text-2xl lg:text-3xl font-medium text-primary mb-4 h-10"
            >
              <span>{text}</span>
              <span className="animate-pulse">|</span>
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg lg:text-xl text-muted-foreground max-w-xl mb-8"
            >
              {personalInfo.tagline}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8"
            >
              <Button
                size="lg"
                onClick={() => handleScrollToSection("#projects")}
                className="group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  View Projects
                  <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
                </span>
              </Button>
              <Button size="lg" variant="outline" className="group" asChild>
                <a href={RESUME_URL} download className="inline-flex items-center whitespace-nowrap">
                  <Download className="mr-2 h-4 w-4 shrink-0 group-hover:translate-y-0.5 transition-transform" />
                  Download Resume
                </a>
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex justify-center lg:justify-start"
            >
              <SocialLinks size="lg" />
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
