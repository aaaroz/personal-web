import * as React from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "../ui/button";
import { BiMenu, BiX } from "react-icons/bi";
import { Nav } from "./nav";
import { listItems } from "@/constants/nav";
import { Footer } from "../layouts/footer";
import { Separator } from "../ui/separator";

export const DrawerToggle = ({
  pathname,
}: {
  pathname: string;
}): React.ReactElement => {
  const [isMounted, setIsMounted] = React.useState<boolean>(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted)
    return (
      <Button size="icon" variant="ghost">
        <BiMenu className="w-5 h-5" />
      </Button>
    );
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button size="icon" variant="ghost">
          <BiMenu className="w-5 h-5" />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="w-full p-2">
          <div className="flex w-full justify-end">
            <DrawerClose asChild>
              <Button size="icon" variant="outline">
                <BiX className="w-5 h-5" />
              </Button>
            </DrawerClose>
          </div>
          <DrawerHeader className="w-full flex flex-col justify-start items-start">
            <DrawerTitle>Welcome to my website! 🚀</DrawerTitle>
            <DrawerDescription>
              You can explore my website through this navigation.
            </DrawerDescription>
          </DrawerHeader>
          <Separator />
          <section className="py-8">
            <Nav list={listItems} pathname={pathname} isMobile />
          </section>
          <Separator />
          <DrawerFooter>
            <Footer />
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
};
