
/**
 * Image preloading and performance utilities
 */

import { getOptimalFormat } from './format-detection';

/**
 * Enhanced LCP reporting with detailed metrics
 */
export const reportLCPMetric = (src: string): void => {
  if (!window.performance || !('mark' in window.performance)) return;
  
  try {
    const markName = `lcp-image-loaded-${Date.now()}`;
    window.performance.mark(markName);
    
    if ('getEntriesByName' in window.performance && 'measure' in window.performance) {
      const measureName = `lcp-image-duration-${Date.now()}`;
      window.performance.measure(measureName, 'navigationStart', markName);
      
      const lcpMetric = window.performance.getEntriesByName(measureName)[0];
      
      if (lcpMetric && window.gtag) {
        window.gtag('event', 'web_vitals', {
          metric_name: 'LCP',
          metric_value: Math.round(lcpMetric.duration),
          metric_delta: 0,
          metric_id: `img-${src.split('/').pop()}`,
          image_src: src.substring(0, 100) // Truncate for analytics
        });
      }
    }
  } catch (err) {
    console.error('Error reporting LCP:', err);
  }
};

/**
 * Enhanced critical image preloading with format optimization
 */
export const preloadCriticalImage = async (src: string, formats: string[] = ['avif', 'webp']) => {
  if (typeof document === 'undefined') return;
  
  try {
    // Get optimal format based on browser support
    const optimalFormat = await getOptimalFormat();
    
    // Preload in optimal format first
    if (formats.includes(optimalFormat) && optimalFormat !== 'jpg') {
      const modernSrc = src.replace(/\.(jpg|jpeg|png)$/i, `.${optimalFormat}`);
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = modernSrc;
      link.type = `image/${optimalFormat}`;
      link.setAttribute('fetchpriority', 'high');
      document.head.appendChild(link);
    }
    
    // Also preload original format as fallback
    const fallbackLink = document.createElement('link');
    fallbackLink.rel = 'preload';
    fallbackLink.as = 'image';
    fallbackLink.href = src;
    fallbackLink.setAttribute('fetchpriority', optimalFormat === 'jpg' ? 'high' : 'low');
    document.head.appendChild(fallbackLink);
    
  } catch (error) {
    console.warn('Failed to preload critical image:', error);
    
    // Fallback to basic preloading
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    link.setAttribute('fetchpriority', 'high');
    document.head.appendChild(link);
  }
};
