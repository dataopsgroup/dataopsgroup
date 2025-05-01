
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';

const ServicesPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Our Services - DataOps Group</title>
        <meta name="description" content="Explore our comprehensive data operations services including data architecture, analytics, governance, and technology consulting." />
        <meta name="keywords" content="data services, data architecture, analytics, BI, data governance, dataops implementation" />
        <link rel="canonical" href="/services" />
      </Helmet>
      <Navbar />
      <main className="pt-28 flex-1">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">
            Our <span className="gradient-text">Services</span>
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Data Architecture</h2>
              <p className="text-gray-600">
                We design scalable and flexible data architectures tailored to your business needs.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Analytics & BI</h2>
              <p className="text-gray-600">
                Transform raw data into actionable insights with our analytics and business intelligence solutions.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Data Governance</h2>
              <p className="text-gray-600">
                Implement robust data governance frameworks to ensure data quality and compliance.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">DataOps Implementation</h2>
              <p className="text-gray-600">
                Streamline your data operations with our proven DataOps implementation methodologies.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Technology Consulting</h2>
              <p className="text-gray-600">
                Get expert guidance on selecting and implementing the right data technologies for your organization.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;
