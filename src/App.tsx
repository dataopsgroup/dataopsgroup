
import React, { useState, useEffect } from 'react';
import { RouterProvider, RouteObject } from 'react-router-dom';
import Loading from './components/Loading';
import ErrorDisplay from './components/ErrorDisplay';
import PrivacyModal from './components/PrivacyModal';
import router from './routes';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  // Error boundary for router
  const handleRouterError = (error: any) => {
    console.error('Router error:', error);
    setError(error instanceof Error ? error : new Error('An unexpected error occurred with routing'));
    return <ErrorDisplay message={(error instanceof Error ? error.message : 'An unexpected error occurred')} />;
  };

  // Validate routes to ensure no critical routes are missing
  const validateRoutes = (routerObj: any): boolean => {
    try {
      // Ensure critical routes exist
      const routes = routerObj.routes as RouteObject[];
      const criticalPaths = ['/', '/faqs', '/contact', '/insights'];
      
      const foundPaths = routes.map(route => route.path);
      const missingPaths = criticalPaths.filter(path => !foundPaths.includes(path));
      
      if (missingPaths.length > 0) {
        console.error('Critical routes missing:', missingPaths);
      }
      
      return missingPaths.length === 0;
    } catch (e) {
      console.error('Route validation error:', e);
      return true; // Continue anyway to avoid blocking the app
    }
  };

  // Pre-check routes for validation but don't block rendering
  useEffect(() => {
    validateRoutes(router);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorDisplay message={error.message} />;
  }

  return (
    <>
      <RouterProvider router={router} />
      
      {/* Using dialog element for semantic HTML */}
      <dialog open={isPrivacyModalOpen} className="relative">
        <PrivacyModal isOpen={isPrivacyModalOpen} onClose={() => setIsPrivacyModalOpen(false)} />
      </dialog>
    </>
  );
}

export default App;
