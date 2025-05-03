
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTABanner from '@/components/CTABanner';
import AnalyticsBIHero from '@/components/services/AnalyticsBIHero';
import AnalyticsBIContent from '@/components/services/AnalyticsBIContent';
import AnalyticsBIBenefits from '@/components/services/AnalyticsBIBenefits';
import AnalyticsBISchema from '@/components/services/AnalyticsBISchema';

const AnalyticsBI = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <AnalyticsBISchema />
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
