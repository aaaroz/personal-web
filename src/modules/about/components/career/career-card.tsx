import * as React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { TCareerItem } from "@/types/career";

export const CareerCard = ({
  imageUrl,
  position,
  company,
  city,
  description,
  fromDate,
  toDate,
}: TCareerItem): React.ReactElement => {
  return (
    <Card className="flex flex-row items-center">
      <CardHeader className="p-2">
        <img
          src={imageUrl}
          alt="company-logo"
          width={200}
          height={200}
          className="bg-white max-w-20"
        />
      </CardHeader>
      <CardContent className="py-4 px-2 space-y-2">
        <CardTitle>{position}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <CardDescription className="flex items-center gap-1 md:gap-2">
          <span>{company}</span>
          <span className="text-foreground">•</span>
          <span>{city}</span>
        </CardDescription>
        <CardFooter className="flex items-center gap-1 md:gap-2 p-0 text-sm">
          <span>{fromDate}</span>
          <span>-</span>
          <span>{toDate}</span>
        </CardFooter>
      </CardContent>
    </Card>
  );
};
