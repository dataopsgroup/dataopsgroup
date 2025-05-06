
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

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>DataOps Group - HubSpot Consultancy</title>
        <meta 
          name="description" 
          content="DataOps Group is a HubSpot consultancy that helps businesses optimize their HubSpot implementation and maximize their ROI." 
        />
        <meta name="keywords" content="hubspot consultancy, hubspot optimization, hubspot implementation, data operations, marketing operations" />
        <link rel="canonical" href="/" />
      </Helmet>
      
      <OrganizationSchema />
      <WebsiteSchema />
      
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

export default Home;
