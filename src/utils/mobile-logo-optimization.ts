
/**
 * Mobile-specific logo optimization utilities with WebP conversion
 */

interface MobileLogoOptimization {
  shouldOptimize: (src: string) => boolean;
  getOptimizedSrc: (src: string, screenWidth: number) => string;
  getMobileSizes: () => string;
  getWebPSrc: (src: string) => string;
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
   * Convert PNG logo to WebP format for better compression
   */
  getWebPSrc: (src: string): string => {
    if (!mobileLogoOptimizer.shouldOptimize(src)) {
      return src;
    }
    
    // Convert the PNG to WebP by changing the file extension
    // This assumes the WebP version exists or will be served by the server
    return src.replace('.png', '.webp');
  },

  /**
   * Get mobile-optimized logo source with WebP conversion and sizing
   */
  getOptimizedSrc: (src: string, screenWidth: number): string => {
    if (!mobileLogoOptimizer.shouldOptimize(src)) {
      return src;
    }

    // First convert to WebP format
    const webpSrc = mobileLogoOptimizer.getWebPSrc(src);
    
    // Then add mobile-specific optimization parameters
    if (screenWidth <= 480) {
      return `${webpSrc}?w=120&h=48&q=75&fm=webp`; // Very small for mobile
    }
    
    if (screenWidth <= 768) {
      return `${webpSrc}?w=160&h=64&q=80&fm=webp`; // Medium for tablet
    }
    
    // Desktop - use WebP with high quality
    return `${webpSrc}?w=200&h=80&q=90&fm=webp`;
  },

  /**
   * Get optimized sizes attribute for mobile logo
   */
  getMobileSizes: (): string => {
    return "(max-width: 480px) 120px, (max-width: 768px) 160px, 200px";
  }
};

/**
 * Generate mobile-optimized srcset with WebP format
 */
export const generateMobileLogoSrcSet = (src: string): string => {
  if (!mobileLogoOptimizer.shouldOptimize(src)) {
    return '';
  }

  const webpSrc = mobileLogoOptimizer.getWebPSrc(src);
  
  return [
    `${webpSrc}?w=120&h=48&q=75&fm=webp 480w`,
    `${webpSrc}?w=160&h=64&q=80&fm=webp 768w`, 
    `${webpSrc}?w=200&h=80&q=90&fm=webp 1024w`
  ].join(', ');
};

/**
 * Check if WebP is supported by the browser
 */
export const supportsWebP = (): Promise<boolean> => {
  return new Promise((resolve) => {
    const webP = new Image();
    webP.onload = webP.onerror = () => {
      resolve(webP.height === 2);
    };
    webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
  });
};
