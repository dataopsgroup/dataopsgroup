
/**
 * Font optimization utilities for improved font loading performance
 */

// Font loading status tracking
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

// Use the CSS Font Loading API to load fonts programmatically
export const loadFonts = async (
  fontWeights: FontWeights[] = [400, 700], 
  timeout = 3000
): Promise<void> => {
  // Skip if document is not available (SSR) or Font Loading API is not supported
  if (typeof document === 'undefined' || !('fonts' in document)) {
    return;
  }

  // Create a promise for each font weight
  const fontPromises = fontWeights.map(weight => {
    if (fontState.inter[weight] !== 'unloaded') {
      return Promise.resolve(); // Already loaded or loading
    }
    
    fontState.inter[weight] = 'loading';
    
    // Font descriptors for Inter font
    const fontDescriptors: FontFaceDescriptors = {
      style: 'normal',
      weight: weight.toString(),
      display: 'swap'
    };
    
    // Create FontFace instance for the specific weight
    const font = new FontFace(
      'Inter', 
      `url('/fonts/inter-subset/inter-latin-${weight}-normal.woff2') format('woff2'), 
       url('/fonts/inter-subset/inter-latin-${weight}-normal.woff') format('woff')`,
      fontDescriptors
    );

    // Add font to document.fonts and track loading
    return Promise.race([
      font.load()
        .then(loadedFont => {
          document.fonts.add(loadedFont);
          fontState.inter[weight] = 'loaded';
          
          // Apply font-active class when fonts are loaded
          if (document.documentElement) {
            document.documentElement.classList.add('font-active');
            document.documentElement.classList.add(`font-active-${weight}`);
          }
        })
        .catch(err => {
          console.error(`Failed to load Inter font weight ${weight}:`, err);
          fontState.inter[weight] = 'error';
        }),
      // Timeout to avoid waiting too long
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
  } catch (err) {
    console.warn('Some fonts failed to load:', err);
  }
};

// Get current font loading status
export const getFontStatus = (weight: FontWeights = 400): FontStatus => {
  return fontState.inter[weight];
};

// Optimize font loading based on current page needs
export const setupFontOptimization = () => {
  if (typeof document === 'undefined') return;
  
  // Add CSS class to indicate fonts haven't loaded yet
  document.documentElement.classList.add('fonts-pending');
  
  // Load critical fonts immediately
  loadFonts([400, 700])
    .then(() => {
      // Load secondary fonts after critical fonts
      setTimeout(() => {
        loadFonts([300, 500, 600]);
      }, 1000);
    });
  
  // Handle font loading failures by removing waiting class after timeout
  setTimeout(() => {
    document.documentElement.classList.remove('fonts-pending');
  }, 3000); // 3 second timeout as maximum wait
};

// Detect user preferences for reduced data usage
export const shouldReduceFontLoading = (): boolean => {
  // Use Save-Data header when available
  if (typeof navigator !== 'undefined' && 'connection' in navigator) {
    const connection = (navigator as any).connection;
    if (connection && connection.saveData) {
      return true; // User has activated data saving mode
    }
    
    // Check for slow connections
    if (connection && (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g')) {
      return true;
    }
  }
  
  return false;
};
