
import React from 'react';

const DataOpsImplementationOverview = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 font-rubik">
                Streamlined Portfolio Operations
              </h2>
              <p className="text-gray-700 mb-6 font-roboto leading-relaxed">
                Transform your portfolio companies with standardized DataOps implementation that eliminates operational silos, 
                automates critical workflows, and creates consistent performance metrics across your entire investment portfolio.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-dataops-600 rounded-full mt-2"></div>
                  <p className="text-gray-700">Standardize processes across all portfolio companies</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-dataops-600 rounded-full mt-2"></div>
                  <p className="text-gray-700">Automate data workflows and reduce manual tasks by 60%</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-dataops-600 rounded-full mt-2"></div>
                  <p className="text-gray-700">Create unified reporting and performance dashboards</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-dataops-50 to-white p-8 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Portfolio Impact</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm text-gray-600">Operational Efficiency</span>
                    <span className="text-sm font-medium text-dataops-600">+73%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-dataops-600 h-2 rounded-full" style={{ width: '73%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm text-gray-600">Data Quality</span>
                    <span className="text-sm font-medium text-green-600">+85%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm text-gray-600">Time to Insights</span>
                    <span className="text-sm font-medium text-blue-600">-65%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '65%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataOpsImplementationOverview;
