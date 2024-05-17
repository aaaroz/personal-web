import * as React from "react";
import type { TServiceItem } from "@/types/service";
import { ServiceCard } from "./service-card";

interface ServiceListProps {
  items: TServiceItem[];
}

export const ServiceList = ({
  items,
}: ServiceListProps): React.ReactElement => {
  return (
    <div className="my-6 grid grid-cols-1 gap-2 md:grid-cols-2">
      {items.map((item, i) => (
        <ServiceCard key={i} {...item} />
      ))}
    </div>
  );
};
