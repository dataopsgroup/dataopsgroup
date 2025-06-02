import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ChevronLeft, Book } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { cn } from "@/lib/utils";
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import OptimizedImage from '@/components/ui/optimized-image';

const BookPage = () => {
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'https://dataopsgroup.com';
  const bookCoverImage = '/lovable-uploads/582dcdb7-2cb4-4457-ae45-10121eef53a2.png';

  // Define breadcrumbs for schema
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'The CMO\'s Data Playbook', url: '/book' }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>The CMO's Data Playbook | DataOps Group</title>
        <meta name="description" content="Transform data into revenue with The CMO's Data Playbook. Sixty days to harness your marketing data's origins, journey, and destiny for C-Suite impact." />
        <meta name="keywords" content="cmo data playbook, marketing data, data transformation, revenue optimization" />
        <link rel="canonical" href={`${baseUrl}/book`} />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="book" />
        <meta property="og:title" content="The CMO's Data Playbook | DataOps Group" />
        <meta property="og:description" content="Transform data into revenue with The CMO's Data Playbook. Sixty days to harness your marketing data's origins, journey, and destiny for C-Suite impact." />
        <meta property="og:url" content={`${baseUrl}/book`} />
        <meta property="og:image" content={`${baseUrl}/lovable-uploads/582dcdb7-2cb4-4457-ae45-10121eef53a2.png`} />
        <meta property="og:site_name" content="DataOps Group" />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="The CMO's Data Playbook | DataOps Group" />
        <meta name="twitter:description" content="Transform data into revenue with The CMO's Data Playbook. Sixty days to harness your marketing data's origins, journey, and destiny for C-Suite impact." />
        <meta name="twitter:image" content={`${baseUrl}/lovable-uploads/582dcdb7-2cb4-4457-ae45-10121eef53a2.png`} />
        <meta name="twitter:site" content="@dataops_group" />
        {/* Schema markup for the book */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "Book",
            "name": "THE CMO's DATA PLAYBOOK",
            "author": {
              "@type": "Person",
              "name": "Geoff Tucker"
            },
            "url": "${baseUrl}/book",
            "image": "${baseUrl}/lovable-uploads/582dcdb7-2cb4-4457-ae45-10121eef53a2.png",
            "description": "Sixty Days to Harness Your Marketing Data's Origins, Journey, and Destiny for C-Suite Impact.",
            "publisher": {
              "@type": "Organization",
              "name": "DataOps Group"
            }
          }
        `}</script>
      </Helmet>
      
      {/* Schema Markup */}
      <BreadcrumbSchema items={breadcrumbs} />
      
      <Navbar />
      
      {/* Removed the redundant Insights navigation bar that was here */}
      
      <main className="flex-grow container mx-auto px-4 py-12 mt-16">
        <div className="text-left mb-8">
          <Link to="/" className="inline-flex items-center text-dataops-600 hover:text-dataops-800 mb-8">
            <ChevronLeft className="h-4 w-4 mr-1" /> Back to home
          </Link>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="flex justify-center pt-48">
            <OptimizedImage 
              src={bookCoverImage}
              alt="The CMO's Data Playbook book cover"
              width={400}
              height={600}
              priority={true}
              aspectRatio={2/3}
              className="h-auto max-w-sm rounded-lg shadow-xl"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
              quality={90}
              enableModernFormats={true}
              loading="eager"
              decoding="sync"
            />
          </div>
          
          <div className="text-left">
            <div className="inline-flex items-center bg-dataops-100 text-dataops-700 text-xs px-3 py-1 rounded-full mb-4">
              <Book className="h-3 w-3 mr-1" />
              <span>New Release</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              THE CMO's DATA PLAYBOOK
            </h1>
            <h2 className="text-xl md:text-2xl text-dataops-600 font-medium mb-6">
              TRANSFORM DATA INTO REVENUE
            </h2>
            
            <div className="prose max-w-none">
              <p className="text-lg mb-6">
                Sixty Days to Harness Your Marketing Data's Origins, Journey, and Destiny for C-Suite Impact.
              </p>
              
              <p className="mb-4">
                In today's data-driven marketing landscape, CMOs face unprecedented pressure to demonstrate ROI and drive revenue growth. <strong>The CMO's Data Playbook</strong> provides a practical, action-oriented framework to transform marketing data from a confusing mess into a strategic business asset.
              </p>
              
              <div className="my-8">
                <h3 className="text-xl font-bold mb-4">What You'll Learn:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>How to identify and organize the most valuable data in your marketing ecosystem</li>
                  <li>Proven strategies to break down data silos across your organization</li>
                  <li>Step-by-step processes to align marketing KPIs with business objectives</li>
                  <li>Techniques to communicate data insights effectively to C-suite executives</li>
                  <li>Methods to build sustainable data governance that drives revenue growth</li>
                </ul>
              </div>
              
              <div className="bg-dataops-50 p-6 rounded-lg mb-8">
                <p className="text-lg font-medium mb-2">About the Author</p>
                <p>
                  <strong>Geoff Tucker</strong> is a data strategy expert with over 15 years of experience helping Fortune 500 companies transform their marketing data operations. As the founder of DataOps Group, he has developed methodologies that have helped companies reclaim millions in wasted marketing spend.
                </p>
              </div>
            </div>
            
            <div className="mt-8">
              <a 
                href="https://a.co/d/1VQNwrN" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button className="bg-dataops-600 hover:bg-dataops-700 text-white text-lg px-8 py-6">
                  Pre-Order Now
                </Button>
              </a>
              <p className="text-sm text-gray-500 mt-2">
                Release Date: June 6, 2025
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BookPage;
