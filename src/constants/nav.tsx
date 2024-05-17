import type { NavItemProps } from "@/types/nav";
import { BiArchive, BiHome, BiLeaf, BiPaperPlane } from "react-icons/bi";

export const listItems: NavItemProps[] = [
  {
    name: "Home",
    href: "/",
    isActive: false,
    icon: <BiHome className="h-5 w-5" />,
  },
  {
    name: "About",
    href: "/about",
    isActive: false,
    icon: <BiLeaf className="h-5 w-5" />,
  },
  {
    name: "Projects",
    href: "/projects",
    isActive: false,
    icon: <BiArchive className="h-5 w-5" />,
  },
  {
    name: "Contact",
    href: "/contact",
    isActive: false,
    icon: <BiPaperPlane className="h-5 w-5" />,
  },
];
