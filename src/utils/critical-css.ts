
/**
 * Critical CSS extraction and loading utilities
 */

// Critical CSS for above-the-fold content
const CRITICAL_CSS = `
  /* Critical layout and typography */
  body { 
    margin: 0; 
    font-family: 'Roboto', system-ui, sans-serif; 
    line-height: 1.6; 
  }
  
  /* Critical navbar styles */
  .navbar { 
    position: fixed; 
    top: 0; 
    width: 100%; 
    z-index: 1000; 
    background: #fff; 
    box-shadow: 0 2px 4px rgba(0,0,0,0.1); 
  }
  
  /* Critical hero section */
  .hero-section { 
    padding-top: 100px; 
    min-height: 60vh; 
  }
  
  /* Critical button styles */
  .btn-primary { 
    background: #4F46E5; 
    color: white; 
    padding: 12px 24px; 
    border-radius: 6px; 
    border: none; 
    cursor: pointer; 
  }
  
  /* Prevent layout shift */
  img { 
    max-width: 100%; 
    height: auto; 
  }
`;

// Apply critical CSS immediately
export const applyCriticalCSS = (page: string = '/') => {
  if (typeof document === 'undefined') return;
  
  // Only apply if not already applied
  if (document.querySelector('#critical-css')) return;
  
  const style = document.createElement('style');
  style.id = 'critical-css';
  style.textContent = CRITICAL_CSS;
  document.head.insertBefore(style, document.head.firstChild);
};

// Preload critical fonts
export const preloadCriticalFonts = () => {
  if (typeof document === 'undefined') return;
  
  const fonts = [
    'https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu4mxK.woff2',
    'https://fonts.gstatic.com/s/rubik/v21/iJWZBXyIfDnIV5PNhY1KTN7Z-Yh-B4iFVUUzdYPFkaVNA6w.woff2'
  ];
  
  fonts.forEach(font => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = font;
    link.as = 'font';
    link.type = 'font/woff2';
    link.crossOrigin = 'anonymous';
    document.head.appendChild(link);
  });
};

// Defer non-critical CSS
export const deferNonCriticalCSS = () => {
  if (typeof document === 'undefined') return;
  
  const loadCSS = (href: string) => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    link.media = 'print';
    link.onload = function() {
      if (link.media !== 'all') {
        link.media = 'all';
      }
    };
    document.head.appendChild(link);
  };
  
  // Defer non-critical stylesheets
  const stylesheets = [
    '/src/styles/components.css',
    '/src/styles/navigation.css'
  ];
  
  stylesheets.forEach(loadCSS);
};
