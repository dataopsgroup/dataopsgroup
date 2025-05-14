
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import CTABanner from '@/components/CTABanner';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import WebsiteSchema from '@/components/seo/WebsiteSchema';
import OrganizationSchema from '@/components/seo/OrganizationSchema';
import { FolderOpen, List, Link as LinkIcon, FileCode } from 'lucide-react';
import OptimizedImage from '@/components/ui/optimized-image';

const SitemapPage = () => {
  // Define breadcrumbs for schema
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Sitemap', url: '/sitemap' },
  ];

  const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'https://dataopsgroup.com';

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Sitemap - DataOps Group | Website Navigation Guide</title>
        <meta name="description" content="Navigate the DataOps Group website with ease using our comprehensive sitemap. Find all pages, resources, and services for HubSpot consulting and implementation." />
        <meta name="keywords" content="sitemap, DataOps Group navigation, HubSpot consulting pages, website map, marketing operations resources" />
        <link rel="canonical" href={`${baseUrl}/sitemap`} />
        
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
      <main className="flex-1">
        <section className="bg-gradient-to-br from-white to-dataops-50 py-16 md:py-24">
          <div className="container mx-auto px-[5%]">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="gradient-text">Sitemap</span> Navigation
              </h1>
              <p className="text-lg text-gray-700 mb-8">
                Find everything you need on our website with this complete site navigation guide
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a href="/sitemap.xml" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-dataops-600 hover:bg-dataops-700 text-white px-6 py-3 rounded-md transition-colors min-w-[180px]">
                  <FileCode size={20} />
                  View XML Sitemap
                </a>
                <Link to="/contact" className="inline-flex items-center justify-center gap-2 border border-dataops-600 text-dataops-600 hover:bg-dataops-50 px-6 py-3 rounded-md transition-colors min-w-[180px]">
                  <LinkIcon size={20} />
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 px-[5%] bg-white">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Main Pages */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <div className="mb-4 h-12 w-12 rounded-full bg-dataops-100 flex items-center justify-center mx-auto">
                    <FolderOpen className="h-6 w-6 text-dataops-600" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-center">
                    Main Pages
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li><Link to="/" className="text-dataops-600 hover:underline flex items-center text-base"><LinkIcon className="h-4 w-4 mr-2 flex-shrink-0" />Home</Link></li>
                    <li><Link to="/services" className="text-dataops-600 hover:underline flex items-center text-base"><LinkIcon className="h-4 w-4 mr-2 flex-shrink-0" />Services</Link></li>
                    <li><Link to="/approach" className="text-dataops-600 hover:underline flex items-center text-base"><LinkIcon className="h-4 w-4 mr-2 flex-shrink-0" />Our Approach</Link></li>
                    <li><Link to="/insights" className="text-dataops-600 hover:underline flex items-center text-base"><LinkIcon className="h-4 w-4 mr-2 flex-shrink-0" />Insights</Link></li>
                    <li><Link to="/about" className="text-dataops-600 hover:underline flex items-center text-base"><LinkIcon className="h-4 w-4 mr-2 flex-shrink-0" />About Us</Link></li>
                    <li><Link to="/contact" className="text-dataops-600 hover:underline flex items-center text-base"><LinkIcon className="h-4 w-4 mr-2 flex-shrink-0" />Contact</Link></li>
                    <li><Link to="/get-started" className="text-dataops-600 hover:underline flex items-center text-base"><LinkIcon className="h-4 w-4 mr-2 flex-shrink-0" />Get Started</Link></li>
                  </ul>
                </CardContent>
              </Card>
              
              {/* Services */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <div className="mb-4 h-12 w-12 rounded-full bg-dataops-100 flex items-center justify-center mx-auto">
                    <List className="h-6 w-6 text-dataops-600" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-center">
                    Services
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li><Link to="/services/analytics-bi" className="text-dataops-600 hover:underline flex items-center text-base"><LinkIcon className="h-4 w-4 mr-2 flex-shrink-0" />Analytics & BI</Link></li>
                    <li><Link to="/services/dataops-implementation" className="text-dataops-600 hover:underline flex items-center text-base"><LinkIcon className="h-4 w-4 mr-2 flex-shrink-0" />DataOps Implementation</Link></li>
                    <li><Link to="/services/marketing-operations-revops" className="text-dataops-600 hover:underline flex items-center text-base"><LinkIcon className="h-4 w-4 mr-2 flex-shrink-0" />Marketing Operations & RevOps</Link></li>
                    <li><Link to="/services/team-training" className="text-dataops-600 hover:underline flex items-center text-base"><LinkIcon className="h-4 w-4 mr-2 flex-shrink-0" />Team Training</Link></li>
                  </ul>
                </CardContent>
              </Card>
              
              {/* Resources */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <div className="mb-4 h-12 w-12 rounded-full bg-dataops-100 flex items-center justify-center mx-auto">
                    <FolderOpen className="h-6 w-6 text-dataops-600" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-center">
                    Resources
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li><Link to="/case-studies" className="text-dataops-600 hover:underline flex items-center text-base"><LinkIcon className="h-4 w-4 mr-2 flex-shrink-0" />Case Studies</Link></li>
                    <li><Link to="/whitepapers" className="text-dataops-600 hover:underline flex items-center text-base"><LinkIcon className="h-4 w-4 mr-2 flex-shrink-0" />Whitepapers</Link></li>
                    <li><Link to="/documentation" className="text-dataops-600 hover:underline flex items-center text-base"><LinkIcon className="h-4 w-4 mr-2 flex-shrink-0" />Documentation</Link></li>
                    <li><Link to="/faqs" className="text-dataops-600 hover:underline flex items-center text-base"><LinkIcon className="h-4 w-4 mr-2 flex-shrink-0" />FAQs</Link></li>
                    <li><Link to="/book" className="text-dataops-600 hover:underline flex items-center text-base"><LinkIcon className="h-4 w-4 mr-2 flex-shrink-0" />Book a Call</Link></li>
                    <li><a href="/sitemap.xml" className="text-dataops-600 hover:underline flex items-center text-base" target="_blank" rel="noopener noreferrer"><LinkIcon className="h-4 w-4 mr-2 flex-shrink-0" />XML Sitemap</a></li>
                  </ul>
                </CardContent>
              </Card>
              
              {/* Legal */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <div className="mb-4 h-12 w-12 rounded-full bg-dataops-100 flex items-center justify-center mx-auto">
                    <List className="h-6 w-6 text-dataops-600" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-center">
                    Legal
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li><Link to="/privacy" className="text-dataops-600 hover:underline flex items-center text-base"><LinkIcon className="h-4 w-4 mr-2 flex-shrink-0" />Privacy Policy</Link></li>
                    <li><Link to="/terms" className="text-dataops-600 hover:underline flex items-center text-base"><LinkIcon className="h-4 w-4 mr-2 flex-shrink-0" />Terms of Service</Link></li>
                  </ul>
                </CardContent>
              </Card>
              
              {/* Insights & Blog */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <div className="mb-4 h-12 w-12 rounded-full bg-dataops-100 flex items-center justify-center mx-auto">
                    <FolderOpen className="h-6 w-6 text-dataops-600" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-center">
                    Insights & Blog
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li><Link to="/insights" className="text-dataops-600 hover:underline flex items-center text-base"><LinkIcon className="h-4 w-4 mr-2 flex-shrink-0" />All Insights</Link></li>
                    <li><Link to="/insights/what-does-a-hubspot-consultant-cost" className="text-dataops-600 hover:underline flex items-center text-base"><LinkIcon className="h-4 w-4 mr-2 flex-shrink-0" />HubSpot Consultant Cost</Link></li>
                    <li><Link to="/insights/navigating-first-90-days-revops" className="text-dataops-600 hover:underline flex items-center text-base"><LinkIcon className="h-4 w-4 mr-2 flex-shrink-0" />First 90 Days in RevOps</Link></li>
                    <li><Link to="/insights/crm-cleanup-plan" className="text-dataops-600 hover:underline flex items-center text-base"><LinkIcon className="h-4 w-4 mr-2 flex-shrink-0" />CRM Cleanup Plan</Link></li>
                    <li><Link to="/insights/marketing-data-management" className="text-dataops-600 hover:underline flex items-center text-base"><LinkIcon className="h-4 w-4 mr-2 flex-shrink-0" />Marketing Data Management</Link></li>
                  </ul>
                </CardContent>
              </Card>
              
              {/* Case Studies */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <div className="mb-4 h-12 w-12 rounded-full bg-dataops-100 flex items-center justify-center mx-auto">
                    <List className="h-6 w-6 text-dataops-600" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-center">
                    Case Studies
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li><Link to="/insights/upscale-home-improvement-goods-manufacturer" className="text-dataops-600 hover:underline flex items-center text-base"><LinkIcon className="h-4 w-4 mr-2 flex-shrink-0" />Home Improvement Manufacturer</Link></li>
                    <li><Link to="/insights/saas-healthcare-achieves-remarkable-insights" className="text-dataops-600 hover:underline flex items-center text-base"><LinkIcon className="h-4 w-4 mr-2 flex-shrink-0" />SaaS Healthcare Provider</Link></li>
                    <li><Link to="/insights/audio-visual-equipment-wholesaler" className="text-dataops-600 hover:underline flex items-center text-base"><LinkIcon className="h-4 w-4 mr-2 flex-shrink-0" />Audio-Visual Wholesaler</Link></li>
                    <li><Link to="/insights/multi-national-specialty-insurance" className="text-dataops-600 hover:underline flex items-center text-base"><LinkIcon className="h-4 w-4 mr-2 flex-shrink-0" />Specialty Insurance Company</Link></li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 px-[5%] bg-gray-50">
          <div className="container mx-auto text-center max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">Need Help Finding Something?</h2>
            <p className="text-lg text-gray-700 mb-8">
              If you can't find what you're looking for or have questions about our HubSpot consulting services, our team is ready to assist you.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-dataops-600 hover:bg-dataops-700 text-white px-6 py-4 rounded-md transition-colors min-w-[200px] text-base">
                Contact Our Team
              </Link>
              <Link to="/faqs" className="inline-flex items-center justify-center gap-2 border border-dataops-600 text-dataops-600 hover:bg-dataops-50 px-6 py-4 rounded-md transition-colors min-w-[200px] text-base">
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
