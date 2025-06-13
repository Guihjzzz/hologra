
import SearchBar from "@/components/SearchBar";

interface HeaderProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

const Header = ({ searchTerm, onSearchChange }: HeaderProps) => {
  return (
<<<<<<< HEAD
    <header className="border-b">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
=======
    <header className="backdrop-blur-md border-b border-blue-500/30 shadow-xl shadow-blue-500/20">
      <div className="container mx-auto px-4 py-8 md:py-16">
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-200 bg-clip-text text-transparent drop-shadow-2xl">
>>>>>>> 5842ea195b41ab96da50d4d65291279499e22ab6
            HOLOLAB
          </h1>
        </div>
        
<<<<<<< HEAD
        <div className="max-w-2xl mx-auto">
          <SearchBar 
            searchTerm={searchTerm}
            onSearchChange={onSearchChange}
            placeholder="Pesquisar..."
=======
        <div className="max-w-3xl mx-auto">
          <SearchBar 
            searchTerm={searchTerm}
            onSearchChange={onSearchChange}
            placeholder="Explore por título, descrição ou categoria..."
>>>>>>> 5842ea195b41ab96da50d4d65291279499e22ab6
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
