
import { blogPosts } from '@/data/blog';
import { mainRoutes, serviceRoutes } from './constants';
import { SiteRoute } from './types';

// Generate sitemap XML for the index (main sitemap index file)
export const generateSitemapIndex = (baseUrl: string): string => {
  const today = new Date().toISOString().split('T')[0];
  
  return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
<sitemap>
<loc>${baseUrl}/sitemaps/main-sitemap.xml</loc>
<lastmod>${today}</lastmod>
</sitemap>
<sitemap>
<loc>${baseUrl}/sitemaps/services-sitemap.xml</loc>
<lastmod>${today}</lastmod>
</sitemap>
<sitemap>
<loc>${baseUrl}/sitemaps/blog-sitemap.xml</loc>
<lastmod>${today}</lastmod>
</sitemap>
<sitemap>
<loc>${baseUrl}/sitemaps/case-studies-sitemap.xml</loc>
<lastmod>${today}</lastmod>
</sitemap>
</sitemapindex>`;
};

// Generate sitemap XML for main pages
export const generateMainSitemap = (baseUrl: string): string => {
  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;
  
  mainRoutes.forEach(route => {
    xml += `
<url>
<loc>${baseUrl}${route.url}</loc>
<lastmod>${route.lastmod}</lastmod>
<changefreq>${route.changefreq}</changefreq>
<priority>${route.priority}</priority>
</url>`;
  });
  
  xml += `
</urlset>`;
  
  return xml;
};

// Generate sitemap XML for service pages
export const generateServicesSitemap = (baseUrl: string): string => {
  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;
  
  serviceRoutes.forEach(route => {
    xml += `
<url>
<loc>${baseUrl}${route.url}</loc>
<lastmod>${route.lastmod}</lastmod>
<changefreq>${route.changefreq}</changefreq>
<priority>${route.priority}</priority>
</url>`;
  });
  
  xml += `
</urlset>`;
  
  return xml;
};

// Generate sitemap XML for blog posts (excluding case studies)
export const generateBlogSitemap = (baseUrl: string): string => {
  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;
  
  // Add main insights page
  xml += `
<url>
<loc>${baseUrl}/insights</loc>
<lastmod>2025-05-23</lastmod>
<changefreq>weekly</changefreq>
<priority>0.9</priority>
</url>`;
  
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
    
    // Give higher priority to important posts
    const priority = (post.id === 'hidden-cost-of-failed-hubspot-implementations') ? '0.8' : '0.7';
    
    xml += `
<url>
<loc>${baseUrl}/insights/${post.id}</loc>
<lastmod>${finalLastmod}</lastmod>
<changefreq>monthly</changefreq>
<priority>${priority}</priority>
</url>`;
  });
  
  xml += `
</urlset>`;
  
  return xml;
};

// Generate sitemap XML for case studies
export const generateCaseStudiesSitemap = (baseUrl: string): string => {
  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;
  
  // Add case studies main page
  xml += `
<url>
<loc>${baseUrl}/case-studies</loc>
<lastmod>2025-05-23</lastmod>
<changefreq>monthly</changefreq>
<priority>0.8</priority>
</url>`;
  
  // Get all case studies by tag or category
  const caseStudies = blogPosts.filter(post => 
    (post.tags && post.tags.includes('case study')) || 
    post.category === "Case Study"
  );
  
  // Add case study post routes
  caseStudies.forEach(post => {
    // Format the date correctly for lastmod (YYYY-MM-DD)
    const postDate = new Date(post.date);
    const lastmod = postDate.toISOString().split('T')[0];
    
    // Use modifiedDate if available, otherwise use the original date
    const finalLastmod = post.modifiedDate 
      ? new Date(post.modifiedDate).toISOString().split('T')[0] 
      : lastmod;
    
    xml += `
<url>
<loc>${baseUrl}/insights/${post.id}</loc>
<lastmod>${finalLastmod}</lastmod>
<changefreq>monthly</changefreq>
<priority>0.8</priority>
</url>`;
  });
  
  xml += `
</urlset>`;
  
  return xml;
};
