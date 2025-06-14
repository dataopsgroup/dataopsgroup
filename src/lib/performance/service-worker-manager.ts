
/**
 * Service Worker management with proper error handling
 */
import { safeReload, clearCacheAndReload, getAppVersion } from './caching-utils';

/**
 * Handle service worker updates with proper cleanup
 */
const handleServiceWorkerUpdate = (registration: ServiceWorkerRegistration): void => {
  console.log('New ServiceWorker version available');
  
  try {
    // Clear navigation cache before updating
    if (registration.active) {
      registration.active.postMessage({ type: 'CLEAR_CACHE' });
    }
    
    // Skip waiting immediately for faster updates
    if (registration.waiting) {
      registration.waiting.postMessage({ type: 'SKIP_WAITING' });
    }
    
    console.log('ServiceWorker update will be applied automatically');
  } catch (error) {
    console.warn('Failed to handle service worker update:', error);
  }
};

/**
 * Setup service worker with enhanced error handling
 */
export const setupServiceWorker = (): void => {
  if (typeof window === 'undefined' || !('serviceWorker' in navigator)) {
    return;
  }

  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(registration => {
        console.log('ServiceWorker registered successfully');
        
        // Enhanced update check interval
        const updateInterval = process.env.NODE_ENV === 'development' ? 30000 : 3600000;
        setInterval(() => {
          registration.update();
        }, updateInterval);
        
        // Handle waiting service worker
        if (registration.waiting) {
          handleServiceWorkerUpdate(registration);
        }
        
        // Listen for new service worker
        registration.addEventListener('updatefound', () => {
          const newWorker = registration.installing;
          if (newWorker) {
            newWorker.addEventListener('statechange', () => {
              if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                handleServiceWorkerUpdate(registration);
              }
            });
          }
        });
      })
      .catch(error => {
        console.error('ServiceWorker registration failed:', error);
      });
  });
};

/**
 * Setup service worker message handling
 */
export const setupServiceWorkerMessages = (): void => {
  if (typeof window === 'undefined' || !('serviceWorker' in navigator)) {
    return;
  }

  // Enhanced controller change handling
  let refreshing = false;
  navigator.serviceWorker.addEventListener('controllerchange', () => {
    if (refreshing) return;
    refreshing = true;
    console.log('ServiceWorker controller changed, reloading page');
    
    clearCacheAndReload();
  });
  
  // Enhanced message listening
  navigator.serviceWorker.addEventListener('message', (event) => {
    if (!event.data) return;

    switch (event.data.type) {
      case 'CACHE_UPDATED':
        console.log('New content is available. Please refresh the page.');
        break;
        
      case 'SW_UPDATED':
        console.log('ServiceWorker updated to version:', event.data.version);
        
        // Clear navigation cache and force reload
        if (navigator.serviceWorker.controller) {
          navigator.serviceWorker.controller.postMessage({ 
            type: 'CLEAR_CACHE' 
          });
        }
        
        // Force a page reload to get the fresh content
        setTimeout(() => {
          safeReload();
        }, 1000);
        break;
    }
  });
};
