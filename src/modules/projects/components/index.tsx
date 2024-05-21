import * as React from "react";
import { ProjectCard } from "./project-card";
import { projects } from "@/constants/projects";

export const Projects: React.FC = (): React.ReactElement => {
  return (
    <section className="grid gap-4 pt-2 sm:grid-cols-2">
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </section>
  );
};
