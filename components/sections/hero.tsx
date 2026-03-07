"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, Download, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SocialLinks } from "@/components/shared/social-links";
import { useTypewriter } from "@/hooks/use-typewriter";
import { personalInfo } from "@/data/personal";

const HeroBackground = dynamic(
  () =>
    import("@/components/animations/hero-background").then((m) => ({
      default: m.HeroBackground,
    })),
  { ssr: false }
);

const RESUME_URL = "/resume/Resume_HarshalRamRV.pdf";

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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <HeroBackground />
      <div className="pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(180deg,rgba(2,6,23,0.8)_0%,rgba(2,6,23,0.42)_24%,rgba(2,6,23,0.24)_52%,rgba(2,6,23,0.74)_100%)]" />
      <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(circle_at_58%_54%,rgba(2,6,23,0.06)_0%,rgba(2,6,23,0.34)_50%,rgba(2,6,23,0.84)_100%)]" />
      <div className="pointer-events-none absolute inset-y-0 left-0 z-[1] w-full lg:w-[68%] bg-[linear-gradient(90deg,rgba(2,6,23,0.74)_0%,rgba(2,6,23,0.56)_32%,rgba(2,6,23,0.22)_72%,transparent_100%)]" />
      <div className="pointer-events-none absolute inset-y-0 right-[-10%] z-[1] hidden lg:block w-[45vw] bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.16),transparent_64%)] blur-3xl" />

      <div className="relative z-[2] mx-auto flex w-full items-center px-5 pt-24 pb-24 sm:px-6 sm:pt-28 sm:pb-16 lg:px-8 lg:pt-24 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto w-full max-w-[1580px] lg:w-[88vw]"
        >
          <div className="absolute -inset-8 rounded-[3rem] bg-[radial-gradient(circle_at_18%_28%,rgba(59,130,246,0.2),transparent_28%),radial-gradient(circle_at_82%_54%,rgba(14,165,233,0.16),transparent_32%)] blur-3xl opacity-50" />
          <div className="relative overflow-hidden rounded-[2.25rem] border border-white/10 bg-slate-950/8 px-5 py-10 pb-14 shadow-[0_40px_100px_rgba(2,6,23,0.5)] backdrop-blur-sm sm:px-10 sm:py-16 sm:pb-16 lg:px-16 lg:py-24 min-h-0 sm:min-h-[500px] lg:min-h-[580px] xl:min-h-[640px]">
            <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(255,255,255,0.03),transparent_28%,rgba(37,99,235,0.03)_100%)]" />
            <div className="relative grid items-center gap-6 sm:gap-10 lg:grid-cols-[1fr_minmax(0,1.4fr)] lg:gap-14 xl:gap-16">
              <div className="relative flex justify-center lg:justify-center">
                <div className="absolute inset-0 rounded-[2.25rem] bg-[radial-gradient(circle_at_50%_30%,rgba(59,130,246,0.3),transparent_66%)] blur-3xl opacity-40 pointer-events-none" />
                <div className="relative flex items-center justify-center py-2 sm:py-6 lg:py-8">
                  <div className="relative h-40 w-40 sm:h-56 sm:w-56 lg:h-72 lg:w-72 xl:h-[22rem] xl:w-[22rem]">
                    <div className="absolute -inset-0.5 rounded-full bg-gradient-to-br from-primary via-secondary to-accent opacity-90 blur-[1px]" />
                    <div className="relative h-full w-full rounded-full border border-white/10 p-0.5">
                      <div className="h-full w-full overflow-hidden rounded-full">
                        <Image
                          src="/images/profile.jpeg"
                          alt={personalInfo.name}
                          width={320}
                          height={320}
                          className="h-full w-full object-cover"
                          priority
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative mx-auto w-full max-w-[860px] lg:mx-0">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="mb-2 sm:mb-4 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 lg:justify-start"
                >
                  <Sparkles className="h-5 w-5 text-sky-400" />
                  <p className="text-lg text-slate-200/95">Hi, I&apos;m</p>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="mb-3 sm:mb-4 text-center text-[clamp(2.5rem,8vw,5.6rem)] font-bold leading-[0.95] tracking-[-0.06em] lg:text-left"
                >
                  <span className="gradient-text">{personalInfo.name}</span>
                </motion.h1>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="min-h-[2rem] sm:min-h-[3rem] text-center text-xl font-medium text-sky-100 sm:text-3xl lg:text-left lg:text-[2.35rem]"
                >
                  <span>{text}</span>
                  <span className="animate-pulse text-sky-300">|</span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="mt-6 sm:mt-8 flex flex-col items-center gap-3 sm:gap-4 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start"
                >
                  <Button
                    size="lg"
                    onClick={() => handleScrollToSection("#projects")}
                    className="group relative w-full sm:min-w-[210px] sm:w-auto overflow-hidden border border-primary/30 bg-[linear-gradient(90deg,rgba(99,102,241,0.92)_0%,rgba(37,99,235,0.96)_55%,rgba(14,165,233,0.92)_100%)] text-white shadow-[0_18px_45px_rgba(37,99,235,0.38)] hover:scale-[1.02] hover:shadow-[0_22px_55px_rgba(37,99,235,0.45)]"
                  >
                    <span className="relative z-10 flex items-center text-sm sm:text-base">
                      View Projects
                      <ArrowDown className="ml-2 h-3.5 w-3.5 transition-transform group-hover:translate-y-1" />
                    </span>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="group w-full sm:min-w-[200px] sm:w-auto border-sky-500/20 bg-sky-950/30 text-slate-200 shadow-[0_16px_36px_rgba(2,6,23,0.22)] hover:border-sky-400/30 hover:bg-sky-900/25 hover:text-sky-50"
                    asChild
                  >
                    <a
                      href={RESUME_URL}
                      download
                      className="inline-flex items-center whitespace-nowrap text-sm sm:text-base"
                    >
                      <Download className="mr-2 h-3.5 w-3.5 shrink-0 transition-transform group-hover:translate-y-0.5" />
                      Resume
                    </a>
                  </Button>
                  <div className="hidden h-10 w-px bg-white/10 sm:block" />
                  <div className="flex justify-center lg:justify-start">
                    <SocialLinks size="md" />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
