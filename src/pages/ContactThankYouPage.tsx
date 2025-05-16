
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const ContactThankYouPage = () => {
  return (
    <div className="page-container">
      <Helmet>
        <title>Thank You - DataOps Group</title>
        <meta name="description" content="Thank you for contacting DataOps Group. Our team will be in touch with you shortly to discuss your data operation needs." />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href="/contact-thank-you" />
      </Helmet>
      <Navbar />
      <main className="content-wrapper pt-32 pb-16"> {/* Increased top padding from pt-24 to pt-32 */}
        <div className="container mx-auto px-[5%]">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-dataops-900 mb-4">Thank You</h1>
            <h2 className="text-2xl font-medium text-gray-700 mb-8">We will follow up within 1 business day.</h2>
            
            <div className="mt-12">
              <Button asChild className="bg-dataops-600 hover:bg-dataops-700">
                <Link to="/">Return to Home</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactThankYouPage;
