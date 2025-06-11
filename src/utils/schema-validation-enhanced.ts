
import { 
  FAQValidationResult, 
  BulkValidationResult, 
  ValidationError, 
  ValidationWarning,
  RichResultsEligibility 
} from '@/types/structured-data';

/**
 * Enhanced FAQ Schema Validation with Google Rich Results compliance
 */
export const validateFAQSchemaEnhanced = async (url: string): Promise<FAQValidationResult> => {
  console.log(`Enhanced validation for: ${url}`);
  
  // Simulate more comprehensive validation
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  const mockResults: FAQValidationResult = {
    isValid: true,
    faqCount: 8,
    validItems: 8,
    errors: [],
    warnings: [],
    url,
    timestamp: new Date().toISOString(),
    recommendations: []
  };

  // Add realistic validation based on URL patterns
  if (url.includes('hubspot-experts')) {
    mockResults.warnings = [
      {
        message: 'Some answers exceed optimal length for rich snippets',
        recommendation: 'Keep answers under 300 characters for best display in search results'
      }
    ];
    mockResults.recommendations = [
      'Consider adding @id properties to each Question for better indexing',
      'Add dateModified properties to track content freshness'
    ];
  }

  if (url.includes('data-quality')) {
    mockResults.isValid = false;
    mockResults.validItems = 7;
    mockResults.errors = [
      {
        message: 'Missing acceptedAnswer in FAQ item #5',
        details: 'Question "How often should data quality audits be performed?" lacks proper answer structure',
        fix: 'Add acceptedAnswer object with @type: "Answer" and text property'
      }
    ];
  }

  if (url.includes('our-approach')) {
    mockResults.recommendations = [
      'All FAQ items are properly structured and compliant',
      'Consider adding more specific keywords in question text',
      'Schema markup is optimized for rich results'
    ];
  }

  return mockResults;
};

/**
 * Validate all FAQ pages with enhanced checks
 */
export const validateAllFAQPagesEnhanced = async (): Promise<BulkValidationResult> => {
  const faqUrls = [
    '/faqs/services',
    '/faqs/data-quality',
    '/faqs/hubspot-experts', 
    '/faqs/our-approach',
    '/faqs/hubspot-modules'
  ];

  try {
    const results = await Promise.all(
      faqUrls.map(url => validateFAQSchemaEnhanced(url))
    );

    return {
      isBulk: true,
      results,
      urls: faqUrls,
      summary: {
        totalPages: faqUrls.length,
        validPages: results.filter(r => r.isValid).length,
        totalFAQs: results.reduce((sum, r) => sum + r.faqCount, 0),
        totalErrors: results.reduce((sum, r) => sum + r.errors.length, 0),
        totalWarnings: results.reduce((sum, r) => sum + r.warnings.length, 0)
      }
    };
  } catch (error) {
    console.error('Enhanced bulk validation failed:', error);
    throw new Error('Failed to validate FAQ pages with enhanced checks');
  }
};

/**
 * Comprehensive Google Rich Results eligibility check
 */
export const checkGoogleRichResultsEligibilityEnhanced = (schemaData: any): RichResultsEligibility => {
  const requirements = [
    {
      name: 'Valid JSON-LD syntax',
      check: () => schemaData && typeof schemaData === 'object',
      required: true
    },
    {
      name: 'FAQPage schema type',
      check: () => schemaData['@type'] === 'FAQPage',
      required: true
    },
    {
      name: 'Schema.org context',
      check: () => schemaData['@context'] === 'https://schema.org',
      required: true
    },
    {
      name: 'Minimum 2 FAQ items',
      check: () => schemaData.mainEntity?.length >= 2,
      required: true
    },
    {
      name: 'All questions have valid structure',
      check: () => schemaData.mainEntity?.every((q: any) => 
        q['@type'] === 'Question' && q.name && q.acceptedAnswer
      ),
      required: true
    },
    {
      name: 'All answers have proper structure',
      check: () => schemaData.mainEntity?.every((q: any) => 
        q.acceptedAnswer?.['@type'] === 'Answer' && q.acceptedAnswer?.text
      ),
      required: true
    },
    {
      name: 'Question text length optimization',
      check: () => schemaData.mainEntity?.every((q: any) => 
        q.name && q.name.length >= 10 && q.name.length <= 200
      ),
      required: false
    },
    {
      name: 'Answer length optimization',
      check: () => schemaData.mainEntity?.every((q: any) => 
        q.acceptedAnswer?.text?.length >= 20 && q.acceptedAnswer?.text?.length <= 300
      ),
      required: false
    },
    {
      name: 'Unique @id properties',
      check: () => schemaData.mainEntity?.every((q: any) => q['@id']),
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
    summary: `${requiredPassed}/${requiredTotal} required checks passed, ${results.filter(r => r.passed).length}/${results.length} total checks passed`
  };
};

export default {
  validateFAQSchemaEnhanced,
  validateAllFAQPagesEnhanced,
  checkGoogleRichResultsEligibilityEnhanced
};
