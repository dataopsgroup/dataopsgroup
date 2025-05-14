
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';
import { Card, CardContent } from '@/components/ui/card';
import CTABanner from '@/components/CTABanner';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';

const Terms = () => {
  // Define breadcrumbs for schema
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Terms of Service', url: '/terms' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Terms of Service - DataOps Group</title>
        <meta name="description" content="Terms and conditions for using DataOps Group services and website. Review our terms of service agreement." />
        <meta name="keywords" content="terms of service, terms and conditions, legal, agreement, DataOps Group" />
        <link rel="canonical" href="/terms" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Terms of Service - DataOps Group" />
        <meta property="og:description" content="Terms and conditions for using DataOps Group services and website." />
        <meta property="og:url" content={`${window.location.origin}/terms`} />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Terms of Service - DataOps Group" />
        <meta name="twitter:description" content="Terms and conditions for using DataOps Group services and website." />
      </Helmet>
      
      {/* Schema Markup */}
      <BreadcrumbSchema items={breadcrumbs} />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Terms of Service - DataOps Group",
          "description": "Terms and conditions for using DataOps Group services and website.",
          "publisher": {
            "@type": "Organization",
            "name": "DataOps Group",
            "logo": {
              "@type": "ImageObject",
              "url": `${window.location.origin}/lovable-uploads/9b9f1c84-13af-4551-96d5-b7a930f008cf.png`
            }
          }
        })}
      </script>
      
      <Navbar />
      <main className="flex-1">
        <section className="bg-gradient-to-br from-white to-dataops-50 py-16 md:py-24">
          <div className="container mx-auto px-[5%]">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="gradient-text">Terms of Service</span>
              </h1>
              <p className="text-lg text-gray-700">
                Last Updated: May 14, 2025
              </p>
            </div>
          </div>
        </section>
        
        <section className="py-16 px-[5%] bg-white">
          <div className="container mx-auto max-w-4xl">
            <Card className="mb-8 shadow-sm">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
                <p className="text-gray-700 mb-4">
                  Welcome to DataOps Group. These Terms of Service govern your use of our website, services, and any associated content or materials. By accessing or using our services, you agree to be bound by these terms. If you do not agree with any part of these terms, you may not use our services.
                </p>
              </CardContent>
            </Card>
            
            <Card className="mb-8 shadow-sm">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-semibold mb-4">2. Services Description</h2>
                <p className="text-gray-700 mb-4">
                  DataOps Group provides HubSpot consultancy services, including but not limited to HubSpot implementation, optimization, training, analytics, business intelligence, and related data operation services. The specific details of services will be outlined in separate service agreements or statements of work between DataOps Group and the client.
                </p>
              </CardContent>
            </Card>
            
            <Card className="mb-8 shadow-sm">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-semibold mb-4">3. User Responsibilities</h2>
                <p className="text-gray-700 mb-4">
                  You are responsible for maintaining the confidentiality of any login credentials associated with your access to our services. You agree to notify us immediately of any unauthorized use of your account or any other breach of security. You are responsible for all activities that occur under your account.
                </p>
                <p className="text-gray-700 mb-4">
                  When using our services, you agree to comply with all applicable laws and regulations and not to use our services for any unlawful purposes.
                </p>
              </CardContent>
            </Card>
            
            <Card className="mb-8 shadow-sm">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-semibold mb-4">4. Intellectual Property</h2>
                <p className="text-gray-700 mb-4">
                  All content on our website, including text, graphics, logos, images, and software, is the property of DataOps Group or our content suppliers and is protected by copyright and other intellectual property laws. You may not reproduce, distribute, modify, or create derivative works from any content without our express written consent.
                </p>
              </CardContent>
            </Card>
            
            <Card className="mb-8 shadow-sm">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-semibold mb-4">5. Privacy Policy</h2>
                <p className="text-gray-700 mb-4">
                  Our Privacy Policy, available at <a href="/privacy" className="text-dataops-600 hover:underline">Privacy Policy</a>, describes how we collect, use, and disclose information about you. By using our services, you consent to our collection and use of information as described in the Privacy Policy.
                </p>
              </CardContent>
            </Card>
            
            <Card className="mb-8 shadow-sm">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-semibold mb-4">6. Limitation of Liability</h2>
                <p className="text-gray-700 mb-4">
                  To the maximum extent permitted by law, DataOps Group shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from your use of our services.
                </p>
              </CardContent>
            </Card>
            
            <Card className="mb-8 shadow-sm">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-semibold mb-4">7. Termination</h2>
                <p className="text-gray-700 mb-4">
                  We may terminate or suspend your access to our services immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach these Terms of Service.
                </p>
              </CardContent>
            </Card>
            
            <Card className="mb-8 shadow-sm">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-semibold mb-4">8. Changes to Terms</h2>
                <p className="text-gray-700 mb-4">
                  We reserve the right to modify or replace these Terms of Service at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
                </p>
              </CardContent>
            </Card>
            
            <Card className="mb-8 shadow-sm">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-semibold mb-4">9. Contact Information</h2>
                <p className="text-gray-700 mb-4">
                  If you have any questions about these Terms of Service, please contact us at:
                </p>
                <p className="text-gray-700">
                  DataOps Group<br />
                  Email: info@dataopsgroup.com<br />
                  Phone: +1-555-555-5555
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <CTABanner />
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
