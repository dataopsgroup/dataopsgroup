
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { CheckCircle, Copy, Download } from 'lucide-react';

// Define all site routes for the sitemap
const siteRoutes = [
  { url: "/", priority: "1.0", changefreq: "weekly" },
  { url: "/services", priority: "0.9", changefreq: "weekly" },
  { url: "/services/analytics-bi", priority: "0.8", changefreq: "monthly" },
  { url: "/services/dataops-implementation", priority: "0.8", changefreq: "monthly" },
  { url: "/services/marketing-operations-revops", priority: "0.8", changefreq: "monthly" },
  { url: "/services/team-training", priority: "0.8", changefreq: "monthly" },
  { url: "/about", priority: "0.7", changefreq: "monthly" },
  { url: "/approach", priority: "0.8", changefreq: "monthly" },
  { url: "/insights", priority: "0.9", changefreq: "weekly" },
  { url: "/case-studies", priority: "0.8", changefreq: "monthly" },
  { url: "/contact", priority: "0.8", changefreq: "monthly" },
  { url: "/get-started", priority: "0.9", changefreq: "monthly" },
  { url: "/book", priority: "0.7", changefreq: "monthly" },
  { url: "/faqs", priority: "0.7", changefreq: "monthly" },
  { url: "/whitepapers", priority: "0.7", changefreq: "monthly" },
  { url: "/documentation", priority: "0.6", changefreq: "monthly" },
  { url: "/privacy", priority: "0.5", changefreq: "yearly" },
  { url: "/terms", priority: "0.5", changefreq: "yearly" },
  { url: "/sitemap", priority: "0.3", changefreq: "yearly" },
];

const SitemapGenerator: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [generated, setGenerated] = useState(false);
  
  // Generate sitemap XML content
  const generateSitemapXml = () => {
    const baseUrl = window.location.origin;
    const today = new Date().toISOString().split('T')[0];
    
    let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
    xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
    
    siteRoutes.forEach(route => {
      xml += '  <url>\n';
      xml += `    <loc>${baseUrl}${route.url}</loc>\n`;
      xml += `    <lastmod>${today}</lastmod>\n`;
      xml += `    <changefreq>${route.changefreq}</changefreq>\n`;
      xml += `    <priority>${route.priority}</priority>\n`;
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
                    After downloading, upload this sitemap.xml file to your web server root directory, 
                    then submit it to search engines via their Search Console tools.
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
