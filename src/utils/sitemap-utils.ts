
import { blogPosts } from '@/data/blog';

// Define all site routes for the sitemap with more accurate lastmod dates
export const mainRoutes = [
  { url: "/", priority: "1.0", changefreq: "weekly", lastmod: "2025-05-14" },
  { url: "/services", priority: "0.9", changefreq: "weekly", lastmod: "2025-05-14" },
  { url: "/about", priority: "0.7", changefreq: "monthly", lastmod: "2025-05-14" },
  { url: "/approach", priority: "0.8", changefreq: "monthly", lastmod: "2025-05-14" },
  { url: "/insights", priority: "0.9", changefreq: "weekly", lastmod: "2025-05-14" },
  { url: "/case-studies", priority: "0.8", changefreq: "monthly", lastmod: "2025-05-14" },
  { url: "/contact", priority: "0.8", changefreq: "monthly", lastmod: "2025-05-14" },
  { url: "/get-started", priority: "0.9", changefreq: "monthly", lastmod: "2025-05-14" },
  { url: "/book", priority: "0.7", changefreq: "monthly", lastmod: "2025-05-14" },
  { url: "/faqs", priority: "0.7", changefreq: "monthly", lastmod: "2025-05-14" },
  { url: "/whitepapers", priority: "0.7", changefreq: "monthly", lastmod: "2025-05-14" },
  { url: "/privacy", priority: "0.5", changefreq: "yearly", lastmod: "2025-05-14" },
  { url: "/terms", priority: "0.5", changefreq: "yearly", lastmod: "2025-05-14" },
  { url: "/sitemap", priority: "0.3", changefreq: "yearly", lastmod: "2025-05-14" },
];

export const serviceRoutes = [
  { url: "/services/analytics-bi", priority: "0.8", changefreq: "monthly", lastmod: "2025-05-14" },
  { url: "/services/dataops-implementation", priority: "0.8", changefreq: "monthly", lastmod: "2025-05-14" },
  { url: "/services/marketing-operations-revops", priority: "0.8", changefreq: "monthly", lastmod: "2025-05-14" },
  { url: "/services/team-training", priority: "0.8", changefreq: "monthly", lastmod: "2025-05-14" },
];

// Generate sitemap XML for the index (main sitemap index file)
export const generateSitemapIndex = (baseUrl: string) => {
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  xml += '  <sitemap>\n';
  xml += `    <loc>${baseUrl}/sitemaps/main-sitemap.xml</loc>\n`;
  xml += '    <lastmod>2025-05-14</lastmod>\n';
  xml += '  </sitemap>\n';
  
  xml += '  <sitemap>\n';
  xml += `    <loc>${baseUrl}/sitemaps/services-sitemap.xml</loc>\n`;
  xml += '    <lastmod>2025-05-14</lastmod>\n';
  xml += '  </sitemap>\n';
  
  xml += '  <sitemap>\n';
  xml += `    <loc>${baseUrl}/sitemaps/blog-sitemap.xml</loc>\n`;
  xml += '    <lastmod>2025-05-14</lastmod>\n';
  xml += '  </sitemap>\n';
  
  xml += '  <sitemap>\n';
  xml += `    <loc>${baseUrl}/sitemaps/case-studies-sitemap.xml</loc>\n`;
  xml += '    <lastmod>2025-05-14</lastmod>\n';
  xml += '  </sitemap>\n';
  
  xml += '</sitemapindex>';
  
  return xml;
};

// Generate sitemap XML for main pages
export const generateMainSitemap = (baseUrl: string) => {
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  mainRoutes.forEach(route => {
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

// Generate sitemap XML for service pages
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

// Generate sitemap XML for blog posts
export const generateBlogSitemap = (baseUrl: string) => {
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  // Add blog post routes with actual dates from blog posts
  blogPosts.filter(post => !post.tags || !post.tags.includes('case study')).forEach(post => {
    // Format the date correctly for lastmod (YYYY-MM-DD)
    const postDate = new Date(post.date);
    const lastmod = postDate.toISOString().split('T')[0];
    
    xml += '  <url>\n';
    xml += `    <loc>${baseUrl}/insights/${post.id}</loc>\n`;
    xml += `    <lastmod>${lastmod}</lastmod>\n`;
    xml += '    <changefreq>monthly</changefreq>\n';
    xml += '    <priority>0.7</priority>\n';
    xml += '  </url>\n';
  });
  
  xml += '</urlset>';
  
  return xml;
};

// Generate sitemap XML for case studies
export const generateCaseStudiesSitemap = (baseUrl: string) => {
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  // Add case study routes
  blogPosts.filter(post => post.tags && post.tags.includes('case study')).forEach(post => {
    // Format the date correctly for lastmod (YYYY-MM-DD)
    const postDate = new Date(post.date);
    const lastmod = postDate.toISOString().split('T')[0];
    
    xml += '  <url>\n';
    xml += `    <loc>${baseUrl}/insights/${post.id}</loc>\n`;
    xml += `    <lastmod>${lastmod}</lastmod>\n`;
    xml += '    <changefreq>monthly</changefreq>\n';
    xml += '    <priority>0.7</priority>\n';
    xml += '  </url>\n';
  });
  
  // Also add case studies that don't have tags but are categorized as "Case Study"
  blogPosts.filter(post => post.category === "Case Study" && (!post.tags || !post.tags.includes('case study'))).forEach(post => {
    // Format the date correctly for lastmod (YYYY-MM-DD)
    const postDate = new Date(post.date);
    const lastmod = postDate.toISOString().split('T')[0];
    
    xml += '  <url>\n';
    xml += `    <loc>${baseUrl}/insights/${post.id}</loc>\n`;
    xml += `    <lastmod>${lastmod}</lastmod>\n`;
    xml += '    <changefreq>monthly</changefreq>\n';
    xml += '    <priority>0.7</priority>\n';
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
