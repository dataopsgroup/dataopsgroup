
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { CheckCircle, Copy, Download, FileText } from 'lucide-react';
import { blogPosts } from '@/data/blog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Define all site routes for the sitemap with more accurate lastmod dates
const mainRoutes = [
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
  { url: "/documentation", priority: "0.6", changefreq: "monthly", lastmod: "2025-05-14" },
  { url: "/privacy", priority: "0.5", changefreq: "yearly", lastmod: "2025-05-14" },
  { url: "/terms", priority: "0.5", changefreq: "yearly", lastmod: "2025-05-14" },
  { url: "/sitemap", priority: "0.3", changefreq: "yearly", lastmod: "2025-05-14" },
];

const serviceRoutes = [
  { url: "/services/analytics-bi", priority: "0.8", changefreq: "monthly", lastmod: "2025-05-14" },
  { url: "/services/dataops-implementation", priority: "0.8", changefreq: "monthly", lastmod: "2025-05-14" },
  { url: "/services/marketing-operations-revops", priority: "0.8", changefreq: "monthly", lastmod: "2025-05-14" },
  { url: "/services/team-training", priority: "0.8", changefreq: "monthly", lastmod: "2025-05-14" },
];

const SitemapGenerator: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState('index');
  const [sitemaps, setSitemaps] = useState({
    index: '',
    main: '',
    services: '',
    blog: '',
    caseStudies: ''
  });
  
  // Generate sitemap XML content with improved formatting
  useEffect(() => {
    generateAllSitemaps();
  }, []);
  
  const generateAllSitemaps = () => {
    const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'https://dataopsgroup.com';
    
    // Generate the index sitemap
    const indexSitemap = generateSitemapIndex(baseUrl);
    
    // Generate the main sitemap
    const mainSitemap = generateMainSitemap(baseUrl);
    
    // Generate the services sitemap
    const servicesSitemap = generateServicesSitemap(baseUrl);
    
    // Generate the blog sitemap
    const blogSitemap = generateBlogSitemap(baseUrl);
    
    // Generate the case studies sitemap
    const caseStudiesSitemap = generateCaseStudiesSitemap(baseUrl);
    
    setSitemaps({
      index: indexSitemap,
      main: mainSitemap,
      services: servicesSitemap,
      blog: blogSitemap,
      caseStudies: caseStudiesSitemap
    });
  };
  
  const generateSitemapIndex = (baseUrl: string) => {
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
  
  const generateMainSitemap = (baseUrl: string) => {
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
  
  const generateServicesSitemap = (baseUrl: string) => {
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
  
  const generateBlogSitemap = (baseUrl: string) => {
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
  
  const generateCaseStudiesSitemap = (baseUrl: string) => {
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
  
  // Get the current sitemap content based on active tab
  const currentSitemap = sitemaps[activeTab as keyof typeof sitemaps];
  
  // Handle copy to clipboard
  const handleCopy = () => {
    navigator.clipboard.writeText(currentSitemap);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  
  // Handle download as file
  const handleDownload = () => {
    const blob = new Blob([currentSitemap], { type: 'application/xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    
    // Set the file name based on the active tab
    let filename = 'sitemap-index.xml';
    if (activeTab === 'main') filename = 'main-sitemap.xml';
    if (activeTab === 'services') filename = 'services-sitemap.xml';
    if (activeTab === 'blog') filename = 'blog-sitemap.xml';
    if (activeTab === 'caseStudies') filename = 'case-studies-sitemap.xml';
    
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };
  
  // Handle generation of all sitemaps and download as zip
  const handleGenerateAll = () => {
    generateAllSitemaps();
  };

  // Handle download all as separate files
  const handleDownloadAll = () => {
    Object.keys(sitemaps).forEach((key) => {
      const sitemap = sitemaps[key as keyof typeof sitemaps];
      const blob = new Blob([sitemap], { type: 'application/xml' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      
      // Set the file name based on the key
      let filename = 'sitemap-index.xml';
      if (key === 'main') filename = 'main-sitemap.xml';
      if (key === 'services') filename = 'services-sitemap.xml';
      if (key === 'blog') filename = 'blog-sitemap.xml';
      if (key === 'caseStudies') filename = 'case-studies-sitemap.xml';
      
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      
      // Small delay to avoid browser issues with multiple downloads
      setTimeout(() => {
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      }, 100);
    });
  };

  return (
    <Card className="mb-8">
      <CardContent className="pt-6 space-y-6">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <Button onClick={handleGenerateAll} variant="secondary" className="flex items-center gap-2">
            <FileText className="h-4 w-4" />
            Refresh Sitemaps
          </Button>
          
          <Button onClick={handleDownloadAll} className="flex items-center gap-2" variant="outline">
            <Download className="h-4 w-4" />
            Download All Sitemaps
          </Button>
        </div>
        
        <Alert>
          <AlertDescription>
            <p className="text-sm">
              These modular sitemaps make maintenance easier. After downloading, upload them to your web server's
              <code className="bg-muted p-1 rounded mx-1">sitemaps/</code> 
              directory (create it if needed) and ensure the main
              <code className="bg-muted p-1 rounded mx-1">sitemap.xml</code>
              references them correctly.
            </p>
          </AlertDescription>
        </Alert>
        
        <Tabs defaultValue="index" value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid grid-cols-5">
            <TabsTrigger value="index">Sitemap Index</TabsTrigger>
            <TabsTrigger value="main">Main</TabsTrigger>
            <TabsTrigger value="services">Services</TabsTrigger>
            <TabsTrigger value="blog">Blog</TabsTrigger>
            <TabsTrigger value="caseStudies">Case Studies</TabsTrigger>
          </TabsList>
          {Object.keys(sitemaps).map((key) => (
            <TabsContent key={key} value={key} className="space-y-4">
              <div className="flex flex-wrap gap-3 my-4">
                <Button onClick={handleCopy} className="flex items-center gap-2" disabled={copied}>
                  {copied ? <CheckCircle className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  {copied ? 'Copied!' : 'Copy XML'}
                </Button>
                
                <Button onClick={handleDownload} className="flex items-center gap-2" variant="outline">
                  <Download className="h-4 w-4" />
                  Download {key === 'index' ? 'Sitemap Index' : key} XML
                </Button>
              </div>
              
              <Textarea 
                value={sitemaps[key as keyof typeof sitemaps]} 
                rows={20}
                className="font-mono text-sm"
                readOnly
              />
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default SitemapGenerator;
