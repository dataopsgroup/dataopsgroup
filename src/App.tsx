
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/sonner';
import router from './routes';
import { RouterProvider } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import { useEffect } from 'react';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      retry: 1,
    },
  },
});

function App() {
  useEffect(() => {
    // Mark app as hydrated for SSG compatibility
    if (typeof window !== 'undefined') {
      document.body.classList.add('app-hydrated');
      
      // Only use performance API if available
      if ('performance' in window && 'mark' in window.performance) {
        try {
          performance.mark('app-hydrated');
        } catch (error) {
          // Silently fail if performance marking fails
        }
      }
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <ErrorBoundary>
        <RouterProvider router={router} />
        <Toaster position="top-right" />
      </ErrorBoundary>
    </QueryClientProvider>
  );
}

export default App;
