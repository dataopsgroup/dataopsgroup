
export interface ValidationError {
  message: string;
  details: string;
  fix: string;
}

export interface ValidationWarning {
  message: string;
  recommendation: string;
}

export interface FAQValidationResult {
  isValid: boolean;
  faqCount: number;
  validItems: number;
  errors: ValidationError[];
  warnings: ValidationWarning[];
  url: string;
  timestamp: string;
  recommendations: string[];
}

export interface BulkValidationResult {
  isBulk: true;
  results: FAQValidationResult[];
  urls: string[];
  summary: {
    totalPages: number;
    validPages: number;
    totalFAQs: number;
    totalErrors: number;
    totalWarnings: number;
  };
}

export type ValidationResult = FAQValidationResult | BulkValidationResult;

export interface RichResultsRequirement {
  name: string;
  check: () => boolean;
  required: boolean;
  passed?: boolean;
}

export interface RichResultsEligibility {
  isEligible: boolean;
  score: number;
  requirements: RichResultsRequirement[];
  summary: string;
}

export interface HealthMetric {
  label: string;
  value: number;
  trend: 'up' | 'down';
  description: string;
}

export interface OptimizationRecommendation {
  priority: 'High' | 'Medium' | 'Low';
  title: string;
  description: string;
  impact: 'High' | 'Medium' | 'Low';
  effort: 'High' | 'Medium' | 'Low';
}
