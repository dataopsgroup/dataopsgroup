
import React from 'react';
import { Search, Wrench, TrendingUp } from 'lucide-react';

const processSteps = [
  {
    id: "deep-audit",
    icon: <Search className="h-8 w-8 step-icon" />,
    title: 'Deep Audit',
    week: 'Week 1',
    description: 'We analyze your current HubSpot setup to identify revenue leaks, workflow gaps, and missed opportunities that are costing you deals.',
    details: [
      'Complete HubSpot configuration review',
      'Lead flow and conversion analysis', 
      'Sales process gap identification',
      'ROI impact assessment'
    ]
  },
  {
    id: "strategic-fix", 
    icon: <Wrench className="h-8 w-8 step-icon" />,
    title: 'Strategic Fix',
    week: 'Week 2',
    description: 'We implement targeted solutions to fix critical issues and optimize your HubSpot for maximum lead generation and deal closure.',
    details: [
      'Workflow automation setup',
      'Lead scoring optimization',
      'Sales pipeline restructuring', 
      'Integration improvements'
    ]
  },
  {
    id: "optimization-training",
    icon: <TrendingUp className="h-8 w-8 step-icon" />,
    title: 'Optimization & Training', 
    week: 'Week 3',
    description: 'We fine-tune performance and train your team to maintain and maximize your newly optimized HubSpot system for ongoing success.',
    details: [
      'Performance monitoring setup',
      'Team training sessions',
      'Best practices documentation',
      'Ongoing support planning'
    ]
  }
];

const Services = () => {
  return (
    <section id="services" className="process-section">
      <div className="container mx-auto">
        <h2>Our Process</h2>
        <p className="subtitle">
          Comprehensive data solutions tailored to your business needs through our proven 3-step methodology
        </p>

        <div className="process-timeline">
          {processSteps.map((step, index) => (
            <div key={step.id} className="process-step">
              <div className="step-number">{index + 1}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
              <ul className="step-details">
                {step.details.map((detail, detailIndex) => (
                  <li key={detailIndex}>{detail}</li>
                ))}
              </ul>
              <span className="week-indicator">{step.week}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
