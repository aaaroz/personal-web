import type { TProjectItem } from "@/types/project";

export const projects: TProjectItem[] = [
  {
    id: 1,
    title: "Zora Form",
    slug: "zora-form",
    description:
      "Simplest form builder with drag n drop method, created with nextjs app router, typescript, and postgresql",
    image: "/images/zora-form.jpg",
    link_demo: "https://zora-form.vercel.app",
    link_github: "https://github.com/aaaroz/zora-form",
    stacks: ["TypeScript", "Next.js", "PostgreSql", "TailwindCSS"],
    content: "ini konten",
    is_show: true,
    is_featured: true,
  },
  {
    id: 2,
    title: "ZORANIME",
    slug: "zoranime",
    description:
      "ZORANIME is a website that provides a list of anime recommended by one of the biggest websites in the world of anime, namely myAnimeList.",
    image: "/images/zoranime.jpg",
    link_demo: "https://zoranime.vercel.app",
    link_github: "https://github.com/aaaroz/zoranime",
    stacks: ["TypeScript", "Next.js", "PostgreSql", "TailwindCSS"],
    content: "ini konten",
    is_show: true,
    is_featured: true,
  },
  {
    id: 3,
    title: "Zora Ecommerce",
    slug: "zora-ecommerce",
    description:
      "ZORA E-Commerce sell all about fashion for mens and womens, in ZORA E-Commerce you can sell ur own products, and you can manage your products with ZORA E-Commerce Dashboard Feature",
    image: "/images/zora-ecommerce.jpg",
    link_demo: "https://zora-ecommerce.vercel.app",
    link_github: "https://github.com/aaaroz/zora-mini-project",
    stacks: ["JavaScript", "React.js", "Vite", "Firebase", "TailwindCSS"],
    content: "ini konten",
    is_show: true,
    is_featured: false,
  },

  {
    id: 4,
    title: "Digital Innovation",
    slug: "digital-innovation",
    description:
      "Digital Innovation is a simple landing page for company, that i create for an assignment called Code Competence in my studi independent at Alterra Academy.",
    image: "/images/digital-innovation.jpg",
    link_demo: "https://code-competence2-xi.vercel.app",
    link_github: "https://github.com/aaaroz/codeCompetence2",
    stacks: ["JavaScript", "React.js"],
    content: "ini konten",
    is_show: true,
    is_featured: false,
  },
];
