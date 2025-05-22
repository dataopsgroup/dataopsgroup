// Service Worker Configuration
const APP_VERSION = '1.0.6'; // Increment this when making significant changes

// Cache categories for different caching strategies
const STATIC_CONTENT = {
  name: 'static-content-v3',
  maxAge: 31536000, // 1 year in seconds
  resources: [
    '/lovable-uploads/9b9f1c84-13af-4551-96d5-b7a930f008cf.png', // Logo
    '/lovable-uploads/5f3a8bdf-410e-4727-8fa0-eb20abe91242.png', // Favicon
    // Other static images and font files
  ]
};

// New category for font files with specific caching
const FONT_FILES = {
  name: 'fonts-v3',
  maxAge: 31536000, // 1 year in seconds
  immutable: true,
  resources: [
    '/fonts/inter-subset/inter-latin-300-normal.woff',
    '/fonts/inter-subset/inter-latin-300-normal.woff2',
    '/fonts/inter-subset/inter-latin-400-normal.woff',
    '/fonts/inter-subset/inter-latin-400-normal.woff2',
    '/fonts/inter-subset/inter-latin-500-normal.woff',
    '/fonts/inter-subset/inter-latin-500-normal.woff2',
    '/fonts/inter-subset/inter-latin-600-normal.woff',
    '/fonts/inter-subset/inter-latin-600-normal.woff2',
    '/fonts/inter-subset/inter-latin-700-normal.woff',
    '/fonts/inter-subset/inter-latin-700-normal.woff2',
  ]
};

// HTML and core JS/CSS that define app structure
const APP_SHELL = {
  name: 'app-shell-v3',
  maxAge: 86400, // 24 hours in seconds (reduced from 30 days)
  resources: [
    '/',
    '/index.html',
    '/assets/js/main.js',
    '/assets/css/index.css',
  ]
};

// JS and CSS files have their own category now
const JS_CSS_ASSETS = {
  name: 'js-css-assets-v3',
  maxAge: 604800, // 7 days in seconds
  resources: []  // Will be populated at runtime based on requests
};

// API responses can have different cache times based on data volatility
const API_RESPONSES = {
  name: 'api-responses-v3',
  maxAge: 3600, // 1 hour in seconds as default
  resources: [
    '/api/content.json'
  ],
  // Specific API endpoints with custom cache times
  customTiming: {
    '/api/frequently-changing-data': 300, // 5 minutes
    '/api/rarely-changing-data': 86400, // 24 hours
    '/api/user-specific': 0 // Do not cache
  }
};

// Images now have their own category with specific settings
const IMAGE_ASSETS = {
  name: 'image-assets-v3',
  maxAge: 1209600, // 14 days in seconds
  resources: [],  // Will be populated at runtime
  // Different types of images might need different cache settings
  byExtension: {
    '.svg': 2592000, // 30 days for SVG files
    '.webp': 1209600, // 14 days for WebP
    '.png': 1209600, // 14 days for PNG
    '.jpg': 1209600, // 14 days for JPG
    '.gif': 1209600  // 14 days for GIF
  }
};

const OFFLINE_FALLBACKS = {
  name: 'offline-fallbacks-v3',
  maxAge: 7776000, // 90 days in seconds
  resources: [
    '/offline.html',
    '/placeholder.svg',
  ]
};

// Content that should never be cached
const NO_CACHE_PATTERNS = [
  /\/analytics\//,  // Analytics endpoints
  /\/user-data\//,  // User-specific data
  /\/dynamic-content\//  // Dynamic content that should always be fresh
];
