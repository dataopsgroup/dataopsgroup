
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Check if terser is available
  let hasTerser = true;
  try {
    require.resolve('terser');
  } catch (e) {
    console.warn('Terser is not installed. Falling back to esbuild minification.');
    hasTerser = false;
  }

  return {
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
      // Enable minification for production builds
      minify: hasTerser ? 'terser' : 'esbuild',
      terserOptions: hasTerser ? {
        compress: {
          drop_console: mode === 'production',
          drop_debugger: mode === 'production',
          pure_funcs: mode === 'production' ? ['console.log', 'console.info'] : [],
        },
        output: {
          comments: false,
        },
      } : undefined,
      // Enable code splitting
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: [
              'react', 
              'react-dom',
              'react-router-dom',
              'react-helmet-async'
            ],
            ui: [
              '@radix-ui/react-accordion',
              '@radix-ui/react-dialog',
              '@radix-ui/react-dropdown-menu',
              '@radix-ui/react-popover',
              '@radix-ui/react-toast',
              'date-fns',
            ],
            chart: ['recharts'],
          },
        },
      },
      // Enable CSS code splitting
      cssCodeSplit: true,
      // Generate source maps for debugging in development only
      sourcemap: mode !== 'production',
      // Enable asset file name hashing for cache busting
      assetsInlineLimit: 4096,
      chunkSizeWarningLimit: 1000,
    },
    // Optimizations for CSS
    css: {
      devSourcemap: mode !== 'production',
      // PostCSS config is already in postcss.config.js
    },
    // Disable unnecessary features in production
    esbuild: {
      drop: mode === 'production' ? ['console', 'debugger'] : [],
    },
  };
});
