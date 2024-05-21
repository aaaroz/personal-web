import * as React from "react";

interface PageHeadingProps {
  title: string;
  description?: string;
}

export const PageHeading: React.FC<PageHeadingProps> = ({
  title,
  description,
}: PageHeadingProps): React.ReactElement => {
  return (
    <>
      <h1 className="text-2xl font-medium">{title}</h1>
      <p className="mb-6 border-b border-dashed border-border pb-6 pt-2 text-muted-foreground">
        {description}
      </p>
    </>
  );
};
