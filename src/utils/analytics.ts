
/**
 * Analytics utilities for tracking page views and events
 * Centralized implementation to avoid duplicate tracking code
 */

// Check if user has consented to tracking
const hasTrackingConsent = (): boolean => {
  return localStorage.getItem('cookie-consent') === 'accepted';
};

// Track initial page view after analytics has loaded
export const trackInitialPageView = () => {
  if (typeof window === 'undefined' || !hasTrackingConsent()) return;
  
  trackPageView({
    page_title: document.title,
    page_location: window.location.href,
    page_path: window.location.pathname,
    send_page_view: true
  });
};

// Track page view with consistent parameters across all tracking systems
export const trackPageView = (params: {
  page_title: string;
  page_location: string;
  page_path: string;
  send_page_view?: boolean;
}) => {
  if (typeof window === 'undefined' || !hasTrackingConsent()) return;
  
  // Track in Google Analytics
  if (window.gtag) {
    window.gtag('event', 'page_view', params);
  }
  
  // Track in HubSpot if loaded and consented
  if (window._hsq) {
    window._hsq.push(['setPath', params.page_path + (window.location.search || '')]);
    window._hsq.push(['trackPageView']);
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
      if (hasTrackingConsent()) {
        trackPageView({
          page_title: document.title,
          page_location: window.location.href,
          page_path: window.location.pathname,
          send_page_view: true
        });
      }
    }, 100);
  };
  
  // Also capture browser back/forward navigation
  window.addEventListener('popstate', () => {
    setTimeout(() => {
      if (hasTrackingConsent()) {
        trackPageView({
          page_title: document.title,
          page_location: window.location.href,
          page_path: window.location.pathname
        });
      }
    }, 100);
  });
};

// Track custom events in all analytics systems
export const trackEvent = (eventName: string, params: Record<string, any>) => {
  if (typeof window === 'undefined' || !hasTrackingConsent()) return;
  
  // Track in Google Analytics
  if (window.gtag) {
    window.gtag('event', eventName, params);
  }
  
  // Track in HubSpot when appropriate
  if (window._hsq && params.trackInHubspot) {
    window._hsq.push(['trackEvent', { name: eventName, ...params }]);
  }
};
