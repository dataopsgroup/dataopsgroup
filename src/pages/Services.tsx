
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';
import CTABanner from '@/components/CTABanner';
import ServicesHero from '@/components/services/ServicesHero';
import ServicesOverview from '@/components/services/ServicesOverview';
import ServicesSidebar from '@/components/services/ServicesSidebar';
import ServiceSchema from '@/components/seo/ServiceSchema';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';

const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'https://dataopsgroup.com';

const ServicesPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>HubSpot & DataOps Services - Expert Implementation for Portfolio Companies | DataOps Group</title>
        <meta name="description" content="Expert HubSpot implementation, marketing operations, and data services that drive measurable portfolio growth. Specialized for PE firms and growing companies." />
        <meta name="keywords" content="data services, data architecture, analytics, BI, data governance, dataops implementation, enterprise data solutions" />
        <link rel="canonical" href={`${baseUrl}/services`} />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="HubSpot & DataOps Services - Expert Implementation for Portfolio Companies" />
        <meta property="og:description" content="Expert HubSpot implementation, marketing operations, and data services that drive measurable portfolio growth. Specialized for PE firms and growing companies." />
        <meta property="og:url" content={`${baseUrl}/services`} />
        <meta property="og:image" content={`${baseUrl}/lovable-uploads/9b9f1c84-13af-4551-96d5-b7a930f008cf.png`} />
        <meta property="og:site_name" content="DataOps Group" />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="HubSpot & DataOps Services - Expert Implementation for Portfolio Companies" />
        <meta name="twitter:description" content="Expert HubSpot implementation, marketing operations, and data services that drive measurable portfolio growth. Specialized for PE firms and growing companies." />
        <meta name="twitter:image" content={`${baseUrl}/lovable-uploads/9b9f1c84-13af-4551-96d5-b7a930f008cf.png`} />
        <meta name="twitter:site" content="@dataops_group" />
      </Helmet>
      
      <ServiceSchema 
        name="DataOps Group Services"
        description="Comprehensive data operations services including HubSpot implementation, analytics, training, and marketing operations solutions."
        url="/services"
        serviceOutput="Optimized business operations, improved data quality, and enhanced marketing and sales performance"
      />
      
      <BreadcrumbSchema 
        items={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" }
        ]} 
      />
      
      <Navbar />
      <main>
        {/* Add proper H1 tag */}
        <div className="sr-only">
          <h1>HubSpot & DataOps Services - Expert Implementation for Portfolio Companies</h1>
        </div>
        
        <ServicesHero />

        {/* Content Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-3 gap-16">
              <div className="lg:col-span-2 space-y-12">
                <ServicesOverview />
                
                {/* Internal links to key resources */}
                <div className="bg-dataops-50 border border-dataops-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-dataops-900 mb-4">
                    Ready to Get Started?
                  </h3>
                  <p className="text-dataops-700 mb-4">
                    Explore our resources to understand how we can help transform your operations:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <a href="/data-operations-assessment" className="text-dataops-600 hover:text-dataops-800 font-medium text-sm">
                      → Take our free Data Operations Assessment
                    </a>
                    <a href="/guides/hubspot-expert" className="text-dataops-600 hover:text-dataops-800 font-medium text-sm">
                      → Read our HubSpot Expert Hiring Guide
                    </a>
                    <a href="/case-studies" className="text-dataops-600 hover:text-dataops-800 font-medium text-sm">
                      → View client success stories
                    </a>
                    <a href="/revops-roi-calculator" className="text-dataops-600 hover:text-dataops-800 font-medium text-sm">
                      → Calculate your potential ROI
                    </a>
                  </div>
                </div>
              </div>
              
              <div>
                <ServicesSidebar />
              </div>
            </div>
          </div>
        </section>
        
        <CTABanner />
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;
