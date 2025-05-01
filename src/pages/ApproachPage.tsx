
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Lightbulb, BookOpen, Users, Rocket } from 'lucide-react';
import CTABanner from '@/components/CTABanner';
import { Helmet } from 'react-helmet-async';

const steps = [
  {
    icon: <Lightbulb className="h-10 w-10" />,
    title: 'Discovery',
    description: 'We assess your current data landscape, identify challenges, and define clear objectives.',
    color: 'bg-blue-500'
  },
  {
    icon: <BookOpen className="h-10 w-10" />,
    title: 'Strategy',
    description: 'Our team designs a tailored roadmap to transform your data operations approach.',
    color: 'bg-teal-500'
  },
  {
    icon: <Users className="h-10 w-10" />,
    title: 'Implementation',
    description: 'We execute the plan, integrating solutions that address your specific needs.',
    color: 'bg-purple-500'
  },
  {
    icon: <Rocket className="h-10 w-10" />,
    title: 'Optimization',
    description: 'Continuous improvement ensures your data operations evolve with your business.',
    color: 'bg-amber-500'
  }
];

const ApproachPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Our Approach to DataOps - DataOps Group</title>
        <meta name="description" content="Learn about our systematic approach to implementing DataOps in your organization through discovery, strategy, implementation, and optimization." />
        <meta name="keywords" content="dataops approach, data methodology, data transformation process, agile data management" />
        <link rel="canonical" href="/approach" />
      </Helmet>
      <Navbar />
      <main className="pt-28 flex-1">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">
            Our <span className="gradient-text">Approach</span>
          </h1>
          
          <div className="max-w-3xl mx-auto text-gray-700 mb-12">
            <p className="text-lg mb-4">
              At DataOps Group, we follow a systematic methodology that delivers reliable results for our clients. 
              Our approach is designed to transform your data operations and create sustainable value.
            </p>
            <p className="text-lg mb-4">
              We believe in collaboration, transparency, and measurable outcomes. Each step in our process is 
              carefully executed to ensure your organization achieves its data objectives.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {steps.map((step, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md">
                <div className={`${step.color} w-16 h-16 rounded-full flex items-center justify-center text-white mb-6`} aria-hidden="true">
                  {step.icon}
                </div>
                <h2 className="text-xl font-semibold mb-4">{step.title}</h2>
                <p className="text-gray-600">{step.description}</p>
                
                <div className="mt-6 space-y-3">
                  <h3 className="font-medium">Key Activities:</h3>
                  <ul className="list-disc pl-5 text-gray-600">
                    {index === 0 && (
                      <>
                        <li>Data landscape assessment</li>
                        <li>Stakeholder interviews</li>
                        <li>Challenge identification</li>
                        <li>Objective definition</li>
                      </>
                    )}
                    {index === 1 && (
                      <>
                        <li>Solution architecture</li>
                        <li>Technology selection</li>
                        <li>Roadmap development</li>
                        <li>Resource planning</li>
                      </>
                    )}
                    {index === 2 && (
                      <>
                        <li>Solution development</li>
                        <li>Process integration</li>
                        <li>Team training</li>
                        <li>Deployment management</li>
                      </>
                    )}
                    {index === 3 && (
                      <>
                        <li>Performance monitoring</li>
                        <li>Continuous improvement</li>
                        <li>Knowledge transfer</li>
                        <li>Success measurement</li>
                      </>
                    )}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
        <CTABanner />
      </main>
      <Footer />
    </div>
  );
};

export default ApproachPage;
