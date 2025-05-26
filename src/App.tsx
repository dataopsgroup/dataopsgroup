
import React, { useState, useEffect, lazy, Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';
import Loading from './components/Loading';
import ErrorDisplay from './components/ErrorDisplay';
import CustomCookieBanner from './components/CustomCookieBanner';
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
    
    // Simple loading timer
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300); // Much shorter delay

    return () => clearTimeout(timer);
  }, []);

  // Error boundary for router
  const handleRouterError = (error: any) => {
    console.error('Router error:', error);
    setError(error instanceof Error ? error : new Error('An unexpected error occurred with routing'));
    return <ErrorDisplay message={(error instanceof Error ? error.message : 'An unexpected error occurred')} />;
  };

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorDisplay message={error.message} />;
  }

  return (
    <>
      <RouterProvider router={router} />
      
      {/* Custom Cookie Banner */}
      <CustomCookieBanner />
      
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
