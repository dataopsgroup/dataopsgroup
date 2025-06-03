
/**
 * Font loading state management
 */
import type { FontLoadingState, FontStatus, FontWeights } from './types';

// Global font loading state
export const fontState: FontLoadingState = {
  inter: {
    300: 'unloaded',
    400: 'unloaded',
    500: 'unloaded',
    600: 'unloaded',
    700: 'unloaded',
  },
  roboto: {
    300: 'unloaded',
    400: 'unloaded',
    500: 'unloaded',
    600: 'unloaded',
    700: 'unloaded',
  },
  rubik: {
    300: 'unloaded',
    400: 'unloaded',
    500: 'unloaded',
    600: 'unloaded',
    700: 'unloaded',
  }
};

// Get current font loading status
export const getFontStatus = (fontFamily: 'inter' | 'roboto' | 'rubik' = 'inter', weight: FontWeights = 400): FontStatus => {
  return fontState[fontFamily][weight];
};
