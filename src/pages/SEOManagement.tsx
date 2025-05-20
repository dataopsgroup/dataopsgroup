import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceSchema from '@/components/seo/ServiceSchema';
import { Helmet } from 'react-helmet-async';
import SitemapGenerator from '@/components/seo/SitemapGenerator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const SEOManagement = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <ServiceSchema 
        name="SEO Management for HubSpot"
        description="Professional SEO management services to optimize your HubSpot website and content for higher search engine rankings and increased organic traffic."
        url="/seo-management"
        serviceOutput="Improved search engine rankings, increased organic traffic, and enhanced content visibility"
      />
      <Navbar />
      
      <main className="flex-grow pt-28 px-4">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold mb-8">SEO Management</h1>
          
          <Tabs defaultValue="sitemap" className="mb-12">
            <TabsList>
              <TabsTrigger value="sitemap">Sitemap</TabsTrigger>
              <TabsTrigger value="meta">Meta Tags</TabsTrigger>
              <TabsTrigger value="schema">Schema Markup</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
            </TabsList>
            
            <TabsContent value="sitemap" className="mt-4">
              <h2 className="text-xl font-semibold mb-4">Sitemap Generator</h2>
              <p className="mb-4">Generate a sitemap.xml file to submit to search engines.</p>
              <SitemapGenerator />
            </TabsContent>
            
            <TabsContent value="meta" className="mt-4">
              <h2 className="text-xl font-semibold mb-4">Meta Tags Checker</h2>
              <p className="mb-4">All pages now have the following meta tags:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Title tag</li>
                <li>Meta description</li>
                <li>Meta keywords</li>
                <li>Canonical URL</li>
                <li>Open Graph tags (for social sharing)</li>
                <li>Twitter Card tags</li>
              </ul>
            </TabsContent>
            
            <TabsContent value="schema" className="mt-4">
              <h2 className="text-xl font-semibold mb-4">Schema Markup Status</h2>
              <p className="mb-4">The following schema markup has been implemented:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Organization - Applied to homepage</li>
                <li>WebSite - Applied to homepage</li>
                <li>BlogPosting - Applied to all blog posts</li>
                <li>BreadcrumbList - Applied to all blog posts and main pages</li>
                <li>CollectionPage - Applied to blog listing page</li>
              </ul>
            </TabsContent>
            
            <TabsContent value="analytics" className="mt-4">
              <h2 className="text-xl font-semibold mb-4">Analytics Status</h2>
              <p className="mb-4">Google Analytics tracking has been implemented with ID: AW-16996265146.</p>
              <p>The tracking code is placed in the head section of the website and will track all page views and user interactions.</p>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SEOManagement;
