/**
 * Performance optimization utilities for improved asset loading and caching
 */

// Enhanced resource hints for critical resources
export const setupResourceHints = () => {
  if (typeof document === 'undefined') return;
  
  // Add preconnect for important domains with DNS prefetch fallbacks
  const criticalDomains = [
    'https://fonts.googleapis.com',
    'https://fonts.gstatic.com',
    'https://js.hs-scripts.com',
    'https://www.googletagmanager.com',
    'https://cdn.botpress.cloud',
    'https://files.bpcontent.cloud'
  ];
  
  criticalDomains.forEach(domain => {
    // Only add if not already present
    if (!document.querySelector(`link[rel="preconnect"][href="${domain}"]`)) {
      const preconnect = document.createElement('link');
      preconnect.rel = 'preconnect';
      preconnect.href = domain;
      preconnect.crossOrigin = 'anonymous';
      document.head.appendChild(preconnect);
      
      // Add DNS prefetch as fallback for browsers that don't support preconnect
      const dnsPrefetch = document.createElement('link');
      dnsPrefetch.rel = 'dns-prefetch';
      dnsPrefetch.href = domain;
      document.head.appendChild(dnsPrefetch);
    }
  });
  
  // Dynamically prefetch likely next navigations based on links in view
  const prefetchVisibleLinks = () => {
    const visibleLinks = document.querySelectorAll('a[href^="/"]:not([data-prefetched])');
    
    // Use IntersectionObserver to only prefetch links that are visible
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const link = entry.target as HTMLAnchorElement;
            const href = link.getAttribute('href');
            
            if (href && !href.includes('#') && !document.querySelector(`link[rel="prefetch"][href="${href}"]`)) {
              const prefetchLink = document.createElement('link');
              prefetchLink.rel = 'prefetch';
              prefetchLink.href = href;
              prefetchLink.as = 'document';
              document.head.appendChild(prefetchLink);
              link.dataset.prefetched = 'true';
              
              // Stop observing this link
              observer.unobserve(link);
            }
          }
        });
      }, { rootMargin: '200px' });
      
      visibleLinks.forEach(link => {
        observer.observe(link);
      });
    }
  };
  
  // Run once on load and then on idle
  if ('requestIdleCallback' in window) {
    window.addEventListener('load', () => {
      window.requestIdleCallback(() => prefetchVisibleLinks());
    });
  } else {
    window.addEventListener('load', () => {
      setTimeout(prefetchVisibleLinks, 1000);
    });
  }
};

// Enhanced asset loading with priority hints
export const optimizeAssetLoading = () => {
  if (typeof document === 'undefined') return;

  // Set fetchpriority for images based on viewport position
  document.querySelectorAll('img').forEach(img => {
    const rect = img.getBoundingClientRect();
    
    // Critical above-the-fold images
    if (rect.top < window.innerHeight) {
      if (!img.hasAttribute('fetchpriority')) {
        img.fetchPriority = 'high';
      }
      
      // Add loading=eager for visible images
      if (!img.hasAttribute('loading')) {
        img.loading = 'eager';
      }
    } else {
      // Below-fold images
      if (!img.hasAttribute('fetchpriority')) {
        img.fetchPriority = 'low';
      }
      
      // Add loading=lazy for below-fold images
      if (!img.hasAttribute('loading')) {
        img.loading = 'lazy';
      }
    }
    
    // Ensure all images have decoding attribute
    if (!img.hasAttribute('decoding')) {
      img.decoding = rect.top < window.innerHeight ? 'sync' : 'async';
    }
  });

  // Prioritize script loading
  document.querySelectorAll('script').forEach(script => {
    const src = script.getAttribute('src') || '';
    
    // Mark analytics and tracking scripts as low priority
    if (src.includes('analytics') || 
        src.includes('gtag') || 
        src.includes('gtm') || 
        src.includes('hs-script') || 
        src.includes('facebook')) {
      script.setAttribute('fetchpriority', 'low');
      if (!script.hasAttribute('async')) {
        script.async = true;
      }
    }
    
    // First-party scripts should be higher priority than third-party
    if (src && !src.includes('//') && !src.includes('://')) {
      script.setAttribute('fetchpriority', 'high');
    }
  });

  // Add version cache busting to dynamic resources
  document.querySelectorAll('link[href*=".css"], script[src*=".js"]').forEach(element => {
    const url = element.getAttribute('href') || element.getAttribute('src') || '';
    if (url && !url.includes('?v=') && !url.includes('lovable-uploads')) {
      const newUrl = url.includes('?') ? `${url}&v=${window.APP_VERSION || '1.0.0'}` : `${url}?v=${window.APP_VERSION || '1.0.0'}`;
      if (element.tagName === 'LINK') {
        element.setAttribute('href', newUrl);
      } else {
        element.setAttribute('src', newUrl);
      }
    }
  });
};

// Configure client-side cache headers through service worker
export const setupClientCaching = () => {
  // App version for cache busting
  const appVersion = '1.0.1'; // Should match the version in service worker
  
  // Register service worker if browser supports it
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js')
        .then(registration => {
          // Check for updates every hour
          setInterval(() => {
            registration.update();
          }, 60 * 60 * 1000);
        })
        .catch(error => {
          console.error('ServiceWorker registration failed:', error);
        });
    });
    
    // Handle service worker updates
    let refreshing = false;
    navigator.serviceWorker.addEventListener('controllerchange', () => {
      if (refreshing) return;
      refreshing = true;
      window.location.reload();
    });
  }

  // Apply versioning to dynamic resources
  window.APP_VERSION = appVersion;
};

// Enhanced prefetch for critical routes with prioritization
export const prefetchCriticalRoutes = (routes: string[]) => {
  if (typeof document === 'undefined') return;
  
  // Add slight delay to not compete with initial page resources
  setTimeout(() => {
    // Prioritize routes based on likelihood of navigation
    // We'll use a simple heuristic: routes in the main nav are higher priority
    const mainNavLinks = Array.from(document.querySelectorAll('nav a')).map(a => a.getAttribute('href'));
    
    // Sort routes by priority (nav links first)
    const prioritizedRoutes = [...routes].sort((a, b) => {
      const aIsInNav = mainNavLinks.includes(a);
      const bIsInNav = mainNavLinks.includes(b);
      
      if (aIsInNav && !bIsInNav) return -1;
      if (!aIsInNav && bIsInNav) return 1;
      return 0;
    });
    
    // Process routes in batches to avoid resource contention
    const processBatch = (routesBatch: string[], index = 0) => {
      if (index >= routesBatch.length) return;
      
      const route = routesBatch[index];
      
      // Check if already in cache
      caches.match(route).then(cachedResponse => {
        if (!cachedResponse && !document.querySelector(`link[rel="prefetch"][href="${route}"]`)) {
          const link = document.createElement('link');
          link.rel = 'prefetch';
          link.href = route;
          link.as = route.endsWith('.js') ? 'script' : 
                    route.endsWith('.css') ? 'style' : 
                    'document';
                    
          // High priority for main nav items
          if (mainNavLinks.includes(route)) {
            link.setAttribute('fetchpriority', 'high');
          }
          
          document.head.appendChild(link);
        }
        
        // Process next route with a small delay between each
        if ('requestIdleCallback' in window) {
          window.requestIdleCallback(() => processBatch(routesBatch, index + 1));
        } else {
          setTimeout(() => processBatch(routesBatch, index + 1), 100);
        }
      }).catch(() => {
        // If caches API fails, prefetch anyway
        const link = document.createElement('link');
        link.rel = 'prefetch';
        link.href = route;
        document.head.appendChild(link);
        
        // Continue processing
        if ('requestIdleCallback' in window) {
          window.requestIdleCallback(() => processBatch(routesBatch, index + 1));
        } else {
          setTimeout(() => processBatch(routesBatch, index + 1), 100);
        }
      });
    };
    
    // Start processing routes
    processBatch(prioritizedRoutes);
  }, 2000);
};

// Enhanced fetch function with prioritization
export const fetchWithCaching = (url: string, options: RequestInit = {}) => {
  // Determine appropriate caching strategy based on URL pattern
  const isStatic = /\.(png|jpg|jpeg|gif|svg|webp|woff|woff2|ttf|eot)$/.test(url);
  const isApi = url.includes('/api/') || url.endsWith('.json');
  
  let cacheControl = '';
  if (isStatic) {
    cacheControl = 'public, max-age=31536000, immutable'; // 1 year for static
  } else if (isApi) {
    cacheControl = 'private, max-age=3600'; // 1 hour for API
  } else {
    cacheControl = 'public, max-age=86400'; // 1 day default
  }
  
  // Add headers to request
  const headers = new Headers(options.headers || {});
  headers.append('X-Requested-With', 'XMLHttpRequest');
  
  // Create final options with cache headers
  const fetchOptions: RequestInit = {
    ...options,
    headers,
    credentials: 'same-origin'
  };
  
  return fetch(url, fetchOptions);
};

// New! Prerender likely next page based on user behavior
export const prerenderNextLikelyPage = () => {
  if (typeof document === 'undefined' || !('requestIdleCallback' in window)) return;
  
  window.requestIdleCallback(() => {
    // Simple heuristic: prerender the page that has the most links to it
    const links = document.querySelectorAll('a[href^="/"]');
    const linkCounts: Record<string, number> = {};
    
    links.forEach(link => {
      const href = link.getAttribute('href');
      if (href && !href.includes('#') && href !== window.location.pathname) {
        linkCounts[href] = (linkCounts[href] || 0) + 1;
      }
    });
    
    // Find the most linked page
    let maxCount = 0;
    let mostLikelyPage = '';
    
    Object.entries(linkCounts).forEach(([page, count]) => {
      if (count > maxCount) {
        maxCount = count;
        mostLikelyPage = page;
      }
    });
    
    // Only prerender if there's a clear winner and it's not already prerendered
    if (mostLikelyPage && maxCount > 2 && !document.querySelector(`link[rel="prerender"][href="${mostLikelyPage}"]`)) {
      const prerender = document.createElement('link');
      prerender.rel = 'prerender';
      prerender.href = mostLikelyPage;
      document.head.appendChild(prerender);
      
      console.log(`Prerendering likely next page: ${mostLikelyPage}`);
    }
  }, { timeout: 5000 });
};

// New! Optimize resource order through dynamic insertion
export const optimizeResourceOrder = () => {
  if (typeof document === 'undefined') return;
  
  // Collect all script elements
  const scripts = Array.from(document.querySelectorAll('script'));
  
  // Categorize scripts
  const criticalScripts: HTMLScriptElement[] = [];
  const thirdPartyScripts: HTMLScriptElement[] = [];
  const analyticsScripts: HTMLScriptElement[] = [];
  
  scripts.forEach(script => {
    const src = script.getAttribute('src') || '';
    
    if (!src) {
      // Inline scripts are usually critical
      criticalScripts.push(script);
    } else if (src.includes('analytics') || 
               src.includes('gtag') || 
               src.includes('gtm') || 
               src.includes('hs-script') || 
               src.includes('facebook')) {
      analyticsScripts.push(script);
    } else if (src.includes('//') || src.includes('://')) {
      thirdPartyScripts.push(script);
    } else {
      criticalScripts.push(script);
    }
  });
  
  // Reorder scripts by removing and reinserting them
  // This is an advanced technique and should be used with caution
  if (document.readyState !== 'complete') {
    window.addEventListener('load', reorderScripts);
  } else {
    reorderScripts();
  }
  
  function reorderScripts() {
    // First, clone all scripts
    const scriptClones = [...criticalScripts, ...thirdPartyScripts, ...analyticsScripts].map(script => {
      const clone = document.createElement('script');
      
      // Copy all attributes
      Array.from(script.attributes).forEach(attr => {
        clone.setAttribute(attr.name, attr.value);
      });
      
      // Copy inline script content
      if (!script.src) {
        clone.textContent = script.textContent;
      }
      
      return {
        original: script,
        clone: clone
      };
    });
    
    // Remove originals and insert clones in optimal order
    scriptClones.forEach(({ original, clone }) => {
      if (original.parentNode) {
        original.parentNode.removeChild(original);
        document.body.appendChild(clone);
      }
    });
  }
};

// New function to dynamically prioritize loading based on user interaction
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
