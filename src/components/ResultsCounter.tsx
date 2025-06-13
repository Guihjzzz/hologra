
interface ResultsCounterProps {
  count: number;
  selectedCategory: string;
  searchTerm: string;
}

const ResultsCounter = ({ count, selectedCategory, searchTerm }: ResultsCounterProps) => {
  const getMessage = () => {
    if (selectedCategory) {
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
          {getMessage()}
        </p>
      </div>
    </div>
  );
};

export default ResultsCounter;
