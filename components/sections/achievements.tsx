"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { SectionTitle } from "@/components/shared/section-title";
import { AchievementCard } from "@/components/shared/achievement-card";
import { achievements, certifications } from "@/data/skills";

export function Achievements() {
  return (
    <SectionWrapper id="achievements">
      <SectionTitle
        title="Achievements"
        subtitle="Milestones and certifications"
      />

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Achievements */}
        <div className="space-y-6">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-xl font-semibold flex items-center gap-2"
          >
            <Award className="h-5 w-5 text-primary" />
            Highlights
          </motion.h3>

          <div className="space-y-4">
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
        </div>

        {/* Certifications */}
        <div className="space-y-6">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl font-semibold flex items-center gap-2"
          >
            <ExternalLink className="h-5 w-5 text-secondary" />
            Certifications
          </motion.h3>

          <div className="space-y-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                whileHover={{ x: 4 }}
                className="p-4 rounded-lg bg-card border border-border hover:border-secondary/50 transition-all"
              >
                <h4 className="font-medium">{cert.title}</h4>
                <p className="text-sm text-muted-foreground mt-1">
                  Issued by {cert.issuer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
