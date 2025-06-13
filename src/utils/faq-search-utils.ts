
import { FAQCategory, FAQItem } from '@/data/faqs/types';

export interface SearchResult extends FAQItem {
  categoryId: string;
  categoryTitle: string;
}

export const searchFAQs = (
  categories: FAQCategory[],
  searchTerm: string,
  selectedCategory?: string
): SearchResult[] => {
  if (!searchTerm.trim()) {
    return [];
  }

  const results: SearchResult[] = [];
  const lowerSearchTerm = searchTerm.toLowerCase();

  categories.forEach(category => {
    // If category filter is selected, only search in that category
    if (selectedCategory && category.id !== selectedCategory) {
      return;
    }

    category.items.forEach(item => {
      const questionMatch = item.question.toLowerCase().includes(lowerSearchTerm);
      const answerMatch = item.answer.toLowerCase().includes(lowerSearchTerm);
      // Add keyword searching support
      const keywordMatch = item.keywords?.some(keyword => 
        keyword.toLowerCase().includes(lowerSearchTerm)
      ) || false;

      if (questionMatch || answerMatch || keywordMatch) {
        results.push({
          ...item,
          categoryId: category.id,
          categoryTitle: category.title
        });
      }
    });
  });

  return results;
};

export const highlightSearchTerm = (text: string, searchTerm: string): string => {
  if (!searchTerm.trim()) return text;
  
  const regex = new RegExp(`(${searchTerm})`, 'gi');
  return text.replace(regex, '<mark class="bg-yellow-200 px-1 rounded">$1</mark>');
};

export const debounce = <T extends (...args: any[]) => void>(
  func: T,
  delay: number
): ((...args: Parameters<T>) => void) => {
  let timeoutId: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
};
