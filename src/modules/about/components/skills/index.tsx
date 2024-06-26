import * as React from "react";
import { HiCode } from "react-icons/hi";
import { SectionHeading } from "@/components/elements/section-heading";
import { SectionSubHeading } from "@/components/elements/section-sub-heading";
import { SkillCard } from "@/components/elements/skill-card";
import { STACKS } from "@/constants/stacks";
import { skillContent } from "@/constants/skill-list";

export const Skills: React.FC = (): React.ReactElement => {
  const stacksInArray: Array<[string, React.ReactElement]> =
    Object.entries(STACKS);
  return (
    <section>
      <div className="space-y-2">
        <SectionHeading
          title={skillContent.title}
          icon={<HiCode className="mr-1" />}
        />
        <SectionSubHeading>
          <p>{skillContent.subTitle}</p>
        </SectionSubHeading>
      </div>
      <div className="flex flex-wrap gap-4 py-4 justify-start">
        {stacksInArray.map(([name, icon], id) => (
          <SkillCard key={id} icon={icon} name={name} />
        ))}
      </div>
    </section>
  );
};
