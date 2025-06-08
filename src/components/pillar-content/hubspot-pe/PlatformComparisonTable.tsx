
import React from 'react';
import { Check, X, AlertTriangle } from 'lucide-react';

const PlatformComparisonTable = () => {
  const platforms = [
    {
      name: "HubSpot",
      pricing: "$45-180/user/month",
      peScore: 95,
      color: "dataops"
    },
    {
      name: "Salesforce",
      pricing: "$150-300/user/month",
      peScore: 75,
      color: "blue"
    },
    {
      name: "MSDynamics",
      pricing: "$95-210/user/month", 
      peScore: 65,
      color: "purple"
    },
    {
      name: "Pipedrive",
      pricing: "$15-99/user/month",
      peScore: 45,
      color: "green"
    }
  ];

  const criteria = [
    {
      category: "Multi-Entity Support",
      hubspot: "native",
      salesforce: "partial",
      dynamics: "partial", 
      pipedrive: "none",
      weight: "Critical"
    },
    {
      category: "PE Reporting Templates",
      hubspot: "native",
      salesforce: "custom",
      dynamics: "custom",
      pipedrive: "none",
      weight: "Critical"
    },
    {
      category: "Implementation Speed",
      hubspot: "100 days",
      salesforce: "6-12 months",
      dynamics: "9-18 months",
      pipedrive: "30-60 days",
      weight: "High"
    },
    {
      category: "User Adoption Rate",
      hubspot: "85%+",
      salesforce: "60-70%",
      dynamics: "55-65%",
      pipedrive: "75-80%",
      weight: "High"
    },
    {
      category: "Integration Ecosystem",
      hubspot: "1000+ native",
      salesforce: "5000+ apps",
      dynamics: "800+ apps",
      pipedrive: "300+ apps",
      weight: "Medium"
    },
    {
      category: "Total Cost of Ownership",
      hubspot: "$180K/year",
      salesforce: "$450K/year",
      dynamics: "$380K/year",
      pipedrive: "$120K/year",
      weight: "High"
    }
  ];

  const getStatusIcon = (value: string, category: string) => {
    if (category === "Multi-Entity Support" || category === "PE Reporting Templates") {
      if (value === "native") return <Check className="h-5 w-5 text-green-600" />;
      if (value === "partial" || value === "custom") return <AlertTriangle className="h-5 w-5 text-yellow-600" />;
      if (value === "none") return <X className="h-5 w-5 text-red-600" />;
    }
    return null;
  };

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-dataops-900">
            Platform Comparison: PE Requirements
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            We evaluated the top CRM platforms against private equity operational requirements. 
            Here's how they stack up for multi-company portfolio management.
          </p>
        </div>

        {/* PE Scores Overview */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {platforms.map((platform, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{platform.name}</h3>
              <div className="text-sm text-gray-600 mb-3">{platform.pricing}</div>
              <div className="mb-3">
                <div className={`text-2xl font-bold ${platform.name === 'HubSpot' ? 'text-dataops-600' : 'text-gray-600'}`}>
                  {platform.peScore}/100
                </div>
                <div className="text-xs text-gray-500">PE Readiness Score</div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className={`h-2 rounded-full ${platform.name === 'HubSpot' ? 'bg-dataops-600' : 'bg-gray-400'}`}
                  style={{ width: `${platform.peScore}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Comparison Table */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-dataops-900 text-white">
                  <th className="text-left p-4 font-semibold">Requirement</th>
                  <th className="text-left p-4 font-semibold">Weight</th>
                  <th className="text-left p-4 font-semibold">HubSpot</th>
                  <th className="text-left p-4 font-semibold">Salesforce</th>
                  <th className="text-left p-4 font-semibold">Dynamics</th>
                  <th className="text-left p-4 font-semibold">Pipedrive</th>
                </tr>
              </thead>
              <tbody>
                {criteria.map((row, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="p-4 font-medium text-gray-900">{row.category}</td>
                    <td className="p-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        row.weight === 'Critical' ? 'bg-red-100 text-red-800' :
                        row.weight === 'High' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {row.weight}
                      </span>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center space-x-2">
                        {getStatusIcon(row.hubspot, row.category)}
                        <span className="font-medium text-dataops-700">{row.hubspot}</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center space-x-2">
                        {getStatusIcon(row.salesforce, row.category)}
                        <span>{row.salesforce}</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center space-x-2">
                        {getStatusIcon(row.dynamics, row.category)}
                        <span>{row.dynamics}</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center space-x-2">
                        {getStatusIcon(row.pipedrive, row.category)}
                        <span>{row.pipedrive}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Winner Callout */}
        <div className="mt-12 bg-dataops-50 border border-dataops-100 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-dataops-900 mb-4">
            🏆 Why HubSpot Leads for PE Operations
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div>
              <h4 className="font-semibold text-dataops-800 mb-2">Native Multi-Entity</h4>
              <p className="text-sm text-gray-700">
                Built-in support for managing multiple companies under one platform without complex workarounds.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-dataops-800 mb-2">Fastest ROI</h4>
              <p className="text-sm text-gray-700">
                100-day implementation with immediate value delivery, not the 6-18 month nightmares of enterprise CRMs.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-dataops-800 mb-2">PE-Optimized</h4>
              <p className="text-sm text-gray-700">
                Purpose-built reporting and analytics designed for the metrics that matter to investors and operators.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformComparisonTable;
