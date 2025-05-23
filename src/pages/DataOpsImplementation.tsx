
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTABanner from '@/components/CTABanner';
import DataOpsImplementationHero from '@/components/services/DataOpsImplementationHero';
import DataOpsImplementationContent from '@/components/services/DataOpsImplementationContent';
import DataOpsImplementationBenefits from '@/components/services/DataOpsImplementationBenefits';
import DataOpsImplementationSchema from '@/components/services/DataOpsImplementationSchema';
import ServiceSchema from '@/components/seo/ServiceSchema';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import MetaHead from '@/components/seo/MetaHead';

const DataOpsImplementation = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <MetaHead
        title="HubSpot DataOps Implementation | Streamline Your Data Operations"
        description="Implement DataOps methodologies in HubSpot for faster, more reliable data workflows. Reduce errors, improve quality, accelerate time-to-insight."
        keywords="DataOps implementation, HubSpot data operations, data workflows, data quality, HubSpot automation"
        canonicalPath="/services/dataops-implementation"
        ogType="website"
        ogTitle="HubSpot DataOps Implementation | Streamline Your Data Operations"
        ogDescription="Implement DataOps methodologies in HubSpot for faster, more reliable data workflows. Reduce errors, improve quality, accelerate time-to-insight."
        twitterCard="summary"
      />
      
      <DataOpsImplementationSchema />
      <ServiceSchema 
        name="DataOps Implementation for HubSpot" 
        description="Comprehensive DataOps implementation services for HubSpot users, ensuring clean data, optimized workflows, and maximum value from your HubSpot investment."
        url={`${window.location.origin}/services/dataops-implementation`}
      />
      <BreadcrumbSchema 
        items={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: "DataOps Implementation", url: "/services/dataops-implementation" }
        ]} 
      />
      <Navbar />
      
      <main>
        <DataOpsImplementationHero />

        {/* Content Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-3 gap-16">
              <div className="lg:col-span-2 space-y-8">
                <DataOpsImplementationContent />
              </div>
              
              <div>
                <DataOpsImplementationBenefits />
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

export default DataOpsImplementation;
