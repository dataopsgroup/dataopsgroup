
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { resolve } from "path";
import { componentTagger } from "lovable-tagger";

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
          // Core React ecosystem
          vendor: ['react', 'react-dom', 'react-router-dom'],
          
          // UI framework components
          ui: [
            '@radix-ui/react-accordion', 
            '@radix-ui/react-dialog', 
            '@radix-ui/react-tooltip',
            '@radix-ui/react-tabs',
            '@radix-ui/react-select',
            '@radix-ui/react-scroll-area'
          ],
          
          // Charts and data visualization
          charts: ['recharts', 'embla-carousel-react'],
          
          // Forms and validation
          forms: ['react-hook-form', '@hookform/resolvers', 'zod'],
          
          // Date utilities
          dates: ['date-fns'],
          
          // Analytics and performance
          analytics: ['@tanstack/react-query'],
          
          // Icons and assets
          icons: ['lucide-react']
        },
      },
    },
  }
}));
