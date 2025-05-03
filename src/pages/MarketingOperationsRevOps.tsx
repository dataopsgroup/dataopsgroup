import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTABanner from '@/components/CTABanner';
import { ArrowLeft, CheckCircle, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const MarketingOperationsRevOps = () => {
  const benefits = [
    "Increased marketing and sales alignment",
    "Improved campaign performance and ROI",
    "Enhanced data-driven decision making",
    "Streamlined revenue processes and workflows",
    "Better customer journey visibility",
    "Optimized technology stack utilization",
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Marketing Operations & RevOps - DataOps Group</title>
        <meta name="description" content="Transform your marketing and revenue operations with our strategic RevOps services. Optimize your tech stack, streamline processes, and drive growth." />
        <meta name="keywords" content="marketing operations, revenue operations, revops, marketing technology, martech, HubSpot, data integration, workflow automation" />
        <link rel="canonical" href="/services/marketing-operations-revops" />
        
        {/* Schema markup for the service */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Marketing Operations & RevOps",
              "provider": {
                "@type": "Organization",
                "name": "DataOps Group"
              },
              "description": "Strategic marketing operations and revenue operations (RevOps) services to align marketing, sales and customer success for improved performance and ROI.",
              "serviceType": "Marketing Operations & RevOps",
              "areaServed": {
                "@type": "Country",
                "name": "United States"
              },
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD",
                "availability": "https://schema.org/InStock"
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
            <Link to="/insights" className="inline-flex items-center px-4 py-2 rounded-md bg-gray-700 text-white hover:bg-gray-800 mb-8">
              <ArrowLeft className="h-4 w-4 mr-2" aria-hidden="true" />
              <span>Back to Insights</span>
            </Link>
            
            <div className="grid lg:grid-cols-5 gap-12 items-center">
              <div className="lg:col-span-3 space-y-6">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-dataops-100 text-dataops-800 text-sm font-medium mb-2">
                  Our Services
                </div>
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                  Marketing Operations & RevOps
                </h1>
                <p className="text-lg md:text-xl text-gray-700 max-w-2xl">
                  Align your marketing, sales, and customer success operations to create a unified 
                  revenue engine that drives growth, improves customer experience, and maximizes ROI.
                </p>
                <div className="pt-6">
                  <Button className="bg-dataops-600 hover:bg-dataops-700 px-6 py-6 text-base">
                    Schedule a Consultation
                  </Button>
                </div>
              </div>
              
              <div className="lg:col-span-2 flex justify-center">
                <div className="relative bg-white rounded-2xl shadow-xl p-8 z-10 w-full max-w-md">
                  <div className="flex justify-center items-center h-48 w-full rounded-lg bg-dataops-50">
                    <div className="text-dataops-600" aria-hidden="true">
                      <TrendingUp className="h-16 w-16" />
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
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-6">How We Can Help</h2>
                  <p className="text-gray-700 mb-4">
                    Our Marketing Operations & RevOps services help businesses optimize their marketing technology 
                    stack, streamline processes, and enable data-driven decision making. We specialize in HubSpot 
                    implementation and optimization, as well as integrating your marketing platforms with sales 
                    and customer success systems for a unified approach to revenue generation.
                  </p>
                  <p className="text-gray-700 mb-4">
                    By leveraging our expertise in marketing technology, workflow automation, and data integration, 
                    we help you break down silos between departments, improve collaboration, and create a seamless 
                    customer journey from awareness to advocacy.
                  </p>
                </div>
                
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Approach</h2>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="bg-dataops-50 p-6 rounded-lg">
                      <h3 className="font-semibold text-lg mb-3">1. Diagnose</h3>
                      <p className="text-gray-700">We audit your current marketing and sales operations, 
                      technology stack, and processes to identify opportunities for improvement.</p>
                    </div>
                    <div className="bg-dataops-50 p-6 rounded-lg">
                      <h3 className="font-semibold text-lg mb-3">2. Strategize</h3>
                      <p className="text-gray-700">We develop a customized RevOps roadmap aligned with your 
                      business goals, focusing on people, process, and technology improvements.</p>
                    </div>
                    <div className="bg-dataops-50 p-6 rounded-lg">
                      <h3 className="font-semibold text-lg mb-3">3. Implement</h3>
                      <p className="text-gray-700">Our team configures systems, integrates tools, and 
                      optimizes workflows to create a cohesive revenue operations framework.</p>
                    </div>
                    <div className="bg-dataops-50 p-6 rounded-lg">
                      <h3 className="font-semibold text-lg mb-3">4. Measure & Refine</h3>
                      <p className="text-gray-700">We establish KPIs and reporting dashboards to monitor 
                      performance and continuously improve your RevOps ecosystem.</p>
                    </div>
                  </div>
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
                    Contact us today to schedule a consultation and learn how our Marketing Operations & RevOps services
                    can help you align your teams and drive revenue growth.
                  </p>
                  <Button className="w-full bg-dataops-600 hover:bg-dataops-700">
                    Contact Us
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

export default MarketingOperationsRevOps;
