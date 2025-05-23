import React from 'react';
import { Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import AdminLink from './AdminLink';
import { navServices } from '@/data/navigationData';
const Footer = () => {
  return <footer className="bg-dataops-950 text-white pt-16 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <section>
            <h2 className="text-2xl font-bold mb-6"></h2>
            <p className="text-gray-300 mb-6">
              Transforming <Link to="/services" className="hover:text-white underline" aria-label="Learn about our data operations services">data operations</Link> for businesses across industries, driving 
              efficiency and innovation through expert consulting and <Link to="/" className="hover:text-white underline" aria-label="Visit our homepage">tailored solutions</Link>.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/dataopsgroup/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white" aria-label="Visit DataOps Group LinkedIn profile">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </section>
          
          <nav aria-labelledby="services-navigation">
            <h2 id="services-navigation" className="text-lg font-semibold mb-6">Services</h2>
            <ul className="space-y-3">
              {navServices.map(service => <li key={service.href}>
                  <Link to={service.href} className="text-gray-300 hover:text-white" aria-label={`Explore our ${service.name} services`}>
                    {service.name}
                  </Link>
                </li>)}
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white" aria-label="View all our services">
                  All Services
                </Link>
              </li>
            </ul>
          </nav>
          
          <nav aria-labelledby="company-navigation">
            <h2 id="company-navigation" className="text-lg font-semibold mb-6">Company</h2>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-300 hover:text-white" aria-label="Learn about DataOps Group">About Us</Link></li>
              <li><Link to="/leadership" className="text-gray-300 hover:text-white" aria-label="Meet our leadership team">Leadership</Link></li>
              <li><Link to="/insights" className="text-gray-300 hover:text-white" aria-label="Read our latest insights and articles">Blog</Link></li>
              <li><Link to="/approach" className="text-gray-300 hover:text-white" aria-label="Learn about our methodology">Our Approach</Link></li>
            </ul>
          </nav>
          
          <nav aria-labelledby="resources-navigation">
            <h2 id="resources-navigation" className="text-lg font-semibold mb-6">Resources</h2>
            <ul className="space-y-3">
              <li><Link to="/case-studies" className="text-gray-300 hover:text-white" aria-label="View our client success stories">Case Studies</Link></li>
              <li><Link to="/whitepapers" className="text-gray-300 hover:text-white" aria-label="Download our whitepapers">Whitepapers</Link></li>
              <li><Link to="/faqs" className="text-gray-300 hover:text-white" aria-label="View frequently asked questions">FAQs</Link></li>
              <li><Link to="/sitemap" className="text-gray-300 hover:text-white" aria-label="View our site's sitemap">Sitemap</Link></li>
            </ul>
          </nav>
        </div>
        
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; <time dateTime={new Date().getFullYear().toString()}>{new Date().getFullYear()}</time> DataOps Group. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-400 hover:text-white text-sm" aria-label="Read our privacy policy">Privacy Policy</Link>
              <Link to="/sitemap" className="text-gray-400 hover:text-white text-sm" aria-label="View our sitemap">Sitemap</Link>
            </div>
          </div>
          
          {/* AI Tool Note with Admin Link */}
          <div className="mt-6 text-center text-xs text-gray-500 flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-4">
            <p>AI tools: Structured content available at <Link to="/api/content.json" className="text-gray-400 hover:text-gray-300">/api/content.json</Link></p>
            <AdminLink />
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;