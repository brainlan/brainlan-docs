import node from "@astrojs/node";
import sitemap from "@astrojs/sitemap";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import { defineConfig } from "astro/config";

let adapter = vercel({
  webAnalytics: {
    enabled: true,
    maxDuration: 60,
  },
});
let site = "https://brainlan.com";
if (process.argv[3] === "--node") {
  adapter = node({
    mode: "standalone",
  });
  site = "http://localhost:4321";
}

export default defineConfig({
  site,
  output: "hybrid",
  adapter,
  integrations: [
    sitemap(),
    tailwind(),
    starlight({
      title: "Brainlan Documentation",
      logo: {
        light: "/public/logo.svg",
        dark: "/public/logo-white.svg",
      },
      social: {
        github: "https://github.com/orgs/brainlan/repositories",
      },
      editLink: {
        baseUrl: "https://github.com/brainlan/brainlan-docs/edit/main/",
      },
      lastUpdated: true,
      sidebar: [
        {
          label: "General",
          autogenerate: { directory: "general" },
        },
        {
          label: "Database",
          autogenerate: { directory: "database", collapsed: true },
        },
        {
          label: "Interfaces",
          autogenerate: { directory: "interface" },
        },
      ],
      customCss: ["./src/tailwind.css"],
    }),
    tailwind({ applyBaseStyles: false }),
  ],
});
