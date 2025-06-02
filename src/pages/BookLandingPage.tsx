import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BookHeroSection from '@/components/book/BookHeroSection';
import BookStatsSection from '@/components/book/BookStatsSection';
import BookDiscoverySection from '@/components/book/BookDiscoverySection';
import BookAuthorSection from '@/components/book/BookAuthorSection';
import BookCTASection from '@/components/book/BookCTASection';
import BookSampleChapterSection from '@/components/book/BookSampleChapterSection';
import BookContactSection from '@/components/book/BookContactSection';

const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'https://dataopsgroup.com';

const BookLandingPage = () => {
  const scrollToForm = () => {
    const formSection = document.getElementById('sample-chapter-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>The CMO's Data Playbook - Transform Data Into Revenue | DataOps Group</title>
        <meta name="description" content="Discover how to harness your marketing data and transform it into revenue with The CMO's Data Playbook by Geoff Tucker." />
        <meta name="keywords" content="data playbook, marketing data, cmo data, revenue optimization, data strategy, marketing operations" />
        <link rel="canonical" href={`${baseUrl}/book`} />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="book" />
        <meta property="og:title" content="The CMO's Data Playbook - Transform Data Into Revenue | DataOps Group" />
        <meta property="og:description" content="Discover how to harness your marketing data and transform it into revenue with The CMO's Data Playbook by Geoff Tucker." />
        <meta property="og:url" content={`${baseUrl}/book`} />
        <meta property="og:image" content={`${baseUrl}/lovable-uploads/582dcdb7-2cb4-4457-ae45-10121eef53a2.png`} />
        <meta property="og:site_name" content="DataOps Group" />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="The CMO's Data Playbook - Transform Data Into Revenue | DataOps Group" />
        <meta name="twitter:description" content="Discover how to harness your marketing data and transform it into revenue with The CMO's Data Playbook by Geoff Tucker." />
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

        {/* Custom styles for enhanced design */}
        <style>{`
          .floating-stat {
            animation: float 3s ease-in-out infinite;
          }
          
          .floating-stat:nth-child(1) {
            animation-delay: 0s;
          }
          
          .floating-stat:nth-child(2) {
            animation-delay: 1s;
          }
          
          .floating-stat:nth-child(3) {
            animation-delay: 2s;
          }
          
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
          
          .book-cover:hover {
            transform: translateY(-10px) rotateY(5deg);
          }
          
          .discover-card:hover {
            transform: translateY(-5px);
          }
          
          .hero-gradient {
            background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
          }
          
          .cta-gradient {
            background: linear-gradient(135deg, #1e293b, #334155);
          }
          
          .form-gradient {
            background: linear-gradient(135deg, #f1f5f9, #e2e8f0);
          }
        `}</style>
      </Helmet>
      
      <Navbar />
      
      <main className="flex-grow">
        <BookHeroSection onScrollToForm={scrollToForm} />
        <BookStatsSection />
        <BookDiscoverySection />
        <BookAuthorSection />
        <BookCTASection onScrollToForm={scrollToForm} />
        <BookSampleChapterSection />
        <BookContactSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default BookLandingPage;
