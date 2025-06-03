
export const FAQ_URLS = [
  '/faqs',
  '/faqs/hubspot-services',
  '/faqs/hubspot-experts',
  '/faqs/data-quality',
  '/faqs/our-approach',
  '/faqs/hubspot-modules'
] as const;

export const VALIDATION_CONFIG = {
  MIN_ANSWER_LENGTH: 40,
  MAX_ANSWER_LENGTH: 300,
  MIN_FAQ_ITEMS: 2,
  VALIDATION_DELAY: 1500
} as const;

export const HEALTH_SCORE_THRESHOLDS = {
  EXCELLENT: 90,
  GOOD: 75,
  FAIR: 60
} as const;

export const PERFORMANCE_PENALTIES = {
  ERROR_PENALTY: 10,
  WARNING_PENALTY: 5
} as const;
