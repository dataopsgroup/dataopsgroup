
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

// Generate unique ID for metrics
export const generateUniqueID = (): string => {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
};

// Get performance rating based on metric type and value
export const getRating = (
  metric: 'LCP' | 'FID' | 'CLS' | 'FCP' | 'TTFB' | 'INP',
  value: number
): 'good' | 'needs-improvement' | 'poor' => {
  const thresholds = {
    LCP: { good: 2500, poor: 4000 },
    FID: { good: 100, poor: 300 },
    CLS: { good: 0.1, poor: 0.25 },
    FCP: { good: 1800, poor: 3000 },
    TTFB: { good: 800, poor: 1800 },
    INP: { good: 200, poor: 500 }
  };

  const threshold = thresholds[metric];
  if (value <= threshold.good) return 'good';
  if (value <= threshold.poor) return 'needs-improvement';
  return 'poor';
};

// Enhanced reportWebVital with proper guards - accepts individual parameters
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
