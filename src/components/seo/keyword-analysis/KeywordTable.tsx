
import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { KeywordData } from './types';

interface KeywordTableProps {
  keywords: KeywordData[];
}

const KeywordTable: React.FC<KeywordTableProps> = ({ keywords }) => {
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
          {keywords.map((keyword, index) => (
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
      {keywords.length === 0 && (
        <div className="text-center py-8">
          <p className="text-gray-500">No keywords match your filters.</p>
        </div>
      )}
    </div>
  );
};

export default KeywordTable;
