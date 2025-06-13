
import AnimatedBackground from "@/components/AnimatedBackground";
import Header from "@/components/Header";
import CategorySection from "@/components/CategorySection";
import ResultsCounter from "@/components/ResultsCounter";
import LinksGrid from "@/components/LinksGrid";
import Footer from "@/components/Footer";
import useLinks from "@/hooks/useLinks";

const Index = () => {
  const { links, searchTerm, setSearchTerm, categories, selectedCategory, setSelectedCategory } = useLinks();

  const handleCategoryClick = (category: string) => {
    if (selectedCategory === category) {
      setSelectedCategory('');
    } else {
      setSelectedCategory(category);
    }
  };

  const handleShowAll = () => {
    setSelectedCategory('');
    setSearchTerm('');
  };

  return (
    <div className="min-h-screen relative">
      <AnimatedBackground />
      
      <div className="relative z-10">
        <Header 
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
        />

        <main className="container mx-auto px-4 py-8 md:py-12">
          <CategorySection
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryClick={handleCategoryClick}
            onShowAll={handleShowAll}
          />

          <ResultsCounter
            count={links.length}
            selectedCategory={selectedCategory}
            searchTerm={searchTerm}
          />

          <LinksGrid links={links} />
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default Index;
