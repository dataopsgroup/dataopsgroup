
import React from 'react';

const DataOpsImplementationDashboardGrid = () => {
  const benefits = [
    {
      title: "Unified Data Pipeline",
      description: "Centralized data collection and processing across all portfolio companies",
      image: "/lovable-uploads/5f3a8bdf-410e-4727-8fa0-eb20abe91242.png"
    },
    {
      title: "Automated Workflows",
      description: "Streamlined processes that reduce manual work and increase accuracy",
      image: "/lovable-uploads/9b9f1c84-13af-4551-96d5-b7a930f008cf.png"
    },
    {
      title: "Real-time Analytics",
      description: "Live dashboards providing instant insights into portfolio performance",
      image: "/lovable-uploads/2fc3d3e7-168d-4f40-b0c2-cc1e9605353e.png"
    },
    {
      title: "Process Standardization",
      description: "Consistent operational frameworks across your entire portfolio",
      image: "/lovable-uploads/5f3a8bdf-410e-4727-8fa0-eb20abe91242.png"
    },
    {
      title: "Performance Monitoring",
      description: "Comprehensive tracking of KPIs and operational metrics",
      image: "/lovable-uploads/9b9f1c84-13af-4551-96d5-b7a930f008cf.png"
    },
    {
      title: "Integration Hub",
      description: "Seamless connections between systems and platforms",
      image: "/lovable-uploads/2fc3d3e7-168d-4f40-b0c2-cc1e9605353e.png"
    },
    {
      title: "Data Quality Control",
      description: "Automated validation and cleansing of data inputs",
      image: "/lovable-uploads/5f3a8bdf-410e-4727-8fa0-eb20abe91242.png"
    },
    {
      title: "Scalable Architecture",
      description: "Infrastructure that grows with your portfolio expansion",
      image: "/lovable-uploads/9b9f1c84-13af-4551-96d5-b7a930f008cf.png"
    },
    {
      title: "Executive Reporting",
      description: "Board-ready reports and portfolio performance summaries",
      image: "/lovable-uploads/2fc3d3e7-168d-4f40-b0c2-cc1e9605353e.png"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-rubik">
              DataOps Benefits for Portfolio Companies
            </h2>
            <p className="text-lg text-gray-600 font-roboto">
              Comprehensive solutions that drive operational excellence across your investments
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6">
                <div className="mb-4">
                  <img
                    src={benefit.image}
                    alt={benefit.title}
                    className="w-full h-48 object-cover rounded-lg"
                    loading="lazy"
                    onError={(e) => {
                      console.warn(`Failed to load image: ${benefit.image}`);
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 font-rubik">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 font-roboto">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataOpsImplementationDashboardGrid;
