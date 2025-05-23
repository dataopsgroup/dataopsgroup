
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
import MetaHead from '@/components/seo/MetaHead';

const AnalyticsBI = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <MetaHead
        title="HubSpot Analytics & BI Services | Turn Data Into Revenue"
        description="Transform your HubSpot data into actionable insights. Custom dashboards, reporting, and BI solutions that drive better decisions and higher ROI."
        keywords="HubSpot analytics, business intelligence, data visualization, HubSpot reporting, marketing analytics"
        canonicalPath="/services/analytics-bi"
        ogType="website"
        ogTitle="HubSpot Analytics & BI Services | Turn Data Into Revenue"
        ogDescription="Transform your HubSpot data into actionable insights. Custom dashboards, reporting, and BI solutions that drive better decisions and higher ROI."
        twitterCard="summary"
      />
      
      <AnalyticsBISchema />
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
