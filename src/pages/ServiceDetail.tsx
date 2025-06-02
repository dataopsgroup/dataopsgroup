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
import ServiceSchema from '@/components/seo/ServiceSchema';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import { Button } from '@/components/ui/button';
import { Helmet } from 'react-helmet';

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
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'https://dataopsgroup.com';

  // Define breadcrumbs for schema
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: title, url: `/services/${serviceId}` }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>{title} | DataOps Group</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={`${baseUrl}/services/${serviceId}`} />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={`${title} | DataOps Group`} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={`${baseUrl}/services/${serviceId}`} />
        <meta property="og:image" content={`${baseUrl}/lovable-uploads/9b9f1c84-13af-4551-96d5-b7a930f008cf.png`} />
        <meta property="og:site_name" content="DataOps Group" />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${title} | DataOps Group`} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={`${baseUrl}/lovable-uploads/9b9f1c84-13af-4551-96d5-b7a930f008cf.png`} />
        <meta name="twitter:site" content="@dataops_group" />
      </Helmet>
      
      {/* Schema Markup */}
      <ServiceSchema 
        name={title}
        description={description}
        url={`${baseUrl}/services/${serviceId}`}
        image={`${baseUrl}/lovable-uploads/9b9f1c84-13af-4551-96d5-b7a930f008cf.png`}
      />
      <BreadcrumbSchema items={breadcrumbs} />
      
      <Navbar />
      <main>
        {/* Hero Section */}
        <ServiceHero 
          title={title}
          tagline={isHubSpotTraining ? "Professional Training That Delivers Results" : "Operational Excellence for Portfolio Growth"}
          description={description}
          ctaText={isHubSpotTraining ? "Book Your HubSpot Strategy Session" : "Get Your Custom Strategy"}
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
