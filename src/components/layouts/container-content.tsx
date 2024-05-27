import * as React from "react";
import { cn } from "@/lib/utils";

interface ContainerContentProps {
  children: React.ReactNode;
  className?: string;
}

export const ContainerContent: React.FC<ContainerContentProps> = ({
  children,
  className,
}: ContainerContentProps) => {
  return (
    <div className={cn("mt-2 mb-10 sm:mt-12 sm:mb-14 sm:px-5", className)}>
      {children}
    </div>
  );
};
