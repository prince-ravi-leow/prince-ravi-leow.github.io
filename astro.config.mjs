import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://princeravileow.com",
  build: { inlineStylesheets: "always" },
  integrations: [mdx(), sitemap()],
});
