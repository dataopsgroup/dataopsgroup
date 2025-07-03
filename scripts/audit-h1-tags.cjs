const fs = require('fs');
const path = require('path');

/**
 * H1 Tag Audit Script - Identifies pages missing H1 tags for Ahrefs compliance
 * 
 * This script scans all page components and their dependencies to find
 * pages that don't have proper H1 tags, which causes Ahrefs SEO warnings
 */

/**
 * Extract component imports from a file
 */
function extractComponentImports(content) {
  const imports = [];
  
  // Match import statements for components
  const importMatches = content.match(/import\s+[^;]+\s+from\s+['"][^'"]*components[^'"]*['"];?/g) || [];
  
  importMatches.forEach(importMatch => {
    const componentMatch = importMatch.match(/import\s+([^{}\s,]+)/);
    if (componentMatch) {
      imports.push(componentMatch[1]);
    }
    
    // Handle destructured imports like { Component1, Component2 }
    const destructuredMatch = importMatch.match(/import\s+\{([^}]+)\}/);
    if (destructuredMatch) {
      const components = destructuredMatch[1].split(',').map(c => c.trim());
      imports.push(...components);
    }
  });
  
  return imports;
}

/**
 * Check if a file contains an H1 tag
 */
function hasH1Tag(content) {
  // Check for H1 tags in JSX
  const h1Patterns = [
    /<h1[\s>]/i,           // Opening h1 tag
    /React\.createElement\(['"]h1['"]/, // React.createElement
    /jsx\(['"]h1['"]/, // jsx() calls
  ];
  
  return h1Patterns.some(pattern => pattern.test(content));
}

/**
 * Scan a component file and its dependencies for H1 tags
 */
function scanComponentForH1(filePath, scannedFiles = new Set()) {
  // Prevent infinite recursion
  if (scannedFiles.has(filePath)) {
    return { hasH1: false, foundIn: null };
  }
  
  scannedFiles.add(filePath);
  
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // First check if this file has an H1
    if (hasH1Tag(content)) {
      return { hasH1: true, foundIn: filePath };
    }
    
    // If not, check imported components
    const imports = extractComponentImports(content);
    const baseDir = path.dirname(filePath);
    
    for (const importName of imports) {
      // Try to find the component file
      const possiblePaths = [
        path.join(baseDir, `${importName}.tsx`),
        path.join(baseDir, `${importName}.jsx`),
        path.join(process.cwd(), 'src/components', `${importName}.tsx`),
        path.join(process.cwd(), 'src/components', `${importName}.jsx`),
      ];
      
      for (const possiblePath of possiblePaths) {
        if (fs.existsSync(possiblePath)) {
          const result = scanComponentForH1(possiblePath, scannedFiles);
          if (result.hasH1) {
            return result;
          }
          break;
        }
      }
    }
    
    return { hasH1: false, foundIn: null };
  } catch (error) {
    console.warn(`Could not scan ${filePath}:`, error.message);
    return { hasH1: false, foundIn: null };
  }
}

/**
 * Scan all page files for H1 tags
 */
function auditH1Tags() {
  console.log('🔍 Auditing H1 tags across all pages...');
  
  const pagesDir = path.join(process.cwd(), 'src/pages');
  const pageFiles = fs.readdirSync(pagesDir)
    .filter(file => file.endsWith('.tsx') || file.endsWith('.jsx'))
    .map(file => path.join(pagesDir, file));
  
  const issues = [];
  const validPages = [];
  
  pageFiles.forEach(pageFile => {
    const fileName = path.basename(pageFile);
    console.log(`Checking ${fileName}...`);
    
    const result = scanComponentForH1(pageFile);
    
    if (result.hasH1) {
      validPages.push({
        page: fileName,
        h1FoundIn: path.relative(process.cwd(), result.foundIn)
      });
    } else {
      issues.push({
        page: fileName,
        file: path.relative(process.cwd(), pageFile),
        issue: 'No H1 tag found in page or its components',
        recommendation: 'Add an H1 tag to improve SEO and accessibility'
      });
    }
  });
  
  return { issues, validPages };
}

/**
 * Generate H1 tag recommendations
 */
function generateH1Recommendations(pageName) {
  const recommendations = {
    'Services.tsx': 'Add H1: "Our Services" or "HubSpot & DataOps Services"',
    'CaseStudies.tsx': 'Add H1: "Client Success Stories" or "Portfolio Company Results"',
    'FAQs.tsx': 'Add H1: "Frequently Asked Questions"',
    'Sitemap.tsx': 'Add H1: "Site Navigation" or "Website Sitemap"',
    'default': 'Add descriptive H1 tag that matches page purpose and target keywords'
  };
  
  return recommendations[pageName] || recommendations['default'];
}

/**
 * Main audit function
 */
function runH1Audit() {
  const { issues, validPages } = auditH1Tags();
  
  console.log('\n📊 H1 Tag Audit Results:');
  console.log(`✅ Pages with H1 tags: ${validPages.length}`);
  console.log(`❌ Pages missing H1 tags: ${issues.length}`);
  
  if (validPages.length > 0) {
    console.log('\n✅ Valid Pages:');
    validPages.forEach(page => {
      console.log(`   ${page.page} (H1 in: ${page.h1FoundIn})`);
    });
  }
  
  if (issues.length > 0) {
    console.log('\n❌ Pages Missing H1 Tags:');
    issues.forEach(issue => {
      console.log(`\n📁 ${issue.file}`);
      console.log(`   ⚠️  ${issue.issue}`);
      console.log(`   💡 ${issue.recommendation}`);
      console.log(`   🔧 Suggestion: ${generateH1Recommendations(issue.page)}`);
    });
    
    console.log('\n🚨 Impact of Missing H1 Tags:');
    console.log('• SEO penalties - search engines can\'t understand page topic');
    console.log('• Ahrefs warnings about missing H1 tags');
    console.log('• Accessibility issues for screen readers');
    console.log('• Reduced click-through rates in search results');
    
    return false;
  }
  
  console.log('\n🎉 All pages have proper H1 tags!');
  return true;
}

// Run audit if called directly
if (require.main === module) {
  const success = runH1Audit();
  process.exit(success ? 0 : 1);
}

module.exports = { runH1Audit, auditH1Tags };