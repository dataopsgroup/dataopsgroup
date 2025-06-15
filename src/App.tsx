
import React, { useEffect } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import router from './routes';
import { Toaster } from '@/components/ui/toaster';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      gcTime: 1000 * 60 * 30, // 30 minutes
    },
  },
});

function App() {
  useEffect(() => {
    // Simple initialization with error handling
    try {
      console.log('App initialized at:', new Date().toISOString());
      
      // Initialize performance optimizations with error handling
      if (typeof window !== 'undefined') {
        import('./lib/performance-optimizations').then(({ initializeAllOptimizations }) => {
          initializeAllOptimizations().catch(error => {
            console.warn('Performance optimizations failed:', error);
          });
        }).catch(error => {
          console.warn('Failed to load performance optimizations:', error);
        });
      }
    } catch (error) {
      console.error('App initialization error:', error);
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <RouterProvider router={router} />
        <Toaster />
      </HelmetProvider>
    </QueryClientProvider>
  );
}

export default App;
