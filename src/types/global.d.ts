declare global {
  interface Window {
    // Analytics integrations
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
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
      options?: { timeout?: number }
    ) => number;
    cancelIdleCallback?: (handle: number) => void;

    // App version for cache busting
    APP_VERSION?: string;
    
    // Performance API endpoint
    PERFORMANCE_API_ENDPOINT?: string;
    
    // App version for cache busting
    __analytics_initialized?: boolean;
    
    // App version for cache busting
    __performanceUtils?: {
      progressiveHydration: (element: Element, callback: () => void) => void;
      scheduleTask: (callback: () => void, priority?: string) => void;
    };
    
    // App version for cache busting
    __RESOURCE_ORDER_OPTIMIZED__?: boolean;
    
    // App version for cache busting
    scheduler?: {
      postTask: (callback: () => void, options?: { priority: string }) => void;
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

interface HTMLImageElement {
  fetchPriority?: string;
}

interface HTMLScriptElement {
  fetchPriority?: string;
}

interface HTMLLinkElement {
  fetchPriority?: string;
}
