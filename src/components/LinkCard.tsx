
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
    <Card className="group p-0 overflow-hidden hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 cursor-pointer bg-card/95 backdrop-blur-sm border-blue-500/30 hover:border-blue-400/60 hover:-translate-y-2 hover:scale-[1.02]" 
          onClick={handleClick}>
      {imageUrl && (
        <div className="w-full h-52 overflow-hidden relative">
          <img 
            src={imageUrl} 
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-500/10 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
      )}
      
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg backdrop-blur-sm border border-blue-400/30">
              <Link className="h-4 w-4 text-blue-300" />
            </div>
            <span className="text-xs font-semibold px-3 py-1 bg-gradient-to-r from-blue-900/70 to-cyan-900/60 text-blue-200 rounded-full border border-blue-500/50 backdrop-blur-sm shadow-lg">
              {category}
            </span>
          </div>
          <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-blue-300 transition-colors duration-300" />
        </div>
        
        <h3 className="text-lg font-bold mb-3 group-hover:text-blue-300 transition-colors duration-300 leading-tight">
          {title}
        </h3>
        
        <p className="text-muted-foreground text-sm mb-6 line-clamp-2 leading-relaxed group-hover:text-blue-100/80 transition-colors duration-300">
          {description}
        </p>
        
        <Button 
          variant="outline" 
          size="sm" 
          className="w-full group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-600 group-hover:text-white group-hover:border-blue-400 transition-all duration-300 font-medium border-blue-500/50 text-blue-300 hover:bg-blue-600/20 shadow-lg hover:shadow-blue-500/30"
        >
          Explorar Textura
        </Button>
      </div>
    </Card>
  );
};

export default LinkCard;
