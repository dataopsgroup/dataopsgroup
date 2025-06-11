
/**
 * Image optimization utilities for performance
 */

export const calculateOptimalSizes = (
  componentType: 'hero' | 'card' | 'thumbnail' | 'full-width' | 'sidebar' = 'full-width'
): string => {
  const sizeMap = {
    hero: '(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px',
    card: '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 400px',
    thumbnail: '(max-width: 768px) 30vw, (max-width: 1024px) 20vw, 150px',
    sidebar: '(max-width: 1024px) 100vw, 300px',
    'full-width': '100vw'
  };
  
  return sizeMap[componentType];
};

export const reportLCPMetric = (src: string): void => {
  if (!window.performance || !('mark' in window.performance)) return;
  
  try {
    const markName = `lcp-image-${Date.now()}`;
    window.performance.mark(markName);
    
    if (window.gtag) {
      window.gtag('event', 'lcp_candidate', {
        event_category: 'Performance',
        event_label: src.substring(0, 50),
        value: 1
      });
    }
  } catch (error) {
    console.debug('LCP reporting failed:', error);
  }
};

export const preloadCriticalImage = (src: string, priority: 'high' | 'low' = 'high'): void => {
  if (typeof document === 'undefined') return;
  
  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = 'image';
  link.href = src;
  link.setAttribute('fetchpriority', priority);
  document.head.appendChild(link);
};
