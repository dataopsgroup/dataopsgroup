
/**
 * Font loading progress tracking
 */
import type { FontLoadingProgress } from './types';
import { fontState } from './state';
import { isMobile } from './device-detection';
import { FONT_WEIGHTS } from './constants';

// Get overall font loading progress
export const getFontLoadingProgress = (): FontLoadingProgress => {
  const mobile = isMobile();
  
  if (mobile) {
    const loaded = FONT_WEIGHTS.filter(weight => fontState.inter[weight] === 'loaded').length;
    const total = FONT_WEIGHTS.length;
    return { loaded, total, percentage: Math.round((loaded / total) * 100) };
  } else {
    const robotoLoaded = FONT_WEIGHTS.filter(weight => fontState.roboto[weight] === 'loaded').length;
    const rubikLoaded = FONT_WEIGHTS.filter(weight => fontState.rubik[weight] === 'loaded').length;
    const loaded = robotoLoaded + rubikLoaded;
    const total = FONT_WEIGHTS.length * 2; // Both Roboto and Rubik
    return { loaded, total, percentage: Math.round((loaded / total) * 100) };
  }
};
