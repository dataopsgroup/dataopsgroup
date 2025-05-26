
/**
 * Basic web vitals monitoring
 */

// Simple web vitals initialization
export const initWebVitals = () => {
  if (typeof window === 'undefined') return;
  
  try {
    // Basic performance monitoring
    if ('performance' in window && 'mark' in window.performance) {
      window.performance.mark('web-vitals-init');
    }
    
    // Basic CLS monitoring
    if ('PerformanceObserver' in window) {
      try {
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (entry.entryType === 'layout-shift') {
              const layoutShiftEntry = entry as any; // Type assertion for layout shift specific properties
              if (!layoutShiftEntry.hadRecentInput) {
                console.debug('Layout shift detected:', layoutShiftEntry.value);
              }
            }
          }
        });
        observer.observe({ entryTypes: ['layout-shift'] });
      } catch (e) {
        console.debug('Layout shift monitoring not available');
      }
    }
  } catch (error) {
    console.warn('Web vitals initialization failed:', error);
  }
};
