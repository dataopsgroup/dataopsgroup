
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Services from '@/components/Services';
import Hero from '@/components/Hero';
import BookCTA from '@/components/BookCTA';
import Approach from '@/components/Approach';
import ChatbotSection from '@/components/ChatbotSection';
import OrganizationSchema from '@/components/seo/OrganizationSchema';
import WebsiteSchema from '@/components/seo/WebsiteSchema';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import LocalBusinessSchema from '@/components/seo/LocalBusinessSchema';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>DataOps Group - HubSpot Consultancy for Marketing & Sales Leaders</title>
        <meta 
          name="description" 
          content="DataOps Group is a premier HubSpot consultancy helping marketing, sales, and operations leaders optimize their HubSpot implementation and maximize ROI through data-driven strategies." 
        />
        <meta name="keywords" content="hubspot consultancy, hubspot optimization, hubspot implementation, data operations, marketing operations, sales operations, revenue operations" />
        <link rel="canonical" href={`${window.location.origin}/`} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="DataOps Group - HubSpot Consultancy for Marketing & Sales Leaders" />
        <meta property="og:description" content="DataOps Group is a premier HubSpot consultancy helping marketing, sales, and operations leaders optimize their HubSpot implementation and maximize ROI through data-driven strategies." />
        <meta property="og:url" content={`${window.location.origin}/`} />
        <meta property="og:image" content={`${window.location.origin}/lovable-uploads/9b9f1c84-13af-4551-96d5-b7a930f008cf.png`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="DataOps Group - HubSpot Consultancy for Marketing & Sales Leaders" />
        <meta name="twitter:description" content="DataOps Group is a premier HubSpot consultancy helping marketing, sales, and operations leaders optimize their HubSpot implementation and maximize ROI through data-driven strategies." />
        <meta name="twitter:image" content={`${window.location.origin}/lovable-uploads/9b9f1c84-13af-4551-96d5-b7a930f008cf.png`} />
      </Helmet>
      
      <OrganizationSchema />
      <WebsiteSchema />
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }]} />
      <LocalBusinessSchema />
      
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <ChatbotSection />
        <Services />
        <Approach />
        <BookCTA />
      </main>
      
      <Footer />
    </div>
  );
};

export default Home;
