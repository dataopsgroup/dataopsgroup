import React from 'react';
import OptimizedImage from '@/components/ui/optimized-image';

const DataOpsImplementationDashboardGrid = () => {
  const benefits = [
    {
      title: "System Integration",
      description: "Seamlessly connect all your marketing, sales, and operations tools for unified data flow.",
      image: "/lovable-uploads/28837d83-d40b-49cb-908f-939a6dfb390a.png",
      alt: "System integration workflow diagram"
    },
    {
      title: "Process Automation",
      description: "Eliminate manual tasks with intelligent workflows that scale across your portfolio.",
      image: "/placeholder.svg",
      alt: "Automated process workflow visualization"
    },
    {
      title: "Data Pipeline Management",
      description: "Establish robust data pipelines that ensure accurate, timely information across all systems.",
      image: "/placeholder.svg",
      alt: "Data pipeline architecture diagram"
    },
    {
      title: "Portfolio Standardization",
      description: "Implement consistent processes and metrics across all portfolio companies for better oversight.",
      image: "/placeholder.svg",
      alt: "Portfolio standardization framework"
    },
    {
      title: "Performance Monitoring",
      description: "Real-time visibility into operations performance with automated alerts and reporting.",
      image: "/placeholder.svg",
      alt: "Performance monitoring dashboard"
    },
    {
      title: "Team Training & Adoption",
      description: "Comprehensive training programs that ensure successful adoption and long-term success.",
      image: "/placeholder.svg",
      alt: "Team training session"
    },
    {
      title: "ROI Measurement",
      description: "Clear metrics and KPIs that demonstrate the value and impact of your DataOps investment.",
      image: "/placeholder.svg",
      alt: "ROI measurement analytics"
    },
    {
      title: "Scalable Architecture",
      description: "Future-proof technical architecture that grows with your portfolio expansion plans.",
      image: "/placeholder.svg",
      alt: "Scalable system architecture"
    },
    {
      title: "Compliance & Governance",
      description: "Built-in data governance and compliance frameworks for secure, regulated operations.",
      image: "/placeholder.svg",
      alt: "Compliance and governance framework"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-rubik">
            Transform Your Portfolio Operations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-roboto">
            Our comprehensive DataOps implementation delivers measurable improvements across every aspect of your portfolio operations
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="h-48 overflow-hidden">
                <OptimizedImage
                  src={benefit.image}
                  alt={benefit.alt}
                  className="w-full h-full object-cover"
                  componentType="card"
                  loading={index < 3 ? "eager" : "lazy"}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 font-rubik">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 font-roboto leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DataOpsImplementationDashboardGrid;
