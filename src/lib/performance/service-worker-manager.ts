
/**
 * Service worker management utilities
 */

export const setupServiceWorker = (): void => {
  if (!navigator.serviceWorker) return;
  
  navigator.serviceWorker.register('/sw.js')
    .then(registration => {
      console.log('✅ Service Worker registered successfully');
      
      // Handle updates
      registration.addEventListener('updatefound', () => {
        const newWorker = registration.installing;
        if (newWorker) {
          newWorker.addEventListener('statechange', () => {
            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
              console.log('🔄 New service worker available, refresh to update');
            }
          });
        }
      });
    })
    .catch(error => {
      console.warn('Service Worker registration failed:', error);
    });
};

export const setupServiceWorkerMessages = (): void => {
  if (!navigator.serviceWorker) return;
  
  navigator.serviceWorker.addEventListener('message', event => {
    const { type, payload } = event.data;
    
    switch (type) {
      case 'CACHE_UPDATED':
        console.log('📦 Cache updated:', payload);
        break;
      case 'OFFLINE_READY':
        console.log('🔌 App is ready for offline use');
        break;
      default:
        console.log('📨 Service worker message:', event.data);
    }
  });
};
