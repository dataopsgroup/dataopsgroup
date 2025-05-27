
import React, { useState, useEffect, lazy, Suspense } from 'react';
import { RouterProvider, RouteObject } from 'react-router-dom';
import Loading from './components/Loading';
import ErrorDisplay from './components/ErrorDisplay';
import ScrollToTop from './components/ScrollToTop';
import router from './routes';
import { handleHubSpotCTARedirect, removeHsLangParameter } from './utils/redirect-utils';

// Lazy-loaded components
const PrivacyModal = lazy(() => import('./components/PrivacyModal'));

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);

  useEffect(() => {
    // Handle language parameter in URL if present
    const currentUrl = window.location.href;
    if (currentUrl.includes('hsLang=')) {
      const cleanUrl = removeHsLangParameter(currentUrl);
      window.history.replaceState({}, document.title, cleanUrl);
    }
    
    // Handle HubSpot CTA redirects if present in URL
    if (window.location.pathname.includes('/hs/cta/wi/redirect')) {
      const destinationUrl = handleHubSpotCTARedirect(window.location.search);
      window.location.replace(destinationUrl);
      return;
    }
    
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Reduced from 1500ms to 1000ms

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
    if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
      window.requestIdleCallback(() => {
        validateRoutes(router);
      });
    } else {
      // Fallback for browsers that don't support requestIdleCallback
      setTimeout(() => validateRoutes(router), 300);
    }
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorDisplay message={error.message} />;
  }

  return (
    <>
      <ScrollToTop />
      <RouterProvider router={router} />
      
      {/* Using Suspense for lazy-loaded privacy modal */}
      {isPrivacyModalOpen && (
        <dialog open={isPrivacyModalOpen} className="relative">
          <Suspense fallback={<div>Loading...</div>}>
            <PrivacyModal isOpen={isPrivacyModalOpen} onClose={() => setIsPrivacyModalOpen(false)} />
          </Suspense>
        </dialog>
      )}
    </>
  );
}

export default App;
