
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link, ExternalLink } from "lucide-react";

interface LinkCardProps {
  title: string;
  description: string;
  url: string;
  category: string;
  imageUrl?: string;
}

const LinkCard = ({ title, description, url, category, imageUrl }: LinkCardProps) => {
  const handleClick = () => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <Card className="p-0 overflow-hidden cursor-pointer bg-card border" onClick={handleClick}>
      {imageUrl && (
        <div className="w-full h-48 overflow-hidden">
          <img 
            src={imageUrl} 
            alt={title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      )}
      
      <div className="p-4">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className="p-1 bg-primary/20 rounded">
              <Link className="h-3 w-3 text-primary" />
            </div>
            <span className="text-xs px-2 py-1 bg-secondary text-secondary-foreground rounded">
              {category}
            </span>
          </div>
          <ExternalLink className="h-3 w-3 text-muted-foreground" />
        </div>
        
        <h3 className="text-base font-semibold mb-2 line-clamp-2">
          {title}
        </h3>
        
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {description}
        </p>
        
        <Button variant="outline" size="sm" className="w-full">
          Explorar
        </Button>
      </div>
    </Card>
  );
};

export default LinkCard;
