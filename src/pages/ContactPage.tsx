
import React from 'react';
import Navbar from '@/components/Navbar';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';

const ContactPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Contact Us - DataOps Group</title>
        <meta name="description" content="Get in touch with our data operations experts. Contact DataOps Group for consultations, inquiries, or to discuss your data challenges." />
        <meta name="keywords" content="contact dataops, data consulting, get in touch, data operations help" />
        <link rel="canonical" href="/contact" />
      </Helmet>
      <Navbar />
      <main className="pt-28 flex-1">
        <div className="max-w-3xl mx-auto text-center mb-16">
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
