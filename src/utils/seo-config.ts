// Type imports
import type { ManifestOptions } from "vite-plugin-pwa";

const { PUBLIC_BASE_URL: baseUrl } = import.meta.env;

export const seoConfig = {
  baseURL: baseUrl,
  description: "This is my Personal Website build with astrojs.",
  type: "website",
  image: {
    url: "https://avatars.githubusercontent.com/u/136713175?v=4",
    alt: "Aaaroz Dev Personal Website.",
    width: 1200,
    height: 630,
  },
  siteName: "Aaaroz Dev ",
  twitter: {
    card: "summary_large_image" as const,
  },
};

export const manifest: Partial<ManifestOptions> = {
  name: "Aaaroz Dev ",
  short_name: "Aaaroz Dev ",
  description: "This is my website build with astrojs.",
  theme_color: "#2986CC",
  background_color: "#ffffff",
  display: "standalone",
  icons: [
    {
      src: "/favicons/favicon-192x192.png",
      sizes: "192x192",
      type: "image/png",
    },
    {
      src: "/favicons/favicon-512x512.png",
      sizes: "512x512",
      type: "image/png",
    },
    {
      src: "/favicons/favicon-512x512.png",
      sizes: "512x512",
      type: "image/png",
      purpose: "any maskable",
    },
  ],
};
