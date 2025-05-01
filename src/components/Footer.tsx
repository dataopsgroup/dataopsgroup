
import React from 'react';
import { Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-dataops-950 text-white pt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">DataOps Group</h3>
            <p className="text-gray-300 mb-6">
              Transforming data operations for businesses across industries, driving 
              efficiency and innovation through expert consulting and tailored solutions.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/dataopsgroup/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              <li><Link to="/services" className="text-gray-300 hover:text-white">Data Architecture</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white">Analytics & BI</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white">Data Governance</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white">DataOps Implementation</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white">Technology Consulting</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              <li><a href="#about" className="text-gray-300 hover:text-white">About Us</a></li>
              <li><Link to="/leadership" className="text-gray-300 hover:text-white">Leadership</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-white">Blog</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Resources</h3>
            <ul className="space-y-3">
              <li><Link to="/case-studies" className="text-gray-300 hover:text-white">Case Studies</Link></li>
              <li><Link to="/whitepapers" className="text-gray-300 hover:text-white">Whitepapers</Link></li>
              <li><Link to="/documentation" className="text-gray-300 hover:text-white">Documentation</Link></li>
              <li><Link to="/faqs" className="text-gray-300 hover:text-white">FAQs</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} DataOps Group. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-400 hover:text-white text-sm">Privacy Policy</Link>
              <Link to="/terms" className="text-gray-400 hover:text-white text-sm">Terms of Service</Link>
              <Link to="/sitemap" className="text-gray-400 hover:text-white text-sm">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
