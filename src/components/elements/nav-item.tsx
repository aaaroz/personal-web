import * as React from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import type { NavItemProps } from "@/types/nav";

export const NavItem: React.FC<NavItemProps> = ({
  href,
  name,
  icon,
  isActive,
  isMobile,
}: NavItemProps): React.ReactElement => {
  return (
    <Tooltip delayDuration={0}>
      <TooltipTrigger asChild>
        <a href={href} title={name}>
          <span
            className={`relative cursor-pointer flex justify-start items-center group-[[data-collapsed=true]]:pl-3 pl-10 py-2 rounded-md hover:pl-12 gap-2 hover:gap-3 text-foreground font-semibold transition-all duration-300 hover:text-foreground/90 ${
              isActive
                ? "bg-primary text-primary-foreground hover:text-primary-foreground dark:text-foreground hover:bg-primary/80"
                : "hover:bg-primary/10"
            }`}
          >
            <span className="group-[[data-collapsed=true]]:static absolute left-3">
              {icon}
            </span>
            <span className="group-[[data-collapsed=true]]:hidden">{name}</span>
          </span>
        </a>
      </TooltipTrigger>
      <TooltipContent
        data-ismobile={isMobile}
        side="right"
        className="group-[[data-collapsed=false]]:hidden data-[ismobile=true]:hidden font-semibold"
      >
        {name}
      </TooltipContent>
    </Tooltip>
  );
};
