
/**
 * Performance monitoring utilities for tracking web vitals
 */

// Enhanced performance monitoring function - throttled for efficiency
export const setupPerformanceMonitoring = () => {
  if (typeof window === 'undefined' || !('PerformanceObserver' in window)) {
    return;
  }

  // Create performance observer for LCP
  try {
    const lcpObserver = new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      const lastEntry = entries[entries.length - 1];
      // Report LCP to analytics if available
      reportWebVital('LCP', lastEntry.startTime, getRating(lastEntry.startTime, 2500, 4000));
    });
    lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });
    
    // Create performance observer for CLS
    const clsObserver = new PerformanceObserver((entryList) => {
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
    });
    clsObserver.observe({ type: 'layout-shift', buffered: true });
    
    // Create performance observer for FID/INP
    const fidObserver = new PerformanceObserver((entryList) => {
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
    });
    fidObserver.observe({ type: 'first-input', buffered: true });
    
    return () => {
      lcpObserver.disconnect();
      clsObserver.disconnect();
      fidObserver.disconnect();
    };
  } catch (e) {
    console.error('Error setting up performance observers:', e);
  }
};

// Helper function to determine performance rating
const getRating = (value: number, good: number, needsImprovement: number): 'good' | 'needs-improvement' | 'poor' => {
  if (value < good) return 'good';
  if (value < needsImprovement) return 'needs-improvement';
  return 'poor';
};

// Report web vitals metrics to analytics
const reportWebVital = (metricName: string, value: number, rating: 'good' | 'needs-improvement' | 'poor') => {
  if (window.gtag) {
    window.gtag('event', 'web_vitals', {
      metric_name: metricName,
      metric_value: value,
      metric_delta: 0,
      metric_rating: rating
    });
  }
};
