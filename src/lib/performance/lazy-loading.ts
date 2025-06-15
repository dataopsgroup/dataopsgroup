
/**
 * Enhanced lazy loading utilities with universal device support
 */

let lazyImageObserver: IntersectionObserver | null = null;
let scrollOptimizer: (() => void) | null = null;

export const setupLazyLoadingObserver = (): void => {
  if (typeof window === 'undefined' || lazyImageObserver) return;
  
  // Universal lazy loading observer
  lazyImageObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          
          // Load high-res version
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
          }
          
          // Apply universal loading optimizations
          if (!img.loading) img.loading = 'lazy';
          if (!img.decoding) img.decoding = 'async';
          
          lazyImageObserver?.unobserve(img);
        }
      });
    },
    {
      rootMargin: '200px', // Universal margin for all devices
      threshold: 0.1
    }
  );
  
  // Observe all images with data-src
  document.querySelectorAll('img[data-src]').forEach(img => {
    lazyImageObserver?.observe(img);
  });
};

export const setupScrollOptimizations = (): void => {
  if (typeof window === 'undefined' || scrollOptimizer) return;
  
  let ticking = false;
  
  const optimizeScroll = () => {
    // Universal scroll optimizations
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Optimize image loading based on scroll position
    document.querySelectorAll('img[data-src]').forEach(img => {
      const rect = img.getBoundingClientRect();
      if (rect.top < window.innerHeight + 500) { // Universal threshold
        if (img.getAttribute('data-src')) {
          (img as HTMLImageElement).src = img.getAttribute('data-src')!;
          img.removeAttribute('data-src');
        }
      }
    });
    
    ticking = false;
  };
  
  scrollOptimizer = () => {
    if (!ticking) {
      requestAnimationFrame(optimizeScroll);
      ticking = true;
    }
  };
  
  window.addEventListener('scroll', scrollOptimizer, { passive: true });
};

export const cleanupLazyLoading = (): void => {
  if (lazyImageObserver) {
    lazyImageObserver.disconnect();
    lazyImageObserver = null;
  }
  
  if (scrollOptimizer) {
    window.removeEventListener('scroll', scrollOptimizer);
    scrollOptimizer = null;
  }
};
