/**
 * Device-specific performance monitoring for LCP optimization
 * Tracks mobile vs desktop performance separately
 */

interface DevicePerformanceMetric {
  deviceType: 'mobile' | 'tablet' | 'desktop';
  metricName: 'LCP' | 'FCP' | 'CLS' | 'FID' | 'INP';
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
  timestamp: number;
  connectionType?: string;
  screenWidth: number;
}

class DevicePerformanceMonitor {
  private metrics: DevicePerformanceMetric[] = [];
  private readonly LCP_THRESHOLDS = {
    mobile: { good: 2500, poor: 4000 },
    tablet: { good: 2500, poor: 4000 },
    desktop: { good: 2000, poor: 3500 }
  };

  private getDeviceType(): 'mobile' | 'tablet' | 'desktop' {
    if (typeof window === 'undefined') return 'desktop';
    
    const width = window.innerWidth;
    if (width < 768) return 'mobile';
    if (width < 1024) return 'tablet';
    return 'desktop';
  }

  private getRating(metricName: string, value: number, deviceType: 'mobile' | 'tablet' | 'desktop'): 'good' | 'needs-improvement' | 'poor' {
    if (metricName === 'LCP') {
      const thresholds = this.LCP_THRESHOLDS[deviceType];
      if (value <= thresholds.good) return 'good';
      if (value <= thresholds.poor) return 'needs-improvement';
      return 'poor';
    }
    
    // Generic thresholds for other metrics
    if (metricName === 'FCP') {
      if (value <= 1800) return 'good';
      if (value <= 3000) return 'needs-improvement';
      return 'poor';
    }
    
    if (metricName === 'CLS') {
      if (value <= 0.1) return 'good';
      if (value <= 0.25) return 'needs-improvement';
      return 'poor';
    }
    
    return 'good';
  }

  logMetric(metricName: 'LCP' | 'FCP' | 'CLS' | 'FID' | 'INP', value: number): void {
    if (typeof window === 'undefined') return;

    const deviceType = this.getDeviceType();
    const rating = this.getRating(metricName, value, deviceType);
    
    const metric: DevicePerformanceMetric = {
      deviceType,
      metricName,
      value,
      rating,
      timestamp: Date.now(),
      connectionType: this.getConnectionType(),
      screenWidth: window.innerWidth
    };

    this.metrics.push(metric);
    
    // Log performance alerts based on device type
    if (metricName === 'LCP') {
      const threshold = this.LCP_THRESHOLDS[deviceType];
      if (rating === 'poor') {
        console.error(`🚨 ${deviceType.toUpperCase()} LCP POOR: ${value}ms (target: <${threshold.good}ms)`);
      } else if (rating === 'needs-improvement') {
        console.warn(`⚠️ ${deviceType.toUpperCase()} LCP NEEDS IMPROVEMENT: ${value}ms (target: <${threshold.good}ms)`);
      } else {
        console.log(`✅ ${deviceType.toUpperCase()} LCP GOOD: ${value}ms`);
      }
    }

    // Keep only last 50 metrics per device type
    const deviceMetrics = this.metrics.filter(m => m.deviceType === deviceType);
    if (deviceMetrics.length > 50) {
      this.metrics = this.metrics.filter(m => 
        m.deviceType !== deviceType || 
        deviceMetrics.slice(-50).includes(m)
      );
    }
  }

  private getConnectionType(): string {
    if (typeof window === 'undefined' || !('connection' in navigator)) {
      return 'unknown';
    }
    
    const connection = (navigator as any).connection;
    return connection.effectiveType || 'unknown';
  }

  getMetricsByDevice(deviceType: 'mobile' | 'tablet' | 'desktop'): DevicePerformanceMetric[] {
    return this.metrics.filter(m => m.deviceType === deviceType);
  }

  getLCPStats(): { mobile: number; tablet: number; desktop: number } {
    const latestLCP = {
      mobile: this.getLatestMetric('LCP', 'mobile'),
      tablet: this.getLatestMetric('LCP', 'tablet'),
      desktop: this.getLatestMetric('LCP', 'desktop')
    };

    return {
      mobile: latestLCP.mobile?.value || 0,
      tablet: latestLCP.tablet?.value || 0,
      desktop: latestLCP.desktop?.value || 0
    };
  }

  private getLatestMetric(metricName: string, deviceType: 'mobile' | 'tablet' | 'desktop'): DevicePerformanceMetric | undefined {
    return this.metrics
      .filter(m => m.metricName === metricName && m.deviceType === deviceType)
      .sort((a, b) => b.timestamp - a.timestamp)[0];
  }

  isLCPOptimized(deviceType: 'mobile' | 'tablet' | 'desktop'): boolean {
    const latestLCP = this.getLatestMetric('LCP', deviceType);
    if (!latestLCP) return false;
    
    const threshold = this.LCP_THRESHOLDS[deviceType];
    return latestLCP.value <= threshold.good;
  }

  generateReport(): string {
    const stats = this.getLCPStats();
    return `
📊 Device Performance Report:
- Mobile LCP: ${stats.mobile}ms (target: <2500ms)
- Tablet LCP: ${stats.tablet}ms (target: <2500ms) 
- Desktop LCP: ${stats.desktop}ms (target: <2000ms)

🎯 Optimization Status:
- Mobile: ${this.isLCPOptimized('mobile') ? '✅ Optimized' : '❌ Needs Work'}
- Tablet: ${this.isLCPOptimized('tablet') ? '✅ Optimized' : '❌ Needs Work'}
- Desktop: ${this.isLCPOptimized('desktop') ? '✅ Optimized' : '❌ Needs Work'}
    `.trim();
  }

  clearMetrics(): void {
    this.metrics = [];
  }
}

export const devicePerformanceMonitor = new DevicePerformanceMonitor();

// Enhanced device detection for performance monitoring
export const detectDeviceCapabilities = () => {
  if (typeof window === 'undefined') return null;

  return {
    deviceType: window.innerWidth < 768 ? 'mobile' : window.innerWidth < 1024 ? 'tablet' : 'desktop',
    screenWidth: window.innerWidth,
    screenHeight: window.innerHeight,
    connectionType: 'connection' in navigator ? (navigator as any).connection?.effectiveType : 'unknown',
    supportsWebP: (() => {
      try {
        const canvas = document.createElement('canvas');
        return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
      } catch {
        return false;
      }
    })(),
    touchSupport: 'ontouchstart' in window,
    userAgent: navigator.userAgent
  };
};
