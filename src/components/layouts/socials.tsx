import * as React from "react";
import { socialMedia } from "@/constants/social-media";

export const Socials: React.FC = (): React.ReactElement => {
  return (
    <section className="flex flex-col gap-3 justify-center items-center">
      <h2 className="font-medium">Reach me out</h2>
      <div className="flex gap-2 items-center flex-wrap">
        {socialMedia.map((item, i) => (
          <a
            className="text-2xl"
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            key={i}
            title={item.title}
          >
            {item.icon}
          </a>
        ))}
      </div>
    </section>
  );
};
