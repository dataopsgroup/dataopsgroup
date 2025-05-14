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
              Transforming <Link to="/services" className="hover:text-white underline" aria-label="Learn about our data operations services">data operations</Link> for businesses across industries, driving 
              efficiency and innovation through expert consulting and <Link to="/documentation" className="hover:text-white underline" aria-label="View our detailed documentation">tailored solutions</Link>.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/dataopsgroup/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white" aria-label="Visit DataOps Group LinkedIn profile">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              <li><Link to="/services" className="text-gray-300 hover:text-white" aria-label="Explore our data architecture services">Data Architecture</Link></li>
              <li><Link to="/services/analytics-bi" className="text-gray-300 hover:text-white" aria-label="Discover our analytics and business intelligence solutions">Analytics & Business Intelligence</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white" aria-label="Learn about our data governance services">Data Governance</Link></li>
              <li><Link to="/services/dataops-implementation" className="text-gray-300 hover:text-white" aria-label="Explore our HubSpot implementation services">DataOps Implementation</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white" aria-label="Learn about our technology consulting services">Technology Consulting</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white" aria-label="Discover our enterprise data solutions">Enterprise Data Solutions</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-300 hover:text-white" aria-label="Learn about DataOps Group">About Us</Link></li>
              <li><Link to="/leadership" className="text-gray-300 hover:text-white" aria-label="Meet our leadership team">Leadership</Link></li>
              <li><Link to="/insights" className="text-gray-300 hover:text-white" aria-label="Read our latest insights and articles">Blog</Link></li>
              <li><Link to="/approach" className="text-gray-300 hover:text-white" aria-label="Learn about our methodology">Our Approach</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Resources</h3>
            <ul className="space-y-3">
              <li><Link to="/case-studies" className="text-gray-300 hover:text-white" aria-label="View our client success stories">Case Studies</Link></li>
              <li><Link to="/whitepapers" className="text-gray-300 hover:text-white" aria-label="Download our whitepapers">Whitepapers</Link></li>
              <li><Link to="/documentation" className="text-gray-300 hover:text-white" aria-label="Access our technical documentation">Documentation</Link></li>
              <li><Link to="/faqs" className="text-gray-300 hover:text-white" aria-label="View frequently asked questions">FAQs</Link></li>
              <li><a href="/sitemap.xml" className="text-gray-300 hover:text-white" aria-label="View our site's XML sitemap">Sitemap</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} DataOps Group. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-400 hover:text-white text-sm" aria-label="Read our privacy policy">Privacy Policy</Link>
              <Link to="/sitemap" className="text-gray-400 hover:text-white text-sm" aria-label="View our sitemap">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
