
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Activity, Zap, Eye, Clock } from 'lucide-react';

interface PerformanceMetric {
  name: string;
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
  threshold: { good: number; poor: number };
}

/**
 * Real-time performance monitoring component for development
 * Shows Core Web Vitals and other performance metrics
 * Only rendered in development mode
 */
const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetric[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show in development mode
    if (process.env.NODE_ENV !== 'development') return;

    const collectMetrics = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const paint = performance.getEntriesByType('paint');
      
      const newMetrics: PerformanceMetric[] = [];

      // Time to First Byte
      if (navigation) {
        const ttfb = navigation.responseStart - navigation.requestStart;
        newMetrics.push({
          name: 'TTFB',
          value: ttfb,
          rating: ttfb <= 800 ? 'good' : ttfb <= 1800 ? 'needs-improvement' : 'poor',
          threshold: { good: 800, poor: 1800 }
        });

        // Total Page Load Time
        const loadTime = navigation.loadEventEnd - navigation.fetchStart;
        newMetrics.push({
          name: 'Load Time',
          value: loadTime,
          rating: loadTime <= 2500 ? 'good' : loadTime <= 4000 ? 'needs-improvement' : 'poor',
          threshold: { good: 2500, poor: 4000 }
        });
      }

      // First Contentful Paint
      const fcp = paint.find(entry => entry.name === 'first-contentful-paint');
      if (fcp) {
        newMetrics.push({
          name: 'FCP',
          value: fcp.startTime,
          rating: fcp.startTime <= 1800 ? 'good' : fcp.startTime <= 3000 ? 'needs-improvement' : 'poor',
          threshold: { good: 1800, poor: 3000 }
        });
      }

      // Bundle Size (approximation)
      const resources = performance.getEntriesByType('resource') as PerformanceResourceTiming[];
      const jsSize = resources
        .filter(r => r.name.includes('.js'))
        .reduce((total, r) => total + (r.encodedBodySize || 0), 0);
      
      newMetrics.push({
        name: 'JS Bundle',
        value: jsSize,
        rating: jsSize <= 170000 ? 'good' : jsSize <= 350000 ? 'needs-improvement' : 'poor',
        threshold: { good: 170000, poor: 350000 }
      });

      setMetrics(newMetrics);
    };

    // Collect metrics after page load
    if (document.readyState === 'complete') {
      setTimeout(collectMetrics, 1000);
    } else {
      window.addEventListener('load', () => {
        setTimeout(collectMetrics, 1000);
      });
    }

    // Listen for performance updates
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver(() => {
        collectMetrics();
      });
      observer.observe({ entryTypes: ['paint', 'largest-contentful-paint'] });
    }
  }, []);

  // Keyboard shortcut to toggle visibility
  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'P') {
        setIsVisible(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeydown);
    return () => window.removeEventListener('keydown', handleKeydown);
  }, []);

  if (process.env.NODE_ENV !== 'development' || !isVisible) {
    return null;
  }

  const getRatingColor = (rating: string) => {
    switch (rating) {
      case 'good': return 'bg-green-500';
      case 'needs-improvement': return 'bg-yellow-500';
      case 'poor': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const formatValue = (metric: PerformanceMetric) => {
    if (metric.name === 'JS Bundle') {
      return `${Math.round(metric.value / 1024)}KB`;
    }
    return `${Math.round(metric.value)}ms`;
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 max-w-sm">
      <Card className="bg-white/95 backdrop-blur shadow-lg border">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm flex items-center gap-2">
            <Activity className="h-4 w-4" />
            Performance Monitor
            <Badge variant="outline" className="text-xs">DEV</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {metrics.map((metric) => (
            <div key={metric.name} className="flex items-center justify-between text-xs">
              <span className="flex items-center gap-2">
                {metric.name === 'TTFB' && <Clock className="h-3 w-3" />}
                {metric.name === 'FCP' && <Eye className="h-3 w-3" />}
                {metric.name === 'Load Time' && <Zap className="h-3 w-3" />}
                {metric.name === 'JS Bundle' && <Activity className="h-3 w-3" />}
                {metric.name}
              </span>
              <div className="flex items-center gap-2">
                <span className="font-mono">{formatValue(metric)}</span>
                <div className={`w-2 h-2 rounded-full ${getRatingColor(metric.rating)}`} />
              </div>
            </div>
          ))}
          <div className="pt-2 border-t text-xs text-gray-500">
            Press Ctrl+Shift+P to toggle
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PerformanceMonitor;
