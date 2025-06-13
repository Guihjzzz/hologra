
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
    <div className="mb-6">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-sm font-medium text-muted-foreground">
          Categorias
        </h2>
        {selectedCategory && (
          <button
            onClick={onShowAll}
            className="text-sm text-primary hover:underline"
          >
            Mostrar todas
          </button>
        )}
      </div>
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryClick(category)}
            className={`px-3 py-1 rounded text-sm font-medium border ${
              selectedCategory === category
                ? 'bg-primary text-primary-foreground border-primary'
                : 'bg-secondary text-secondary-foreground border-border hover:bg-accent'
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
