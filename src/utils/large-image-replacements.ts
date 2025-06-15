
/**
 * Configuration for images that should preserve their original layout and sizing
 * These images bypass size constraints to maintain design integrity
 */

const LAYOUT_PRESERVING_IMAGES = new Set([
  // Hero section images that need to maintain specific layouts
  '/lovable-uploads/5f3a8bdf-410e-4727-8fa0-eb20abe91242.png',
  '/lovable-uploads/9b9f1c84-13af-4551-96d5-b7a930f008cf.png',
  // Add other critical layout images here
]);

/**
 * Check if an image should preserve its original layout
 */
export const shouldPreserveLayout = (src: string): boolean => {
  return LAYOUT_PRESERVING_IMAGES.has(src);
};

/**
 * Add an image to the layout preservation list
 */
export const addLayoutPreservingImage = (src: string): void => {
  LAYOUT_PRESERVING_IMAGES.add(src);
};

/**
 * Remove an image from the layout preservation list
 */
export const removeLayoutPreservingImage = (src: string): void => {
  LAYOUT_PRESERVING_IMAGES.delete(src);
};
