import * as React from "react";
import { HiCode } from "react-icons/hi";

import { STACKS } from "@/constants/stacks";
import { SectionHeading } from "@/components/elements/section-heading";
import { SectionSubHeading } from "@/components/elements/section-sub-heading";
import { InfiniteMovingElement } from "@/components/ui/infinite-moving-element";

import { BiLoader } from "react-icons/bi";
import { SkillCard } from "@/components/elements/skill-card";
import { skillContent } from "@/constants/skill-list";

export const SkillList: React.FC = (): React.ReactElement => {
  const [isMounted, setIsMounted] = React.useState<boolean>(false);
  const stacksInArray: Array<[string, React.ReactElement]> = Object.entries(
    STACKS
  ).sort(() => Math.random() - 0.5);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted)
    return (
      <section className="space-y-6">
        <div className="space-y-2">
          <SectionHeading
            title={skillContent.title}
            icon={<HiCode className="mr-1" />}
          />
          <SectionSubHeading>
            <p>{skillContent.subTitle}</p>
          </SectionSubHeading>
        </div>
        <div className="rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
          <BiLoader className="animate-spin" />
        </div>
      </section>
    );

  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <SectionHeading
          title={skillContent.title}
          icon={<HiCode className="mr-1" />}
        />
        <SectionSubHeading>
          <p>{skillContent.subTitle}</p>
        </SectionSubHeading>
      </div>
      <div className="rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
        {Array.from({ length: 2 }, (_, index) => {
          const slider = [...stacksInArray].sort(() => Math.random() - 0.5);
          return (
            <InfiniteMovingElement
              key={index}
              direction={index % 2 === 0 ? "left" : "right"}
              speed="slow"
              pauseOnHover={false}
            >
              {slider.map(([name, icon], index) => (
                <SkillCard key={index} name={name} icon={icon} />
              ))}
            </InfiniteMovingElement>
          );
        })}
      </div>
    </section>
  );
};
