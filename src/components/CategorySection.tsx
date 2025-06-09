
interface CategorySectionProps {
  categories: string[];
  selectedCategory: string;
  onCategoryClick: (category: string) => void;
  onShowAll: () => void;
}

const CategorySection = ({ 
  categories, 
  selectedCategory, 
  onCategoryClick, 
  onShowAll 
}: CategorySectionProps) => {
  return (
    <div className="mb-8 md:mb-12">
      <div className="flex items-center justify-between mb-4 md:mb-6">
        <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
          Coleções Exclusivas
        </h2>
        {selectedCategory && (
          <button
            onClick={onShowAll}
            className="text-xs md:text-sm text-blue-400 hover:text-blue-300 transition-colors duration-300 underline"
          >
            Mostrar todas
          </button>
        )}
      </div>
      <div className="flex flex-wrap gap-2 md:gap-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryClick(category)}
            className={`px-3 md:px-6 py-2 md:py-3 rounded-full text-xs md:text-sm font-medium shadow-xl border backdrop-blur-sm transition-all duration-300 hover:scale-105 ${
              selectedCategory === category
                ? 'bg-gradient-to-r from-blue-700/80 to-cyan-700/70 text-blue-100 border-blue-400/60 shadow-blue-500/30'
                : 'bg-gradient-to-r from-blue-900/60 to-cyan-900/50 text-blue-200 border-blue-500/40 hover:from-blue-800/70 hover:to-cyan-800/60'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
