
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTABanner from '@/components/CTABanner';
import AnalyticsBIHero from '@/components/services/AnalyticsBIHero';
import AnalyticsBIContent from '@/components/services/AnalyticsBIContent';
import AnalyticsBIBenefits from '@/components/services/AnalyticsBIBenefits';
import AnalyticsBISchema from '@/components/services/AnalyticsBISchema';
import ServiceSchema from '@/components/seo/ServiceSchema';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';

const AnalyticsBI = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <AnalyticsBISchema />
      <ServiceSchema 
        name="HubSpot Analytics & Business Intelligence" 
        description="Advanced HubSpot analytics and business intelligence consulting to help businesses make data-driven decisions and maximize their marketing ROI."
        url={`${window.location.origin}/services/analytics-bi`}
      />
      <BreadcrumbSchema 
        items={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: "Analytics & BI", url: "/services/analytics-bi" }
        ]} 
      />
      <Navbar />
      
      <main>
        <AnalyticsBIHero />

        {/* Content Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-3 gap-16">
              <div className="lg:col-span-2 space-y-8">
                <AnalyticsBIContent />
              </div>
              
              <div>
                <AnalyticsBIBenefits />
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

export default AnalyticsBI;
