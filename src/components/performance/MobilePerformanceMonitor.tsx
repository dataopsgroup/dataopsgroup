
import React, { useEffect } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

const MobilePerformanceMonitor: React.FC = () => {
  const { isMobile, deviceType, logPerformanceMetric } = useIsMobile();

  useEffect(() => {
    if (typeof window === 'undefined' || !isMobile) return;

    // Mobile-specific Web Vitals tracking
    const trackMobileLCP = () => {
      if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            if (entry.entryType === 'largest-contentful-paint') {
              const lcpValue = entry.startTime;
              logPerformanceMetric('LCP', lcpValue);
              
              // Mobile LCP alerts
              if (lcpValue > 2500) {
                console.error(`🚨 MOBILE LCP CRITICAL: ${lcpValue.toFixed(0)}ms (target: <2500ms)`);
              } else if (lcpValue > 2000) {
                console.warn(`⚠️ MOBILE LCP WARNING: ${lcpValue.toFixed(0)}ms (target: <2000ms)`);
              } else {
                console.log(`✅ MOBILE LCP GOOD: ${lcpValue.toFixed(0)}ms`);
              }
            }
          });
        });

        observer.observe({ entryTypes: ['largest-contentful-paint'] });
        
        return () => observer.disconnect();
      }
    };

    // Track First Contentful Paint for mobile
    const trackMobileFCP = () => {
      if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            if (entry.entryType === 'paint' && entry.name === 'first-contentful-paint') {
              const fcpValue = entry.startTime;
              logPerformanceMetric('FCP', fcpValue);
              
              if (fcpValue > 1800) {
                console.warn(`⚠️ MOBILE FCP SLOW: ${fcpValue.toFixed(0)}ms`);
              }
            }
          });
        });

        observer.observe({ entryTypes: ['paint'] });
        
        return () => observer.disconnect();
      }
    };

    const cleanupLCP = trackMobileLCP();
    const cleanupFCP = trackMobileFCP();

    return () => {
      cleanupLCP?.();
      cleanupFCP?.();
    };
  }, [isMobile, deviceType, logPerformanceMetric]);

  return null; // This is a monitoring component with no UI
};

export default MobilePerformanceMonitor;
