
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const DocumentationPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="pt-28 flex-1">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">
            <span className="gradient-text">Documentation</span>
          </h1>
          
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
                  An introduction to DataOps principles and how to begin implementing them in your organization.
                </p>
                <a href="#" className="text-dataops-600 hover:underline">Read more →</a>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4">Data Pipeline Best Practices</h2>
                <p className="text-gray-600 mb-4">
                  Learn how to design, build, and maintain efficient data pipelines using our recommended practices.
                </p>
                <a href="#" className="text-dataops-600 hover:underline">Read more →</a>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4">Data Quality Management</h2>
                <p className="text-gray-600 mb-4">
                  A comprehensive guide to ensuring data quality throughout your organization.
                </p>
                <a href="#" className="text-dataops-600 hover:underline">Read more →</a>
              </div>
            </TabsContent>
            
            <TabsContent value="api" className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4">API Authentication</h2>
                <p className="text-gray-600 mb-4">
                  Learn how to authenticate with our APIs and manage access tokens.
                </p>
                <a href="#" className="text-dataops-600 hover:underline">Read more →</a>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4">Data Ingestion API</h2>
                <p className="text-gray-600 mb-4">
                  Reference documentation for our data ingestion APIs and integration points.
                </p>
                <a href="#" className="text-dataops-600 hover:underline">Read more →</a>
              </div>
            </TabsContent>
            
            <TabsContent value="examples" className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4">Example: Real-time Data Processing</h2>
                <p className="text-gray-600 mb-4">
                  A walkthrough of implementing real-time data processing using our framework.
                </p>
                <a href="#" className="text-dataops-600 hover:underline">Read more →</a>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4">Example: Data Quality Monitoring</h2>
                <p className="text-gray-600 mb-4">
                  How to set up automated data quality monitoring for your data pipelines.
                </p>
                <a href="#" className="text-dataops-600 hover:underline">Read more →</a>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DocumentationPage;
