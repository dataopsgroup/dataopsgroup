
import React from 'react';

const DataOpsImplementationDashboardGrid = () => {
  const benefits = [
    {
      title: "Unified Data Pipeline",
      description: "Centralized data collection and processing across all portfolio companies"
    },
    {
      title: "Automated Workflows",
      description: "Streamlined processes that reduce manual work and increase accuracy"
    },
    {
      title: "Real-time Analytics",
      description: "Live dashboards providing instant insights into portfolio performance"
    },
    {
      title: "Process Standardization",
      description: "Consistent operational frameworks across your entire portfolio"
    },
    {
      title: "Performance Monitoring",
      description: "Comprehensive tracking of KPIs and operational metrics"
    },
    {
      title: "Integration Hub",
      description: "Seamless connections between systems and platforms"
    },
    {
      title: "Data Quality Control",
      description: "Automated validation and cleansing of data inputs"
    },
    {
      title: "Scalable Architecture",
      description: "Infrastructure that grows with your portfolio expansion"
    },
    {
      title: "Executive Reporting",
      description: "Board-ready reports and portfolio performance summaries"
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
