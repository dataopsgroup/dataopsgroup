
import { useState, useMemo, useCallback } from 'react';
import { FAQCategory } from '@/data/faqs/types';
import { searchFAQs, SearchResult, debounce } from '@/utils/faq-search-utils';

export const useFAQSearch = (categories: FAQCategory[]) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [isSearchActive, setIsSearchActive] = useState(false);

  const searchResults = useMemo(() => {
    if (!searchTerm.trim()) {
      return [];
    }
    return searchFAQs(categories, searchTerm, selectedCategory || undefined);
  }, [categories, searchTerm, selectedCategory]);

  const debouncedSearch = useCallback(
    debounce((term: string) => {
      setSearchTerm(term);
      setIsSearchActive(!!term.trim());
    }, 300),
    []
  );

  const handleSearch = (term: string) => {
    debouncedSearch(term);
  };

  const clearSearch = () => {
    setSearchTerm('');
    setSelectedCategory('');
    setIsSearchActive(false);
  };

  const handleCategoryFilter = (categoryId: string) => {
    setSelectedCategory(categoryId === selectedCategory ? '' : categoryId);
  };

  return {
    searchTerm,
    selectedCategory,
    isSearchActive,
    searchResults,
    handleSearch,
    clearSearch,
    handleCategoryFilter
  };
};
