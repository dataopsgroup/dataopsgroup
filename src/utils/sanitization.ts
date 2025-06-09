
import DOMPurify from 'dompurify';

// Configure DOMPurify with secure defaults
const createDOMPurify = () => {
  // Handle server-side rendering
  if (typeof window === 'undefined') {
    return {
      sanitize: (dirty: string) => dirty // Fallback for SSR
    };
  }

  return DOMPurify;
};

const purify = createDOMPurify();

// Default configuration for blog content
const defaultConfig = {
  ALLOWED_TAGS: [
    'p', 'br', 'strong', 'em', 'u', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
    'ul', 'ol', 'li', 'a', 'blockquote', 'code', 'pre', 'div', 'span'
  ],
  ALLOWED_ATTR: ['href', 'title', 'target', 'rel', 'class'],
  ALLOW_DATA_ATTR: false,
  FORBID_TAGS: ['script', 'object', 'embed', 'form', 'input', 'textarea'],
  FORBID_ATTR: ['onclick', 'onload', 'onerror', 'onmouseover', 'style'],
};

// Strict configuration for user input
const strictConfig = {
  ALLOWED_TAGS: ['p', 'br', 'strong', 'em'],
  ALLOWED_ATTR: [],
  ALLOW_DATA_ATTR: false,
};

export const sanitizeHTML = (dirty: string, options: 'default' | 'strict' = 'default') => {
  if (!dirty || typeof dirty !== 'string') {
    return '';
  }

  const config = options === 'strict' ? strictConfig : defaultConfig;
  
  try {
    // Configure DOMPurify before sanitizing
    if (typeof window !== 'undefined') {
      DOMPurify.setConfig(config);
      return DOMPurify.sanitize(dirty);
    }
    return dirty; // Fallback for SSR
  } catch (error) {
    console.error('HTML sanitization failed:', error);
    return ''; // Return empty string on error
  }
};

export const sanitizeText = (input: string) => {
  if (!input || typeof input !== 'string') {
    return '';
  }
  
  // Remove all HTML tags and decode entities
  return input
    .replace(/<[^>]*>/g, '')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#x27;/g, "'");
};
