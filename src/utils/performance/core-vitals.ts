
/**
 * Core web vitals monitoring and initialization
 */
import { WebVitalMetric, LayoutShiftEntry, FirstInputEntry } from './types';
import { getRating, generateUniqueID, reportWebVital } from './helpers';

// Initialize vitals monitoring
export const initWebVitals = (): void => {
  if (typeof window === 'undefined') return;
  
  try {
    // Observe Largest Contentful Paint
    const lcpObserver = new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      const lastEntry = entries[entries.length - 1];
      
      const rating = getRating('LCP', lastEntry.startTime);
      reportWebVital('LCP', lastEntry.startTime, rating);
    });
    lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });
    
    // Observe Cumulative Layout Shift
    let clsValue = 0;
    let clsEntries: PerformanceEntry[] = [];
    
    const clsObserver = new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries() as LayoutShiftEntry[];
      
      entries.forEach(entry => {
        // Only count layout shifts without recent user input
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
          clsEntries.push(entry);
          
          const rating = getRating('CLS', clsValue);
          reportWebVital('CLS', clsValue, rating);
        }
      });
    });
    clsObserver.observe({ type: 'layout-shift', buffered: true });
    
    // Observe First Input Delay / Interaction to Next Paint
    const fidObserver = new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      entries.forEach(entry => {
        // Now this will be properly typed with global interface declaration
        const firstInput = entry as unknown as FirstInputEntry;
        const value = firstInput.processingStart - firstInput.startTime;
        
        const metricName = entry.name === 'first-input' ? 'FID' : 'INP';
        const rating = getRating(metricName, value);
        reportWebVital(metricName, value, rating);
      });
    });
    
    // Observe first-input (widely supported)
    fidObserver.observe({ type: 'first-input', buffered: true });
    
    // Only observe 'interaction' if supported (for INP metric)
    try {
      fidObserver.observe({ type: 'interaction', buffered: true });
    } catch (error) {
      // 'interaction' type not supported in this browser - ignore silently
      console.debug('Interaction entry type not supported, INP tracking unavailable');
    }
    
    // Observe First Contentful Paint
    const fcpObserver = new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      entries.forEach(entry => {
        const rating = getRating('FCP', entry.startTime);
        reportWebVital('FCP', entry.startTime, rating);
      });
    });
    fcpObserver.observe({ type: 'paint', buffered: true });
    
    // Calculate TTFB
    const navigationEntries = performance.getEntriesByType('navigation');
    if (navigationEntries.length > 0) {
      const navigationEntry = navigationEntries[0] as PerformanceNavigationTiming;
      const ttfb = navigationEntry.responseStart - navigationEntry.requestStart;
      
      const rating = getRating('TTFB', ttfb);
      reportWebVital('TTFB', ttfb, rating);
    }
    
  } catch (error) {
    console.error('Error setting up web vitals monitoring:', error);
  }
  
  // Add load event listener to track total page load time
  window.addEventListener('load', () => {
    setTimeout(() => {
      // Use setTimeout to ensure this runs after other load handlers
      const pageLoadTime = performance.now();
      
      // Report page load time as FCP for now
      const rating = getRating('FCP', pageLoadTime);
      reportWebVital('FCP', pageLoadTime, rating);
    }, 0);
  });
};
