"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { SectionTitle } from "@/components/shared/section-title";
import { ExperienceCard } from "@/components/shared/experience-card";
import { experiences } from "@/data/experience";

export function Experience() {
  return (
    <SectionWrapper id="experience" className="dot-pattern">
      <SectionTitle
        title="Experience"
        subtitle="My professional journey so far"
      />

      <div className="relative">
        {/* Central Timeline Line (Mobile) */}
        <div className="absolute left-4 top-0 bottom-0 w-px bg-border md:hidden" />

        {/* Timeline Items */}
        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <div key={experience.id} className="relative">
              {/* Mobile Timeline Dot */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="absolute left-4 -translate-x-1/2 w-3 h-3 rounded-full bg-primary border-2 border-background z-10 md:hidden"
                style={{ top: "1.5rem" }}
              />

              {/* Card with left padding on mobile */}
              <div className="ml-8 md:ml-0">
                <ExperienceCard experience={experience} index={index} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
