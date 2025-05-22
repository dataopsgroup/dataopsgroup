
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Progress } from '@/components/ui/progress';
import { Search, Info, ChevronDown } from 'lucide-react';

interface KeywordData {
  keyword: string;
  volume: number;
  difficulty: number;
  position: number;
  change: number;
  url: string;
  status: 'ranking' | 'improving' | 'declining' | 'opportunity';
}

// Mock data for demonstration purposes
const mockKeywords: KeywordData[] = [
  {
    keyword: 'hubspot consultant',
    volume: 1200,
    difficulty: 68,
    position: 14,
    change: 3,
    url: '/services',
    status: 'improving'
  },
  {
    keyword: 'hubspot implementation services',
    volume: 880,
    difficulty: 42,
    position: 8,
    change: 5,
    url: '/services/dataops-implementation',
    status: 'improving'
  },
  {
    keyword: 'marketing operations consultant',
    volume: 590,
    difficulty: 55,
    position: 24,
    change: -2,
    url: '/services/marketing-operations-revops',
    status: 'declining'
  },
  {
    keyword: 'hubspot analytics',
    volume: 1400,
    difficulty: 73,
    position: 0,
    change: 0,
    url: '',
    status: 'opportunity'
  },
  {
    keyword: 'data quality hubspot',
    volume: 320,
    difficulty: 31,
    position: 4,
    change: 0,
    url: '/insights/data-quality-hubspot',
    status: 'ranking'
  },
  {
    keyword: 'marketing operations best practices',
    volume: 720,
    difficulty: 62,
    position: 11,
    change: 2,
    url: '/insights/marketing-operations-isnt-it',
    status: 'improving'
  }
];

const KeywordAnalysisTable: React.FC = () => {
  const [keywords, setKeywords] = useState<KeywordData[]>(mockKeywords);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [isLoading, setIsLoading] = useState(false);

  // Filter keywords based on search term and status
  const filteredKeywords = keywords.filter(keyword => {
    const matchesSearch = keyword.keyword.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || keyword.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  // Sort keywords by position (best rankings first)
  const sortedKeywords = [...filteredKeywords].sort((a, b) => {
    // Opportunities (position 0) should be last
    if (a.position === 0) return 1;
    if (b.position === 0) return -1;
    return a.position - b.position;
  });

  const handleRefresh = () => {
    setIsLoading(true);
    // Simulate API call to refresh keyword data
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  const getDifficultyColor = (difficulty: number) => {
    if (difficulty < 30) return 'bg-green-100 text-green-800';
    if (difficulty < 60) return 'bg-amber-100 text-amber-800';
    return 'bg-red-100 text-red-800';
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'ranking':
        return <Badge variant="secondary">Ranking</Badge>;
      case 'improving':
        return <Badge variant="default">Improving</Badge>;
      case 'declining':
        return <Badge variant="destructive">Declining</Badge>;
      case 'opportunity':
        return <Badge variant="outline">Opportunity</Badge>;
      default:
        return null;
    }
  };

  const getChangeIndicator = (change: number) => {
    if (change > 0) return <span className="text-green-600">+{change} ↑</span>;
    if (change < 0) return <span className="text-red-600">{change} ↓</span>;
    return <span className="text-gray-600">0</span>;
  };

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
        <div className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
            <Input
              placeholder="Search keywords..."
              className="pl-8"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Keywords</SelectItem>
              <SelectItem value="ranking">Ranking</SelectItem>
              <SelectItem value="improving">Improving</SelectItem>
              <SelectItem value="declining">Declining</SelectItem>
              <SelectItem value="opportunity">Opportunities</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <div className="space-y-2 py-4">
            <div className="flex justify-between text-sm">
              <span>Refreshing keyword data...</span>
              <span>65%</span>
            </div>
            <Progress value={65} />
          </div>
        ) : (
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Keyword</TableHead>
                  <TableHead className="text-right">Volume</TableHead>
                  <TableHead className="text-right">Difficulty</TableHead>
                  <TableHead className="text-right">Position</TableHead>
                  <TableHead className="text-center">Change</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>URL</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {sortedKeywords.map((keyword, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{keyword.keyword}</TableCell>
                    <TableCell className="text-right">{keyword.volume}</TableCell>
                    <TableCell className="text-right">
                      <span className={`px-2 py-1 rounded text-xs ${getDifficultyColor(keyword.difficulty)}`}>
                        {keyword.difficulty}
                      </span>
                    </TableCell>
                    <TableCell className="text-right">
                      {keyword.position > 0 ? keyword.position : '—'}
                    </TableCell>
                    <TableCell className="text-center">
                      {getChangeIndicator(keyword.change)}
                    </TableCell>
                    <TableCell>{getStatusBadge(keyword.status)}</TableCell>
                    <TableCell className="max-w-[150px] truncate">
                      {keyword.url || '—'}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            {sortedKeywords.length === 0 && (
              <div className="text-center py-8">
                <p className="text-gray-500">No keywords match your filters.</p>
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default KeywordAnalysisTable;
