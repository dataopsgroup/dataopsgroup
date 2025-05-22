
/**
 * Critical CSS and font loading optimization utilities
 */

// Inject critical CSS directly into the document head
export const injectCriticalCSS = (css: string) => {
  if (typeof document === 'undefined') return;
  
  const style = document.createElement('style');
  style.setAttribute('data-critical', 'true');
  style.textContent = css;
  document.head.appendChild(style);
};

// Extract route-specific critical CSS
export const getRouteCriticalCSS = (route: string): string => {
  // Map routes to specific critical CSS blocks
  const criticalCSSMap: Record<string, string> = {
    '/': `
      /* Critical CSS for homepage */
      .hero-section { display: flex; min-height: 80vh; }
      .hero-heading { font-size: 3rem; line-height: 1.1; font-weight: 700; margin-bottom: 1.5rem; }
      .hero-content { max-width: 36rem; }
      .hero-image { position: relative; height: 100%; }
      .hero-image img { object-fit: cover; }
      @media (max-width: 768px) {
        .hero-heading { font-size: 2rem; }
        .hero-section { min-height: 60vh; }
      }
    `,
    '/services': `
      /* Critical CSS for services page */
      .services-grid { display: grid; gap: 2rem; }
      .service-card { border-radius: 0.5rem; padding: 1.5rem; transition: transform 0.2s; }
      @media (min-width: 768px) { .services-grid { grid-template-columns: repeat(2, 1fr); } }
      @media (min-width: 1024px) { .services-grid { grid-template-columns: repeat(3, 1fr); } }
    `,
    // Add more route-specific critical CSS as needed
  };
  
  return criticalCSSMap[route] || '';
};

// Optimize font loading
export const optimizeFontLoading = () => {
  if (typeof document === 'undefined') return;
  
  // Add font-display: swap to all font face rules
  const styleSheets = document.styleSheets;
  
  try {
    for (let i = 0; i < styleSheets.length; i++) {
      const ss = styleSheets[i];
      
      try {
        // Access might throw SecurityError for cross-origin stylesheets
        const rules = ss.cssRules || ss.rules;
        
        for (let j = 0; j < rules.length; j++) {
          const rule = rules[j];
          
          if (rule.type === CSSRule.FONT_FACE_RULE) {
            const fontFaceRule = rule as CSSFontFaceRule;
            // Use type assertion to access fontDisplay property
            if (!(fontFaceRule.style as any).fontDisplay) {
              (fontFaceRule.style as any).fontDisplay = 'swap';
            }
          }
        }
      } catch (e) {
        // Skip inaccessible stylesheets
        continue;
      }
    }
  } catch (e) {
    console.error('Failed to optimize font loading:', e);
  }
};

// Apply critical CSS based on current route
export const applyCriticalCSS = (route: string) => {
  const css = getRouteCriticalCSS(route);
  if (css) {
    injectCriticalCSS(css);
  }
  
  // Optimize font loading
  optimizeFontLoading();
};

// Add web font loading optimization
export const loadFonts = () => {
  if (typeof document === 'undefined' || !('fonts' in document)) return;
  
  // Font loading status classes
  document.documentElement.classList.add('fonts-pending');
  
  try {
    // Load critical fonts with the Font Loading API
    Promise.all([
      (document as any).fonts.load('400 1em Inter'),
      (document as any).fonts.load('700 1em Inter')
    ])
    .then(() => {
      document.documentElement.classList.remove('fonts-pending');
      document.documentElement.classList.add('fonts-loaded');
      
      // Mark font loading completion
      if (window.performance && 'mark' in window.performance) {
        window.performance.mark('fonts-loaded');
      }
    })
    .catch(() => {
      // Remove pending class even if fonts fail to load
      document.documentElement.classList.remove('fonts-pending');
    });
  } catch (e) {
    // Ensure we remove the pending class in case of errors
    document.documentElement.classList.remove('fonts-pending');
  }
};
