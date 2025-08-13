'use client';

import { useState, useMemo } from 'react';
import { Header } from '@/components/header';
import { ToolCard, Tool } from '@/components/tool-card';
import { CategoryFilter } from '@/components/category-filter';
import { SearchBar } from '@/components/search-bar';
import { tools, categories } from '@/data/tools';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/language-context';

export default function HomePage() {
  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Filter tools based on search query and selected category
  const filteredTools = useMemo(() => {
    return tools.filter(tool => {
      const matchesSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           tool.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || tool.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const handleToolClick = (tool: Tool) => {
    // Placeholder for tool functionality
    console.log('Tool clicked:', tool.name);
    alert(`Opening ${tool.name}... This is a placeholder implementation.`);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {t('hero.title')}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('hero.subtitle')}
          </p>
        </div>

        {/* Search Bar */}
        <div className="text-center mb-8">
          <div className="max-w-md mx-auto">
            <SearchBar 
              searchQuery={searchQuery} 
              onSearchChange={setSearchQuery} 
            />
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-8">
          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={handleCategoryChange}
          />
        </div>

        {/* Search Results Info */}
        {searchQuery && (
          <div className="mb-6 text-center">
            <p className="text-gray-600">
              {t('search.results').replace('{count}', filteredTools.length.toString()).replace('{plural}', filteredTools.length !== 1 ? 's' : '').replace('{query}', searchQuery)}
            </p>
          </div>
        )}

        {/* Tools Grid */}
        {filteredTools.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredTools.map((tool) => (
              <ToolCard
                key={tool.id}
                tool={tool}
                onToolClick={handleToolClick}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <Card className="max-w-md mx-auto">
              <CardHeader>
                <CardTitle className="text-gray-500">{t('tools.noResults')}</CardTitle>
                <CardDescription>
                  {t('tools.noResultsDescription')}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('All');
                  }}
                  className="w-full"
                >
                  {t('tools.clearFilters')}
                </Button>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Stats Section */}
        <div className="mt-16 grid gap-6 md:grid-cols-3 max-w-4xl mx-auto">
          <Card className="text-center">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-blue-600">{tools.length}+</CardTitle>
              <CardDescription>{t('stats.availableTools')}</CardDescription>
            </CardHeader>
          </Card>
          
          <Card className="text-center">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-green-600">{t('stats.free')}</CardTitle>
              <CardDescription>{t('stats.noCost')}</CardDescription>
            </CardHeader>
          </Card>
          
          <Card className="text-center">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-purple-600">24/7</CardTitle>
              <CardDescription>{t('stats.alwaysAvailable')}</CardDescription>
            </CardHeader>
          </Card>
        </div>
      </main>
    </div>
  );
}
