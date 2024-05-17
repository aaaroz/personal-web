import * as React from "react";

interface SectionSubHeadingProps {
  children?: React.ReactNode;
}

export const SectionSubHeading = ({
  children,
}: SectionSubHeadingProps): React.ReactElement => {
  return (
    <div className="flex flex-col justify-between gap-2 text-muted-foreground md:flex-row lg:items-center">
      {children}
    </div>
  );
};
