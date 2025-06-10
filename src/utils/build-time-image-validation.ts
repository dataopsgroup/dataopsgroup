
/**
 * Build-time image validation to catch oversized images before deployment
 */

interface ImageValidationResult {
  path: string;
  size: number;
  isOversized: boolean;
  recommendedMaxSize: number;
  context: string;
}

// Size limits for different contexts (in bytes)
const SIZE_LIMITS = {
  hero: 500000,        // 500KB
  'blog-cover': 200000, // 200KB
  thumbnail: 100000,    // 100KB
  logo: 50000,         // 50KB
  content: 300000      // 300KB
};

/**
 * Validate image sizes during build process
 */
export const validateImageSizes = async (imagePaths: string[]): Promise<ImageValidationResult[]> => {
  const results: ImageValidationResult[] = [];
  
  for (const path of imagePaths) {
    try {
      // In a real build environment, you would check actual file sizes
      // For now, we'll simulate based on path patterns
      const context = determineImageContext(path);
      const maxSize = SIZE_LIMITS[context as keyof typeof SIZE_LIMITS] || SIZE_LIMITS.content;
      
      // Simulate size check (in real implementation, use fs.statSync)
      const estimatedSize = estimateImageSize(path);
      
      results.push({
        path,
        size: estimatedSize,
        isOversized: estimatedSize > maxSize,
        recommendedMaxSize: maxSize,
        context
      });
    } catch (error) {
      console.warn(`Failed to validate image: ${path}`, error);
    }
  }
  
  return results;
};

/**
 * Determine image context based on file path
 */
const determineImageContext = (path: string): string => {
  if (path.includes('hero') || path.includes('banner')) return 'hero';
  if (path.includes('logo')) return 'logo';
  if (path.includes('thumbnail') || path.includes('thumb')) return 'thumbnail';
  if (path.includes('cover') || path.includes('featured')) return 'blog-cover';
  return 'content';
};

/**
 * Estimate image size based on filename patterns (placeholder implementation)
 */
const estimateImageSize = (path: string): number => {
  // In real implementation, this would read actual file size
  // For now, we'll estimate based on common patterns
  
  if (path.includes('4k') || path.includes('large') || path.includes('full')) {
    return 800000; // 800KB
  }
  if (path.includes('medium') || path.includes('cover')) {
    return 300000; // 300KB
  }
  if (path.includes('small') || path.includes('thumb')) {
    return 50000; // 50KB
  }
  
  // Default estimate
  return 200000; // 200KB
};

/**
 * Generate build warnings for oversized images
 */
export const generateImageWarnings = (results: ImageValidationResult[]): string[] => {
  const warnings: string[] = [];
  const oversizedImages = results.filter(r => r.isOversized);
  
  if (oversizedImages.length > 0) {
    warnings.push(`⚠️  Found ${oversizedImages.length} oversized images:`);
    
    oversizedImages.forEach(img => {
      const sizeMB = (img.size / 1024 / 1024).toFixed(2);
      const maxSizeMB = (img.recommendedMaxSize / 1024 / 1024).toFixed(2);
      warnings.push(`   • ${img.path}: ${sizeMB}MB (max: ${maxSizeMB}MB for ${img.context})`);
    });
    
    warnings.push('');
    warnings.push('💡 Recommendations:');
    warnings.push('   • Use OptimizedImage component for automatic compression');
    warnings.push('   • Convert images to WebP format');
    warnings.push('   • Resize images to appropriate dimensions');
    warnings.push('   • Consider using progressive JPEG for large photos');
  }
  
  return warnings;
};

/**
 * Check if build should fail due to image sizes
 */
export const shouldFailBuild = (results: ImageValidationResult[]): boolean => {
  const criticallyOversized = results.filter(r => 
    r.isOversized && r.size > r.recommendedMaxSize * 2 // More than 2x the limit
  );
  
  return criticallyOversized.length > 0;
};
