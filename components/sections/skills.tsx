"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { SectionTitle } from "@/components/shared/section-title";
import { skillCategories } from "@/data/skills";

export function Skills() {
  return (
    <SectionWrapper id="skills" className="dot-pattern">
      <SectionTitle title="Skills" />

      <div>
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.07 }}
            className="group grid sm:grid-cols-[auto_1fr] gap-6 py-8 border-b border-border last:border-0"
          >
            <span className="hidden sm:block text-4xl font-bold text-border group-hover:text-primary/20 transition-colors duration-300 leading-none pt-1 select-none tabular-nums">
              {String(index + 1).padStart(2, "0")}
            </span>

            <div className="space-y-3">
              <h3 className="font-semibold text-lg">{category.name}</h3>
              <div className="flex flex-wrap gap-1.5">
                {category.skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-xs font-mono">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
