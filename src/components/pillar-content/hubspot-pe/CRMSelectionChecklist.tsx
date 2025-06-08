
import React, { useState } from 'react';
import { Check, X, ChevronDown, ChevronUp } from 'lucide-react';

const CRMSelectionChecklist = () => {
  const [expandedSections, setExpandedSections] = useState<{ [key: string]: boolean }>({});
  const [checkedItems, setCheckedItems] = useState<{ [key: string]: boolean }>({});

  const checklistSections = [
    {
      id: "scalability",
      title: "Portfolio Scalability Requirements",
      items: [
        { id: "multi-entity", text: "Supports multiple business entities under one license", critical: true },
        { id: "user-scaling", text: "Can add unlimited users across portfolio companies", critical: true },
        { id: "data-isolation", text: "Maintains data separation between portfolio companies", critical: true },
        { id: "template-deployment", text: "Enables template-based deployment to new acquisitions", critical: false }
      ]
    },
    {
      id: "reporting",
      title: "Investor-Grade Reporting",
      items: [
        { id: "consolidated-reporting", text: "Generates consolidated portfolio reports", critical: true },
        { id: "real-time-dashboards", text: "Provides real-time KPI dashboards", critical: true },
        { id: "custom-metrics", text: "Supports custom PE metrics and calculations", critical: false },
        { id: "automated-reporting", text: "Automates monthly/quarterly investor reports", critical: false }
      ]
    },
    {
      id: "integration",
      title: "Systems Integration Capabilities",
      items: [
        { id: "accounting-integration", text: "Integrates with QuickBooks, NetSuite, and other accounting systems", critical: true },
        { id: "api-access", text: "Provides robust API for custom integrations", critical: false },
        { id: "data-warehousing", text: "Connects to business intelligence platforms", critical: false },
        { id: "marketing-automation", text: "Includes marketing automation capabilities", critical: false }
      ]
    },
    {
      id: "security",
      title: "Enterprise Security & Compliance",
      items: [
        { id: "soc2-compliance", text: "SOC 2 Type II certified", critical: true },
        { id: "role-based-access", text: "Granular role-based access controls", critical: true },
        { id: "audit-trail", text: "Complete audit trail for all data changes", critical: true },
        { id: "data-encryption", text: "End-to-end data encryption", critical: true }
      ]
    },
    {
      id: "support",
      title: "Implementation & Support",
      items: [
        { id: "pe-experience", text: "Vendor has proven PE implementation experience", critical: true },
        { id: "dedicated-support", text: "Dedicated customer success manager", critical: false },
        { id: "training-programs", text: "Comprehensive training programs available", critical: false },
        { id: "implementation-timeline", text: "Can complete implementation within 100 days", critical: true }
      ]
    }
  ];

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const toggleItem = (itemId: string) => {
    setCheckedItems(prev => ({
      ...prev,
      [itemId]: !prev[itemId]
    }));
  };

  const getTotalItems = () => {
    return checklistSections.reduce((total, section) => total + section.items.length, 0);
  };

  const getCheckedItems = () => {
    return Object.values(checkedItems).filter(Boolean).length;
  };

  const getCriticalItemsChecked = () => {
    let total = 0;
    let checked = 0;
    checklistSections.forEach(section => {
      section.items.forEach(item => {
        if (item.critical) {
          total++;
          if (checkedItems[item.id]) checked++;
        }
      });
    });
    return { checked, total };
  };

  const progress = (getCheckedItems() / getTotalItems()) * 100;
  const criticalProgress = getCriticalItemsChecked();

  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-dataops-900">
            PE CRM Selection Checklist
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
            Use this comprehensive checklist to evaluate CRM platforms for your portfolio. 
            Critical items are marked with red indicators - these are non-negotiable for PE operations.
          </p>
          
          {/* Progress Indicators */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-dataops-50 border border-dataops-100 rounded-lg p-4">
              <div className="text-2xl font-bold text-dataops-600">{getCheckedItems()}/{getTotalItems()}</div>
              <div className="text-sm text-gray-600">Total Items Completed</div>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                <div className="bg-dataops-600 h-2 rounded-full transition-all duration-300" style={{ width: `${progress}%` }}></div>
              </div>
            </div>
            
            <div className="bg-red-50 border border-red-100 rounded-lg p-4">
              <div className="text-2xl font-bold text-red-600">{criticalProgress.checked}/{criticalProgress.total}</div>
              <div className="text-sm text-gray-600">Critical Requirements Met</div>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                <div className="bg-red-600 h-2 rounded-full transition-all duration-300" style={{ width: `${(criticalProgress.checked / criticalProgress.total) * 100}%` }}></div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {checklistSections.map((section) => (
            <div key={section.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 flex items-center justify-between transition-colors"
              >
                <h3 className="text-lg font-semibold text-dataops-900">{section.title}</h3>
                {expandedSections[section.id] ? 
                  <ChevronUp className="h-5 w-5 text-gray-500" /> : 
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                }
              </button>
              
              {expandedSections[section.id] && (
                <div className="p-6">
                  <div className="space-y-3">
                    {section.items.map((item) => (
                      <label key={item.id} className="flex items-start space-x-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={checkedItems[item.id] || false}
                          onChange={() => toggleItem(item.id)}
                          className="mt-1 h-5 w-5 text-dataops-600 rounded focus:ring-dataops-500"
                        />
                        <div className="flex-1">
                          <span className="text-gray-900">{item.text}</span>
                          {item.critical && (
                            <span className="ml-2 inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                              Critical
                            </span>
                          )}
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* HubSpot CTA */}
        <div className="mt-12 bg-dataops-50 border border-dataops-100 rounded-lg p-8 text-center">
          <h3 className="text-xl font-semibold text-dataops-900 mb-4">
            How Does HubSpot Score?
          </h3>
          <p className="text-gray-700 mb-6">
            HubSpot meets 100% of critical requirements and 95% of all checklist items. 
            See our detailed platform comparison to understand why PE firms choose HubSpot.
          </p>
          <button className="bg-dataops-600 hover:bg-dataops-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            View Platform Comparison
          </button>
        </div>
      </div>
    </section>
  );
};

export default CRMSelectionChecklist;
