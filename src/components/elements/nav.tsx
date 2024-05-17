import * as React from "react";
import { TooltipProvider } from "../ui/tooltip";
import { NavItem } from "./nav-item";
import type { NavItemProps, NavProps } from "@/types/nav";

export const Nav = ({
  list,
  pathname,
  isMobile,
}: NavProps): React.ReactElement => {
  return (
    <nav className="w-full">
      <TooltipProvider>
        <ul className="flex flex-col gap-3">
          {list?.map((item: NavItemProps, index: number) => {
            pathname === item.href
              ? (item.isActive = true)
              : (item.isActive = false);
            return (
              <NavItem
                key={index}
                href={item.href}
                name={item.name}
                icon={item.icon}
                isActive={item.isActive}
                isMobile={isMobile}
              />
            );
          })}
        </ul>
      </TooltipProvider>
    </nav>
  );
};
