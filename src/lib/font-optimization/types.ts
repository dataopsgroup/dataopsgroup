
/**
 * Font optimization type definitions
 */

export type FontStatus = 'unloaded' | 'loading' | 'loaded' | 'error';
export type FontWeights = 300 | 400 | 500 | 600 | 700;

export interface FontLoadingState {
  inter: Record<FontWeights, FontStatus>;
  roboto: Record<FontWeights, FontStatus>;
  rubik: Record<FontWeights, FontStatus>;
}

export interface FontLoadingProgress {
  loaded: number;
  total: number;
  percentage: number;
}
