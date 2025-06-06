
import { blogPosts } from '@/data/blog';

// Current date for lastmod
const TODAY = new Date().toISOString().split('T')[0];

// Define verified main routes that actually exist and should be indexed
export const mainRoutes = [
  { url: "/", priority: "1.0", changefreq: "weekly", lastmod: TODAY },
  { url: "/services", priority: "0.9", changefreq: "weekly", lastmod: TODAY },
  { url: "/about", priority: "0.8", changefreq: "monthly", lastmod: TODAY },
  { url: "/approach", priority: "0.8", changefreq: "monthly", lastmod: TODAY },
  { url: "/insights", priority: "0.9", changefreq: "weekly", lastmod: TODAY },
  { url: "/case-studies", priority: "0.8", changefreq: "monthly", lastmod: TODAY },
  { url: "/contact", priority: "0.8", changefreq: "monthly", lastmod: TODAY },
  { url: "/book", priority: "0.9", changefreq: "weekly", lastmod: TODAY },
  { url: "/pe-value-creation-program", priority: "0.9", changefreq: "monthly", lastmod: TODAY },
  { url: "/assessment", priority: "0.9", changefreq: "weekly", lastmod: TODAY },
  { url: "/assessment/results", priority: "0.7", changefreq: "monthly", lastmod: TODAY },
  { url: "/guides/hubspot-expert", priority: "0.8", changefreq: "monthly", lastmod: TODAY },
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

// Define FAQ category routes
export const faqRoutes = [
  { url: "/faqs/hubspot-services", priority: "0.6", changefreq: "monthly", lastmod: TODAY },
  { url: "/faqs/hubspot-experts", priority: "0.6", changefreq: "monthly", lastmod: TODAY },
  { url: "/faqs/data-quality", priority: "0.6", changefreq: "monthly", lastmod: TODAY },
  { url: "/faqs/our-approach", priority: "0.6", changefreq: "monthly", lastmod: TODAY },
  { url: "/faqs/hubspot-modules", priority: "0.6", changefreq: "monthly", lastmod: TODAY }
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
      'Redirect pages (handled by redirectRoutes.tsx)',
      'Utility pages (/not-found, /404, etc.)',
      'API endpoints',
      'Blog redirect routes (/blog, /en/blog/*)',
      'AMP URLs',
      'Legacy URLs that redirect'
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
