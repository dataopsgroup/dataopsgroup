/**
 * Mobile-specific logo optimization utilities
 */

interface MobileLogoOptimization {
  shouldOptimize: (src: string) => boolean;
  getOptimizedSrc: (src: string, screenWidth: number) => string;
  getMobileSizes: () => string;
}

export const mobileLogoOptimizer: MobileLogoOptimization = {
  /**
   * Check if this logo should be optimized for mobile
   */
  shouldOptimize: (src: string): boolean => {
    // Specifically target the DataOps Group logo
    return src.includes('9b9f1c84-13af-4551-96d5-b7a930f008cf.png');
  },

  /**
   * Get mobile-optimized logo source based on screen width
   */
  getOptimizedSrc: (src: string, screenWidth: number): string => {
    if (!mobileLogoOptimizer.shouldOptimize(src)) {
      return src;
    }

    // Mobile optimization - target <5KB
    if (screenWidth <= 480) {
      return `${src}?w=120&h=48&q=80&fm=webp`; // Very small for mobile
    }
    
    // Tablet optimization
    if (screenWidth <= 768) {
      return `${src}?w=160&h=64&q=85&fm=webp`; // Medium for tablet
    }
    
    // Desktop - keep original quality
    return `${src}?w=200&h=80&q=95&fm=webp`;
  },

  /**
   * Get optimized sizes attribute for mobile logo
   */
  getMobileSizes: (): string => {
    return "(max-width: 480px) 120px, (max-width: 768px) 160px, 200px";
  }
};

/**
 * Generate mobile-optimized srcset for logos
 */
export const generateMobileLogoSrcSet = (src: string): string => {
  if (!mobileLogoOptimizer.shouldOptimize(src)) {
    return '';
  }

  return [
    `${src}?w=120&h=48&q=80&fm=webp 480w`,
    `${src}?w=160&h=64&q=85&fm=webp 768w`, 
    `${src}?w=200&h=80&q=95&fm=webp 1024w`
  ].join(', ');
};
