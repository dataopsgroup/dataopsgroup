
/**
 * Layout optimization utilities for Core Web Vitals improvement
 */

// Enhanced CLS prevention for background image hero
export const preventLayoutShift = () => {
  if (typeof document === 'undefined') return;

  // Set explicit aspect ratios for images without dimensions
  const images = document.querySelectorAll('img:not([width]):not([height]):not([style*="aspect-ratio"])');
  images.forEach(img => {
    if (img instanceof HTMLImageElement) {
      img.style.aspectRatio = '16/9'; // Default fallback
      img.style.objectFit = 'contain';
    }
  });

  // Reserve space for hero section to prevent layout shift
  const heroSection = document.querySelector('.hero-section');
  if (heroSection instanceof HTMLElement && !heroSection.style.minHeight) {
    heroSection.style.minHeight = '80vh';
  }

  // Reserve space for dynamic content to prevent layout shift
  const dynamicElements = document.querySelectorAll('[data-dynamic="true"]');
  dynamicElements.forEach(element => {
    if (element instanceof HTMLElement && !element.style.minHeight) {
      element.style.minHeight = '200px';
    }
  });
};
