
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const SitemapPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Sitemap - DataOps Group</title>
        <meta name="description" content="Navigate our website with ease. Find all pages and resources organized in our sitemap." />
        <meta name="keywords" content="sitemap, navigation, website map, pages" />
        <link rel="canonical" href="/sitemap" />
      </Helmet>
      <Navbar />
      <main className="pt-28 flex-1">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">
            <span className="gradient-text">Sitemap</span>
          </h1>
          
          <div className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Main Pages */}
              <div>
                <h2 className="text-xl font-semibold mb-4 border-b pb-2">Main Pages</h2>
                <ul className="space-y-2">
                  <li><Link to="/" className="text-dataops-600 hover:underline">Home</Link></li>
                  <li><Link to="/services" className="text-dataops-600 hover:underline">Services</Link></li>
                  <li><Link to="/contact" className="text-dataops-600 hover:underline">Contact</Link></li>
                  <li><Link to="/blog" className="text-dataops-600 hover:underline">Blog</Link></li>
                  <li><Link to="/approach" className="text-dataops-600 hover:underline">Our Approach</Link></li>
                  <li><Link to="/get-started" className="text-dataops-600 hover:underline">Get Started</Link></li>
                  <li><Link to="/perplexity" className="text-dataops-600 hover:underline">Perplexity AI</Link></li>
                </ul>
              </div>
              
              {/* Company */}
              <div>
                <h2 className="text-xl font-semibold mb-4 border-b pb-2">Company</h2>
                <ul className="space-y-2">
                  <li><Link to="/leadership" className="text-dataops-600 hover:underline">Leadership</Link></li>
                </ul>
              </div>
              
              {/* Resources */}
              <div>
                <h2 className="text-xl font-semibold mb-4 border-b pb-2">Resources</h2>
                <ul className="space-y-2">
                  <li><Link to="/case-studies" className="text-dataops-600 hover:underline">Case Studies</Link></li>
                  <li><Link to="/whitepapers" className="text-dataops-600 hover:underline">Whitepapers</Link></li>
                  <li><Link to="/documentation" className="text-dataops-600 hover:underline">Documentation</Link></li>
                  <li><Link to="/faqs" className="text-dataops-600 hover:underline">FAQs</Link></li>
                </ul>
              </div>
              
              {/* Legal */}
              <div>
                <h2 className="text-xl font-semibold mb-4 border-b pb-2">Legal</h2>
                <ul className="space-y-2">
                  <li><Link to="/privacy" className="text-dataops-600 hover:underline">Privacy Policy</Link></li>
                  <li><Link to="/terms" className="text-dataops-600 hover:underline">Terms of Service</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SitemapPage;
