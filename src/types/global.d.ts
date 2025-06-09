
// Global type declarations for browser APIs and third-party integrations

declare global {
  // Performance API extensions
  interface LayoutShiftAttribution {
    node: Node;
    previousRect: DOMRectReadOnly;
    currentRect: DOMRectReadOnly;
  }

  interface LayoutShiftEntry extends PerformanceEntry {
    value: number;
    hadRecentInput: boolean;
    sources?: LayoutShiftAttribution[];
  }

  interface FirstInputEntry extends PerformanceEntry {
    processingStart: number;
    processingEnd: number;
    startTime: number;
    duration: number;
    cancelable: boolean;
    target: Element;
  }

  interface Window {
    // Botpress chatbot integration
    botpress?: {
      init: (config: {
        composerPlaceholder?: string;
        botConversationDescription?: string;
        botName?: string;
      }) => void;
    };
    
    // Google Analytics
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
    
    // HubSpot tracking
    _hsq?: any[];
    hbspt?: {
      forms: {
        create: (config: any) => void;
      };
    };
    
    // Application versioning
    APP_VERSION?: string;
    
    // Performance monitoring
    PERFORMANCE_API_ENDPOINT?: string;
  }
}

export {};
