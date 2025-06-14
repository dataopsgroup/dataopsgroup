import React from 'react';
import OptimizedImage from '@/components/ui/optimized-image';

const DataOpsImplementationDashboardGrid = () => {
  const benefits = [
    {
      title: "System Integration",
      description: "Seamlessly connect all your marketing, sales, and operations tools for unified data flow.",
      image: "/lovable-uploads/971e2c5a-6145-4fc0-b346-e4ba066cb14b.png",
      alt: "System integration workflow diagram"
    },
    {
      title: "Process Automation",
      description: "Eliminate manual tasks with intelligent workflows that scale across your portfolio.",
      image: "/lovable-uploads/ecf81385-597a-42b4-8f0e-3cb361b8d420.png",
      alt: "Business process automation visualization"
    },
    {
      title: "Data Pipeline Management",
      description: "Establish robust data pipelines that ensure accurate, timely information across all systems.",
      image: "/lovable-uploads/afda040d-e439-4d85-9145-c141d60e1c32.png",
      alt: "Data pipeline architecture with code visualization"
    },
    {
      title: "Portfolio Standardization",
      description: "Implement consistent processes and metrics across all portfolio companies for better oversight.",
      image: "/lovable-uploads/c6803bfb-9e91-4904-8fb3-edf7ccd4b54d.png",
      alt: "Portfolio standardization with fiber optic cables"
    },
    {
      title: "Performance Monitoring",
      description: "Real-time visibility into operations performance with automated alerts and reporting.",
      image: "/lovable-uploads/b77d6b08-9ed1-41ce-b4db-e6288df03f24.png",
      alt: "Performance monitoring dashboard with analytics charts"
    },
    {
      title: "Team Training & Adoption",
      description: "Comprehensive training programs that ensure successful adoption and long-term success.",
      image: "/lovable-uploads/e15938f2-ff9b-4355-860d-c5f4cb8fe3d4.png",
      alt: "Team training session with people around a whiteboard"
    },
    {
      title: "ROI Measurement",
      description: "Clear metrics and KPIs that demonstrate the value and impact of your DataOps investment.",
      image: "/lovable-uploads/c4177d71-62e9-4c3c-b270-21923c660b96.png",
      alt: "ROI measurement analytics dashboard with performance charts"
    },
    {
      title: "Scalable Architecture",
      description: "Future-proof technical architecture that grows with your portfolio expansion plans.",
      image: "/lovable-uploads/5520976b-6cd4-4119-995e-1c2a6babcda7.png",
      alt: "Modern server room with scalable infrastructure and red monitoring lights"
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
