
/**
 * Font preloading utilities
 */
import { isMobile } from './device-detection';
import { CRITICAL_WEIGHTS } from './constants';

// Enhanced font preloading with device-specific strategy
export const preloadCriticalFonts = (): void => {
  if (typeof document === 'undefined') return;
  
  const mobile = isMobile();
  
  if (mobile) {
    // Mobile: Load Inter fonts
    CRITICAL_WEIGHTS.forEach(weight => {
      const linkWoff2 = document.createElement('link');
      linkWoff2.rel = 'preload';
      linkWoff2.as = 'font';
      linkWoff2.type = 'font/woff2';
      linkWoff2.href = `/fonts/inter-subset/inter-latin-${weight}-normal.woff2`;
      linkWoff2.crossOrigin = 'anonymous';
      linkWoff2.setAttribute('fetchpriority', 'high');
      document.head.appendChild(linkWoff2);
    });
  } else {
    // Desktop: Load Roboto and Rubik fonts
    CRITICAL_WEIGHTS.forEach(weight => {
      // Preload Roboto
      const robotoLink = document.createElement('link');
      robotoLink.rel = 'preload';
      robotoLink.as = 'font';
      robotoLink.type = 'font/woff2';
      robotoLink.href = `/fonts/roboto-subset/roboto-latin-${weight}-normal.woff2`;
      robotoLink.crossOrigin = 'anonymous';
      robotoLink.setAttribute('fetchpriority', 'high');
      document.head.appendChild(robotoLink);
      
      // Preload Rubik
      const rubikLink = document.createElement('link');
      rubikLink.rel = 'preload';
      rubikLink.as = 'font';
      rubikLink.type = 'font/woff2';
      rubikLink.href = `/fonts/rubik-subset/rubik-latin-${weight}-normal.woff2`;
      rubikLink.crossOrigin = 'anonymous';
      rubikLink.setAttribute('fetchpriority', 'high');
      document.head.appendChild(rubikLink);
    });
  }
};
