import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import CTABanner from '@/components/CTABanner';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import WebsiteSchema from '@/components/seo/WebsiteSchema';
import OrganizationSchema from '@/components/seo/OrganizationSchema';
import { FolderOpen, List, Link as LinkIcon, FileCode, MoveRight } from 'lucide-react';
import OptimizedImage from '@/components/ui/optimized-image';
import { useIsMobile } from '@/hooks/use-mobile';

const SitemapPage = () => {
  // Define breadcrumbs for schema
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Sitemap', url: '/sitemap' },
  ];

  const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'https://dataopsgroup.com';
  const { isMobile } = useIsMobile();
  
  // Ensure links have proper tap target sizes on mobile
  useEffect(() => {
    if (isMobile) {
      const links = document.querySelectorAll('a, button');
      links.forEach(link => {
        const element = link as HTMLElement;
        const rect = element.getBoundingClientRect();
        
        // Ensure minimum tap target size of 48x48px for mobile
        if (rect.width < 48 || rect.height < 48) {
          element.style.minWidth = '48px';
          element.style.minHeight = '48px';
          element.style.display = 'inline-flex';
          element.style.alignItems = 'center';
          element.style.padding = '0.5rem';
        }
      });
    }
  }, [isMobile]);

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Sitemap - DataOps Group | Website Navigation Guide</title>
        <meta name="description" content="Navigate the DataOps Group website with ease using our comprehensive sitemap. Find all pages, resources, and services for HubSpot consulting and implementation." />
        <meta name="keywords" content="sitemap, DataOps Group navigation, HubSpot consulting pages, website map, marketing operations resources" />
        <link rel="canonical" href={`${baseUrl}/sitemap`} />
        
        {/* Enhanced viewport meta tag for better mobile experience */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover, maximum-scale=5, minimum-scale=1" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Sitemap - DataOps Group | Website Navigation Guide" />
        <meta property="og:description" content="Navigate the DataOps Group website with ease using our comprehensive sitemap. Find all pages, resources, and services for HubSpot consulting and implementation." />
        <meta property="og:url" content={`${baseUrl}/sitemap`} />
        <meta property="og:image" content={`${baseUrl}/lovable-uploads/9b9f1c84-13af-4551-96d5-b7a930f008cf.png`} />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Sitemap - DataOps Group | Website Navigation Guide" />
        <meta name="twitter:description" content="Navigate the DataOps Group website with ease using our comprehensive sitemap. Find all pages, resources, and services for HubSpot consulting and implementation." />
        
        {/* Mobile touch action for better tap targets */}
        <style type="text/css">{`
          a, button, .tap-target {
            touch-action: manipulation;
          }
          
          @media (max-width: 768px) {
            .mobile-link {
              min-height: 48px;
              min-width: 48px;
              display: flex;
              align-items: center;
              padding: 0.5rem;
            }
            .mobile-text {
              font-size: 16px !important;
              line-height: 1.5 !important;
            }
          }
        `}</style>
      </Helmet>
      
      {/* Schema Markup */}
      <BreadcrumbSchema items={breadcrumbs} />
      <WebsiteSchema />
      <OrganizationSchema />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "@id": `${baseUrl}/sitemap/#webpage`,
          "url": `${baseUrl}/sitemap`,
          "name": "Sitemap - DataOps Group | Website Navigation Guide",
          "description": "Navigate the DataOps Group website with ease using our comprehensive sitemap. Find all pages, resources, and services for HubSpot consulting and implementation.",
          "breadcrumb": {
            "@id": `${baseUrl}/sitemap/#breadcrumb`
          },
          "isPartOf": {
            "@id": `${baseUrl}/#website`
          },
          "about": {
            "@id": `${baseUrl}/#organization`
          },
          "datePublished": "2025-05-14T08:00:00+00:00",
          "dateModified": "2025-05-14T08:00:00+00:00",
          "inLanguage": "en-US"
        })}
      </script>
      
      <Navbar />
      <main className="flex-1" role="main">
        <section className="bg-gradient-to-br from-white to-dataops-50 py-16 md:py-24">
          <div className="container mx-auto px-[5%]">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold mb-6 mobile-text">
                <span className="gradient-text">Sitemap</span> Navigation
              </h1>
              <p className="text-lg text-gray-700 mb-8 mobile-text">
                Find everything you need on our website with this complete site navigation guide
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a 
                  href="/sitemap.xml" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center justify-center gap-2 bg-dataops-600 hover:bg-dataops-700 text-white px-6 py-3 rounded-md transition-colors min-w-[180px] mobile-link"
                  aria-label="View XML Sitemap"
                >
                  <FileCode size={isMobile ? 24 : 20} />
                  <span className="mobile-text">View XML Sitemap</span>
                </a>
                <Link 
                  to="/contact" 
                  className="inline-flex items-center justify-center gap-2 border border-dataops-600 text-dataops-600 hover:bg-dataops-50 px-6 py-3 rounded-md transition-colors min-w-[180px] mobile-link"
                  aria-label="Contact Us"
                >
                  <LinkIcon size={isMobile ? 24 : 20} />
                  <span className="mobile-text">Contact Us</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* Main sitemap content section */}
        <section className="py-16 px-[5%] bg-white">
          <div className="container mx-auto">
            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {/* Main Pages */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <div className="mb-4 h-12 w-12 rounded-full bg-dataops-100 flex items-center justify-center mx-auto">
                    <FolderOpen className="h-6 w-6 text-dataops-600" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-center mobile-text">
                    Main Pages
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li>
                      <Link 
                        to="/" 
                        className="text-dataops-600 hover:underline flex items-center text-base p-2 mobile-link" 
                        aria-label="Home Page"
                      >
                        <LinkIcon className="h-4 w-4 mr-2 flex-shrink-0" />
                        <span className="mobile-text">Home</span>
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="/services" 
                        className="text-dataops-600 hover:underline flex items-center text-base p-2 mobile-link"
                        aria-label="Services Page"
                      >
                        <LinkIcon className="h-4 w-4 mr-2 flex-shrink-0" />
                        <span className="mobile-text">Services</span>
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="/approach" 
                        className="text-dataops-600 hover:underline flex items-center text-base p-2 mobile-link"
                        aria-label="Our Approach Page"
                      >
                        <LinkIcon className="h-4 w-4 mr-2 flex-shrink-0" />
                        <span className="mobile-text">Our Approach</span>
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="/insights" 
                        className="text-dataops-600 hover:underline flex items-center text-base p-2 mobile-link"
                        aria-label="Insights Page"
                      >
                        <LinkIcon className="h-4 w-4 mr-2 flex-shrink-0" />
                        <span className="mobile-text">Insights</span>
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="/about" 
                        className="text-dataops-600 hover:underline flex items-center text-base p-2 mobile-link"
                        aria-label="About Us Page"
                      >
                        <LinkIcon className="h-4 w-4 mr-2 flex-shrink-0" />
                        <span className="mobile-text">About Us</span>
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="/contact" 
                        className="text-dataops-600 hover:underline flex items-center text-base p-2 mobile-link"
                        aria-label="Contact Us Page"
                      >
                        <LinkIcon className="h-4 w-4 mr-2 flex-shrink-0" />
                        <span className="mobile-text">Contact</span>
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="/get-started" 
                        className="text-dataops-600 hover:underline flex items-center text-base p-2 mobile-link"
                        aria-label="Get Started Page"
                      >
                        <LinkIcon className="h-4 w-4 mr-2 flex-shrink-0" />
                        <span className="mobile-text">Get Started</span>
                      </Link>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              {/* Services */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <div className="mb-4 h-12 w-12 rounded-full bg-dataops-100 flex items-center justify-center mx-auto">
                    <List className="h-6 w-6 text-dataops-600" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-center mobile-text">
                    Services
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li>
                      <Link 
                        to="/services/analytics-bi" 
                        className="text-dataops-600 hover:underline flex items-center text-base p-2 mobile-link"
                        aria-label="Analytics & BI Page"
                      >
                        <LinkIcon className="h-4 w-4 mr-2 flex-shrink-0" />
                        <span className="mobile-text">Analytics & BI</span>
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="/services/dataops-implementation" 
                        className="text-dataops-600 hover:underline flex items-center text-base p-2 mobile-link"
                        aria-label="DataOps Implementation Page"
                      >
                        <LinkIcon className="h-4 w-4 mr-2 flex-shrink-0" />
                        <span className="mobile-text">DataOps Implementation</span>
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="/services/marketing-operations-revops" 
                        className="text-dataops-600 hover:underline flex items-center text-base p-2 mobile-link"
                        aria-label="Marketing Operations & RevOps Page"
                      >
                        <LinkIcon className="h-4 w-4 mr-2 flex-shrink-0" />
                        <span className="mobile-text">Marketing Operations & RevOps</span>
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="/services/team-training" 
                        className="text-dataops-600 hover:underline flex items-center text-base p-2 mobile-link"
                        aria-label="Team Training Page"
                      >
                        <LinkIcon className="h-4 w-4 mr-2 flex-shrink-0" />
                        <span className="mobile-text">Team Training</span>
                      </Link>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              {/* Resources - Updated to remove Documentation link */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <div className="mb-4 h-12 w-12 rounded-full bg-dataops-100 flex items-center justify-center mx-auto">
                    <FolderOpen className="h-6 w-6 text-dataops-600" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-center mobile-text">
                    Resources
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li>
                      <Link 
                        to="/case-studies" 
                        className="text-dataops-600 hover:underline flex items-center text-base p-2 mobile-link"
                        aria-label="Case Studies Page"
                      >
                        <LinkIcon className="h-4 w-4 mr-2 flex-shrink-0" />
                        <span className="mobile-text">Case Studies</span>
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="/whitepapers" 
                        className="text-dataops-600 hover:underline flex items-center text-base p-2 mobile-link"
                        aria-label="Whitepapers Page"
                      >
                        <LinkIcon className="h-4 w-4 mr-2 flex-shrink-0" />
                        <span className="mobile-text">Whitepapers</span>
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="/faqs" 
                        className="text-dataops-600 hover:underline flex items-center text-base p-2 mobile-link"
                        aria-label="FAQs Page"
                      >
                        <LinkIcon className="h-4 w-4 mr-2 flex-shrink-0" />
                        <span className="mobile-text">FAQs</span>
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="/book" 
                        className="text-dataops-600 hover:underline flex items-center text-base p-2 mobile-link"
                        aria-label="Book a Call Page"
                      >
                        <LinkIcon className="h-4 w-4 mr-2 flex-shrink-0" />
                        <span className="mobile-text">Book a Call</span>
                      </Link>
                    </li>
                    <li>
                      <a 
                        href="/sitemap.xml" 
                        className="text-dataops-600 hover:underline flex items-center text-base p-2 mobile-link"
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label="XML Sitemap Link"
                      >
                        <LinkIcon className="h-4 w-4 mr-2 flex-shrink-0" />
                        <span className="mobile-text">XML Sitemap</span>
                      </a>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              {/* Legal */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <div className="mb-4 h-12 w-12 rounded-full bg-dataops-100 flex items-center justify-center mx-auto">
                    <List className="h-6 w-6 text-dataops-600" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-center mobile-text">
                    Legal
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li>
                      <Link 
                        to="/privacy" 
                        className="text-dataops-600 hover:underline flex items-center text-base p-2 mobile-link"
                        aria-label="Privacy Policy Page"
                      >
                        <LinkIcon className="h-4 w-4 mr-2 flex-shrink-0" />
                        <span className="mobile-text">Privacy Policy</span>
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="/terms" 
                        className="text-dataops-600 hover:underline flex items-center text-base p-2 mobile-link"
                        aria-label="Terms of Service Page"
                      >
                        <LinkIcon className="h-4 w-4 mr-2 flex-shrink-0" />
                        <span className="mobile-text">Terms of Service</span>
                      </Link>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              {/* Insights & Blog */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <div className="mb-4 h-12 w-12 rounded-full bg-dataops-100 flex items-center justify-center mx-auto">
                    <FolderOpen className="h-6 w-6 text-dataops-600" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-center mobile-text">
                    Insights & Blog
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li>
                      <Link 
                        to="/insights" 
                        className="text-dataops-600 hover:underline flex items-center text-base p-2 mobile-link"
                        aria-label="All Insights Page"
                      >
                        <LinkIcon className="h-4 w-4 mr-2 flex-shrink-0" />
                        <span className="mobile-text">All Insights</span>
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="/insights/what-does-a-hubspot-consultant-cost" 
                        className="text-dataops-600 hover:underline flex items-center text-base p-2 mobile-link"
                        aria-label="HubSpot Consultant Cost Page"
                      >
                        <LinkIcon className="h-4 w-4 mr-2 flex-shrink-0" />
                        <span className="mobile-text">HubSpot Consultant Cost</span>
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="/insights/navigating-first-90-days-revops" 
                        className="text-dataops-600 hover:underline flex items-center text-base p-2 mobile-link"
                        aria-label="First 90 Days in RevOps Page"
                      >
                        <LinkIcon className="h-4 w-4 mr-2 flex-shrink-0" />
                        <span className="mobile-text">First 90 Days in RevOps</span>
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="/insights/crm-cleanup-plan" 
                        className="text-dataops-600 hover:underline flex items-center text-base p-2 mobile-link"
                        aria-label="CRM Cleanup Plan Page"
                      >
                        <LinkIcon className="h-4 w-4 mr-2 flex-shrink-0" />
                        <span className="mobile-text">CRM Cleanup Plan</span>
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="/insights/marketing-data-management" 
                        className="text-dataops-600 hover:underline flex items-center text-base p-2 mobile-link"
                        aria-label="Marketing Data Management Page"
                      >
                        <LinkIcon className="h-4 w-4 mr-2 flex-shrink-0" />
                        <span className="mobile-text">Marketing Data Management</span>
                      </Link>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              {/* Case Studies */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <div className="mb-4 h-12 w-12 rounded-full bg-dataops-100 flex items-center justify-center mx-auto">
                    <List className="h-6 w-6 text-dataops-600" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-center mobile-text">
                    Case Studies
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li>
                      <Link 
                        to="/insights/upscale-home-improvement-goods-manufacturer" 
                        className="text-dataops-600 hover:underline flex items-center text-base p-2 mobile-link"
                        aria-label="Home Improvement Manufacturer Page"
                      >
                        <LinkIcon className="h-4 w-4 mr-2 flex-shrink-0" />
                        <span className="mobile-text">Home Improvement Manufacturer</span>
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="/insights/saas-healthcare-achieves-remarkable-insights" 
                        className="text-dataops-600 hover:underline flex items-center text-base p-2 mobile-link"
                        aria-label="SaaS Healthcare Provider Page"
                      >
                        <LinkIcon className="h-4 w-4 mr-2 flex-shrink-0" />
                        <span className="mobile-text">SaaS Healthcare Provider</span>
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="/insights/audio-visual-equipment-wholesaler" 
                        className="text-dataops-600 hover:underline flex items-center text-base p-2 mobile-link"
                        aria-label="Audio-Visual Wholesaler Page"
                      >
                        <LinkIcon className="h-4 w-4 mr-2 flex-shrink-0" />
                        <span className="mobile-text">Audio-Visual Wholesaler</span>
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="/insights/multi-national-specialty-insurance" 
                        className="text-dataops-600 hover:underline flex items-center text-base p-2 mobile-link"
                        aria-label="Specialty Insurance Company Page"
                      >
                        <LinkIcon className="h-4 w-4 mr-2 flex-shrink-0" />
                        <span className="mobile-text">Specialty Insurance Company</span>
                      </Link>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 px-[5%] bg-gray-50">
          <div className="container mx-auto text-center max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 mobile-text">Need Help Finding Something?</h2>
            <p className="text-lg text-gray-700 mb-8 mobile-text">
              If you can't find what you're looking for or have questions about our HubSpot consulting services, our team is ready to assist you.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center gap-2 bg-dataops-600 hover:bg-dataops-700 text-white px-6 py-4 rounded-md transition-colors min-w-[200px] text-base mobile-link"
                aria-label="Contact Our Team"
              >
                Contact Our Team
                <MoveRight size={isMobile ? 24 : 20} className="ml-2" />
              </Link>
              <Link 
                to="/faqs" 
                className="inline-flex items-center justify-center gap-2 border border-dataops-600 text-dataops-600 hover:bg-dataops-50 px-6 py-4 rounded-md transition-colors min-w-[200px] text-base mobile-link"
                aria-label="View Frequently Asked Questions"
              >
                View FAQs
              </Link>
            </div>
          </div>
        </section>

        <CTABanner />
      </main>
      <Footer />
    </div>
  );
};

export default SitemapPage;
