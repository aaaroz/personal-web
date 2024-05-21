import * as React from "react";
import type { TCareerItem } from "@/types/career";
import { CareerCard } from "./career-card";

interface CareerListProps {
  items: TCareerItem[];
}

export const CareerList: React.FC<CareerListProps> = ({
  items,
}: CareerListProps): React.ReactElement => {
  return (
    <div className="grid grid-cols-1 gap-2 md:grid-cols-2 pt-2">
      {items.map((item, i) => (
        <CareerCard key={i} {...item} />
      ))}
    </div>
  );
};
