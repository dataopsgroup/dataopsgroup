
/**
 * Performance monitoring helper functions
 */

export const getRating = (metricName: string, value: number): 'good' | 'needs-improvement' | 'poor' => {
  const thresholds = {
    LCP: [2500, 4000],
    FID: [100, 300],
    CLS: [0.1, 0.25],
    FCP: [1800, 3000],
    TTFB: [800, 1800],
    INP: [200, 500]
  };
  
  const [good, needsImprovement] = thresholds[metricName as keyof typeof thresholds] || [0, 0];
  
  if (value <= good) return 'good';
  if (value <= needsImprovement) return 'needs-improvement';
  return 'poor';
};

export const generateUniqueID = (): string => {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
};

export const reportWebVital = (name: string, value: number, rating: string): void => {
  try {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'web_vitals', {
        metric_name: name,
        metric_value: Math.round(value),
        metric_rating: rating,
        metric_delta: 0
      });
    }
  } catch (error) {
    console.debug('Web vital reporting failed:', error);
  }
};
