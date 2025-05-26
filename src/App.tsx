
import React, { useState, useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import ErrorDisplay from './components/ErrorDisplay';
import CustomCookieBanner from './components/CustomCookieBanner';
import PerformanceMonitor from './components/performance/PerformanceMonitor';
import PrivacyModal from './components/PrivacyModal';
import router from './routes';
import { handleHubSpotCTARedirect, removeHsLangParameter } from './utils/redirect-utils';

function App() {
  const [error, setError] = useState<Error | null>(null);
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);

  useEffect(() => {
    console.log('App component mounting...');
    
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
    
    console.log('App component mounted successfully');
  }, []);

  if (error) {
    return <ErrorDisplay message={error.message} />;
  }

  try {
    return (
      <>
        <RouterProvider router={router} />
        
        {/* Custom Cookie Banner */}
        <CustomCookieBanner />
        
        {/* Performance Monitor for Development */}
        <PerformanceMonitor />
        
        {/* Regular privacy modal */}
        {isPrivacyModalOpen && (
          <dialog open={isPrivacyModalOpen} className="relative">
            <PrivacyModal isOpen={isPrivacyModalOpen} onClose={() => setIsPrivacyModalOpen(false)} />
          </dialog>
        )}
      </>
    );
  } catch (appError) {
    console.error('App rendering error:', appError);
    return <ErrorDisplay message="Application failed to load. Please refresh the page." />;
  }
}

export default App;
