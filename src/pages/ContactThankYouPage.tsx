import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';

const ContactThankYouPage = () => {
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'https://dataopsgroup.com';
  
  // Define breadcrumbs for schema
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Contact', url: '/contact' },
    { name: 'Thank You', url: '/contact-thank-you' }
  ];

  return (
    <div className="page-container">
      <Helmet>
        <title>Thank You - DataOps Group</title>
        <meta name="description" content="Thank you for contacting DataOps Group. Our team will be in touch with you shortly to discuss your data operation needs." />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href={`${baseUrl}/contact-thank-you`} />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Thank You - DataOps Group" />
        <meta property="og:description" content="Thank you for contacting DataOps Group. Our team will be in touch with you shortly to discuss your data operation needs." />
        <meta property="og:url" content={`${baseUrl}/contact-thank-you`} />
        <meta property="og:image" content={`${baseUrl}/lovable-uploads/9b9f1c84-13af-4551-96d5-b7a930f008cf.png`} /> {/* Using a default image */}
        <meta property="og:site_name" content="DataOps Group" />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Thank You - DataOps Group" />
        <meta name="twitter:description" content="Thank you for contacting DataOps Group. Our team will be in touch with you shortly to discuss your data operation needs." />
        <meta name="twitter:image" content={`${baseUrl}/lovable-uploads/9b9f1c84-13af-4551-96d5-b7a930f008cf.png`} /> {/* Using a default image */}
        <meta name="twitter:site" content="@dataops_group" />
      </Helmet>
      
      {/* Schema Markup */}
      <BreadcrumbSchema items={breadcrumbs} />
      <script type="application/ld+json">{`
        {
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Thank You - DataOps Group",
          "description": "Thank you for contacting DataOps Group. Our team will be in touch with you shortly to discuss your data operation needs.",
          "url": "${baseUrl}/contact-thank-you",
          "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "${baseUrl}/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Contact",
                "item": "${baseUrl}/contact"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Thank You",
                "item": "${baseUrl}/contact-thank-you"
              }
            ]
          }
        }
      `}</script>
      
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
