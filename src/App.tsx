
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
import router from './routes';
import { Toaster } from '@/components/ui/toaster';
import { initializeAllOptimizations } from '@/lib/performance-optimizations';

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
