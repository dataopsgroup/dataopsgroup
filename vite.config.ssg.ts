
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { resolve } from "path";

// Define all routes for pre-rendering
const routesToPrerender = [
  '/',
  '/about',
  '/approach',
  '/contact',
  '/book',
  '/services',
  '/services/marketing-operations-revops',
  '/services/analytics-bi',
  '/services/dataops-implementation',
  '/services/team-training',
  '/insights',
  '/assessment',
  '/get-started',
  '/thank-you',
  '/contact/thank-you',
  '/sitemap',
  '/how-to-hire-a-hubspot-expert-in-2025',
  '/pillar-content',
  '/hubspot-assessment-results',
  '/faqs',
  '/faqs/hubspot-services',
  '/faqs/hubspot-experts',
  '/faqs/data-quality',
  '/faqs/our-approach',
  '/faqs/hubspot-modules',
  '/404'
];

// SSG-specific configuration extending the main vite config
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
  build: {
    target: 'esnext',
    minify: true,
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          ui: ['@radix-ui/react-accordion', '@radix-ui/react-dialog', '@radix-ui/react-tooltip'],
        },
      },
    },
  },
  ssg: {
    script: 'async',
    routes: routesToPrerender,
    crittersOptions: {
      reduceInlineStyles: false,
    },
    onBeforePageRender: (route: string, indexHTML: string) => {
      // Add pre-render modifications for better SEO
      return indexHTML.replace(
        /<head>/,
        `<head>
          <meta name="generator" content="Vite + React + SSG" />
          <meta name="robots" content="index, follow" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        `
      );
    }
  }
});
