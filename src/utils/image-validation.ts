
/**
 * Image validation utilities to prevent large images from impacting performance
 */

import { isLargeImage, getOptimizedImageSrc, type ImageContext } from './large-image-replacements';

interface ImageValidationResult {
  isValid: boolean;
  issues: string[];
  recommendations: string[];
  optimizedSrc?: string;
}

/**
 * Validate an image source for performance best practices
 */
export const validateImageSrc = (src: string, context: ImageContext = 'content'): ImageValidationResult => {
  const result: ImageValidationResult = {
    isValid: true,
    issues: [],
    recommendations: []
  };

  if (!src) {
    result.isValid = false;
    result.issues.push('Missing image source');
    return result;
  }

  // Check if this is a known large image
  if (isLargeImage(src)) {
    const optimizedSrc = getOptimizedImageSrc(src, context);
    
    if (optimizedSrc !== src) {
      result.isValid = false;
      result.issues.push('Using unoptimized version of large image');
      result.recommendations.push(`Use optimized version: ${optimizedSrc}`);
      result.optimizedSrc = optimizedSrc;
    }
  }

  // Check file extension for modern formats
  if (src.endsWith('.png') && !src.includes('logo') && !src.includes('icon')) {
    result.recommendations.push('Consider using WebP format for better compression');
  }

  // Check for potential size issues based on filename patterns
  if (src.includes('large') || src.includes('4k') || src.includes('full-size')) {
    result.issues.push('Filename suggests this may be a large image');
    result.recommendations.push('Verify image is properly optimized');
  }

  return result;
};

/**
 * Get the best image source with automatic optimization
 */
export const getBestImageSrc = (src: string, context: ImageContext = 'content'): string => {
  if (!src) return '';
  
  // If it's a known large image, return the optimized version
  if (isLargeImage(src)) {
    return getOptimizedImageSrc(src, context);
  }
  
  return src;
};

/**
 * Log image validation warnings in development
 */
export const logImageValidation = (src: string, context: string = 'unknown') => {
  if (process.env.NODE_ENV !== 'development') return;
  
  const validation = validateImageSrc(src, context as ImageContext);
  
  if (!validation.isValid || validation.recommendations.length > 0) {
    console.group(`Image Validation: ${src}`);
    console.log(`Context: ${context}`);
    
    if (validation.issues.length > 0) {
      console.warn('Issues:', validation.issues);
    }
    
    if (validation.recommendations.length > 0) {
      console.info('Recommendations:', validation.recommendations);
    }
    
    if (validation.optimizedSrc) {
      console.info('Optimized version available:', validation.optimizedSrc);
    }
    
    console.groupEnd();
  }
};
