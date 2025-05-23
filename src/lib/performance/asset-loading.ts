
/**
 * Asset loading optimization module for improved resource loading
 */

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

// Flag to track if script reordering has already been done
const scriptReorderingFlag = '__SCRIPT_REORDERING_DONE__';

// Extracted function to avoid duplicate declarations and prevent multiple executions
export const reorderScripts = (
  criticalScripts: HTMLScriptElement[], 
  thirdPartyScripts: HTMLScriptElement[], 
  analyticsScripts: HTMLScriptElement[]
) => {
  // Safety check: only run once per page/document to prevent duplicate script issues
  if ((window as any)[scriptReorderingFlag]) {
    return; // Exit if already executed
  }
  
  try {
    // Clone all scripts
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
    
    // Mark as done to prevent duplicate execution
    (window as any)[scriptReorderingFlag] = true;
  } catch (error) {
    console.error('Error during script reordering:', error);
    // Don't set the flag if execution failed, allowing for potential retry
  }
};

// Optimize resource order through dynamic insertion - made safer with checks
export const optimizeResourceOrder = () => {
  if (typeof document === 'undefined') return;
  
  // Skip if already executed
  if ((window as any)[scriptReorderingFlag]) {
    return;
  }
  
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
  
  // Reorder scripts by removing and reinserting them - with safer approach
  if (document.readyState !== 'complete') {
    window.addEventListener('load', () => {
      if (!(window as any)[scriptReorderingFlag]) {
        reorderScripts(criticalScripts, thirdPartyScripts, analyticsScripts);
      }
    }, { once: true });  // Use once option to ensure handler runs only once
  } else {
    reorderScripts(criticalScripts, thirdPartyScripts, analyticsScripts);
  }
};
