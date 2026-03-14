"use client";

import { motion } from "framer-motion";
// eslint-disable-next-line @typescript-eslint/no-deprecated
import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
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
              {project.title}
            </h3>
            <p className="text-sm text-muted-foreground mt-0.5">{project.subtitle}</p>
          </div>
          <div className="flex items-center gap-2 shrink-0 pt-0.5">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <ExternalLink className="h-4 w-4" />
                <span className="sr-only">Live</span>
              </a>
            )}
          </div>
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.technologies.slice(0, 6).map((tech) => (
            <Badge key={tech} variant="secondary" className="text-xs font-mono">
              {tech}
            </Badge>
          ))}
          {project.technologies.length > 6 && (
            <span className="text-xs text-muted-foreground self-center">
              +{project.technologies.length - 6}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}
