
import React, { useEffect } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import router from './routes';
import { Toaster } from '@/components/ui/toaster';
import MobilePerformanceMonitor from '@/components/performance/MobilePerformanceMonitor';
import DeviceOptimizer from '@/components/performance/DeviceOptimizer';

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
      console.log('🚀 App initialized at:', new Date().toISOString());
      console.log('🛣️ Router configuration loaded successfully');
      
      // Initialize performance optimizations with error handling
      if (typeof window !== 'undefined') {
        // Delay performance optimizations to not interfere with initial render
        setTimeout(() => {
          import('./lib/performance-optimizations').then(({ initializeAllOptimizations }) => {
            initializeAllOptimizations().catch(error => {
              console.warn('Performance optimizations failed:', error);
            });
          }).catch(error => {
            console.warn('Failed to load performance optimizations:', error);
          });
        }, 1000); // Increased delay to ensure router is fully ready
      }
    } catch (error) {
      console.error('App initialization error:', error);
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <DeviceOptimizer>
          <MobilePerformanceMonitor />
          <RouterProvider router={router} />
          <Toaster />
        </DeviceOptimizer>
      </HelmetProvider>
    </QueryClientProvider>
  );
}

export default App;
