
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
import { applyCriticalCSS, preloadCriticalFonts } from '@/lib/critical-css';

const Index = () => {
  React.useEffect(() => {
    // Apply critical CSS and preload fonts for the homepage
    applyCriticalCSS('/');
    preloadCriticalFonts();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <MetaHead 
        title="DataOps Group - HubSpot Consultancy"
        description="DataOps Group is a HubSpot consultancy that helps businesses optimize their HubSpot implementation, improve data quality, and maximize their marketing ROI."
        keywords="HubSpot consultant, HubSpot implementation, marketing operations, dataops, sales and marketing alignment, data quality"
        ogType="website"
        ogImage="/lovable-uploads/9b9f1c84-13af-4551-96d5-b7a930f008cf.png"
        canonicalPath="/"
      />
      
      <OrganizationSchema />
      <WebsiteSchema />
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }]} />
      <LocalBusinessSchema />
      <ProfessionalServiceSchema />
      
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <Services />
        <Approach />
        <BookCTA />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
