
/**
 * Analytics utilities for tracking page views and events
 */

// Track initial page view after analytics has loaded
export const trackInitialPageView = () => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'page_view', {
      page_title: document.title,
      page_location: window.location.href,
      page_path: window.location.pathname,
      send_page_view: true
    });
  }
};

// Setup route change tracking for analytics
export const setupRouteChangeTracking = () => {
  if (typeof window === 'undefined') return;
  
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
};

// Add gtag and HubSpot to window object type
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
    _hsq?: any[];
  }
}
