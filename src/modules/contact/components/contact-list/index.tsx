import { socialMedia } from "@/constants/social-media";
import * as React from "react";
import { ContactCard } from "./contact-card";
import { SectionHeading } from "@/components/elements/section-heading";

export const ContactList = (): React.ReactElement => {
  return (
    <section className="flex flex-col gap-6">
      <SectionHeading title="Find me on" />
      <div className="flex flex-wrap gap-3">
        {socialMedia.map((item, i) => (
          <ContactCard key={i} {...item} />
        ))}
      </div>
    </section>
  );
};
