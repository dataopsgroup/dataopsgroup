
import React from 'react';
import { Helmet } from 'react-helmet-async';
import SemanticLayout from '@/components/layout/SemanticLayout';
import CTABanner from '@/components/CTABanner';
import ServiceHero from '@/components/services/ServiceHero';
import ServiceBenefits from '@/components/services/ServiceBenefits';
import HubSpotTrainingContent from '@/components/services/HubSpotTrainingContent';
import { Users } from 'lucide-react';
import ServiceSchema from '@/components/seo/ServiceSchema';

const TeamTraining = () => {
  const benefits = [
    "Maximized ROI from your HubSpot investment",
    "Teams that can confidently use HubSpot's full capabilities",
    "Reduced implementation time and frustration",
    "Customized training for your specific business needs",
    "Ongoing support and expertise as your needs evolve",
    "Improved adoption rates across your organization"
  ];

  const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'https://dataopsgroup.com';

  return (
    <>
      <Helmet>
        <title>HubSpot Training & Implementation | DataOps Group</title>
        <meta name="description" content="Expert HubSpot training services to maximize your team's platform proficiency and drive measurable business results." />
        <link rel="canonical" href={`${baseUrl}/services/team-training`} />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="HubSpot Training & Implementation | DataOps Group" />
        <meta property="og:description" content="Expert HubSpot training services to maximize your team's platform proficiency and drive measurable business results." />
        <meta property="og:url" content={`${baseUrl}/services/team-training`} />
        <meta property="og:image" content={`${baseUrl}/lovable-uploads/0fa57601-c63b-40e0-8e0f-78fc9104bd6c.png`} />
        <meta property="og:site_name" content="DataOps Group" />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="HubSpot Training & Implementation | DataOps Group" />
        <meta name="twitter:description" content="Expert HubSpot training services to maximize your team's platform proficiency and drive measurable business results." />
        <meta name="twitter:image" content={`${baseUrl}/lovable-uploads/0fa57601-c63b-40e0-8e0f-78fc9104bd6c.png`} />
        <meta name="twitter:site" content="@dataops_group" />
      </Helmet>
      
      <ServiceSchema 
        name="HubSpot Training & Implementation"
        description="Expert HubSpot training and implementation services to help your team maximize the platform's capabilities and drive measurable business results."
        url="/services/team-training"
        serviceOutput="Improved team proficiency with HubSpot, maximized platform ROI, and streamlined operations"
      />
      
      <SemanticLayout>
        <ServiceHero 
          title="HubSpot Training & Implementation"
          tagline="Professional Training That Delivers Results"
          description="Expert HubSpot training and implementation services to help your team maximize the platform's capabilities and drive measurable business results."
          ctaText="Book Your HubSpot Strategy Session"
          isHubSpotTraining={true}
          serviceIcon={<Users className="h-24 w-24" />}
          backgroundImage="/lovable-uploads/0fa57601-c63b-40e0-8e0f-78fc9104bd6c.png"
        />

        {/* Content Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-3 gap-16">
              <div className="lg:col-span-2 space-y-8">
                <HubSpotTrainingContent />
              </div>
              
              <div>
                <ServiceBenefits 
                  benefits={benefits}
                  serviceTitle="HubSpot Training & Implementation"
                  isHubSpotTraining={true}
                />
              </div>
            </div>
          </div>
        </section>
        
        <CTABanner />
      </SemanticLayout>
    </>
  );
};

export default TeamTraining;
