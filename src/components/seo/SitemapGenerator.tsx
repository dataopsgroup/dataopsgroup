
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { generateAllSitemaps, getSitemapSummary } from '@/utils/sitemap-utils';
import SitemapControls from '@/components/sitemap/SitemapControls';
import SitemapTabContent from '@/components/sitemap/SitemapTabContent';

interface SitemapData {
  index: string;
  main: string;
  services: string;
  blog: string;
  caseStudies: string;
}

const SitemapGenerator: React.FC = () => {
  const [activeTab, setActiveTab] = useState('index');
  const [sitemaps, setSitemaps] = useState<SitemapData>({
    index: '',
    main: '',
    services: '',
    blog: '',
    caseStudies: ''
  });
  
  // Generate sitemap XML content
  useEffect(() => {
    generateSitemaps();
  }, []);
  
  const generateSitemaps = () => {
    const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'https://dataopsgroup.com';
    const generatedSitemaps = generateAllSitemaps(baseUrl);
    setSitemaps(generatedSitemaps);
  };
  
  // Get sitemap summary
  const summary = getSitemapSummary();
  
  // Handle download all as separate files
  const handleDownloadAll = () => {
    Object.keys(sitemaps).forEach((key) => {
      const sitemap = sitemaps[key as keyof SitemapData];
      const blob = new Blob([sitemap], { type: 'application/xml' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      
      let filename = 'sitemap-index.xml';
      if (key === 'main') filename = 'main-sitemap.xml';
      if (key === 'services') filename = 'services-sitemap.xml';
      if (key === 'blog') filename = 'blog-sitemap.xml';
      if (key === 'caseStudies') filename = 'case-studies-sitemap.xml';
      
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      
      setTimeout(() => {
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      }, 100);
    });
  };

  return (
    <div className="space-y-6">
      {/* Summary Card */}
      <Card>
        <CardContent className="pt-6">
          <h3 className="text-lg font-semibold mb-4">Sitemap Summary</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium text-green-700 mb-2">✅ Included Pages ({summary.included.total} total)</h4>
              <ul className="text-sm space-y-1">
                <li>• Main Pages: {summary.included.mainPages}</li>
                <li>• Service Pages: {summary.included.servicePages}</li>
                <li>• Blog Posts: {summary.included.blogPosts}</li>
                <li>• Case Studies: {summary.included.caseStudies}</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-red-700 mb-2">❌ Excluded Pages</h4>
              <ul className="text-sm space-y-1">
                {summary.excluded.map((item, index) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>
          
          <Alert className="mt-4">
            <AlertDescription>
              <strong>Last Generated:</strong> {new Date().toLocaleString()}<br/>
              <strong>All URLs verified:</strong> Only existing, indexable pages included<br/>
              <strong>Priorities set:</strong> Homepage (1.0), Services (0.9), Content (0.7-0.8)
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Generator */}
      <Card>
        <CardContent className="pt-6 space-y-6">
          <SitemapControls 
            onGenerateAll={generateSitemaps}
            onDownloadAll={handleDownloadAll}
          />
          
          <Tabs defaultValue="index" value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid grid-cols-5">
              <TabsTrigger value="index">Sitemap Index</TabsTrigger>
              <TabsTrigger value="main">Main</TabsTrigger>
              <TabsTrigger value="services">Services</TabsTrigger>
              <TabsTrigger value="blog">Blog</TabsTrigger>
              <TabsTrigger value="caseStudies">Case Studies</TabsTrigger>
            </TabsList>
            
            {Object.keys(sitemaps).map((key) => (
              <TabsContent key={key} value={key}>
                <SitemapTabContent 
                  sitemap={sitemaps[key as keyof SitemapData]} 
                  tabKey={key} 
                />
              </TabsContent>
            ))}
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default SitemapGenerator;
