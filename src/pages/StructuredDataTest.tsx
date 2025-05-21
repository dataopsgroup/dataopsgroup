
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import SemanticLayout from '@/components/layout/SemanticLayout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { AlertCircle, CheckCircle, ExternalLink } from 'lucide-react';

const StructuredDataTest = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'https://dataopsgroup.com';

  // Define the pages with schema implementations
  const pagesWithSchema = [
    { name: "Homepage", path: "/", schemas: ["WebSite", "Organization"] },
    { name: "Leadership", path: "/leadership", schemas: ["Person", "BreadcrumbList"] },
    { name: "Services", path: "/services", schemas: ["Service", "BreadcrumbList"] },
    { name: "Analytics & BI", path: "/services/analytics-bi", schemas: ["Service", "BreadcrumbList"] },
    { name: "DataOps Implementation", path: "/services/dataops-implementation", schemas: ["Service", "BreadcrumbList"] },
    { name: "Marketing Operations", path: "/services/marketing-operations-revops", schemas: ["Service", "BreadcrumbList"] },
    { name: "Blog List", path: "/insights", schemas: ["CollectionPage", "BreadcrumbList"] },
    { name: "Case Studies", path: "/case-studies", schemas: ["CollectionPage", "BreadcrumbList"] },
    { name: "Contact", path: "/contact", schemas: ["ContactPage", "BreadcrumbList"] },
    { name: "FAQs", path: "/faqs", schemas: ["FAQPage", "BreadcrumbList"] }
  ];

  // List of all schema components used
  const schemaComponents = [
    { name: "WebsiteSchema", path: "src/components/seo/WebsiteSchema.tsx", description: "Website information and search functionality" },
    { name: "OrganizationSchema", path: "src/components/seo/OrganizationSchema.tsx", description: "Company details and social profiles" },
    { name: "PersonSchema", path: "src/components/seo/PersonSchema.tsx", description: "Team member information" },
    { name: "ServiceSchema", path: "src/components/seo/ServiceSchema.tsx", description: "Service offerings details" },
    { name: "BreadcrumbSchema", path: "src/components/seo/BreadcrumbSchema.tsx", description: "Navigation hierarchy for pages" },
    { name: "ProductSchema", path: "src/components/seo/ProductSchema.tsx", description: "Product information and offers" },
    { name: "BlogPostSchema", path: "src/components/seo/BlogPostSchema.tsx", description: "Blog article metadata" },
    { name: "FAQPageSchema", path: "src/components/seo/FAQPageSchema.tsx", description: "Frequently asked questions" }
  ];

  // Common issues with structured data
  const commonIssues = [
    { 
      name: "Missing required fields", 
      description: "Some schema types require specific properties that might be missing", 
      severity: "error",
      solution: "Review schema.org documentation for required properties and ensure all are included"
    },
    { 
      name: "Invalid URLs", 
      description: "URLs in the schema may be incorrect or malformed", 
      severity: "error",
      solution: "Ensure all URLs are absolute and properly formatted"
    },
    { 
      name: "Duplicate IDs", 
      description: "Multiple schema items with the same @id", 
      severity: "warning",
      solution: "Make sure each schema item has a unique ID when referenced across the site"
    },
    { 
      name: "Image dimensions missing", 
      description: "Image objects should specify width and height", 
      severity: "warning",
      solution: "Add width and height properties to all ImageObject items"
    },
    { 
      name: "Inconsistent organization information", 
      description: "Different pages may have inconsistent organization details", 
      severity: "warning",
      solution: "Use a consistent organization schema across all pages"
    }
  ];

  const testUrl = (path: string) => {
    const fullUrl = `${baseUrl}${path}`;
    window.open(`https://search.google.com/test/rich-results?url=${encodeURIComponent(fullUrl)}`, '_blank');
  };

  return (
    <SemanticLayout>
      <Helmet>
        <title>Structured Data Test - DataOps Group Admin</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      
      <div className="container mx-auto px-[5%] pt-32 pb-16">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Structured Data Test Suite</h1>
          <Button
            variant="outline"
            onClick={() => window.open('https://search.google.com/test/rich-results', '_blank')}
            className="flex items-center gap-2"
          >
            <ExternalLink size={16} />
            Google Rich Results Test
          </Button>
        </div>

        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">How to Test Structured Data</h2>
          <ol className="list-decimal pl-6 space-y-3">
            <li>Click on any page link below to test its structured data using Google's Rich Results Test</li>
            <li>Or go directly to <a href="https://search.google.com/test/rich-results" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Google's Rich Results Test</a></li>
            <li>Enter the full URL of any page on your site</li>
            <li>Review the detected structured data, errors, and warnings</li>
            <li>Use the Schema Components tab to find and update schema implementations</li>
          </ol>
        </div>
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="w-full justify-start mb-6">
            <TabsTrigger value="overview">Pages Overview</TabsTrigger>
            <TabsTrigger value="components">Schema Components</TabsTrigger>
            <TabsTrigger value="issues">Common Issues</TabsTrigger>
            <TabsTrigger value="validator">Schema Validator</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="p-4 border rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Pages with Structured Data</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="text-left p-3 border">Page</th>
                    <th className="text-left p-3 border">Path</th>
                    <th className="text-left p-3 border">Schema Types</th>
                    <th className="text-right p-3 border">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {pagesWithSchema.map((page, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="p-3 border">{page.name}</td>
                      <td className="p-3 border">{page.path}</td>
                      <td className="p-3 border">
                        {page.schemas.map((schema) => (
                          <span key={schema} className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded mr-2 mb-1">
                            {schema}
                          </span>
                        ))}
                      </td>
                      <td className="p-3 border text-right">
                        <Button 
                          variant="ghost" 
                          onClick={() => testUrl(page.path)}
                          className="text-sm h-8"
                        >
                          Test
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </TabsContent>
          
          <TabsContent value="components" className="p-4 border rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Schema Components</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="text-left p-3 border">Component</th>
                    <th className="text-left p-3 border">Path</th>
                    <th className="text-left p-3 border">Description</th>
                  </tr>
                </thead>
                <tbody>
                  {schemaComponents.map((component, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="p-3 border font-medium">{component.name}</td>
                      <td className="p-3 border text-sm font-mono">{component.path}</td>
                      <td className="p-3 border">{component.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </TabsContent>
          
          <TabsContent value="issues" className="p-4 border rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Common Structured Data Issues</h2>
            <div className="space-y-4">
              {commonIssues.map((issue, index) => (
                <div key={index} className="p-4 border rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    {issue.severity === 'error' ? (
                      <AlertCircle className="text-red-500" />
                    ) : (
                      <AlertCircle className="text-amber-500" />
                    )}
                    <h3 className="text-lg font-medium">
                      {issue.name}
                      <span className={`ml-2 text-xs px-2 py-1 rounded ${
                        issue.severity === 'error' ? 'bg-red-100 text-red-800' : 'bg-amber-100 text-amber-800'
                      }`}>
                        {issue.severity}
                      </span>
                    </h3>
                  </div>
                  <p className="text-gray-700 mb-2">{issue.description}</p>
                  <div className="bg-gray-50 p-3 rounded">
                    <span className="font-medium">Solution: </span>
                    {issue.solution}
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="validator" className="p-4 border rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Schema Validator</h2>
            <div className="mb-6">
              <p className="mb-4">
                Use these tools to validate and test your structured data:
              </p>
              <div className="space-y-4">
                <div className="p-4 border rounded-lg flex items-start gap-4">
                  <div className="flex-grow">
                    <h3 className="font-medium mb-1">Google Rich Results Test</h3>
                    <p className="text-sm text-gray-600 mb-2">
                      Tests if your page is eligible for rich results in Google Search
                    </p>
                  </div>
                  <Button 
                    onClick={() => window.open('https://search.google.com/test/rich-results', '_blank')}
                    className="flex items-center gap-2"
                  >
                    <ExternalLink size={16} />
                    Open Tool
                  </Button>
                </div>
                
                <div className="p-4 border rounded-lg flex items-start gap-4">
                  <div className="flex-grow">
                    <h3 className="font-medium mb-1">Schema.org Validator</h3>
                    <p className="text-sm text-gray-600 mb-2">
                      Validates schema markup against the schema.org vocabulary
                    </p>
                  </div>
                  <Button 
                    variant="outline"
                    onClick={() => window.open('https://validator.schema.org/', '_blank')}
                    className="flex items-center gap-2"
                  >
                    <ExternalLink size={16} />
                    Open Tool
                  </Button>
                </div>
                
                <div className="p-4 border rounded-lg flex items-start gap-4">
                  <div className="flex-grow">
                    <h3 className="font-medium mb-1">JSON-LD Playground</h3>
                    <p className="text-sm text-gray-600 mb-2">
                      Test and visualize your JSON-LD structured data
                    </p>
                  </div>
                  <Button 
                    variant="outline"
                    onClick={() => window.open('https://json-ld.org/playground/', '_blank')}
                    className="flex items-center gap-2"
                  >
                    <ExternalLink size={16} />
                    Open Tool
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </SemanticLayout>
  );
};

export default StructuredDataTest;
