
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTABanner from '@/components/CTABanner';
import ServiceHero from '@/components/services/ServiceHero';
import ServiceBenefits from '@/components/services/ServiceBenefits';
import HubSpotTrainingContent from '@/components/services/HubSpotTrainingContent';
import { Users } from 'lucide-react';
import ServiceSchema from '@/components/seo/ServiceSchema';
import MetaHead from '@/components/seo/MetaHead';

const TeamTraining = () => {
  const benefits = [
    "Maximized ROI from your HubSpot investment",
    "Teams that can confidently use HubSpot's full capabilities",
    "Reduced implementation time and frustration",
    "Customized training for your specific business needs",
    "Ongoing support and expertise as your needs evolve",
    "Improved adoption rates across your organization"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <MetaHead
        title="HubSpot Team Training | Get Your Team Up to Speed Fast"
        description="Comprehensive HubSpot training for your team. From basics to advanced techniques, get everyone productive quickly. Custom training programs available."
        keywords="HubSpot training, team training, HubSpot implementation, HubSpot education, CRM training"
        canonicalPath="/services/team-training"
        ogType="website"
        ogTitle="HubSpot Team Training | Get Your Team Up to Speed Fast"
        ogDescription="Comprehensive HubSpot training for your team. From basics to advanced techniques, get everyone productive quickly. Custom training programs available."
      />
      
      <ServiceSchema 
        name="HubSpot Training & Implementation"
        description="Expert HubSpot training and implementation services to help your team maximize the platform's capabilities and drive measurable business results."
        url="/services/team-training"
        serviceOutput="Improved team proficiency with HubSpot, maximized platform ROI, and streamlined operations"
      />
      
      <Navbar />
      <main>
        <ServiceHero 
          title="HubSpot Training & Implementation"
          description="Expert HubSpot training and implementation services to help your team maximize the platform's capabilities and drive measurable business results."
          isHubSpotTraining={true}
          serviceIcon={<Users className="h-24 w-24" />}
          imageSrc="/lovable-uploads/65e362f2-ce0e-48c8-8aed-c567255b52ba.png"
          imageAlt="HubSpot training session with a facilitator and attendees"
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
      </main>
      <Footer />
    </div>
  );
};

export default TeamTraining;
