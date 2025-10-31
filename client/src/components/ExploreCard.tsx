import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ExploreCardProps {
  id: string;
  title: string;
  category: string;
  region: string;
  image: string;
  description: string;
}

export default function ExploreCard({ id, title, category, region, image, description }: ExploreCardProps) {
  return (
    <Card 
      className="overflow-hidden hover-elevate transition-all duration-300 hover:shadow-lg cursor-pointer"
      data-testid={`card-explore-${id}`}
    >
      <div className="aspect-video overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardContent className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <Badge variant="secondary" data-testid={`badge-category-${id}`}>
            {category}
          </Badge>
          <Badge variant="outline" data-testid={`badge-region-${id}`}>
            {region}
          </Badge>
        </div>
        <h3 className="text-xl md:text-2xl font-semibold mb-2" data-testid={`text-title-${id}`}>
          {title}
        </h3>
        <p className="text-muted-foreground leading-relaxed" data-testid={`text-description-${id}`}>
          {description}
        </p>
      </CardContent>
    </Card>
  );
}
