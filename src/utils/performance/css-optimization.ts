
/**
 * CSS optimization utilities for removing unused styles
 */

// Remove unused CSS dynamically to improve performance
export const removeUnusedCSS = () => {
  if (typeof document === 'undefined') return;

  // Remove unused framework CSS that may be loaded
  const stylesheets = document.querySelectorAll('link[rel="stylesheet"]');
  stylesheets.forEach(link => {
    const href = link.getAttribute('href') || '';
    
    // Remove CSS frameworks we're not actively using
    if (href.includes('bootstrap') || 
        href.includes('foundation') || 
        href.includes('bulma') ||
        href.includes('materialize')) {
      link.remove();
    }
  });
};
