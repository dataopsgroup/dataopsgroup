
import React from 'react';
import SemanticLayout from '@/components/layout/SemanticLayout';
import AssessmentPageSEO from '@/components/assessment/AssessmentPageSEO';
import AssessmentPageHeader from '@/components/assessment/AssessmentPageHeader';
import HubSpotAssessmentForm from '@/components/assessment/HubSpotAssessmentForm';

const HubSpotAssessmentPage = () => {
  return (
    <SemanticLayout>
      <AssessmentPageSEO />
      
      <section className="flex-grow pt-32 px-[5%]" aria-labelledby="assessment-heading">
        <div className="container mx-auto max-w-4xl">
          <AssessmentPageHeader />
          <HubSpotAssessmentForm />
        </div>
      </section>
    </SemanticLayout>
  );
};

// Add HubSpot form typing to window object
declare global {
  interface Window {
    hbspt?: {
      forms: {
        create: (config: any) => void;
      };
    };
  }
}

export default HubSpotAssessmentPage;
