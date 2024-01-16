import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), mdx()],
  output: 'static',
  prefetch: true,
  compressHTML: false,
  site: 'https://rifkyalamsyah.github.io',
  base: '/'
});