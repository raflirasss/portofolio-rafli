import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { portfolio } from './src/data/portfolio';

// The production URL lives in src/data/portfolio.ts → seo.siteUrl.
export default defineConfig({
  site: portfolio.seo.siteUrl,
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  prefetch: {
    prefetchAll: false,
    defaultStrategy: 'hover',
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
