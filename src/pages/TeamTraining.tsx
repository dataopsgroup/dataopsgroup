
import React from 'react';
import SemanticLayout from '@/components/layout/SemanticLayout';
import MetaHead from '@/components/seo/MetaHead';
import TeamTrainingHero from '@/components/services/TeamTrainingHero';
import HubSpotTrainingContent from '@/components/services/HubSpotTrainingContent';
import ServiceBenefits from '@/components/services/ServiceBenefits';
import RelatedServices from '@/components/services/RelatedServices';
import CTABanner from '@/components/CTABanner';
import ServiceSchemaMarkup from '@/components/services/ServiceSchemaMarkup';

const TeamTraining = () => {
  const benefits = [
    {
      title: "Accelerated Team Proficiency",
      description: "Reduce ramp-up time and increase HubSpot adoption across your organization with targeted training programs."
    },
    {
      title: "Maximized Platform ROI",
      description: "Ensure your team leverages HubSpot's full capabilities to drive measurable business results and growth."
    },
    {
      title: "Ongoing Support & Mentorship",
      description: "Continuous guidance and best practices sharing to maintain momentum and drive long-term success."
    }
  ];

  return (
    <SemanticLayout>
      <MetaHead
        title="HubSpot Team Training & Implementation | DataOps Group"
        description="Accelerate HubSpot adoption with expert team training and implementation services. Maximize platform ROI through comprehensive user training and ongoing support programs."
        keywords="HubSpot training, team training, HubSpot implementation, platform adoption, user training, HubSpot certification, sales training, marketing training"
        canonicalPath="/services/team-training"
        ogType="website"
        ogTitle="HubSpot Team Training & Implementation | DataOps Group"
        ogDescription="Accelerate HubSpot adoption with expert team training and implementation services. Maximize platform ROI through comprehensive user training and ongoing support programs."
      />
      
      <ServiceSchemaMarkup 
        isHubSpotTraining={true}
        serviceId="team-training"
      />
      
      <TeamTrainingHero />
      
      <div className="bg-white">
        <div className="container mx-auto px-4">
          <div className="pt-16 lg:pt-24 no-image-hover-effect">
            <HubSpotTrainingContent />
          </div>
        </div>
      </div>
      
      <div className="bg-white">
        <div className="container mx-auto px-4">
          <div className="py-16 lg:py-24">
            <ServiceBenefits benefits={benefits} />
          </div>
        </div>
      </div>
      
      <div className="bg-white">
        <RelatedServices 
          currentService="team-training"
          title="Explore Our Other Services"
          description="Discover how our comprehensive service offerings can support your business transformation"
        />
      </div>
      
      <CTABanner />
    </SemanticLayout>
  );
};

export default TeamTraining;
