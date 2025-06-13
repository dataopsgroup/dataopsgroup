
/**
 * Enhanced image optimization for fixing Ahrefs large image issues
 * Targets images over 1MB with aggressive optimization while preserving quality
 */

interface LargeImageOptimizationOptions {
  maxSizeKB: number;
  quality: number;
  maxWidth: number;
  format: 'webp' | 'jpeg' | 'png';
  preserveAspectRatio: boolean;
}

interface OptimizationResult {
  optimizedUrl: string;
  originalSize: number;
  optimizedSize: number;
  compressionRatio: number;
  success: boolean;
}

// Known large images that need optimization (from Ahrefs report)
const LARGE_IMAGES_TO_OPTIMIZE = [
  '/lovable-uploads/9b9f1c84-13af-4551-96d5-b7a930f008cf.png',
  '/lovable-uploads/5f3a8bdf-410e-4727-8fa0-eb20abe91242.png',
  // Add other large images as identified
];

/**
 * Check if an image should be optimized based on known large files
 */
export const shouldOptimizeImage = (src: string): boolean => {
  return LARGE_IMAGES_TO_OPTIMIZE.some(largeImage => src.includes(largeImage));
};

/**
 * Get optimized settings for different image contexts
 */
export const getOptimizationSettings = (context: 'hero' | 'logo' | 'content' | 'thumbnail'): LargeImageOptimizationOptions => {
  const settings: Record<string, LargeImageOptimizationOptions> = {
    hero: {
      maxSizeKB: 400, // Aggressive for hero images
      quality: 0.75,  // Lower quality for large display
      maxWidth: 1920,
      format: 'webp',
      preserveAspectRatio: true
    },
    logo: {
      maxSizeKB: 50,   // Very strict for logos
      quality: 0.9,    // High quality for small logos
      maxWidth: 400,
      format: 'webp',
      preserveAspectRatio: true
    },
    content: {
      maxSizeKB: 200,  // Moderate for content images
      quality: 0.85,
      maxWidth: 1200,
      format: 'webp',
      preserveAspectRatio: true
    },
    thumbnail: {
      maxSizeKB: 50,   // Very small for thumbnails
      quality: 0.8,
      maxWidth: 300,
      format: 'webp',
      preserveAspectRatio: true
    }
  };
  
  return settings[context];
};

/**
 * Optimize a large image using canvas-based compression
 */
export const optimizeLargeImage = async (
  imageUrl: string,
  options: LargeImageOptimizationOptions
): Promise<OptimizationResult> => {
  try {
    // Load the original image
    const img = await loadImageElement(imageUrl);
    const originalSize = await estimateImageSize(imageUrl);
    
    // Create canvas for optimization
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    if (!ctx) {
      throw new Error('Cannot get canvas context');
    }
    
    // Calculate optimal dimensions
    const { width, height } = calculateOptimalDimensions(
      img.naturalWidth,
      img.naturalHeight,
      options.maxWidth,
      options.preserveAspectRatio
    );
    
    // Set canvas size and draw image
    canvas.width = width;
    canvas.height = height;
    ctx.drawImage(img, 0, 0, width, height);
    
    // Convert to optimized format
    const optimizedBlob = await canvasToOptimizedBlob(canvas, options);
    const optimizedUrl = URL.createObjectURL(optimizedBlob);
    const optimizedSize = optimizedBlob.size;
    
    return {
      optimizedUrl,
      originalSize,
      optimizedSize,
      compressionRatio: ((originalSize - optimizedSize) / originalSize) * 100,
      success: true
    };
  } catch (error) {
    console.error('Large image optimization failed:', error);
    return {
      optimizedUrl: imageUrl,
      originalSize: 0,
      optimizedSize: 0,
      compressionRatio: 0,
      success: false
    };
  }
};

/**
 * Load image element from URL
 */
const loadImageElement = (url: string): Promise<HTMLImageElement> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error(`Failed to load image: ${url}`));
    img.src = url;
  });
};

/**
 * Estimate image file size
 */
const estimateImageSize = async (url: string): Promise<number> => {
  try {
    const response = await fetch(url, { method: 'HEAD' });
    const contentLength = response.headers.get('content-length');
    return contentLength ? parseInt(contentLength, 10) : 0;
  } catch {
    return 0;
  }
};

/**
 * Calculate optimal dimensions for image
 */
const calculateOptimalDimensions = (
  originalWidth: number,
  originalHeight: number,
  maxWidth: number,
  preserveAspectRatio: boolean
): { width: number; height: number } => {
  if (!preserveAspectRatio) {
    return { width: Math.min(originalWidth, maxWidth), height: originalHeight };
  }
  
  const aspectRatio = originalWidth / originalHeight;
  let width = originalWidth;
  let height = originalHeight;
  
  if (width > maxWidth) {
    width = maxWidth;
    height = width / aspectRatio;
  }
  
  return {
    width: Math.round(width),
    height: Math.round(height)
  };
};

/**
 * Convert canvas to optimized blob
 */
const canvasToOptimizedBlob = (
  canvas: HTMLCanvasElement,
  options: LargeImageOptimizationOptions
): Promise<Blob> => {
  return new Promise((resolve, reject) => {
    canvas.toBlob(
      (blob) => {
        if (blob) {
          resolve(blob);
        } else {
          reject(new Error('Failed to create optimized blob'));
        }
      },
      `image/${options.format}`,
      options.quality
    );
  });
};

/**
 * Batch optimize multiple large images
 */
export const batchOptimizeLargeImages = async (
  imageUrls: string[],
  context: 'hero' | 'logo' | 'content' | 'thumbnail' = 'content'
): Promise<Record<string, OptimizationResult>> => {
  const results: Record<string, OptimizationResult> = {};
  const settings = getOptimizationSettings(context);
  
  for (const url of imageUrls) {
    if (shouldOptimizeImage(url)) {
      results[url] = await optimizeLargeImage(url, settings);
    }
  }
  
  return results;
};

export default {
  shouldOptimizeImage,
  getOptimizationSettings,
  optimizeLargeImage,
  batchOptimizeLargeImages
};
