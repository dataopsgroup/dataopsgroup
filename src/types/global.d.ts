
/**
 * Global type definitions for the application
 * This centralizes all global interface extensions to prevent duplicate declarations
 */

// Global window interface extensions
declare global {
  interface Window {
    // Analytics and tracking
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
    _hsq?: any[];
    
    // Application version
    APP_VERSION?: string;
    
    // Performance and optimization
    requestIdleCallback: (
      callback: IdleRequestCallback,
      options?: IdleRequestOptions
    ) => number;
    cancelIdleCallback: (handle: number) => void;
  }
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

// Ensure this file is treated as a module
export {};
