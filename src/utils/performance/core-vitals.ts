
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
      
      const metric: WebVitalMetric = {
        name: 'LCP',
        value: lastEntry.startTime,
        delta: lastEntry.startTime,
        rating: getRating('LCP', lastEntry.startTime),
        id: generateUniqueID(),
        entries: [lastEntry]
      };
      
      reportWebVital(metric);
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
          
          const metric: WebVitalMetric = {
            name: 'CLS',
            value: clsValue,
            delta: entry.value,
            rating: getRating('CLS', clsValue),
            id: generateUniqueID(),
            entries: [...clsEntries]
          };
          
          reportWebVital(metric);
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
        
        const metric: WebVitalMetric = {
          name: entry.name === 'first-input' ? 'FID' : 'INP',
          value: value,
          delta: value,
          rating: getRating(entry.name === 'first-input' ? 'FID' : 'INP', value),
          id: generateUniqueID(),
          entries: [entry]
        };
        
        reportWebVital(metric);
      });
    });
    fidObserver.observe({ type: 'first-input', buffered: true });
    fidObserver.observe({ type: 'interaction', buffered: true });
    
    // Observe First Contentful Paint
    const fcpObserver = new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      entries.forEach(entry => {
        const metric: WebVitalMetric = {
          name: 'FCP',
          value: entry.startTime,
          delta: entry.startTime,
          rating: getRating('FCP', entry.startTime),
          id: generateUniqueID(),
          entries: [entry]
        };
        
        reportWebVital(metric);
      });
    });
    fcpObserver.observe({ type: 'paint', buffered: true });
    
    // Calculate TTFB
    const navigationEntries = performance.getEntriesByType('navigation');
    if (navigationEntries.length > 0) {
      const navigationEntry = navigationEntries[0] as PerformanceNavigationTiming;
      const ttfb = navigationEntry.responseStart - navigationEntry.requestStart;
      
      const metric: WebVitalMetric = {
        name: 'TTFB',
        value: ttfb,
        delta: ttfb,
        rating: getRating('TTFB', ttfb),
        id: generateUniqueID(),
        entries: [navigationEntry]
      };
      
      reportWebVital(metric);
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
      reportWebVital({
        name: 'FCP',
        value: pageLoadTime,
        delta: pageLoadTime,
        rating: getRating('FCP', pageLoadTime),
        id: generateUniqueID(),
        entries: []
      });
    }, 0);
  });
};
