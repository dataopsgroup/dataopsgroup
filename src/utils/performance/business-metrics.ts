
/**
 * Business-specific metrics and timing functions
 */
import { generateUniqueID, reportWebVital } from './helpers';

// Custom timing marks for business events
export const markBusinessEvent = (eventName: string): void => {
  if (typeof performance === 'undefined') return;
  
  try {
    const markName = `business-${eventName}-${Date.now()}`;
    performance.mark(markName);
    
    // Report the business event timing
    reportWebVital({
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
      reportWebVital({
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
    
    reportWebVital({
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
