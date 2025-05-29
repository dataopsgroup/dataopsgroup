import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SampleChapterForm from '@/components/book/SampleChapterForm';
import { Book, ChevronRight, Download } from 'lucide-react';

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
        {/* Hero Section */}
        <section className="hero-gradient py-20 relative overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-20 items-center">
              <div className="hero-text max-w-lg">
                <div className="inline-flex items-center bg-blue-50 text-blue-700 text-sm px-4 py-2 rounded-full mb-6">
                  <Book className="h-4 w-4 mr-2" />
                  <span className="font-semibold">📚 New Release</span>
                </div>
                <h1 className="text-5xl font-extrabold leading-tight mb-6 bg-gradient-to-r from-gray-800 to-blue-600 bg-clip-text text-transparent">
                  THE CMO'S DATA PLAYBOOK
                </h1>
                <h2 className="text-2xl font-semibold text-blue-600 mb-4">
                  TRANSFORM DATA INTO REVENUE
                </h2>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Sixty Days to Harness Your Marketing Data's Origins, Journey, and Destiny for C-Suite Impact. 
                  A practical guide for marketing executives who want to turn their data into strategic business value.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="#pre-order" 
                    className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg inline-flex items-center justify-center"
                  >
                    Pre-Order Now <ChevronRight className="h-5 w-5 ml-2" />
                  </a>
                  <button 
                    onClick={scrollToForm}
                    className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white text-lg px-8 py-4 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center"
                  >
                    Get Sample Chapter
                  </button>
                </div>
              </div>
              
              <div className="book-container relative max-w-md mx-auto">
                <img 
                  src="/lovable-uploads/582dcdb7-2cb4-4457-ae45-10121eef53a2.png" 
                  alt="The CMO's Data Playbook book cover" 
                  className="book-cover w-full rounded-3xl shadow-2xl transition-all duration-500" 
                />
                <div className="floating-elements absolute inset-0 pointer-events-none">
                  <div className="floating-stat absolute top-20 -right-4 bg-white px-4 py-3 rounded-xl shadow-lg text-sm font-semibold text-gray-800">
                    📈 60-Day Framework
                  </div>
                  <div className="floating-stat absolute bottom-32 -left-6 bg-white px-4 py-3 rounded-xl shadow-lg text-sm font-semibold text-gray-800">
                    🎯 C-Suite Impact
                  </div>
                  <div className="floating-stat absolute top-60 -right-2 bg-white px-4 py-3 rounded-xl shadow-lg text-sm font-semibold text-gray-800">
                    💡 Practical Guide
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-white border-t border-gray-200">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="stat-item">
                <span className="block text-4xl font-extrabold text-blue-600 mb-2">50+</span>
                <span className="text-gray-600 font-medium">Companies Transformed</span>
              </div>
              <div className="stat-item">
                <span className="block text-4xl font-extrabold text-blue-600 mb-2">15+</span>
                <span className="text-gray-600 font-medium">Years Experience</span>
              </div>
              <div className="stat-item">
                <span className="block text-4xl font-extrabold text-blue-600 mb-2">100%</span>
                <span className="text-gray-600 font-medium">Data-Driven Strategies</span>
              </div>
              <div className="stat-item">
                <span className="block text-4xl font-extrabold text-blue-600 mb-2">60</span>
                <span className="text-gray-600 font-medium">Days to Results</span>
              </div>
            </div>
          </div>
        </section>

        {/* What You'll Discover Section */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">What You'll Discover</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Transform your marketing data from chaos to clarity with proven frameworks and actionable strategies.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-10">
              <div className="discover-card bg-white p-10 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center text-3xl mb-6">
                  🏗️
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Data Organization Framework</h3>
                <p className="text-gray-600 leading-relaxed">
                  Learn how to identify and organize the most valuable data in your marketing ecosystem for maximum impact. 
                  Build a foundation that scales with your business growth.
                </p>
              </div>
              <div className="discover-card bg-white p-10 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-xl flex items-center justify-center text-3xl mb-6">
                  🗣️
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Executive Communication</h3>
                <p className="text-gray-600 leading-relaxed">
                  Master techniques to communicate data insights effectively to C-suite executives and stakeholders. 
                  Turn complex analytics into compelling business narratives.
                </p>
              </div>
              <div className="discover-card bg-white p-10 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-xl flex items-center justify-center text-3xl mb-6">
                  🚀
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Revenue Acceleration</h3>
                <p className="text-gray-600 leading-relaxed">
                  Develop strategies that transform marketing data into tangible business revenue and growth. 
                  Implement systems that deliver measurable ROI within 60 days.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Author Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-4xl font-bold text-gray-800">About the Author</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
              <div className="text-center md:text-left">
                <img 
                  src="/lovable-uploads/79716a8a-35d3-4966-a6e9-1d0f21b5f732.png" 
                  alt="Geoff Tucker" 
                  className="w-80 h-80 object-cover rounded-3xl shadow-xl mx-auto md:mx-0" 
                />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-800 mb-4">Geoff Tucker</h3>
                <div className="text-blue-600 font-semibold text-lg mb-6">Founder, DataOps Group</div>
                
                <div className="flex gap-10 mb-8">
                  <div className="text-center">
                    <span className="block text-2xl font-bold text-blue-600">15+</span>
                    <span className="text-sm text-gray-600">Years Experience</span>
                  </div>
                  <div className="text-center">
                    <span className="block text-2xl font-bold text-blue-600">50+</span>
                    <span className="text-sm text-gray-600">Companies Helped</span>
                  </div>
                  <div className="text-center">
                    <span className="block text-2xl font-bold text-blue-600">HubSpot</span>
                    <span className="text-sm text-gray-600">Super Admin</span>
                  </div>
                </div>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  Geoff Tucker is a data strategy expert with over 15 years of experience helping companies transform 
                  their marketing data operations. As the founder of DataOps Group, he has developed methodologies 
                  that help businesses turn their HubSpot investments into measurable growth.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  His approach combines technical expertise with practical business strategy, helping marketing teams 
                  bridge the gap between data collection and revenue generation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="pre-order" className="cta-gradient py-24 text-white relative overflow-hidden">
          <div className="container mx-auto px-6 text-center relative z-10">
            <h2 className="text-5xl font-extrabold mb-6">Be Among the First to Read</h2>
            <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto">
              Pre-order your copy today and receive exclusive bonus content including case studies and worksheets.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <a 
                href="#" 
                className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 text-lg px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg inline-flex items-center justify-center"
              >
                Pre-Order Now <ChevronRight className="h-5 w-5 ml-2" />
              </a>
              <button 
                onClick={scrollToForm}
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 text-lg px-8 py-4 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center"
              >
                Get Sample Chapter
              </button>
            </div>
            <div className="mt-8 opacity-80 text-lg">
              Release Date: June 6, 2025
            </div>
          </div>
        </section>

        {/* Sample Chapter Form Section */}
        <section id="sample-chapter-form" className="form-gradient py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-flex items-center bg-blue-100 text-blue-700 text-sm px-4 py-2 rounded-full mb-6">
                  <Download className="h-4 w-4 mr-2" />
                  <span className="font-semibold">Free Sample Chapter</span>
                </div>
                <h2 className="text-4xl font-bold text-gray-800 mb-4">Download Your Free Sample</h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Get the introduction and first chapter of "The CMO's Data Playbook" delivered to your inbox instantly. 
                  See exactly how this framework can transform your marketing data strategy.
                </p>
              </div>
              
              <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">What You'll Get:</h3>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-1">
                          <span className="text-green-600 text-sm">✓</span>
                        </div>
                        <div>
                          <strong className="text-gray-800">Complete Introduction</strong>
                          <p className="text-gray-600 text-sm">Understanding the data transformation challenge</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-1">
                          <span className="text-green-600 text-sm">✓</span>
                        </div>
                        <div>
                          <strong className="text-gray-800">Chapter 1: Data Origins</strong>
                          <p className="text-gray-600 text-sm">How to identify and audit your current data sources</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <SampleChapterForm />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Have Questions About the Book?</h2>
              <p className="text-gray-600 mb-8">
                Get in touch with our team for inquiries about bulk orders, speaking engagements, or media requests.
              </p>
              <a 
                href="/contact" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 inline-flex items-center"
              >
                Contact Us <ChevronRight className="h-5 w-5 ml-2" />
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default BookLandingPage;
