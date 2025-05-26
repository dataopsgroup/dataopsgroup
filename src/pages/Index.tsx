
import React from 'react';
import Services from '@/components/Services';
import Hero from '@/components/Hero';
import BookCTA from '@/components/BookCTA';
import Approach from '@/components/Approach';
import MetaHead from '@/components/seo/MetaHead';
import SemanticLayout from '@/components/layout/SemanticLayout';

const Index = () => {
  console.log('Index component rendering...');

  return (
    <>
      <MetaHead 
        title="HubSpot ROI Not Meeting Expectations? We Fix That | DataOps Group"
        description="Stop losing money on underperforming HubSpot. We rescue broken implementations, optimize workflows, and turn your CRM into a revenue-generating machine. Free assessment."
        keywords="HubSpot consultant, HubSpot implementation, marketing operations, dataops, sales and marketing alignment, data quality"
        ogType="website"
        ogImage="/lovable-uploads/9b9f1c84-13af-4551-96d5-b7a930f008cf.png"
        canonicalPath="/"
        gscVerification="YOUR_GSC_VERIFICATION_CODE"
      />
      
      <SemanticLayout mainClassName="flex-grow">
        <Hero />
        
        <div className="px-[5%]">
          <Services />
          <Approach />
          <BookCTA />
        </div>
      </SemanticLayout>
    </>
  );
};

export default Index;
