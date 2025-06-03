
/**
 * Font optimization main entry point
 */

// Re-export all public APIs
export { preloadCriticalFonts } from './preloader';
export { loadFonts } from './loader';
export { setupFontOptimization } from './setup';
export { getFontStatus } from './state';
export { getFontLoadingProgress } from './progress';
export { isMobile, shouldReduceFontLoading } from './device-detection';

// Re-export types
export type { FontStatus, FontWeights, FontLoadingState, FontLoadingProgress } from './types';
