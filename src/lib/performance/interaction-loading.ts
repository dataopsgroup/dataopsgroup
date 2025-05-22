
/**
 * Interaction-based loading optimization module
 */

// Dynamically prioritize loading based on user interaction
export const setupInteractionBasedLoading = () => {
  if (typeof document === 'undefined') return;
  
  // Track user interactions to prioritize resources
  const interactionEvents = ['click', 'touchstart', 'mouseover'];
  
  interactionEvents.forEach(eventType => {
    document.addEventListener(eventType, (e) => {
      const target = e.target as HTMLElement;
      
      // Check if interaction is with a link
      if (target.tagName === 'A' || target.closest('a')) {
        const link = target.tagName === 'A' ? target : target.closest('a');
        if (!link) return;
        
        const href = link.getAttribute('href');
        if (!href || href.startsWith('#')) return;
        
        // For internal links, prefetch the page
        if (href.startsWith('/') && !link.hasAttribute('data-prefetched')) {
          const prefetch = document.createElement('link');
          prefetch.rel = 'prefetch';
          prefetch.href = href;
          prefetch.as = 'document';
          document.head.appendChild(prefetch);
          link.setAttribute('data-prefetched', 'true');
        }
      }
      
      // Check if interaction is with a button that might load content
      if (target.tagName === 'BUTTON' || target.closest('button')) {
        // Look for images or data attributes that might indicate content to load
        const button = target.tagName === 'BUTTON' ? target : target.closest('button');
        if (!button) return;
        
        // Check for data attributes indicating content to load
        const contentTarget = button.getAttribute('data-loads-content') || 
                             button.getAttribute('data-target') ||
                             button.getAttribute('aria-controls');
                             
        if (contentTarget) {
          const targetElement = document.getElementById(contentTarget);
          if (targetElement) {
            // Prefetch images within the target element
            targetElement.querySelectorAll('img').forEach(img => {
              const src = img.getAttribute('src');
              if (src && !img.hasAttribute('data-prefetched')) {
                const imgPreload = document.createElement('link');
                imgPreload.rel = 'prefetch';
                imgPreload.href = src;
                imgPreload.as = 'image';
                document.head.appendChild(imgPreload);
                img.setAttribute('data-prefetched', 'true');
              }
            });
          }
        }
      }
    }, { passive: true });
  });
};
