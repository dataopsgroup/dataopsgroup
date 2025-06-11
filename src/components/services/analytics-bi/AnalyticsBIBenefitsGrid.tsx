
import React from 'react';
import { BarChart3, TrendingUp, Database, FileText, Target, Users } from 'lucide-react';

const AnalyticsBIBenefitsGrid = () => {
  const benefits = [
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Real-time Dashboards",
      description: "Get instant visibility into your key metrics with automated reporting that updates in real-time."
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Predictive Analytics",
      description: "Identify trends and patterns before they impact your business with advanced analytics capabilities."
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Data Integration",
      description: "Connect all your data sources into a unified view for comprehensive business intelligence."
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Custom Reports",
      description: "Build tailored reports that answer your specific business questions and support decision-making."
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "KPI Tracking",
      description: "Monitor your most important metrics and get alerts when performance deviates from targets."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Team Collaboration",
      description: "Share insights across your organization with role-based access and collaborative features."
    }
  ];

  return (
    <div className="grid md:grid-cols-2 gap-8 mb-12">
      {benefits.map((benefit, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <div className="bg-dataops-100 p-3 rounded-lg mr-4">
              {benefit.icon}
            </div>
            <h3 className="text-lg font-semibold text-gray-900">{benefit.title}</h3>
          </div>
          <p className="text-gray-600">{benefit.description}</p>
        </div>
      ))}
    </div>
  );
};

export default AnalyticsBIBenefitsGrid;
