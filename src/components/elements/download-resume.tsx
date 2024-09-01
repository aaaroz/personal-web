import * as React from "react";
import { BiSolidDownvote } from "react-icons/bi";

export const DownloadResume = (): React.ReactElement => {
  return (
    <a
      href="https://drive.google.com/file/d/1H77zHEZCcWkPzF9o-O-3b8FzfW0Mvkm8/view?usp=sharing"
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-2 text-muted-foreground font-semibold transition-all duration-300 hover:text-muted-foreground/80 hover:underline"
    >
      <div
        data-testid="download-icon-container"
        className="overflow-hidden border-b-2 border-muted-foreground group-hover:border-muted-foreground/80"
      >
        <BiSolidDownvote
          data-testid="download-icon"
          className="animate-rain-arrow"
        />
      </div>
      <span>Download Resume</span>
    </a>
  );
};
