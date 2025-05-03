
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTABanner from '@/components/CTABanner';
import { CheckCircle, Database } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const DataOpsImplementation = () => {
  const benefits = [
    "Seamless integration between HubSpot and your other business systems",
    "Customized workflows tailored to your unique business processes",
    "Improved data accuracy and consistency across platforms",
    "Enhanced reporting capabilities and business intelligence",
    "Streamlined operations and reduced manual tasks",
    "Higher user adoption and team productivity"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>DataOps Implementation - HubSpot Integration Services - DataOps Group</title>
        <meta name="description" content="Unlock the full potential of HubSpot with our custom integration and implementation services. Connect your business systems and optimize your data flows." />
        <meta name="keywords" content="hubspot integration, hubspot customization, hubspot implementation, hubspot api, hubspot data migration, crm integration" />
        <link rel="canonical" href="/services/dataops-implementation" />
        
        {/* Schema markup for the service */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "DataOps Implementation - HubSpot Integration Services",
              "provider": {
                "@type": "Organization",
                "name": "DataOps Group"
              },
              "description": "Custom HubSpot integration and implementation services to connect your business systems, optimize data flows, and create seamless operations.",
              "serviceType": "HubSpot Integration & Implementation",
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
        {/* Back button to Insights */}
        <div className="container mx-auto px-4 pt-28">
          <Button variant="outline" className="mb-4 bg-gray-700 text-white hover:bg-gray-800" asChild>
            <Link to="/insights">Back to Insights</Link>
          </Button>
        </div>
        
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4 bg-gradient-to-br from-white to-dataops-50">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-5 gap-12 items-center">
              <div className="lg:col-span-3 space-y-6">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-dataops-100 text-dataops-800 text-sm font-medium mb-2">
                  Our Services
                </div>
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                  HubSpot Integration & Customization
                </h1>
                <p className="text-lg md:text-xl text-gray-700 max-w-2xl">
                  Connect your HubSpot instance with the tools and systems your business relies on. 
                  Our custom integrations create seamless data flows that eliminate silos and manual processes.
                </p>
                <div className="pt-6">
                  <Button className="bg-dataops-600 hover:bg-dataops-700 px-6 py-6 text-base" asChild>
                    <Link to="/contact">Schedule a Consultation</Link>
                  </Button>
                </div>
              </div>
              
              <div className="lg:col-span-2 flex justify-center">
                <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden w-full max-w-md">
                  <img 
                    src="/lovable-uploads/12e641ec-9075-4921-80ad-5c42ee2a35de.png"
                    alt="Person diagramming data flows and integrations on a whiteboard"
                    className="w-full h-64 object-cover object-center"
                  />
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
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-6">How We Can Help</h2>
                  <p className="text-gray-700 mb-4">
                    Our HubSpot Integration & Customization services help businesses maximize their HubSpot investment
                    by creating seamless connections with other business systems and customizing HubSpot to match your
                    unique processes. We specialize in creating unified data flows that eliminate silos and manual work.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Whether you need to integrate HubSpot with your ERP, e-commerce platform, financial system, 
                    or custom applications, our team has the technical expertise to create robust, reliable integrations
                    that stand the test of time.
                  </p>
                </div>
                
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Services Include</h2>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="bg-dataops-50 p-6 rounded-lg">
                      <h3 className="font-semibold text-lg mb-3">API Integrations</h3>
                      <p className="text-gray-700">Custom development to connect HubSpot with any system that offers API access, enabling seamless data flow.</p>
                    </div>
                    <div className="bg-dataops-50 p-6 rounded-lg">
                      <h3 className="font-semibold text-lg mb-3">Custom Objects</h3>
                      <p className="text-gray-700">Design and implementation of custom objects to extend HubSpot's capabilities for your specific business needs.</p>
                    </div>
                    <div className="bg-dataops-50 p-6 rounded-lg">
                      <h3 className="font-semibold text-lg mb-3">Data Migration</h3>
                      <p className="text-gray-700">Clean, transform, and migrate your data into HubSpot from legacy systems while maintaining data integrity.</p>
                    </div>
                    <div className="bg-dataops-50 p-6 rounded-lg">
                      <h3 className="font-semibold text-lg mb-3">Workflow Automation</h3>
                      <p className="text-gray-700">Build custom workflows and automations that save time, reduce errors, and ensure consistent processes.</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Approach</h2>
                  <p className="text-gray-700 mb-4">
                    We follow a systematic approach to ensure your HubSpot integrations are reliable, maintainable, and 
                    deliver measurable business value:
                  </p>
                  
                  <ol className="list-decimal pl-5 space-y-3 text-gray-700 my-4">
                    <li>
                      <span className="font-medium">Discovery:</span> We deeply understand your business processes, data requirements, and integration goals.
                    </li>
                    <li>
                      <span className="font-medium">Solution Design:</span> We create a detailed technical blueprint for your integrations, considering data models, mappings, and workflows.
                    </li>
                    <li>
                      <span className="font-medium">Development:</span> Our experienced developers build robust integrations using HubSpot's APIs and the appropriate integration methods.
                    </li>
                    <li>
                      <span className="font-medium">Testing:</span> We rigorously test all integrations to ensure data flows correctly and error handling is in place.
                    </li>
                    <li>
                      <span className="font-medium">Deployment:</span> We carefully implement the integrations in your production environment with minimal disruption.
                    </li>
                    <li>
                      <span className="font-medium">Training & Support:</span> We provide documentation, training, and ongoing support to ensure your team can manage the integrations.
                    </li>
                  </ol>
                </div>
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
                    Contact us today to schedule a consultation and learn how our HubSpot integration services
                    can help you maximize your HubSpot investment and streamline your operations.
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

export default DataOpsImplementation;
