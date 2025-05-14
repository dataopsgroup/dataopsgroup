
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { CheckCircle, Copy, Download } from 'lucide-react';
import { blogPosts } from '@/data/blog';

// Define all site routes for the sitemap with more accurate lastmod dates
const siteRoutes = [
  { url: "/", priority: "1.0", changefreq: "weekly", lastmod: "2025-05-14" },
  { url: "/services", priority: "0.9", changefreq: "weekly", lastmod: "2025-05-14" },
  { url: "/services/analytics-bi", priority: "0.8", changefreq: "monthly", lastmod: "2025-05-14" },
  { url: "/services/dataops-implementation", priority: "0.8", changefreq: "monthly", lastmod: "2025-05-14" },
  { url: "/services/marketing-operations-revops", priority: "0.8", changefreq: "monthly", lastmod: "2025-05-14" },
  { url: "/services/team-training", priority: "0.8", changefreq: "monthly", lastmod: "2025-05-14" },
  { url: "/about", priority: "0.7", changefreq: "monthly", lastmod: "2025-05-14" },
  { url: "/approach", priority: "0.8", changefreq: "monthly", lastmod: "2025-05-14" },
  { url: "/insights", priority: "0.9", changefreq: "weekly", lastmod: "2025-05-14" },
  { url: "/case-studies", priority: "0.8", changefreq: "monthly", lastmod: "2025-05-14" },
  { url: "/contact", priority: "0.8", changefreq: "monthly", lastmod: "2025-05-14" },
  { url: "/get-started", priority: "0.9", changefreq: "monthly", lastmod: "2025-05-14" },
  { url: "/book", priority: "0.7", changefreq: "monthly", lastmod: "2025-05-14" },
  { url: "/faqs", priority: "0.7", changefreq: "monthly", lastmod: "2025-05-14" },
  { url: "/whitepapers", priority: "0.7", changefreq: "monthly", lastmod: "2025-05-14" },
  { url: "/documentation", priority: "0.6", changefreq: "monthly", lastmod: "2025-05-14" },
  { url: "/privacy", priority: "0.5", changefreq: "yearly", lastmod: "2025-05-14" },
  { url: "/terms", priority: "0.5", changefreq: "yearly", lastmod: "2025-05-14" },
  { url: "/sitemap", priority: "0.3", changefreq: "yearly", lastmod: "2025-05-14" },
];

const SitemapGenerator: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [generated, setGenerated] = useState(false);
  
  // Generate sitemap XML content with improved formatting
  const generateSitemapXml = () => {
    const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'https://dataopsgroup.com';
    
    let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
    xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
    
    // Add standard routes with consistent date formatting
    siteRoutes.forEach(route => {
      xml += '  <url>\n';
      xml += `    <loc>${baseUrl}${route.url}</loc>\n`;
      xml += `    <lastmod>${route.lastmod}</lastmod>\n`;
      xml += `    <changefreq>${route.changefreq}</changefreq>\n`;
      xml += `    <priority>${route.priority}</priority>\n`;
      xml += '  </url>\n';
    });
    
    // Add blog post routes with actual dates from blog posts
    blogPosts.forEach(post => {
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
    
    setGenerated(true);
    return xml;
  };
  
  const sitemap = generated ? generateSitemapXml() : '';
  
  // Handle copy to clipboard
  const handleCopy = () => {
    navigator.clipboard.writeText(sitemap);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  
  // Handle download as file
  const handleDownload = () => {
    const blob = new Blob([sitemap], { type: 'application/xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'sitemap.xml';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <Card className="mb-8">
      <CardContent className="pt-6">
        <div className="space-y-4">
          <div className="flex flex-wrap gap-3">
            <Button onClick={() => setGenerated(true)} variant="secondary">
              Generate Sitemap
            </Button>
            
            {generated && (
              <>
                <Button onClick={handleCopy} className="flex items-center gap-2" disabled={copied}>
                  {copied ? <CheckCircle className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  {copied ? 'Copied!' : 'Copy XML'}
                </Button>
                
                <Button onClick={handleDownload} className="flex items-center gap-2" variant="outline">
                  <Download className="h-4 w-4" />
                  Download sitemap.xml
                </Button>
              </>
            )}
          </div>
          
          {generated && (
            <>
              <Alert>
                <AlertDescription>
                  <p className="text-sm">
                    After downloading, upload this sitemap.xml file to your web server root directory and ensure it's served with the correct MIME type (application/xml).
                    Then submit it to search engines via their Search Console tools.
                  </p>
                </AlertDescription>
              </Alert>
              
              <Textarea 
                value={sitemap} 
                rows={10}
                className="font-mono text-sm"
                readOnly
              />
            </>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default SitemapGenerator;
