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
let site = "https://docs.brainlan.com";
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
      title: "Docs with Tailwind",
      social: {
        github: "https://github.com/withastro/starlight",
      },
      sidebar: [
        {
          label: "Guides",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Example Guide", link: "/guides/example/" },
          ],
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
      customCss: ["./src/tailwind.css"],
    }),
    tailwind({ applyBaseStyles: false }),
  ],
});
