import * as React from "react";
import { ProjectCard } from "./project-card";
import { projects } from "@/constants/projects";

export const Projects = (): React.ReactElement => {
  return (
    <section className="grid gap-3 pt-2 sm:grid-cols-2">
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </section>
  );
};
