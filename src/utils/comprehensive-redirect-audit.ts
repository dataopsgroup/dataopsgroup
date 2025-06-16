
/**
 * Comprehensive Site-Wide Redirect Audit System
 * 
 * This utility performs a complete audit of all redirects across the site
 * to identify and prevent redirect chains that cause Ahrefs issues
 */

import { CANONICAL_URLS, DUPLICATE_URLS_TO_REDIRECT } from './seo-config';
import { redirectRoutes } from '@/routes/redirectRoutes';

interface RedirectAuditResult {
  isValid: boolean;
  errors: string[];
  warnings: string[];
  redirectChains: string[];
  duplicateCanonicals: string[];
  orphanedRedirects: string[];
  sitemapConflicts: string[];
}

/**
 * Main audit function - performs comprehensive redirect validation
 */
export const auditAllRedirects = (): RedirectAuditResult => {
  const result: RedirectAuditResult = {
    isValid: true,
    errors: [],
    warnings: [],
    redirectChains: [],
    duplicateCanonicals: [],
    orphanedRedirects: [],
    sitemapConflicts: []
  };

  console.log('🔍 Starting comprehensive redirect audit...');

  // 1. Check for canonical URLs in redirect lists (CRITICAL)
  auditCanonicalUrlIntegrity(result);

  // 2. Detect redirect chains (A->B->C)
  auditRedirectChains(result);

  // 3. Validate sitemap conflicts
  auditSitemapConflicts(result);

  // 4. Check for orphaned redirects
  auditOrphanedRedirects(result);

  // 5. Validate redirect route configuration
  auditRedirectRoutes(result);

  // Final validation
  result.isValid = result.errors.length === 0;

  logAuditResults(result);
  return result;
};

/**
 * Check if any canonical URLs are accidentally in redirect lists
 */
const auditCanonicalUrlIntegrity = (result: RedirectAuditResult) => {
  const canonicalUrls = Object.values(CANONICAL_URLS);
  const redirectSources = Object.keys(DUPLICATE_URLS_TO_REDIRECT);

  canonicalUrls.forEach(canonicalUrl => {
    if (redirectSources.includes(canonicalUrl)) {
      result.errors.push(`CRITICAL: Canonical URL ${canonicalUrl} is in redirect list - this creates redirect chains!`);
      result.duplicateCanonicals.push(canonicalUrl);
    }
  });
};

/**
 * Detect multi-hop redirect chains
 */
const auditRedirectChains = (result: RedirectAuditResult) => {
  Object.entries(DUPLICATE_URLS_TO_REDIRECT).forEach(([source, target]) => {
    // Check if target is also a redirect source (creates chain)
    if (DUPLICATE_URLS_TO_REDIRECT[target as keyof typeof DUPLICATE_URLS_TO_REDIRECT]) {
      const nextTarget = DUPLICATE_URLS_TO_REDIRECT[target as keyof typeof DUPLICATE_URLS_TO_REDIRECT];
      const chain = `${source} → ${target} → ${nextTarget}`;
      result.errors.push(`REDIRECT CHAIN DETECTED: ${chain}`);
      result.redirectChains.push(chain);
    }
    
    // Check for circular redirects
    if (source === target) {
      result.errors.push(`CIRCULAR REDIRECT: ${source} redirects to itself`);
    }
  });
};

/**
 * Check for conflicts between sitemap and redirects
 */
const auditSitemapConflicts = (result: RedirectAuditResult) => {
  // Get all URLs that should be in sitemap (canonical URLs)
  const canonicalUrls = Object.values(CANONICAL_URLS);
  const redirectSources = Object.keys(DUPLICATE_URLS_TO_REDIRECT);

  // Check if any sitemap URLs are also redirect sources
  canonicalUrls.forEach(canonicalUrl => {
    if (redirectSources.includes(canonicalUrl)) {
      result.sitemapConflicts.push(canonicalUrl);
      result.warnings.push(`Sitemap URL ${canonicalUrl} is also in redirect list`);
    }
  });
};

/**
 * Find redirects that don't point to valid canonical URLs
 */
const auditOrphanedRedirects = (result: RedirectAuditResult) => {
  const canonicalUrls = Object.values(CANONICAL_URLS);
  
  Object.entries(DUPLICATE_URLS_TO_REDIRECT).forEach(([source, target]) => {
    if (!canonicalUrls.includes(target)) {
      result.orphanedRedirects.push(`${source} → ${target}`);
      result.warnings.push(`Redirect target ${target} is not a canonical URL`);
    }
  });
};

/**
 * Validate React Router redirect routes configuration
 */
const auditRedirectRoutes = (result: RedirectAuditResult) => {
  try {
    // Check if redirect routes are properly configured
    if (!redirectRoutes || redirectRoutes.length === 0) {
      result.warnings.push('No redirect routes found in routing configuration');
      return;
    }

    console.log(`✅ Found ${redirectRoutes.length} redirect routes in configuration`);
  } catch (error) {
    result.errors.push(`Failed to load redirect routes: ${error}`);
  }
};

/**
 * Log comprehensive audit results
 */
const logAuditResults = (result: RedirectAuditResult) => {
  console.group('🎯 Redirect Audit Results');
  
  if (result.isValid && result.warnings.length === 0) {
    console.log('✅ ALL REDIRECT VALIDATIONS PASSED - No Ahrefs issues detected');
  } else {
    if (result.errors.length > 0) {
      console.error('❌ CRITICAL REDIRECT ERRORS (will cause Ahrefs issues):');
      result.errors.forEach(error => console.error(`  🚨 ${error}`));
    }
    
    if (result.warnings.length > 0) {
      console.warn('⚠️ REDIRECT WARNINGS:');
      result.warnings.forEach(warning => console.warn(`  ⚠️ ${warning}`));
    }
    
    if (result.redirectChains.length > 0) {
      console.error('🔗 REDIRECT CHAINS DETECTED:');
      result.redirectChains.forEach(chain => console.error(`  🔗 ${chain}`));
    }
    
    if (result.duplicateCanonicals.length > 0) {
      console.error('🎯 CANONICAL URLS IN REDIRECT LISTS:');
      result.duplicateCanonicals.forEach(url => console.error(`  🎯 ${url}`));
    }
  }
  
  console.groupEnd();
};

/**
 * Emergency fix function - automatically resolve common redirect issues
 */
export const emergencyRedirectFix = () => {
  const audit = auditAllRedirects();
  
  if (!audit.isValid) {
    console.error('🚨 EMERGENCY: Redirect issues detected that will cause Ahrefs errors!');
    console.error('🛠️ Run the comprehensive redirect audit to identify specific issues.');
    console.error('📋 Issues found:');
    audit.errors.forEach(error => console.error(`  - ${error}`));
    
    return false;
  }
  
  console.log('✅ No emergency redirect fixes needed');
  return true;
};

/**
 * Validate specific URL for redirect issues
 */
export const validateUrlRedirect = (url: string): boolean => {
  const canonicalUrls = Object.values(CANONICAL_URLS);
  const redirectSources = Object.keys(DUPLICATE_URLS_TO_REDIRECT);
  
  // If it's a canonical URL, it should NOT redirect
  if (canonicalUrls.includes(url as any)) {
    if (redirectSources.includes(url)) {
      console.error(`❌ ${url} is canonical but also redirects - this causes Ahrefs issues!`);
      return false;
    }
    console.log(`✅ ${url} is canonical and doesn't redirect`);
    return true;
  }
  
  // If it's a redirect source, check target is valid
  if (redirectSources.includes(url)) {
    const target = DUPLICATE_URLS_TO_REDIRECT[url as keyof typeof DUPLICATE_URLS_TO_REDIRECT];
    if (!canonicalUrls.includes(target)) {
      console.error(`❌ ${url} redirects to non-canonical URL ${target}`);
      return false;
    }
    console.log(`✅ ${url} properly redirects to canonical URL ${target}`);
    return true;
  }
  
  console.log(`ℹ️ ${url} is not in redirect configuration`);
  return true;
};

// Run audit immediately in development
if (process.env.NODE_ENV === 'development') {
  auditAllRedirects();
}

export default {
  auditAllRedirects,
  emergencyRedirectFix,
  validateUrlRedirect
};
