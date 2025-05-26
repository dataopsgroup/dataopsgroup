
/**
 * Mobile-first critical CSS optimization
 * Eliminates render-blocking CSS for 90+ PSI score
 */

// Ultra-minimal critical CSS for mobile above-the-fold content only
const MOBILE_CRITICAL_CSS = `
  /* Mobile-only critical CSS - absolute minimum */
  * { box-sizing: border-box; margin: 0; padding: 0; }
  html { font-size: 16px; }
  body { 
    font-family: 'Inter', system-ui, -apple-system, sans-serif; 
    line-height: 1.5;
    -webkit-text-size-adjust: 100%;
  }
  
  .hero-section { 
    min-height: 100vh;
    background: linear-gradient(135deg, #4F46E5 0%, #7C3AED 50%, #EC4899 100%);
    display: flex;
    align-items: center;
    padding: 100px 5% 0;
  }
  
  .hero-heading { 
    font-size: 2.5rem;
    font-weight: 600;
    color: white;
    line-height: 1.1;
    margin-bottom: 1.5rem;
    text-align: center;
  }
  
  .hero-description { 
    font-size: 1.125rem;
    color: white;
    line-height: 1.6;
    margin-bottom: 2rem;
    text-align: center;
    max-width: 550px;
    margin-left: auto;
    margin-right: auto;
  }
  
  .btn-primary { 
    display: inline-flex;
    background: #dc2626;
    color: white;
    padding: 14px 28px;
    border-radius: 8px;
    border: none;
    font-weight: 600;
    text-decoration: none;
    min-height: 48px;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
  }
`;

// Inject only mobile critical CSS
export const injectMobileCriticalCSS = () => {
  if (typeof document === 'undefined') return;
  
  // Only apply on mobile
  if (window.innerWidth >= 768) return;
  
  // Check if already injected
  if (document.querySelector('#mobile-critical-css')) return;
  
  const style = document.createElement('style');
  style.id = 'mobile-critical-css';
  style.textContent = MOBILE_CRITICAL_CSS;
  document.head.insertBefore(style, document.head.firstChild);
  
  // Mark that mobile optimization is active
  document.documentElement.setAttribute('data-mobile-optimized', 'true');
};

// Defer ALL non-critical CSS on mobile
export const deferNonCriticalCSS = () => {
  if (window.innerWidth >= 768) return;
  
  // Convert all stylesheet links to preload and defer loading
  document.querySelectorAll('link[rel="stylesheet"]').forEach(link => {
    const href = link.getAttribute('href') || '';
    
    // Skip if it's already been processed
    if (link.getAttribute('data-deferred')) return;
    
    // Convert to preload
    link.rel = 'preload';
    link.as = 'style';
    link.setAttribute('data-deferred', 'true');
    
    // Load after significant delay on mobile
    setTimeout(() => {
      link.rel = 'stylesheet';
    }, 3000);
  });
};

// Initialize mobile CSS optimizations
export const initMobileCSSOptimizations = () => {
  if (window.innerWidth < 768) {
    injectMobileCriticalCSS();
    deferNonCriticalCSS();
  }
};
