"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { SectionTitle } from "@/components/shared/section-title";
import { personalInfo } from "@/data/personal";

const RESUME_URL = "/resume/Resume_HarshalRamRV.pdf";

export function About() {
  return (
    <SectionWrapper id="about" className="dot-pattern">
      <SectionTitle title="About" />

      <div className="grid lg:grid-cols-[1fr_2fr] gap-16 items-start">
        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative aspect-square w-full max-w-xs overflow-hidden rounded-2xl">
            <Image
              src="/images/profile.jpeg"
              alt={personalInfo.name}
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-8"
        >
          <p className="text-lg text-muted-foreground leading-relaxed">
            {personalInfo.bio}
          </p>

          <div className="grid sm:grid-cols-3 gap-6 pt-2">
            <div>
              <p className="text-xs font-mono text-primary/70 uppercase tracking-widest mb-1">Degree</p>
              <p className="font-medium text-sm">B.E. Computer Science</p>
            </div>
            <div>
              <p className="text-xs font-mono text-primary/70 uppercase tracking-widest mb-1">Role</p>
              <p className="font-medium text-sm">Junior Software Engineer</p>
            </div>
            <div>
              <p className="text-xs font-mono text-primary/70 uppercase tracking-widest mb-1">Location</p>
              <p className="font-medium text-sm">{personalInfo.location}</p>
            </div>
          </div>

          <div className="pt-2">
            <Button size="lg" asChild>
              <a href={RESUME_URL} download className="inline-flex items-center">
                <Download className="mr-2 h-4 w-4" />
                Resume
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
