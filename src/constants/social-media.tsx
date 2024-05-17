import type { SocialMedia } from "@/types/social-media";
import { BsDiscord, BsGithub, BsLinkedin } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";

const iconSize = 24;

export const socialMedia: SocialMedia[] = [
  {
    title: "Github",
    href: "https://github.com/aaaroz",
    icon: <BsGithub size={iconSize} />,
    bgColor: "bg-gray-800",
  },
  {
    title: "Linkedin",
    href: "https://linkedin.com/in/rmdnmar",
    icon: <BsLinkedin size={iconSize} />,
    bgColor: "bg-blue-600",
  },
  {
    title: "Instagram",
    href: "https://instagram.com/rmdnmar",
    icon: <RiInstagramFill size={iconSize} />,
    bgColor: "bg-pink-600",
  },
  {
    title: "Discord",
    href: "https://discord.gg/yW36SsuD",
    icon: <BsDiscord size={iconSize} />,
    bgColor: "bg-purple-700/70",
  },
];
