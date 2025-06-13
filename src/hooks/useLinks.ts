
import { useState, useMemo } from 'react';
import { housesData } from '@/data/houses';
import { decorationsData } from '@/data/decorations';
import { farmsData } from '@/data/farms';
import { hologramPacksData } from '@/data/hologramPacks';

export interface LinkItem {
  id: string;
  title: string;
  description: string;
  url: string;
  category: string;
  imageUrl?: string;
}

const useLinks = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  // Combinar todos os dados de diferentes categorias
  const allLinks: LinkItem[] = useMemo(() => [
    ...housesData,
    ...decorationsData,
    ...farmsData,
    ...hologramPacksData
  ], []);

  const filteredLinks = useMemo(() => {
    let filtered = allLinks;

    // Filtrar por categoria selecionada
    if (selectedCategory) {
      filtered = filtered.filter(link => link.category === selectedCategory);
    }

    // Filtrar por termo de busca
    if (searchTerm.trim()) {
      const searchLower = searchTerm.toLowerCase();
      filtered = filtered.filter(link =>
        link.title.toLowerCase().includes(searchLower) ||
        link.description.toLowerCase().includes(searchLower) ||
        link.category.toLowerCase().includes(searchLower)
      );
    }

    return filtered;
  }, [searchTerm, selectedCategory, allLinks]);

  const categories = useMemo(() => {
    const uniqueCategories = Array.from(new Set(allLinks.map(link => link.category)));
    return uniqueCategories.sort();
  }, [allLinks]);

  return {
    links: filteredLinks,
    allLinks,
    categories,
    searchTerm,
    setSearchTerm,
    selectedCategory,
    setSelectedCategory
  };
};

export default useLinks;
