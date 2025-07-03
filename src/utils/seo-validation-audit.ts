/**
 * SEO Validation Audit Utility
 * Comprehensive SEO validation for critical issues found in GSC
 */

export interface SEOValidationResult {
  component: string;
  issue: string;
  severity: 'critical' | 'high' | 'medium' | 'low';
  fix: string;
  status: 'fixed' | 'pending' | 'failed';
}

export interface SEOAuditReport {
  totalIssues: number;
  criticalIssues: number;
  fixedIssues: number;
  pendingIssues: number;
  results: SEOValidationResult[];
}

/**
 * Validate H1 tag usage across pages
 */
export const validateH1Structure = (): SEOValidationResult[] => {
  const results: SEOValidationResult[] = [];
  
  // Check for multiple H1 tags on a page
  if (typeof document !== 'undefined') {
    const h1Tags = document.querySelectorAll('h1');
    
    if (h1Tags.length === 0) {
      results.push({
        component: 'Page',
        issue: 'No H1 tag found on page',
        severity: 'critical',
        fix: 'Add exactly one H1 tag that matches the page title',
        status: 'pending'
      });
    } else if (h1Tags.length > 1) {
      results.push({
        component: 'Page',
        issue: `Multiple H1 tags found (${h1Tags.length})`,
        severity: 'critical',
        fix: 'Convert additional H1 tags to H2, H3, etc. based on hierarchy',
        status: 'pending'
      });
    } else {
      results.push({
        component: 'Page',
        issue: 'H1 structure validated',
        severity: 'low',
        fix: 'No action needed',
        status: 'fixed'
      });
    }
  }
  
  return results;
};

/**
 * Validate meta description presence and length
 */
export const validateMetaDescription = (): SEOValidationResult[] => {
  const results: SEOValidationResult[] = [];
  
  if (typeof document !== 'undefined') {
    const metaDesc = document.querySelector('meta[name="description"]');
    
    if (!metaDesc) {
      results.push({
        component: 'MetaHead',
        issue: 'Missing meta description',
        severity: 'critical',
        fix: 'Add meta description under 160 characters',
        status: 'pending'
      });
    } else {
      const content = metaDesc.getAttribute('content') || '';
      
      if (content.length === 0) {
        results.push({
          component: 'MetaHead',
          issue: 'Empty meta description',
          severity: 'critical',
          fix: 'Write compelling meta description under 160 characters',
          status: 'pending'
        });
      } else if (content.length > 160) {
        results.push({
          component: 'MetaHead',
          issue: `Meta description too long (${content.length}/160 chars)`,
          severity: 'high',
          fix: 'Shorten meta description to under 160 characters',
          status: 'pending'
        });
      } else {
        results.push({
          component: 'MetaHead',
          issue: 'Meta description validated',
          severity: 'low',
          fix: 'No action needed',
          status: 'fixed'
        });
      }
    }
  }
  
  return results;
};

/**
 * Validate canonical URL consistency
 */
export const validateCanonicalUrl = (): SEOValidationResult[] => {
  const results: SEOValidationResult[] = [];
  
  if (typeof document !== 'undefined') {
    const canonical = document.querySelector('link[rel="canonical"]');
    const ogUrl = document.querySelector('meta[property="og:url"]');
    
    if (!canonical) {
      results.push({
        component: 'MetaHead',
        issue: 'Missing canonical URL',
        severity: 'critical',
        fix: 'Add canonical link tag pointing to final URL destination',
        status: 'pending'
      });
    } else if (!ogUrl) {
      results.push({
        component: 'MetaHead',
        issue: 'Missing OpenGraph URL',
        severity: 'high',
        fix: 'Add og:url meta tag matching canonical URL',
        status: 'pending'
      });
    } else {
      const canonicalHref = canonical.getAttribute('href');
      const ogUrlContent = ogUrl.getAttribute('content');
      
      if (canonicalHref !== ogUrlContent) {
        results.push({
          component: 'MetaHead',
          issue: 'Canonical/OG URL mismatch',
          severity: 'critical',
          fix: 'Ensure canonical and og:url point to exact same URL',
          status: 'pending'
        });
      } else {
        results.push({
          component: 'MetaHead',
          issue: 'Canonical URLs validated',
          severity: 'low',
          fix: 'No action needed',
          status: 'fixed'
        });
      }
    }
  }
  
  return results;
};

/**
 * Validate page title optimization
 */
export const validatePageTitle = (): SEOValidationResult[] => {
  const results: SEOValidationResult[] = [];
  
  if (typeof document !== 'undefined') {
    const titleTag = document.querySelector('title');
    
    if (!titleTag) {
      results.push({
        component: 'MetaHead',
        issue: 'Missing title tag',
        severity: 'critical',
        fix: 'Add title tag under 60 characters with target keyword',
        status: 'pending'
      });
    } else {
      const title = titleTag.textContent || '';
      
      if (title.length === 0) {
        results.push({
          component: 'MetaHead',
          issue: 'Empty title tag',
          severity: 'critical',
          fix: 'Write descriptive title under 60 characters',
          status: 'pending'
        });
      } else if (title.length > 60) {
        results.push({
          component: 'MetaHead',
          issue: `Title too long (${title.length}/60 chars)`,
          severity: 'high',
          fix: 'Shorten title to under 60 characters',
          status: 'pending'
        });
      } else {
        results.push({
          component: 'MetaHead',
          issue: 'Title tag validated',
          severity: 'low',
          fix: 'No action needed',
          status: 'fixed'
        });
      }
    }
  }
  
  return results;
};

/**
 * Validate structured data presence
 */
export const validateStructuredData = (): SEOValidationResult[] => {
  const results: SEOValidationResult[] = [];
  
  if (typeof document !== 'undefined') {
    const ldJsonScripts = document.querySelectorAll('script[type="application/ld+json"]');
    
    if (ldJsonScripts.length === 0) {
      results.push({
        component: 'Schema',
        issue: 'No structured data found',
        severity: 'high',
        fix: 'Add appropriate schema markup for page type',
        status: 'pending'
      });
    } else {
      // Validate JSON structure
      let validSchemas = 0;
      ldJsonScripts.forEach(script => {
        try {
          const schema = JSON.parse(script.textContent || '');
          if (schema['@context'] && schema['@type']) {
            validSchemas++;
          }
        } catch (e) {
          results.push({
            component: 'Schema',
            issue: 'Invalid JSON-LD structure',
            severity: 'high',
            fix: 'Fix JSON syntax in structured data',
            status: 'pending'
          });
        }
      });
      
      if (validSchemas > 0) {
        results.push({
          component: 'Schema',
          issue: `Structured data validated (${validSchemas} schemas)`,
          severity: 'low',
          fix: 'No action needed',
          status: 'fixed'
        });
      }
    }
  }
  
  return results;
};

/**
 * Run comprehensive SEO audit
 */
export const runSEOAudit = (): SEOAuditReport => {
  const allResults = [
    ...validateH1Structure(),
    ...validateMetaDescription(),
    ...validateCanonicalUrl(),
    ...validatePageTitle(),
    ...validateStructuredData()
  ];
  
  const criticalIssues = allResults.filter(r => r.severity === 'critical').length;
  const fixedIssues = allResults.filter(r => r.status === 'fixed').length;
  const pendingIssues = allResults.filter(r => r.status === 'pending').length;
  
  return {
    totalIssues: allResults.length,
    criticalIssues,
    fixedIssues,
    pendingIssues,
    results: allResults
  };
};

/**
 * Development-only audit logging
 */
export const logSEOAudit = (): void => {
  if (process.env.NODE_ENV === 'development') {
    const audit = runSEOAudit();
    
    console.group('🔍 SEO AUDIT REPORT');
    console.log(`Total Issues: ${audit.totalIssues}`);
    console.log(`Critical Issues: ${audit.criticalIssues}`);
    console.log(`Fixed Issues: ${audit.fixedIssues}`);
    console.log(`Pending Issues: ${audit.pendingIssues}`);
    
    if (audit.criticalIssues > 0) {
      console.group('🚨 CRITICAL ISSUES');
      audit.results
        .filter(r => r.severity === 'critical' && r.status === 'pending')
        .forEach(issue => {
          console.error(`${issue.component}: ${issue.issue}`);
          console.log(`Fix: ${issue.fix}`);
        });
      console.groupEnd();
    }
    
    if (audit.pendingIssues > 0) {
      console.group('⚠️ PENDING ISSUES');
      audit.results
        .filter(r => r.status === 'pending' && r.severity !== 'critical')
        .forEach(issue => {
          console.warn(`${issue.component} (${issue.severity}): ${issue.issue}`);
        });
      console.groupEnd();
    }
    
    console.groupEnd();
  }
};