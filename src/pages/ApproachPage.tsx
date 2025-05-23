
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

const ApproachPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Our HubSpot Optimization Approach | Proven 3-Step Process</title>
        <meta name="description" content="How we rescue broken HubSpot implementations: Audit, Optimize, Scale. Our proven methodology has saved 150+ companies from CRM disasters. See the process." />
        <meta name="keywords" content="dataops approach, data methodology, data transformation process, agile data management, data strategy, data implementation" />
        <link rel="canonical" href="https://dataopsgroup.com/approach" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Our HubSpot Optimization Approach | Proven 3-Step Process" />
        <meta property="og:description" content="How we rescue broken HubSpot implementations: Audit, Optimize, Scale. Our proven methodology has saved 150+ companies from CRM disasters. See the process." />
        <meta property="og:url" content="https://dataopsgroup.com/approach" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Our HubSpot Optimization Approach | Proven 3-Step Process" />
        <meta name="twitter:description" content="How we rescue broken HubSpot implementations: Audit, Optimize, Scale. Our proven methodology has saved 150+ companies from CRM disasters. See the process." />
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
          "name": "Our HubSpot Optimization Approach | Proven 3-Step Process",
          "description": "How we rescue broken HubSpot implementations: Audit, Optimize, Scale. Our proven methodology has saved 150+ companies from CRM disasters. See the process.",
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
