import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

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
        pure_funcs: mode === 'production' ? ['console.log', 'console.debug'] : [],
        // Mobile-specific optimizations
        unsafe: true,
        unsafe_comps: true,
        passes: 3
      },
      format: {
        comments: false
      },
      // Target modern mobile browsers for smaller bundles
      ecma: 2020
    },
    // Mobile-first target for smaller bundles
    target: ['es2020', 'edge88', 'firefox78', 'chrome87', 'safari13'],
    // Enable chunking for better code-splitting with mobile optimization
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Mobile-specific chunking strategy
          if (id.includes('node_modules')) {
            // Core React dependencies - always needed
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router-dom')) {
              return 'react-vendor';
            }
            
            // Charts - defer for mobile
            if (id.includes('recharts')) {
              return 'charts';
            }
            
            // UI components - split for mobile loading
            if (id.includes('@radix-ui') || 
                id.includes('class-variance-authority') || 
                id.includes('clsx') || 
                id.includes('cmdk') || 
                id.includes('tailwind-merge')) {
              return 'ui-components';
            }
            
            // Analytics and tracking - defer for mobile
            if (id.includes('analytics') || id.includes('gtag')) {
              return 'analytics';
            }
            
            // Other vendor dependencies
            return 'vendor';
          }
          
          // Mobile-specific application chunks
          if (id.includes('/pages/')) {
            return 'pages';
          }
          
          if (id.includes('/components/admin/') || id.includes('/components/seo/')) {
            return 'admin-seo';
          }
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
