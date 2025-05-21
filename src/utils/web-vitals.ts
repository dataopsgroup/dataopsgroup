/**
 * Enhanced web vitals monitoring with more comprehensive metrics
 * and improved reporting capabilities
 */

// Types for web vitals metrics
export interface WebVitalMetric {
  name: string;
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
  delta: number;
  id: string;
  entries: PerformanceEntry[];
}

// Interface for layout shift entries with hadRecentInput property
interface LayoutShiftAttribution {
  node: Node;
  previousRect: DOMRectReadOnly;
  currentRect: DOMRectReadOnly;
}

interface LayoutShiftEntry extends PerformanceEntry {
  value: number;
  hadRecentInput: boolean;
  sources?: LayoutShiftAttribution[];
}

// Interface for first input entries
interface FirstInputEntry extends PerformanceEntry {
  processingStart: number;
  processingEnd: number;
  startTime: number;
  duration: number;
  cancelable: boolean;
  target: Element;
}

// Web Vitals thresholds based on Google's standards
const thresholds = {
  LCP: { good: 2500, poor: 4000 },
  FID: { good: 100, poor: 300 },
  CLS: { good: 0.1, poor: 0.25 },
  INP: { good: 200, poor: 500 },
  FCP: { good: 1800, poor: 3000 },
  TTFB: { good: 800, poor: 1800 }
};

// Get rating based on metric value
const getRating = (name: string, value: number): 'good' | 'needs-improvement' | 'poor' => {
  const metric = name.toUpperCase() as keyof typeof thresholds;
  
  if (thresholds[metric]) {
    if (value <= thresholds[metric].good) return 'good';
    if (value <= thresholds[metric].poor) return 'needs-improvement';
    return 'poor';
  }
  
  return 'needs-improvement';
};

// Generate unique ID for each metric instance
const generateUniqueID = (): string => {
  return `v-${Date.now()}-${Math.floor(Math.random() * 10000)}`;
};

// Report web vital to analytics and log
export const reportWebVital = (metric: WebVitalMetric): void => {
  // Log to console in dev mode
  if (process.env.NODE_ENV === 'development') {
    console.log(`[Web Vitals] ${metric.name}: ${metric.value.toFixed(2)} (${metric.rating})`);
  }
  
  // Send to Google Analytics
  if (window.gtag) {
    window.gtag('event', 'web_vitals', {
      metric_name: metric.name,
      metric_value: Math.round(metric.value * 100) / 100,
      metric_delta: Math.round(metric.delta * 100) / 100,
      metric_rating: metric.rating,
      metric_id: metric.id
    });
  }
  
  // Send to custom endpoint if defined
  if (window.PERFORMANCE_API_ENDPOINT) {
    try {
      const payload = {
        name: metric.name,
        value: metric.value,
        rating: metric.rating,
        id: metric.id,
        timestamp: Date.now(),
        url: window.location.href,
        userAgent: navigator.userAgent
      };
      
      fetch(window.PERFORMANCE_API_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        // Use keepalive to ensure the request completes even if page is unloaded
        keepalive: true
      }).catch(err => console.error('Failed to report metric:', err));
    } catch (e) {
      // Ignore reporting errors
    }
  }
  
  // Store metrics in localStorage for dashboard
  try {
    const metrics = JSON.parse(localStorage.getItem('webVitalsMetrics') || '[]');
    metrics.push({
      name: metric.name,
      value: metric.value,
      rating: metric.rating,
      timestamp: Date.now(),
      path: window.location.pathname
    });
    
    // Keep only last 100 entries
    while (metrics.length > 100) {
      metrics.shift();
    }
    
    localStorage.setItem('webVitalsMetrics', JSON.stringify(metrics));
  } catch (e) {
    // Ignore storage errors
  }
};

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
      
      reportWebVital({
        name: 'LoadTime',
        value: pageLoadTime,
        delta: pageLoadTime,
        rating: getRating('FCP', pageLoadTime), // Use FCP thresholds for page load
        id: generateUniqueID(),
        entries: []
      });
    }, 0);
  });
};
