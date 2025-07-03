const fs = require('fs');
const path = require('path');

/**
 * Meta Description Audit Script - Identifies pages missing meta descriptions
 * 
 * This script finds pages with missing, empty, or inadequate meta descriptions
 * that cause Ahrefs SEO warnings and poor search result snippets
 */

/**
 * Check if content has proper meta description
 */
function checkMetaDescription(content, fileName) {
  const issues = [];
  
  // Check if file has SEO object with metaDescription
  const hasSeoObject = /seo:\s*\{/.test(content);
  const hasMetaDescription = /metaDescription:\s*["'][^"']+["']/.test(content);
  
  if (!hasSeoObject) {
    issues.push({
      type: 'missing_seo_object',
      message: 'Missing SEO object - no structured SEO data',
      severity: 'high'
    });
  }
  
  if (!hasMetaDescription) {
    issues.push({
      type: 'missing_meta_description',
      message: 'Missing metaDescription property',
      severity: 'critical'
    });
  }
  
  // Extract meta description if it exists
  const metaDescMatch = content.match(/metaDescription:\s*["']([^"']+)["']/);
  if (metaDescMatch) {
    const metaDesc = metaDescMatch[1];
    
    // Check meta description quality
    if (metaDesc.length < 120) {
      issues.push({
        type: 'meta_desc_too_short',
        message: `Meta description too short (${metaDesc.length} chars). Aim for 150-160 characters.`,
        severity: 'medium',
        value: metaDesc
      });
    }
    
    if (metaDesc.length > 160) {
      issues.push({
        type: 'meta_desc_too_long', 
        message: `Meta description too long (${metaDesc.length} chars). Search engines may truncate it.`,
        severity: 'medium',
        value: metaDesc
      });
    }
    
    // Check for generic descriptions
    const genericPatterns = [
      /learn more about/i,
      /find out about/i,
      /discover how/i,
      /get expert/i
    ];
    
    if (genericPatterns.some(pattern => pattern.test(metaDesc))) {
      issues.push({
        type: 'generic_meta_description',
        message: 'Meta description appears generic. Consider making it more specific and compelling.',
        severity: 'low',
        value: metaDesc
      });
    }
  }
  
  // Check for fallback to excerpt
  const hasExcerpt = /excerpt:\s*["'][^"']+["']/.test(content);
  if (!hasMetaDescription && !hasExcerpt) {
    issues.push({
      type: 'no_description_fallback',
      message: 'No meta description OR excerpt for fallback',
      severity: 'critical'
    });
  }
  
  return issues;
}

/**
 * Generate meta description recommendation
 */
function generateMetaDescriptionRecommendation(fileName, content) {
  // Extract title if available
  const titleMatch = content.match(/title:\s*["']([^"']+)["']/);
  const title = titleMatch ? titleMatch[1] : fileName.replace('.ts', '');
  
  // Extract excerpt if available  
  const excerptMatch = content.match(/excerpt:\s*["']([^"']+)["']/);
  const excerpt = excerptMatch ? excerptMatch[1] : '';
  
  const recommendations = {
    'customer-segmentation-mistake-icp.ts': {
      metaDescription: "Stop targeting the wrong customers! Discover how to use CRM data to identify your TRUE ideal customer profile and boost conversion rates by up to 76%.",
      reasoning: "Compelling hook + specific benefit + quantified result"
    },
    'default': {
      metaDescription: excerpt || `Expert insights on ${title}. Learn proven strategies and best practices from DataOps Group.`,
      reasoning: "Use excerpt if available, otherwise create from title"
    }
  };
  
  return recommendations[fileName] || recommendations['default'];
}

/**
 * Scan all blog post files
 */
function auditBlogPostMetaDescriptions() {
  console.log('🔍 Auditing meta descriptions in blog posts...');
  
  const postsDir = path.join(process.cwd(), 'src/data/blog/posts');
  let files = [];
  
  try {
    files = fs.readdirSync(postsDir).filter(file => file.endsWith('.ts'));
  } catch (error) {
    console.error('Could not read blog posts directory:', error.message);
    return { issues: [], validPosts: [] };
  }
  
  const issues = [];
  const validPosts = [];
  
  files.forEach(fileName => {
    const filePath = path.join(postsDir, fileName);
    
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      const fileIssues = checkMetaDescription(content, fileName);
      
      if (fileIssues.length > 0) {
        issues.push({
          file: fileName,
          path: path.relative(process.cwd(), filePath),
          issues: fileIssues,
          recommendation: generateMetaDescriptionRecommendation(fileName, content)
        });
      } else {
        validPosts.push(fileName);
      }
    } catch (error) {
      console.warn(`Could not scan ${fileName}:`, error.message);
    }
  });
  
  return { issues, validPosts };
}

/**
 * Check page components for meta descriptions
 */
function auditPageMetaDescriptions() {
  console.log('🔍 Auditing meta descriptions in page components...');
  
  const pagesDir = path.join(process.cwd(), 'src/pages');
  const pageFiles = fs.readdirSync(pagesDir)
    .filter(file => file.endsWith('.tsx'))
    .map(file => path.join(pagesDir, file));
  
  const issues = [];
  const validPages = [];
  
  pageFiles.forEach(pageFile => {
    const fileName = path.basename(pageFile);
    
    try {
      const content = fs.readFileSync(pageFile, 'utf8');
      
      // Check for MetaHead component with description prop
      const hasMetaHead = /MetaHead/.test(content);
      const hasDescription = /description\s*=\s*["'][^"']+["']/.test(content);
      
      if (!hasMetaHead) {
        issues.push({
          file: fileName,
          path: path.relative(process.cwd(), pageFile),
          issue: 'Missing MetaHead component',
          severity: 'high'
        });
      } else if (!hasDescription) {
        issues.push({
          file: fileName,
          path: path.relative(process.cwd(), pageFile),
          issue: 'MetaHead missing description prop',
          severity: 'critical'
        });
      } else {
        validPages.push(fileName);
      }
    } catch (error) {
      console.warn(`Could not scan ${fileName}:`, error.message);
    }
  });
  
  return { issues, validPages };
}

/**
 * Main audit function
 */
function runMetaDescriptionAudit() {
  console.log('📝 Starting comprehensive meta description audit...\n');
  
  const blogResults = auditBlogPostMetaDescriptions();
  const pageResults = auditPageMetaDescriptions();
  
  const totalIssues = blogResults.issues.length + pageResults.issues.length;
  const totalValid = blogResults.validPosts.length + pageResults.validPages.length;
  
  console.log(`📊 Meta Description Audit Results:`);
  console.log(`✅ Valid: ${totalValid} items`);
  console.log(`❌ Issues: ${totalIssues} items\n`);
  
  // Blog post issues
  if (blogResults.issues.length > 0) {
    console.log('🚨 Blog Posts with Meta Description Issues:');
    blogResults.issues.forEach(item => {
      console.log(`\n📁 ${item.file}`);
      item.issues.forEach(issue => {
        const icon = issue.severity === 'critical' ? '🔴' : issue.severity === 'high' ? '🟡' : '🔵';
        console.log(`   ${icon} ${issue.message}`);
        if (issue.value) {
          console.log(`      Current: "${issue.value}"`);
        }
      });
      console.log(`   💡 Recommendation: "${item.recommendation.metaDescription}"`);
      console.log(`   📝 ${item.recommendation.reasoning}`);
    });
  }
  
  // Page component issues
  if (pageResults.issues.length > 0) {
    console.log('\n🚨 Page Components with Meta Description Issues:');
    pageResults.issues.forEach(item => {
      console.log(`\n📁 ${item.file}`);
      const icon = item.severity === 'critical' ? '🔴' : '🟡';
      console.log(`   ${icon} ${item.issue}`);
    });
  }
  
  // Valid items
  if (blogResults.validPosts.length > 0) {
    console.log(`\n✅ Valid Blog Posts (${blogResults.validPosts.length}):`);
    blogResults.validPosts.forEach(post => {
      console.log(`   ${post}`);
    });
  }
  
  if (pageResults.validPages.length > 0) {
    console.log(`\n✅ Valid Pages (${pageResults.validPages.length}):`);
    pageResults.validPages.forEach(page => {
      console.log(`   ${page}`);
    });
  }
  
  if (totalIssues > 0) {
    console.log('\n🚨 Impact of Missing Meta Descriptions:');
    console.log('• Poor search result snippets - reduces click-through rates');
    console.log('• Ahrefs warnings about missing meta descriptions');
    console.log('• Search engines may use random page content as description');
    console.log('• Missed opportunity to influence search result appearance');
    
    return false;
  }
  
  console.log('\n🎉 All pages have proper meta descriptions!');
  return true;
}

// Run audit if called directly
if (require.main === module) {
  const success = runMetaDescriptionAudit();
  process.exit(success ? 0 : 1);
}

module.exports = { runMetaDescriptionAudit, auditBlogPostMetaDescriptions };