
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import KeywordFilters from './keyword-analysis/KeywordFilters';
import KeywordLoading from './keyword-analysis/KeywordLoading';
import KeywordTable from './keyword-analysis/KeywordTable';
import { useKeywordAnalysis } from './keyword-analysis/useKeywordAnalysis';

const KeywordAnalysisTable: React.FC = () => {
  const {
    sortedKeywords,
    searchTerm,
    setSearchTerm,
    statusFilter,
    setStatusFilter,
    isLoading,
    handleRefresh
  } = useKeywordAnalysis();

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          <span>Keyword Analysis</span>
          <Button variant="outline" size="sm" onClick={handleRefresh} disabled={isLoading}>
            {isLoading ? 'Refreshing...' : 'Refresh Data'}
          </Button>
        </CardTitle>
        <CardDescription>
          Track keyword rankings and identify new opportunities
        </CardDescription>
        <KeywordFilters
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          statusFilter={statusFilter}
          setStatusFilter={setStatusFilter}
        />
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <KeywordLoading />
        ) : (
          <KeywordTable keywords={sortedKeywords} />
        )}
      </CardContent>
    </Card>
  );
};

export default KeywordAnalysisTable;
