

declare global {
  interface Window {
    // Analytics integrations
    gtag?: (command: string, action: string, params?: Record<string, any>) => void;
    _hsq?: any[];
    
    // Performance monitoring APIs with vendor prefixes
    webkitRequestIdleCallback?: typeof requestIdleCallback;
    mozRequestIdleCallback?: typeof requestIdleCallback;
    msRequestIdleCallback?: typeof requestIdleCallback;
    
    // Standard browser APIs may need polyfills
    requestIdleCallback?: (
      callback: (deadline: {
        didTimeout: boolean;
        timeRemaining: () => number;
      }) => void,
      options?: { timeout: number }
    ) => number;
    cancelIdleCallback?: (handle: number) => void;

    // App version for cache busting
    APP_VERSION?: string;
    
    // Performance API endpoint
    PERFORMANCE_API_ENDPOINT?: string;

    // Modern features detection for mobile optimization
    APP_MODERN_FEATURES?: {
      supportsES2020: boolean;
      supportsAsyncAwait: boolean;
      supportsModules: boolean;
      polyfillsRemoved: boolean;
    };
  }

  // PerformanceObserver interfaces
  interface PerformanceObserverInit {
    entryTypes?: string[];
    type?: string;
    buffered?: boolean;
  }
  
  // Long tasks performance entry
  interface PerformanceLongTaskTiming extends PerformanceEntry {
    attribution: TaskAttributionTiming[];
  }
  
  interface TaskAttributionTiming {
    name: string;
    entryType: string;
    startTime: number;
    duration: number;
    containerType: string;
    containerSrc: string;
    containerId: string;
    containerName: string;
  }

  // Layout shifts performance entry
  interface LayoutShiftAttribution {
    node: Node;
    previousRect: DOMRectReadOnly;
    currentRect: DOMRectReadOnly;
  }

  interface LayoutShiftEntry extends PerformanceEntry {
    value: number;
    hadRecentInput: boolean;
    lastInputTime: number;
    sources?: LayoutShiftAttribution[];
  }

  // First input delay entry
  interface FirstInputEntry extends PerformanceEntry {
    processingStart: number;
    processingEnd: number;
    startTime: number;
    duration: number;
    cancelable: boolean;
    target: Element;
  }
}

// Ensure this file is treated as a module
export {};

