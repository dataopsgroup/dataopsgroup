
/**
 * Performance helpers with enhanced error handling
 */

// Safe gtag function that checks for availability
export const safeGtag = (...args: any[]) => {
  try {
    if (typeof window === 'undefined') return;
    
    // Check if gtag function exists
    if (typeof window.gtag !== 'function') {
      console.debug('gtag not available');
      return;
    }
    
    // Check if dataLayer exists and is an array
    if (!window.dataLayer || !Array.isArray(window.dataLayer)) {
      console.debug('dataLayer not available');
      return;
    }
    
    // Call gtag with provided arguments
    window.gtag(...args);
  } catch (error) {
    console.debug('gtag error:', error);
  }
};

// Enhanced reportWebVital with proper guards
export const reportWebVital = (metricName: string, value: number, rating: 'good' | 'needs-improvement' | 'poor') => {
  safeGtag('event', 'web_vitals', {
    metric_name: metricName,
    metric_value: value,
    metric_delta: 0,
    metric_rating: rating
  });
};

// Helper to check if analytics is ready
export const isAnalyticsReady = (): boolean => {
  try {
    return typeof window !== 'undefined' && 
           typeof window.gtag === 'function' && 
           window.dataLayer && 
           Array.isArray(window.dataLayer);
  } catch {
    return false;
  }
};
