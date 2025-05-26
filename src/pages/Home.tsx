
import React from 'react';
import { Helmet } from 'react-helmet-async';
import SemanticLayout from '@/components/layout/SemanticLayout';
import Services from '@/components/Services';
import Hero from '@/components/Hero';
import BookCTA from '@/components/BookCTA';
import Approach from '@/components/Approach';
import CMODataPlaybook from '@/components/CMODataPlaybook';
import OrganizationSchema from '@/components/seo/OrganizationSchema';
import WebsiteSchema from '@/components/seo/WebsiteSchema';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import LocalBusinessSchema from '@/components/seo/LocalBusinessSchema';
import ProfessionalServiceSchema from '@/components/seo/ProfessionalServiceSchema';

const Home = () => {
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'https://dataopsgroup.com';
  
  return (
    <SemanticLayout>
      <Helmet>
        <title>HubSpot ROI Not Meeting Expectations? We Fix That | DataOps Group</title>
        <meta 
          name="description" 
          content="Stop losing money on underperforming HubSpot. We rescue broken implementations, optimize workflows, and turn your CRM into a revenue-generating machine. Free assessment." 
        />
        <meta name="keywords" content="hubspot consultancy, hubspot optimization, hubspot implementation, data operations, marketing operations, sales operations, revenue operations" />
        <link rel="canonical" href="https://dataopsgroup.com/" />
        
        {/* Critical viewport and mobile optimization */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
        
        {/* Open Graph optimization */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="HubSpot ROI Not Meeting Expectations? We Fix That | DataOps Group" />
        <meta property="og:description" content="Stop losing money on underperforming HubSpot. We rescue broken implementations, optimize workflows, and turn your CRM into a revenue-generating machine. Free assessment." />
        <meta property="og:url" content="https://dataopsgroup.com/" />
        <meta property="og:image" content={`${baseUrl}/lovable-uploads/9b9f1c84-13af-4551-96d5-b7a930f008cf.png`} />
        <meta property="og:site_name" content="DataOps Group" />
        
        {/* Twitter optimization */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="HubSpot ROI Not Meeting Expectations? We Fix That | DataOps Group" />
        <meta name="twitter:description" content="Stop losing money on underperforming HubSpot. We rescue broken implementations, optimize workflows, and turn your CRM into a revenue-generating machine. Free assessment." />
        <meta name="twitter:image" content={`${baseUrl}/lovable-uploads/9b9f1c84-13af-4551-96d5-b7a930f008cf.png`} />
        
        {/* Performance optimization */}
        <meta name="theme-color" content="#dc2626" />
        
        {/* Defer non-critical CSS */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </Helmet>
      
      <OrganizationSchema />
      <WebsiteSchema />
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }]} />
      <LocalBusinessSchema />
      <ProfessionalServiceSchema />
      
      <section aria-labelledby="hero-heading">
        <Hero />
      </section>
      
      <div className="px-[5%]">
        <section aria-label="Our Services">
          <Services />
        </section>
        
        <section aria-label="Our Approach">
          <Approach />
        </section>
      </div>
      
      <CMODataPlaybook />
      
      <div className="px-[5%]">
        <section aria-label="Book a Consultation">
          <BookCTA />
        </section>
      </div>
    </SemanticLayout>
  );
};

export default Home;
