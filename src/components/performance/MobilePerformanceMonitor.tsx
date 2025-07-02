
import React, { useEffect } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

const MobilePerformanceMonitor: React.FC = () => {
  const { isMobile, deviceType, logPerformanceMetric } = useIsMobile();

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Device-aware Web Vitals tracking
    const trackLCP = () => {
      if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            if (entry.entryType === 'largest-contentful-paint') {
              const lcpValue = entry.startTime;
              logPerformanceMetric('LCP', lcpValue);
              
              // Device-specific LCP alerts
              if (deviceType === 'mobile') {
                if (lcpValue > 2500) {
                  console.error(`🚨 MOBILE LCP CRITICAL: ${lcpValue.toFixed(0)}ms (target: <2500ms)`);
                } else if (lcpValue > 2000) {
                  console.warn(`⚠️ MOBILE LCP WARNING: ${lcpValue.toFixed(0)}ms (target: <2000ms)`);
                } else {
                  console.log(`✅ MOBILE LCP GOOD: ${lcpValue.toFixed(0)}ms`);
                }
              } else if (deviceType === 'desktop') {
                if (lcpValue > 2000) {
                  console.error(`🚨 DESKTOP LCP CRITICAL: ${lcpValue.toFixed(0)}ms (target: <2000ms)`);
                } else if (lcpValue > 1500) {
                  console.warn(`⚠️ DESKTOP LCP WARNING: ${lcpValue.toFixed(0)}ms (target: <1500ms)`);
                } else {
                  console.log(`✅ DESKTOP LCP GOOD: ${lcpValue.toFixed(0)}ms`);
                }
              } else {
                // Tablet
                if (lcpValue > 2500) {
                  console.error(`🚨 TABLET LCP CRITICAL: ${lcpValue.toFixed(0)}ms (target: <2500ms)`);
                } else {
                  console.log(`✅ TABLET LCP GOOD: ${lcpValue.toFixed(0)}ms`);
                }
              }
            }
          });
        });

        observer.observe({ entryTypes: ['largest-contentful-paint'] });
        
        return () => observer.disconnect();
      }
    };

    // Track First Contentful Paint for all devices
    const trackFCP = () => {
      if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            if (entry.entryType === 'paint' && entry.name === 'first-contentful-paint') {
              const fcpValue = entry.startTime;
              logPerformanceMetric('FCP', fcpValue);
              
              const threshold = deviceType === 'mobile' ? 1800 : 1500;
              if (fcpValue > threshold) {
                console.warn(`⚠️ ${deviceType.toUpperCase()} FCP SLOW: ${fcpValue.toFixed(0)}ms`);
              }
            }
          });
        });

        observer.observe({ entryTypes: ['paint'] });
        
        return () => observer.disconnect();
      }
    };

    const cleanupLCP = trackLCP();
    const cleanupFCP = trackFCP();

    return () => {
      cleanupLCP?.();
      cleanupFCP?.();
    };
  }, [deviceType, logPerformanceMetric]);

  return null; // This is a monitoring component with no UI
};

export default MobilePerformanceMonitor;
