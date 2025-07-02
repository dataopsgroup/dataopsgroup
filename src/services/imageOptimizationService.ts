/**
 * Vercel-optimized image service for automatic compression and format conversion
 */

interface VercelOptimizationOptions {
  width?: number;
  height?: number;
  quality?: number;
  format?: 'webp' | 'avif' | 'auto' | 'jpeg' | 'png';
  fit?: 'cover' | 'contain' | 'fill' | 'inside' | 'outside';
}

interface OptimizedImageResult {
  optimizedUrl: string;
  originalSize: number;
  optimizedSize: number;
  compressionRatio: number;
  format: string;
}

export class VercelImageOptimizationService {
  private static instance: VercelImageOptimizationService;

  static getInstance(): VercelImageOptimizationService {
    if (!VercelImageOptimizationService.instance) {
      VercelImageOptimizationService.instance = new VercelImageOptimizationService();
    }
    return VercelImageOptimizationService.instance;
  }

  /**
   * Optimize an image using Vercel's built-in optimization with enhanced WebP conversion
   */
  optimizeImage(
    imageUrl: string, 
    options: VercelOptimizationOptions = {}
  ): OptimizedImageResult {
    const {
      width,
      height,
      quality = 75, // More aggressive default quality for better compression
      format = 'webp', // Always default to WebP
      fit = 'cover'
    } = options;

    try {
      // Build Vercel optimization parameters
      const params = new URLSearchParams();
      
      if (width) params.append('w', width.toString());
      if (height) params.append('h', height.toString());
      params.append('q', quality.toString());
      
      // Force WebP format for better compression
      params.append('f', 'webp');
      if (fit !== 'cover') params.append('fit', fit);

      // For Vercel deployment, use the _next/image endpoint
      const optimizedUrl = `/_next/image?url=${encodeURIComponent(imageUrl)}&${params.toString()}`;

      return {
        optimizedUrl,
        originalSize: 0, // Estimated, real size would need API call
        optimizedSize: 0, // Estimated based on quality setting
        compressionRatio: this.estimateCompressionRatio(quality, 'webp'),
        format: 'webp'
      };
    } catch (error) {
      console.warn('Vercel image optimization failed:', error);
      // Return original image as fallback
      return {
        optimizedUrl: imageUrl,
        originalSize: 0,
        optimizedSize: 0,
        compressionRatio: 0,
        format: 'original'
      };
    }
  }

  /**
   * Map input formats to Vercel-supported formats
   */
  private mapToVercelFormat(format: string): string {
    switch (format) {
      case 'jpeg':
      case 'jpg':
        return 'webp'; // Convert JPEG to WebP for better compression
      case 'png':
        return 'webp'; // Convert PNG to WebP for better compression
      case 'webp':
        return 'webp';
      case 'avif':
        return 'avif';
      default:
        return 'webp'; // Default to WebP instead of auto
    }
  }

  /**
   * Check if an image should be optimized based on file size indicators
   */
  shouldOptimize(imageUrl: string): boolean => {
    if (!imageUrl) return false;
    
    // Always optimize PNG files larger than typical blog images
    if (imageUrl.includes('.png') && !imageUrl.includes('logo')) {
      return true;
    }
    
    // Check for large file indicators
    return (
      imageUrl.includes('large') || 
      imageUrl.includes('4k') || 
      imageUrl.includes('full-size') ||
      imageUrl.includes('hero') ||
      imageUrl.includes('cover') ||
      // Specific large images identified by Ahrefs
      imageUrl.includes('b7abeb4e-bdb9-4d8f-9c53-bc21d411f2f4') ||
      imageUrl.includes('26cea183-e8de-4d91-8678-a75233402192') ||
      imageUrl.includes('dc1dbbad-be41-4dbb-8dd8-381cc59a869c') ||
      imageUrl.includes('124706e5-20d8-43a1-92a0-d4d65389187b') ||
      imageUrl.includes('434400a1-30b5-4562-ae95-9a7ef18306ee')
    );
  }

  /**
   * Estimate compression ratio based on quality and format
   */
  private estimateCompressionRatio(quality: number, format: string): number {
    const baseCompression = {
      'webp': 45, // More aggressive WebP compression estimate
      'avif': 60, // AVIF typically 60% smaller than JPEG
      'jpeg': 0,
      'png': -20, // PNG typically larger than JPEG
    };
    
    const qualityFactor = (100 - quality) * 0.8; // More aggressive quality factor
    return (baseCompression[format as keyof typeof baseCompression] || 0) + qualityFactor;
  }

  /**
   * Get optimization settings for different contexts with more aggressive compression
   */
  getOptimizationSettings(context: string): VercelOptimizationOptions {
    const settings = {
      hero: { width: 1200, height: 600, quality: 80, format: 'webp' as const },
      'blog-cover': { width: 800, height: 400, quality: 70, format: 'webp' as const }, // More aggressive
      content: { width: 600, height: 400, quality: 75, format: 'webp' as const },
      thumbnail: { width: 300, height: 200, quality: 70, format: 'webp' as const },
      logo: { width: 200, height: 100, quality: 85, format: 'webp' as const }
    };
    
    return settings[context as keyof typeof settings] || settings.content;
  }

  /**
   * Generate responsive image variants
   */
  generateResponsiveVariants(src: string): { [key: string]: string } {
    const variants: { [key: string]: string } = {};
    
    // Generate different sizes for responsive images
    const sizes = [
      { suffix: 'sm', width: 400 },
      { suffix: 'md', width: 800 },
      { suffix: 'lg', width: 1200 },
      { suffix: 'xl', width: 1600 }
    ];
    
    sizes.forEach(size => {
      const result = this.optimizeImage(src, { 
        width: size.width, 
        format: 'webp',
        quality: 80 
      });
      variants[size.suffix] = result.optimizedUrl;
    });
    
    return variants;
  }
}

export const vercelImageOptimizer = VercelImageOptimizationService.getInstance();
