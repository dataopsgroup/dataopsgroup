
import { SitemapData } from './types';
import {
  generateSitemapIndex,
  generateMainSitemap,
  generateServicesSitemap,
  generateBlogSitemap,
  generateCaseStudiesSitemap
} from './generators';

// Generate all sitemaps
export const generateAllSitemaps = (baseUrl: string): SitemapData => {
  return {
    index: generateSitemapIndex(baseUrl),
    main: generateMainSitemap(baseUrl),
    services: generateServicesSitemap(baseUrl),
    blog: generateBlogSitemap(baseUrl),
    caseStudies: generateCaseStudiesSitemap(baseUrl)
  };
};

// Re-export everything for backward compatibility
export * from './types';
export * from './constants';
export * from './generators';
