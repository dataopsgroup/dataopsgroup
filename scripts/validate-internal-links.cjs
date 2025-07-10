const fs = require('fs');
const path = require('path');

/**
 * Build-time validation script to prevent redirect chain issues
 * Run this before deploying to catch Ahrefs SEO warnings
 */

// Known redirect mappings - keep in sync with redirect-chain-validator.ts
const REDIRECT_MAPPINGS = {
  '/services/hubspot-implementation': '/services/marketing-operations-revops',
  '/services/hubspot-consulting': '/services/marketing-operations-revops',
  '/services/data-operations': '/services/dataops-implementation',
  '/training': '/services/team-training',
  '/hubspot-training': '/services/team-training',
  '/analytics': '/services/analytics-bi',
  '/business-intelligence': '/services/analytics-bi',
  '/guides/hubspot-expert-guide': '/guides/hubspot-expert',
  '/how-to-hire-a-hubspot-expert-in-2025': '/guides/hubspot-expert',
  '/complete-hubspot-guide': '/guides/complete-hubspot-guide-for-private-equity',
  '/hubspot-guide-pe': '/guides/complete-hubspot-guide-for-private-equity',
  '/pe-hubspot-guide': '/guides/complete-hubspot-guide-for-private-equity',
  '/faqs/hubspot-services': '/faqs/services',
  '/faqs/hubspot-experts': '/faqs/experts',
  '/faqs/our-approach': '/faqs/approach',
  '/faqs/hubspot-modules': '/faqs/modules',
  '/data-operation-assessment': '/data-operations-assessment',
  '/assessment': '/data-operations-assessment',
  '/calculator': '/bad-data-cost-calculator',
  '/bad-data-calculator': '/bad-data-cost-calculator',
  '/roi-calculator': '/revops-roi-calculator',
  '/terms-of-service': '/terms',
  '/privacy-policy': '/privacy',
  
  // Service page variations
  '/hubspot-integration-customization-services': '/services',
  '/hubspot-integration-services': '/services',
  '/hubspot-customization-services': '/services',
  
  // Case study variations
  '/case-study-upscale-home-improvement-manufacturer-boost-by-hubspot': '/case-studies',
  '/case-study-private-equity-portfolio-company-data-transformation': '/case-studies',
  '/case-study-manufacturing-company-hubspot-migration': '/case-studies',
  
  // Typo corrections
  '/leaderschip': '/about',
  '/servies': '/services',
  '/insigths': '/insights'
};

/**
 * Scan files for internal links that might redirect
 */
function scanFileForInternalLinks(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const linkMatches = content.match(/(href|to)=\"\/[^"]*\"/g) || [];
    
    const issues = [];
    linkMatches.forEach(match => {
      const url = match.match(/["'](\/[^"']*)/)[1];
      if (REDIRECT_MAPPINGS[url]) {
        issues.push({
          file: filePath,
          line: getLineNumber(content, match),
          originalUrl: url,
          shouldRedirectTo: REDIRECT_MAPPINGS[url],
          issue: `Link points to redirect source instead of final destination`
        });
      }
    });
    
    return issues;
  } catch (error) {
    console.warn(`Could not scan ${filePath}:`, error.message);
    return [];
  }
}

/**
 * Get line number for a match in file content
 */
function getLineNumber(content, match) {
  const index = content.indexOf(match);
  return content.substring(0, index).split('\n').length;
}

/**
 * Recursively scan directory for TypeScript/JavaScript files
 */
function scanDirectory(dir) {
  const allIssues = [];
  
  try {
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        allIssues.push(...scanDirectory(fullPath));
      } else if (stat.isFile() && /\.(ts|tsx|js|jsx)$/.test(item)) {
        allIssues.push(...scanFileForInternalLinks(fullPath));
      }
    }
  } catch (error) {
    console.warn(`Could not scan directory ${dir}:`, error.message);
  }
  
  return allIssues;
}

/**
 * Main validation function
 */
function validateInternalLinks() {
  console.log('🔗 Validating internal links for redirect chains...');
  
  const srcDir = path.join(process.cwd(), 'src');
  const issues = scanDirectory(srcDir);
  
  if (issues.length === 0) {
    console.log('✅ No redirect chain issues found!');
    return true;
  }
  
  console.log(`❌ Found ${issues.length} redirect chain issues:`);
  console.log('');
  
  issues.forEach(issue => {
    console.log(`📁 ${issue.file}:${issue.line}`);
    console.log(`   🔗 ${issue.originalUrl} → should be → ${issue.shouldRedirectTo}`);
    console.log(`   ℹ️  ${issue.issue}`);
    console.log('');
  });
  
  console.log('🔧 To fix these issues:');
  console.log('1. Update the links to point directly to final destinations');
  console.log('2. Use the CANONICAL_URLS object for consistent linking');
  console.log('3. Run this script again to verify fixes');
  
  return false;
}

// Run validation if called directly
if (require.main === module) {
  const success = validateInternalLinks();
  process.exit(success ? 0 : 1);
}

module.exports = { validateInternalLinks };
