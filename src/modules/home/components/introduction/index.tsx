import * as React from "react";
import { TypeAnimation } from "@/components/elements/type-animation";
import { introductionContent } from "@/constants/introduction";

export const Introduction: React.FC = (): React.ReactElement => {
  return (
    <section className="space-y-2">
      <div className="font-serif flex gap-2 text-2xl font-medium lg:text-3xl">
        <TypeAnimation sequence={introductionContent.sequences} delay={3000} />
      </div>
      <div className="space-y-4">
        <ul className="ml-5 flex list-disc flex-col flex-wrap sm:gap-8 text-muted-foreground sm:flex-row">
          {introductionContent.roles.map((role, i) => (
            <li key={i}>{role}</li>
          ))}
        </ul>
        <p className="leading-[1.8] text-foreground md:leading-loose">
          {introductionContent.description}
        </p>
      </div>
    </section>
  );
};
