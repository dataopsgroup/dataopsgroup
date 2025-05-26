
/**
 * Enhanced critical CSS extraction for optimal Core Web Vitals
 * Mobile-first approach with progressive enhancement
 */

// Critical CSS for immediate above-the-fold rendering
const CRITICAL_CSS_MOBILE = `
  /* Critical mobile-first styles */
  * { box-sizing: border-box; }
  html { font-size: 16px; line-height: 1.5; }
  body { 
    margin: 0; 
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif; 
    font-display: swap;
    background: #ffffff;
  }
  
  /* Critical layout prevention of CLS */
  .hero-section { 
    min-height: 100vh;
    width: 100%;
    contain: layout style paint;
    background: linear-gradient(135deg, #4F46E5 0%, #7C3AED 50%, #EC4899 100%);
  }
  
  .hero-container {
    width: 100%;
    padding: 0 5%;
    max-width: 1400px;
    margin: 0 auto;
  }
  
  .hero-text-column {
    padding: 2rem;
    color: white;
    text-align: center;
  }
  
  /* Critical typography to prevent FOUT */
  .hero-headline {
    font-size: 2.5rem;
    font-weight: 700;
    line-height: 1.2;
    margin: 0 0 1.5rem 0;
  }
  
  .hero-description {
    font-size: 1rem;
    line-height: 1.6;
    margin: 0 0 2rem 0;
    max-width: 550px;
  }
  
  /* Critical button styles */
  .hero-cta {
    display: inline-flex;
    align-items: center;
    background: #dc2626;
    color: white;
    padding: 0.75rem 1.5rem;
    border-radius: 0.5rem;
    font-weight: 600;
    text-decoration: none;
    border: none;
    cursor: pointer;
  }
  
  /* Prevent layout shift for images */
  img { max-width: 100%; height: auto; }
`;

const CRITICAL_CSS_DESKTOP = `
  /* Desktop enhancements */
  @media (min-width: 1024px) {
    .hero-section {
      background-image: url('/lovable-uploads/dda96630-3254-4551-8fe9-33127763c436.png');
      background-size: cover;
      background-position: center;
      min-height: 80vh;
    }
    
    .hero-text-column {
      width: 45%;
      max-width: 500px;
      text-align: left;
      color: inherit;
    }
    
    .hero-headline {
      font-size: 4rem;
    }
    
    .hero-description {
      font-size: 1.25rem;
      color: rgba(20, 33, 61, 0.85);
    }
  }
`;

// Inject critical CSS immediately to prevent render blocking
export const injectCriticalCSS = () => {
  if (typeof document === 'undefined') return;
  
  // Check if already injected
  if (document.querySelector('#critical-css-enhanced')) return;
  
  const style = document.createElement('style');
  style.id = 'critical-css-enhanced';
  style.textContent = CRITICAL_CSS_MOBILE + CRITICAL_CSS_DESKTOP;
  
  // Insert at the very beginning of head for highest priority
  const firstChild = document.head.firstChild;
  if (firstChild) {
    document.head.insertBefore(style, firstChild);
  } else {
    document.head.appendChild(style);
  }
};

// Preload critical fonts with optimal loading strategy
export const preloadCriticalFonts = () => {
  if (typeof document === 'undefined') return;
  
  const criticalFonts = [
    {
      href: 'https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiJ-Ek-_EeA.woff2',
      weight: '400'
    },
    {
      href: 'https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuGKYAZ9hiJ-Ek-_EeA.woff2',
      weight: '600'
    }
  ];
  
  criticalFonts.forEach(font => {
    if (!document.querySelector(`link[href="${font.href}"]`)) {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = font.href;
      link.as = 'font';
      link.type = 'font/woff2';
      link.crossOrigin = 'anonymous';
      link.setAttribute('fetchpriority', 'high');
      document.head.appendChild(link);
    }
  });
};

// Load non-critical CSS asynchronously
export const loadNonCriticalCSS = () => {
  if (typeof document === 'undefined') return;
  
  const nonCriticalCSS = [
    '/src/styles/components.css',
    '/src/styles/navigation.css'
  ];
  
  nonCriticalCSS.forEach(href => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    link.media = 'print';
    link.onload = function() {
      this.media = 'all';
    };
    document.head.appendChild(link);
  });
};
