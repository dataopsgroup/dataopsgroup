
/**
 * Deferred CSS loader to eliminate render-blocking resources
 */

const deferredStylesheets = [
  './styles/fonts-optimized.css',
  './styles/base.css',
  './styles/typography-optimized.css',
  './styles/components-optimized.css'
];

/**
 * Load CSS files after critical rendering is complete
 */
export const loadDeferredCSS = () => {
  if (typeof document === 'undefined') return;

  // Use requestIdleCallback to load during idle time
  const idleCallback = window.requestIdleCallback || ((cb) => setTimeout(cb, 1));
  
  idleCallback(() => {
    deferredStylesheets.forEach(href => {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = href;
      link.media = 'print';
      link.onload = () => {
        link.media = 'all';
      };
      document.head.appendChild(link);
    });
  });
};

/**
 * Preload critical fonts without blocking render
 */
export const preloadCriticalFonts = () => {
  if (typeof document === 'undefined') return;

  const fontPreloads = [
    'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap',
    'https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600;700&display=swap'
  ];

  fontPreloads.forEach(href => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'style';
    link.href = href;
    link.onload = () => {
      link.rel = 'stylesheet';
    };
    document.head.appendChild(link);
  });
};
