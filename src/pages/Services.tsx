
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { services } from '@/components/Services';

const ServicesPage = () => {
  // Industry list that matches the dropdown in the navbar
  const industries = [
    'Finance & Banking',
    'Healthcare',
    'Manufacturing',
    'Retail & E-commerce',
    'Technology',
    'Insurance',
    'Logistics',
    'Energy & Utilities',
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Our Services - DataOps Group</title>
        <meta name="description" content="Explore our comprehensive data operations services including data architecture, analytics, governance, and technology consulting." />
        <meta name="keywords" content="data services, data architecture, analytics, BI, data governance, dataops implementation, enterprise data solutions" />
        <link rel="canonical" href="/services" />
      </Helmet>
      <Navbar />
      <main className="pt-28 flex-1">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-dataops-600">
            Our Services
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mb-12">
            At DataOps Group, we provide comprehensive <Link to="/approach" className="text-dataops-600 hover:underline">data operation solutions</Link> designed 
            to transform how your organization manages, processes, and leverages data. Our expert team delivers 
            tailored services to meet your specific business needs.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {services.map((service, index) => (
              <div key={index} className={`overflow-hidden rounded-lg shadow-md bg-gradient-to-br ${service.gradient} text-white p-6`}>
                <div className="mb-4">
                  {service.icon}
                </div>
                <h2 className="text-xl font-semibold mb-4 text-white">{service.title}</h2>
                <p className="text-white/90 mb-4">
                  {service.description}
                </p>
                <Link to={`/services/${service.id}`} className="flex items-center text-white hover:text-white/80 group">
                  Learn more
                  <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            ))}
          </div>
          
          <div className="bg-gray-50 p-8 rounded-lg mb-16">
            <h2 className="text-2xl font-semibold mb-4 text-dataops-600">Industries We Serve</h2>
            <p className="text-gray-700 mb-6">
              Our data solutions are tailored to meet the specific needs of various industries, including:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {industries.map((industry, index) => (
                <Link 
                  key={index} 
                  to="/case-studies" 
                  className="text-dataops-600 hover:underline"
                >
                  {industry}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />

      {/* Schema markup for Services page */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Our Services - DataOps Group",
          "description": "Explore our comprehensive data operations services including data architecture, analytics, governance, and technology consulting.",
          "publisher": {
            "@type": "Organization",
            "name": "DataOps Group"
          },
          "author": {
            "@type": "Person",
            "name": "Geoff Tucker"
          }
        })
      }} />
    </div>
  );
};

export default ServicesPage;
