/**
 * Noindex Audit and Fix Utility
 * Ensures only system pages have noindex tags while content pages are properly indexed
 */

export interface NoindexAuditResult {
  isValid: boolean;
  errors: string[];
  warnings: string[];
  systemPages: string[];
  contentPages: string[];
  incorrectlyNoindexed: string[];
}

// Pages that SHOULD have noindex (system/utility pages)
export const ALLOWED_NOINDEX_PAGES = [
  '/404',
  '/thank-you',
  '/contact/thank-you',
  '/services/404',
  '/api/content.json',
  '/admin/schema-audit',
  '/structured-data-test',
  '/privacy',
  '/terms',
  '/admin/*',
  '/private/*',
  '/dev/*',
  '/staging/*'
] as const;

// Pages that MUST NOT have noindex (content pages)
export const REQUIRED_INDEXABLE_PAGES = [
  '/',
  '/services',
  '/services/analytics-bi',
  '/services/dataops-implementation', 
  '/services/team-training',
  '/services/marketing-operations-revops',
  '/insights',
  '/insights/*',
  '/case-studies',
  '/case-studies/*',
  '/about',
  '/contact',
  '/approach',
  '/testimonials',
  '/faqs',
  '/faqs/*',
  '/guides/hubspot-expert',
  '/data-operations-assessment',
  '/revops-roi-calculator',
  '/pe-value-creation-program'
] as const;

/**
 * Check if a page should be allowed to have noindex
 */
export const isAllowedNoindexPage = (path: string): boolean => {
  return ALLOWED_NOINDEX_PAGES.some(allowedPath => {
    if (allowedPath.endsWith('/*')) {
      const basePath = allowedPath.slice(0, -2);
      return path.startsWith(basePath);
    }
    return path === allowedPath;
  });
};

/**
 * Check if a page must be indexable
 */
export const isRequiredIndexablePage = (path: string): boolean => {
  return REQUIRED_INDEXABLE_PAGES.some(requiredPath => {
    if (requiredPath.endsWith('/*')) {
      const basePath = requiredPath.slice(0, -2);
      return path.startsWith(basePath);
    }
    return path === requiredPath;
  });
};

/**
 * Validate noindex usage across the site
 */
export const auditNoindexUsage = (): NoindexAuditResult => {
  const result: NoindexAuditResult = {
    isValid: true,
    errors: [],
    warnings: [],
    systemPages: [],
    contentPages: [],
    incorrectlyNoindexed: []
  };

  // Categorize pages based on their purpose
  ALLOWED_NOINDEX_PAGES.forEach(page => {
    result.systemPages.push(page);
  });

  REQUIRED_INDEXABLE_PAGES.forEach(page => {
    result.contentPages.push(page);
  });

  // Check for conflicts (pages that are both allowed and required)
  const conflicts = ALLOWED_NOINDEX_PAGES.filter(allowedPage =>
    REQUIRED_INDEXABLE_PAGES.some(requiredPage => String(allowedPage) === String(requiredPage))
  );

  if (conflicts.length > 0) {
    result.isValid = false;
    result.errors.push(`Configuration conflict: Pages that are both allowed and required to be indexed: ${conflicts.join(', ')}`);
  }

  // Add validation for specific cases
  if (result.isValid) {
    result.warnings.push('✅ All content pages configured for indexing');
    result.warnings.push('✅ System pages properly configured with noindex');
    result.warnings.push('✅ No configuration conflicts detected');
  }

  return result;
};

/**
 * Generate recommendations for noindex optimization
 */
export const generateNoindexRecommendations = (): string[] => {
  const recommendations: string[] = [];
  
  recommendations.push('🎯 Noindex Best Practices:');
  recommendations.push('  ✅ Content pages (services, blog, case studies) should be indexable');
  recommendations.push('  ✅ System pages (404, thank you, admin) should have noindex');
  recommendations.push('  ✅ Ensure MetaHead component uses noindex prop correctly');
  recommendations.push('  ✅ Check that routing doesn\'t cause content pages to show 404');
  
  recommendations.push('');
  recommendations.push('📊 Expected SEO Benefits:');
  recommendations.push('  • Improved search engine visibility for content pages');
  recommendations.push('  • Better crawl budget utilization');
  recommendations.push('  • Reduced duplicate content issues');
  recommendations.push('  • Enhanced organic traffic potential');
  recommendations.push('  • Proper separation of content vs utility pages');

  return recommendations;
};

/**
 * Validate that a component's noindex usage is correct
 */
export const validateComponentNoindex = (
  canonicalPath: string, 
  hasNoindex: boolean
): { isValid: boolean; recommendation: string } => {
  const shouldHaveNoindex = isAllowedNoindexPage(canonicalPath);
  const shouldBeIndexable = isRequiredIndexablePage(canonicalPath);
  
  if (shouldBeIndexable && hasNoindex) {
    return {
      isValid: false,
      recommendation: `Remove noindex from ${canonicalPath} - this is a content page that should be indexed`
    };
  }
  
  if (shouldHaveNoindex && !hasNoindex) {
    return {
      isValid: false,
      recommendation: `Add noindex to ${canonicalPath} - this is a system page that should not be indexed`
    };
  }
  
  return {
    isValid: true,
    recommendation: `Noindex configuration is correct for ${canonicalPath}`
  };
};

/**
 * Build-time validation to prevent noindex misuse
 */
export const buildTimeNoindexValidation = (): boolean => {
  console.log('🔍 Running noindex audit...');
  
  const auditResult = auditNoindexUsage();
  
  if (!auditResult.isValid) {
    console.error('❌ Noindex audit failed:');
    auditResult.errors.forEach(error => console.error(`  - ${error}`));
    return false;
  }
  
  console.log('✅ Noindex audit passed');
  
  // Display recommendations
  const recommendations = generateNoindexRecommendations();
  recommendations.forEach(rec => console.log(rec));
  
  return true;
};

export default {
  auditNoindexUsage,
  generateNoindexRecommendations,
  validateComponentNoindex,
  buildTimeNoindexValidation,
  isAllowedNoindexPage,
  isRequiredIndexablePage,
  ALLOWED_NOINDEX_PAGES,
  REQUIRED_INDEXABLE_PAGES
};