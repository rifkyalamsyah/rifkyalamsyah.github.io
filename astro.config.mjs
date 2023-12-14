import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: 'static',
  prefetch: true,
  compressHTML: false,
  site: 'https://rifkyalamsyah.github.io',
  base: '/',
});