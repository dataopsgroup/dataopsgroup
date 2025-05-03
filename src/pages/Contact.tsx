
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';

const ContactPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Contact Us - DataOps Group</title>
        <meta 
          name="description" 
          content="Get in touch with DataOps Group for HubSpot consultancy services." 
        />
      </Helmet>
      
      <Navbar />
      
      <main className="flex-grow pt-32">
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
};

export default ContactPage;
