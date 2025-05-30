
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      }
    }
  },
  ssgOptions: {
    script: 'async',
    routes: [
      '/',
      '/services',
      '/about',
      '/contact',
      '/approach',
      '/book',
      '/services/team-training',
      '/services/data-ops-implementation',
      '/services/marketing-operations-revops',
      '/services/analytics-bi'
    ],
    crittersOptions: {
      reduceInlineStyles: false,
    },
    onBeforePageRender: (route, indexHTML) => {
      // Add any pre-render modifications if needed
      return indexHTML;
    }
  }
});
