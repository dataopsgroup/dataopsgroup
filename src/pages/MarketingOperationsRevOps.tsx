
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTABanner from '@/components/CTABanner';
import MarketingOperationsRevOpsSchema from '@/components/services/MarketingOperationsRevOpsSchema';
import MarketingOperationsRevOpsHero from '@/components/services/MarketingOperationsRevOpsHero';
import MarketingOperationsRevOpsContent from '@/components/services/MarketingOperationsRevOpsContent';
import MarketingOperationsRevOpsBenefits from '@/components/services/MarketingOperationsRevOpsBenefits';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';

const MarketingOperationsRevOps = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <MarketingOperationsRevOpsSchema />
      <BreadcrumbSchema 
        items={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: "Marketing Operations & RevOps", url: "/services/marketing-operations-revops" }
        ]} 
      />
      <Navbar />
      
      <main>
        <MarketingOperationsRevOpsHero />

        {/* Content Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-3 gap-16">
              <div className="lg:col-span-2 space-y-8">
                <MarketingOperationsRevOpsContent />
              </div>
              
              <div>
                <MarketingOperationsRevOpsBenefits />
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

export default MarketingOperationsRevOps;
