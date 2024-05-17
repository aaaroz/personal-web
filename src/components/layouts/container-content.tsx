import * as React from "react";
import { cn } from "@/lib/utils";

export const ContainerContent = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "mt-2 mb-10 sm:mt-12 sm:mb-14 sm:px-5 overflow-y-auto",
        className
      )}
    >
      {children}
    </div>
  );
};
