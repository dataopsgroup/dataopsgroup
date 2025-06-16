/**
 * Performance monitoring utility for detecting slow components and operations
 */

interface PerformanceMetric {
  componentName: string;
  operation: string;
  duration: number;
  timestamp: number;
}

class PerformanceMonitor {
  private metrics: PerformanceMetric[] = [];
  private readonly WARNING_THRESHOLD = 100; // ms
  private readonly ERROR_THRESHOLD = 1000; // ms

  startTimer(componentName: string, operation: string): () => void {
    const startTime = performance.now();
    
    return () => {
      const duration = performance.now() - startTime;
      this.logMetric(componentName, operation, duration);
      
      if (duration > this.ERROR_THRESHOLD) {
        console.error(`🚨 PERFORMANCE ERROR: ${componentName}.${operation} took ${duration.toFixed(2)}ms`);
      } else if (duration > this.WARNING_THRESHOLD) {
        console.warn(`⚠️ PERFORMANCE WARNING: ${componentName}.${operation} took ${duration.toFixed(2)}ms`);
      }
    };
  }

  private logMetric(componentName: string, operation: string, duration: number) {
    this.metrics.push({
      componentName,
      operation,
      duration,
      timestamp: Date.now()
    });

    // Keep only last 100 metrics to prevent memory leaks
    if (this.metrics.length > 100) {
      this.metrics = this.metrics.slice(-100);
    }
  }

  getMetrics(): PerformanceMetric[] {
    return [...this.metrics];
  }

  getSlowestOperations(limit = 10): PerformanceMetric[] {
    return [...this.metrics]
      .sort((a, b) => b.duration - a.duration)
      .slice(0, limit);
  }

  clearMetrics(): void {
    this.metrics = [];
  }
}

export const performanceMonitor = new PerformanceMonitor();

// React hook for easy component performance monitoring
export const usePerformanceMonitor = (componentName: string) => {
  return {
    measureOperation: (operation: string) => 
      performanceMonitor.startTimer(componentName, operation)
  };
};
