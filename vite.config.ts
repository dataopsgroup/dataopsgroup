import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// Define all routes for pre-rendering (keeping SSG capability but removing problematic plugin for now)
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
  '/how-to-hire-a-hubspot-expert-in-2025'
];

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
    // Note: SSG pre-rendering plugin removed temporarily to fix build issues
    // Will be re-added once proper types are available
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Enable more aggressive minification
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: mode === 'production',
        drop_debugger: true,
        pure_funcs: mode === 'production' ? ['console.log', 'console.debug'] : []
      },
      format: {
        comments: false
      }
    },
    // Enable chunking for better code-splitting
    rollupOptions: {
      output: {
        manualChunks: {
          // Split vendor dependencies into separate chunks
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'ui-components': [
            '@radix-ui/react-accordion',
            '@radix-ui/react-alert-dialog',
            '@radix-ui/react-aspect-ratio',
            '@radix-ui/react-avatar',
            '@radix-ui/react-checkbox',
            '@radix-ui/react-dialog',
            '@radix-ui/react-dropdown-menu',
            '@radix-ui/react-label',
            '@radix-ui/react-popover',
            '@radix-ui/react-select',
            '@radix-ui/react-slot',
            '@radix-ui/react-tabs',
            '@radix-ui/react-toast',
            'class-variance-authority',
            'clsx',
            'cmdk',
            'tailwind-merge'
          ],
          'charts': ['recharts']
        },
        // Add content hash to chunk names for better caching
        chunkFileNames: 'assets/js/[name].[hash].js',
        entryFileNames: 'assets/js/[name].[hash].js',
        assetFileNames: (assetInfo) => {
          // Don't rename CSS files - as requested
          if (assetInfo.name && assetInfo.name.endsWith('.css')) {
            return 'assets/[name][extname]';
          }
          return 'assets/[name].[hash][extname]';
        }
      }
    }
  }
}));
