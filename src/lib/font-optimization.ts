
/**
 * Enhanced font optimization utilities with balanced performance for all devices
 * Implements consistent font loading strategy and proper fallback handling
 */

// Enhanced font loading status tracking
type FontStatus = 'unloaded' | 'loading' | 'loaded' | 'error';
type FontWeights = 300 | 400 | 500 | 600 | 700;

interface FontLoadingState {
  inter: Record<FontWeights, FontStatus>;
}

// Global font loading state
const fontState: FontLoadingState = {
  inter: {
    300: 'unloaded',
    400: 'unloaded',
    500: 'unloaded',
    600: 'unloaded',
    700: 'unloaded',
  }
};

// Predefined font weights array for type safety
const FONT_WEIGHTS: FontWeights[] = [300, 400, 500, 600, 700];

// Enhanced font preloading with consistent strategy
export const preloadCriticalFonts = () => {
  if (typeof document === 'undefined') return;
  
  // Universal critical font weights for all devices
  const criticalWeights = [400, 600];
  
  criticalWeights.forEach(weight => {
    // Preload WOFF2 (primary)
    const linkWoff2 = document.createElement('link');
    linkWoff2.rel = 'preload';
    linkWoff2.as = 'font';
    linkWoff2.type = 'font/woff2';
    linkWoff2.href = `/fonts/inter-subset/inter-latin-${weight}-normal.woff2`;
    linkWoff2.crossOrigin = 'anonymous';
    linkWoff2.setAttribute('fetchpriority', 'high');
    
    // Preload WOFF (fallback)
    const linkWoff = document.createElement('link');
    linkWoff.rel = 'preload';
    linkWoff.as = 'font';
    linkWoff.type = 'font/woff';
    linkWoff.href = `/fonts/inter-subset/inter-latin-${weight}-normal.woff`;
    linkWoff.crossOrigin = 'anonymous';
    linkWoff.setAttribute('fetchpriority', 'low');
    
    document.head.appendChild(linkWoff2);
    document.head.appendChild(linkWoff);
  });
};

// Enhanced CSS Font Loading API implementation
export const loadFonts = async (
  fontWeights: FontWeights[] = [400, 700], 
  timeout = 3000
): Promise<void> => {
  if (typeof document === 'undefined' || !('fonts' in document)) {
    return;
  }

  const fontPromises = fontWeights.map(weight => {
    if (fontState.inter[weight] !== 'unloaded') {
      return Promise.resolve();
    }
    
    fontState.inter[weight] = 'loading';
    
    const fontDescriptors: FontFaceDescriptors = {
      style: 'normal',
      weight: weight.toString(),
      display: 'swap'
    };
    
    const font = new FontFace(
      'Inter', 
      `url('/fonts/inter-subset/inter-latin-${weight}-normal.woff2') format('woff2'), 
       url('/fonts/inter-subset/inter-latin-${weight}-normal.woff') format('woff')`,
      fontDescriptors
    );

    return Promise.race([
      font.load()
        .then(loadedFont => {
          document.fonts.add(loadedFont);
          fontState.inter[weight] = 'loaded';
          
          // Universal font-active class for all devices
          document.documentElement.classList.add('font-active');
          document.documentElement.classList.add(`font-active-${weight}`);
          
          // Performance mark for monitoring
          performance.mark(`font-loaded-${weight}`);
        })
        .catch(err => {
          console.error(`Failed to load Inter font weight ${weight}:`, err);
          fontState.inter[weight] = 'error';
        }),
      new Promise((_, reject) => 
        setTimeout(() => reject(new Error(`Font loading timed out for Inter ${weight}`)), timeout)
      ).catch(err => {
        console.warn(err);
        fontState.inter[weight] = 'error';
      })
    ]);
  });
  
  try {
    await Promise.all(fontPromises);
    performance.mark('all-fonts-loaded');
  } catch (err) {
    console.warn('Some fonts failed to load:', err);
  }
};

// Enhanced font optimization setup with consistent strategy
export const setupFontOptimization = () => {
  if (typeof document === 'undefined') return;
  
  // Universal font loading classes
  document.documentElement.classList.add('fonts-pending');
  
  // Preload critical fonts immediately
  preloadCriticalFonts();
  
  // Load critical fonts with consistent strategy
  loadFonts([400, 700])
    .then(() => {
      // Progressive enhancement - load additional weights
      setTimeout(() => {
        loadFonts([300, 500, 600]);
      }, 1000);
    })
    .finally(() => {
      // Remove pending class after timeout to prevent indefinite waiting
      setTimeout(() => {
        document.documentElement.classList.remove('fonts-pending');
      }, 3000);
    });
};

// Enhanced connection-aware font loading
export const shouldReduceFontLoading = (): boolean => {
  if (typeof navigator === 'undefined') return false;
  
  // Check for data saving preferences
  if ('connection' in navigator) {
    const connection = (navigator as any).connection;
    if (connection) {
      // Respect save-data header
      if (connection.saveData) return true;
      
      // Optimize for slow connections universally
      if (['slow-2g', '2g'].includes(connection.effectiveType)) return true;
      
      // Consider bandwidth limitations
      if (connection.downlink && connection.downlink < 1.5) return true;
    }
  }
  
  return false;
};

// Get current font loading status
export const getFontStatus = (weight: FontWeights = 400): FontStatus => {
  return fontState.inter[weight];
};

// Get overall font loading progress - Fixed TypeScript error
export const getFontLoadingProgress = (): { loaded: number; total: number; percentage: number } => {
  const loaded = FONT_WEIGHTS.filter(weight => fontState.inter[weight] === 'loaded').length;
  const total = FONT_WEIGHTS.length;
  
  return {
    loaded,
    total,
    percentage: Math.round((loaded / total) * 100)
  };
};
