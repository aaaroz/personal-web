import * as React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { ModeToggle } from "../elements/mode-toggle";
import { DrawerToggle } from "../elements/drawer-toggle";

interface TopbarProps {
  pathname: string;
}

export const Topbar: React.FC<TopbarProps> = ({
  pathname,
}: TopbarProps): React.ReactElement => {
  return (
    <header className="sticky top-0 z-50 flex sm:hidden p-4 items-center justify-between bg-background/40 backdrop-blur-md bg-opacity-25">
      <div className="flex gap-3 items-center justify-center">
        <Avatar>
          <AvatarImage src="https://avatars.githubusercontent.com/u/136713175?v=4" />
          <AvatarFallback>ZR</AvatarFallback>
        </Avatar>
        <div>
          <h1 className="text-xl font-semibold text-foreground leading-none">
            M R Ardiansyah
          </h1>
          <p className="text-muted-foreground font-semibold">@aaaroz</p>
        </div>
      </div>
      <div className="flex gap-2 items-center">
        <ModeToggle />
        <DrawerToggle pathname={pathname} />
      </div>
    </header>
  );
};
