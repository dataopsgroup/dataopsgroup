
/**
 * Performance monitoring utilities for metrics tracking
 */

// Monitor performance and log metrics
export const monitorPerformance = () => {
  if (window.performance && 'getEntriesByType' in window.performance) {
    setTimeout(() => {
      const navigation = window.performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {
        const fcp = navigation.loadEventEnd - navigation.fetchStart;
        console.log(`Performance: First Contentful Paint: ${Math.round(fcp)}ms`);
        
        // Report to analytics if available
        if (window.gtag && fcp > 0) {
          window.gtag('event', 'page_performance', {
            metric_name: 'FCP',
            metric_value: Math.round(fcp),
            page_path: window.location.pathname
          });
        }
      }
    }, 1000);
  }
};
