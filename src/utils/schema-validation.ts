
import { 
  FAQValidationResult, 
  BulkValidationResult, 
  ValidationError, 
  ValidationWarning,
  RichResultsEligibility 
} from '@/types/structured-data';
import { FAQ_URLS, VALIDATION_CONFIG } from '@/constants/faq-validation';

/**
 * Type guard to check if result is a bulk validation result
 */
export const isBulkResult = (result: FAQValidationResult | BulkValidationResult): result is BulkValidationResult => {
  return 'isBulk' in result && result.isBulk === true;
};

/**
 * Type guard to check if result is a single FAQ validation result
 */
export const isSingleResult = (result: FAQValidationResult | BulkValidationResult): result is FAQValidationResult => {
  return !('isBulk' in result);
};

/**
 * Validates FAQ schema for a given URL
 * @param url - The URL to validate
 * @returns Promise<FAQValidationResult> - Validation results
 */
export const validateFAQSchema = async (url: string): Promise<FAQValidationResult> => {
  // Simulate schema validation - in a real implementation, this would:
  // 1. Fetch the page HTML
  // 2. Extract JSON-LD structured data
  // 3. Validate against FAQ schema requirements
  // 4. Check Google's rich results guidelines
  
  console.log(`Validating FAQ schema for: ${url}`);
  
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, VALIDATION_CONFIG.VALIDATION_DELAY));
  
  // Mock validation results based on URL
  const mockResults: FAQValidationResult = {
    isValid: true,
    faqCount: 6,
    validItems: 6,
    errors: [],
    warnings: [],
    url,
    timestamp: new Date().toISOString(),
    recommendations: []
  };

  // Add some mock errors/warnings for demonstration
  if (url.includes('hubspot-modules')) {
    mockResults.isValid = false;
    mockResults.errors = [
      {
        message: 'Missing required "acceptedAnswer" property',
        details: 'FAQ item #3 is missing the acceptedAnswer field',
        fix: 'Add acceptedAnswer with @type: "Answer" and text property'
      }
    ];
    mockResults.warnings = [
      {
        message: 'Answer length exceeds recommended limit',
        recommendation: 'Keep answers under 300 characters for optimal display'
      }
    ];
    mockResults.validItems = 5;
  }

  if (url.includes('data-quality')) {
    mockResults.warnings = [
      {
        message: 'Some answers are very long',
        recommendation: 'Consider breaking long answers into multiple FAQs'
      },
      {
        message: 'Missing @id properties',
        recommendation: 'Add unique @id to each Question for better indexing'
      }
    ];
  }

  return mockResults;
};

/**
 * Validates all FAQ pages in bulk
 * @returns Promise<BulkValidationResult> - Bulk validation results
 */
export const validateAllFAQPages = async (): Promise<BulkValidationResult> => {
  try {
    const results = await Promise.all(
      FAQ_URLS.map(url => validateFAQSchema(url))
    );

    return {
      isBulk: true,
      results,
      urls: [...FAQ_URLS],
      summary: {
        totalPages: FAQ_URLS.length,
        validPages: results.filter(r => r.isValid).length,
        totalFAQs: results.reduce((sum, r) => sum + r.faqCount, 0),
        totalErrors: results.reduce((sum, r) => sum + r.errors.length, 0),
        totalWarnings: results.reduce((sum, r) => sum + r.warnings.length, 0)
      }
    };
  } catch (error) {
    console.error('Bulk validation failed:', error);
    throw new Error('Failed to validate FAQ pages');
  }
};

/**
 * Checks Google Rich Results eligibility for FAQ schema
 * @param schemaData - The schema data to validate
 * @returns RichResultsEligibility - Eligibility results
 */
export const checkGoogleRichResultsEligibility = (schemaData: any): RichResultsEligibility => {
  const requirements = [
    {
      name: 'Valid JSON-LD syntax',
      check: () => true, // Would validate JSON syntax
      required: true
    },
    {
      name: 'FAQ Page schema type',
      check: () => schemaData['@type'] === 'FAQPage',
      required: true
    },
    {
      name: 'Minimum 2 FAQ items',
      check: () => schemaData.mainEntity?.length >= VALIDATION_CONFIG.MIN_FAQ_ITEMS,
      required: true
    },
    {
      name: 'All questions have answers',
      check: () => schemaData.mainEntity?.every((q: any) => q.acceptedAnswer?.text),
      required: true
    },
    {
      name: 'Answer length optimization',
      check: () => schemaData.mainEntity?.every((q: any) => 
        q.acceptedAnswer?.text?.length >= VALIDATION_CONFIG.MIN_ANSWER_LENGTH && 
        q.acceptedAnswer?.text?.length <= VALIDATION_CONFIG.MAX_ANSWER_LENGTH
      ),
      required: false
    }
  ];

  const results = requirements.map(req => ({
    ...req,
    passed: req.check()
  }));

  const requiredPassed = results.filter(r => r.required && r.passed).length;
  const requiredTotal = results.filter(r => r.required).length;
  const isEligible = requiredPassed === requiredTotal;

  return {
    isEligible,
    score: Math.round((results.filter(r => r.passed).length / results.length) * 100),
    requirements: results,
    summary: `${requiredPassed}/${requiredTotal} required checks passed`
  };
};
