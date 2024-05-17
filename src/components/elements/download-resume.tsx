import * as React from "react";
import { BiSolidDownvote } from "react-icons/bi";

export const DownloadResume = (): React.ReactElement => {
  return (
    <button className="group flex items-center gap-2 text-muted-foreground font-semibold transition-all duration-300 hover:text-muted-foreground/80 hover:underline">
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
    </button>
  );
};
