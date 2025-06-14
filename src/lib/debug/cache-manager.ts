
/**
 * Cache management and debugging utilities
 */

export const clearAllCaches = async (): Promise<void> => {
  try {
    if ('caches' in window) {
      const cacheNames = await caches.keys();
      console.log('🗑️ Clearing caches:', cacheNames);
      
      await Promise.all(
        cacheNames.map(cacheName => caches.delete(cacheName))
      );
      
      console.log('✅ All caches cleared');
    }
    
    // Also clear service worker cache if available
    if ('serviceWorker' in navigator) {
      const registration = await navigator.serviceWorker.ready;
      if (registration.active) {
        registration.active.postMessage({ type: 'CLEAR_CACHE' });
        console.log('📡 Service worker cache clear requested');
      }
    }
  } catch (error) {
    console.error('❌ Failed to clear caches:', error);
  }
};

export const inspectCacheContents = async (): Promise<void> => {
  try {
    if ('caches' in window) {
      const cacheNames = await caches.keys();
      
      for (const cacheName of cacheNames) {
        const cache = await caches.open(cacheName);
        const requests = await cache.keys();
        
        console.group(`📦 Cache: ${cacheName}`);
        console.log('Cached requests:', requests.length);
        
        for (const request of requests.slice(0, 10)) { // Show first 10
          console.log('- ', request.url);
        }
        
        if (requests.length > 10) {
          console.log(`... and ${requests.length - 10} more`);
        }
        
        console.groupEnd();
      }
    }
  } catch (error) {
    console.error('❌ Failed to inspect cache contents:', error);
  }
};

export const forceRefreshPage = (): void => {
  console.log('🔄 Force refreshing page...');
  
  // Clear all caches first
  clearAllCaches().then(() => {
    // Force a hard refresh
    window.location.reload();
  });
};

// Expose debugging functions to window for manual testing
if (typeof window !== 'undefined') {
  (window as any).debugCache = {
    clear: clearAllCaches,
    inspect: inspectCacheContents,
    forceRefresh: forceRefreshPage
  };
}
