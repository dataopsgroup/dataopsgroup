
import { blogPosts } from '@/data/blog';

export interface SitemapUrl {
  loc: string;
  lastmod: string;
  changefreq: string;
  priority: string;
}

export const generateCleanXML = (urls: SitemapUrl[]): string => {
  const urlEntries = urls.map(url => 
    `<url><loc>${url.loc}</loc><lastmod>${url.lastmod}</lastmod><changefreq>${url.changefreq}</changefreq><priority>${url.priority}</priority></url>`
  ).join('');
  
  return `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urlEntries}</urlset>`;
};

export const generateSitemapIndex = (baseUrl: string): string => {
  const today = new Date().toISOString().split('T')[0];
  const sitemaps = [
    { loc: `${baseUrl}/main-sitemap.xml`, lastmod: today },
    { loc: `${baseUrl}/services-sitemap.xml`, lastmod: today },
    { loc: `${baseUrl}/blog-sitemap.xml`, lastmod: today },
    { loc: `${baseUrl}/case-studies-sitemap.xml`, lastmod: today }
  ];
  
  const sitemapEntries = sitemaps.map(sitemap => 
    `<sitemap><loc>${sitemap.loc}</loc><lastmod>${sitemap.lastmod}</lastmod></sitemap>`
  ).join('');
  
  return `<?xml version="1.0" encoding="UTF-8"?><sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${sitemapEntries}</sitemapindex>`;
};

export const generateMainSitemap = (baseUrl: string): string => {
  const today = new Date().toISOString().split('T')[0];
  const mainPages: SitemapUrl[] = [
    { loc: `${baseUrl}/`, lastmod: today, changefreq: 'weekly', priority: '1.0' },
    { loc: `${baseUrl}/services`, lastmod: today, changefreq: 'weekly', priority: '0.9' },
    { loc: `${baseUrl}/about`, lastmod: today, changefreq: 'monthly', priority: '0.8' },
    { loc: `${baseUrl}/approach`, lastmod: today, changefreq: 'monthly', priority: '0.8' },
    { loc: `${baseUrl}/insights`, lastmod: today, changefreq: 'weekly', priority: '0.9' },
    { loc: `${baseUrl}/case-studies`, lastmod: today, changefreq: 'monthly', priority: '0.8' },
    { loc: `${baseUrl}/contact`, lastmod: today, changefreq: 'monthly', priority: '0.8' },
    { loc: `${baseUrl}/book`, lastmod: today, changefreq: 'monthly', priority: '0.7' },
    { loc: `${baseUrl}/assessment`, lastmod: today, changefreq: 'weekly', priority: '0.9' },
    { loc: `${baseUrl}/hubspot-assessment-results`, lastmod: today, changefreq: 'monthly', priority: '0.7' },
    { loc: `${baseUrl}/how-to-hire-a-hubspot-expert-in-2025`, lastmod: today, changefreq: 'monthly', priority: '0.8' },
    { loc: `${baseUrl}/faqs`, lastmod: today, changefreq: 'monthly', priority: '0.7' },
    { loc: `${baseUrl}/privacy`, lastmod: today, changefreq: 'yearly', priority: '0.3' }
  ];
  
  return generateCleanXML(mainPages);
};

export const generateServicesSitemap = (baseUrl: string): string => {
  const today = new Date().toISOString().split('T')[0];
  const servicePages: SitemapUrl[] = [
    { loc: `${baseUrl}/services/analytics-bi`, lastmod: today, changefreq: 'monthly', priority: '0.9' },
    { loc: `${baseUrl}/services/dataops-implementation`, lastmod: today, changefreq: 'monthly', priority: '0.9' },
    { loc: `${baseUrl}/services/marketing-operations-revops`, lastmod: today, changefreq: 'monthly', priority: '0.9' },
    { loc: `${baseUrl}/services/team-training`, lastmod: today, changefreq: 'monthly', priority: '0.9' }
  ];
  
  return generateCleanXML(servicePages);
};

export const generateBlogSitemap = (baseUrl: string): string => {
  const regularBlogPosts = blogPosts.filter(post => 
    (!post.tags || !post.tags.includes('case study')) && 
    (post.category !== "Case Study")
  );
  
  const blogUrls: SitemapUrl[] = regularBlogPosts.map(post => {
    const postDate = new Date(post.date);
    const lastmod = post.modifiedDate 
      ? new Date(post.modifiedDate).toISOString().split('T')[0]
      : postDate.toISOString().split('T')[0];
    
    const priority = (post.id === 'hidden-cost-of-failed-hubspot-implementations') ? '0.8' : '0.7';
    
    return {
      loc: `${baseUrl}/insights/${post.id}`,
      lastmod,
      changefreq: 'monthly',
      priority
    };
  });
  
  return generateCleanXML(blogUrls);
};

export const generateCaseStudiesSitemap = (baseUrl: string): string => {
  const caseStudies = blogPosts.filter(post => 
    (post.tags && post.tags.includes('case study')) || 
    post.category === "Case Study"
  );
  
  const caseStudyUrls: SitemapUrl[] = caseStudies.map(post => {
    const postDate = new Date(post.date);
    const lastmod = post.modifiedDate 
      ? new Date(post.modifiedDate).toISOString().split('T')[0]
      : postDate.toISOString().split('T')[0];
    
    return {
      loc: `${baseUrl}/insights/${post.id}`,
      lastmod,
      changefreq: 'monthly',
      priority: '0.8'
    };
  });
  
  return generateCleanXML(caseStudyUrls);
};
