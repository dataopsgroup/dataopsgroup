
/**
 * PERFORMANCE MONITORING - KNOWLEDGE ARTICLE REMINDERS:
 * 
 * ⚡ CRITICAL: Initialize analytics before using dataLayer
 * ⚡ ALWAYS: Wrap performance monitoring in try-catch blocks
 * ⚡ CHECK: Verify gtag/dataLayer exists before calling
 * ⚡ PATTERN: Use proper error boundaries for web vitals tracking
 * 
 * See Knowledge Article: "Performance Error Prevention"
 */

// Enhanced performance monitoring function - throttled for efficiency
export const setupPerformanceMonitoring = () => {
  if (typeof window === 'undefined' || !('PerformanceObserver' in window)) {
    return;
  }

  // Create performance observer for LCP
  try {
    const lcpObserver = new PerformanceObserver((entryList) => {
      try {
        const entries = entryList.getEntries();
        const lastEntry = entries[entries.length - 1];
        // Report LCP to analytics if available
        reportWebVital('LCP', lastEntry.startTime, getRating(lastEntry.startTime, 2500, 4000));
      } catch (error) {
        console.debug('LCP observer error:', error);
      }
    });
    lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });
    
    // Create performance observer for CLS
    const clsObserver = new PerformanceObserver((entryList) => {
      try {
        let clsValue = 0;
        for (const entry of entryList.getEntries()) {
          // Now this will be properly typed with global interface declaration
          const layoutShift = entry as unknown as LayoutShiftEntry;
          if (!layoutShift.hadRecentInput) {
            clsValue += layoutShift.value;
          }
        }
        // Report CLS to analytics
        reportWebVital('CLS', clsValue, getRating(clsValue, 0.1, 0.25));
      } catch (error) {
        console.debug('CLS observer error:', error);
      }
    });
    clsObserver.observe({ type: 'layout-shift', buffered: true });
    
    // Create performance observer for FID/INP
    const fidObserver = new PerformanceObserver((entryList) => {
      try {
        for (const entry of entryList.getEntries()) {
          // Now this will be properly typed with global interface declaration
          const firstInput = entry as unknown as FirstInputEntry;
          const value = firstInput.processingStart - firstInput.startTime;
          reportWebVital(
            entry.name === 'first-input' ? 'FID' : 'INP', 
            value,
            getRating(value, 100, 300)
          );
        }
      } catch (error) {
        console.debug('FID/INP observer error:', error);
      }
    });
    fidObserver.observe({ type: 'first-input', buffered: true });
    
    return () => {
      try {
        lcpObserver.disconnect();
        clsObserver.disconnect();
        fidObserver.disconnect();
      } catch (error) {
        console.debug('Error disconnecting observers:', error);
      }
    };
  } catch (e) {
    console.debug('Error setting up performance observers:', e);
  }
};

// Helper function to determine performance rating
const getRating = (value: number, good: number, needsImprovement: number): 'good' | 'needs-improvement' | 'poor' => {
  if (value < good) return 'good';
  if (value < needsImprovement) return 'needs-improvement';
  return 'poor';
};

// Report web vitals metrics to analytics with enhanced error handling
const reportWebVital = (metricName: string, value: number, rating: 'good' | 'needs-improvement' | 'poor') => {
  try {
    // Enhanced checks to prevent dataLayer errors
    if (typeof window === 'undefined') return;
    
    // Check if gtag function exists and dataLayer is initialized
    if (typeof window.gtag !== 'function') {
      console.debug('gtag not available, skipping web vital reporting');
      return;
    }
    
    // Check if dataLayer exists and is an array
    if (!window.dataLayer || !Array.isArray(window.dataLayer)) {
      console.debug('dataLayer not available, skipping web vital reporting');
      return;
    }
    
    // Only report if everything is properly initialized
    window.gtag('event', 'web_vitals', {
      metric_name: metricName,
      metric_value: value,
      metric_delta: 0,
      metric_rating: rating
    });
  } catch (error) {
    console.debug('Web vital reporting error:', error);
  }
};
