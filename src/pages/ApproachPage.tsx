import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Lightbulb, BookOpen, Users, Rocket } from 'lucide-react';
import CTABanner from '@/components/CTABanner';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';

const steps = [
  {
    icon: <Lightbulb className="h-10 w-10 text-white" />,
    title: 'Discovery',
    description: 'We assess your current data landscape, identify challenges, and define clear objectives.',
    color: 'bg-blue-500',
    gradient: 'from-blue-500 to-blue-600',
    activities: [
      'Data landscape assessment',
      'Stakeholder interviews',
      'Challenge identification',
      'Objective definition'
    ]
  },
  {
    icon: <BookOpen className="h-10 w-10 text-white" />,
    title: 'Strategy',
    description: 'Our team designs a tailored roadmap to transform your data operations approach.',
    color: 'bg-teal-500',
    gradient: 'from-teal-500 to-teal-600',
    activities: [
      'Solution architecture',
      'Technology selection',
      'Roadmap development',
      'Resource planning'
    ]
  },
  {
    icon: <Users className="h-10 w-10 text-white" />,
    title: 'Implementation',
    description: 'We execute the plan, integrating solutions that address your specific needs.',
    color: 'bg-purple-500',
    gradient: 'from-purple-500 to-purple-600',
    activities: [
      'Solution development',
      'Process integration',
      'Team training',
      'Deployment management'
    ]
  },
  {
    icon: <Rocket className="h-10 w-10 text-white" />,
    title: 'Optimization',
    description: 'Continuous improvement ensures your data operations evolve with your business.',
    color: 'bg-amber-500',
    gradient: 'from-amber-500 to-amber-600',
    activities: [
      'Performance monitoring',
      'Continuous improvement',
      'Knowledge transfer',
      'Success measurement'
    ]
  }
];

const ApproachPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Our Approach to DataOps - DataOps Group</title>
        <meta name="description" content="Learn about our systematic approach to implementing DataOps in your organization through discovery, strategy, implementation, and optimization." />
        <meta name="keywords" content="dataops approach, data methodology, data transformation process, agile data management, data strategy, data implementation" />
        <link rel="canonical" href="/approach" />
      </Helmet>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4 bg-gradient-to-br from-white to-dataops-50">
          <div className="container mx-auto">
            <div className="max-w-3xl">
              <div className="space-y-6">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-dataops-100 text-dataops-800 text-sm font-medium mb-2">
                  Our Methodology
                </div>
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                  Our <span className="text-dataops-600">Approach</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-700 max-w-2xl">
                  At DataOps Group, we follow a systematic methodology that delivers reliable results for our clients.
                  Our data operations approach is designed to transform your data operations and create sustainable value.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-3 gap-16">
              <div className="lg:col-span-2 space-y-12">
                <section className="space-y-6">
                  <h2 className="text-3xl font-bold">Our Data Operations Methodology</h2>
                  <p className="text-lg text-gray-700">
                    We believe in collaboration, transparency, and measurable outcomes. Each step in our process is 
                    carefully executed to ensure your organization achieves its data objectives. Working with leading 
                    organizations across industries, we've refined our methodology to deliver consistent results.
                  </p>
                </section>
                
                <section className="space-y-8">
                  <h2 className="text-3xl font-bold">Our Four-Step Approach</h2>
                  
                  <div className="grid grid-cols-1 gap-8">
                    {steps.map((step, index) => (
                      <div key={index} className="border-l-4 border-dataops-600 pl-6">
                        <h3 className="text-2xl font-semibold mb-3">{index + 1}. {step.title}</h3>
                        <p className="text-gray-700 mb-4">
                          {step.description}
                        </p>
                        <div className="mt-4">
                          <ul className="list-disc pl-6 grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-700">
                            {step.activities.map((activity, actIndex) => (
                              <li key={actIndex}>{activity}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
                
                <section className="space-y-6">
                  <h2 className="text-3xl font-bold">Why Our Approach Works</h2>
                  <p className="text-lg text-gray-700">
                    Our methodology is built on years of experience working with organizations of all sizes. We've 
                    refined our approach to address the common challenges businesses face when implementing data 
                    operations solutions. The result is a proven system that delivers consistent results.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6 mt-8">
                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="font-medium text-xl mb-2">Data-Driven Decision Making</h3>
                        <p className="text-gray-600">
                          Our approach emphasizes using data analytics to drive all strategic decisions.
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="font-medium text-xl mb-2">Collaborative Implementation</h3>
                        <p className="text-gray-600">
                          We work closely with your team to ensure seamless integration of new data systems.
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="font-medium text-xl mb-2">Continuous Optimization</h3>
                        <p className="text-gray-600">
                          Our data governance framework ensures ongoing improvement of your data operations.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </section>
              </div>
              
              <div>
                <div className="bg-white border border-gray-100 rounded-xl shadow-sm p-8 sticky top-28">
                  <h3 className="text-xl font-bold mb-6">Benefits of Our Approach</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="text-dataops-600 mr-3 mt-0.5">•</span>
                      <span>Faster time to value from data investments</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-dataops-600 mr-3 mt-0.5">•</span>
                      <span>Reduced implementation risk and complexity</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-dataops-600 mr-3 mt-0.5">•</span>
                      <span>Higher user adoption across the organization</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-dataops-600 mr-3 mt-0.5">•</span>
                      <span>Improved data quality and reliability</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-dataops-600 mr-3 mt-0.5">•</span>
                      <span>Better alignment between data strategy and business objectives</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-dataops-600 mr-3 mt-0.5">•</span>
                      <span>Sustainable data operations that grow with your business</span>
                    </li>
                  </ul>
                  
                  <div className="mt-8 pt-8 border-t border-gray-100">
                    <h3 className="text-xl font-bold mb-4">Ready to transform your data operations?</h3>
                    <p className="text-gray-700 mb-6">
                      Contact us today to schedule a consultation and learn how our approach can help your organization.
                    </p>
                    <Link 
                      to="/contact"
                      className="block w-full py-2 px-4 bg-dataops-600 hover:bg-dataops-700 text-white text-center rounded-md transition-colors"
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <CTABanner />
      </main>
      <Footer />
      
      {/* Schema markup for Approach page */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Our Approach to DataOps - DataOps Group",
          "description": "Learn about our systematic approach to implementing DataOps in your organization through discovery, strategy, implementation, and optimization.",
          "publisher": {
            "@type": "Organization",
            "name": "DataOps Group"
          },
          "author": {
            "@type": "Person",
            "name": "Geoff Tucker"
          }
        })
      }} />
    </div>
  );
};

export default ApproachPage;
