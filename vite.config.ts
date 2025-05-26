
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
    // Enhanced minification for production
    minify: mode === 'production' ? 'esbuild' : false,
    // Modern browser targets for better optimization
    target: ['es2020', 'chrome80', 'firefox78', 'safari14'],
    // Enhanced chunking strategy for optimal loading
    rollupOptions: {
      output: {
        // More granular chunking for better caching
        manualChunks: {
          'react-core': ['react', 'react-dom'],
          'react-router': ['react-router-dom'],
          'ui-components': ['@radix-ui/react-dialog', '@radix-ui/react-dropdown-menu'],
          'icons': ['lucide-react'],
          'utils': ['clsx', 'tailwind-merge']
        },
        // Optimized file naming with better cache control
        chunkFileNames: (chunkInfo) => {
          // Use deterministic names for vendor chunks
          if (chunkInfo.name.includes('vendor') || chunkInfo.name.includes('react')) {
            return 'assets/vendor-[name].[hash].js';
          }
          return 'assets/[name].[hash].js';
        },
        entryFileNames: 'assets/entry-[name].[hash].js',
        assetFileNames: (assetInfo) => {
          // Organize assets by type
          if (assetInfo.name?.endsWith('.css')) {
            return 'assets/styles/[name].[hash][extname]';
          }
          if (assetInfo.name?.match(/\.(png|jpg|jpeg|gif|svg|webp|avif)$/)) {
            return 'assets/images/[name].[hash][extname]';
          }
          if (assetInfo.name?.match(/\.(woff|woff2|ttf|eot)$/)) {
            return 'assets/fonts/[name].[hash][extname]';
          }
          return 'assets/[name].[hash][extname]';
        }
      },
      // Tree-shaking optimization
      treeshake: {
        moduleSideEffects: false,
        propertyReadSideEffects: false,
        unknownGlobalSideEffects: false
      }
    },
    // Source map generation
    sourcemap: mode === 'production' ? false : 'inline',
    // Chunk size warnings
    chunkSizeWarningLimit: 1000,
    // CSS code splitting
    cssCodeSplit: true,
    // Report compressed size
    reportCompressedSize: true,
    // Optimize CSS
    cssMinify: mode === 'production' ? 'esbuild' : false
  },
  // Enhanced CSS processing
  css: {
    devSourcemap: mode === 'development',
    postcss: {
      plugins: []
    }
  },
  // Performance optimizations
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      'lucide-react'
    ]
  },
  // Enhanced esbuild configuration
  esbuild: {
    // Drop console and debugger in production
    drop: mode === 'production' ? ['console', 'debugger'] : [],
    // Use more aggressive optimization
    treeShaking: true,
    // Format for better compression
    format: 'esm'
  }
}));
