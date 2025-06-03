
/**
 * Device detection utilities
 */

// Device detection
export const isMobile = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.innerWidth < 1024;
};

// Enhanced connection-aware font loading
export const shouldReduceFontLoading = (): boolean => {
  if (typeof navigator === 'undefined') return false;
  
  if ('connection' in navigator) {
    const connection = (navigator as any).connection;
    if (connection) {
      if (connection.saveData) return true;
      if (['slow-2g', '2g'].includes(connection.effectiveType)) return true;
      if (connection.downlink && connection.downlink < 1.5) return true;
    }
  }
  
  return false;
};
