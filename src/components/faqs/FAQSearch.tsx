
import React, { useState } from 'react';
import { Search, X, Filter } from 'lucide-react';
import { FAQCategory } from '@/data/faqs/types';

interface FAQSearchProps {
  categories: FAQCategory[];
  onSearch: (term: string) => void;
  onCategoryFilter: (categoryId: string) => void;
  onClear: () => void;
  selectedCategory: string;
  isSearchActive: boolean;
}

const FAQSearch: React.FC<FAQSearchProps> = ({
  categories,
  onSearch,
  onCategoryFilter,
  onClear,
  selectedCategory,
  isSearchActive
}) => {
  const [inputValue, setInputValue] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    onSearch(value);
  };

  const handleClear = () => {
    setInputValue('');
    onClear();
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
      <div className="space-y-4">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Search FAQs..."
            className="block w-full pl-10 pr-12 py-3 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-dataops-500 focus:border-dataops-500"
            aria-label="Search frequently asked questions"
          />
          {(inputValue || isSearchActive) && (
            <button
              onClick={handleClear}
              className="absolute inset-y-0 right-0 pr-3 flex items-center"
              aria-label="Clear search"
            >
              <X className="h-5 w-5 text-gray-400 hover:text-gray-600" />
            </button>
          )}
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
          >
            <Filter className="h-4 w-4 mr-1" />
            Filter by category
          </button>

          {selectedCategory && (
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-dataops-950 text-brand-saffron">
              {categories.find(cat => cat.id === selectedCategory)?.title}
              <button
                onClick={() => onCategoryFilter(selectedCategory)}
                className="ml-2 hover:text-white"
              >
                <X className="h-3 w-3" />
              </button>
            </div>
          )}
        </div>

        {showFilters && (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 pt-2 border-t border-gray-100">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => onCategoryFilter(category.id)}
                className={`text-left px-3 py-2 rounded-md text-sm transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-dataops-950 text-brand-saffron'
                    : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category.title}
                <span className="block text-xs text-gray-500 mt-1">
                  {category.items.length} questions
                </span>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FAQSearch;
