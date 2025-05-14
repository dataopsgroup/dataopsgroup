import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import CTABanner from '@/components/CTABanner';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import { FolderOpen, List, Link as LinkIcon, FileCode } from 'lucide-react';

const SitemapPage = () => {
  // Define breadcrumbs for schema
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Sitemap', url: '/sitemap' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Sitemap - DataOps Group</title>
        <meta name="description" content="Navigate our website with ease. Find all pages and resources organized in our sitemap." />
        <meta name="keywords" content="sitemap, navigation, website map, pages" />
        <link rel="canonical" href="/sitemap" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Sitemap - DataOps Group" />
        <meta property="og:description" content="Navigate our website with ease. Find all pages and resources organized in our sitemap." />
        <meta property="og:url" content={`${window.location.origin}/sitemap`} />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Sitemap - DataOps Group" />
        <meta name="twitter:description" content="Navigate our website with ease. Find all pages and resources organized in our sitemap." />
      </Helmet>
      
      {/* Schema Markup */}
      <BreadcrumbSchema items={breadcrumbs} />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Sitemap - DataOps Group",
          "description": "Navigate our website with ease. Find all pages and resources organized in our sitemap.",
          "publisher": {
            "@type": "Organization",
            "name": "DataOps Group",
            "logo": {
              "@type": "ImageObject",
              "url": `${window.location.origin}/lovable-uploads/9b9f1c84-13af-4551-96d5-b7a930f008cf.png`
            }
          }
        })}
      </script>
      
      <Navbar />
      <main className="flex-1">
        <section className="bg-gradient-to-br from-white to-dataops-50 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="gradient-text">Sitemap</span> Navigation
              </h1>
              <p className="text-lg text-gray-700 mb-8">
                Find everything you need on our website with this complete site navigation guide
              </p>
              <a href="/sitemap.xml" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-dataops-600 hover:bg-dataops-700 text-white px-6 py-3 rounded-md transition-colors">
                <FileCode size={20} />
                View XML Sitemap
              </a>
            </div>
          </div>
        </section>
        
        <section className="py-16 px-4 bg-white">
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
                  <ul className="space-y-2">
                    <li><Link to="/" className="text-dataops-600 hover:underline flex items-center"><LinkIcon className="h-4 w-4 mr-2" />Home</Link></li>
                    <li><Link to="/services" className="text-dataops-600 hover:underline flex items-center"><LinkIcon className="h-4 w-4 mr-2" />Services</Link></li>
                    <li><Link to="/approach" className="text-dataops-600 hover:underline flex items-center"><LinkIcon className="h-4 w-4 mr-2" />Our Approach</Link></li>
                    <li><Link to="/insights" className="text-dataops-600 hover:underline flex items-center"><LinkIcon className="h-4 w-4 mr-2" />Insights</Link></li>
                    <li><Link to="/contact" className="text-dataops-600 hover:underline flex items-center"><LinkIcon className="h-4 w-4 mr-2" />Contact</Link></li>
                    <li><Link to="/get-started" className="text-dataops-600 hover:underline flex items-center"><LinkIcon className="h-4 w-4 mr-2" />Get Started</Link></li>
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
                  <ul className="space-y-2">
                    <li><Link to="/services/analytics-bi" className="text-dataops-600 hover:underline flex items-center"><LinkIcon className="h-4 w-4 mr-2" />Analytics & BI</Link></li>
                    <li><Link to="/services/dataops-implementation" className="text-dataops-600 hover:underline flex items-center"><LinkIcon className="h-4 w-4 mr-2" />DataOps Implementation</Link></li>
                    <li><Link to="/services/marketing-operations-revops" className="text-dataops-600 hover:underline flex items-center"><LinkIcon className="h-4 w-4 mr-2" />Marketing Operations & RevOps</Link></li>
                    <li><Link to="/services/team-training" className="text-dataops-600 hover:underline flex items-center"><LinkIcon className="h-4 w-4 mr-2" />Team Training</Link></li>
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
                  <ul className="space-y-2">
                    <li><Link to="/case-studies" className="text-dataops-600 hover:underline flex items-center"><LinkIcon className="h-4 w-4 mr-2" />Case Studies</Link></li>
                    <li><Link to="/whitepapers" className="text-dataops-600 hover:underline flex items-center"><LinkIcon className="h-4 w-4 mr-2" />Whitepapers</Link></li>
                    <li><Link to="/documentation" className="text-dataops-600 hover:underline flex items-center"><LinkIcon className="h-4 w-4 mr-2" />Documentation</Link></li>
                    <li><Link to="/faqs" className="text-dataops-600 hover:underline flex items-center"><LinkIcon className="h-4 w-4 mr-2" />FAQs</Link></li>
                    <li><a href="/sitemap.xml" className="text-dataops-600 hover:underline flex items-center"><LinkIcon className="h-4 w-4 mr-2" />XML Sitemap</a></li>
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
                  <ul className="space-y-2">
                    <li><Link to="/privacy" className="text-dataops-600 hover:underline flex items-center"><LinkIcon className="h-4 w-4 mr-2" />Privacy Policy</Link></li>
                    <li><Link to="/terms" className="text-dataops-600 hover:underline flex items-center"><LinkIcon className="h-4 w-4 mr-2" />Terms of Service</Link></li>
                  </ul>
                </CardContent>
              </Card>
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
