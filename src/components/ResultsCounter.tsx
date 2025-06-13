
interface ResultsCounterProps {
  count: number;
  selectedCategory: string;
  searchTerm: string;
}

const ResultsCounter = ({ count, selectedCategory, searchTerm }: ResultsCounterProps) => {
  const getMessage = () => {
    if (selectedCategory) {
<<<<<<< HEAD
      return `${count} em "${selectedCategory}"`;
    }
    if (searchTerm) {
      return `${count} resultados para "${searchTerm}"`;
    }
    return `${count} texturas disponíveis`;
  };

  return (
    <div className="mb-6">
      <div className="bg-card rounded p-3 border">
        <p className="text-muted-foreground text-sm">
=======
      return `${count} texturas encontradas em "${selectedCategory}"`;
    }
    if (searchTerm) {
      return `${count} texturas encontradas para "${searchTerm}"`;
    }
    return `${count} texturas holográficas premium disponíveis`;
  };

  return (
    <div className="mb-8 md:mb-10">
      <div className="bg-card/80 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-blue-500/30 shadow-xl shadow-blue-500/10">
        <p className="text-muted-foreground font-medium text-base md:text-lg">
>>>>>>> 5842ea195b41ab96da50d4d65291279499e22ab6
          {getMessage()}
        </p>
      </div>
    </div>
  );
};

export default ResultsCounter;
