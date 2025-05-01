
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';

const TermsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Terms of Service - DataOps Group</title>
        <meta name="description" content="Review our terms of service to understand the conditions for using DataOps Group's website and services." />
        <meta name="keywords" content="terms of service, legal terms, service agreement, user agreement" />
        <link rel="canonical" href="/terms" />
      </Helmet>
      <Navbar />
      <main className="pt-28 flex-1">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">
            Terms of <span className="gradient-text">Service</span>
          </h1>
          
          <div className="prose max-w-4xl mx-auto mb-16">
            <p className="lead text-lg mb-6">
              Last updated: May 1, 2025
            </p>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">1. Agreement to Terms</h2>
              <p>
                By accessing or using DataOps Group's website, services, or any applications made available by
                DataOps Group (collectively, the "Services"), you agree to be bound by these Terms of Service
                and all applicable laws and regulations. If you do not agree with any of these terms, you are
                prohibited from using or accessing our Services.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. Use License</h2>
              <p>
                Permission is granted to temporarily access the materials on DataOps Group's website for personal,
                non-commercial transitory viewing only. This license does not include:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Modifying or copying our materials</li>
                <li>Using the materials for any commercial purpose</li>
                <li>Attempting to decompile or reverse engineer any software contained on DataOps Group's website</li>
                <li>Removing any copyright or other proprietary notations from the materials</li>
              </ul>
              <p>
                This license shall automatically terminate if you violate any of these restrictions and may be
                terminated by DataOps Group at any time.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. Disclaimer</h2>
              <p>
                The materials on DataOps Group's website are provided on an 'as is' basis. DataOps Group makes no
                warranties, expressed or implied, and hereby disclaims and negates all other warranties including,
                without limitation, implied warranties or conditions of merchantability, fitness for a particular
                purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">4. Limitations</h2>
              <p>
                In no event shall DataOps Group or its suppliers be liable for any damages (including, without
                limitation, damages for loss of data or profit, or due to business interruption) arising out of
                the use or inability to use the materials on DataOps Group's website, even if DataOps Group or
                a DataOps Group authorized representative has been notified orally or in writing of the
                possibility of such damage.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">5. Contact Us</h2>
              <p>
                If you have any questions about these Terms, please contact us at:
              </p>
              <p>
                legal@dataopsgroup.com<br />
                DataOps Group<br />
                123 Data Lane<br />
                San Francisco, CA 94105
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsPage;
