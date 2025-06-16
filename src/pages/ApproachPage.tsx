
import React from 'react';
import SemanticLayout from '@/components/layout/SemanticLayout';
import CTABanner from '@/components/CTABanner';
import ApproachHero from '@/components/approach/ApproachHero';
import ApproachMethodology from '@/components/approach/ApproachMethodology';
import ApproachSteps from '@/components/approach/ApproachSteps';
import ApproachBenefits from '@/components/approach/ApproachBenefits';
import ApproachSidebar from '@/components/approach/ApproachSidebar';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import MetaHead from '@/components/seo/MetaHead';

const ApproachPage = () => {
  return (
    <SemanticLayout>
      <MetaHead
        title="HubSpot Implementation Methodology - PE-Focused Approach"
        description="Proven HubSpot methodology for PE portfolio companies. 19% higher valuations, 73% faster EBITDA growth. Systematic approach delivers measurable results."
        keywords="hubspot implementation methodology, pe portfolio operations, data operations approach, hubspot rescue, revenue operations process"
        canonicalPath="/approach"
        ogType="website"
        ogTitle="HubSpot Implementation Methodology - PE-Focused Approach"
        ogDescription="Proven HubSpot methodology for PE portfolio companies. 19% higher valuations, 73% faster EBITDA growth. Systematic approach delivers measurable results."
        structuredData={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "HubSpot Implementation Methodology - DataOps Group PE-Focused Approach",
          "description": "Discover our proven methodology for HubSpot implementations that meet PE standards. Systematic approach delivers 19% higher valuations and 73% faster EBITDA growth for portfolio companies.",
          "publisher": {
            "@type": "Organization",
            "name": "DataOps Group"
          },
          "author": {
            "@type": "Person",
            "name": "Geoff Tucker"
          }
        }}
      />
      
      <BreadcrumbSchema 
        items={[
          { name: "Home", url: "/" },
          { name: "Our Approach", url: "/approach" }
        ]}
      />
      
      <main>
        <ApproachHero />

        {/* Content Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-3 gap-16">
              <div className="lg:col-span-2 space-y-12">
                <ApproachMethodology />
                <ApproachSteps />
                <ApproachBenefits />
              </div>
              
              <div>
                <ApproachSidebar />
              </div>
            </div>
          </div>
        </section>
        
        <CTABanner />
      </main>
    </SemanticLayout>
  );
};

export default ApproachPage;
