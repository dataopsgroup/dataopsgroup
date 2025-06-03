
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/sonner';
import router from './routes';
import { RouterProvider } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import { Suspense } from 'react';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      retry: 1,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ErrorBoundary>
        <Suspense fallback={
          <div className="w-full h-screen flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600 mb-4"></div>
            <p className="text-blue-600 text-lg">Loading page...</p>
          </div>
        }>
          <RouterProvider router={router} />
        </Suspense>
        <Toaster position="top-right" />
      </ErrorBoundary>
    </QueryClientProvider>
  );
}

export default App;
