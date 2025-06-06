
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTABanner from '@/components/CTABanner';
import { Helmet } from 'react-helmet-async';
import ApproachHero from '@/components/approach/ApproachHero';
import ApproachMethodology from '@/components/approach/ApproachMethodology';
import ApproachSteps from '@/components/approach/ApproachSteps';
import ApproachBenefits from '@/components/approach/ApproachBenefits';
import ApproachSidebar from '@/components/approach/ApproachSidebar';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';

const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'https://dataopsgroup.com';

const ApproachPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>HubSpot Implementation Methodology - DataOps Group PE-Focused Approach</title>
        <meta name="description" content="Discover our proven methodology for HubSpot implementations that meet PE standards. Systematic approach delivers 19% higher valuations and 73% faster EBITDA growth for portfolio companies." />
        <meta name="keywords" content="hubspot implementation methodology, pe portfolio operations, data operations approach, hubspot rescue, revenue operations process" />
        <link rel="canonical" href={`${baseUrl}/approach`} />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="HubSpot Implementation Methodology - DataOps Group PE-Focused Approach" />
        <meta property="og:description" content="Discover our proven methodology for HubSpot implementations that meet PE standards. Systematic approach delivers 19% higher valuations and 73% faster EBITDA growth for portfolio companies." />
        <meta property="og:url" content={`${baseUrl}/approach`} />
        <meta property="og:image" content={`${baseUrl}/lovable-uploads/9b9f1c84-13af-4551-96d5-b7a930f008cf.png`} />
        <meta property="og:site_name" content="DataOps Group" />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="HubSpot Implementation Methodology - DataOps Group PE-Focused Approach" />
        <meta name="twitter:description" content="Discover our proven methodology for HubSpot implementations that meet PE standards. Systematic approach delivers 19% higher valuations and 73% faster EBITDA growth for portfolio companies." />
        <meta name="twitter:image" content={`${baseUrl}/lovable-uploads/9b9f1c84-13af-4551-96d5-b7a930f008cf.png`} />
        <meta name="twitter:site" content="@dataops_group" />
      </Helmet>
      <BreadcrumbSchema 
        items={[
          { name: "Home", url: "/" },
          { name: "Our Approach", url: "/approach" }
        ]}
      />
      <Navbar />
      <main>
        <ApproachHero />

        {/* Content Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-3 gap-16">
              <div className="lg:col-span-2 space-y-12">
                <ApproachMethodology />
                <ApproachSteps />
                <ApproachBenefits />
              </div>
              
              <div>
                <ApproachSidebar />
              </div>
            </div>
          </div>
        </section>
        
        <CTABanner />
      </main>
      <Footer />
      
      {/* Schema markup for Approach page */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "HubSpot Implementation Methodology - DataOps Group PE-Focused Approach",
          "description": "Discover our proven methodology for HubSpot implementations that meet PE standards. Systematic approach delivers 19% higher valuations and 73% faster EBITDA growth for portfolio companies.",
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

export default ApproachPage;
