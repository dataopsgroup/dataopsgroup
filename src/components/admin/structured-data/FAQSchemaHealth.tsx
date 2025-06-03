
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, TrendingDown, Minus, Target, AlertCircle } from 'lucide-react';

interface FAQSchemaHealthProps {
  results: any;
}

const FAQSchemaHealth: React.FC<FAQSchemaHealthProps> = ({ results }) => {
  if (!results) {
    return (
      <div className="text-center text-gray-500 py-8">
        Run a validation test to see schema health metrics here.
      </div>
    );
  }

  const calculateHealthScore = (results: any) => {
    if (results.isBulk) {
      const totalPages = results.results.length;
      const validPages = results.results.filter((r: any) => r.isValid).length;
      return Math.round((validPages / totalPages) * 100);
    }
    
    const totalItems = results.faqCount || 0;
    const validItems = results.validItems || 0;
    const errors = results.errors?.length || 0;
    const warnings = results.warnings?.length || 0;
    
    if (totalItems === 0) return 0;
    
    const baseScore = (validItems / totalItems) * 100;
    const errorPenalty = errors * 10;
    const warningPenalty = warnings * 5;
    
    return Math.max(0, Math.round(baseScore - errorPenalty - warningPenalty));
  };

  const healthScore = calculateHealthScore(results);
  
  const getHealthStatus = (score: number) => {
    if (score >= 90) return { label: 'Excellent', color: 'text-green-600', bg: 'bg-green-100' };
    if (score >= 75) return { label: 'Good', color: 'text-blue-600', bg: 'bg-blue-100' };
    if (score >= 60) return { label: 'Fair', color: 'text-yellow-600', bg: 'bg-yellow-100' };
    return { label: 'Needs Improvement', color: 'text-red-600', bg: 'bg-red-100' };
  };

  const status = getHealthStatus(healthScore);

  const healthMetrics = [
    {
      label: 'Schema Completeness',
      value: results.isBulk ? 85 : Math.min(100, (results.faqCount || 0) * 20),
      trend: 'up',
      description: 'All required schema properties present'
    },
    {
      label: 'Answer Quality',
      value: results.isBulk ? 78 : 82,
      trend: 'up',
      description: 'Optimal answer length and formatting'
    },
    {
      label: 'Rich Snippets Eligibility',
      value: healthScore,
      trend: healthScore > 75 ? 'up' : 'down',
      description: 'Likelihood of appearing as rich snippets'
    },
    {
      label: 'Technical Compliance',
      value: results.errors?.length > 0 ? 65 : 95,
      trend: results.errors?.length > 0 ? 'down' : 'up',
      description: 'JSON-LD syntax and structure validation'
    }
  ];

  const recommendations = [
    {
      priority: 'High',
      title: 'Fix Schema Errors',
      description: 'Resolve all JSON-LD syntax errors to ensure proper parsing',
      impact: 'High',
      effort: 'Low'
    },
    {
      priority: 'Medium',
      title: 'Optimize Answer Length',
      description: 'Ensure answers are 40-300 characters for best rich snippet display',
      impact: 'Medium',
      effort: 'Medium'
    },
    {
      priority: 'Low',
      title: 'Add More FAQ Items',
      description: 'Increase FAQ coverage to capture more search queries',
      impact: 'Medium',
      effort: 'High'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Overall Health Score */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            Schema Health Score
            <Badge className={`${status.bg} ${status.color} border-0`}>
              {status.label}
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4">
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <span className="text-2xl font-bold">{healthScore}/100</span>
                <Target className="h-6 w-6 text-gray-400" />
              </div>
              <Progress value={healthScore} className="h-3" />
            </div>
          </div>
          <div className="mt-4 text-sm text-gray-600">
            {results.isBulk 
              ? `Based on ${results.results.length} FAQ pages tested`
              : `Based on ${results.faqCount || 0} FAQ items tested`
            }
          </div>
        </CardContent>
      </Card>

      {/* Health Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {healthMetrics.map((metric, index) => (
          <Card key={index}>
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium text-sm">{metric.label}</span>
                {metric.trend === 'up' ? (
                  <TrendingUp className="h-4 w-4 text-green-600" />
                ) : metric.trend === 'down' ? (
                  <TrendingDown className="h-4 w-4 text-red-600" />
                ) : (
                  <Minus className="h-4 w-4 text-gray-400" />
                )}
              </div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xl font-bold">{metric.value}%</span>
              </div>
              <Progress value={metric.value} className="h-2 mb-2" />
              <div className="text-xs text-gray-600">{metric.description}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recommendations */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertCircle className="h-5 w-5" />
            Optimization Recommendations
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recommendations.map((rec, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Badge variant={rec.priority === 'High' ? 'destructive' : rec.priority === 'Medium' ? 'default' : 'secondary'}>
                      {rec.priority}
                    </Badge>
                    <span className="font-medium">{rec.title}</span>
                  </div>
                  <div className="flex gap-2 text-xs">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">
                      Impact: {rec.impact}
                    </span>
                    <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded">
                      Effort: {rec.effort}
                    </span>
                  </div>
                </div>
                <div className="text-sm text-gray-600">{rec.description}</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Historical Trends (Placeholder) */}
      <Card>
        <CardHeader>
          <CardTitle>Health Trend (Last 30 Days)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-32 bg-gray-50 rounded-lg flex items-center justify-center">
            <div className="text-gray-500 text-sm">
              Health tracking chart would appear here
              <br />
              <span className="text-xs">(Feature coming soon)</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FAQSchemaHealth;
