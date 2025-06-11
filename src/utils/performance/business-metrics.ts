
/**
 * Business-specific metrics and timing functions
 */
import { generateUniqueID } from './helpers';

// Extended interface for custom business metrics
interface BusinessMetric {
  name: string;
  value: number;
  delta: number;
  rating: 'good' | 'needs-improvement' | 'poor';
  id: string;
  entries: PerformanceEntry[];
  timestamp?: number;
  path?: string;
  deviceCategory?: string;
  connection?: string;
}

// Report business metrics separately from web vitals
const reportBusinessMetric = (metric: BusinessMetric): void => {
  if (window.gtag) {
    window.gtag('event', 'business_metrics', {
      metric_name: metric.name,
      metric_value: Math.round(metric.value),
      metric_rating: metric.rating,
      metric_id: metric.id
    });
  }
};

// Custom timing marks for business events
export const markBusinessEvent = (eventName: string): void => {
  if (typeof performance === 'undefined') return;
  
  try {
    const markName = `business-${eventName}-${Date.now()}`;
    performance.mark(markName);
    
    // Report the business event timing
    reportBusinessMetric({
      name: `Business_${eventName}`,
      value: performance.now(),
      delta: 0,
      rating: 'good', // Business events don't have thresholds
      id: generateUniqueID(),
      entries: []
    });
  } catch (e) {
    console.error('Failed to mark business event:', e);
  }
};

// Measure time between two business events
export const measureBusinessTiming = (startMark: string, endMark: string, name: string): void => {
  if (typeof performance === 'undefined') return;
  
  try {
    const measureName = `business-${name}-${Date.now()}`;
    performance.measure(measureName, `business-${startMark}-${Date.now()}`, `business-${endMark}-${Date.now()}`);
    
    const measures = performance.getEntriesByName(measureName);
    if (measures.length > 0) {
      reportBusinessMetric({
        name: `BusinessTiming_${name}`,
        value: measures[0].duration,
        delta: measures[0].duration,
        rating: 'good', // Business timings don't have thresholds
        id: generateUniqueID(),
        entries: measures
      });
    }
  } catch (e) {
    console.error('Failed to measure business timing:', e);
  }
};

// Track custom user interactions for correlation with performance
export const trackUserInteraction = (interactionType: string, elementId?: string): void => {
  if (typeof performance === 'undefined') return;
  
  try {
    const timestamp = performance.now();
    const markName = `interaction-${interactionType}-${timestamp}`;
    performance.mark(markName);
    
    reportBusinessMetric({
      name: `Interaction_${interactionType}`,
      value: timestamp,
      delta: 0,
      rating: 'good', // Interactions don't have thresholds
      id: generateUniqueID(),
      entries: []
    });
  } catch (e) {
    console.error('Failed to track user interaction:', e);
  }
};
