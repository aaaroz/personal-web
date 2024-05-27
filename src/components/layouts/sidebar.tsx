import * as React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { ModeToggle } from "../elements/mode-toggle";
import { Separator } from "../ui/separator";
import { useMediaQuery } from "@/lib/hooks";
import { Nav } from "../elements/nav";
import { listItems } from "@/constants/nav";
import { Footer } from "./footer";
import { SpotifyCard } from "../elements/spotify-card";

export const Sidebar = ({
  pathname,
}: {
  pathname: string;
}): React.ReactElement => {
  const [isCollapsed, setIsCollapsed] = React.useState<boolean>(false);
  const isDesktop = useMediaQuery("(min-width:1024px)");

  const widthCheck = React.useCallback(() => {
    if (isDesktop) {
      setIsCollapsed(false);
    } else {
      setIsCollapsed(true);
    }
  }, [setIsCollapsed, isDesktop]);

  React.useEffect(() => {
    widthCheck();
  }, [widthCheck]);

  return (
    <aside
      data-collapsed={isCollapsed}
      className="group hidden sticky z-50 top-0 sm:flex flex-col justify-between min-w-60 space-y-5 py-10 max-h-screen data-[collapsed=true]:min-w-10  data-[collapsed=true]:max-w-12"
    >
      <section className="group-[[data-collapsed=true]]:flex-col group-[[data-collapsed=true]]:gap-3 flex justify-between items-center w-full">
        <Avatar>
          <AvatarImage
            src="https://avatars.githubusercontent.com/u/136713175?v=4"
            alt="avatar"
          />
          <AvatarFallback>ZR</AvatarFallback>
        </Avatar>
        <div>
          <h1 className="group-[[data-collapsed=true]]:hidden text-xl font-semibold">
            M R Ardiansyah
          </h1>
          <p className="group-[[data-collapsed=true]]:hidden text-muted-foreground font-semibold">
            @aaaroz
          </p>
        </div>
        <ModeToggle />
      </section>
      <Separator />
      <Nav pathname={pathname} list={listItems} />
      <Separator />
      <SpotifyCard />
      <Footer />
    </aside>
  );
};
