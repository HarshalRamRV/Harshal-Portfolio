"use client";

import { motion } from "framer-motion";

interface SkillBadgeProps {
  skill: string;
  index: number;
}

export function SkillBadge({ skill, index }: SkillBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ y: -2 }}
      className="px-4 py-2 rounded-lg bg-card border border-border hover:border-primary/50 hover:bg-primary/5 transition-all cursor-default"
    >
      <span className="text-sm font-medium">{skill}</span>
    </motion.div>
  );
}
