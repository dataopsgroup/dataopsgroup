
/**
 * Main image utilities module that exports all image-related functions
 */

// Format detection and optimization
export {
  supportsImageFormat,
  getOptimalFormat,
  getImageFormat
} from './format-detection';

// Srcset generation and sizing
export {
  generateSrcSet,
  calculateOptimalSizes
} from './srcset-generation';

// Image optimization and quality
export {
  getOptimalQuality,
  getImageSrc,
  isRemoteImage,
  isLocalAsset
} from './optimization';

// Preloading and performance
export {
  reportLCPMetric,
  preloadCriticalImage
} from './preloading';
