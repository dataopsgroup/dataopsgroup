
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const WhitepapersPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Whitepapers & Research - DataOps Group</title>
        <meta name="description" content="Access our collection of whitepapers and research on data operations, governance, and analytics to enhance your organization's data strategy." />
        <meta name="keywords" content="whitepapers, research papers, data management, dataops research, data governance" />
        <link rel="canonical" href="/whitepapers" />
      </Helmet>
      <Navbar />
      <main className="pt-28 flex-1">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">
            <span className="gradient-text">Whitepapers</span> & Research
          </h1>
          <div className="grid grid-cols-1 gap-6 mb-16">
            {/* Whitepaper 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-2">The Future of DataOps: Trends and Predictions</h2>
              <p className="text-gray-600 mb-4">
                An in-depth look at emerging trends in DataOps and how organizations can prepare for the future of data operations.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">Published: March 2025</span>
                <Button variant="outline" className="flex items-center gap-2">
                  Download <ArrowRight size={16} aria-hidden="true" />
                </Button>
              </div>
            </div>
            
            {/* Whitepaper 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-2">Building a Data-Driven Culture: Best Practices</h2>
              <p className="text-gray-600 mb-4">
                How to foster a data-driven culture within your organization and overcome common challenges in data adoption.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">Published: January 2025</span>
                <Button variant="outline" className="flex items-center gap-2">
                  Download <ArrowRight size={16} aria-hidden="true" />
                </Button>
              </div>
            </div>
            
            {/* Whitepaper 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-2">Data Governance in the Age of AI</h2>
              <p className="text-gray-600 mb-4">
                Exploring the challenges and solutions for maintaining robust data governance while leveraging artificial intelligence.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">Published: November 2024</span>
                <Button variant="outline" className="flex items-center gap-2">
                  Download <ArrowRight size={16} aria-hidden="true" />
                </Button>
              </div>
            </div>
            
            {/* Whitepaper 4 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-2">ROI of DataOps: Measuring Value and Impact</h2>
              <p className="text-gray-600 mb-4">
                A framework for measuring the return on investment from DataOps initiatives and quantifying business value.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">Published: September 2024</span>
                <Button variant="outline" className="flex items-center gap-2">
                  Download <ArrowRight size={16} aria-hidden="true" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default WhitepapersPage;
