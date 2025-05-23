
import { blogPosts } from '@/data/blog';

// Define all site routes for the sitemap with more accurate lastmod dates
export const mainRoutes = [
  { url: "/", priority: "1.0", changefreq: "weekly", lastmod: "2025-05-23" },
  { url: "/services", priority: "0.9", changefreq: "weekly", lastmod: "2025-05-23" },
  { url: "/about", priority: "0.7", changefreq: "monthly", lastmod: "2025-05-23" },
  { url: "/approach", priority: "0.8", changefreq: "monthly", lastmod: "2025-05-19" },
  { url: "/insights", priority: "0.9", changefreq: "weekly", lastmod: "2025-05-23" },
  { url: "/case-studies", priority: "0.8", changefreq: "monthly", lastmod: "2025-05-23" },
  { url: "/contact", priority: "0.8", changefreq: "monthly", lastmod: "2025-05-23" },
  { url: "/get-started", priority: "0.9", changefreq: "monthly", lastmod: "2025-05-23" },
  { url: "/book", priority: "0.7", changefreq: "monthly", lastmod: "2025-05-19" },
  { url: "/faqs", priority: "0.7", changefreq: "monthly", lastmod: "2025-05-19" },
  { url: "/whitepapers", priority: "0.7", changefreq: "monthly", lastmod: "2025-05-19" },
  { url: "/assessment", priority: "0.9", changefreq: "weekly", lastmod: "2025-05-23" },
  { url: "/documentation", priority: "0.6", changefreq: "monthly", lastmod: "2025-05-19" },
  { url: "/privacy", priority: "0.5", changefreq: "yearly", lastmod: "2025-05-23" },
  { url: "/terms", priority: "0.5", changefreq: "yearly", lastmod: "2025-05-19" },
  { url: "/sitemap", priority: "0.3", changefreq: "yearly", lastmod: "2025-05-19" },
  { url: "/leadership", priority: "0.6", changefreq: "monthly", lastmod: "2025-05-19" },
  { url: "/hubspot-assessment-results", priority: "0.7", changefreq: "monthly", lastmod: "2025-05-19" },
  { url: "/how-to-hire-a-hubspot-expert-in-2025", priority: "0.8", changefreq: "monthly", lastmod: "2025-05-23" },
];

export const serviceRoutes = [
  { url: "/services/analytics-bi", priority: "0.8", changefreq: "monthly", lastmod: "2025-05-23" },
  { url: "/services/dataops-implementation", priority: "0.8", changefreq: "monthly", lastmod: "2025-05-23" },
  { url: "/services/marketing-operations-revops", priority: "0.8", changefreq: "monthly", lastmod: "2025-05-23" },
  { url: "/services/team-training", priority: "0.8", changefreq: "monthly", lastmod: "2025-05-23" },
  { url: "/seo-management", priority: "0.6", changefreq: "monthly", lastmod: "2025-05-19" },
];

// Generate sitemap XML for the index (main sitemap index file)
export const generateSitemapIndex = (baseUrl: string) => {
  const today = new Date().toISOString().split('T')[0];
  
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  xml += '  <sitemap>\n';
  xml += `    <loc>${baseUrl}/sitemaps/main-sitemap.xml</loc>\n`;
  xml += `    <lastmod>${today}</lastmod>\n`;
  xml += '  </sitemap>\n';
  
  xml += '  <sitemap>\n';
  xml += `    <loc>${baseUrl}/sitemaps/services-sitemap.xml</loc>\n`;
  xml += `    <lastmod>${today}</lastmod>\n`;
  xml += '  </sitemap>\n';
  
  xml += '  <sitemap>\n';
  xml += `    <loc>${baseUrl}/sitemaps/blog-sitemap.xml</loc>\n`;
  xml += `    <lastmod>${today}</lastmod>\n`;
  xml += '  </sitemap>\n';
  
  xml += '  <sitemap>\n';
  xml += `    <loc>${baseUrl}/sitemaps/case-studies-sitemap.xml</loc>\n`;
  xml += `    <lastmod>${today}</lastmod>\n`;
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

// Generate sitemap XML for blog posts - fixed to properly include all blog posts
export const generateBlogSitemap = (baseUrl: string) => {
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  // Add comment for clarity
  xml += '  <!-- Blog Posts -->\n';
  xml += `  <!-- Generated: ${new Date().toISOString()} -->\n`;
  xml += `  <!-- Total Posts: ${blogPosts.length} -->\n`;
  
  // Add blog post routes with actual dates from blog posts
  // Filter out case studies which will go in their own sitemap
  const regularBlogPosts = blogPosts.filter(post => 
    (!post.tags || !post.tags.includes('case study')) && 
    (post.category !== "Case Study")
  );
  
  regularBlogPosts.forEach(post => {
    // Format the date correctly for lastmod (YYYY-MM-DD)
    const postDate = new Date(post.date);
    const lastmod = postDate.toISOString().split('T')[0];
    
    // Use modifiedDate if available, otherwise use the original date
    const finalLastmod = post.modifiedDate 
      ? new Date(post.modifiedDate).toISOString().split('T')[0] 
      : lastmod;
    
    xml += '  <url>\n';
    xml += `    <loc>${baseUrl}/insights/${post.id}</loc>\n`;
    xml += `    <lastmod>${finalLastmod}</lastmod>\n`;
    xml += '    <changefreq>monthly</changefreq>\n';
    
    // Give higher priority to important posts like the hidden cost post
    // Instead of using 'featured' which doesn't exist in BlogPost type, we'll check by ID
    const priority = (post.id === 'hidden-cost-of-failed-hubspot-implementations') ? '0.8' : '0.7';
    
    xml += `    <priority>${priority}</priority>\n`;
    xml += '  </url>\n';
  });
  
  xml += '</urlset>';
  
  return xml;
};

// Generate sitemap XML for case studies
export const generateCaseStudiesSitemap = (baseUrl: string) => {
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  // Add case study from the main case studies page
  xml += '  <url>\n';
  xml += `    <loc>${baseUrl}/case-studies</loc>\n`;
  xml += `    <lastmod>2025-05-23</lastmod>\n`;
  xml += '    <changefreq>monthly</changefreq>\n';
  xml += '    <priority>0.8</priority>\n';
  xml += '  </url>\n';
  
  // Get all case studies by tag or category
  const caseStudies = blogPosts.filter(post => 
    (post.tags && post.tags.includes('case study')) || 
    post.category === "Case Study"
  );
  
  // Add comment for clarity
  xml += '  <!-- Case Study Posts -->\n';
  xml += `  <!-- Generated: ${new Date().toISOString()} -->\n`;
  xml += `  <!-- Total Case Studies: ${caseStudies.length} -->\n`;
  
  // Add case study post routes
  caseStudies.forEach(post => {
    // Format the date correctly for lastmod (YYYY-MM-DD)
    const postDate = new Date(post.date);
    const lastmod = postDate.toISOString().split('T')[0];
    
    // Use modifiedDate if available, otherwise use the original date
    const finalLastmod = post.modifiedDate 
      ? new Date(post.modifiedDate).toISOString().split('T')[0] 
      : lastmod;
    
    xml += '  <url>\n';
    xml += `    <loc>${baseUrl}/insights/${post.id}</loc>\n`;
    xml += `    <lastmod>${finalLastmod}</lastmod>\n`;
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
