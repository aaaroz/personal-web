import * as React from "react";
import { TypeAnimation } from "@/components/elements/type-animation";

export const Introduction: React.FC = (): React.ReactElement => {
  return (
    <section className="space-y-2">
      <div className="font-serif flex gap-2 text-2xl font-medium lg:text-3xl">
        <TypeAnimation
          sequence={[
            "Hi, I'm Muhamad Ramdhan Mardiansyah",
            "Hi, I'm Web Developer",
          ]}
          delay={3000}
        />
      </div>
      <div className="space-y-4">
        <ul className="ml-5 flex list-disc flex-col flex-wrap sm:gap-8 text-muted-foreground sm:flex-row">
          <li>Remote worker </li>
          <li>Student</li>
          <li>
            Based in Bandung <span className="ml-1">🇮🇩</span>
          </li>
        </ul>
        <p className="leading-[1.8] text-foreground md:leading-loose">
          Passionate and seasoned Web Developer with a strong focus on frontend
          development. Working within the React ecosystem, proficient in
          TypeScript. Collaborative team player dedicated to delivering
          efficient, scalable, and visually appealing web applications.
        </p>
      </div>
    </section>
  );
};
