
import React from 'react';
import { Search, Wrench, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const processSteps = [
  {
    id: "deep-audit",
    icon: <Search className="h-10 w-10 text-white" />,
    title: 'Deep Audit (Week 1)',
    description: 'We analyze your data quality, workflow efficiency, and team processes to identify exactly what\'s killing your ROI.',
    gradient: 'from-purple-500 to-purple-600'
  },
  {
    id: "strategic-fix",
    icon: <Wrench className="h-10 w-10 text-white" />,
    title: 'Strategic Fix (Week 2)',
    description: 'We implement the critical changes needed to stop revenue leaks and get your teams aligned.',
    gradient: 'from-green-500 to-green-600'
  },
  {
    id: "optimization-training",
    icon: <TrendingUp className="h-10 w-10 text-white" />,
    title: 'Optimization & Training (Week 3)',
    description: 'We fine-tune performance and ensure your team can maintain the improvements long-term.',
    gradient: 'from-amber-500 to-amber-600'
  }
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dataops-600">
            Our Process
          </h2>
          <p className="text-lg text-gray-600">
            Comprehensive data solutions tailored to your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {processSteps.map((step, index) => (
            <Card key={index} className={`border-0 overflow-hidden h-full bg-gradient-to-br ${step.gradient} text-white hover:shadow-xl transition-shadow`}>
              <CardHeader>
                <div className="mb-4">{step.icon}</div>
                <CardTitle className="text-xl font-semibold text-white">{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-white/90">{step.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
