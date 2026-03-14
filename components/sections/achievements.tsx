"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { SectionTitle } from "@/components/shared/section-title";
import { AchievementCard } from "@/components/shared/achievement-card";
import { achievements, certifications } from "@/data/skills";

export function Achievements() {
  return (
    <SectionWrapper id="achievements" className="dot-pattern">
      <SectionTitle title="Achievements" />

      <div>
        {achievements.map((achievement, index) => (
          <AchievementCard
            key={achievement.id}
            title={achievement.title}
            description={achievement.description}
            period={achievement.period}
            icon={achievement.icon}
            index={index}
          />
        ))}
      </div>

      <div className="mt-16">
        <h3 className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-0">
          Certifications
        </h3>
        <div>
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.07 }}
              className="group grid sm:grid-cols-[auto_1fr] gap-6 py-8 border-b border-border last:border-0"
            >
              <span className="hidden sm:block text-4xl font-bold text-border group-hover:text-primary/20 transition-colors duration-300 leading-none pt-1 select-none tabular-nums">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h4 className="font-semibold text-base leading-tight group-hover:text-primary transition-colors duration-200">
                    {cert.title}
                  </h4>
                  <p className="text-sm text-muted-foreground mt-0.5">{cert.issuer}</p>
                </div>
                <ExternalLink className="h-4 w-4 text-muted-foreground shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
