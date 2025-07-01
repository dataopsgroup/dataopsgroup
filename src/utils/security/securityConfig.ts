
/**
 * Enhanced Security Configuration
 * Invisible security improvements that don't affect user experience
 */

export const SECURITY_CONFIG = {
  // Content Security Policy - Enhanced
  csp: {
    'default-src': ["'self'"],
    'script-src': [
      "'self'",
      "'unsafe-inline'", // Required for some React functionality
      'https://fonts.googleapis.com',
      'https://www.googletagmanager.com',
      'https://js.hs-scripts.com',
      'https://js.hsforms.net',
      'https://js.hscollectedforms.net'
    ],
    'style-src': [
      "'self'",
      "'unsafe-inline'", // Required for Tailwind
      'https://fonts.googleapis.com'
    ],
    'font-src': [
      "'self'",
      'https://fonts.gstatic.com'
    ],
    'img-src': [
      "'self'",
      'data:',
      'https:',
      'blob:'
    ],
    'connect-src': [
      "'self'",
      'https://api.hsforms.com',
      'https://forms.hsforms.com',
      'https://www.google-analytics.com',
      'https://analytics.google.com'
    ],
    'frame-src': [
      "'self'",
      'https://forms.hsforms.com'
    ],
    'object-src': ["'none'"],
    'base-uri': ["'self'"],
    'form-action': ["'self'"],
    'frame-ancestors': ["'none'"],
    'upgrade-insecure-requests': []
  },

  // Security Headers
  headers: {
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'DENY',
    'X-XSS-Protection': '1; mode=block',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), payment=()',
    'Cross-Origin-Embedder-Policy': 'require-corp',
    'Cross-Origin-Opener-Policy': 'same-origin',
    'Cross-Origin-Resource-Policy': 'same-site'
  },

  // Rate Limiting - Enhanced
  rateLimits: {
    contact: { requests: 3, window: 300000, progressiveDelay: true },
    assessment: { requests: 5, window: 600000, progressiveDelay: true },
    general: { requests: 10, window: 60000, progressiveDelay: false }
  },

  // Security Event Thresholds
  alertThresholds: {
    xss_attempt: { count: 1, severity: 'high' },
    csrf_attempt: { count: 1, severity: 'high' },
    rate_limit_exceeded: { count: 3, severity: 'medium' },
    bot_detected: { count: 2, severity: 'medium' },
    suspicious_input: { count: 5, severity: 'low' }
  }
};

export const generateCSPString = (): string => {
  return Object.entries(SECURITY_CONFIG.csp)
    .map(([directive, sources]) => {
      if (sources.length === 0) return directive;
      return `${directive} ${sources.join(' ')}`;
    })
    .join('; ');
};
