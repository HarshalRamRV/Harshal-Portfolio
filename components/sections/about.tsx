"use client";

import { motion } from "framer-motion";
import { Download, GraduationCap, MapPin, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { SectionTitle } from "@/components/shared/section-title";
import { personalInfo } from "@/data/personal";

export function About() {
  return (
    <SectionWrapper id="about">
      <SectionTitle
        title="About Me"
        subtitle="Get to know me better"
      />

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 mx-auto">
            {/* Decorative border */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border-2 border-dashed border-primary/30"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute inset-4 rounded-full border-2 border-dashed border-secondary/30"
            />

            {/* Profile placeholder with gradient */}
            <div className="absolute inset-8 rounded-full bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 flex items-center justify-center overflow-hidden">
              <div className="text-6xl sm:text-7xl font-bold gradient-text">
                {personalInfo.name.split(" ").map(n => n[0]).join("")}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          <div className="prose prose-lg dark:prose-invert">
            <p className="text-muted-foreground leading-relaxed">
              {personalInfo.bio}
            </p>
          </div>

          {/* Info Cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-4 rounded-xl bg-card border border-border"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-medium">Education</p>
                  <p className="text-xs text-muted-foreground">
                    B.E. Computer Science
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-4 rounded-xl bg-card border border-border"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-secondary/10 text-secondary">
                  <Briefcase className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-medium">Experience</p>
                  <p className="text-xs text-muted-foreground">
                    Junior Software Engineer
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-4 rounded-xl bg-card border border-border sm:col-span-2"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-accent/10 text-accent">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-medium">
                    {personalInfo.education.institution}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {personalInfo.education.location} • {personalInfo.education.period}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Resume Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Button size="lg" className="group">
              <Download className="mr-2 h-4 w-4 group-hover:translate-y-0.5 transition-transform" />
              Download Resume
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
