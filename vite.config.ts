import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { resolve } from "path";
import { componentTagger } from "lovable-tagger";

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

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
  build: {
    target: 'esnext',
    minify: mode === 'production',
    sourcemap: mode === 'development',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          ui: ['@radix-ui/react-accordion', '@radix-ui/react-dialog', '@radix-ui/react-tooltip'],
        },
      },
    },
  }
}));
