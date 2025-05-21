
/**
 * Client-side bundle analyzer that tracks module weights and reports to analytics
 * This helps optimize bundle sizes over time by identifying large dependencies
 */

interface ModuleAnalysis {
  name: string;
  size: number;
  timestamp: number;
}

class BundleAnalyzer {
  private static instance: BundleAnalyzer;
  private moduleTracker: Record<string, ModuleAnalysis> = {};
  
  private constructor() {
    // Private constructor for singleton
    if (typeof window !== 'undefined') {
      this.trackInitialLoad();
    }
  }
  
  public static getInstance(): BundleAnalyzer {
    if (!BundleAnalyzer.instance) {
      BundleAnalyzer.instance = new BundleAnalyzer();
    }
    return BundleAnalyzer.instance;
  }
  
  /**
   * Track the loading of a specific module or component
   */
  public trackModule(name: string, size: number): void {
    this.moduleTracker[name] = {
      name,
      size,
      timestamp: Date.now()
    };
    
    // Send to analytics if available
    if (window.gtag) {
      window.gtag('event', 'module_loaded', {
        module_name: name,
        module_size: size,
        value: size // For aggregation
      });
    }
  }
  
  /**
   * Track initial page load metrics
   */
  private trackInitialLoad(): void {
    // Wait for the page to fully load
    window.addEventListener('load', () => {
      setTimeout(() => {
        // Collect performance metrics
        const performanceEntries = performance.getEntriesByType('resource');
        
        // Group by resource type
        const resourcesByType: Record<string, number> = {};
        
        performanceEntries.forEach(entry => {
          const url = (entry as PerformanceResourceTiming).name;
          let type = 'other';
          
          if (url.endsWith('.js')) type = 'javascript';
          else if (url.endsWith('.css')) type = 'css';
          else if (/\.(png|jpg|jpeg|gif|webp|avif|svg)/.test(url)) type = 'image';
          else if (url.endsWith('.woff2') || url.endsWith('.woff') || url.endsWith('.ttf')) type = 'font';
          
          resourcesByType[type] = (resourcesByType[type] || 0) + 
            ((entry as PerformanceResourceTiming).encodedBodySize || 0);
        });
        
        // Send analytics
        if (window.gtag) {
          Object.entries(resourcesByType).forEach(([type, size]) => {
            window.gtag('event', 'resource_loaded', {
              resource_type: type,
              resource_size: size,
              value: size // For aggregation
            });
          });
        }
      }, 1000);
    });
  }
  
  /**
   * Get total tracked bundle size
   */
  public getTotalBundleSize(): number {
    return Object.values(this.moduleTracker)
      .reduce((total, mod) => total + mod.size, 0);
  }
  
  /**
   * Get largest modules by size
   */
  public getLargestModules(count: number = 5): ModuleAnalysis[] {
    return Object.values(this.moduleTracker)
      .sort((a, b) => b.size - a.size)
      .slice(0, count);
  }
}

// Export singleton instance
export default BundleAnalyzer.getInstance();

// Initialize module tracking in development
if (process.env.NODE_ENV === 'development') {
  (window as any).__bundleAnalyzer = BundleAnalyzer.getInstance();
  console.log('Bundle analyzer initialized in development mode');
}
