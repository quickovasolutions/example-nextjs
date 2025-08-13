'use client';

import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/language-context';

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export function CategoryFilter({ categories, selectedCategory, onCategoryChange }: CategoryFilterProps) {
  const { t } = useLanguage();

  const getCategoryLabel = (category: string) => {
    if (category === 'All') return t('categories.all');
    return t(`categories.${category.toLowerCase()}`);
  };

  return (
    <div className="flex flex-wrap gap-2 mb-6">
      {categories.map((category) => (
        <Badge
          key={category}
          variant={selectedCategory === category ? "default" : "secondary"}
          className={`cursor-pointer hover:opacity-80 transition-opacity ${
            selectedCategory === category 
              ? "bg-blue-600 hover:bg-blue-700" 
              : "hover:bg-gray-200"
          }`}
          onClick={() => onCategoryChange(category)}
        >
          {getCategoryLabel(category)}
        </Badge>
      ))}
    </div>
  );
}
