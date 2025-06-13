
import SearchBar from "@/components/SearchBar";

interface HeaderProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

const Header = ({ searchTerm, onSearchChange }: HeaderProps) => {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
            HOLOLAB
          </h1>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <SearchBar 
            searchTerm={searchTerm}
            onSearchChange={onSearchChange}
            placeholder="Pesquisar..."
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
