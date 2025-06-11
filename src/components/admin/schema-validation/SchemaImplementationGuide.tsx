
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CheckCircle, Copy, ExternalLink, Code } from 'lucide-react';

const SchemaImplementationGuide: React.FC = () => {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const webApplicationSchema = `{
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Bad Data Cost Calculator",
  "description": "Calculate the financial impact of poor data quality on your business",
  "url": "https://dataopsgroup.com/bad-data-cost-calculator",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web",
  "provider": {
    "@type": "Organization",
    "name": "DataOps Group",
    "url": "https://dataopsgroup.com"
  },
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  }
}`;

  const quizSchema = `{
  "@context": "https://schema.org",
  "@type": "Quiz",
  "name": "HubSpot DataOps Assessment",
  "description": "Assess your organization's data operations maturity",
  "about": "Data Operations and HubSpot Implementation",
  "educationalAlignment": "Professional Development",
  "provider": {
    "@type": "Organization",
    "name": "DataOps Group"
  },
  "timeRequired": "PT10M"
}`;

  const localBusinessSchema = `{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://dataopsgroup.com/#organization",
  "name": "DataOps Group",
  "description": "HubSpot consulting and data operations expertise",
  "url": "https://dataopsgroup.com",
  "telephone": "+1-XXX-XXX-XXXX",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Your City",
    "addressRegion": "State",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "XX.XXXXX",
    "longitude": "-XX.XXXXX"
  },
  "openingHours": "Mo-Fr 09:00-17:00",
  "areaServed": "United States"
}`;

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Schema Implementation Guide</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="calculator" className="space-y-4">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="calculator">Calculator Tools</TabsTrigger>
              <TabsTrigger value="assessment">Assessments</TabsTrigger>
              <TabsTrigger value="contact">Contact Pages</TabsTrigger>
              <TabsTrigger value="implementation">Implementation</TabsTrigger>
            </TabsList>

            <TabsContent value="calculator" className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">WebApplication Schema</h3>
                  <Badge variant="outline">High Priority</Badge>
                </div>
                <p className="text-sm text-gray-600">
                  Calculator tools should implement WebApplication schema to improve rich snippets and search visibility.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">JSON-LD Schema</span>
                    <Button 
                      size="sm" 
                      variant="outline"
                      onClick={() => copyToClipboard(webApplicationSchema)}
                    >
                      <Copy className="h-3 w-3 mr-1" />
                      Copy
                    </Button>
                  </div>
                  <pre className="text-xs overflow-x-auto">{webApplicationSchema}</pre>
                </div>
                <div className="flex items-center gap-2 text-sm text-blue-600">
                  <CheckCircle className="h-4 w-4" />
                  Apply to: /bad-data-cost-calculator, /revops-roi-calculator
                </div>
              </div>
            </TabsContent>

            <TabsContent value="assessment" className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">Quiz Schema</h3>
                  <Badge variant="outline">High Priority</Badge>
                </div>
                <p className="text-sm text-gray-600">
                  Assessment tools benefit from Quiz schema for better educational content categorization.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">JSON-LD Schema</span>
                    <Button 
                      size="sm" 
                      variant="outline"
                      onClick={() => copyToClipboard(quizSchema)}
                    >
                      <Copy className="h-3 w-3 mr-1" />
                      Copy
                    </Button>
                  </div>
                  <pre className="text-xs overflow-x-auto">{quizSchema}</pre>
                </div>
                <div className="flex items-center gap-2 text-sm text-blue-600">
                  <CheckCircle className="h-4 w-4" />
                  Apply to: /hubspot-assessment, /assessment pages
                </div>
              </div>
            </TabsContent>

            <TabsContent value="contact" className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">LocalBusiness Schema</h3>
                  <Badge variant="outline">High Priority</Badge>
                </div>
                <p className="text-sm text-gray-600">
                  Contact pages should include LocalBusiness schema for better local SEO and business information display.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">JSON-LD Schema</span>
                    <Button 
                      size="sm" 
                      variant="outline"
                      onClick={() => copyToClipboard(localBusinessSchema)}
                    >
                      <Copy className="h-3 w-3 mr-1" />
                      Copy
                    </Button>
                  </div>
                  <pre className="text-xs overflow-x-auto">{localBusinessSchema}</pre>
                </div>
                <div className="flex items-center gap-2 text-sm text-blue-600">
                  <CheckCircle className="h-4 w-4" />
                  Apply to: /contact, business location pages
                </div>
              </div>
            </TabsContent>

            <TabsContent value="implementation" className="space-y-4">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Implementation Steps</h3>
                
                <div className="space-y-3">
                  <div className="p-4 border rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Code className="h-4 w-4 text-blue-600" />
                      <span className="font-medium">Step 1: Create Schema Components</span>
                    </div>
                    <p className="text-sm text-gray-600">
                      Create React components for each schema type (WebApplicationSchema, QuizSchema, LocalBusinessSchema)
                    </p>
                  </div>
                  
                  <div className="p-4 border rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Code className="h-4 w-4 text-blue-600" />
                      <span className="font-medium">Step 2: Add to Page Components</span>
                    </div>
                    <p className="text-sm text-gray-600">
                      Import and add schema components to the appropriate pages in the return statement
                    </p>
                  </div>
                  
                  <div className="p-4 border rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Code className="h-4 w-4 text-blue-600" />
                      <span className="font-medium">Step 3: Test Implementation</span>
                    </div>
                    <p className="text-sm text-gray-600">
                      Use Google's Rich Results Test and this dashboard to validate implementation
                    </p>
                  </div>
                  
                  <div className="p-4 border rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <ExternalLink className="h-4 w-4 text-blue-600" />
                      <span className="font-medium">Step 4: Monitor Performance</span>
                    </div>
                    <p className="text-sm text-gray-600">
                      Track rich snippet appearance and search performance improvements in Google Search Console
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default SchemaImplementationGuide;
