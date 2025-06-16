
import { performanceMonitor } from '@/lib/performance-monitor';

/**
 * Blog-specific performance monitoring service
 */
export const BlogPerformanceMonitor = {
  /**
   * Initialize blog route performance monitoring
   */
  init() {
    try {
      // Monitor blog route navigation timing
      if (typeof window !== 'undefined' && window.performance) {
        const observer = new PerformanceObserver((list) => {
          list.getEntries().forEach((entry) => {
            if (entry.name.includes('/insights/')) {
              console.log(`Blog route ${entry.name} took ${entry.duration}ms`);
              
              if (entry.duration > 3000) {
                console.warn(`🚨 SLOW BLOG ROUTE: ${entry.name} took ${entry.duration}ms`);
              }
            }
          });
        });
        
        observer.observe({ entryTypes: ['navigation', 'measure'] });
      }
    } catch (error) {
      console.warn('Failed to initialize blog performance monitoring:', error);
    }
  },

  /**
   * Track blog post load performance
   */
  trackBlogPostLoad(postId: string, loadTime: number) {
    try {
      if (loadTime > 1000) {
        console.warn(`Blog post ${postId} took ${loadTime}ms to load`);
      }
      
      // Track in analytics if available
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'blog_performance', {
          'event_category': 'Performance',
          'event_label': postId,
          'value': Math.round(loadTime)
        });
      }
    } catch (error) {
      console.warn('Failed to track blog post performance:', error);
    }
  },

  /**
   * Get performance metrics for blog routes
   */
  getBlogMetrics() {
    return performanceMonitor.getMetrics().filter(metric => 
      metric.componentName.includes('Blog') || 
      metric.componentName.includes('useBlogPost')
    );
  }
};

// Initialize monitoring when the service is imported
BlogPerformanceMonitor.init();
