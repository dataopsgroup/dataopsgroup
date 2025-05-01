
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Approach from '@/components/Approach';
import CTABanner from '@/components/CTABanner';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>HubSpot Data Cleanup & Revenue Optimization | DataOps Group</title>
        <meta name="description" content="Turn your disorganized HubSpot portal into a revenue-generating machine. We clean and optimize your HubSpot data to convert existing contacts into paying customers." />
        <meta name="keywords" content="hubspot cleanup, hubspot optimization, data organization, hubspot revenue, data cleansing, hubspot consulting" />
        <link rel="canonical" href="/" />
      </Helmet>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-6">HubSpot Revenue Solutions</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-medium mb-2">From Disorganized Data to Money</h3>
                  <p className="text-gray-600 mb-4">
                    Our <Link to="/services" className="text-dataops-600 hover:underline">HubSpot data cleanup services</Link> transform your chaotic portal into an organized system that actually generates revenue from your existing contacts.
                  </p>
                  <Link to="/services" className="flex items-center text-sm text-dataops-600 hover:text-dataops-800">
                    Fix your HubSpot challenges <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-medium mb-2">Contact-to-Customer Conversion</h3>
                  <p className="text-gray-600 mb-4">
                    Stop wasting money on new leads when your <Link to="/services" className="text-dataops-600 hover:underline">existing database has untapped revenue</Link> potential. Our process turns forgotten contacts into sales opportunities.
                  </p>
                  <Link to="/case-studies" className="flex items-center text-sm text-dataops-600 hover:text-dataops-800">
                    See our revenue case studies <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>
              <div className="mt-8 text-center">
                <Link to="/blog">
                  <Button variant="outline" className="mr-4">Read our HubSpot insights blog</Button>
                </Link>
                <Link to="/documentation">
                  <Button variant="outline">Browse our documentation</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <Approach />
        <CTABanner />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
