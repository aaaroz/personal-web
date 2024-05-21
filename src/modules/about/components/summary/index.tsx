import { summary } from "@/constants/summary";
import * as React from "react";

export const Summary: React.FC = (): React.ReactElement => {
  return (
    <div className="flex flex-col gap-6 font-sans text-justify">
      <p>{summary.paragraphOne}</p>
      <p>{summary.paragraphTwo}</p>
      <p>{summary.paragraphThree}</p>
      <p>{summary.paragraphFour}</p>
    </div>
  );
};
