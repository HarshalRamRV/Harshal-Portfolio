"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SocialLinks } from "@/components/shared/social-links";
import { personalInfo } from "@/data/personal";

const HeroBackground = dynamic(
  () =>
    import("@/components/animations/hero-background").then((m) => ({
      default: m.HeroBackground,
    })),
  { ssr: false }
);

const RESUME_URL = "/resume/Resume_HarshalRamRV.pdf";

export function Hero() {
  const handleScrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <HeroBackground />

      <div className="relative z-10 mx-auto w-full max-w-5xl px-6 py-32 sm:px-8 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center lg:items-center gap-10 lg:gap-16">
          {/* Profile image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="shrink-0"
          >
            <div className="relative h-36 w-36 sm:h-44 sm:w-44 lg:h-52 lg:w-52">
              <div className="absolute -inset-0.5 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 opacity-60" />
              <div className="relative h-full w-full overflow-hidden rounded-full border border-white/10">
                <Image
                  src="/images/profile.jpeg"
                  alt={personalInfo.name}
                  width={260}
                  height={260}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>

          {/* Text content */}
          <div className="text-center lg:text-left">
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-amber-500"
            >
              Full-Stack Developer & AI Engineer
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl"
            >
              {personalInfo.name}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="mt-5 max-w-xl text-base text-white/70 sm:text-lg"
            >
              {personalInfo.tagline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start"
            >
              <Button
                size="lg"
                onClick={() => handleScrollToSection("#projects")}
                className="bg-amber-500 text-background hover:bg-amber-400 transition-colors font-semibold"
              >
                View Projects
                <ArrowDown className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="font-medium border-white/50 text-white hover:border-primary hover:text-primary"
                asChild
              >
                <a href={RESUME_URL} download className="inline-flex items-center">
                  <Download className="mr-2 h-4 w-4" />
                  Resume
                </a>
              </Button>
              <div className="hidden h-8 w-px bg-white/15 sm:block" />
              <SocialLinks size="md" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
