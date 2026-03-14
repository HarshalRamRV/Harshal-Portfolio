"use client";

import { SectionWrapper } from "@/components/layout/section-wrapper";
import { SectionTitle } from "@/components/shared/section-title";
import { ProjectCard } from "@/components/shared/project-card";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <SectionWrapper id="projects" className="dot-pattern">
      <SectionTitle title="Projects" />

      <div>
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </SectionWrapper>
  );
}
