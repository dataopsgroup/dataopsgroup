
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, AlertTriangle, XCircle, TrendingUp } from 'lucide-react';

interface SchemaOverviewProps {
  summary: {
    totalPages: number;
    schemaCompliant: number;
    highPriorityIssues: number;
    richSnippetsEligible: number;
  };
}

const SchemaManagementOverview: React.FC<SchemaOverviewProps> = ({ summary }) => {
  const complianceRate = Math.round((summary.schemaCompliant / summary.totalPages) * 100);
  const richSnippetsRate = Math.round((summary.richSnippetsEligible / summary.totalPages) * 100);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Schema Compliance</CardTitle>
          <CheckCircle className="h-4 w-4 text-green-600" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-green-600">{complianceRate}%</div>
          <p className="text-xs text-gray-600">
            {summary.schemaCompliant} of {summary.totalPages} pages
          </p>
          <Badge variant="outline" className="mt-2">
            <TrendingUp className="h-3 w-3 mr-1" />
            Target: 95%
          </Badge>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Rich Snippets Ready</CardTitle>
          <CheckCircle className="h-4 w-4 text-blue-600" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-blue-600">{richSnippetsRate}%</div>
          <p className="text-xs text-gray-600">
            {summary.richSnippetsEligible} pages eligible
          </p>
          <Badge variant="outline" className="mt-2">
            Google Ready
          </Badge>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Priority Issues</CardTitle>
          <AlertTriangle className="h-4 w-4 text-red-600" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-red-600">{summary.highPriorityIssues}</div>
          <p className="text-xs text-gray-600">High priority fixes needed</p>
          <Badge variant="destructive" className="mt-2">
            Requires Action
          </Badge>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Pages Audited</CardTitle>
          <XCircle className="h-4 w-4 text-gray-600" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-gray-900">{summary.totalPages}</div>
          <p className="text-xs text-gray-600">Across all page types</p>
          <Badge variant="secondary" className="mt-2">
            Complete Coverage
          </Badge>
        </CardContent>
      </Card>
    </div>
  );
};

export default SchemaManagementOverview;
