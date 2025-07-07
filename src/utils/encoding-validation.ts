/**
 * Text Encoding Validation Utility
 * Ensures proper UTF-8 encoding for AI crawlers and semantic analysis tools
 */

export interface EncodingAuditResult {
  isValid: boolean;
  errors: string[];
  warnings: string[];
  recommendations: string[];
}

/**
 * Validates that page content is properly encoded for crawlers
 */
export const validatePageEncoding = (): EncodingAuditResult => {
  const result: EncodingAuditResult = {
    isValid: true,
    errors: [],
    warnings: [],
    recommendations: []
  };

  // Check document encoding
  const documentCharset = document.characterSet || document.charset;
  if (documentCharset.toLowerCase() !== 'utf-8') {
    result.isValid = false;
    result.errors.push(`Document charset is ${documentCharset}, should be UTF-8`);
  }

  // Check meta charset tag
  const charsetMeta = document.querySelector('meta[charset]');
  if (!charsetMeta) {
    result.isValid = false;
    result.errors.push('Missing meta charset tag');
  } else {
    const charset = charsetMeta.getAttribute('charset')?.toLowerCase();
    if (charset !== 'utf-8') {
      result.isValid = false;
      result.errors.push(`Meta charset is ${charset}, should be utf-8`);
    }
  }

  // Check Content-Type meta tag
  const contentTypeMeta = document.querySelector('meta[http-equiv="Content-Type"]');
  if (!contentTypeMeta) {
    result.warnings.push('Missing Content-Type meta tag');
  } else {
    const content = contentTypeMeta.getAttribute('content') || '';
    if (!content.includes('charset=utf-8')) {
      result.warnings.push('Content-Type meta tag missing charset=utf-8');
    }
  }

  // Check for binary/corrupted text indicators
  const bodyText = document.body.textContent || '';
  const binaryPatterns = [
    /\uFFFD/g, // Replacement character
    /[\x00-\x08\x0B\x0C\x0E-\x1F]/g, // Control characters
    /\u0000/g, // Null bytes
  ];

  binaryPatterns.forEach((pattern, index) => {
    const matches = bodyText.match(pattern);
    if (matches && matches.length > 0) {
      result.isValid = false;
      result.errors.push(`Found ${matches.length} binary/corruption indicators (pattern ${index + 1})`);
    }
  });

  // Add recommendations
  if (result.isValid) {
    result.recommendations.push('✅ Page encoding is properly configured for crawlers');
  } else {
    result.recommendations.push('🔧 Fix charset meta tags in index.html and MetaHead component');
    result.recommendations.push('🔧 Ensure server returns proper Content-Type headers');
    result.recommendations.push('🔧 Check service worker compression settings');
  }

  return result;
};

/**
 * Test function to simulate crawler request and check encoding
 */
export const testCrawlerEncoding = async (url: string = window.location.href): Promise<string> => {
  try {
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; TestBot/1.0; +http://example.com/bot)',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Accept-Charset': 'utf-8',
        'Cache-Control': 'no-cache'
      }
    });

    const contentType = response.headers.get('Content-Type') || '';
    const text = await response.text();
    
    // Check for binary corruption indicators
    const hasBinaryCorruption = /[\x00-\x08\x0B\x0C\x0E-\x1F\uFFFD]/.test(text);
    
    return `
Crawler Test Results:
- Content-Type: ${contentType}
- Contains charset=utf-8: ${contentType.includes('charset=utf-8')}
- Text length: ${text.length}
- Has binary corruption: ${hasBinaryCorruption}
- First 200 chars: ${text.substring(0, 200)}
    `.trim();
  } catch (error) {
    return `Crawler test failed: ${error}`;
  }
};

/**
 * Development-time encoding validator
 */
export const initEncodingValidator = (): void => {
  if (process.env.NODE_ENV !== 'development') return;

  // Run validation after page load
  setTimeout(() => {
    const result = validatePageEncoding();
    
    if (!result.isValid) {
      console.error('🚨 ENCODING VALIDATION FAILED:');
      result.errors.forEach(error => console.error(`  ❌ ${error}`));
    }
    
    if (result.warnings.length > 0) {
      console.warn('⚠️ ENCODING WARNINGS:');
      result.warnings.forEach(warning => console.warn(`  ⚠️ ${warning}`));
    }
    
    result.recommendations.forEach(rec => console.log(`  ${rec}`));
    
    // Add test button for manual testing
    if (typeof window !== 'undefined' && !window.location.pathname.includes('/admin/')) {
      (window as any).testCrawlerEncoding = () => {
        testCrawlerEncoding().then(result => {
          console.log('🔍 Crawler Encoding Test:', result);
        });
      };
      console.log('💡 Run testCrawlerEncoding() in console to test crawler encoding');
    }
  }, 1000);
};

export default {
  validatePageEncoding,
  testCrawlerEncoding,
  initEncodingValidator
};