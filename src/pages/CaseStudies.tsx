
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CaseStudiesPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Case Studies - DataOps Group</title>
        <meta name="description" content="Explore real-world examples of how DataOps Group has helped organizations transform their data operations and drive business success." />
        <meta name="keywords" content="case studies, success stories, data transformation, client results, financial services data, healthcare data integration, retail analytics" />
        <link rel="canonical" href="/case-studies" />
      </Helmet>
      <Navbar />
      <main className="pt-28 flex-1">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">
            Case <span className="gradient-text">Studies</span>
          </h1>
          
          <div className="max-w-3xl mx-auto mb-8">
            <p className="text-lg text-gray-700">
              Discover how DataOps Group has helped organizations across industries transform their 
              <Link to="/services" className="text-dataops-600 hover:underline"> data operations</Link> and achieve measurable business outcomes. 
              Our case studies showcase real-world applications of our <Link to="/approach" className="text-dataops-600 hover:underline">proven methodology</Link>.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Case Study 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-gray-200 h-48" aria-label="Financial services case study illustration"></div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 rounded-full bg-dataops-50 text-dataops-600 text-sm font-medium mb-3">
                  Financial Services
                </span>
                <h2 className="text-xl font-semibold mb-2">Financial Services Data Transformation</h2>
                <p className="text-gray-600 mb-4">
                  How we helped a Fortune 500 financial services company modernize their 
                  <Link to="/services" className="text-dataops-600 hover:underline"> data infrastructure</Link> and 
                  <Link to="/services" className="text-dataops-600 hover:underline"> analytics capabilities</Link>.
                </p>
                <div className="flex justify-between items-center">
                  <Button>Read Case Study</Button>
                  <Link to="/services" className="text-dataops-600 hover:underline flex items-center text-sm">
                    Related services <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Case Study 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-gray-200 h-48" aria-label="Healthcare provider case study illustration"></div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 rounded-full bg-dataops-50 text-dataops-600 text-sm font-medium mb-3">
                  Healthcare
                </span>
                <h2 className="text-xl font-semibold mb-2">Healthcare Provider Data Integration</h2>
                <p className="text-gray-600 mb-4">
                  Streamlining <Link to="/services" className="text-dataops-600 hover:underline">data operations</Link> across multiple healthcare facilities to improve patient outcomes and operational efficiency.
                </p>
                <div className="flex justify-between items-center">
                  <Button>Read Case Study</Button>
                  <Link to="/documentation" className="text-dataops-600 hover:underline flex items-center text-sm">
                    Implementation guide <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Case Study 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-gray-200 h-48" aria-label="Retail analytics case study illustration"></div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 rounded-full bg-dataops-50 text-dataops-600 text-sm font-medium mb-3">
                  Retail
                </span>
                <h2 className="text-xl font-semibold mb-2">Retail Analytics Platform Implementation</h2>
                <p className="text-gray-600 mb-4">
                  Building a comprehensive <Link to="/services" className="text-dataops-600 hover:underline">analytics platform</Link> for a major retail chain to drive data-informed decision making.
                </p>
                <div className="flex justify-between items-center">
                  <Button>Read Case Study</Button>
                  <Link to="/blog" className="text-dataops-600 hover:underline flex items-center text-sm">
                    Related articles <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Case Study 4 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-gray-200 h-48" aria-label="Manufacturing dataops case study illustration"></div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 rounded-full bg-dataops-50 text-dataops-600 text-sm font-medium mb-3">
                  Manufacturing
                </span>
                <h2 className="text-xl font-semibold mb-2">Manufacturing DataOps Transformation</h2>
                <p className="text-gray-600 mb-4">
                  Implementing <Link to="/approach" className="text-dataops-600 hover:underline">DataOps practices</Link> to improve production efficiency and reduce downtime for a global manufacturer.
                </p>
                <div className="flex justify-between items-center">
                  <Button>Read Case Study</Button>
                  <Link to="/faqs" className="text-dataops-600 hover:underline flex items-center text-sm">
                    Implementation FAQs <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-lg mb-16">
            <h2 className="text-2xl font-semibold mb-4">Industries We Serve</h2>
            <p className="text-gray-700 mb-6">
              Our <Link to="/services" className="text-dataops-600 hover:underline">data solutions</Link> have been successfully implemented across various industries:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-y-4 gap-x-8">
              <Link to="/services" className="text-dataops-600 hover:underline">Finance & Banking</Link>
              <Link to="/services" className="text-dataops-600 hover:underline">Healthcare & Life Sciences</Link>
              <Link to="/services" className="text-dataops-600 hover:underline">Manufacturing</Link>
              <Link to="/services" className="text-dataops-600 hover:underline">Retail & E-commerce</Link>
              <Link to="/services" className="text-dataops-600 hover:underline">Technology</Link>
              <Link to="/services" className="text-dataops-600 hover:underline">Insurance</Link>
              <Link to="/services" className="text-dataops-600 hover:underline">Logistics & Supply Chain</Link>
              <Link to="/services" className="text-dataops-600 hover:underline">Energy & Utilities</Link>
            </div>
            <div className="mt-8">
              <Link to="/contact" className="inline-flex items-center text-dataops-600 hover:text-dataops-800">
                Want to see how we can help your industry? Contact us
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudiesPage;
