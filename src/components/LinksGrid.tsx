
import LinkCard from "@/components/LinkCard";
<<<<<<< HEAD
import { LinkItem } from "@/hooks/useLinks";

interface LinksGridProps {
  links: LinkItem[];
=======

interface Link {
  id: number;
  title: string;
  description: string;
  url: string;
  category: string;
  imageUrl: string;
}

interface LinksGridProps {
  links: Link[];
>>>>>>> 5842ea195b41ab96da50d4d65291279499e22ab6
}

const LinksGrid = ({ links }: LinksGridProps) => {
  if (links.length === 0) {
    return (
<<<<<<< HEAD
      <div className="text-center py-16">
        <div className="bg-card rounded-xl p-6 border max-w-lg mx-auto">
          <p className="text-lg text-muted-foreground mb-3">
            Nenhuma textura encontrada
          </p>
          <p className="text-muted-foreground">
            Refine sua pesquisa
=======
      <div className="text-center py-16 md:py-24">
        <div className="bg-card/80 backdrop-blur-sm rounded-xl p-6 md:p-10 border border-blue-500/30 max-w-lg mx-auto shadow-xl shadow-blue-500/20">
          <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mx-auto mb-4 md:mb-6 flex items-center justify-center shadow-lg">
            <span className="text-2xl md:text-3xl">✨</span>
          </div>
          <p className="text-lg md:text-xl text-muted-foreground mb-3 font-medium">
            Nenhuma textura corresponde à sua busca
          </p>
          <p className="text-muted-foreground text-base md:text-lg">
            Refine sua pesquisa ou explore nossas coleções exclusivas
>>>>>>> 5842ea195b41ab96da50d4d65291279499e22ab6
          </p>
        </div>
      </div>
    );
  }

  return (
<<<<<<< HEAD
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {links.map((link) => (
        <LinkCard
          key={link.id}
          title={link.title}
          description={link.description}
          url={link.url}
          category={link.category}
          imageUrl={link.imageUrl}
        />
=======
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
      {links.map((link) => (
        <div key={link.id} className="animate-fade-in">
          <LinkCard
            title={link.title}
            description={link.description}
            url={link.url}
            category={link.category}
            imageUrl={link.imageUrl}
          />
        </div>
>>>>>>> 5842ea195b41ab96da50d4d65291279499e22ab6
      ))}
    </div>
  );
};

export default LinksGrid;
