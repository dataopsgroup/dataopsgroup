
/**
 * Performance monitoring utilities for tracking web vitals
 */

// Define types for web vitals performance entries
interface LayoutShiftEntry extends PerformanceEntry {
  hadRecentInput: boolean;
  value: number;
}

interface FirstInputEntry extends PerformanceEntry {
  processingStart: number;
  startTime: number;
}

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
      if (window.gtag) {
        window.gtag('event', 'web_vitals', {
          metric_name: 'LCP',
          metric_value: lastEntry.startTime,
          metric_delta: 0,
          metric_rating: lastEntry.startTime < 2500 ? 'good' : lastEntry.startTime < 4000 ? 'needs-improvement' : 'poor'
        });
      }
    });
    lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });
    
    // Create performance observer for CLS
    const clsObserver = new PerformanceObserver((entryList) => {
      let clsValue = 0;
      for (const entry of entryList.getEntries()) {
        const layoutShift = entry as LayoutShiftEntry;
        if (!layoutShift.hadRecentInput) {
          clsValue += layoutShift.value;
        }
      }
      // Report CLS to analytics
      if (window.gtag) {
        window.gtag('event', 'web_vitals', {
          metric_name: 'CLS',
          metric_value: clsValue,
          metric_delta: 0,
          metric_rating: clsValue < 0.1 ? 'good' : clsValue < 0.25 ? 'needs-improvement' : 'poor'
        });
      }
    });
    clsObserver.observe({ type: 'layout-shift', buffered: true });
    
    // Create performance observer for FID/INP
    const fidObserver = new PerformanceObserver((entryList) => {
      for (const entry of entryList.getEntries()) {
        const firstInput = entry as FirstInputEntry;
        if (window.gtag) {
          window.gtag('event', 'web_vitals', {
            metric_name: entry.name === 'first-input' ? 'FID' : 'INP',
            metric_value: firstInput.processingStart - firstInput.startTime,
            metric_delta: 0,
            metric_rating: (firstInput.processingStart - firstInput.startTime) < 100 ? 'good' : 
              (firstInput.processingStart - firstInput.startTime) < 300 ? 'needs-improvement' : 'poor'
          });
        }
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

// Add gtag and HubSpot to window object type
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
    _hsq?: any[];
  }
}
