
/**
 * Performance monitoring type definitions
 */

export interface WebVitalMetric {
  name: string;
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
  delta: number;
  id: string;
  timestamp?: number;
  path?: string;
  deviceCategory?: string;
  connection?: string;
  entries?: PerformanceEntry[];
}

export interface LayoutShiftEntry extends PerformanceEntry {
  value: number;
  hadRecentInput: boolean;
  sources: Array<{
    node?: Node;
    currentRect: DOMRectReadOnly;
    previousRect: DOMRectReadOnly;
  }>;
}

export interface FirstInputEntry extends PerformanceEntry {
  processingStart: number;
  startTime: number;
  cancelable: boolean;
  target?: EventTarget;
}

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}
