
import { SitemapStream, streamToPromise } from 'sitemap';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const baseUrl = 'https://dataopsgroup.com';

// Define all routes with priorities and change frequencies - updated with clean URLs
const routes = [
  // Main pages - highest priority
  { url: '/', changefreq: 'weekly', priority: 1.0, lastmod: new Date() },
  { url: '/services', changefreq: 'weekly', priority: 0.9, lastmod: new Date() },
  { url: '/about', changefreq: 'monthly', priority: 0.8, lastmod: new Date() },
  { url: '/approach', changefreq: 'monthly', priority: 0.8, lastmod: new Date() },
  { url: '/insights', changefreq: 'weekly', priority: 0.9, lastmod: new Date() },
  { url: '/case-studies', changefreq: 'monthly', priority: 0.8, lastmod: new Date() },
  { url: '/contact', changefreq: 'monthly', priority: 0.8, lastmod: new Date() },
  { url: '/book', changefreq: 'weekly', priority: 0.9, lastmod: new Date() },
  { url: '/pe-value-creation-program', changefreq: 'monthly', priority: 0.9, lastmod: new Date() },
  { url: '/data-operations-assessment', changefreq: 'weekly', priority: 0.9, lastmod: new Date() },
  { url: '/data-operations-assessment/results', changefreq: 'monthly', priority: 0.7, lastmod: new Date() },
  { url: '/guides/hubspot-expert', changefreq: 'monthly', priority: 0.8, lastmod: new Date() },
  { url: '/guides/complete-hubspot-guide-for-private-equity', changefreq: 'monthly', priority: 0.8, lastmod: new Date() },
  
  // Services - high priority
  { url: '/services/marketing-operations-revops', changefreq: 'monthly', priority: 0.8, lastmod: new Date() },
  { url: '/services/analytics-bi', changefreq: 'monthly', priority: 0.8, lastmod: new Date() },
  { url: '/services/dataops-implementation', changefreq: 'monthly', priority: 0.8, lastmod: new Date() },
  { url: '/services/team-training', changefreq: 'monthly', priority: 0.8, lastmod: new Date() },
  
  // FAQ pages
  { url: '/faqs', changefreq: 'monthly', priority: 0.7, lastmod: new Date() },
  { url: '/faqs/hubspot-services', changefreq: 'monthly', priority: 0.6, lastmod: new Date() },
  { url: '/faqs/hubspot-experts', changefreq: 'monthly', priority: 0.6, lastmod: new Date() },
  { url: '/faqs/data-quality', changefreq: 'monthly', priority: 0.6, lastmod: new Date() },
  { url: '/faqs/our-approach', changefreq: 'monthly', priority: 0.6, lastmod: new Date() },
  { url: '/faqs/hubspot-modules', changefreq: 'monthly', priority: 0.6, lastmod: new Date() },
  
  // Utility pages
  { url: '/sitemap', changefreq: 'monthly', priority: 0.5, lastmod: new Date() },
  { url: '/privacy', changefreq: 'yearly', priority: 0.3, lastmod: new Date() },
  { url: '/terms', changefreq: 'yearly', priority: 0.3, lastmod: new Date() },
];

async function generateEnhancedSitemap() {
  console.log('🗺️  Generating enhanced sitemap...');
  
  const stream = new SitemapStream({ hostname: baseUrl });
  
  // Add all routes to sitemap
  routes.forEach(route => {
    stream.write(route);
  });
  
  stream.end();
  
  const sitemap = await streamToPromise(stream);
  
  // Write to public directory
  const publicDir = path.join(__dirname, '..', 'public');
  const sitemapPath = path.join(publicDir, 'sitemap.xml');
  
  fs.writeFileSync(sitemapPath, sitemap.toString());
  
  console.log(`✅ Enhanced sitemap generated: ${sitemapPath}`);
  console.log(`📄 ${routes.length} routes included`);
  
  // Also generate a simple robots.txt if it doesn't exist
  const robotsPath = path.join(publicDir, 'robots.txt');
  if (!fs.existsSync(robotsPath)) {
    const robotsContent = `User-agent: *
Allow: /

Sitemap: ${baseUrl}/sitemap.xml`;
    
    fs.writeFileSync(robotsPath, robotsContent);
    console.log('✅ robots.txt generated');
  }
}

generateEnhancedSitemap().catch(console.error);
