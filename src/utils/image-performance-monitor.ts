/**
 * Image performance monitoring utility to track loading times and sizes
 */

interface ImageMetrics {
  url: string;
  loadTime: number;
  fileSize?: number;
  compressionRatio?: number;
  context: string;
  timestamp: number;
}

class ImagePerformanceMonitor {
  private static instance: ImagePerformanceMonitor;
  private metrics: ImageMetrics[] = [];
  private performanceObserver?: PerformanceObserver;

  constructor() {
    this.initializePerformanceObserver();
  }

  static getInstance(): ImagePerformanceMonitor {
    if (!ImagePerformanceMonitor.instance) {
      ImagePerformanceMonitor.instance = new ImagePerformanceMonitor();
    }
    return ImagePerformanceMonitor.instance;
  }

  private initializePerformanceObserver() {
    if (typeof window === 'undefined' || !window.PerformanceObserver) return;

    try {
      this.performanceObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.entryType === 'resource' && entry.name.match(/\.(jpg|jpeg|png|gif|webp|svg)$/i)) {
            this.recordImageLoad(entry.name, entry.duration);
          }
        });
      });

      this.performanceObserver.observe({ entryTypes: ['resource'] });
    } catch (error) {
      console.warn('Failed to initialize image performance observer:', error);
    }
  }

  recordImageLoad(url: string, loadTime: number, context: string = 'unknown') {
    const metric: ImageMetrics = {
      url,
      loadTime,
      context,
      timestamp: Date.now()
    };

    this.metrics.push(metric);

    // Log slow loading images
    if (loadTime > 2000) {
      console.warn(`Slow image load detected: ${url} took ${loadTime.toFixed(0)}ms to load`);
    }

    // Keep only recent metrics (last 100)
    if (this.metrics.length > 100) {
      this.metrics = this.metrics.slice(-100);
    }
  }

  recordOptimization(url: string, originalSize: number, optimizedSize: number, context: string) {
    const compressionRatio = ((originalSize - optimizedSize) / originalSize) * 100;
    
    const metric: ImageMetrics = {
      url,
      loadTime: 0, // Will be filled by performance observer
      fileSize: optimizedSize,
      compressionRatio,
      context,
      timestamp: Date.now()
    };

    this.metrics.push(metric);

    // Report significant optimizations
    if (compressionRatio > 50) {
      console.log(`Significant optimization: ${url} reduced by ${compressionRatio.toFixed(1)}%`);
    }
  }

  getSlowImages(threshold: number = 2000): ImageMetrics[] {
    return this.metrics.filter(metric => metric.loadTime > threshold);
  }

  getLargeImages(sizeThreshold: number = 500000): ImageMetrics[] {
    return this.metrics.filter(metric => 
      metric.fileSize && metric.fileSize > sizeThreshold
    );
  }

  getOptimizationReport(): {
    totalImages: number;
    optimizedImages: number;
    averageCompressionRatio: number;
    slowImages: number;
  } {
    const optimizedImages = this.metrics.filter(m => m.compressionRatio && m.compressionRatio > 0);
    const slowImages = this.getSlowImages();
    
    const averageCompressionRatio = optimizedImages.length > 0
      ? optimizedImages.reduce((sum, m) => sum + (m.compressionRatio || 0), 0) / optimizedImages.length
      : 0;

    return {
      totalImages: this.metrics.length,
      optimizedImages: optimizedImages.length,
      averageCompressionRatio,
      slowImages: slowImages.length
    };
  }

  // Check if images are causing Core Web Vitals issues
  checkWebVitalsImpact(): {
    hasLCPIssues: boolean;
    hasCLSIssues: boolean;
    recommendations: string[];
  } {
    const slowImages = this.getSlowImages(2500); // 2.5s threshold for LCP
    const largeImages = this.getLargeImages(200000); // 200KB threshold
    
    const recommendations: string[] = [];
    
    if (slowImages.length > 0) {
      recommendations.push(`${slowImages.length} images are loading slowly and may impact LCP`);
    }
    
    if (largeImages.length > 0) {
      recommendations.push(`${largeImages.length} images are over 200KB and should be optimized`);
    }

    return {
      hasLCPIssues: slowImages.length > 0,
      hasCLSIssues: false, // Would need layout shift detection
      recommendations
    };
  }

  cleanup() {
    if (this.performanceObserver) {
      this.performanceObserver.disconnect();
    }
  }
}

export default ImagePerformanceMonitor;

// Export convenience functions
export const recordImageOptimization = (url: string, originalSize: number, optimizedSize: number, context: string) => {
  ImagePerformanceMonitor.getInstance().recordOptimization(url, originalSize, optimizedSize, context);
};

export const getImagePerformanceReport = () => {
  return ImagePerformanceMonitor.getInstance().getOptimizationReport();
};

export const checkImageWebVitalsImpact = () => {
  return ImagePerformanceMonitor.getInstance().checkWebVitalsImpact();
};
