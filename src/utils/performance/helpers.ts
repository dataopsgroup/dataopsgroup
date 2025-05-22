/**
 * Helper functions for web vitals and performance monitoring
 */
import { WebVitalMetric } from './types';

// Web Vitals thresholds based on Google's standards
export const thresholds = {
  LCP: { good: 2500, poor: 4000 },
  FID: { good: 100, poor: 300 },
  CLS: { good: 0.1, poor: 0.25 },
  INP: { good: 200, poor: 500 },
  FCP: { good: 1800, poor: 3000 },
  TTFB: { good: 800, poor: 1800 }
};

// Get rating based on metric value
export const getRating = (name: string, value: number): 'good' | 'needs-improvement' | 'poor' => {
  const metric = name.toUpperCase() as keyof typeof thresholds;
  
  if (thresholds[metric]) {
    if (value <= thresholds[metric].good) return 'good';
    if (value <= thresholds[metric].poor) return 'needs-improvement';
    return 'poor';
  }
  
  return 'needs-improvement';
};

// Generate unique ID for each metric instance
export const generateUniqueID = (): string => {
  return `v-${Date.now()}-${Math.floor(Math.random() * 10000)}`;
};

// Get device category based on screen size and user agent
export const getDeviceCategory = (): string => {
  if (typeof window === 'undefined') return 'unknown';
  
  const ua = navigator.userAgent;
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua)) {
    return window.innerWidth < 600 ? 'mobile' : 'tablet';
  }
  return 'desktop';
};

// Get connection type if available
export const getConnectionInfo = (): string => {
  if (typeof navigator !== 'undefined' && 'connection' in navigator) {
    const conn = (navigator as any).connection;
    if (conn) {
      return conn.effectiveType || conn.type || 'unknown';
    }
  }
  return 'unknown';
};

// Get or create sessionId for the current user session
export const getSessionId = (): string => {
  if (typeof window === 'undefined') return 'server';
  
  try {
    let sessionId = sessionStorage.getItem('perfSessionId');
    if (!sessionId) {
      sessionId = `session-${Date.now()}-${Math.floor(Math.random() * 10000)}`;
      sessionStorage.setItem('perfSessionId', sessionId);
    }
    return sessionId;
  } catch (e) {
    // If sessionStorage is not available, generate a temporary ID
    return `temp-${Date.now()}`;
  }
};

// Report web vital to analytics and log
export const reportWebVital = (metric: WebVitalMetric): void => {
  // Add user context data to the metric
  if (typeof window !== 'undefined') {
    metric.userAgent = navigator.userAgent;
    metric.connection = getConnectionInfo();
    metric.deviceCategory = getDeviceCategory();
    metric.sessionId = getSessionId();
  }
  
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
      metric_id: metric.id,
      device_category: metric.deviceCategory,
      connection_type: metric.connection,
      session_id: metric.sessionId
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
        userAgent: navigator.userAgent,
        deviceCategory: metric.deviceCategory,
        connection: metric.connection,
        sessionId: metric.sessionId
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
      path: window.location.pathname,
      deviceCategory: metric.deviceCategory,
      connection: metric.connection,
      sessionId: metric.sessionId
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
