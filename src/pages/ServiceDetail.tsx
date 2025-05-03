
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTABanner from '@/components/CTABanner';
import { CheckCircle, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useParams, Link } from 'react-router-dom';
import { services } from '@/components/Services';
import { Helmet } from 'react-helmet-async';

const ServiceDetail = () => {
  const { serviceId } = useParams();
  
  // Find the service data based on the ID (in a real app, this would be more robust)
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

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>{isHubSpotTraining ? "HubSpot Training & Implementation" : service.title} - DataOps Group</title>
        <meta name="description" content={`Learn about our ${isHubSpotTraining ? "HubSpot Training and Implementation" : service.title} service and how it can help your business optimize data operations and drive growth.`} />
        <meta name="keywords" content={`${isHubSpotTraining ? "hubspot training, hubspot implementation, hubspot consulting, hubspot expertise" : service.title.toLowerCase()}, data operations, ${service.id}, data consulting`} />
        <link rel="canonical" href={`/services/${serviceId}`} />
        
        {/* Schema markup for the service */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "${isHubSpotTraining ? "HubSpot Training & Implementation" : service.title}",
              "provider": {
                "@type": "Organization",
                "name": "DataOps Group"
              },
              "description": "${isHubSpotTraining ? hubspotDescription : service.description}",
              "serviceType": "${isHubSpotTraining ? "HubSpot Training & Implementation" : service.title}",
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
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4 bg-gradient-to-br from-white to-dataops-50">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-5 gap-12 items-center">
              <div className="lg:col-span-3 space-y-6">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-dataops-100 text-dataops-800 text-sm font-medium mb-2">
                  Our Services
                </div>
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                  {isHubSpotTraining ? "HubSpot Training & Implementation" : service.title}
                </h1>
                <p className="text-lg md:text-xl text-gray-700 max-w-2xl">
                  {isHubSpotTraining 
                    ? "Expert HubSpot training and implementation services to help your team maximize the platform's capabilities and drive measurable business results." 
                    : service.description}
                </p>
                <div className="pt-6">
                  <Button className="bg-dataops-600 hover:bg-dataops-700 px-6 py-6 text-base" asChild>
                    <Link to="/contact">Schedule a Consultation</Link>
                  </Button>
                </div>
              </div>
              
              <div className="lg:col-span-2 flex justify-center">
                <div className="relative bg-white rounded-2xl shadow-xl p-8 z-10 w-full max-w-md">
                  <div className="flex justify-center items-center h-48 w-full rounded-lg bg-dataops-50">
                    <div className="text-dataops-600" aria-hidden="true">
                      {service.icon}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-3 gap-16">
              <div className="lg:col-span-2 space-y-8">
                {isHubSpotTraining ? (
                  <>
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold mb-6">How We Can Help</h2>
                      <p className="text-gray-700 mb-4">
                        As Certified HubSpot Solutions Partners, we provide comprehensive training and implementation services 
                        to ensure your team can leverage the full power of HubSpot. Whether you're just getting started with 
                        HubSpot or looking to optimize your existing setup, our expert team will guide you through every step 
                        of the process.
                      </p>
                      <p className="text-gray-700 mb-4">
                        We understand that every business has unique needs and goals. That's why we offer customized HubSpot 
                        training programs tailored to your specific requirements, ensuring you get the most out of your 
                        HubSpot investment.
                      </p>
                    </div>
                    
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold mb-6">Our HubSpot Services</h2>
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div className="bg-dataops-50 p-6 rounded-lg">
                          <h3 className="font-semibold text-lg mb-3">Implementation & Setup</h3>
                          <p className="text-gray-700">Expert configuration of your HubSpot portal including CRM setup, integrations, and workflow automation.</p>
                        </div>
                        <div className="bg-dataops-50 p-6 rounded-lg">
                          <h3 className="font-semibold text-lg mb-3">Custom Training</h3>
                          <p className="text-gray-700">Personalized training sessions for your team focused on the specific HubSpot tools and features you'll use most.</p>
                        </div>
                        <div className="bg-dataops-50 p-6 rounded-lg">
                          <h3 className="font-semibold text-lg mb-3">Migration Services</h3>
                          <p className="text-gray-700">Seamless migration of your data from existing systems to HubSpot with minimal disruption to your operations.</p>
                        </div>
                        <div className="bg-dataops-50 p-6 rounded-lg">
                          <h3 className="font-semibold text-lg mb-3">Ongoing Support</h3>
                          <p className="text-gray-700">Continuous guidance and expertise as your business grows and your HubSpot needs evolve over time.</p>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold mb-6">How We Can Help</h2>
                      <p className="text-gray-700 mb-4">
                        Our {service.title.toLowerCase()} service is designed to help businesses maximize their data potential
                        while minimizing complexity and technical debt. We work with you to understand your unique challenges
                        and goals, then develop a customized solution that delivers measurable results.
                      </p>
                      <p className="text-gray-700 mb-4">
                        By leveraging our expertise in HubSpot and data operations, we ensure your systems work seamlessly together,
                        providing the insights and efficiency you need to drive business growth.
                      </p>
                    </div>
                    
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Approach</h2>
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div className="bg-dataops-50 p-6 rounded-lg">
                          <h3 className="font-semibold text-lg mb-3">1. Assess</h3>
                          <p className="text-gray-700">We start by thoroughly assessing your current setup, identifying pain points and opportunities.</p>
                        </div>
                        <div className="bg-dataops-50 p-6 rounded-lg">
                          <h3 className="font-semibold text-lg mb-3">2. Design</h3>
                          <p className="text-gray-700">Next, we design a customized solution that addresses your specific needs and goals.</p>
                        </div>
                        <div className="bg-dataops-50 p-6 rounded-lg">
                          <h3 className="font-semibold text-lg mb-3">3. Implement</h3>
                          <p className="text-gray-700">Our team carefully implements the solution with minimal disruption to your operations.</p>
                        </div>
                        <div className="bg-dataops-50 p-6 rounded-lg">
                          <h3 className="font-semibold text-lg mb-3">4. Optimize</h3>
                          <p className="text-gray-700">We continuously monitor and optimize the solution to ensure it delivers maximum value.</p>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
              
              <div className="space-y-8">
                <div className="bg-white border border-gray-100 rounded-xl shadow-sm p-8">
                  <h3 className="text-xl font-bold mb-6">Benefits</h3>
                  <ul className="space-y-4">
                    {benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-dataops-600 mr-3 mt-0.5 flex-shrink-0" aria-hidden="true" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-dataops-50 rounded-xl p-8">
                  <h3 className="text-xl font-bold mb-4">Ready to get started?</h3>
                  <p className="text-gray-700 mb-6">
                    Contact us today to schedule a consultation and learn how our {isHubSpotTraining ? "HubSpot training and implementation" : service.title.toLowerCase()} services
                    can help you achieve your business goals.
                  </p>
                  <Button className="w-full bg-dataops-600 hover:bg-dataops-700" asChild>
                    <Link to="/contact">Contact Us</Link>
                  </Button>
                </div>
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

export default ServiceDetail;
