
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
<<<<<<< HEAD
    <div className="mb-6">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-sm font-medium text-muted-foreground">
          Categorias
=======
    <div className="mb-8 md:mb-12">
      <div className="flex items-center justify-between mb-4 md:mb-6">
        <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
          Coleções Exclusivas
>>>>>>> 5842ea195b41ab96da50d4d65291279499e22ab6
        </h2>
        {selectedCategory && (
          <button
            onClick={onShowAll}
<<<<<<< HEAD
            className="text-sm text-primary hover:underline"
=======
            className="text-xs md:text-sm text-blue-400 hover:text-blue-300 transition-colors duration-300 underline"
>>>>>>> 5842ea195b41ab96da50d4d65291279499e22ab6
          >
            Mostrar todas
          </button>
        )}
      </div>
<<<<<<< HEAD
      <div className="flex flex-wrap gap-2">
=======
      <div className="flex flex-wrap gap-2 md:gap-4">
>>>>>>> 5842ea195b41ab96da50d4d65291279499e22ab6
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryClick(category)}
<<<<<<< HEAD
            className={`px-3 py-1 rounded text-sm font-medium border ${
              selectedCategory === category
                ? 'bg-primary text-primary-foreground border-primary'
                : 'bg-secondary text-secondary-foreground border-border hover:bg-accent'
=======
            className={`px-3 md:px-6 py-2 md:py-3 rounded-full text-xs md:text-sm font-medium shadow-xl border backdrop-blur-sm transition-all duration-300 hover:scale-105 ${
              selectedCategory === category
                ? 'bg-gradient-to-r from-blue-700/80 to-cyan-700/70 text-blue-100 border-blue-400/60 shadow-blue-500/30'
                : 'bg-gradient-to-r from-blue-900/60 to-cyan-900/50 text-blue-200 border-blue-500/40 hover:from-blue-800/70 hover:to-cyan-800/60'
>>>>>>> 5842ea195b41ab96da50d4d65291279499e22ab6
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
