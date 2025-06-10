
import React, { useState } from 'react';
import { ChevronDown, ChevronUp, FileQuestion } from 'lucide-react';
import { SearchResult, highlightSearchTerm } from '@/utils/faq-search-utils';

interface FAQSearchResultsProps {
  results: SearchResult[];
  searchTerm: string;
}

const FAQSearchResults: React.FC<FAQSearchResultsProps> = ({ results, searchTerm }) => {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  const toggleExpanded = (questionId: string) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(questionId)) {
      newExpanded.delete(questionId);
    } else {
      newExpanded.add(questionId);
    }
    setExpandedItems(newExpanded);
  };

  if (results.length === 0) {
    return (
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 text-center">
        <FileQuestion className="mx-auto h-12 w-12 text-gray-400 mb-4" />
        <h3 className="text-lg font-medium text-gray-900 mb-2">No results found</h3>
        <p className="text-gray-600 mb-4">
          Try adjusting your search terms or removing category filters.
        </p>
        <div className="text-sm text-gray-500">
          <p>Suggestions:</p>
          <ul className="mt-2 space-y-1">
            <li>• Check for typos in your search</li>
            <li>• Try more general terms</li>
            <li>• Remove category filters</li>
          </ul>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">
          Search Results ({results.length})
        </h3>
        <p className="text-sm text-gray-600">
          Found {results.length} result{results.length !== 1 ? 's' : ''} for "{searchTerm}"
        </p>
      </div>

      <div className="space-y-3">
        {results.map((result, index) => {
          const isExpanded = expandedItems.has(result.question);
          
          return (
            <div
              key={`${result.categoryId}-${index}`}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleExpanded(result.question)}
                className="w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-dataops-100 text-dataops-700">
                        {result.categoryTitle}
                      </span>
                    </div>
                    <h4 
                      className="font-medium text-gray-900"
                      dangerouslySetInnerHTML={{
                        __html: highlightSearchTerm(result.question, searchTerm)
                      }}
                    />
                  </div>
                  <div className="ml-4">
                    {isExpanded ? (
                      <ChevronUp className="h-5 w-5 text-gray-400" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-400" />
                    )}
                  </div>
                </div>
              </button>

              {isExpanded && (
                <div className="px-4 pb-4 pt-0">
                  <div 
                    className="text-gray-600 prose prose-sm max-w-none"
                    dangerouslySetInnerHTML={{
                      __html: highlightSearchTerm(result.answer, searchTerm)
                    }}
                  />
                  {result.relatedLink && (
                    <div className="mt-3 pt-3 border-t border-gray-100">
                      <a
                        href={result.relatedLink.url}
                        className="text-dataops-600 hover:underline font-medium text-sm"
                        aria-label={result.relatedLink.ariaLabel}
                      >
                        {result.relatedLink.text}
                      </a>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FAQSearchResults;
