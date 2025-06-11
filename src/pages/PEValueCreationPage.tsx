import React from 'react';
import SemanticLayout from '@/components/layout/SemanticLayout';
import MetaHead from '@/components/seo/MetaHead';
import PEHeroSection from '@/components/pe-program/PEHeroSection';
import PEProblemSection from '@/components/pe-program/PEProblemSection';
import PESolutionSection from '@/components/pe-program/PESolutionSection';
import PEProgramDetails from '@/components/pe-program/PEProgramDetails';
import PEInvestmentSection from '@/components/pe-program/PEInvestmentSection';
import PESocialProofSection from '@/components/pe-program/PESocialProofSection';
import PECTASection from '@/components/pe-program/PECTASection';
import PEFAQSection from '@/components/pe-program/PEFAQSection';
import { Calculator } from 'lucide-react';

const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'https://dataopsgroup.com';

const PEValueCreationPage = () => {
  return (
    <SemanticLayout>
      <MetaHead
        title="100-Day PE Portfolio Company Transformation | DataOps Group"
        description="Systematic 100-day program transforms PE portfolio companies into unified value creation engines. Drive EBITDA growth through operational excellence."
        keywords="private equity, portfolio company transformation, hubspot implementation, operational efficiency, value creation, PE consulting"
        canonicalPath="/pe-value-creation-program"
        ogType="website"
        ogTitle="100-Day PE Portfolio Company Transformation | DataOps Group"
        ogDescription="Systematic 100-day program transforms PE portfolio companies into unified value creation engines. Drive EBITDA growth through operational excellence."
        ogImage="/lovable-uploads/9b9f1c84-13af-4551-96d5-b7a930f008cf.png"
        siteName="DataOps Group"
      />
      
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "100-Day PE Portfolio Company Transformation Program",
          "description": "Systematic approach to transform PE portfolio company operations into unified, efficient systems that accelerate EBITDA growth.",
          "provider": {
            "@type": "Organization",
            "name": "DataOps Group",
            "url": `${baseUrl}`,
            "logo": `${baseUrl}/lovable-uploads/9b9f1c84-13af-4551-96d5-b7a930f008cf.png`
          },
          "serviceType": "Business Consulting",
          "areaServed": "Worldwide",
          "audience": {
            "@type": "Audience",
            "audienceType": "Private Equity Firms"
          }
        })}
      </script>

      <main className="flex-1 pt-0">
        <PEHeroSection />
        <PEProblemSection />
        <PESolutionSection />
        
        {/* ROI Calculation Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-dataops-900">
                See Your 100-Day Transformation ROI
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                Before committing to our program, calculate the expected return on investment from your 
                portfolio company's operational transformation. Our ROI calculator shows revenue gains, 
                efficiency improvements, and cost savings specific to your company's profile.
              </p>
              
              <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm max-w-2xl mx-auto">
                <div className="flex items-center justify-center mb-4">
                  <Calculator className="w-10 h-10 text-green-600 mr-3" />
                  <h3 className="text-2xl font-semibold text-gray-900">RevOps ROI Calculator</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Get a detailed projection of revenue gains, operational cost savings, and efficiency 
                  improvements from implementing our 100-day transformation program.
                </p>
                <a 
                  href="/revops-roi-calculator" 
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors inline-block"
                >
                  Calculate Your Program ROI
                </a>
                <p className="text-sm text-gray-500 mt-4">
                  Takes 3 minutes • Shows 12-month projection • Industry benchmarks included
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <PEProgramDetails />
        <PEInvestmentSection />
        <PESocialProofSection />
        <PECTASection />
        <PEFAQSection />
      </main>
    </SemanticLayout>
  );
};

export default PEValueCreationPage;
