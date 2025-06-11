
/**
 * Resource hints and preloading optimization
 */

export const setupResourceHints = (): void => {
  if (typeof document === 'undefined') return;

  // DNS prefetch for external domains
  const domains = [
    'fonts.googleapis.com',
    'fonts.gstatic.com',
    'images.unsplash.com',
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

  // Preconnect to critical external resources
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

  // Preload critical fonts
  const criticalFonts = [
    '/fonts/rubik-regular.woff2',
    '/fonts/roboto-regular.woff2'
  ];

  criticalFonts.forEach(font => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'font';
    link.type = 'font/woff2';
    link.crossOrigin = 'anonymous';
    link.href = font;
    document.head.appendChild(link);
  });
};
