import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import sitemap from "@astrojs/sitemap";
import compress from "astro-compress";
import { defineConfig } from "astro/config";
import { VitePWA } from "vite-plugin-pwa";
import { seoConfig, manifest } from "./src/helpers/seo-config";

// https://astro.build/config
export default defineConfig({
  site: seoConfig.baseURL,
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap(),
    compress(),
  ],
  image: {
    remotePatterns: [
      {
        protocol: "https",
      },
    ],
    domains: ["avatars.githubusercontent.com", "res.cloudinary.com"],
  },
  output: "server",
  adapter: vercel(),
  vite: {
    plugins: [
      VitePWA({
        registerType: "autoUpdate",
        manifest: manifest,
        workbox: {
          globDirectory: "dist",
          globPatterns: [
            "**/*.{js,css,svg,png,jpg,jpeg,gif,webp,woff,woff2,ttf,eot,ico}",
          ],
          navigateFallback: null,
        },
      }),
    ],
  },
});
