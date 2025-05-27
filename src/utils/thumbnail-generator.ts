
interface ThumbnailStyle {
  gradientClass: string;
  iconName: string;
  textColor: string;
}

export const generateThumbnailStyle = (category?: string): ThumbnailStyle => {
  // Normalize category for comparison
  const normalizedCategory = category?.toLowerCase() || '';
  
  if (normalizedCategory.includes('insight') || normalizedCategory.includes('analytics')) {
    return {
      gradientClass: 'bg-gradient-to-br from-blue-600 via-dataops-500 to-purple-600',
      iconName: 'BarChart3',
      textColor: 'text-white'
    };
  }
  
  if (normalizedCategory.includes('strategy') || normalizedCategory.includes('growth')) {
    return {
      gradientClass: 'bg-gradient-to-br from-orange-500 via-red-500 to-pink-600',
      iconName: 'TrendingUp',
      textColor: 'text-white'
    };
  }
  
  if (normalizedCategory.includes('technical') || normalizedCategory.includes('implementation')) {
    return {
      gradientClass: 'bg-gradient-to-br from-green-500 via-teal-500 to-cyan-600',
      iconName: 'Settings',
      textColor: 'text-white'
    };
  }
  
  if (normalizedCategory.includes('case study') || normalizedCategory.includes('case')) {
    return {
      gradientClass: 'bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-700',
      iconName: 'FileText',
      textColor: 'text-white'
    };
  }
  
  // Default for uncategorized posts
  return {
    gradientClass: 'bg-gradient-to-br from-gray-700 via-slate-700 to-gray-800',
    iconName: 'BookOpen',
    textColor: 'text-white'
  };
};

export const calculateReadingTime = (content: string): number => {
  const wordCount = content.replace(/<[^>]*>/g, '').split(/\s+/).length;
  return Math.max(1, Math.round(wordCount / 200));
};
