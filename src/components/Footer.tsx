
import React from 'react';
import { Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import AdminLink from './AdminLink';
import OptimizedImage from './ui/optimized-image';

const Footer = () => {
  return (
    <footer className="bg-dataops-950 text-white pt-16 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Section 1: Company Identity */}
          <section>
            <div>
              <OptimizedImage 
                src="/lovable-uploads/8337a646-bb1d-44d4-bb07-ecaf283898d7.png" 
                alt="DataOps Group Logo" 
                width={180} 
                height={50} 
                className="mb-4" 
              />
            </div>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/dataopsgroup/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white" aria-label="Visit DataOps Group LinkedIn profile">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </section>
          
          {/* Section 2: Primary Actions */}
          <nav aria-labelledby="primary-actions">
            <h2 id="primary-actions" className="text-sm font-semibold mb-4 text-white">
              Get Started
            </h2>
            <ul className="space-y-2">
              <li>
                <Link to="/contact" className="text-sm text-gray-300 hover:text-white transition-colors" aria-label="Contact us to get started">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/assessment" className="text-sm text-gray-300 hover:text-white transition-colors" aria-label="Take our HubSpot assessment">
                  HubSpot Assessment
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="text-sm text-gray-300 hover:text-white transition-colors" aria-label="View our client success stories">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-gray-300 hover:text-white transition-colors" aria-label="Explore our services">
                  Our Services
                </Link>
              </li>
            </ul>
          </nav>
          
          {/* Section 3: Essential Links */}
          <nav aria-labelledby="essential-links">
            <h2 id="essential-links" className="text-sm font-semibold mb-4 text-white">
              Company
            </h2>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm text-gray-300 hover:text-white transition-colors" aria-label="Learn about DataOps Group">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/insights" className="text-sm text-gray-300 hover:text-white transition-colors" aria-label="Read our latest insights">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/approach" className="text-sm text-gray-300 hover:text-white transition-colors" aria-label="Learn about our methodology">
                  Our Approach
                </Link>
              </li>
              <li>
                <Link to="/sitemap" className="text-sm text-gray-300 hover:text-white transition-colors" aria-label="View our sitemap">
                  Sitemap
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs text-gray-400 leading-tight">
              &copy; <time dateTime={new Date().getFullYear().toString()}>{new Date().getFullYear()}</time> DataOps Group. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-xs text-gray-400 hover:text-white leading-tight" aria-label="Read our privacy policy">Privacy Policy</Link>
              <Link to="/terms" className="text-xs text-gray-400 hover:text-white leading-tight" aria-label="Read our terms of service">Terms of Service</Link>
            </div>
          </div>
          
          {/* AI Tool Note with Admin Link */}
          <div className="mt-6 text-center text-xs text-gray-500 flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-4">
            <p className="leading-tight">AI tools: Structured content available at <Link to="/api/content.json" className="text-gray-400 hover:text-gray-300">/api/content.json</Link></p>
            <AdminLink />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
