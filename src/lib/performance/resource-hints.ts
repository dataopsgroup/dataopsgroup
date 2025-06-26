
/**
 * Optimized resource hints and preloading
 */

export const setupResourceHints = (): void => {
  if (typeof document === 'undefined') return;

  // DNS prefetch for external domains - reduced list for better performance
  const domains = [
    'fonts.googleapis.com',
    'fonts.gstatic.com',
    'www.googletagmanager.com'
  ];

  domains.forEach(domain => {
    const link = document.createElement('link');
    link.rel = 'dns-prefetch';
    link.href = `//${domain}`;
    document.head.appendChild(link);
  });
};

export const setupDNSPrefetch = (): void => {
  if (typeof document === 'undefined') return;

  // Preconnect to critical external resources only
  const criticalDomains = [
    'fonts.googleapis.com',
    'fonts.gstatic.com'
  ];

  criticalDomains.forEach(domain => {
    const link = document.createElement('link');
    link.rel = 'preconnect';
    link.href = `https://${domain}`;
    link.crossOrigin = 'anonymous';
    document.head.appendChild(link);
  });
};

export const preloadCriticalAssets = (): void => {
  if (typeof document === 'undefined') return;

  // Simplified critical font preloading - let CSS handle the rest
  const criticalFonts = [
    'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Rubik:wght@400;500;600;700&display=swap'
  ];

  criticalFonts.forEach(font => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'style';
    link.crossOrigin = 'anonymous';
    link.href = font;
    // Prevent blocking render
    link.onload = () => {
      link.rel = 'stylesheet';
    };
    document.head.appendChild(link);
  });
};
