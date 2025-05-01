
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const ServicesPage = () => {
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
          <h1 className="text-3xl md:text-4xl font-bold mb-8">
            Our <span className="gradient-text">Services</span>
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mb-12">
            At DataOps Group, we provide comprehensive <Link to="/approach" className="text-dataops-600 hover:underline">data operation solutions</Link> designed 
            to transform how your organization manages, processes, and leverages data. Our expert team delivers 
            tailored services to meet your specific business needs.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Data Architecture</h2>
              <p className="text-gray-600 mb-4">
                We design scalable and flexible data architectures tailored to your business needs, ensuring optimal 
                data flow and integration across your systems.
              </p>
              <Link to="/approach" className="flex items-center text-dataops-600 hover:text-dataops-800 group">
                Learn about our data architecture approach
                <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Analytics & BI</h2>
              <p className="text-gray-600 mb-4">
                Transform raw data into actionable insights with our analytics and business intelligence solutions.
                Our approach delivers meaningful metrics that drive decision-making.
              </p>
              <Link to="/case-studies" className="flex items-center text-dataops-600 hover:text-dataops-800 group">
                View analytics case studies
                <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Data Governance</h2>
              <p className="text-gray-600 mb-4">
                Implement robust data governance frameworks to ensure data quality, compliance, and security
                throughout your organization.
              </p>
              <Link to="/blog" className="flex items-center text-dataops-600 hover:text-dataops-800 group">
                Read about data governance best practices
                <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">DataOps Implementation</h2>
              <p className="text-gray-600 mb-4">
                Streamline your data operations with our proven DataOps implementation methodologies that enhance 
                collaboration between teams.
              </p>
              <Link to="/documentation" className="flex items-center text-dataops-600 hover:text-dataops-800 group">
                Explore implementation guides
                <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Technology Consulting</h2>
              <p className="text-gray-600 mb-4">
                Get expert guidance on selecting and implementing the right data technologies for your organization
                to maximize ROI.
              </p>
              <Link to="/faqs" className="flex items-center text-dataops-600 hover:text-dataops-800 group">
                Common technology questions
                <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Enterprise Data Solutions</h2>
              <p className="text-gray-600 mb-4">
                Comprehensive enterprise-grade solutions designed to handle complex data challenges at scale
                for large organizations.
              </p>
              <Link to="/contact" className="flex items-center text-dataops-600 hover:text-dataops-800 group">
                Request a solution consultation
                <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-lg mb-16">
            <h2 className="text-2xl font-semibold mb-4">Industries We Serve</h2>
            <p className="text-gray-700 mb-6">
              Our data solutions are tailored to meet the specific needs of various industries, including:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Link to="/case-studies" className="text-dataops-600 hover:underline">Finance & Banking</Link>
              <Link to="/case-studies" className="text-dataops-600 hover:underline">Healthcare</Link>
              <Link to="/case-studies" className="text-dataops-600 hover:underline">Manufacturing</Link>
              <Link to="/case-studies" className="text-dataops-600 hover:underline">Retail & E-commerce</Link>
              <Link to="/case-studies" className="text-dataops-600 hover:underline">Technology</Link>
              <Link to="/case-studies" className="text-dataops-600 hover:underline">Insurance</Link>
              <Link to="/case-studies" className="text-dataops-600 hover:underline">Logistics</Link>
              <Link to="/case-studies" className="text-dataops-600 hover:underline">Energy & Utilities</Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;
