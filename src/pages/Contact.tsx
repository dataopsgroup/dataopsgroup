
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
        <meta name="keywords" content="contact dataops, data consulting, get in touch, data operations help" />
        <link rel="canonical" href="/contact" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "ContactPage",
              "name": "DataOps Group Contact",
              "description": "Get in touch with DataOps Group for HubSpot consultancy services.",
              "url": "${window.location.origin}/contact"
            }
          `}
        </script>
      </Helmet>
      
      <Navbar />
      
      <main className="flex-grow pt-32">
        <div className="max-w-3xl mx-auto text-center mb-16 px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Get in <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-lg text-gray-600">
            Ready to transform your data operations? Contact us today.
          </p>
        </div>
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
};

export default ContactPage;
