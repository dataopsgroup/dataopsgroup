
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const DocumentationPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Documentation - DataOps Group</title>
        <meta name="description" content="Access comprehensive documentation for DataOps Group's services, products, and implementation guides." />
        <meta name="keywords" content="documentation, user guides, api reference, implementation guides, tutorials, dataops resources, data quality management" />
        <link rel="canonical" href="/documentation" />
      </Helmet>
      <Navbar />
      <main className="pt-28 flex-1">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">
            <span className="gradient-text">Documentation</span>
          </h1>
          
          <div className="max-w-3xl mx-auto mb-8">
            <p className="text-lg text-gray-700">
              Welcome to the DataOps Group documentation center. Here you'll find comprehensive guides and resources to help you 
              implement and optimize your <Link to="/services" className="text-dataops-600 hover:underline">data operations</Link>. From getting started with 
              <Link to="/approach" className="text-dataops-600 hover:underline"> DataOps methodologies</Link> to advanced implementation techniques, our documentation 
              provides the insights you need for success.
            </p>
          </div>
          
          <Tabs defaultValue="guides" className="mb-16">
            <TabsList className="mb-8">
              <TabsTrigger value="guides">User Guides</TabsTrigger>
              <TabsTrigger value="api">API Reference</TabsTrigger>
              <TabsTrigger value="examples">Examples</TabsTrigger>
            </TabsList>
            <TabsContent value="guides" className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4">Getting Started with DataOps</h2>
                <p className="text-gray-600 mb-4">
                  An introduction to <Link to="/approach" className="text-dataops-600 hover:underline">DataOps principles</Link> and how to begin implementing them in your organization.
                  This guide covers the fundamental concepts and first steps toward a data-driven culture.
                </p>
                <Link to="/approach" className="text-dataops-600 hover:underline flex items-center">
                  Read more <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4">Data Pipeline Best Practices</h2>
                <p className="text-gray-600 mb-4">
                  Learn how to design, build, and maintain efficient <Link to="/services" className="text-dataops-600 hover:underline">data pipelines</Link> using our recommended practices.
                  This comprehensive guide will help you avoid common pitfalls and optimize performance.
                </p>
                <Link to="/services" className="text-dataops-600 hover:underline flex items-center">
                  Read more <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4">Data Quality Management</h2>
                <p className="text-gray-600 mb-4">
                  A comprehensive guide to ensuring data quality throughout your organization. See how our 
                  <Link to="/case-studies" className="text-dataops-600 hover:underline"> implementation case studies</Link> demonstrate successful data quality initiatives.
                </p>
                <Link to="/case-studies" className="text-dataops-600 hover:underline flex items-center">
                  Read more <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </TabsContent>
            
            <TabsContent value="api" className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4">API Authentication</h2>
                <p className="text-gray-600 mb-4">
                  Learn how to authenticate with our APIs and manage access tokens. This guide covers security best practices
                  for <Link to="/services" className="text-dataops-600 hover:underline">data integration</Link> scenarios.
                </p>
                <Link to="/services" className="text-dataops-600 hover:underline flex items-center">
                  Read more <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4">Data Ingestion API</h2>
                <p className="text-gray-600 mb-4">
                  Reference documentation for our data ingestion APIs and integration points. See how they connect with our
                  <Link to="/approach" className="text-dataops-600 hover:underline"> implementation methodology</Link>.
                </p>
                <Link to="/approach" className="text-dataops-600 hover:underline flex items-center">
                  Read more <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </TabsContent>
            
            <TabsContent value="examples" className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4">Example: Real-time Data Processing</h2>
                <p className="text-gray-600 mb-4">
                  A walkthrough of implementing real-time data processing using our framework. For a deeper understanding, review our
                  <Link to="/blog" className="text-dataops-600 hover:underline"> blog articles</Link> on modern data architecture.
                </p>
                <Link to="/blog" className="text-dataops-600 hover:underline flex items-center">
                  Read more <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4">Example: Data Quality Monitoring</h2>
                <p className="text-gray-600 mb-4">
                  How to set up automated data quality monitoring for your data pipelines. Learn more about our
                  <Link to="/faqs" className="text-dataops-600 hover:underline"> approach to data quality</Link> in the FAQ section.
                </p>
                <Link to="/faqs" className="text-dataops-600 hover:underline flex items-center">
                  Read more <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </TabsContent>
          </Tabs>
          
          <div className="bg-gray-50 p-8 rounded-lg mb-16">
            <h2 className="text-2xl font-semibold mb-4">Related Resources</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-medium mb-2">Case Studies</h3>
                <p className="text-gray-600 mb-3">
                  Learn from real-world examples in our <Link to="/case-studies" className="text-dataops-600 hover:underline">implementation case studies</Link>.
                </p>
              </div>
              <div>
                <h3 className="font-medium mb-2">Whitepapers</h3>
                <p className="text-gray-600 mb-3">
                  Dive deeper with our <Link to="/whitepapers" className="text-dataops-600 hover:underline">data operations whitepapers</Link>.
                </p>
              </div>
              <div>
                <h3 className="font-medium mb-2">Blog Articles</h3>
                <p className="text-gray-600 mb-3">
                  Stay updated with our latest <Link to="/blog" className="text-dataops-600 hover:underline">data insights and best practices</Link>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DocumentationPage;
