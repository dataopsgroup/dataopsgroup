

/**
 * Mobile-specific CSS optimization for PSI requirements
 * Targets 14 KiB unused CSS reduction
 */

// Remove unused CSS specifically for mobile devices
export const optimizeMobileCSS = () => {
  if (typeof document === 'undefined') return;
  
  // Check if mobile device
  const isMobile = window.innerWidth < 768;
  if (!isMobile) return;
  
  try {
    // Remove desktop-only CSS classes and styles
    removeDesktopOnlyStyles();
    
    // Defer non-critical CSS for mobile
    deferNonCriticalCSS();
    
    // Optimize font loading for mobile
    optimizeMobileFontCSS();
    
  } catch (error) {
    console.error('Error optimizing mobile CSS:', error);
  }
};

// Remove desktop-specific styles on mobile
const removeDesktopOnlyStyles = () => {
  // Remove unused desktop grid classes
  const desktopClasses = [
    'lg:', 'xl:', '2xl:', 'desktop:', 'hover:', 'group-hover:',
    'focus-visible:', 'focus-within:', 'peer-'
  ];
  
  // Get all stylesheets
  Array.from(document.styleSheets).forEach(stylesheet => {
    try {
      // Skip external stylesheets due to CORS
      if (stylesheet.href && !stylesheet.href.includes(window.location.origin)) {
        return;
      }
      
      const rules = Array.from(stylesheet.cssRules || []);
      
      rules.forEach((rule, index) => {
        if (rule instanceof CSSStyleRule) {
          const selector = rule.selectorText;
          
          // Remove desktop-only responsive classes
          if (desktopClasses.some(prefix => selector.includes(prefix))) {
            try {
              stylesheet.deleteRule(index);
            } catch (e) {
              // Rule might already be deleted or protected
            }
          }
        }
      });
    } catch (e) {
      // CORS or other access issues - skip this stylesheet
    }
  });
};

// Defer loading of non-critical CSS for mobile
const deferNonCriticalCSS = () => {
  const criticalCSS = `
    /* Mobile-critical CSS only */
    .hero-section { 
      background: linear-gradient(135deg, #4F46E5 0%, #7C3AED 50%, #EC4899 100%);
      min-height: 100vh;
    }
    .hero-headline { 
      font-family: 'Inter', system-ui, sans-serif;
      font-weight: 600;
      font-size: 2.5rem;
      color: #000000;
    }
    .hero-description { 
      font-family: 'Inter', system-ui, sans-serif;
      color: #ffffff;
    }
    .btn-primary { 
      background: #4F46E5; 
      color: white; 
      padding: 12px 24px; 
      border-radius: 6px; 
    }
  `;
  
  // Inject critical CSS immediately
  const criticalStyle = document.createElement('style');
  criticalStyle.id = 'mobile-critical-css';
  criticalStyle.textContent = criticalCSS;
  document.head.insertBefore(criticalStyle, document.head.firstChild);
  
  // Defer non-critical stylesheets
  document.querySelectorAll('link[rel="stylesheet"]').forEach(linkElement => {
    const link = linkElement as HTMLLinkElement;
    const href = link.getAttribute('href') || '';
    
    // Skip critical CSS files
    if (href.includes('index.css')) {
      return;
    }
    
    // Convert to preload and load later
    link.rel = 'preload';
    link.as = 'style';
    link.setAttribute('onload', "this.onload=null;this.rel='stylesheet'");
  });
};

// Optimize font CSS specifically for mobile
const optimizeMobileFontCSS = () => {
  // Remove non-Inter font declarations on mobile
  const fontOptimizationCSS = `
    @media (max-width: 768px) {
      * {
        font-family: 'Inter', system-ui, -apple-system, sans-serif !important;
      }
      
      /* Remove font loading states for faster rendering */
      .fonts-pending,
      .font-active {
        font-family: 'Inter', system-ui, sans-serif !important;
      }
      
      /* Optimize font display for LCP */
      @font-face {
        font-family: 'Inter';
        font-display: swap;
        src: local('Inter'), url('/fonts/inter-subset/inter-latin-400-normal.woff2') format('woff2');
      }
    }
  `;
  
  const fontStyle = document.createElement('style');
  fontStyle.id = 'mobile-font-optimization';
  fontStyle.textContent = fontOptimizationCSS;
  document.head.appendChild(fontStyle);
};

// Initialize mobile CSS optimizations
export const initMobileCSSOptimizations = () => {
  if (window.innerWidth < 768) {
    // Run immediately for mobile
    optimizeMobileCSS();
    
    // Run again after fonts load
    document.fonts.ready.then(() => {
      optimizeMobileFontCSS();
    });
  }
};

