
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import MetaHead from '@/components/seo/MetaHead';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';

const ContactThankYouPage = () => {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Contact', url: '/contact' },
    { name: 'Thank You', url: '/contact/thank-you' }
  ];

  return (
    <div className="page-container">
      <MetaHead
        title="Thank You - DataOps Group"
        description="Thank you for contacting DataOps Group. Our team will be in touch with you shortly to discuss your data operation needs."
        canonicalPath="/contact/thank-you"
        noindex={true}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Thank You - DataOps Group",
          "description": "Contact form confirmation page",
          "url": "https://dataopsgroup.com/contact/thank-you",
          "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://dataopsgroup.com/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Contact",
                "item": "https://dataopsgroup.com/contact"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Thank You",
                "item": "https://dataopsgroup.com/contact/thank-you"
              }
            ]
          },
          "mainEntity": {
            "@type": "ContactPage",
            "name": "Contact Confirmation",
            "description": "Confirmation that contact form was successfully submitted"
          }
        }}
      />
      
      <BreadcrumbSchema items={breadcrumbs} />
      
      <Navbar />
      <main className="content-wrapper pt-32 pb-16">
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
