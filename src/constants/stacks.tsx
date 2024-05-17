import { BiLogoPostgresql } from "react-icons/bi";
import { BsFillBootstrapFill } from "react-icons/bs";
import {
  SiAntdesign,
  SiAstro,
  SiChakraui,
  SiCss3,
  SiExpo,
  SiExpress,
  SiFirebase,
  SiFlutter,
  SiFramer,
  SiGithub,
  SiGraphql,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiJson,
  SiMui,
  SiNextdotjs,
  SiNodedotjs,
  SiOpenai,
  SiPrisma,
  SiReact,
  SiReacthookform,
  SiReactquery,
  SiReactrouter,
  SiReacttable,
  SiRedux,
  SiSass,
  SiShadcnui,
  SiStorybook,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVite,
  SiVuedotjs,
} from "react-icons/si";

type stacksProps = {
  [key: string]: JSX.Element;
};

const iconSize = "100%";

export const STACKS: stacksProps = {
  JavaScript: <SiJavascript size={iconSize} className="text-yellow-400" />,
  TypeScript: <SiTypescript size={iconSize} className="text-blue-400" />,
  "Next.js": <SiNextdotjs size={iconSize} />,
  "React.js": <SiReact size={iconSize} className="text-sky-500" />,
  TailwindCSS: <SiTailwindcss size={iconSize} className="text-cyan-300" />,
  Bootstrap: (
    <BsFillBootstrapFill size={iconSize} className="text-purple-500" />
  ),
  GraphQL: <SiGraphql size={iconSize} className="text-pink-600" />,
  "Material UI": <SiMui size={iconSize} className="text-sky-400" />,
  Vite: <SiVite size={iconSize} className="text-purple-500" />,
  PostgreSql: <BiLogoPostgresql size={iconSize} className="text-blue-400" />,
  ChakraUI: <SiChakraui size={iconSize} className="text-teal-500" />,
  "React Native": <SiReact size={iconSize} className="text-sky-600" />,
  Expo: <SiExpo size={iconSize} />,
  SASS: <SiSass size={iconSize} className="text-pink-600" />,
  Firebase: <SiFirebase size={iconSize} className="text-yellow-500" />,
  Supabase: <SiSupabase size={iconSize} className="text-green-700" />,
  "Framer Motion": <SiFramer size={iconSize} />,
  "Vue.js": <SiVuedotjs size={iconSize} className="text-green-500" />,
  Jest: <SiJest size={iconSize} className="text-orange-600" />,
  "Express.js": <SiExpress size={iconSize} />,
  Redux: <SiRedux size={iconSize} className="text-purple-500" />,
  "React Query": <SiReactquery size={iconSize} className="text-red-600" />,
  HTML: <SiHtml5 size={iconSize} className="text-orange-500" />,
  CSS: <SiCss3 size={iconSize} className="text-blue-500" />,
  Prisma: <SiPrisma size={iconSize} className="text-teal-500" />,
  "Node JS": <SiNodedotjs size={iconSize} className="text-green-600" />,
  Github: <SiGithub size={iconSize} />,
  Storybook: <SiStorybook size={iconSize} className="text-pink-500" />,
  "React Router": <SiReactrouter size={iconSize} className="text-pink-500" />,
  "React Hook Form": (
    <SiReacthookform size={iconSize} className="text-pink-500" />
  ),
  "React Table": <SiReacttable size={iconSize} className="text-rose-600" />,
  Astro: <SiAstro size={iconSize} className="text-purple-500" />,
  Json: <SiJson size={iconSize} className="text-neutral-700" />,
  Flutter: <SiFlutter size={iconSize} className="text-sky-600" />,
  AntDesign: <SiAntdesign size={iconSize} className="text-sky-600" />,
  ShadcnUI: <SiShadcnui size={iconSize} />,
  OpenAI: <SiOpenai size={iconSize} />,
};
