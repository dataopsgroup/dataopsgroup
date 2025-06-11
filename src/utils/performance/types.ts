
export interface WebVitalMetric {
  name: 'LCP' | 'FID' | 'CLS' | 'FCP' | 'TTFB' | 'INP';
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

export interface LayoutShiftEntry extends PerformanceEntry {
  value: number;
  hadRecentInput: boolean;
}

export interface FirstInputEntry extends PerformanceEntry {
  processingStart: number;
}
