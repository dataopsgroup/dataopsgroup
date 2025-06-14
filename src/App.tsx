
/**
 * MAIN APP COMPONENT - KNOWLEDGE ARTICLE REMINDERS:
 * 
 * 🚫 NEVER MODIFY CORE ROUTING WITHOUT EXPLICIT INSTRUCTION
 * ⚡ PERFORMANCE: Initialize analytics before using dataLayer
 * ⚡ ERROR HANDLING: Wrap performance monitoring in try-catch
 * 📱 ANALYTICS: Check if gtag/dataLayer exists before calling
 * 
 * See Knowledge Article: "Performance Error Prevention"
 */

import React, { useEffect } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { SpeedInsights } from '@vercel/speed-insights/react';
import router from './routes';
import { Toaster } from '@/components/ui/toaster';
import { initializeAllOptimizations } from '@/lib/performance-optimizations';
import { logBuildValidation } from '@/utils/build-time-validation';
import { initializeDebugTools } from '@/lib/debug';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      gcTime: 1000 * 60 * 30, // 30 minutes (renamed from cacheTime)
    },
  },
});

function App() {
  useEffect(() => {
    // Initialize performance optimizations
    initializeAllOptimizations();
    
    // Run build validation to check for potential Ahrefs issues
    if (process.env.NODE_ENV === 'development') {
      logBuildValidation();
    }
    
    // Initialize debug tools in development
    if (process.env.NODE_ENV === 'development') {
      initializeDebugTools();
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <RouterProvider router={router} />
        <Toaster />
        <SpeedInsights />
      </HelmetProvider>
    </QueryClientProvider>
  );
}

export default App;
