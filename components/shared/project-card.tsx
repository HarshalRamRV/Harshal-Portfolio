"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Calendar, Bot, Database, MessageSquare, Cpu, Code2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const projectIcons: Record<string, React.ReactNode> = {
  "query-llm": (
    <>
      <MessageSquare className="h-12 w-12 text-primary" />
      <Cpu className="h-8 w-8 text-secondary absolute bottom-4 right-4" />
    </>
  ),
  "salessense-ai": (
    <>
      <Bot className="h-12 w-12 text-primary" />
      <Database className="h-8 w-8 text-secondary absolute bottom-4 right-4" />
    </>
  ),
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      className="h-full"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <motion.div
        className="h-full"
        whileHover={{ y: -8 }}
        transition={{ duration: 0.2 }}
      >
        <Card className="h-full overflow-hidden group hover:border-primary/50 transition-all duration-300">
          {/* Project Preview */}
          <div className="relative h-48 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 overflow-hidden">
            {/* Grid pattern background */}
            <div className="absolute inset-0 opacity-30">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
                backgroundSize: '24px 24px',
              }} />
            </div>

            {/* Floating decorative elements */}
            <motion.div
              animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-6 left-6 w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 backdrop-blur-sm border border-primary/20"
            />
            <motion.div
              animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute top-4 right-8 w-12 h-12 rounded-lg bg-gradient-to-br from-secondary/20 to-secondary/5 backdrop-blur-sm border border-secondary/20"
            />
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-8 left-1/4 w-8 h-8 rounded-full bg-gradient-to-br from-accent/20 to-accent/5 backdrop-blur-sm border border-accent/20"
            />

            {/* Center icon display */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="relative p-6 rounded-2xl bg-card/80 backdrop-blur-sm border border-border shadow-lg"
                whileHover={{ scale: 1.05 }}
              >
                {projectIcons[project.id] || <Code2 className="h-12 w-12 text-primary" />}
              </motion.div>
            </div>

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-primary/90 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {project.githubUrl && (
                <motion.a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors"
                >
                  <Github className="h-5 w-5" />
                </motion.a>
              )}
              {project.liveUrl && (
                <motion.a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors"
                >
                  <ExternalLink className="h-5 w-5" />
                </motion.a>
              )}
            </div>
          </div>

          <CardHeader className="pb-2">
            <div className="flex items-start justify-between gap-2">
              <div>
                <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-primary">{project.subtitle}</p>
              </div>
              {project.featured && (
                <Badge variant="default" className="shrink-0">
                  Featured
                </Badge>
              )}
            </div>
          </CardHeader>

          <CardContent className="pb-4">
            <p className="text-sm text-muted-foreground line-clamp-3">
              {project.description}
            </p>

            {/* Date */}
            <div className="flex items-center gap-1 mt-3 text-xs text-muted-foreground">
              <Calendar className="h-3 w-3" />
              <span>{project.date}</span>
            </div>
          </CardContent>

          <CardFooter className="flex flex-col gap-4">
            {/* Technologies */}
            <div className="flex flex-wrap gap-1.5 w-full">
              {project.technologies.slice(0, 5).map((tech) => (
                <Badge key={tech} variant="outline" className="text-xs">
                  {tech}
                </Badge>
              ))}
              {project.technologies.length > 5 && (
                <Badge variant="ghost" className="text-xs">
                  +{project.technologies.length - 5}
                </Badge>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2 w-full">
              {project.githubUrl && (
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1"
                  asChild
                >
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center whitespace-nowrap"
                  >
                    <Github className="h-4 w-4 mr-2 shrink-0" />
                    Code
                  </a>
                </Button>
              )}
              {project.liveUrl && (
                <Button size="sm" className="flex-1" asChild>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center whitespace-nowrap"
                  >
                    <ExternalLink className="h-4 w-4 mr-2 shrink-0" />
                    Live Demo
                  </a>
                </Button>
              )}
            </div>
          </CardFooter>
        </Card>
      </motion.div>
    </motion.div>
  );
}
