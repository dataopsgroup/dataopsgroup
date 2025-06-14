
/**
 * Analytics utilities for tracking page views and events
 * Centralized implementation to avoid duplicate tracking code
 */

// Initialize dataLayer if it doesn't exist
if (typeof window !== 'undefined' && !window.dataLayer) {
  window.dataLayer = [];
}

// Initialize gtag function if it doesn't exist
if (typeof window !== 'undefined' && !window.gtag) {
  window.gtag = function() {
    if (window.dataLayer) {
      window.dataLayer.push(arguments);
    }
  };
}

// Check if user has consented to tracking
const hasTrackingConsent = (): boolean => {
  try {
    return localStorage.getItem('cookie-consent') === 'accepted';
  } catch (error) {
    console.warn('Failed to check tracking consent:', error);
    return false;
  }
};

// Enhanced safety checks for analytics availability
const isAnalyticsAvailable = (): boolean => {
  return typeof window !== 'undefined' && 
         typeof window.gtag === 'function' && 
         Array.isArray(window.dataLayer);
};

const isHubSpotAvailable = (): boolean => {
  return typeof window !== 'undefined' && 
         Array.isArray(window._hsq);
};

// Track initial page view after analytics has loaded
export const trackInitialPageView = () => {
  if (!hasTrackingConsent()) return;
  
  try {
    trackPageView({
      page_title: document.title,
      page_location: window.location.href,
      page_path: window.location.pathname,
      send_page_view: true
    });
  } catch (error) {
    console.warn('Failed to track initial page view:', error);
  }
};

// Track page view with consistent parameters across all tracking systems
export const trackPageView = (params: {
  page_title: string;
  page_location: string;
  page_path: string;
  send_page_view?: boolean;
}) => {
  if (!hasTrackingConsent()) return;
  
  try {
    // Track in Google Analytics with safety checks
    if (isAnalyticsAvailable()) {
      window.gtag('event', 'page_view', params);
    }
    
    // Track in HubSpot if loaded and consented with safety checks
    if (isHubSpotAvailable()) {
      window._hsq.push(['setPath', params.page_path + (window.location.search || '')]);
      window._hsq.push(['trackPageView']);
    }
  } catch (error) {
    console.warn('Failed to track page view:', error);
  }
};

// Setup route change tracking for analytics
export const setupRouteChangeTracking = () => {
  if (typeof window === 'undefined') return;
  
  try {
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
  } catch (error) {
    console.error('Failed to setup route change tracking:', error);
  }
};

// Track custom events in all analytics systems
export const trackEvent = (eventName: string, params: Record<string, any>) => {
  if (!hasTrackingConsent()) return;
  
  try {
    // Track in Google Analytics with safety checks
    if (isAnalyticsAvailable()) {
      window.gtag('event', eventName, params);
    }
    
    // Track in HubSpot when appropriate with safety checks
    if (isHubSpotAvailable() && params.trackInHubspot) {
      window._hsq.push(['trackEvent', { name: eventName, ...params }]);
    }
  } catch (error) {
    console.warn('Failed to track event:', error);
  }
};
