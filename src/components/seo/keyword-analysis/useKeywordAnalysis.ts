
import { useState } from 'react';
import { KeywordData } from './types';
import { mockKeywords } from './mockData';

export const useKeywordAnalysis = () => {
  const [keywords] = useState<KeywordData[]>(mockKeywords);
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

  return {
    sortedKeywords,
    searchTerm,
    setSearchTerm,
    statusFilter,
    setStatusFilter,
    isLoading,
    handleRefresh
  };
};
