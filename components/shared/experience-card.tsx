"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import type { Experience } from "@/data/experience";

interface ExperienceCardProps {
  experience: Experience;
  index: number;
}

export function ExperienceCard({ experience, index }: ExperienceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      className="group grid sm:grid-cols-[auto_1fr] gap-6 py-8 border-b border-border last:border-0"
    >
      {/* Index */}
      <span className="hidden sm:block text-4xl font-bold text-border group-hover:text-primary/20 transition-colors duration-300 leading-none pt-1 select-none tabular-nums">
        {String(index + 1).padStart(2, "0")}
      </span>

      {/* Content */}
      <div className="space-y-3">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-semibold text-lg leading-tight group-hover:text-primary transition-colors duration-200">
              {experience.role}
            </h3>
            <p className="text-sm text-muted-foreground mt-0.5">
              {experience.company} · {experience.location}
            </p>
          </div>
          <div className="flex items-center gap-2 shrink-0 pt-0.5">
            <span className="text-xs font-mono text-muted-foreground">{experience.period}</span>
            {experience.current && (
              <Badge variant="default" className="text-xs">Now</Badge>
            )}
          </div>
        </div>

        <ul className="space-y-1.5">
          {experience.description.map((item, i) => (
            <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
              <span className="text-primary mt-1.5 shrink-0">–</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-1.5 pt-1">
          {experience.technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="text-xs font-mono">
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
