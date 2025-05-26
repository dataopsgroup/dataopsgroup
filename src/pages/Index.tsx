
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Services from '@/components/Services';
import Hero from '@/components/Hero';
import BookCTA from '@/components/BookCTA';
import Approach from '@/components/Approach';
import OrganizationSchema from '@/components/seo/OrganizationSchema';
import WebsiteSchema from '@/components/seo/WebsiteSchema';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import LocalBusinessSchema from '@/components/seo/LocalBusinessSchema';
import ProfessionalServiceSchema from '@/components/seo/ProfessionalServiceSchema';
import MetaHead from '@/components/seo/MetaHead';
import BreadcrumbNavigation from '@/components/seo/BreadcrumbNavigation';

const Index = () => {
  console.log('Index component rendering...');

  return (
    <div className="min-h-screen flex flex-col">
      <MetaHead 
        title="HubSpot ROI Not Meeting Expectations? We Fix That | DataOps Group"
        description="Stop losing money on underperforming HubSpot. We rescue broken implementations, optimize workflows, and turn your CRM into a revenue-generating machine. Free assessment."
        keywords="HubSpot consultant, HubSpot implementation, marketing operations, dataops, sales and marketing alignment, data quality"
        ogType="website"
        ogImage="/lovable-uploads/9b9f1c84-13af-4551-96d5-b7a930f008cf.png"
        canonicalPath="/"
        gscVerification="YOUR_GSC_VERIFICATION_CODE"
      />
      
      {/* Schema components rendered normally */}
      <OrganizationSchema />
      <WebsiteSchema />
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }]} />
      <LocalBusinessSchema />
      <ProfessionalServiceSchema />
      
      <Navbar />
      
      <main className="flex-grow">
        <div className="px-[5%] mt-6">
          <BreadcrumbNavigation items={[{ name: "Home", url: "/", current: true }]} />
        </div>
        <Hero />
        <div className="px-[5%]">
          <Services />
          <Approach />
          <BookCTA />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
