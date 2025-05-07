
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
          <Suspense fallback={
            <div className="w-full h-screen flex items-center justify-center">
              <div className="flex flex-col items-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-dataops-600 mb-4"></div>
                <p className="text-dataops-600 text-lg">Loading DataOps Group...</p>
              </div>
            </div>
          }>
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
      page_path: window.location.pathname,
      send_page_view: true
    });
    
    // Track additional analytics data
    window.gtag('event', 'user_engagement', {
      engagement_time_msec: 1000,
      session_id: Date.now().toString()
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
            page_path: window.location.pathname,
            send_page_view: true
          });
          
          // Track page engagement metrics
          const prevPath = document.referrer ? new URL(document.referrer).pathname : null;
          window.gtag('event', 'page_navigation', {
            'previous_page': prevPath,
            'current_page': window.location.pathname
          });
        }
        
        // If HubSpot tracking is loaded, track page view
        if (window._hsq) {
          window._hsq.push(['setPath', window.location.pathname + window.location.search]);
          window._hsq.push(['trackPageView']);
        }
      }, 100);
    };
    
    // Also capture browser back/forward navigation
    window.addEventListener('popstate', () => {
      setTimeout(() => {
        if (window.gtag) {
          window.gtag('event', 'page_view', {
            page_title: document.title,
            page_location: window.location.href,
            page_path: window.location.pathname
          });
        }
        
        if (window._hsq) {
          window._hsq.push(['setPath', window.location.pathname + window.location.search]);
          window._hsq.push(['trackPageView']);
        }
      }, 100);
    });
  }
};

// Use requestIdleCallback for deferred initialization when browser is idle
// Fall back to setTimeout if requestIdleCallback is not available
if (typeof window !== 'undefined') {
  if ('requestIdleCallback' in window) {
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
  
  // Track page load performance metrics
  window.addEventListener('load', () => {
    if (window.gtag && window.performance) {
      // Send performance data to Google Analytics
      const pageLoadTime = performance.now();
      window.gtag('event', 'timing_complete', {
        name: 'page_load',
        value: pageLoadTime,
        event_category: 'Performance'
      });
      
      // Send Web Vitals data when available
      if ('PerformanceObserver' in window) {
        try {
          // Track CLS, FID, LCP
          const observer = new PerformanceObserver((list) => {
            list.getEntries().forEach((entry) => {
              const metric = entry.name;
              const value = entry.startTime;
              window.gtag('event', 'web_vitals', {
                metric_name: metric,
                metric_value: value,
                metric_delta: entry.duration || 0
              });
            });
          });
          observer.observe({ type: 'largest-contentful-paint', buffered: true });
        } catch (e) {
          console.error('Performance metrics error:', e);
        }
      }
    }
  });
}

// Add gtag and HubSpot to window object type
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
    _hsq?: any[];
  }
}
