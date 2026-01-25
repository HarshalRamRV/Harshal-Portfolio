"use client";

import { motion } from "framer-motion";
import { Trophy, Award, Medal } from "lucide-react";

interface AchievementCardProps {
  title: string;
  description: string;
  period: string;
  icon: string;
  index: number;
}

const iconMap: Record<string, React.ReactNode> = {
  trophy: <Trophy className="h-6 w-6" />,
  award: <Award className="h-6 w-6" />,
  medal: <Medal className="h-6 w-6" />,
};

export function AchievementCard({
  title,
  description,
  period,
  icon,
  index,
}: AchievementCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ scale: 1.03, y: -4 }}
      className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all"
    >
      <div className="flex items-start gap-4">
        <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 text-primary shrink-0">
          {iconMap[icon] || <Trophy className="h-6 w-6" />}
        </div>
        <div>
          <h3 className="font-semibold text-lg">{title}</h3>
          <p className="text-muted-foreground mt-1">{description}</p>
          <p className="text-sm text-primary mt-2">{period}</p>
        </div>
      </div>
    </motion.div>
  );
}
