
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
  css: {
    devSourcemap: mode === 'development',
    preprocessorOptions: {
      css: {
        charset: false,
      },
    },
  },
  build: {
    target: 'es2020',
    minify: mode === 'production',
    sourcemap: false,
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks: {
          // Core React - highest priority
          'react-vendor': ['react', 'react-dom'],
          
          // Router - needed for navigation
          'router': ['react-router-dom'],
          
          // Essential UI only - critical components
          'ui-core': [
            '@radix-ui/react-dialog', 
            '@radix-ui/react-tooltip',
            '@radix-ui/react-select'
          ],
          
          // Charts - LAZY LOAD ONLY (removed from main bundle)
          // This prevents charts from loading on initial page load
          'charts-lazy': ['recharts'],
          
          // Forms - defer until needed
          'forms': ['react-hook-form', '@hookform/resolvers', 'zod'],
          
          // Analytics tools - defer until admin routes
          'analytics': [
            '@tanstack/react-query'
          ],
          
          // Extended UI - load when needed
          'ui-extended': [
            '@radix-ui/react-accordion',
            '@radix-ui/react-tabs',
            '@radix-ui/react-scroll-area'
          ],
          
          // Utilities - defer
          'utils': ['date-fns', 'lucide-react']
        },
        // Optimize chunk loading strategy
        chunkFileNames: (chunkInfo) => {
          // Charts should be loaded only when requested
          if (chunkInfo.name === 'charts-lazy') {
            return 'assets/charts-[hash].js';
          }
          return 'assets/[name]-[hash].js';
        },
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name?.split('.') || [];
          const extType = info[info.length - 1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico|webp/i.test(extType || '')) {
            return `assets/images/[name]-[hash][extname]`;
          }
          if (/css/i.test(extType || '')) {
            return `assets/styles/[name]-[hash][extname]`;
          }
          return `assets/[name]-[hash][extname]`;
        },
      },
    },
  }
}));
