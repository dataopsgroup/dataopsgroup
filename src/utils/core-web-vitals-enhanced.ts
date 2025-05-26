
/**
 * Enhanced Core Web Vitals monitoring with Real User Monitoring
 * Comprehensive tracking for LCP, FID, CLS, FCP, TTFB, INP
 */

interface WebVitalMetricEnhanced {
  name: 'LCP' | 'FID' | 'CLS' | 'FCP' | 'TTFB' | 'INP';
  value: number;
  delta: number;
  rating: 'good' | 'needs-improvement' | 'poor';
  id: string;
  entries: PerformanceEntry[];
  timestamp: number;
  url: string;
  userAgent: string;
  connectionType?: string;
}

// Enhanced thresholds for 2024 Core Web Vitals
const VITALS_THRESHOLDS = {
  LCP: { good: 2500, poor: 4000 },
  FID: { good: 100, poor: 300 },
  CLS: { good: 0.1, poor: 0.25 },
  FCP: { good: 1800, poor: 3000 },
  TTFB: { good: 800, poor: 1800 },
  INP: { good: 200, poor: 500 }
};

// Generate unique ID for each metric
const generateUniqueID = (): string => {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
};

// Determine rating based on thresholds
const getRating = (metricName: string, value: number): 'good' | 'needs-improvement' | 'poor' => {
  const thresholds = VITALS_THRESHOLDS[metricName as keyof typeof VITALS_THRESHOLDS];
  if (!thresholds) return 'poor';
  
  if (value <= thresholds.good) return 'good';
  if (value <= thresholds.poor) return 'needs-improvement';
  return 'poor';
};

// Get connection information
const getConnectionInfo = (): string => {
  if ('connection' in navigator) {
    const connection = (navigator as any).connection;
    return connection?.effectiveType || 'unknown';
  }
  return 'unknown';
};

// Report metric to analytics with enhanced data
const reportWebVital = (metric: WebVitalMetricEnhanced) => {
  // Report to Google Analytics
  if (window.gtag) {
    window.gtag('event', 'web_vitals', {
      metric_name: metric.name,
      metric_value: Math.round(metric.value),
      metric_delta: Math.round(metric.delta),
      metric_rating: metric.rating,
      metric_id: metric.id,
      page_path: window.location.pathname,
      connection_type: metric.connectionType,
      custom_map: {
        metric_timestamp: metric.timestamp
      }
    });
  }
  
  // Report to HubSpot for business intelligence
  if (window._hsq) {
    window._hsq.push(['trackEvent', {
      id: `web_vitals_${metric.name.toLowerCase()}`,
      value: Math.round(metric.value),
      rating: metric.rating,
      url: metric.url
    }]);
  }
  
  // Console logging for development
  if (process.env.NODE_ENV === 'development') {
    console.log(`🚀 ${metric.name}: ${Math.round(metric.value)}ms (${metric.rating})`);
  }
};

// Initialize enhanced web vitals monitoring
export const initEnhancedWebVitals = (): void => {
  if (typeof window === 'undefined') return;
  
  try {
    // Largest Contentful Paint (LCP)
    const lcpObserver = new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      const lastEntry = entries[entries.length - 1];
      
      const metric: WebVitalMetricEnhanced = {
        name: 'LCP',
        value: lastEntry.startTime,
        delta: lastEntry.startTime,
        rating: getRating('LCP', lastEntry.startTime),
        id: generateUniqueID(),
        entries: [lastEntry],
        timestamp: Date.now(),
        url: window.location.href,
        userAgent: navigator.userAgent,
        connectionType: getConnectionInfo()
      };
      
      reportWebVital(metric);
    });
    lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });
    
    // Cumulative Layout Shift (CLS)
    let clsValue = 0;
    let clsEntries: PerformanceEntry[] = [];
    
    const clsObserver = new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      
      entries.forEach(entry => {
        const layoutShift = entry as any;
        if (!layoutShift.hadRecentInput) {
          clsValue += layoutShift.value;
          clsEntries.push(entry);
          
          const metric: WebVitalMetricEnhanced = {
            name: 'CLS',
            value: clsValue,
            delta: layoutShift.value,
            rating: getRating('CLS', clsValue),
            id: generateUniqueID(),
            entries: [...clsEntries],
            timestamp: Date.now(),
            url: window.location.href,
            userAgent: navigator.userAgent,
            connectionType: getConnectionInfo()
          };
          
          reportWebVital(metric);
        }
      });
    });
    clsObserver.observe({ type: 'layout-shift', buffered: true });
    
    // First Input Delay (FID) / Interaction to Next Paint (INP)
    const fidObserver = new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      entries.forEach(entry => {
        const firstInput = entry as any;
        const value = firstInput.processingStart - firstInput.startTime;
        
        const metric: WebVitalMetricEnhanced = {
          name: entry.name === 'first-input' ? 'FID' : 'INP',
          value: value,
          delta: value,
          rating: getRating(entry.name === 'first-input' ? 'FID' : 'INP', value),
          id: generateUniqueID(),
          entries: [entry],
          timestamp: Date.now(),
          url: window.location.href,
          userAgent: navigator.userAgent,
          connectionType: getConnectionInfo()
        };
        
        reportWebVital(metric);
      });
    });
    fidObserver.observe({ type: 'first-input', buffered: true });
    
    // First Contentful Paint (FCP)
    const fcpObserver = new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      entries.forEach(entry => {
        if (entry.name === 'first-contentful-paint') {
          const metric: WebVitalMetricEnhanced = {
            name: 'FCP',
            value: entry.startTime,
            delta: entry.startTime,
            rating: getRating('FCP', entry.startTime),
            id: generateUniqueID(),
            entries: [entry],
            timestamp: Date.now(),
            url: window.location.href,
            userAgent: navigator.userAgent,
            connectionType: getConnectionInfo()
          };
          
          reportWebVital(metric);
        }
      });
    });
    fcpObserver.observe({ type: 'paint', buffered: true });
    
    // Time to First Byte (TTFB)
    const navigationEntries = performance.getEntriesByType('navigation');
    if (navigationEntries.length > 0) {
      const navigationEntry = navigationEntries[0] as PerformanceNavigationTiming;
      const ttfb = navigationEntry.responseStart - navigationEntry.requestStart;
      
      const metric: WebVitalMetricEnhanced = {
        name: 'TTFB',
        value: ttfb,
        delta: ttfb,
        rating: getRating('TTFB', ttfb),
        id: generateUniqueID(),
        entries: [navigationEntry],
        timestamp: Date.now(),
        url: window.location.href,
        userAgent: navigator.userAgent,
        connectionType: getConnectionInfo()
      };
      
      reportWebVital(metric);
    }
    
  } catch (error) {
    console.error('Enhanced web vitals monitoring failed:', error);
  }
  
  // Additional page timing metrics
  window.addEventListener('load', () => {
    setTimeout(() => {
      const pageLoadTime = performance.now();
      
      if (window.gtag) {
        window.gtag('event', 'page_timing', {
          page_load_time: Math.round(pageLoadTime),
          page_path: window.location.pathname
        });
      }
    }, 0);
  });
};

// Real User Monitoring aggregation
export const aggregateRUMData = () => {
  if (typeof window === 'undefined') return;
  
  // Collect and aggregate performance data
  const performanceData = {
    url: window.location.href,
    timestamp: Date.now(),
    userAgent: navigator.userAgent,
    viewport: {
      width: window.innerWidth,
      height: window.innerHeight
    },
    connection: getConnectionInfo(),
    timing: performance.timing
  };
  
  // Send aggregated data to analytics
  if (window.gtag) {
    window.gtag('event', 'rum_data', {
      custom_map: performanceData
    });
  }
};
