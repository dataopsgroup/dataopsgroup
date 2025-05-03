
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ChevronLeft, Book } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { cn } from "@/lib/utils";

const BookPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>The CMO's Data Playbook | DataOps Group</title>
        <meta name="description" content="Transform data into revenue with The CMO's Data Playbook. Sixty days to harness your marketing data's origins, journey, and destiny for C-Suite impact." />
        <meta name="keywords" content="cmo data playbook, marketing data, data transformation, revenue optimization" />
        <link rel="canonical" href="/book" />
        
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
            "url": "https://dataops.group/book",
            "image": "${window.location.origin}/lovable-uploads/582dcdb7-2cb4-4457-ae45-10121eef53a2.png",
            "description": "Sixty Days to Harness Your Marketing Data's Origins, Journey, and Destiny for C-Suite Impact.",
            "publisher": {
              "@type": "Organization",
              "name": "DataOps Group"
            }
          }
        `}</script>
      </Helmet>
      <Navbar />
      
      {/* Removed the redundant Insights navigation bar that was here */}
      
      <main className="flex-grow container mx-auto px-4 py-12 mt-16">
        <div className="text-left mb-8">
          <Link to="/" className="inline-flex items-center text-dataops-600 hover:text-dataops-800 mb-8">
            <ChevronLeft className="h-4 w-4 mr-1" /> Back to home
          </Link>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="flex justify-center pt-16"> {/* Adjusted padding to account for navbar without the extra bar */}
            <img 
              src="/lovable-uploads/582dcdb7-2cb4-4457-ae45-10121eef53a2.png" 
              alt="The CMO's Data Playbook book cover" 
              className="h-auto max-w-sm rounded-lg shadow-xl" 
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
              <Button className="bg-dataops-600 hover:bg-dataops-700 text-white text-lg px-8 py-6">
                Pre-Order Now
              </Button>
              <p className="text-sm text-gray-500 mt-2">
                Release Date: October 15, 2025
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

