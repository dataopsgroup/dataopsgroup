
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
import RelatedServices from '@/components/services/RelatedServices';
import ServiceSchema from '@/components/seo/ServiceSchema';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import { Button } from '@/components/ui/button';
import MetaHead from '@/components/seo/MetaHead';

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

  // Create optimized meta description (under 160 characters)
  const metaDescription = isHubSpotTraining 
    ? "Expert HubSpot training that maximizes platform ROI and accelerates team adoption. Customized for portfolio companies and growing businesses."
    : `${service.title} services that drive operational excellence and business growth. Get expert implementation and support for measurable results.`;

  // Define breadcrumbs for schema
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: title, url: `/services/${serviceId}` }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <MetaHead
        title={`${title} | DataOps Group`}
        description={metaDescription}
        canonicalPath={`/services/${serviceId}`}
        ogType="website"
        ogTitle={`${title} | DataOps Group`}
        ogDescription={metaDescription}
        ogImage="/lovable-uploads/9b9f1c84-13af-4551-96d5-b7a930f008cf.png"
        siteName="DataOps Group"
        keywords={isHubSpotTraining ? "hubspot training, hubspot implementation, marketing operations, sales enablement" : "data services, analytics, business intelligence, data governance"}
      />
      
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

                {/* Internal linking section */}
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Learn More About Our Approach
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <Link to="/approach" className="text-dataops-600 hover:text-dataops-800 font-medium text-sm">
                      → Our proven methodology
                    </Link>
                    <Link to="/case-studies" className="text-dataops-600 hover:text-dataops-800 font-medium text-sm">
                      → Client success stories
                    </Link>
                    <Link to="/faqs/services" className="text-dataops-600 hover:text-dataops-800 font-medium text-sm">
                      → Frequently asked questions
                    </Link>
                    <Link to="/about" className="text-dataops-600 hover:text-dataops-800 font-medium text-sm">
                      → Meet our expert team
                    </Link>
                  </div>
                </div>
              </div>
              
              <ServiceBenefits 
                benefits={benefits}
                serviceTitle={service.title}
                isHubSpotTraining={isHubSpotTraining}
              />
            </div>
          </div>
        </section>
        
        <RelatedServices currentService={serviceId || ''} />
        <CTABanner />
      </main>
      <Footer />
    </div>
  );
};

export default ServiceDetail;
