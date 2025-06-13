
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  placeholder?: string;
}

<<<<<<< HEAD
const SearchBar = ({ searchTerm, onSearchChange, placeholder = "Pesquisar..." }: SearchBarProps) => {
  return (
    <div className="relative w-full max-w-xl mx-auto mb-4">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Search className="h-4 w-4 text-muted-foreground" />
=======
const SearchBar = ({ searchTerm, onSearchChange, placeholder = "Pesquisar links..." }: SearchBarProps) => {
  return (
    <div className="relative w-full max-w-2xl mx-auto mb-6 md:mb-8">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Search className="h-4 w-4 md:h-5 md:w-5 text-muted-foreground" />
>>>>>>> 5842ea195b41ab96da50d4d65291279499e22ab6
      </div>
      <Input
        type="text"
        placeholder={placeholder}
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
<<<<<<< HEAD
        className="pl-10 h-10"
=======
        className="pl-8 md:pl-10 h-10 md:h-12 text-base md:text-lg"
>>>>>>> 5842ea195b41ab96da50d4d65291279499e22ab6
      />
    </div>
  );
};

export default SearchBar;
