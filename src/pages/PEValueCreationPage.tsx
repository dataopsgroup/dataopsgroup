
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

const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'https://dataopsgroup.com';

const PEValueCreationPage = () => {
  return (
    <SemanticLayout>
      <MetaHead
        title="100-Day PE Portfolio Company Transformation | DataOps Group"
        description="Turn operational chaos into value creation engines with our systematic 100-day transformation program designed specifically for PE portfolio companies."
        keywords="private equity, portfolio company transformation, hubspot implementation, operational efficiency, value creation, PE consulting"
        canonicalPath="/pe-value-creation-program"
        ogType="website"
        ogTitle="100-Day PE Portfolio Company Transformation | DataOps Group"
        ogDescription="Turn operational chaos into value creation engines with our systematic 100-day transformation program designed specifically for PE portfolio companies."
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

      <main className="flex-1">
        <PEHeroSection />
        <PEProblemSection />
        <PESolutionSection />
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
