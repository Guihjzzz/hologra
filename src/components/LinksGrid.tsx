
import LinkCard from "@/components/LinkCard";
import { LinkItem } from "@/hooks/useLinks";

interface LinksGridProps {
  links: LinkItem[];
}

const LinksGrid = ({ links }: LinksGridProps) => {
  if (links.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="bg-card rounded-xl p-6 border max-w-lg mx-auto">
          <p className="text-lg text-muted-foreground mb-3">
            Nenhuma textura encontrada
          </p>
          <p className="text-muted-foreground">
            Refine sua pesquisa
          </p>
        </div>
      </div>
    );
  }

  return (
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
      ))}
    </div>
  );
};

export default LinksGrid;
