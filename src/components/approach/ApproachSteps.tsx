
import React from 'react';
import { Lightbulb, BookOpen, Users, Rocket } from 'lucide-react';

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

const ApproachSteps = () => {
  return (
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
  );
};

export default ApproachSteps;
