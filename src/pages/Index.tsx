import React from 'react';
import { Helmet } from 'react-helmet-async';
import SemanticLayout from '@/components/layout/SemanticLayout';
import Services from '@/components/Services';
import Hero from '@/components/Hero';
import BookCTA from '@/components/BookCTA';
import Approach from '@/components/Approach';
import ChatbotSection from '@/components/ChatbotSection';
import OrganizationSchema from '@/components/seo/OrganizationSchema';
import WebsiteSchema from '@/components/seo/WebsiteSchema';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import LocalBusinessSchema from '@/components/seo/LocalBusinessSchema';
import ProfessionalServiceSchema from '@/components/seo/ProfessionalServiceSchema';

const Index = () => {
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'https://dataopsgroup.com';
  
  // Comment: Force GitHub sync - Updated deployment timestamp again
  console.log('Homepage deployment refresh initiated:', new Date().toISOString());
  
  return (
    <SemanticLayout>
      <Helmet>
        <title>PE Portfolio Operations Platform | HubSpot Implementation for Private Equity</title>
        <meta 
          name="description" 
          content="Transform PE portfolio operations into profit drivers with our specialized HubSpot platform. Achieve 19% higher valuations, 73% faster EBITDA growth, and $18-22 ROI. 100-day implementation for private equity firms." 
        />
        <meta name="keywords" content="hubspot consultancy, hubspot optimization, hubspot implementation, data operations, marketing operations, sales operations, revenue operations" />
        <link rel="canonical" href={`${baseUrl}/`} />
        
        {/* Enhanced viewport meta tag for better mobile experience */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover, maximum-scale=5, minimum-scale=1" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="PE Portfolio Operations Platform | HubSpot Implementation for Private Equity" />
        <meta property="og:description" content="Transform PE portfolio operations into profit drivers with our specialized HubSpot platform. Achieve 19% higher valuations, 73% faster EBITDA growth, and $18-22 ROI. 100-day implementation for private equity firms." />
        <meta property="og:url" content={`${baseUrl}/`} />
        <meta property="og:image" content={`${baseUrl}/lovable-uploads/9b9f1c84-13af-4551-96d5-b7a930f008cf.png`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="DataOps Group" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="PE Portfolio Operations Platform | HubSpot Implementation for Private Equity" />
        <meta name="twitter:description" content="Transform PE portfolio operations into profit drivers with our specialized HubSpot platform. Achieve 19% higher valuations, 73% faster EBITDA growth, and $18-22 ROI. 100-day implementation for private equity firms." />
        <meta name="twitter:image" content={`${baseUrl}/lovable-uploads/9b9f1c84-13af-4551-96d5-b7a930f008cf.png`} />
        <meta name="twitter:site" content="@dataops_group" />
        
        {/* Mobile optimization */}
        <meta name="theme-color" content="#1e4f9c" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        
        {/* Preload critical resources */}
        <link rel="preload" as="image" href="/lovable-uploads/9b9f1c84-13af-4551-96d5-b7a930f008cf.png" />
        <link rel="preload" as="image" href="/lovable-uploads/5f3a8bdf-410e-4727-8fa0-eb20abe91242.png" />
        <link rel="preload" as="image" href="/lovable-uploads/df195f9f-0886-488a-bdb0-c0db162335a7.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Mobile touch action for better tap targets */}
        <style type="text/css">{`
          button, a, .tap-target {
            touch-action: manipulation;
            min-height: 44px;
            min-width: 44px;
          }
          
          @media (max-width: 768px) {
            .mobile-text {
              font-size: 16px !important;
              line-height: 1.5 !important;
            }
            .mobile-heading {
              font-size: 20px !important;
              line-height: 1.3 !important;
            }
          }
        `}</style>
      </Helmet>
      
      {/* Schema markup for SEO */}
      <OrganizationSchema />
      <WebsiteSchema />
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }]} />
      <LocalBusinessSchema />
      <ProfessionalServiceSchema />
      
      {/* Main content sections */}
      <section aria-labelledby="hero-heading">
        <Hero />
      </section>
      
      <section aria-label="Chatbot Services">
        <ChatbotSection />
      </section>
      
      {/* Enhanced Assessment CTA Section */}
      <section className="py-16 bg-gradient-to-br from-dataops-50 to-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-dataops-900">
              Wondering If Your Operations Are PE-Ready?
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Most portfolio companies discover critical operational gaps only after investor reviews. 
              Our assessment tools identify these blind spots and calculate your improvement potential before they impact your valuation.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-8">
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm flex flex-col h-full">
                <div className="flex items-center justify-center mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">Operations Assessment</h3>
                </div>
                <p className="text-gray-600 mb-6 flex-grow">
                  5-minute evaluation to identify operational gaps and PE readiness issues
                </p>
                <a href="/data-operations-assessment" className="bg-dataops-600 hover:bg-dataops-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-block mt-auto">
                  Assess PE Readiness
                </a>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm flex flex-col h-full">
                <div className="flex items-center justify-center mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">ROI Calculator</h3>
                </div>
                <p className="text-gray-600 mb-6 flex-grow">
                  Calculate potential revenue gains and efficiency improvements from RevOps
                </p>
                <a href="/revops-roi-calculator" className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-block mt-auto">
                  Calculate ROI
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section aria-label="Our Services">
        <Services />
      </section>
      
      <section aria-label="Our Approach">
        <Approach />
      </section>
      
      <section aria-label="Book a Consultation">
        <BookCTA />
      </section>
    </SemanticLayout>
  );
};

export default Index;
