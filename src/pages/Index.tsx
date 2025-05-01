
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
        <title>DataOps Group - Data Operations Excellence</title>
        <meta name="description" content="DataOps Group helps businesses maximize the value of their data through innovative data operations solutions and expert consulting services." />
        <meta name="keywords" content="dataops, data operations, data management, data consulting, data architecture, analytics solutions, data governance" />
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
              <h2 className="text-2xl font-bold mb-6">Popular Data Solutions</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-medium mb-2">Data Operations Excellence</h3>
                  <p className="text-gray-600 mb-4">
                    Our comprehensive <Link to="/services" className="text-dataops-600 hover:underline">data operations services</Link> help 
                    organizations streamline their data workflows and increase efficiency.
                  </p>
                  <Link to="/services" className="flex items-center text-sm text-dataops-600 hover:text-dataops-800">
                    Learn more about our DataOps approach <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-medium mb-2">Advanced Data Analytics</h3>
                  <p className="text-gray-600 mb-4">
                    Transform raw data into actionable insights with our <Link to="/services" className="text-dataops-600 hover:underline">analytics and BI solutions</Link> that
                    drive business growth.
                  </p>
                  <Link to="/case-studies" className="flex items-center text-sm text-dataops-600 hover:text-dataops-800">
                    See our analytics case studies <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>
              <div className="mt-8 text-center">
                <Link to="/blog">
                  <Button variant="outline" className="mr-4">Read our data insights blog</Button>
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
