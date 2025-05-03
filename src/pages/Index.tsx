
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Services from '@/components/Services';
import Hero from '@/components/Hero';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>DataOps Group - HubSpot Consultancy</title>
        <meta 
          name="description" 
          content="DataOps Group is a HubSpot consultancy that helps businesses optimize their HubSpot implementation and maximize their ROI." 
        />
      </Helmet>
      
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <Services />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
