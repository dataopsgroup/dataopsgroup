
import { SitemapData } from './types';
import {
  generateSitemapIndex,
  generateMainSitemap,
  generateServicesSitemap,
  generateBlogSitemap,
  generateCaseStudiesSitemap
} from './xml-generator';

// Generate all sitemaps using the clean XML generator
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
export * from './xml-generator';
