
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceSchema from '@/components/seo/ServiceSchema';
import { Helmet } from 'react-helmet-async';
import SitemapGenerator from '@/components/seo/SitemapGenerator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import { 
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import SearchConsoleOverview from "@/components/seo/SearchConsoleOverview";
import KeywordAnalysis from "@/components/seo/KeywordAnalysis";

const SEOManagement = () => {
  const [verificationId, setVerificationId] = useState('');
  const [gscVerified, setGscVerified] = useState(false);
  
  // Mock function for saving verification ID - in a real app, this would save to a database or API
  const saveVerificationId = () => {
    localStorage.setItem('gscVerificationId', verificationId);
    setGscVerified(true);
    // Here you would typically also update a backend API
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <ServiceSchema 
        name="SEO Management for HubSpot"
        description="Professional SEO management services to optimize your HubSpot website and content for higher search engine rankings and increased organic traffic."
        url="/seo-management"
        serviceOutput="Improved search engine rankings, increased organic traffic, and enhanced content visibility"
      />
      
      <BreadcrumbSchema 
        items={[
          { name: "Home", url: "/" },
          { name: "SEO Management", url: "/seo-management" }
        ]} 
      />
      
      <Navbar />
      
      <main className="flex-grow pt-28 px-4">
        <div className="container mx-auto">
          <Breadcrumb className="mb-4">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>SEO Management</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          
          <h1 className="text-3xl font-bold mb-8">SEO Management</h1>
          
          <Tabs defaultValue="sitemap" className="mb-12">
            <TabsList>
              <TabsTrigger value="sitemap">Sitemap</TabsTrigger>
              <TabsTrigger value="meta">Meta Tags</TabsTrigger>
              <TabsTrigger value="schema">Schema Markup</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="search-console">Search Console</TabsTrigger>
              <TabsTrigger value="keywords">Keyword Analysis</TabsTrigger>
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
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Meta Tag Verification</CardTitle>
                  <CardDescription>Verify and check your meta tags across the site</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Page URL</label>
                      <Input type="text" placeholder="Enter page URL (e.g., /insights/blog-post)" />
                    </div>
                    <Button>Check Meta Tags</Button>
                  </div>
                </CardContent>
              </Card>
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
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Schema Markup Validator</CardTitle>
                  <CardDescription>Validate schema markup on any page</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Page URL</label>
                      <Input type="text" placeholder="Enter page URL (e.g., /insights/blog-post)" />
                    </div>
                    <Button>Validate Schema</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="analytics" className="mt-4">
              <h2 className="text-xl font-semibold mb-4">Analytics Status</h2>
              <p className="mb-4">Google Analytics tracking has been implemented with ID: AW-16996265146.</p>
              <p>The tracking code is placed in the head section of the website and will track all page views and user interactions.</p>
            </TabsContent>
            
            <TabsContent value="search-console" className="mt-4">
              <h2 className="text-xl font-semibold mb-4">Google Search Console Integration</h2>
              
              {!gscVerified ? (
                <Card>
                  <CardHeader>
                    <CardTitle>Verify Your Website</CardTitle>
                    <CardDescription>Enter your Google Search Console verification ID to enable integration</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium mb-1">Verification ID</label>
                        <Input 
                          type="text" 
                          placeholder="Enter verification ID from Google Search Console" 
                          value={verificationId}
                          onChange={(e) => setVerificationId(e.target.value)}
                        />
                        <p className="text-sm text-gray-500 mt-1">
                          Find this in Google Search Console under Settings &gt; Verification &gt; HTML tag method
                        </p>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button onClick={saveVerificationId}>Save Verification ID</Button>
                  </CardFooter>
                </Card>
              ) : (
                <SearchConsoleOverview />
              )}
            </TabsContent>
            
            <TabsContent value="keywords" className="mt-4">
              <h2 className="text-xl font-semibold mb-4">Keyword Analysis</h2>
              <KeywordAnalysis />
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SEOManagement;
