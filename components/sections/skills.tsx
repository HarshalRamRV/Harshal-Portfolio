"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Server,
  GitBranch,
  Bot,
  Users
} from "lucide-react";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { SectionTitle } from "@/components/shared/section-title";
import { SkillBadge } from "@/components/shared/skill-badge";
import { skillCategories } from "@/data/skills";

const categoryIcons: Record<string, React.ReactNode> = {
  Frontend: <Code2 className="h-5 w-5" />,
  Backend: <Server className="h-5 w-5" />,
  DevOps: <GitBranch className="h-5 w-5" />,
  "AI/ML Tools": <Bot className="h-5 w-5" />,
  "Soft Skills": <Users className="h-5 w-5" />,
};

const categoryColors: Record<string, string> = {
  Frontend: "from-blue-500/20 to-cyan-500/20 border-blue-500/30",
  Backend: "from-green-500/20 to-emerald-500/20 border-green-500/30",
  DevOps: "from-orange-500/20 to-amber-500/20 border-orange-500/30",
  "AI/ML Tools": "from-purple-500/20 to-pink-500/20 border-purple-500/30",
  "Soft Skills": "from-rose-500/20 to-red-500/20 border-rose-500/30",
};

export function Skills() {
  return (
    <SectionWrapper id="skills" className="bg-muted/30">
      <SectionTitle
        title="Skills"
        subtitle="Technologies and tools I work with"
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            whileHover={{ y: -4 }}
            className={`p-6 rounded-xl bg-gradient-to-br ${categoryColors[category.name]} border backdrop-blur-sm`}
          >
            {/* Category Header */}
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-background/50">
                {categoryIcons[category.name]}
              </div>
              <h3 className="font-semibold text-lg">{category.name}</h3>
            </div>

            {/* Skills */}
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <SkillBadge
                  key={skill}
                  skill={skill}
                  index={skillIndex}
                />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
