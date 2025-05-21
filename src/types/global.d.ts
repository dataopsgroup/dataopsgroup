
/**
 * Global type definitions for the application
 * This centralizes all global interface extensions to prevent duplicate declarations
 */

// Global window interface extensions
interface Window {
  // Analytics and tracking
  gtag?: (...args: any[]) => void;
  dataLayer?: any[];
  _hsq?: any[];
  
  // Performance and optimization
  requestIdleCallback: (
    callback: IdleRequestCallback,
    options?: IdleRequestOptions
  ) => number;
  cancelIdleCallback: (handle: number) => void;
}

// Element interface extensions for polyfills
interface Element {
  // Vendor prefixed selectors - all with optional modifiers for consistency
  matchesSelector?: (selector: string) => boolean;
  mozMatchesSelector?: (selector: string) => boolean;
  msMatchesSelector?: (selector: string) => boolean;
  oMatchesSelector?: (selector: string) => boolean;
  webkitMatchesSelector?: (selector: string) => boolean;
}

// Performance entry extensions for web vitals monitoring
interface LayoutShiftEntry extends PerformanceEntry {
  hadRecentInput: boolean;
  value: number;
}

interface FirstInputEntry extends PerformanceEntry {
  processingStart: number;
  startTime: number;
}

// Add missing PerformanceObserverInit interface
interface PerformanceObserverInit {
  type: string;
  buffered?: boolean;
}

