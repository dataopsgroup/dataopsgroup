
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
          
          // Router - needed early
          'router': ['react-router-dom'],
          
          // Essential UI components only
          'ui-core': [
            '@radix-ui/react-dialog', 
            '@radix-ui/react-tooltip'
          ],
          
          // Charts - simplified to avoid import issues
          'charts': ['recharts'],
          
          // Forms - lazy load
          'forms': ['react-hook-form', '@hookform/resolvers', 'zod'],
          
          // Schema components - lazy load
          'schema': [
            '@tanstack/react-query'
          ],
          
          // Less critical UI components
          'ui-extended': [
            '@radix-ui/react-accordion',
            '@radix-ui/react-tabs',
            '@radix-ui/react-select',
            '@radix-ui/react-scroll-area'
          ],
          
          // Utilities
          'utils': ['date-fns', 'lucide-react']
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
