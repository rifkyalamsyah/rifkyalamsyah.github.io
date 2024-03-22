import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), mdx(), sitemap(), partytown()],  
  output: 'static',
  prefetch: true,
  compressHTML: false,
  site: 'https://rifkyalamsyah.github.io',
  base: '/'
});