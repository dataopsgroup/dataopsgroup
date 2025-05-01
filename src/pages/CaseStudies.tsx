
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Helmet } from 'react-helmet-async';

const CaseStudiesPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Case Studies - DataOps Group</title>
        <meta name="description" content="Explore real-world examples of how DataOps Group has helped organizations transform their data operations and drive business success." />
        <meta name="keywords" content="case studies, success stories, data transformation, client results" />
        <link rel="canonical" href="/case-studies" />
      </Helmet>
      <Navbar />
      <main className="pt-28 flex-1">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">
            Case <span className="gradient-text">Studies</span>
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Case Study 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-gray-200 h-48" aria-label="Financial services case study illustration"></div>
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">Financial Services Data Transformation</h2>
                <p className="text-gray-600 mb-4">
                  How we helped a Fortune 500 financial services company modernize their data infrastructure and analytics capabilities.
                </p>
                <Button>Read Case Study</Button>
              </div>
            </div>
            
            {/* Case Study 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-gray-200 h-48" aria-label="Healthcare provider case study illustration"></div>
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">Healthcare Provider Data Integration</h2>
                <p className="text-gray-600 mb-4">
                  Streamlining data operations across multiple healthcare facilities to improve patient outcomes and operational efficiency.
                </p>
                <Button>Read Case Study</Button>
              </div>
            </div>
            
            {/* Case Study 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-gray-200 h-48" aria-label="Retail analytics case study illustration"></div>
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">Retail Analytics Platform Implementation</h2>
                <p className="text-gray-600 mb-4">
                  Building a comprehensive analytics platform for a major retail chain to drive data-informed decision making.
                </p>
                <Button>Read Case Study</Button>
              </div>
            </div>
            
            {/* Case Study 4 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-gray-200 h-48" aria-label="Manufacturing dataops case study illustration"></div>
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">Manufacturing DataOps Transformation</h2>
                <p className="text-gray-600 mb-4">
                  Implementing DataOps practices to improve production efficiency and reduce downtime for a global manufacturer.
                </p>
                <Button>Read Case Study</Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudiesPage;
