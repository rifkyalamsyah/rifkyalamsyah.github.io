import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import partytown from "@astrojs/partytown";

import playformCompress from "@playform/compress";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), mdx(), sitemap(), partytown(), playformCompress()],
  output: 'static',
  prefetch: true,
  compressHTML: true,
  site: 'https://rifkyalamsyah.github.io',
  base: '/'
});