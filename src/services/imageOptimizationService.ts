
/**
 * Image optimization service for automatic compression and format conversion
 */

interface OptimizationOptions {
  maxWidth?: number;
  maxHeight?: number;
  quality?: number;
  format?: 'webp' | 'jpeg' | 'png' | 'avif';
  progressive?: boolean;
}

interface OptimizedImageResult {
  optimizedUrl: string;
  originalSize: number;
  optimizedSize: number;
  compressionRatio: number;
  format: string;
}

export class ImageOptimizationService {
  private static instance: ImageOptimizationService;
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;

  constructor() {
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d')!;
  }

  static getInstance(): ImageOptimizationService {
    if (!ImageOptimizationService.instance) {
      ImageOptimizationService.instance = new ImageOptimizationService();
    }
    return ImageOptimizationService.instance;
  }

  /**
   * Optimize an image URL by applying compression and format conversion
   */
  async optimizeImage(
    imageUrl: string, 
    options: OptimizationOptions = {}
  ): Promise<OptimizedImageResult> {
    const {
      maxWidth = 1280,
      maxHeight = 720,
      quality = 0.85,
      format = 'webp',
      progressive = true
    } = options;

    try {
      // Load the original image
      const img = await this.loadImage(imageUrl);
      const originalSize = await this.getImageSize(imageUrl);

      // Calculate optimal dimensions
      const { width, height } = this.calculateOptimalDimensions(
        img.width, 
        img.height, 
        maxWidth, 
        maxHeight
      );

      // Resize and compress
      this.canvas.width = width;
      this.canvas.height = height;
      this.ctx.drawImage(img, 0, 0, width, height);

      // Convert to optimized format
      const optimizedBlob = await this.canvasToBlob(format, quality);
      const optimizedUrl = URL.createObjectURL(optimizedBlob);
      const optimizedSize = optimizedBlob.size;

      return {
        optimizedUrl,
        originalSize,
        optimizedSize,
        compressionRatio: ((originalSize - optimizedSize) / originalSize) * 100,
        format
      };
    } catch (error) {
      console.error('Image optimization failed:', error);
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
   * Generate responsive image variants for different screen sizes
   */
  async generateResponsiveVariants(
    imageUrl: string,
    breakpoints: number[] = [480, 768, 1024, 1280, 1920]
  ): Promise<{ [key: string]: string }> {
    const variants: { [key: string]: string } = {};

    for (const width of breakpoints) {
      try {
        const result = await this.optimizeImage(imageUrl, {
          maxWidth: width,
          quality: width > 1280 ? 0.8 : 0.85, // Lower quality for larger images
          format: 'webp'
        });
        variants[`${width}w`] = result.optimizedUrl;
      } catch (error) {
        console.warn(`Failed to generate ${width}w variant:`, error);
        variants[`${width}w`] = imageUrl; // Fallback to original
      }
    }

    return variants;
  }

  /**
   * Check if an image needs optimization based on file size
   */
  async shouldOptimize(imageUrl: string, maxSizeKB: number = 100): Promise<boolean> {
    try {
      const size = await this.getImageSize(imageUrl);
      return size > maxSizeKB * 1024; // Convert KB to bytes
    } catch {
      return false;
    }
  }

  private loadImage(url: string): Promise<HTMLImageElement> {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.onload = () => resolve(img);
      img.onerror = reject;
      img.src = url;
    });
  }

  private async getImageSize(url: string): Promise<number> {
    try {
      const response = await fetch(url, { method: 'HEAD' });
      const contentLength = response.headers.get('content-length');
      return contentLength ? parseInt(contentLength, 10) : 0;
    } catch {
      return 0;
    }
  }

  private calculateOptimalDimensions(
    originalWidth: number,
    originalHeight: number,
    maxWidth: number,
    maxHeight: number
  ): { width: number; height: number } {
    const aspectRatio = originalWidth / originalHeight;
    
    let width = originalWidth;
    let height = originalHeight;

    // Scale down if larger than max dimensions
    if (width > maxWidth) {
      width = maxWidth;
      height = width / aspectRatio;
    }

    if (height > maxHeight) {
      height = maxHeight;
      width = height * aspectRatio;
    }

    return {
      width: Math.round(width),
      height: Math.round(height)
    };
  }

  private canvasToBlob(format: string, quality: number): Promise<Blob> {
    return new Promise((resolve, reject) => {
      this.canvas.toBlob(
        (blob) => {
          if (blob) {
            resolve(blob);
          } else {
            reject(new Error('Failed to convert canvas to blob'));
          }
        },
        `image/${format}`,
        quality
      );
    });
  }

  /**
   * Clean up object URLs to prevent memory leaks
   */
  cleanup(url: string): void {
    if (url.startsWith('blob:')) {
      URL.revokeObjectURL(url);
    }
  }
}
