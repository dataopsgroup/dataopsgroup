
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CheckCircle, XCircle, AlertTriangle, Search, ExternalLink } from 'lucide-react';

interface SchemaIssue {
  type: 'missing' | 'incomplete' | 'invalid' | 'warning';
  page: string;
  schema: string;
  description: string;
  recommendation: string;
  priority: 'high' | 'medium' | 'low';
}

interface SchemaAuditResult {
  totalPages: number;
  pagesWithSchema: number;
  schemaTypes: string[];
  issues: SchemaIssue[];
  coverage: {
    organization: boolean;
    website: boolean;
    breadcrumb: boolean;
    service: boolean;
    faq: boolean;
    article: boolean;
    localBusiness: boolean;
  };
}

const SchemaAuditDashboard = () => {
  const [auditResults, setAuditResults] = useState<SchemaAuditResult | null>(null);
  const [isAuditing, setIsAuditing] = useState(false);
  const [selectedIssue, setSelectedIssue] = useState<SchemaIssue | null>(null);

  const runSchemaAudit = async () => {
    setIsAuditing(true);
    
    // Simulate comprehensive schema audit
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    const mockResults: SchemaAuditResult = {
      totalPages: 48,
      pagesWithSchema: 35,
      schemaTypes: [
        'Organization',
        'WebSite',
        'BreadcrumbList',
        'Service',
        'Article',
        'FAQPage',
        'ProfessionalService'
      ],
      coverage: {
        organization: true,
        website: true,
        breadcrumb: true,
        service: true,
        faq: false, // Missing on some FAQ pages
        article: true,
        localBusiness: false // Missing LocalBusiness schema
      },
      issues: [
        {
          type: 'missing',
          page: '/calculators/bad-data-cost',
          schema: 'WebApplication',
          description: 'Calculator tool missing WebApplication schema',
          recommendation: 'Add WebApplication schema to improve rich snippets for calculator tools',
          priority: 'high'
        },
        {
          type: 'missing',
          page: '/assessment',
          schema: 'Quiz',
          description: 'Assessment tool missing Quiz schema',
          recommendation: 'Implement Quiz schema for better visibility in search results',
          priority: 'high'
        },
        {
          type: 'incomplete',
          page: '/services/analytics-bi',
          schema: 'Service',
          description: 'Service schema missing price range and availability',
          recommendation: 'Add priceRange and areaServed properties to Service schema',
          priority: 'medium'
        },
        {
          type: 'missing',
          page: '/contact',
          schema: 'LocalBusiness',
          description: 'Contact page missing LocalBusiness schema',
          recommendation: 'Add LocalBusiness schema with complete address and contact information',
          priority: 'high'
        },
        {
          type: 'warning',
          page: '/insights/*',
          schema: 'Article',
          description: 'Some blog posts missing structured author information',
          recommendation: 'Ensure all blog posts have complete author schema with credentials',
          priority: 'medium'
        },
        {
          type: 'missing',
          page: '/faqs/services',
          schema: 'FAQPage',
          description: 'FAQ category pages missing FAQPage schema',
          recommendation: 'Implement FAQPage schema on all FAQ category pages',
          priority: 'high'
        },
        {
          type: 'incomplete',
          page: '/',
          schema: 'Organization',
          description: 'Organization schema missing founding date and employee count',
          recommendation: 'Add foundingDate and numberOfEmployees to enhance credibility',
          priority: 'low'
        },
        {
          type: 'missing',
          page: '/case-studies/*',
          schema: 'CaseStudy',
          description: 'Case studies missing structured data',
          recommendation: 'Create custom CaseStudy schema or use Article with case study properties',
          priority: 'medium'
        }
      ]
    };
    
    setAuditResults(mockResults);
    setIsAuditing(false);
  };

  const getIssueIcon = (type: SchemaIssue['type']) => {
    switch (type) {
      case 'missing':
        return <XCircle className="h-4 w-4 text-red-500" />;
      case 'incomplete':
        return <AlertTriangle className="h-4 w-4 text-yellow-500" />;
      case 'invalid':
        return <XCircle className="h-4 w-4 text-red-600" />;
      case 'warning':
        return <AlertTriangle className="h-4 w-4 text-orange-500" />;
      default:
        return <AlertTriangle className="h-4 w-4 text-gray-500" />;
    }
  };

  const getPriorityColor = (priority: SchemaIssue['priority']) => {
    switch (priority) {
      case 'high':
        return 'bg-red-100 text-red-800';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'low':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const groupedIssues = auditResults?.issues.reduce((acc, issue) => {
    if (!acc[issue.priority]) acc[issue.priority] = [];
    acc[issue.priority].push(issue);
    return acc;
  }, {} as Record<string, SchemaIssue[]>) || {};

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Schema Markup Audit</h1>
          <p className="text-gray-600 mt-1">Comprehensive analysis of structured data implementation</p>
        </div>
        <Button 
          onClick={runSchemaAudit}
          disabled={isAuditing}
          className="flex items-center gap-2"
        >
          <Search className="h-4 w-4" />
          {isAuditing ? 'Auditing...' : 'Run Schema Audit'}
        </Button>
      </div>

      {auditResults && (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-6">
              <div className="text-2xl font-bold text-green-600">{auditResults.pagesWithSchema}</div>
              <div className="text-sm text-gray-600">Pages with Schema</div>
              <div className="text-xs text-gray-500">of {auditResults.totalPages} total</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="text-2xl font-bold text-blue-600">{auditResults.schemaTypes.length}</div>
              <div className="text-sm text-gray-600">Schema Types</div>
              <div className="text-xs text-gray-500">implemented</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="text-2xl font-bold text-red-600">
                {auditResults.issues.filter(i => i.priority === 'high').length}
              </div>
              <div className="text-sm text-gray-600">High Priority</div>
              <div className="text-xs text-gray-500">issues found</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="text-2xl font-bold text-yellow-600">
                {auditResults.issues.filter(i => i.priority === 'medium').length}
              </div>
              <div className="text-sm text-gray-600">Medium Priority</div>
              <div className="text-xs text-gray-500">issues found</div>
            </CardContent>
          </Card>
        </div>
      )}

      {auditResults && (
        <Tabs defaultValue="issues" className="space-y-4">
          <TabsList>
            <TabsTrigger value="issues">Issues & Recommendations</TabsTrigger>
            <TabsTrigger value="coverage">Schema Coverage</TabsTrigger>
            <TabsTrigger value="implementation">Implementation Guide</TabsTrigger>
          </TabsList>

          <TabsContent value="issues" className="space-y-4">
            {['high', 'medium', 'low'].map(priority => (
              groupedIssues[priority] && (
                <Card key={priority}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      {priority.charAt(0).toUpperCase() + priority.slice(1)} Priority Issues
                      <Badge className={getPriorityColor(priority as SchemaIssue['priority'])}>
                        {groupedIssues[priority].length} issues
                      </Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {groupedIssues[priority].map((issue, index) => (
                        <div key={index} className="p-4 border rounded-lg hover:bg-gray-50 cursor-pointer"
                             onClick={() => setSelectedIssue(issue)}>
                          <div className="flex items-start gap-3">
                            {getIssueIcon(issue.type)}
                            <div className="flex-1">
                              <div className="font-medium text-gray-900">{issue.schema} - {issue.page}</div>
                              <div className="text-sm text-gray-600 mt-1">{issue.description}</div>
                              <div className="text-sm text-blue-600 mt-2">{issue.recommendation}</div>
                            </div>
                            <ExternalLink className="h-4 w-4 text-gray-400" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )
            ))}
          </TabsContent>

          <TabsContent value="coverage" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Schema Type Coverage</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {Object.entries(auditResults.coverage).map(([schema, implemented]) => (
                    <div key={schema} className="flex items-center gap-2 p-3 border rounded-lg">
                      {implemented ? (
                        <CheckCircle className="h-5 w-5 text-green-500" />
                      ) : (
                        <XCircle className="h-5 w-5 text-red-500" />
                      )}
                      <span className="font-medium capitalize">{schema.replace(/([A-Z])/g, ' $1').trim()}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="implementation" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Next Steps for Implementation</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                    <h4 className="font-semibold text-red-800">Immediate Actions (High Priority)</h4>
                    <ul className="mt-2 space-y-1 text-sm text-red-700">
                      <li>• Add WebApplication schema to calculator tools</li>
                      <li>• Implement Quiz schema for assessment pages</li>
                      <li>• Add LocalBusiness schema to contact page</li>
                      <li>• Fix missing FAQPage schema on FAQ categories</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <h4 className="font-semibold text-yellow-800">Secondary Improvements (Medium Priority)</h4>
                    <ul className="mt-2 space-y-1 text-sm text-yellow-700">
                      <li>• Enhance Service schema with pricing information</li>
                      <li>• Add structured data to case studies</li>
                      <li>• Complete author information in article schema</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                    <h4 className="font-semibold text-green-800">Enhancement Opportunities (Low Priority)</h4>
                    <ul className="mt-2 space-y-1 text-sm text-green-700">
                      <li>• Add founding date and employee count to Organization schema</li>
                      <li>• Implement review/rating schema where applicable</li>
                      <li>• Add product schema for service offerings</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      )}
    </div>
  );
};

export default SchemaAuditDashboard;
