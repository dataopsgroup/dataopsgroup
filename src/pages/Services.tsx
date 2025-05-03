
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';
import CTABanner from '@/components/CTABanner';
import ServicesHero from '@/components/services/ServicesHero';
import ServicesOverview from '@/components/services/ServicesOverview';
import ServicesIndustries from '@/components/services/ServicesIndustries';
import ServicesSidebar from '@/components/services/ServicesSidebar';

const ServicesPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Our Services - DataOps Group</title>
        <meta name="description" content="Explore our comprehensive data operations services including data architecture, analytics, governance, and technology consulting." />
        <meta name="keywords" content="data services, data architecture, analytics, BI, data governance, dataops implementation, enterprise data solutions" />
        <link rel="canonical" href="/services" />
      </Helmet>
      <Navbar />
      <main>
        <ServicesHero />

        {/* Content Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-3 gap-16">
              <div className="lg:col-span-2 space-y-12">
                <ServicesOverview />
                <ServicesIndustries />
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
      
      {/* Schema markup for Services page */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Our Services - DataOps Group",
          "description": "Explore our comprehensive data operations services including data architecture, analytics, governance, and technology consulting.",
          "publisher": {
            "@type": "Organization",
            "name": "DataOps Group"
          },
          "author": {
            "@type": "Person",
            "name": "Geoff Tucker"
          }
        })
      }} />
    </div>
  );
};

export default ServicesPage;
