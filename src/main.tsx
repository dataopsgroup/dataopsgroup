
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { HelmetProvider } from 'react-helmet-async';
import { StrictMode } from 'react';

// Use requestIdleCallback to defer non-critical initialization
const renderApp = () => {
  const container = document.getElementById("root");
  if (container) {
    const root = createRoot(container);
    root.render(
      <StrictMode>
        <HelmetProvider>
          <App />
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

// Use requestIdleCallback for deferred initialization when browser is idle
// Fall back to setTimeout if requestIdleCallback is not available
if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
  window.requestIdleCallback(() => {
    renderApp();
    trackInitialPageView();
  }, { timeout: 1000 });
} else {
  // Fallback for browsers that don't support requestIdleCallback
  setTimeout(() => {
    renderApp();
    trackInitialPageView();
  }, 0);
}

// Add gtag to window object type
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}
