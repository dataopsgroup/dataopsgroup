
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp, CheckCircle } from 'lucide-react';

const PEProgramDetails = () => {
  const [expandedPhase, setExpandedPhase] = useState<number | null>(0);

  const phases = [
    {
      title: "Phase 1: Foundation and Quick Wins",
      subtitle: "Days 1-30",
      tagline: "Get immediate momentum while building systematic excellence",
      weeks: [
        {
          title: "Week 1-2: Strategic Assessment",
          items: [
            "Operational Systems Audit: Complete evaluation of current tech stack, data quality, and process efficiency",
            "Value Creation Roadmap: Customized 18-month transformation plan with prioritized initiatives",
            "Quick Win Identification: Immediate improvements that show early ROI",
            "Team Capability Assessment: Skills gap analysis and training requirements"
          ],
          deliverables: [
            "Executive Assessment Report with complexity scoring",
            "100-Day Implementation Roadmap",
            "Value Creation Opportunity Analysis ($MM impact projections)",
            "Resource Requirements and Timeline"
          ]
        },
        {
          title: "Week 3-4: Foundation Setup",
          items: [
            "Data Architecture Design: Unified data model that supports growth and reporting",
            "Critical Process Mapping: Document and optimize highest-impact workflows",
            "Integration Planning: Connect disparate systems for single source of truth",
            "Governance Framework: Establish data quality and process standards"
          ],
          deliverables: [
            "Technical Architecture Blueprint",
            "Process Standardization Framework",
            "Integration Specification Document",
            "Data Quality Scorecard (baseline metrics)"
          ]
        }
      ]
    },
    {
      title: "Phase 2: Core Implementation",
      subtitle: "Days 31-70",
      tagline: "Build the operational foundation that drives value creation",
      weeks: [
        {
          title: "Week 5-8: System Unification",
          items: [
            "HubSpot Configuration: Industry-specific setup optimized for your business model",
            "Data Migration and Cleanup: Clean, standardized data with quality validation",
            "Process Automation: Eliminate manual work and reduce human error",
            "Reporting Infrastructure: Real-time dashboards for operational visibility"
          ],
          deliverables: [
            "Fully Configured HubSpot Environment",
            "Automated Workflow Documentation",
            "Executive Dashboard Suite",
            "Data Quality Improvement Report (before/after metrics)"
          ]
        },
        {
          title: "Week 9-10: Integration and Testing",
          items: [
            "System Integrations: Connect HubSpot with existing business-critical systems",
            "User Acceptance Testing: Validate functionality with actual business scenarios",
            "Performance Optimization: Fine-tune for speed and reliability",
            "Security and Compliance: Ensure data protection and regulatory compliance"
          ],
          deliverables: [
            "Integration Test Results",
            "Performance Benchmarks",
            "Security Audit Report",
            "User Acceptance Sign-off"
          ]
        }
      ]
    },
    {
      title: "Phase 3: Optimization and Handoff",
      subtitle: "Days 71-100",
      tagline: "Ensure sustainable success and team empowerment",
      weeks: [
        {
          title: "Week 11-12: Team Enablement",
          items: [
            "Role-Based Training: Customized training for different user types and responsibilities",
            "Documentation Package: Comprehensive guides for ongoing system management",
            "Change Management: Adoption strategies and resistance resolution",
            "Power User Development: Build internal expertise for ongoing optimization"
          ],
          deliverables: [
            "Comprehensive Training Documentation",
            "User Adoption Metrics",
            "Internal Capability Assessment",
            "Change Management Success Report"
          ]
        },
        {
          title: "Week 13-14: Performance Validation",
          items: [
            "Results Measurement: Quantify operational improvements and efficiency gains",
            "ROI Documentation: Calculate and document value creation impact",
            "Continuous Improvement Plan: Roadmap for ongoing optimization",
            "Strategic Partnership Transition: Move to 90/10 support model"
          ],
          deliverables: [
            "100-Day Results Report",
            "ROI Analysis and Projections",
            "12-Month Optimization Roadmap",
            "Ongoing Support Framework"
          ]
        }
      ]
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            The 100-Day Program Details
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-6 mb-12">
          {phases.map((phase, phaseIndex) => (
            <div key={phaseIndex} className="bg-white rounded-lg shadow-sm border overflow-hidden">
              <button
                onClick={() => setExpandedPhase(expandedPhase === phaseIndex ? null : phaseIndex)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {phase.title}
                  </h3>
                  <p className="text-dataops-600 font-semibold mb-2">{phase.subtitle}</p>
                  <p className="text-gray-600">{phase.tagline}</p>
                </div>
                {expandedPhase === phaseIndex ? (
                  <ChevronUp className="h-8 w-8 text-gray-400" />
                ) : (
                  <ChevronDown className="h-8 w-8 text-gray-400" />
                )}
              </button>

              {expandedPhase === phaseIndex && (
                <div className="px-6 pb-6 border-t bg-gray-50">
                  {phase.weeks.map((week, weekIndex) => (
                    <div key={weekIndex} className="mt-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">
                        {week.title}
                      </h4>
                      
                      <div className="grid lg:grid-cols-2 gap-6">
                        <div>
                          <h5 className="font-medium text-gray-700 mb-3">Activities:</h5>
                          <ul className="space-y-2">
                            {week.items.map((item, itemIndex) => (
                              <li key={itemIndex} className="text-base text-gray-600 flex items-start">
                                <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h5 className="font-medium text-gray-700 mb-3">Deliverables:</h5>
                          <ul className="space-y-2">
                            {week.deliverables.map((deliverable, delIndex) => (
                              <li key={delIndex} className="text-base text-gray-600 flex items-start">
                                <span className="text-dataops-600 mr-2 mt-0.5 leading-none">•</span>
                                {deliverable}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <Link to="/contact">
            <Button className="bg-saffron-500 hover:bg-saffron-600 text-dataops-950 font-semibold px-8 py-3 text-lg bg-brand-saffron">
              Get Your Custom Assessment
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PEProgramDetails;
