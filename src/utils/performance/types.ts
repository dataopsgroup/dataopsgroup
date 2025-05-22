
/**
 * Type definitions for web vitals and performance monitoring
 */

// Types for web vitals metrics
export interface WebVitalMetric {
  name: string;
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
  delta: number;
  id: string;
  entries: PerformanceEntry[];
  userAgent?: string;
  connection?: string;
  deviceCategory?: string;
  sessionId?: string;
}

// Interface for layout shift entries with hadRecentInput property
export interface LayoutShiftAttribution {
  node: Node;
  previousRect: DOMRectReadOnly;
  currentRect: DOMRectReadOnly;
}

export interface LayoutShiftEntry extends PerformanceEntry {
  value: number;
  hadRecentInput: boolean;
  sources?: LayoutShiftAttribution[];
}

// Interface for first input entries
export interface FirstInputEntry extends PerformanceEntry {
  processingStart: number;
  processingEnd: number;
  startTime: number;
  duration: number;
  cancelable: boolean;
  target: Element;
}
