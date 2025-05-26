
import React from 'react';
import { Link } from 'react-router-dom';
import AdminLink from './AdminLink';
import { navServices } from '@/data/navigationData';
import OptimizedImage from './ui/optimized-image';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Company Info */}
          <div className="footer-company">
            <div className="footer-logo">
              <OptimizedImage 
                src="/lovable-uploads/8337a646-bb1d-44d4-bb07-ecaf283898d7.png" 
                alt="DataOps Group Logo" 
                width={180} 
                height={50} 
                className="footer-logo-image" 
              />
            </div>
            <p className="footer-tagline">
              Expert HubSpot consulting for businesses serious about transforming their marketing technology investment into measurable revenue growth.
            </p>
            <div className="footer-contact">
              <p>Ready to fix your HubSpot?</p>
              <p><a href="mailto:hello@dataopsgroup.com">hello@dataopsgroup.com</a></p>
            </div>
          </div>
          
          {/* Services Column */}
          <div className="footer-column">
            <h4>Services</h4>
            <ul>
              {navServices.map(service => (
                <li key={service.href}>
                  <Link to={service.href} aria-label={`Explore our ${service.name} services`}>
                    {service.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/services" aria-label="View all our services">
                  All Services
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Company Column */}
          <div className="footer-column">
            <h4>Company</h4>
            <ul>
              <li><Link to="/about" aria-label="Learn about DataOps Group">About Us</Link></li>
              <li><Link to="/approach" aria-label="Learn about our methodology">Our Approach</Link></li>
              <li><Link to="/case-studies" aria-label="View our client success stories">Case Studies</Link></li>
              <li><Link to="/insights" aria-label="Read our latest insights and articles">Blog</Link></li>
            </ul>
          </div>
          
          {/* Resources Column */}
          <div className="footer-column">
            <h4>Resources</h4>
            <ul>
              <li><Link to="/case-studies" aria-label="View our client success stories">Case Studies</Link></li>
              <li><Link to="/how-to-hire-a-hubspot-expert-in-2025" aria-label="Learn how to hire a HubSpot expert">HubSpot Expert Guide</Link></li>
              <li><Link to="/faqs" aria-label="View frequently asked questions">FAQs</Link></li>
              <li><Link to="/contact" aria-label="Contact us">Contact</Link></li>
            </ul>
          </div>
        </div>
        
        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-copyright">
            © <time dateTime={new Date().getFullYear().toString()}>{new Date().getFullYear()}</time> DataOps Group. All rights reserved.
          </div>
          <div className="footer-legal">
            <Link to="/privacy" aria-label="Read our privacy policy">Privacy Policy</Link>
            <Link to="/sitemap" aria-label="View our sitemap">Sitemap</Link>
          </div>
        </div>
        
        {/* AI Tool Note with Admin Link */}
        <div className="footer-ai-tools">
          <p>AI tools: Structured content available at <Link to="/api/content.json">/api/content.json</Link></p>
          <AdminLink />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
