
/**
 * Font loading implementation using CSS Font Loading API
 */
import type { FontWeights } from './types';
import { fontState } from './state';
import { isMobile } from './device-detection';

// Enhanced CSS Font Loading API implementation with device bifurcation
export const loadFonts = async (
  fontWeights: FontWeights[] = [400, 700], 
  timeout = 3000
): Promise<void> => {
  if (typeof document === 'undefined' || !('fonts' in document)) {
    return;
  }

  const mobile = isMobile();
  let fontPromises: Promise<void>[] = [];

  if (mobile) {
    // Mobile: Load Inter fonts
    fontPromises = fontWeights.map(weight => {
      if (fontState.inter[weight] !== 'unloaded') {
        return Promise.resolve();
      }
      
      fontState.inter[weight] = 'loading';
      
      const font = new FontFace(
        'Inter', 
        `url('/fonts/inter-subset/inter-latin-${weight}-normal.woff2') format('woff2'), 
         url('/fonts/inter-subset/inter-latin-${weight}-normal.woff') format('woff')`,
        { style: 'normal', weight: weight.toString(), display: 'swap' }
      );

      // Create proper timeout promise that returns void
      const timeoutPromise = new Promise<never>((_, reject) => {
        setTimeout(() => reject(new Error(`Font loading timed out for Inter ${weight}`)), timeout);
      });

      // Use Promise.race with proper error handling
      return Promise.race([
        font.load().then(loadedFont => {
          document.fonts.add(loadedFont);
          fontState.inter[weight] = 'loaded';
          document.documentElement.classList.add('font-active-mobile');
          performance.mark(`inter-font-loaded-${weight}`);
        }),
        timeoutPromise
      ]).catch(err => {
        console.warn(`Failed to load Inter font weight ${weight}:`, err);
        fontState.inter[weight] = 'error';
      });
    });
  } else {
    // Desktop: Load Roboto and Rubik fonts
    const robotoPromises = fontWeights.map(weight => {
      if (fontState.roboto[weight] !== 'unloaded') {
        return Promise.resolve();
      }
      
      fontState.roboto[weight] = 'loading';
      
      const font = new FontFace(
        'Roboto', 
        `url('/fonts/roboto-subset/roboto-latin-${weight}-normal.woff2') format('woff2')`,
        { style: 'normal', weight: weight.toString(), display: 'swap' }
      );

      const timeoutPromise = new Promise<never>((_, reject) => {
        setTimeout(() => reject(new Error(`Font loading timed out for Roboto ${weight}`)), timeout);
      });

      return Promise.race([
        font.load().then(loadedFont => {
          document.fonts.add(loadedFont);
          fontState.roboto[weight] = 'loaded';
          performance.mark(`roboto-font-loaded-${weight}`);
        }),
        timeoutPromise
      ]).catch(err => {
        console.warn(`Failed to load Roboto font weight ${weight}:`, err);
        fontState.roboto[weight] = 'error';
      });
    });

    const rubikPromises = fontWeights.map(weight => {
      if (fontState.rubik[weight] !== 'unloaded') {
        return Promise.resolve();
      }
      
      fontState.rubik[weight] = 'loading';
      
      const font = new FontFace(
        'Rubik', 
        `url('/fonts/rubik-subset/rubik-latin-${weight}-normal.woff2') format('woff2')`,
        { style: 'normal', weight: weight.toString(), display: 'swap' }
      );

      const timeoutPromise = new Promise<never>((_, reject) => {
        setTimeout(() => reject(new Error(`Font loading timed out for Rubik ${weight}`)), timeout);
      });

      return Promise.race([
        font.load().then(loadedFont => {
          document.fonts.add(loadedFont);
          fontState.rubik[weight] = 'loaded';
          performance.mark(`rubik-font-loaded-${weight}`);
        }),
        timeoutPromise
      ]).catch(err => {
        console.warn(`Failed to load Rubik font weight ${weight}:`, err);
        fontState.rubik[weight] = 'error';
      });
    });

    fontPromises = [...robotoPromises, ...rubikPromises];
    
    // Add desktop font class when both font families are loaded
    Promise.all(fontPromises).then(() => {
      document.documentElement.classList.add('font-active-desktop');
      document.documentElement.classList.add('desktop-brand-fonts');
    }).catch(err => {
      console.warn('Some desktop fonts failed to load:', err);
      // Still add desktop-brand-fonts class as fallback
      document.documentElement.classList.add('desktop-brand-fonts');
    });
  }
  
  try {
    await Promise.all(fontPromises);
    performance.mark('all-fonts-loaded');
  } catch (err) {
    console.warn('Some fonts failed to load:', err);
  }
};
