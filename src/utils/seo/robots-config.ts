
/**
 * Robots.txt Configuration - Updated for AI crawler optimization
 * Allows all major search engines and AI crawlers full access
 */

import { CANONICAL_URLS } from './canonical-urls';

// ROBOTS.TXT DISALLOW PATTERNS - Only essential admin/private areas
export const ROBOTS_DISALLOW_PATTERNS = [
  // Admin and private areas only
  '/admin/',
  '/wp-admin/',
  '/private/',
  '/tmp/',
  '/staging/',
  '/dev/',
  
  // Development/testing paths
  '/test/',
  '/debug/',
  '/.well-known/security.txt'
] as const;

// ROBOTS.TXT EXPLICIT ALLOWS - All public content
export const ROBOTS_EXPLICIT_ALLOWS = [
  // Main pages
  '/',
  '/services/',
  '/services/*',
  '/about',
  '/insights/',
  '/insights/*',
  '/faqs/',
  '/faqs/*',
  '/case-studies/',
  '/case-studies/*',
  '/assessment/',
  '/calculator/',
  '/book/',
  '/contact',
  '/approach',
  '/testimonials',
  
  // Important tools and resources
  '/pe-value-creation-program',
  '/guides/*',
  '/resources/*',
  
  // Sitemap and feeds
  '/sitemap.xml',
  '/sitemaps/*',
  '/feed.xml',
  '/rss.xml'
] as const;

// AI CRAWLERS - Explicitly allowed
export const AI_CRAWLERS = [
  'GPTBot',
  'Claude-Web', 
  'PerplexityBot',
  'ChatGPT-User',
  'Anthropic-AI',
  'OpenAI-SearchBot'
] as const;

// SOCIAL MEDIA CRAWLERS
export const SOCIAL_CRAWLERS = [
  'FacebookExternalHit',
  'Twitterbot',
  'LinkedInBot'
] as const;

// SEARCH ENGINE CRAWLERS
export const SEARCH_ENGINE_CRAWLERS = [
  'Googlebot',
  'Bingbot',
  'Slurp',
  'DuckDuckBot',
  'Baiduspider',
  'YandexBot',
  'Googlebot-Image',
  'Bingbot-Media',
  'Googlebot-News'
] as const;

export default {
  ROBOTS_DISALLOW_PATTERNS,
  ROBOTS_EXPLICIT_ALLOWS,
  AI_CRAWLERS,
  SOCIAL_CRAWLERS,
  SEARCH_ENGINE_CRAWLERS
};
