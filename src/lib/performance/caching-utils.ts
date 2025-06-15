
/**
 * Caching utilities and helper functions
 */

export const getAppVersion = (): string => {
  return '1.0.0'; // This could be from package.json or environment
};

export const isCacheApiSupported = (): boolean => {
  return typeof window !== 'undefined' && 'caches' in window;
};

export const isServiceWorkerSupported = (): boolean => {
  return typeof window !== 'undefined' && 'serviceWorker' in navigator;
};

export const createCacheKey = (url: string, version?: string): string => {
  const baseKey = url.replace(/[^a-zA-Z0-9]/g, '_');
  return version ? `${baseKey}_v${version}` : baseKey;
};
