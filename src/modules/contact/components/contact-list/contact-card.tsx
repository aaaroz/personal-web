import * as React from "react";
import type { SocialMedia } from "@/types/social-media";
import { cn } from "@/lib/utils";

export const ContactCard = ({
  title,
  bgColor,
  icon,
  href,
}: SocialMedia): React.ReactElement => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "flex w-full items-center justify-center space-x-2 rounded-lg px-4 py-2 text-white shadow-lg md:w-max",
        bgColor
      )}
    >
      {icon}
      <span className="text-sm">{title}</span>
    </a>
  );
};
