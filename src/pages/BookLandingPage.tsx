
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Book, ChevronRight } from 'lucide-react';

const BookLandingPage = () => {
  // Define book cover and author photo paths directly
  const bookCoverPath = "/lovable-uploads/7fffb636-3a9b-492e-9683-9fa503913a8a.png";
  const authorPhotoPath = "/lovable-uploads/73881b43-478e-4955-b56c-b120bd0a5ac5.png";

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>The CMO's Data Playbook - Transform Data Into Revenue | DataOps Group</title>
        <meta name="description" content="Discover how to harness your marketing data and transform it into revenue with The CMO's Data Playbook by Geoff Tucker." />
        <meta name="keywords" content="data playbook, marketing data, cmo data, revenue optimization, data strategy, marketing operations" />
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
            "image": "${window.location.origin}${bookCoverPath}",
            "description": "Sixty Days to Harness Your Marketing Data's Origins, Journey, and Destiny for C-Suite Impact.",
            "publisher": {
              "@type": "Organization",
              "name": "DataOps Group"
            }
          }
        `}</script>
      </Helmet>
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-dataops-50 to-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="inline-flex items-center bg-dataops-100 text-dataops-700 text-sm px-3 py-1 rounded-full mb-6">
                  <Book className="h-4 w-4 mr-2" />
                  <span>New Release</span>
                </div>
                <h1 className="text-3xl md:text-5xl font-bold mb-6 text-gray-800">
                  THE CMO's DATA PLAYBOOK
                </h1>
                <h2 className="text-xl md:text-2xl font-medium mb-6 text-dataops-600">
                  TRANSFORM DATA INTO REVENUE
                </h2>
                <p className="text-lg text-gray-700 mb-8">
                  Sixty Days to Harness Your Marketing Data's Origins, Journey, and Destiny for C-Suite Impact.
                  A practical guide for marketing executives who want to turn their data into strategic business value.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-dataops-600 hover:bg-dataops-700 text-white text-lg px-8 py-6">
                    Pre-Order Now <ChevronRight className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" className="border-dataops-600 text-dataops-600 hover:bg-dataops-50 text-lg px-8 py-6">
                    Learn More
                  </Button>
                </div>
              </div>
              <div className="order-1 md:order-2 flex justify-center">
                <div className="relative">
                  <img 
                    src={bookCoverPath} 
                    alt="The CMO's Data Playbook book cover" 
                    className="h-auto max-w-sm rounded-lg shadow-2xl transform md:-rotate-6 hover:rotate-0 transition-transform duration-300" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-lg"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Book Features */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">What You'll Discover</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 bg-dataops-50 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Data Organization Framework</h3>
                <p className="text-gray-700">
                  Learn how to identify and organize the most valuable data in your marketing ecosystem for maximum impact.
                </p>
              </div>
              <div className="p-6 bg-green-50 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Executive Communication</h3>
                <p className="text-gray-700">
                  Master techniques to communicate data insights effectively to C-suite executives and stakeholders.
                </p>
              </div>
              <div className="p-6 bg-rose-50 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Revenue Acceleration</h3>
                <p className="text-gray-700">
                  Develop strategies that transform marketing data into tangible business revenue and growth.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About the Author */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">About the Author</h2>
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <img 
                  src={authorPhotoPath} 
                  alt="Geoff Tucker" 
                  className="h-64 w-64 object-cover rounded-full border-4 border-white shadow-lg" 
                />
                <div>
                  <h3 className="text-xl font-bold mb-4">Geoff Tucker</h3>
                  <p className="text-gray-700 mb-4">
                    Geoff Tucker is a data strategy expert with over 15 years of experience helping Fortune 500 companies transform their marketing data operations. 
                    As the founder of DataOps Group, he has developed methodologies that have helped companies reclaim millions in wasted marketing spend.
                  </p>
                  <p className="text-gray-700">
                    His approach combines technical expertise with a deep understanding of marketing challenges, allowing him to bridge the gap between data science and business strategy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pre-order CTA */}
        <section className="py-16 bg-gradient-to-br from-dataops-600 to-dataops-800 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Be Among the First to Read</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Pre-order your copy today and receive exclusive bonus content including case studies and worksheets.
            </p>
            <Button className="bg-white text-dataops-700 hover:bg-gray-100 text-lg px-8 py-6">
              Pre-Order Now <ChevronRight className="h-4 w-4" />
            </Button>
            <p className="text-sm mt-4 text-white/80">
              Release Date: October 15, 2025
            </p>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default BookLandingPage;
