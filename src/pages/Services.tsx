
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';
import CTABanner from '@/components/CTABanner';
import ServicesHero from '@/components/services/ServicesHero';
import ServicesOverview from '@/components/services/ServicesOverview';
import ServicesSidebar from '@/components/services/ServicesSidebar';
import ServiceSchema from '@/components/seo/ServiceSchema';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';

const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'https://dataopsgroup.com';

const ServicesPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Our Services - DataOps Group</title>
        <meta name="description" content="Explore our comprehensive data operations services including data architecture, analytics, governance, and technology consulting." />
        <meta name="keywords" content="data services, data architecture, analytics, BI, data governance, dataops implementation, enterprise data solutions" />
        <link rel="canonical" href={`${baseUrl}/services`} />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Our Services - DataOps Group" />
        <meta property="og:description" content="Explore our comprehensive data operations services including data architecture, analytics, governance, and technology consulting." />
        <meta property="og:url" content={`${baseUrl}/services`} />
        <meta property="og:image" content={`${baseUrl}/lovable-uploads/9b9f1c84-13af-4551-96d5-b7a930f008cf.png`} />
        <meta property="og:site_name" content="DataOps Group" />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Our Services - DataOps Group" />
        <meta name="twitter:description" content="Explore our comprehensive data operations services including data architecture, analytics, governance, and technology consulting." />
        <meta name="twitter:image" content={`${baseUrl}/lovable-uploads/9b9f1c84-13af-4551-96d5-b7a930f008cf.png`} />
        <meta name="twitter:site" content="@dataops_group" />
      </Helmet>
      
      <ServiceSchema 
        name="DataOps Group Services"
        description="Comprehensive data operations services including HubSpot implementation, analytics, training, and marketing operations solutions."
        url="/services"
        serviceOutput="Optimized business operations, improved data quality, and enhanced marketing and sales performance"
      />
      
      <BreadcrumbSchema 
        items={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" }
        ]} 
      />
      
      <Navbar />
      <main>
        <ServicesHero />

        {/* Content Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-3 gap-16">
              <div className="lg:col-span-2 space-y-12">
                <ServicesOverview />
              </div>
              
              <div>
                <ServicesSidebar />
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

export default ServicesPage;
