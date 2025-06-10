
/**
 * Configuration for interaction-based loading optimizations
 */

export interface InteractionLoadingConfig {
  lazyThreshold: number;
  preloadDelay: number;
  interactionTypes: string[];
  enablePrefetch: boolean;
}

// Universal configuration for all devices
export const UNIVERSAL_CONFIG: InteractionLoadingConfig = {
  lazyThreshold: 0.15, // Consistent 15% threshold for all devices
  preloadDelay: 50, // Universal 50ms delay for smooth interactions
  interactionTypes: ['mouseenter', 'touchstart', 'focus'], // Support both mouse and touch
  enablePrefetch: true
};
