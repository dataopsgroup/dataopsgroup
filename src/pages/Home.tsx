
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
import OptimizedImage from '@/components/ui/optimized-image';

const Home = () => {
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'https://dataopsgroup.com';
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>DataOps Group - HubSpot Consultancy for Marketing & Sales Leaders</title>
        <meta 
          name="description" 
          content="DataOps Group is a premier HubSpot consultancy helping marketing, sales, and operations leaders optimize their HubSpot implementation and maximize ROI through data-driven strategies." 
        />
        <meta name="keywords" content="hubspot consultancy, hubspot optimization, hubspot implementation, data operations, marketing operations, sales operations, revenue operations" />
        <link rel="canonical" href={`${baseUrl}/`} />
        
        {/* Enhanced viewport meta tag for better mobile experience */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover, maximum-scale=5, minimum-scale=1" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="DataOps Group - HubSpot Consultancy for Marketing & Sales Leaders" />
        <meta property="og:description" content="DataOps Group is a premier HubSpot consultancy helping marketing, sales, and operations leaders optimize their HubSpot implementation and maximize ROI through data-driven strategies." />
        <meta property="og:url" content={`${baseUrl}/`} />
        <meta property="og:image" content={`${baseUrl}/lovable-uploads/9b9f1c84-13af-4551-96d5-b7a930f008cf.png`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="DataOps Group" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="DataOps Group - HubSpot Consultancy for Marketing & Sales Leaders" />
        <meta name="twitter:description" content="DataOps Group is a premier HubSpot consultancy helping marketing, sales, and operations leaders optimize their HubSpot implementation and maximize ROI through data-driven strategies." />
        <meta name="twitter:image" content={`${baseUrl}/lovable-uploads/9b9f1c84-13af-4551-96d5-b7a930f008cf.png`} />
        <meta name="twitter:site" content="@dataops_group" />
        
        {/* Mobile optimization */}
        <meta name="theme-color" content="#1e4f9c" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        
        {/* Preload critical resources */}
        <link rel="preload" as="image" href="/lovable-uploads/9b9f1c84-13af-4551-96d5-b7a930f008cf.png" />
        <link rel="preload" as="image" href="/lovable-uploads/5f3a8bdf-410e-4727-8fa0-eb20abe91242.png" />
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
