
import React from 'react';
import { Helmet } from 'react-helmet-async';
import SemanticLayout from '@/components/layout/SemanticLayout';
import CTABanner from '@/components/CTABanner';
import ServiceBenefits from '@/components/services/ServiceBenefits';
import HubSpotTrainingContent from '@/components/services/HubSpotTrainingContent';
import TeamTrainingHero from '@/components/services/TeamTrainingHero';
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
        <title>HubSpot Training & Implementation | Expert Team Training | Portfolio Company Growth | DataOps Group</title>
        <meta name="description" content="Accelerate portfolio company growth with comprehensive HubSpot training and implementation. Expert-led training programs that maximize platform adoption and drive measurable results." />
        <meta name="keywords" content="HubSpot training, HubSpot implementation, team training, portfolio company training, HubSpot certification, marketing training, sales training, CRM training, platform adoption" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="author" content="DataOps Group" />
        <link rel="canonical" href={`${baseUrl}/services/team-training`} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="HubSpot Training & Implementation for Portfolio Companies" />
        <meta property="og:description" content="Expert HubSpot training programs that transform marketing teams into high-performing revenue engines. Customized for portfolio company growth." />
        <meta property="og:url" content={`${baseUrl}/services/team-training`} />
        <meta property="og:image" content={`${baseUrl}/lovable-uploads/0fa57601-c63b-40e0-8e0f-78fc9104bd6c.png`} />
        <meta property="og:image:alt" content="HubSpot Training and Implementation Services" />
        <meta property="og:site_name" content="DataOps Group" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="HubSpot Training & Implementation Services" />
        <meta name="twitter:description" content="Expert HubSpot training that accelerates portfolio company growth and maximizes platform ROI through proven implementation strategies." />
        <meta name="twitter:image" content={`${baseUrl}/lovable-uploads/0fa57601-c63b-40e0-8e0f-78fc9104bd6c.png`} />
        <meta name="twitter:site" content="@dataops_group" />
        
        {/* Additional SEO tags */}
        <meta name="article:section" content="Training Services" />
        <meta name="article:tag" content="HubSpot Training" />
        <meta name="article:tag" content="Team Training" />
        <meta name="article:tag" content="Portfolio Growth" />
      </Helmet>
      
      <ServiceSchema 
        name="HubSpot Implementation and Training"
        description="Expert HubSpot training and implementation services that accelerate portfolio company growth by transforming marketing teams into high-performing revenue engines."
        url="/services/team-training"
        serviceOutput="Improved team proficiency with HubSpot, maximized platform ROI, and streamlined operations"
      />
      
      <SemanticLayout>
        <TeamTrainingHero />

        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-3 gap-16">
              <div className="lg:col-span-2 space-y-8">
                <HubSpotTrainingContent />
              </div>
              
              <div>
                <ServiceBenefits 
                  benefits={benefits}
                  serviceTitle="HubSpot Implementation and Training"
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
