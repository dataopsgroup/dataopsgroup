
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MetaHead from '@/components/seo/MetaHead';
import GSCOverview from '@/components/seo/GSCOverview';
import KeywordAnalysisTable from '@/components/seo/KeywordAnalysisTable';
import ImageSEOAnalysis from '@/components/seo/ImageSEOAnalysis';
import BreadcrumbNavigation from '@/components/seo/BreadcrumbNavigation';

const SEODashboard = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <MetaHead 
        title="SEO Management Dashboard | DataOps Group"
        description="SEO management dashboard for monitoring and improving the search engine visibility of DataOps Group website."
        keywords="SEO dashboard, search engine optimization, keyword tracking, Google Search Console, technical SEO"
        canonicalPath="/seo-dashboard"
        noindex={true}
      />
      
      <Navbar />
      
      <main className="flex-grow px-[5%] py-8">
        <div className="mb-8">
          <BreadcrumbNavigation items={[
            { name: "Home", url: "/" },
            { name: "SEO Dashboard", url: "/seo-dashboard", current: true }
          ]} />
          <h1 className="text-3xl font-bold mt-6">SEO Management Dashboard</h1>
          <p className="text-gray-600 mt-2">Monitor and improve your website's search engine visibility</p>
        </div>
        
        <Tabs defaultValue="overview" className="w-full mb-8">
          <TabsList className="mb-6">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="keywords">Keywords</TabsTrigger>
            <TabsTrigger value="images">Images</TabsTrigger>
            <TabsTrigger value="technical">Technical SEO</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="space-y-8">
            <GSCOverview />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Core Web Vitals</CardTitle>
                  <CardDescription>Performance metrics that affect search rankings</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">LCP (Largest Contentful Paint)</span>
                        <span className="text-sm text-green-600">1.8s</span>
                      </div>
                      <Progress value={60} className="h-2 bg-gray-100" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">FID (First Input Delay)</span>
                        <span className="text-sm text-green-600">12ms</span>
                      </div>
                      <Progress value={90} className="h-2 bg-gray-100" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">CLS (Cumulative Layout Shift)</span>
                        <span className="text-sm text-green-600">0.08</span>
                      </div>
                      <Progress value={85} className="h-2 bg-gray-100" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Mobile-Friendly Score</span>
                        <span className="text-sm text-green-600">96/100</span>
                      </div>
                      <Progress value={96} className="h-2 bg-gray-100" />
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Crawl Stats</CardTitle>
                  <CardDescription>How Google is crawling your site</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Pages Crawled (Daily)</span>
                      <span>47</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Crawl Budget Used</span>
                      <span>68%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Response Time</span>
                      <span>0.27s</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Last Crawl</span>
                      <span>May 21, 2025</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Errors Detected</span>
                      <span>None</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="keywords" className="space-y-8">
            <KeywordAnalysisTable />
          </TabsContent>
          
          <TabsContent value="images" className="space-y-8">
            <ImageSEOAnalysis />
          </TabsContent>
          
          <TabsContent value="technical" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Technical SEO Health</CardTitle>
                <CardDescription>Issues affecting crawlability and indexability</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-3">Structured Data</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span>Organization Schema</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span>Website Schema</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span>Breadcrumb Schema</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span>Service Schema</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span>Article Schema</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span>FAQ Schema</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium mb-3">Indexability Issues</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span>Sitemap Status</span>
                        </div>
                        <span className="text-sm text-green-600">Valid (148 URLs)</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span>Robots.txt</span>
                        </div>
                        <span className="text-sm text-green-600">Valid</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span>Canonical URLs</span>
                        </div>
                        <span className="text-sm text-green-600">Implemented</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span>Mobile Responsiveness</span>
                        </div>
                        <span className="text-sm text-green-600">Passed</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span>HTTPS Status</span>
                        </div>
                        <span className="text-sm text-green-600">Secure</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
      
      <Footer />
    </div>
  );
};

// Import the components used in SEODashboard
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { CircleCheck } from 'lucide-react';

export default SEODashboard;
