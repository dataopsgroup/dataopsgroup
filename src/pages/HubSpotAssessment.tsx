
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MetaHead from '@/components/seo/MetaHead';
import CTABanner from '@/components/CTABanner';
import AssessmentSchema from '@/components/seo/AssessmentSchema';
import AssessmentContainer from '@/components/assessment/AssessmentContainer';

const HubSpotAssessment = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <MetaHead
        title="HubSpot Rescue Services | Fix Your Broken CRM Implementation"
        description="Broken HubSpot costing you deals? Our rescue services fix data chaos, optimize ROI, and get your team back on track. 150+ successful implementations."
        keywords="HubSpot implementation, HubSpot assessment, CRM assessment, HubSpot ROI, HubSpot optimization"
        ogType="website"
        ogTitle="HubSpot Rescue Services | Fix Your Broken CRM Implementation"
        ogDescription="Broken HubSpot costing you deals? Our rescue services fix data chaos, optimize ROI, and get your team back on track. 150+ successful implementations."
      />
      
      <AssessmentSchema url={window.location.href} />
      
      <Navbar />
      
      <main className="flex-1 bg-gradient-to-br from-white to-gray-50">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto mb-10 text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              <span className="gradient-text">HubSpot Implementation</span><br />
              Assessment Quiz
            </h1>
            <p className="text-lg text-gray-700">
              Evaluate your current HubSpot implementation and identify key improvement opportunities
            </p>
          </div>
          
          <AssessmentContainer />
        </div>
        
        <CTABanner />
      </main>
      
      <Footer />
    </div>
  );
};

export default HubSpotAssessment;
