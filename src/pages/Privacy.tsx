
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';

const PrivacyPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Privacy Policy - DataOps Group</title>
        <meta name="description" content="Read our privacy policy to understand how DataOps Group collects, uses, and protects your personal information." />
        <meta name="keywords" content="privacy policy, data protection, personal information, GDPR compliance" />
        <link rel="canonical" href="/privacy" />
      </Helmet>
      <Navbar />
      <main className="pt-28 flex-1">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">
            Privacy <span className="gradient-text">Policy</span>
          </h1>
          
          <div className="prose max-w-4xl mx-auto mb-16">
            <p className="lead text-lg mb-6">
              Last updated: May 1, 2025
            </p>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
              <p>
                DataOps Group ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy
                explains how we collect, use, disclose, and safeguard your information when you visit our website
                or use our services.
              </p>
              <p>
                Please read this Privacy Policy carefully. By accessing or using our services, you acknowledge that
                you have read, understood, and agree to be bound by all the terms of this Privacy Policy.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
              <p>We may collect the following types of information:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Personal Data: Name, email address, phone number, job title, company information, and other
                  contact details you provide when filling out forms on our website.</li>
                <li>Usage Data: Information about how you use our website, such as pages visited, time spent on pages,
                  and other statistics.</li>
                <li>Cookies: We use cookies to enhance your experience on our site. You can set your browser to
                  refuse all or some browser cookies.</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
              <p>We may use the information we collect for various purposes, including to:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Provide and maintain our services</li>
                <li>Notify you about changes to our services</li>
                <li>Provide customer support</li>
                <li>Gather analysis or valuable information to improve our services</li>
                <li>Monitor the usage of our services</li>
                <li>Detect, prevent, and address technical issues</li>
                <li>Send you marketing and promotional communications (you can opt-out)</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
              <p>
                If you have any questions or concerns about this Privacy Policy, please contact us at:
              </p>
              <p>
                privacy@dataopsgroup.com<br />
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

export default PrivacyPage;
