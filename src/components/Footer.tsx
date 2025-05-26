
import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin } from 'lucide-react';
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
            <p className="footer-tagline font-body">
              Expert HubSpot consulting for businesses serious about transforming their marketing technology investment into measurable revenue growth.
            </p>
            <div className="footer-contact">
              <p className="font-body">Ready to transform your HubSpot?</p>
              <Link to="/contact" className="footer-cta-button font-body">
                Get Started
              </Link>
              <div className="footer-social">
                <a 
                  href="https://www.linkedin.com/company/dataopsgroup/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="footer-linkedin-link"
                  aria-label="Follow DataOps Group on LinkedIn"
                >
                  <Linkedin className="footer-linkedin-icon" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Services Column */}
          <div className="footer-column">
            <h4 className="font-headline">Services</h4>
            <ul>
              {navServices.map(service => (
                <li key={service.href}>
                  <Link to={service.href || "/"} aria-label={`Explore our ${service.title} services`} className="font-body">
                    {service.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/services" aria-label="View all our services" className="font-body">
                  All Services
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Company Column */}
          <div className="footer-column">
            <h4 className="font-headline">Company</h4>
            <ul>
              <li><Link to="/about" aria-label="Learn about DataOps Group" className="font-body">About Us</Link></li>
              <li><Link to="/approach" aria-label="Learn about our methodology" className="font-body">Our Approach</Link></li>
              <li><Link to="/case-studies" aria-label="View our client success stories" className="font-body">Case Studies</Link></li>
              <li><Link to="/insights" aria-label="Read our latest insights and articles" className="font-body">Blog</Link></li>
            </ul>
          </div>
          
          {/* Resources Column */}
          <div className="footer-column">
            <h4 className="font-headline">Resources</h4>
            <ul>
              <li><Link to="/case-studies" aria-label="View our client success stories" className="font-body">Case Studies</Link></li>
              <li><Link to="/how-to-hire-a-hubspot-expert-in-2025" aria-label="Learn how to hire a HubSpot expert" className="font-body">HubSpot Expert Guide</Link></li>
              <li><Link to="/faqs" aria-label="View frequently asked questions" className="font-body">FAQs</Link></li>
              <li><Link to="/contact" aria-label="Contact us" className="font-body">Contact</Link></li>
            </ul>
          </div>
        </div>
        
        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-copyright font-body">
            © <time dateTime={new Date().getFullYear().toString()}>{new Date().getFullYear()}</time> DataOps Group. All rights reserved.
          </div>
          <div className="footer-legal">
            <Link to="/privacy" aria-label="Read our privacy policy" className="font-body">Privacy Policy</Link>
            <Link to="/sitemap" aria-label="View our sitemap" className="font-body">Sitemap</Link>
          </div>
        </div>
        
        {/* AI Tool Note with Admin Link */}
        <div className="footer-ai-tools">
          <p className="font-body">AI tools: Structured content available at <Link to="/api/content.json" className="font-body">/api/content.json</Link></p>
          <AdminLink />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
