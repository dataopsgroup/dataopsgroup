import React from 'react';
import { Link } from 'react-router-dom';
import OptimizedLogo from '@/components/ui/optimized-logo';
const Footer = () => {
  const currentYear = new Date().getFullYear();
  const serviceLinks = [{
    name: 'HubSpot Implementation',
    href: '/services/team-training'
  }, {
    name: 'Marketing Operations',
    href: '/services/marketing-operations-revops'
  }, {
    name: 'DataOps Implementation',
    href: '/services/dataops-implementation'
  }, {
    name: 'Analytics & BI',
    href: '/services/analytics-bi'
  }, {
    name: 'All Services',
    href: '/services'
  }];
  const resourceLinks = [{
    name: 'Blog & Insights',
    href: '/insights'
  }, {
    name: 'Case Studies',
    href: '/case-studies'
  }, {
    name: 'HubSpot Expert Guide',
    href: '/guides/hubspot-expert'
  }, {
    name: 'PE Value Creation',
    href: '/pe-value-creation-program'
  }, {
    name: 'ROI Calculator',
    href: '/revops-roi-calculator'
  }];
  const supportLinks = [{
    name: 'Data Operations Assessment',
    href: '/data-operations-assessment'
  }, {
    name: 'Contact Us',
    href: '/contact'
  }, {
    name: 'About Our Team',
    href: '/about'
  }, {
    name: 'Our Approach',
    href: '/approach'
  }];
  const faqLinks = [{
    name: 'HubSpot Services FAQ',
    href: '/faqs/services'
  }, {
    name: 'Expert Hiring FAQ',
    href: '/faqs/experts'
  }, {
    name: 'Data Quality FAQ',
    href: '/faqs/data-quality'
  }, {
    name: 'All FAQs',
    href: '/faqs'
  }];
  return <footer className="bg-brand-navy text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center mb-4">
              <OptimizedLogo alt="DataOps Group Logo" width={120} height={48} src="/lovable-uploads/8c13735f-bb96-45da-9496-f4a9250e6f8b.png" className="h-14 w-auto" />
            </Link>
            <p className="text-gray-300 text-sm mb-4">
              Transforming portfolio operations into profit drivers through expert HubSpot implementation and data operations consulting.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-brand-saffron">Services</h3>
            <ul className="space-y-2">
              {serviceLinks.map(link => <li key={link.name}>
                  <Link to={link.href} className="text-gray-300 hover:text-white transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>)}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-brand-saffron">Resources</h3>
            <ul className="space-y-2">
              {resourceLinks.map(link => <li key={link.name}>
                  <Link to={link.href} className="text-gray-300 hover:text-white transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>)}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-brand-saffron">Support</h3>
            <ul className="space-y-2">
              {supportLinks.map(link => <li key={link.name}>
                  <Link to={link.href} className="text-gray-300 hover:text-white transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>)}
            </ul>
          </div>

          {/* FAQs */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-brand-saffron">FAQs</h3>
            <ul className="space-y-2">
              {faqLinks.map(link => <li key={link.name}>
                  <Link to={link.href} className="text-gray-300 hover:text-white transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>)}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} DataOps Group. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
            <a href="/sitemap.xml" className="text-gray-400 hover:text-white text-sm transition-colors">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;