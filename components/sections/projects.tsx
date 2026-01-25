"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { SectionTitle } from "@/components/shared/section-title";
import { ProjectCard } from "@/components/shared/project-card";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <SectionWrapper id="projects" className="section-gradient noise">
      <SectionTitle
        title="Featured Projects"
        subtitle="Some of the projects I've worked on"
      />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
        className="grid md:grid-cols-2 gap-6"
      >
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </motion.div>

      {/* More Projects Coming Soon */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="mt-12 text-center"
      >
        <p className="text-muted-foreground">
          More projects coming soon...
        </p>
      </motion.div>
    </SectionWrapper>
  );
}
