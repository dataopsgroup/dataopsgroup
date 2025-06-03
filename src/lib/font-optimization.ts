
/**
 * Enhanced font optimization utilities with bifurcated desktop/mobile strategy
 * Mobile: Inter, Desktop: Roboto (body) + Rubik (headlines)
 */

// Enhanced font loading status tracking
type FontStatus = 'unloaded' | 'loading' | 'loaded' | 'error';
type FontWeights = 300 | 400 | 500 | 600 | 700;

interface FontLoadingState {
  inter: Record<FontWeights, FontStatus>;
  roboto: Record<FontWeights, FontStatus>;
  rubik: Record<FontWeights, FontStatus>;
}

// Global font loading state
const fontState: FontLoadingState = {
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

// Predefined font weights array for type safety
const FONT_WEIGHTS: FontWeights[] = [300, 400, 500, 600, 700];

// Device detection
const isMobile = () => {
  if (typeof window === 'undefined') return false;
  return window.innerWidth < 1024;
};

// Enhanced font preloading with device-specific strategy
export const preloadCriticalFonts = () => {
  if (typeof document === 'undefined') return;
  
  const mobile = isMobile();
  const criticalWeights = [400, 600];
  
  if (mobile) {
    // Mobile: Load Inter fonts
    criticalWeights.forEach(weight => {
      const linkWoff2 = document.createElement('link');
      linkWoff2.rel = 'preload';
      linkWoff2.as = 'font';
      linkWoff2.type = 'font/woff2';
      linkWoff2.href = `/fonts/inter-subset/inter-latin-${weight}-normal.woff2`;
      linkWoff2.crossOrigin = 'anonymous';
      linkWoff2.setAttribute('fetchpriority', 'high');
      document.head.appendChild(linkWoff2);
    });
  } else {
    // Desktop: Load Roboto and Rubik fonts
    criticalWeights.forEach(weight => {
      // Preload Roboto
      const robotoLink = document.createElement('link');
      robotoLink.rel = 'preload';
      robotoLink.as = 'font';
      robotoLink.type = 'font/woff2';
      robotoLink.href = `/fonts/roboto-subset/roboto-latin-${weight}-normal.woff2`;
      robotoLink.crossOrigin = 'anonymous';
      robotoLink.setAttribute('fetchpriority', 'high');
      document.head.appendChild(robotoLink);
      
      // Preload Rubik
      const rubikLink = document.createElement('link');
      rubikLink.rel = 'preload';
      rubikLink.as = 'font';
      rubikLink.type = 'font/woff2';
      rubikLink.href = `/fonts/rubik-subset/rubik-latin-${weight}-normal.woff2`;
      rubikLink.crossOrigin = 'anonymous';
      rubikLink.setAttribute('fetchpriority', 'high');
      document.head.appendChild(rubikLink);
    });
  }
};

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

      // Create timeout promise
      const timeoutPromise = new Promise<void>((_, reject) => {
        setTimeout(() => reject(new Error(`Font loading timed out for Inter ${weight}`)), timeout);
      });

      // Race font loading against timeout
      return Promise.race([
        font.load()
          .then(loadedFont => {
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

      return font.load()
        .then(loadedFont => {
          document.fonts.add(loadedFont);
          fontState.roboto[weight] = 'loaded';
          performance.mark(`roboto-font-loaded-${weight}`);
        })
        .catch(err => {
          console.error(`Failed to load Roboto font weight ${weight}:`, err);
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

      return font.load()
        .then(loadedFont => {
          document.fonts.add(loadedFont);
          fontState.rubik[weight] = 'loaded';
          performance.mark(`rubik-font-loaded-${weight}`);
        })
        .catch(err => {
          console.error(`Failed to load Rubik font weight ${weight}:`, err);
          fontState.rubik[weight] = 'error';
        });
    });

    fontPromises = [...robotoPromises, ...rubikPromises];
    
    // Add desktop font class when both font families are loaded
    Promise.all(fontPromises).then(() => {
      document.documentElement.classList.add('font-active-desktop');
    });
  }
  
  try {
    await Promise.all(fontPromises);
    performance.mark('all-fonts-loaded');
  } catch (err) {
    console.warn('Some fonts failed to load:', err);
  }
};

// Enhanced font optimization setup with device bifurcation
export const setupFontOptimization = () => {
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

// Enhanced connection-aware font loading
export const shouldReduceFontLoading = (): boolean => {
  if (typeof navigator === 'undefined') return false;
  
  if ('connection' in navigator) {
    const connection = (navigator as any).connection;
    if (connection) {
      if (connection.saveData) return true;
      if (['slow-2g', '2g'].includes(connection.effectiveType)) return true;
      if (connection.downlink && connection.downlink < 1.5) return true;
    }
  }
  
  return false;
};

// Get current font loading status
export const getFontStatus = (fontFamily: 'inter' | 'roboto' | 'rubik' = 'inter', weight: FontWeights = 400): FontStatus => {
  return fontState[fontFamily][weight];
};

// Get overall font loading progress
export const getFontLoadingProgress = (): { loaded: number; total: number; percentage: number } => {
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
