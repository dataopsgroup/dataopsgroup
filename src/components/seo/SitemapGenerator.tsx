
import React from 'react';
import { blogPosts } from '@/data/blog';

const createSitemapContent = () => {
  const baseUrl = window.location.origin;

  // All static pages
  const staticPages = [
    '',
    '/services',
    '/approach',
    '/case-studies',
    '/insights',
    '/contact',
    '/faqs',
    '/get-started',
  ];

  // Individual service pages
  const servicePages = [
    '/services/analytics-bi',
    '/services/dataops-implementation',
    '/services/marketing-operations-revops',
    '/services/team-training',
  ];

  // Blog post pages
  const blogPages = blogPosts.map(post => `/insights/${post.id}`);

  // Combine all pages
  const allPages = [...staticPages, ...servicePages, ...blogPages];

  // Generate the XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
  .map(
    page => `  <url>
    <loc>${baseUrl}${page}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${page.includes('/insights/') ? 'monthly' : 'weekly'}</changefreq>
    <priority>${page === '' ? '1.0' : page.includes('/insights/') ? '0.7' : '0.8'}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return sitemap;
};

const SitemapGenerator = () => {
  const downloadSitemap = () => {
    const content = createSitemapContent();
    const blob = new Blob([content], { type: 'text/xml' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'sitemap.xml';
    link.click();
  };

  return (
    <div className="mb-4">
      <button
        className="px-4 py-2 bg-dataops-600 text-white rounded hover:bg-dataops-700 transition-colors"
        onClick={downloadSitemap}
      >
        Download Sitemap.xml
      </button>
      <p className="mt-2 text-sm text-gray-600">
        Place the downloaded sitemap.xml file in your site's root directory.
      </p>
    </div>
  );
};

export default SitemapGenerator;
