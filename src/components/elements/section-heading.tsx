import * as React from "react";

interface SectionHeadingProps {
  title: string;
  className?: string;
  icon?: React.ReactNode;
}

export const SectionHeading = ({
  title,
  icon,
  className = "",
}: SectionHeadingProps): React.ReactElement => {
  return (
    <div
      className={`flex items-center gap-1 text-xl font-semibold ${className}`}
    >
      {icon && <>{icon}</>}
      <h2 className="capitalize text-foreground">{title}</h2>
    </div>
  );
};
