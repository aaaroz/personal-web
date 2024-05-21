import * as React from "react";
import { Card } from "@/components/ui/card";
import type { TProjectItem } from "@/types/project";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { STACKS } from "@/constants/stacks";
import { BsGithub, BsGlobe } from "react-icons/bs";
import { ArrowUpRight } from "lucide-react";

export const ProjectCard: React.FC<TProjectItem> = ({
  title,
  description,
  image,
  stacks,
  is_featured,
  link_demo,
  link_github,
}: TProjectItem): React.ReactElement => {
  const trimmedContent =
    description.slice(0, 70) + (description.length > 70 ? "..." : "");
  return (
    <TooltipProvider>
      <Card className="relative z-0 border border-border transition-all duration-300 bg-accent">
        {is_featured && (
          <div className="absolute right-0 top-0 z-[2] rounded-bl-lg rounded-tr-lg bg-primary px-2 py-1 text-[13px] font-medium text-primary-foreground">
            Featured
          </div>
        )}
        <img
          src={image}
          width={400}
          height={200}
          alt={title}
          className="h-48 rounded-t-lg object-cover object-center w-full md:max-w-[400px] hover:scale-[102%] transition-all duration-300"
        />
        <div className="space-y-2 p-5">
          <div className="flex justify-between cursor-pointer text-lg text-foreground font-semibold ">
            <h1 className="truncate transition-all duration-300 hover:text-primary">
              {title}
            </h1>
            <span className="flex gap-1">
              <Tooltip delayDuration={0}>
                <TooltipTrigger>
                  <a
                    href={link_github!}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BsGithub
                      size={24}
                      className="transition-all duration-300 hover:text-primary"
                    />
                  </a>
                </TooltipTrigger>
                <TooltipContent side="top">
                  <div className="flex gap-1">
                    Source Code <ArrowUpRight size={16} />
                  </div>
                </TooltipContent>
              </Tooltip>
              <Tooltip delayDuration={0}>
                <TooltipTrigger>
                  <a
                    href={link_demo!}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BsGlobe
                      size={24}
                      className="transition-all duration-300 hover:text-primary"
                    />
                  </a>
                </TooltipTrigger>
                <TooltipContent side="top">
                  <div className="flex gap-1">
                    Live Demo <ArrowUpRight size={16} />
                  </div>
                </TooltipContent>
              </Tooltip>
            </span>
          </div>
          <Tooltip delayDuration={0}>
            <TooltipTrigger>
              <p className="text-left text-[15px] leading-relaxed text-neutral-700 dark:text-neutral-400">
                {trimmedContent}
              </p>
            </TooltipTrigger>
            <TooltipContent side="top" className="w-[300px]">
              {description}
            </TooltipContent>
          </Tooltip>
          <div className="flex flex-wrap items-center gap-3 pt-2">
            {stacks?.map((stack: string, index: number) => (
              <Tooltip key={index} delayDuration={0}>
                <div className="w-6">
                  <TooltipTrigger>{STACKS[stack]}</TooltipTrigger>
                  <TooltipContent side="top">{stack}</TooltipContent>
                </div>
              </Tooltip>
            ))}
          </div>
        </div>
      </Card>
    </TooltipProvider>
  );
};
