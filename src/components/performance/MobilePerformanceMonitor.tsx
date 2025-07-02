
import React, { useEffect } from 'react';

/**
 * Mobile-specific performance monitoring
 * Tracks Core Web Vitals and reports mobile-specific metrics
 */
const MobilePerformanceMonitor = () => {
  useEffect(() => {
    // Only run on mobile devices
    const isMobile = window.innerWidth <= 768;
    if (!isMobile) return;

    let lcpValue = 0;
    let clsValue = 0;
    let fidValue = 0;

    // Monitor LCP (Largest Contentful Paint)
    const lcpObserver = new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      const lastEntry = entries[entries.length - 1];
      lcpValue = lastEntry.startTime;
      
      // Report to analytics
      if (window.gtag) {
        window.gtag('event', 'mobile_lcp', {
          event_category: 'Mobile Performance',
          value: Math.round(lcpValue),
          custom_parameter_1: 'mobile_device'
        });
      }
    });

    // Monitor CLS (Cumulative Layout Shift)
    const clsObserver = new PerformanceObserver((entryList) => {
      entryList.getEntries().forEach((entry) => {
        const layoutShift = entry as any;
        if (!layoutShift.hadRecentInput) {
          clsValue += layoutShift.value;
        }
      });
      
      if (window.gtag) {
        window.gtag('event', 'mobile_cls', {
          event_category: 'Mobile Performance',
          value: clsValue,
          custom_parameter_1: 'mobile_device'
        });
      }
    });

    // Monitor FID (First Input Delay)
    const fidObserver = new PerformanceObserver((entryList) => {
      entryList.getEntries().forEach((entry) => {
        const firstInput = entry as any;
        fidValue = firstInput.processingStart - firstInput.startTime;
        
        if (window.gtag) {
          window.gtag('event', 'mobile_fid', {
            event_category: 'Mobile Performance',
            value: Math.round(fidValue),
            custom_parameter_1: 'mobile_device'
          });
        }
      });
    });

    // Start observing
    try {
      lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });
      clsObserver.observe({ type: 'layout-shift', buffered: true });
      fidObserver.observe({ type: 'first-input', buffered: true });
    } catch (error) {
      console.warn('Performance monitoring not supported:', error);
    }

    // Cleanup
    return () => {
      lcpObserver.disconnect();
      clsObserver.disconnect();
      fidObserver.disconnect();
    };
  }, []);

  return null; // This is a monitoring component, no UI
};

export default MobilePerformanceMonitor;
