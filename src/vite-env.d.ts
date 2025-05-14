
/// <reference types="vite/client" />

// Web Vitals Performance Entry types
interface LayoutShiftEntry extends PerformanceEntry {
  hadRecentInput: boolean;
  value: number;
}

interface FirstInputEntry extends PerformanceEntry {
  processingStart: number;
  startTime: number;
}

interface PerformanceObserverInit {
  type: string;
  buffered?: boolean;
}

