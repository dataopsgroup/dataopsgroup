
import { blogPosts } from '@/data/blog';
import { CANONICAL_URLS } from './seo-config';

/**
 * CRITICAL SEO FILE - DO NOT MODIFY WITHOUT SEO REVIEW
 * 
 * Sitemap generation utilities that ensure only canonical URLs are indexed
 * All URL references come from central seo-config.ts
 */

// Current date for lastmod
const TODAY = new Date().toISOString().split('T')[0];

// Define verified main routes that actually exist and should be indexed
// ONLY CANONICAL URLS - NO DUPLICATES ALLOWED
export const mainRoutes = [
  { url: "/", priority: "1.0", changefreq: "weekly", lastmod: TODAY },
  { url: "/services", priority: "0.9", changefreq: "weekly", lastmod: TODAY },
  { url: "/about", priority: "0.8", changefreq: "monthly", lastmod: TODAY },
  { url: "/approach", priority: "0.8", changefreq: "monthly", lastmod: TODAY },
  { url: CANONICAL_URLS.insights, priority: "0.9", changefreq: "weekly", lastmod: TODAY },
  { url: CANONICAL_URLS.caseStudies, priority: "0.8", changefreq: "monthly", lastmod: TODAY },
  { url: CANONICAL_URLS.contact, priority: "0.8", changefreq: "monthly", lastmod: TODAY },
  { url: "/testimonials", priority: "0.8", changefreq: "monthly", lastmod: "2025-01-27" },
  { url: CANONICAL_URLS.book, priority: "0.9", changefreq: "weekly", lastmod: TODAY },
  { url: "/pe-value-creation-program", priority: "0.9", changefreq: "monthly", lastmod: TODAY },
  { url: CANONICAL_URLS.assessment, priority: "0.9", changefreq: "weekly", lastmod: TODAY },
  { url: CANONICAL_URLS.assessmentResults, priority: "0.7", changefreq: "monthly", lastmod: TODAY },
  { url: CANONICAL_URLS.hubspotExpert, priority: "0.8", changefreq: "monthly", lastmod: TODAY },
  { url: CANONICAL_URLS.completeHubspotGuide, priority: "0.8", changefreq: "monthly", lastmod: TODAY },
  { url: CANONICAL_URLS.badDataCalculator, priority: "0.8", changefreq: "monthly", lastmod: TODAY },
  { url: CANONICAL_URLS.revopsCalculator, priority: "0.8", changefreq: "monthly", lastmod: TODAY },
  { url: "/faqs", priority: "0.7", changefreq: "monthly", lastmod: TODAY },
  { url: "/sitemap", priority: "0.5", changefreq: "monthly", lastmod: TODAY },
  { url: "/privacy", priority: "0.3", changefreq: "yearly", lastmod: TODAY },
  { url: "/terms", priority: "0.3", changefreq: "yearly", lastmod: TODAY }
];

// Define verified service routes that actually exist
export const serviceRoutes = [
  { url: "/services/analytics-bi", priority: "0.8", changefreq: "monthly", lastmod: TODAY },
  { url: "/services/dataops-implementation", priority: "0.8", changefreq: "monthly", lastmod: TODAY },
  { url: "/services/marketing-operations-revops", priority: "0.8", changefreq: "monthly", lastmod: TODAY },
  { url: "/services/team-training", priority: "0.8", changefreq: "monthly", lastmod: TODAY }
];

// CANONICAL FAQ URLs ONLY - imported from seo-config to prevent duplicates
export const faqRoutes = [
  { url: CANONICAL_URLS.faqServices, priority: "0.6", changefreq: "monthly", lastmod: TODAY },
  { url: CANONICAL_URLS.faqExperts, priority: "0.6", changefreq: "monthly", lastmod: TODAY },
  { url: CANONICAL_URLS.faqDataQuality, priority: "0.6", changefreq: "monthly", lastmod: TODAY },
  { url: CANONICAL_URLS.faqApproach, priority: "0.6", changefreq: "monthly", lastmod: TODAY },
  { url: CANONICAL_URLS.faqModules, priority: "0.6", changefreq: "monthly", lastmod: TODAY }
];

// Generate sitemap index XML
export const generateSitemapIndex = (baseUrl: string) => {
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  xml += '  <sitemap>\n';
  xml += `    <loc>${baseUrl}/sitemaps/main-sitemap.xml</loc>\n`;
  xml += `    <lastmod>${TODAY}</lastmod>\n`;
  xml += '  </sitemap>\n';
  
  xml += '  <sitemap>\n';
  xml += `    <loc>${baseUrl}/sitemaps/services-sitemap.xml</loc>\n`;
  xml += `    <lastmod>${TODAY}</lastmod>\n`;
  xml += '  </sitemap>\n';
  
  xml += '  <sitemap>\n';
  xml += `    <loc>${baseUrl}/sitemaps/blog-sitemap.xml</loc>\n`;
  xml += `    <lastmod>${TODAY}</lastmod>\n`;
  xml += '  </sitemap>\n';
  
  xml += '  <sitemap>\n';
  xml += `    <loc>${baseUrl}/sitemaps/case-studies-sitemap.xml</loc>\n`;
  xml += `    <lastmod>${TODAY}</lastmod>\n`;
  xml += '  </sitemap>\n';
  
  xml += '</sitemapindex>';
  
  return xml;
};

// Generate main sitemap XML
export const generateMainSitemap = (baseUrl: string) => {
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  const allMainRoutes = [...mainRoutes, ...serviceRoutes, ...faqRoutes];
  
  allMainRoutes.forEach(route => {
    xml += '  <url>\n';
    xml += `    <loc>${baseUrl}${route.url}</loc>\n`;
    xml += `    <lastmod>${route.lastmod}</lastmod>\n`;
    xml += `    <changefreq>${route.changefreq}</changefreq>\n`;
    xml += `    <priority>${route.priority}</priority>\n`;
    xml += '  </url>\n';
  });
  
  xml += '</urlset>';
  
  return xml;
};

// Generate services sitemap XML
export const generateServicesSitemap = (baseUrl: string) => {
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  serviceRoutes.forEach(route => {
    xml += '  <url>\n';
    xml += `    <loc>${baseUrl}${route.url}</loc>\n`;
    xml += `    <lastmod>${route.lastmod}</lastmod>\n`;
    xml += `    <changefreq>${route.changefreq}</changefreq>\n`;
    xml += `    <priority>${route.priority}</priority>\n`;
    xml += '  </url>\n';
  });
  
  xml += '</urlset>';
  
  return xml;
};

// Generate blog sitemap XML (regular blog posts only)
export const generateBlogSitemap = (baseUrl: string) => {
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  // Filter for regular blog posts (exclude case studies)
  const regularBlogPosts = blogPosts.filter(post => 
    (!post.tags || !post.tags.includes('case study')) && 
    (post.category !== "Case Study")
  );
  
  regularBlogPosts.forEach(post => {
    const postDate = new Date(post.date);
    const lastmod = post.modifiedDate 
      ? new Date(post.modifiedDate).toISOString().split('T')[0] 
      : postDate.toISOString().split('T')[0];
    
    // Higher priority for featured posts
    const priority = (post.id === 'hidden-cost-of-failed-hubspot-implementations') ? '0.8' : '0.7';
    
    xml += '  <url>\n';
    xml += `    <loc>${baseUrl}/insights/${post.id}</loc>\n`;
    xml += `    <lastmod>${lastmod}</lastmod>\n`;
    xml += '    <changefreq>monthly</changefreq>\n';
    xml += `    <priority>${priority}</priority>\n`;
    xml += '  </url>\n';
  });
  
  xml += '</urlset>';
  
  return xml;
};

// Generate case studies sitemap XML
export const generateCaseStudiesSitemap = (baseUrl: string) => {
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  // Main case studies page
  xml += '  <url>\n';
  xml += `    <loc>${baseUrl}/case-studies</loc>\n`;
  xml += `    <lastmod>${TODAY}</lastmod>\n`;
  xml += '    <changefreq>monthly</changefreq>\n';
  xml += '    <priority>0.8</priority>\n';
  xml += '  </url>\n';
  
  // Get case studies from blog posts
  const caseStudies = blogPosts.filter(post => 
    (post.tags && post.tags.includes('case study')) || 
    post.category === "Case Study"
  );
  
  caseStudies.forEach(post => {
    const postDate = new Date(post.date);
    const lastmod = post.modifiedDate 
      ? new Date(post.modifiedDate).toISOString().split('T')[0] 
      : postDate.toISOString().split('T')[0];
    
    xml += '  <url>\n';
    xml += `    <loc>${baseUrl}/insights/${post.id}</loc>\n`;
    xml += `    <lastmod>${lastmod}</lastmod>\n`;
    xml += '    <changefreq>monthly</changefreq>\n';
    xml += '    <priority>0.8</priority>\n';
    xml += '  </url>\n';
  });
  
  xml += '</urlset>';
  
  return xml;
};

// Generate all sitemaps
export const generateAllSitemaps = (baseUrl: string) => {
  return {
    index: generateSitemapIndex(baseUrl),
    main: generateMainSitemap(baseUrl),
    services: generateServicesSitemap(baseUrl),
    blog: generateBlogSitemap(baseUrl),
    caseStudies: generateCaseStudiesSitemap(baseUrl)
  };
};

// Get summary of included/excluded pages
export const getSitemapSummary = () => {
  const regularBlogPosts = blogPosts.filter(post => 
    (!post.tags || !post.tags.includes('case study')) && 
    (post.category !== "Case Study")
  );
  
  const caseStudies = blogPosts.filter(post => 
    (post.tags && post.tags.includes('case study')) || 
    post.category === "Case Study"
  );
  
  return {
    included: {
      mainPages: mainRoutes.length,
      servicePages: serviceRoutes.length,
      faqPages: faqRoutes.length,
      blogPosts: regularBlogPosts.length,
      caseStudies: caseStudies.length,
      total: mainRoutes.length + serviceRoutes.length + faqRoutes.length + regularBlogPosts.length + caseStudies.length + 1
    },
    excluded: [
      'DUPLICATE CONTENT: /guides/hubspot-expert-guide → canonical: /guides/hubspot-expert',
      'DUPLICATE CONTENT: /faqs/services-5 → canonical: /faqs/services',
      'DUPLICATE CONTENT: /faqs/hubspot-services → canonical: /faqs/services',
      'DUPLICATE CONTENT: /faqs/hubspot-experts → canonical: /faqs/experts',
      'DUPLICATE CONTENT: /faqs/our-approach → canonical: /faqs/approach',
      'DUPLICATE CONTENT: /faqs/hubspot-modules → canonical: /faqs/modules',
      'Redirect pages (handled by redirectRoutes.tsx)',
      'Utility pages (/not-found, /404, etc.)',
      'API endpoints',
      'Blog redirect routes (/blog, /en/blog/*)',
      'AMP URLs',
      'Legacy URLs that redirect',
      'Query parameter variants'
    ],
    priorities: {
      homepage: '1.0',
      mainServices: '0.9',
      assessment: '0.9',
      importantContent: '0.8',
      regularContent: '0.7-0.8',
      supportPages: '0.6-0.7',
      legal: '0.3'
    }
  };
};
