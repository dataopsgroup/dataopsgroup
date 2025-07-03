
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTABanner from '@/components/CTABanner';
import ServicesHero from '@/components/services/ServicesHero';
import ServicesOverview from '@/components/services/ServicesOverview';
import ServicesSidebar from '@/components/services/ServicesSidebar';
import ServiceSchema from '@/components/seo/ServiceSchema';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import MetaHead from '@/components/seo/MetaHead';
import { Helmet } from 'react-helmet-async';

const ServicesPage = () => {
  const servicesItemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "DataOps Group Services",
    "description": "Comprehensive data operations and HubSpot implementation services for private equity portfolio companies",
    "numberOfItems": 4,
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Analytics & BI",
        "description": "Transform raw data into actionable insights with custom dashboards and reporting systems.",
        "url": "https://dataopsgroup.com/services/analytics-bi"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "DataOps Implementation",
        "description": "End-to-end implementation of data operations processes and systems.",
        "url": "https://dataopsgroup.com/services/dataops-implementation"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Team Training",
        "description": "Comprehensive training programs to ensure your team maximizes system adoption.",
        "url": "https://dataopsgroup.com/services/team-training"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Marketing Operations & RevOps",
        "description": "Align your marketing, sales, and operations teams for maximum revenue growth.",
        "url": "https://dataopsgroup.com/services/marketing-operations-revops"
      }
    ]
  };

  return (
    <div className="min-h-screen flex flex-col">
      <MetaHead
        title="HubSpot & DataOps Services - Expert Implementation | DataOps Group"
        description="Expert HubSpot implementation and data services that drive portfolio growth. Specialized for PE firms and growing companies."
        keywords="data services, data architecture, analytics, BI, data governance, dataops implementation, enterprise data solutions"
        canonicalPath="/services"
        ogType="website"
        ogTitle="HubSpot & DataOps Services - Expert Implementation for Portfolio Companies"
        ogDescription="Expert HubSpot implementation, marketing operations, and data services that drive measurable portfolio growth. Specialized for PE firms and growing companies."
        ogImage="/lovable-uploads/9b9f1c84-13af-4551-96d5-b7a930f008cf.png"
        siteName="DataOps Group"
      />
      
      <ServiceSchema 
        name="DataOps Group Services"
        description="Comprehensive data operations services including HubSpot implementation, analytics, training, and marketing operations solutions."
        url="/services"
        serviceOutput="Optimized business operations, improved data quality, and enhanced marketing and sales performance"
      />

      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(servicesItemListSchema)}
        </script>
      </Helmet>
      
      <BreadcrumbSchema 
        items={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" }
        ]} 
      />
      
      <Navbar />
      <main>
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
