
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTABanner from '@/components/CTABanner';
import DataOpsImplementationHero from '@/components/services/DataOpsImplementationHero';
import DataOpsImplementationContent from '@/components/services/DataOpsImplementationContent';
import DataOpsImplementationBenefits from '@/components/services/DataOpsImplementationBenefits';
import DataOpsImplementationSchema from '@/components/services/DataOpsImplementationSchema';

const DataOpsImplementation = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <DataOpsImplementationSchema />
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
