
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
    // Enhanced initialization with device-aware performance optimization
    try {
      console.log('🚀 App initialized at:', new Date().toISOString());
      console.log('🛣️ Router configuration loaded successfully');
      
      // Initialize device-aware performance optimizations
      if (typeof window !== 'undefined') {
        // Detect device type for targeted optimization timing
        const deviceType = window.innerWidth < 768 ? 'mobile' : window.innerWidth < 1024 ? 'tablet' : 'desktop';
        const optimizationDelay = deviceType === 'mobile' ? 1500 : deviceType === 'tablet' ? 1200 : 1000;
        
        console.log(`📱 Device detected: ${deviceType}, optimization delay: ${optimizationDelay}ms`);
        
        // Device-specific performance optimization timing
        setTimeout(() => {
          import('./lib/performance-optimizations').then(({ initializeAllOptimizations }) => {
            initializeAllOptimizations().catch(error => {
              console.warn('Performance optimizations failed:', error);
            });
          }).catch(error => {
            console.warn('Failed to load performance optimizations:', error);
          });
        }, optimizationDelay);
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
