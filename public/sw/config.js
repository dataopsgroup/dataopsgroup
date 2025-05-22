// Service Worker Configuration
const APP_VERSION = '1.0.5'; // Increment this when making significant changes

// Cache categories for different caching strategies
const STATIC_CONTENT = {
  name: 'static-content-v2',
  maxAge: 31536000, // 1 year in seconds
  resources: [
    '/lovable-uploads/9b9f1c84-13af-4551-96d5-b7a930f008cf.png', // Logo
    '/lovable-uploads/5f3a8bdf-410e-4727-8fa0-eb20abe91242.png', // Favicon
    // Other static images and font files
  ]
};

const APP_SHELL = {
  name: 'app-shell-v2',
  maxAge: 2592000, // 30 days in seconds
  resources: [
    '/',
    '/index.html',
    '/assets/js/main.js',
    '/assets/css/index.css',
  ]
};

const API_RESPONSES = {
  name: 'api-responses-v2',
  maxAge: 3600, // 1 hour in seconds
  resources: [
    '/api/content.json'
  ]
};

const OFFLINE_FALLBACKS = {
  name: 'offline-fallbacks-v2',
  maxAge: 7776000, // 90 days in seconds
  resources: [
    '/offline.html',
    '/placeholder.svg',
  ]
};
