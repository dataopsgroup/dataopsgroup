
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTABanner from '@/components/CTABanner';
import ServiceHero from '@/components/services/ServiceHero';
import ServiceBenefits from '@/components/services/ServiceBenefits';
import HubSpotTrainingContent from '@/components/services/HubSpotTrainingContent';
import { Users } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

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
      <Helmet>
        <title>HubSpot Training & Implementation - DataOps Group</title>
        <meta name="description" content="Expert HubSpot training and implementation services to help your team maximize the platform's capabilities and drive measurable business results." />
        <meta name="keywords" content="hubspot training, hubspot implementation, hubspot consulting, hubspot expertise, data operations, team-training, data consulting" />
        <link rel="canonical" href="/services/team-training" />
        
        {/* Schema markup for the service */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "HubSpot Training & Implementation",
              "provider": {
                "@type": "Organization",
                "name": "DataOps Group"
              },
              "description": "Expert HubSpot training and implementation services to help your team maximize the platform's capabilities and drive measurable business results.",
              "serviceType": "HubSpot Training & Implementation",
              "areaServed": {
                "@type": "Country",
                "name": "United States"
              },
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD",
                "availability": "https://schema.org/InStock"
              },
              "author": {
                "@type": "Person",
                "name": "Geoff Tucker"
              }
            }
          `}
        </script>
      </Helmet>
      
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
