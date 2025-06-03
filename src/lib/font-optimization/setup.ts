
/**
 * Font optimization setup and initialization
 */
import { preloadCriticalFonts } from './preloader';
import { loadFonts } from './loader';

// Enhanced font optimization setup with device bifurcation
export const setupFontOptimization = (): void => {
  if (typeof document === 'undefined') return;
  
  document.documentElement.classList.add('fonts-pending');
  
  // Preload critical fonts immediately
  preloadCriticalFonts();
  
  // Load critical fonts with device-specific strategy
  loadFonts([400, 700])
    .then(() => {
      // Progressive enhancement - load additional weights
      setTimeout(() => {
        loadFonts([300, 500, 600]);
      }, 1000);
    })
    .finally(() => {
      setTimeout(() => {
        document.documentElement.classList.remove('fonts-pending');
      }, 3000);
    });
};
