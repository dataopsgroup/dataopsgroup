
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { HelmetProvider } from 'react-helmet-async';
import { StrictMode, Suspense, lazy } from 'react';

// Use requestIdleCallback to defer non-critical initialization
const renderApp = () => {
  const container = document.getElementById("root");
  if (container) {
    const root = createRoot(container);
    root.render(
      <StrictMode>
        <HelmetProvider>
          <Suspense fallback={<div className="w-full h-screen flex items-center justify-center">Loading...</div>}>
            <App />
          </Suspense>
        </HelmetProvider>
      </StrictMode>
    );
  }
};

// Track initial page view after analytics has loaded
const trackInitialPageView = () => {
  // Ensure gtag is available
  if (typeof window !== 'undefined' && window.gtag) {
    // Send page view for the initial load
    window.gtag('event', 'page_view', {
      page_title: document.title,
      page_location: window.location.href,
      page_path: window.location.pathname
    });
  }
};

// Track HubSpot page views (for SPAs)
const setupRouteChangeTracking = () => {
  if (typeof window !== 'undefined') {
    // Listen for route changes to track in analytics
    const pushState = history.pushState;
    history.pushState = function() {
      pushState.apply(history, arguments);
      
      // Small timeout to ensure title and page have updated
      setTimeout(() => {
        // Track in Google Analytics
        if (window.gtag) {
          window.gtag('event', 'page_view', {
            page_title: document.title,
            page_location: window.location.href,
            page_path: window.location.pathname
          });
        }
        
        // If HubSpot tracking is loaded, track page view
        if (window._hsq) {
          window._hsq.push(['setPath', window.location.pathname + window.location.search]);
          window._hsq.push(['trackPageView']);
        }
      }, 100);
    };
  }
};

// Use requestIdleCallback for deferred initialization when browser is idle
// Fall back to setTimeout if requestIdleCallback is not available
if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
  window.requestIdleCallback(() => {
    renderApp();
    trackInitialPageView();
    setupRouteChangeTracking();
  }, { timeout: 1000 });
} else {
  // Fallback for browsers that don't support requestIdleCallback
  setTimeout(() => {
    renderApp();
    trackInitialPageView();
    setupRouteChangeTracking();
  }, 0);
}

// Add gtag and HubSpot to window object type
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
    _hsq?: any[];
  }
}
