import type { TServiceItem } from "@/types/service";
import {
  HiOutlineDesktopComputer,
  HiOutlineDeviceMobile,
} from "react-icons/hi";
import { RiSeoLine } from "react-icons/ri";

export const serviceList: TServiceItem[] = [
  {
    title: "Front End Developer",
    description:
      "Create beautiful and interactive websites and transform design into code with react and nextjs.",
    icon: <HiOutlineDesktopComputer className="mr-1" />,
    hashtag: "#coding",
  },
  {
    title: "Back End Developer",
    description: "Create API Service for your projects with express and node.",
    icon: <HiOutlineDesktopComputer className="mr-1" />,
    hashtag: "#coding",
  },
  {
    title: "Mobile Development",
    description:
      "Create cross platform mobile apps with flutter or react native.",
    icon: <HiOutlineDeviceMobile className="mr-1" />,
    hashtag: "#coding",
  },
  {
    title: "Search Engine Optimization",
    description: "Improve search engine optimization and web performance.",
    icon: <RiSeoLine className="mr-1" />,
    hashtag: "#marketing",
  },
];
