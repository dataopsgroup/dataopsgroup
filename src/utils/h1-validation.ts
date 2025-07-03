import React from 'react';

/**
 * H1 Tag Validation Utility - Runtime H1 tag checking
 * 
 * This utility ensures every page has exactly one H1 tag to prevent
 * Ahrefs "missing H1 tag" warnings and improve SEO
 */

/**
 * Check if current page has an H1 tag
 */
export const validatePageH1 = (): {
  hasH1: boolean;
  count: number;
  recommendation?: string;
} => {
  if (typeof document === 'undefined') {
    return { hasH1: false, count: 0 };
  }

  const h1Elements = document.querySelectorAll('h1');
  const count = h1Elements.length;

  if (count === 0) {
    return {
      hasH1: false,
      count: 0,
      recommendation: 'Add an H1 tag to improve SEO and accessibility'
    };
  }

  if (count > 1) {
    return {
      hasH1: true,
      count,
      recommendation: `Multiple H1 tags found (${count}). Consider using H2-H6 for subheadings`
    };
  }

  return { hasH1: true, count: 1 };
};

/**
 * Get current page H1 text
 */
export const getCurrentH1Text = (): string | null => {
  if (typeof document === 'undefined') return null;
  
  const h1Element = document.querySelector('h1');
  return h1Element?.textContent?.trim() || null;
};

/**
 * Log H1 validation results (development only)
 */
export const logH1Validation = (pagePath?: string) => {
  if (process.env.NODE_ENV !== 'development') return;

  const validation = validatePageH1();
  const h1Text = getCurrentH1Text();
  
  const pageInfo = pagePath ? ` on ${pagePath}` : '';
  
  if (!validation.hasH1) {
    console.warn(`⚠️ Missing H1 tag${pageInfo}`);
    console.log('💡 Recommendation:', validation.recommendation);
  } else if (validation.count > 1) {
    console.warn(`⚠️ Multiple H1 tags${pageInfo} (${validation.count} found)`);
    console.log('💡 Recommendation:', validation.recommendation);
  } else {
    console.log(`✅ Valid H1 tag${pageInfo}:`, h1Text);
  }
};

/**
 * H1 validation hook for React components
 */
export const useH1Validation = (pageName?: string) => {
  if (typeof window === 'undefined') return;

  React.useEffect(() => {
    // Small delay to ensure DOM is fully rendered
    const timeoutId = setTimeout(() => {
      logH1Validation(pageName);
    }, 100);

    return () => clearTimeout(timeoutId);
  }, [pageName]);
};

/**
 * Auto-fix missing H1 tags (development only)
 */
export const autoFixMissingH1 = (fallbackText: string = 'Page Title') => {
  if (process.env.NODE_ENV !== 'development') return;
  if (typeof document === 'undefined') return;

  const validation = validatePageH1();
  
  if (!validation.hasH1) {
    console.warn('🔧 Auto-fixing missing H1 tag with fallback text');
    
    // Try to find a suitable place to insert H1
    const main = document.querySelector('main');
    const firstSection = document.querySelector('section');
    const body = document.body;
    
    const targetElement = main || firstSection || body;
    
    if (targetElement) {
      const h1 = document.createElement('h1');
      h1.textContent = fallbackText;
      h1.style.cssText = 'font-size: 2rem; font-weight: bold; margin-bottom: 1rem; color: #1a202c;';
      
      // Insert at the beginning of the target element
      targetElement.insertBefore(h1, targetElement.firstChild);
      
      console.log('✅ Added fallback H1 tag:', fallbackText);
    }
  }
};

// Pages that commonly miss H1 tags
export const PAGES_NEEDING_H1_VALIDATION = [
  '/services',
  '/case-studies', 
  '/faqs',
  '/sitemap',
  '/approach',
  '/about',
  '/contact'
];

/**
 * Global H1 validator that runs on route changes
 */
export const setupGlobalH1Validation = () => {
  if (typeof window === 'undefined' || process.env.NODE_ENV !== 'development') return;

  // Validate on initial load
  setTimeout(() => logH1Validation(window.location.pathname), 500);
  
  // Validate on route changes (for SPAs)
  let lastPathname = window.location.pathname;
  
  const checkForRouteChange = () => {
    if (window.location.pathname !== lastPathname) {
      lastPathname = window.location.pathname;
      setTimeout(() => logH1Validation(window.location.pathname), 500);
    }
  };
  
  // Check for route changes every second
  setInterval(checkForRouteChange, 1000);
  
  console.log('🔍 H1 validation monitoring enabled');
};