"use client";

import { motion } from "framer-motion";

interface AchievementCardProps {
  title: string;
  description: string;
  period: string;
  icon: string;
  index: number;
}

export function AchievementCard({ title, description, period, index }: AchievementCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      className="group grid sm:grid-cols-[auto_1fr] gap-6 py-8 border-b border-border last:border-0"
    >
      <span className="hidden sm:block text-4xl font-bold text-border group-hover:text-primary/20 transition-colors duration-300 leading-none pt-1 select-none tabular-nums">
        {String(index + 1).padStart(2, "0")}
      </span>

      <div className="space-y-1">
        <h3 className="font-semibold text-lg leading-tight group-hover:text-primary transition-colors duration-200">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground">{description}</p>
        <p className="text-xs font-mono text-primary/70 pt-1">{period}</p>
      </div>
    </motion.div>
  );
}
