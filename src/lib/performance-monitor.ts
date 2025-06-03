
/**
 * Performance monitoring utilities for Core Web Vitals tracking
 */

interface WebVitalsMetric {
  name: string;
  value: number;
  delta: number;
  id: string;
  entries: PerformanceEntry[];
}

type MetricHandler = (metric: WebVitalsMetric) => void;

/**
 * Track Core Web Vitals and report to analytics
 */
export const trackCoreWebVitals = (onMetric?: MetricHandler) => {
  if (typeof window === 'undefined' || !('PerformanceObserver' in window)) {
    return;
  }

  // Track LCP (Largest Contentful Paint)
  try {
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1] as PerformanceEntry & {
        renderTime?: number;
        loadTime?: number;
      };
      
      const value = lastEntry.renderTime || lastEntry.loadTime || 0;
      
      const metric: WebVitalsMetric = {
        name: 'LCP',
        value: Math.round(value),
        delta: 0,
        id: 'hero-lcp',
        entries
      };
      
      // Report to analytics
      reportToAnalytics(metric);
      
      if (onMetric) {
        onMetric(metric);
      }
    });
    
    lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });
  } catch (e) {
    console.warn('LCP tracking failed:', e);
  }

  // Track CLS (Cumulative Layout Shift)
  try {
    let clsValue = 0;
    const clsObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        const layoutShift = entry as PerformanceEntry & { value?: number; hadRecentInput?: boolean };
        if (!layoutShift.hadRecentInput) {
          clsValue += layoutShift.value || 0;
        }
      }
      
      const metric: WebVitalsMetric = {
        name: 'CLS',
        value: Math.round(clsValue * 1000) / 1000,
        delta: 0,
        id: 'layout-shift',
        entries: list.getEntries()
      };
      
      // Report CLS periodically
      reportToAnalytics(metric);
      
      if (onMetric) {
        onMetric(metric);
      }
    });
    
    clsObserver.observe({ type: 'layout-shift', buffered: true });
  } catch (e) {
    console.warn('CLS tracking failed:', e);
  }

  // Track FID (First Input Delay)
  try {
    const fidObserver = new PerformanceObserver((list) => {
      const firstInput = list.getEntries()[0] as PerformanceEntry & {
        processingStart?: number;
        startTime?: number;
      };
      
      const value = firstInput.processingStart && firstInput.startTime
        ? firstInput.processingStart - firstInput.startTime
        : 0;
      
      const metric: WebVitalsMetric = {
        name: 'FID',
        value: Math.round(value),
        delta: 0,
        id: 'first-input',
        entries: list.getEntries()
      };
      
      reportToAnalytics(metric);
      
      if (onMetric) {
        onMetric(metric);
      }
    });
    
    fidObserver.observe({ type: 'first-input', buffered: true });
  } catch (e) {
    console.warn('FID tracking failed:', e);
  }
};

/**
 * Report metrics to Google Analytics
 */
const reportToAnalytics = (metric: WebVitalsMetric) => {
  if (typeof window !== 'undefined' && window.gtag) {
    try {
      window.gtag('event', 'web_vitals', {
        metric_name: metric.name,
        metric_value: metric.value,
        metric_delta: metric.delta,
        metric_id: metric.id,
        custom_parameter_1: getDeviceType(),
        custom_parameter_2: getConnectionType()
      });
    } catch (e) {
      console.warn('Analytics reporting failed:', e);
    }
  }
};

/**
 * Get device type for segmentation
 */
const getDeviceType = (): string => {
  if (typeof window === 'undefined') return 'unknown';
  
  const width = window.innerWidth;
  if (width < 768) return 'mobile';
  if (width < 1024) return 'tablet';
  return 'desktop';
};

/**
 * Get connection type for performance analysis
 */
const getConnectionType = (): string => {
  if (typeof navigator === 'undefined' || !('connection' in navigator)) {
    return 'unknown';
  }
  
  const connection = (navigator as any).connection;
  return connection?.effectiveType || 'unknown';
};

/**
 * Track custom performance marks
 */
export const trackPerformanceMark = (markName: string, detail?: any) => {
  if (typeof window === 'undefined' || !window.performance) return;
  
  try {
    window.performance.mark(markName, { detail });
    
    // Report significant marks to analytics
    if (['fonts-loaded', 'hero-image-loaded', 'page-interactive'].includes(markName)) {
      const navigationStart = window.performance.timeOrigin || 
        (window.performance.timing && window.performance.timing.navigationStart) || 0;
      
      const markTime = window.performance.now();
      
      if (window.gtag) {
        window.gtag('event', 'performance_mark', {
          event_category: 'Performance',
          event_label: markName,
          value: Math.round(markTime),
          custom_parameter_1: getDeviceType()
        });
      }
    }
  } catch (e) {
    console.warn(`Performance mark failed for ${markName}:`, e);
  }
};

/**
 * Initialize performance monitoring
 */
export const initPerformanceMonitoring = () => {
  if (typeof window === 'undefined') return;
  
  // Start Core Web Vitals tracking
  trackCoreWebVitals();
  
  // Track page load completion
  window.addEventListener('load', () => {
    trackPerformanceMark('page-loaded');
    
    // Schedule a delayed CLS measurement
    setTimeout(() => {
      trackPerformanceMark('cls-final-check');
    }, 5000);
  });
  
  // Track when page becomes interactive
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      trackPerformanceMark('dom-interactive');
    });
  } else {
    trackPerformanceMark('dom-interactive');
  }
};

/**
 * Get performance budget alerts
 */
export const checkPerformanceBudgets = () => {
  if (typeof window === 'undefined' || !window.performance) return;
  
  const budgets = {
    LCP: 2500, // 2.5 seconds
    CLS: 0.1,  // 0.1 cumulative score
    FID: 100   // 100ms
  };
  
  // This would integrate with your performance monitoring system
  // to alert when budgets are exceeded
  console.log('Performance budgets:', budgets);
};
