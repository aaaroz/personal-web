import * as React from "react";

interface SkillCardProps {
  name: string;
  icon: React.ReactElement;
}

export const SkillCard: React.FC<SkillCardProps> = ({
  name,
  icon,
}: SkillCardProps): React.ReactElement => {
  return (
    <div className="px-2">
      <div className="flex w-full space-x-2 rounded px-4 py-2 shadow-[0_3px_10px_rgb(0,0,0,0.15)] dark:shadow-foreground/30">
        <div className="h-6 w-6">{icon}</div>
        <div className="whitespace-nowrap">{name}</div>
      </div>
    </div>
  );
};
