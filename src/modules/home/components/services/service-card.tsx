import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { TServiceItem } from "@/types/service";

export const ServiceCard = ({
  title,
  description,
  hashtag,
  icon,
}: TServiceItem): React.ReactElement => {
  return (
    <Card className="bg-accent">
      <CardHeader className="space-y-3 pb-3">
        <CardTitle className="flex items-center text-accent-foreground">
          {icon}
          <span>{title}</span>
        </CardTitle>
        <Badge className="w-fit">{hashtag}</Badge>
      </CardHeader>
      <CardContent>
        <p>{description}</p>
      </CardContent>
    </Card>
  );
};
