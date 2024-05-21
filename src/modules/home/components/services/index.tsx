import * as React from "react";
import { FaServicestack } from "react-icons/fa";
import { BiMailSend } from "react-icons/bi";

import { SectionHeading } from "@/components/elements/section-heading";
import { SectionSubHeading } from "@/components/elements/section-sub-heading";
import { Button } from "@/components/ui/button";
import { serviceContent, serviceList } from "@/constants/services";
import { ServiceList } from "./service-list";

export const Services: React.FC = (): React.ReactElement => {
  return (
    <section>
      <div className="space-y-2">
        <SectionHeading
          title={serviceContent.title}
          icon={<FaServicestack className="mr-1" />}
        />
        <SectionSubHeading>
          <h3>{serviceContent.subTitle}</h3>
        </SectionSubHeading>
      </div>
      <ServiceList items={serviceList} />
      <a href="mailto:ram.ardiansyah18@gmail.com">
        <Button className="font-semibold">
          Hire Me <BiMailSend className="ml-2 w-5 h-5" />
        </Button>
      </a>
    </section>
  );
};
