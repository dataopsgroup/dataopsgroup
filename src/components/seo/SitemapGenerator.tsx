
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { generateAllSitemaps } from '@/utils/sitemap-utils';
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
  
  // Generate sitemap XML content with improved formatting
  useEffect(() => {
    generateSitemaps();
  }, []);
  
  const generateSitemaps = () => {
    const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'https://dataopsgroup.com';
    const generatedSitemaps = generateAllSitemaps(baseUrl);
    setSitemaps(generatedSitemaps);
  };
  
  // Handle download all as separate files
  const handleDownloadAll = () => {
    Object.keys(sitemaps).forEach((key) => {
      const sitemap = sitemaps[key as keyof SitemapData];
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
  );
};

export default SitemapGenerator;
