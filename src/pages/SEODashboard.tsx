
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Toaster } from '@/components/ui/toaster';
import MetaHead from '@/components/seo/MetaHead';
import KeywordAnalysisTable from '@/components/seo/KeywordAnalysisTable';
import ImageSEOAnalysis from '@/components/seo/ImageSEOAnalysis';
import SemanticLayout from '@/components/layout/SemanticLayout';

// Import our components
import DashboardHeader from '@/components/seo/dashboard/DashboardHeader';
import OverviewTab from '@/components/seo/dashboard/OverviewTab';
import TechnicalSEOHealth from '@/components/seo/dashboard/TechnicalSEOHealth';

const SEODashboard = () => {
  return (
    <SemanticLayout mainClassName="px-[5%] py-8 pt-[calc(var(--navbar-height)+var(--navbar-bottom-spacing))]">
      <MetaHead 
        title="SEO Management Dashboard | DataOps Group"
        description="SEO management dashboard for monitoring and improving the search engine visibility of DataOps Group website."
        keywords="SEO dashboard, search engine optimization, keyword tracking, Google Search Console, technical SEO"
        canonicalPath="/seo-dashboard"
        noindex={true}
      />
      
      <DashboardHeader 
        title="SEO Management Dashboard"
        description="Monitor and improve your website's search engine visibility"
        breadcrumbItems={[
          { name: "Home", url: "/" },
          { name: "SEO Dashboard", url: "/seo-dashboard", current: true }
        ]}
      />
      
      <Tabs defaultValue="overview" className="w-full mb-8">
        <TabsList className="mb-6">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="keywords">Keywords</TabsTrigger>
          <TabsTrigger value="images">Images</TabsTrigger>
          <TabsTrigger value="technical">Technical SEO</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="space-y-8">
          <OverviewTab />
        </TabsContent>
        
        <TabsContent value="keywords" className="space-y-8">
          <KeywordAnalysisTable />
        </TabsContent>
        
        <TabsContent value="images" className="space-y-8">
          <ImageSEOAnalysis />
        </TabsContent>
        
        <TabsContent value="technical" className="space-y-8">
          <TechnicalSEOHealth />
        </TabsContent>
      </Tabs>
      
      <Toaster />
    </SemanticLayout>
  );
};

export default SEODashboard;
