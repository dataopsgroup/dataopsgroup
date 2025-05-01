
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Linkedin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>About Geoff Tucker | DataOps Group</title>
        <meta name="description" content="Learn more about Geoff Tucker, a seasoned data professional with over 15 years of experience in data operations, strategy, and analytics." />
        <link rel="canonical" href="/about" />
      </Helmet>
      <Navbar />

      <main className="flex-1">
        <section className="py-16 md:py-24 bg-dataops-50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
                <div className="md:w-1/3">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex justify-center mb-6">
                      <Avatar className="h-48 w-48 border-4 border-dataops-100">
                        <AvatarImage 
                          src="/lovable-uploads/79716a8a-35d3-4966-a6e9-1d0f21b5f732.png" 
                          alt="Geoff Tucker"
                          className="object-cover"
                        />
                        <AvatarFallback className="text-4xl bg-dataops-600 text-white">GT</AvatarFallback>
                      </Avatar>
                    </div>
                    <h2 className="text-2xl font-bold text-center mb-2">Geoff Tucker</h2>
                    <p className="text-dataops-700 text-center mb-4">Data Operations Strategist</p>
                    <div className="flex justify-center">
                      <a 
                        href="https://www.linkedin.com/in/geoffreytucker/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-dataops-600 hover:text-dataops-800"
                      >
                        <Linkedin size={18} />
                        <span>LinkedIn Profile</span>
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="md:w-2/3">
                  <h1 className="text-3xl md:text-4xl font-bold mb-6">
                    About <span className="gradient-text">Geoff Tucker</span>
                  </h1>
                  
                  <p className="text-lg text-gray-700 mb-6">
                    As the founder of DataOps Group, I bring over 15 years of experience in data operations, 
                    strategy development, and analytics to help organizations transform their data into actionable insights 
                    and revenue-generating assets.
                  </p>
                  
                  <p className="text-lg text-gray-700 mb-6">
                    My expertise lies in turning chaotic data environments into organized, efficient systems that deliver 
                    real business value. I specialize in HubSpot data cleanup and optimization, helping companies leverage 
                    their existing contact databases to drive revenue growth.
                  </p>
                  
                  <p className="text-lg text-gray-700 mb-6">
                    Throughout my career, I've developed proven methodologies and frameworks that have helped numerous 
                    organizations overcome their data challenges and achieve measurable business results.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-dataops-50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Expertise & Skills</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-4">Technical Expertise</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-dataops-600 rounded-full mr-3"></div>
                      <span>HubSpot Data Management & Optimization</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-dataops-600 rounded-full mr-3"></div>
                      <span>Data Quality & Governance Frameworks</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-dataops-600 rounded-full mr-3"></div>
                      <span>ETL Processes & Data Integration</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-dataops-600 rounded-full mr-3"></div>
                      <span>Business Intelligence & Analytics</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-dataops-600 rounded-full mr-3"></div>
                      <span>CRM Systems & Marketing Automation</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-4">Strategic Capabilities</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-dataops-600 rounded-full mr-3"></div>
                      <span>Data-Driven Revenue Optimization</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-dataops-600 rounded-full mr-3"></div>
                      <span>Marketing & Sales Analytics</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-dataops-600 rounded-full mr-3"></div>
                      <span>Process Optimization & Automation</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-dataops-600 rounded-full mr-3"></div>
                      <span>Cross-Functional Team Leadership</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-dataops-600 rounded-full mr-3"></div>
                      <span>Client Relationship Management</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;
