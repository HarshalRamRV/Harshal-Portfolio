"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import type { Experience } from "@/data/experience";

interface ExperienceCardProps {
  experience: Experience;
  index: number;
}

export function ExperienceCard({ experience, index }: ExperienceCardProps) {
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative flex items-center justify-center"
    >
      {/* Timeline Line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2 hidden md:block" />

      {/* Timeline Dot */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
        className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-10 hidden md:block"
      />

      {/* Card */}
      <div
        className={`w-full md:w-[calc(50%-2rem)] ${
          isLeft ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
        }`}
      >
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all"
        >
          {/* Header */}
          <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
            <div>
              <h3 className="font-semibold text-lg">{experience.role}</h3>
              <p className="text-primary font-medium">{experience.company}</p>
            </div>
            {experience.current && (
              <Badge variant="default" className="animate-pulse">
                Current
              </Badge>
            )}
          </div>

          {/* Period & Location */}
          <p className="text-sm text-muted-foreground mb-4">
            {experience.period} • {experience.location}
          </p>

          {/* Description */}
          <ul className="space-y-2 mb-4">
            {experience.description.map((item, i) => (
              <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                <span className="text-primary mt-1.5">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {experience.technologies.map((tech) => (
              <Badge key={tech} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
