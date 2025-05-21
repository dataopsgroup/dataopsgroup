
import React, { useState, useEffect, lazy, Suspense } from 'react';
import { RouterProvider, RouteObject } from 'react-router-dom';
import Loading from './components/Loading';
import ErrorDisplay from './components/ErrorDisplay';
import router from './routes';
import { handleHubSpotCTARedirect, removeHsLangParameter } from './utils/redirect-utils';

// Lazy load the privacy modal for better initial load time
const PrivacyModal = lazy(() => import('./components/PrivacyModal'));

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);

  useEffect(() => {
    // Handle language parameter in URL if present
    if (location.href.includes('hsLang=')) {
      const cleanUrl = removeHsLangParameter(location.href);
      history.replaceState({}, document.title, cleanUrl);
    }
    
    // Handle HubSpot CTA redirects if present in URL
    if (location.pathname.includes('/hs/cta/wi/redirect')) {
      const destinationUrl = handleHubSpotCTARedirect(location.search);
      location.replace(destinationUrl);
      return;
    }
    
    // Simulate loading time (reduced for better performance)
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  // Error boundary for router
  const handleRouterError = (error: any) => {
    console.error('Router error:', error);
    const errorMsg = error instanceof Error ? error.message : 'An unexpected error occurred';
    setError(error instanceof Error ? error : new Error(errorMsg));
    return <ErrorDisplay message={errorMsg} />;
  };

  // Validate routes to ensure no critical routes are missing
  const validateRoutes = (routerObj: any): boolean => {
    try {
      // Ensure critical routes exist
      const routes = routerObj.routes as RouteObject[];
      const criticalPaths = ['/', '/faqs', '/contact', '/insights'];
      const foundPaths = routes.map(route => route.path);
      return !criticalPaths.some(path => !foundPaths.includes(path));
    } catch (e) {
      console.error('Route validation error:', e);
      return true; // Continue anyway to avoid blocking the app
    }
  };

  // Pre-check routes for validation but don't block rendering
  useEffect(() => {
    if (router) validateRoutes(router);
  }, []);

  if (isLoading) return <Loading />;
  if (error) return <ErrorDisplay message={error.message} />;

  return (
    <>
      <RouterProvider router={router} />
      
      {/* Only render privacy modal when open to save resources */}
      {isPrivacyModalOpen && (
        <Suspense fallback={null}>
          <dialog open className="relative">
            <PrivacyModal 
              isOpen={isPrivacyModalOpen} 
              onClose={() => setIsPrivacyModalOpen(false)} 
            />
          </dialog>
        </Suspense>
      )}
    </>
  );
}

export default App;
