import * as React from "react";
import { HiOutlineBriefcase } from "react-icons/hi";
import { SectionHeading } from "@/components/elements/section-heading";
import { SectionSubHeading } from "@/components/elements/section-sub-heading";
import { DownloadResume } from "@/components/elements/download-resume";

import { careerList } from "@/constants/careers";
import { CareerList } from "./career-list";

export const Career: React.FC = (): React.ReactElement => {
  return (
    <section className="space-y-2">
      <SectionHeading
        title="Career"
        icon={<HiOutlineBriefcase className="mr-1" />}
      />
      <SectionSubHeading>
        <h2>My professional career experience</h2>
        <DownloadResume />
      </SectionSubHeading>
      <CareerList items={careerList} />
    </section>
  );
};
