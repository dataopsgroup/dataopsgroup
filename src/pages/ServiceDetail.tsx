
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTABanner from '@/components/CTABanner';
import { Link, useParams } from 'react-router-dom';
import { services } from '@/components/Services';
import ServiceHero from '@/components/services/ServiceHero';
import ServiceBenefits from '@/components/services/ServiceBenefits';
import HubSpotTrainingContent from '@/components/services/HubSpotTrainingContent';
import GenericServiceContent from '@/components/services/GenericServiceContent';
import ServiceSchemaMarkup from '@/components/services/ServiceSchemaMarkup';
import { Button } from '@/components/ui/button';

const ServiceDetail = () => {
  const { serviceId } = useParams();
  
  // Find the service data based on the ID
  const service = services.find((s) => s.id === serviceId) || services[0];
  
  // Use specialized content for team-training (HubSpot Training)
  const isHubSpotTraining = serviceId === "team-training";
  
  // Default benefits for most services
  const defaultBenefits = [
    "Improved data quality and consistency",
    "Enhanced decision-making capabilities",
    "Streamlined operations and workflows",
    "Reduced manual effort and human error",
    "Increased ROI from your HubSpot investment",
    "Better customer journey visibility",
  ];
  
  // HubSpot Training specific benefits
  const hubspotBenefits = [
    "Maximized ROI from your HubSpot investment",
    "Teams that can confidently use HubSpot's full capabilities",
    "Reduced implementation time and frustration",
    "Customized training for your specific business needs",
    "Ongoing support and expertise as your needs evolve",
    "Improved adoption rates across your organization"
  ];
  
  // Select the right benefits based on the service
  const benefits = isHubSpotTraining ? hubspotBenefits : defaultBenefits;

  // Custom service description for HubSpot Training
  const hubspotDescription = "Expert HubSpot training and implementation services to help your team maximize the platform's capabilities and drive measurable business results.";
  
  // Determine title and description based on service type
  const title = isHubSpotTraining ? "HubSpot Training & Implementation" : service.title;
  const description = isHubSpotTraining ? hubspotDescription : service.description;

  return (
    <div className="min-h-screen flex flex-col">
      <ServiceSchemaMarkup
        isHubSpotTraining={isHubSpotTraining}
        serviceTitle={service.title}
        serviceDescription={service.description}
        serviceId={serviceId || ''}
      />
      
      <Navbar />
      <main>
        {/* Only show Back button on blog posts, not on service pages */}
        {/* removed Back button to Insights */}
        
        {/* Hero Section */}
        <ServiceHero 
          title={title}
          description={description}
          isHubSpotTraining={isHubSpotTraining}
          serviceIcon={service.icon}
        />

        {/* Content Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-3 gap-16">
              <div className="lg:col-span-2 space-y-8">
                {isHubSpotTraining ? (
                  <HubSpotTrainingContent />
                ) : (
                  <GenericServiceContent serviceTitle={service.title} />
                )}
              </div>
              
              <ServiceBenefits 
                benefits={benefits}
                serviceTitle={service.title}
                isHubSpotTraining={isHubSpotTraining}
              />
            </div>
          </div>
        </section>
        
        <CTABanner />
      </main>
      <Footer />
    </div>
  );
};

export default ServiceDetail;
