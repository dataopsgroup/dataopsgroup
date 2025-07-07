/**
 * Static Content Validation Utility
 * Ensures static HTML content stays in sync with React components
 */

export interface StaticContentValidation {
  path: string;
  hasStaticFile: boolean;
  isContentCurrent: boolean;
  recommendations: string[];
  errors: string[];
}

/**
 * Validates that static content exists and is current for important pages
 */
export const validateStaticContent = async (): Promise<StaticContentValidation[]> => {
  const criticalPaths = [
    '/',
    '/services',
    '/guides/hubspot-expert',
    '/services/dataops-implementation',
    '/services/analytics-bi'
  ];
  
  const results: StaticContentValidation[] = [];
  
  for (const path of criticalPaths) {
    const validation: StaticContentValidation = {
      path,
      hasStaticFile: false,
      isContentCurrent: true,
      recommendations: [],
      errors: []
    };
    
    try {
      // Check if static file exists
      const staticPath = getStaticFilePath(path);
      const response = await fetch(staticPath, { method: 'HEAD' });
      validation.hasStaticFile = response.ok;
      
      if (!validation.hasStaticFile) {
        validation.errors.push(`Missing static file for ${path}`);
        validation.recommendations.push(`Create static HTML file at ${staticPath}`);
      }
      
      // TODO: Add content comparison between static and dynamic versions
      // This would require fetching both versions and comparing key content
      
    } catch (error) {
      validation.errors.push(`Failed to validate ${path}: ${error}`);
    }
    
    results.push(validation);
  }
  
  return results;
};

/**
 * Gets the static file path for a URL path
 */
const getStaticFilePath = (urlPath: string): string => {
  const staticMap: Record<string, string> = {
    '/': '/static/homepage.html',
    '/services': '/static/services.html',
    '/guides/hubspot-expert': '/static/hubspot-expert-guide.html',
    '/services/dataops-implementation': '/static/dataops-implementation.html',
    '/services/analytics-bi': '/static/analytics-bi.html'
  };
  
  return staticMap[urlPath] || '/static/fallback.html';
};

/**
 * Development-time validator for static content
 */
export const initStaticContentValidator = (): void => {
  if (process.env.NODE_ENV !== 'development') return;
  
  // Run validation after page load
  setTimeout(async () => {
    const validations = await validateStaticContent();
    
    const hasErrors = validations.some(v => v.errors.length > 0);
    const missingFiles = validations.filter(v => !v.hasStaticFile);
    
    if (hasErrors) {
      console.error('🚨 STATIC CONTENT VALIDATION FAILED:');
      validations.forEach(v => {
        if (v.errors.length > 0) {
          console.error(`  ❌ ${v.path}:`, v.errors);
        }
      });
    }
    
    if (missingFiles.length > 0) {
      console.warn('⚠️ MISSING STATIC CONTENT FILES:');
      missingFiles.forEach(v => {
        console.warn(`  📄 ${v.path} -> ${getStaticFilePath(v.path)}`);
      });
    }
    
    if (!hasErrors && missingFiles.length === 0) {
      console.log('✅ All static content files are available');
    }
    
    // Add testing helper to window
    if (typeof window !== 'undefined') {
      (window as any).testBotContent = async (path: string) => {
        const botUserAgent = 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)';
        
        try {
          const response = await fetch(path, {
            headers: {
              'User-Agent': botUserAgent,
              'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
              'Accept-Charset': 'utf-8'
            }
          });
          
          const text = await response.text();
          const servedBy = response.headers.get('X-Served-By') || 'Unknown';
          const contentSource = response.headers.get('X-Content-Source') || 'Unknown';
          
          console.log('🤖 Bot Content Test Result:', {
            path,
            status: response.status,
            contentLength: text.length,
            servedBy,
            contentSource,
            hasReadableContent: text.includes('<h1>') && text.includes('<p>'),
            preview: text.substring(0, 200)
          });
          
          return text;
        } catch (error) {
          console.error('Bot content test failed:', error);
          return null;
        }
      };
      
      console.log('💡 Run testBotContent("/path") in console to test bot content delivery');
    }
  }, 2000);
};

/**
 * Generates updated static content based on current React components
 * This is a helper for maintaining static content
 */
export const generateStaticContentSuggestions = (): Record<string, string> => {
  return {
    'Update Process': `
1. Review current React component content
2. Extract key text content, headings, and structured data
3. Update corresponding static HTML files in /public/static/
4. Ensure UTF-8 encoding and proper meta tags
5. Test with bot content validator
    `,
    'Key Requirements': `
- All static files must have proper UTF-8 charset declarations
- Include essential meta tags (title, description, canonical)
- Add structured data (JSON-LD) for SEO
- Include navigation and internal links
- Keep content concise but comprehensive
    `,
    'Testing': `
- Use /test-bot-content.html for manual testing
- Run testBotContent() in dev console
- Use curl commands to test from command line
- Verify no binary corruption in responses
    `
  };
};

export default {
  validateStaticContent,
  initStaticContentValidator,
  generateStaticContentSuggestions
};