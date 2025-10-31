import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface StoryCardProps {
  id: string;
  title: string;
  region: string;
  image: string;
  shortDescription: string;
  fullStory: string;
}

export default function StoryCard({ id, title, region, image, shortDescription, fullStory }: StoryCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <Card className="overflow-hidden" data-testid={`card-story-${id}`}>
      <div className="aspect-[4/3] overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <CardHeader className="space-y-0 pb-4">
        <div className="flex items-center justify-between gap-2 mb-3">
          <Badge variant="secondary" data-testid={`badge-region-${id}`}>
            {region}
          </Badge>
        </div>
        <h3 className="text-xl md:text-2xl font-semibold" data-testid={`text-title-${id}`}>
          {title}
        </h3>
      </CardHeader>
      <CardContent>
        <p className="text-base leading-relaxed mb-4" data-testid={`text-description-${id}`}>
          {shortDescription}
        </p>
        {expanded && (
          <p className="text-base text-muted-foreground leading-relaxed mb-4" data-testid={`text-full-story-${id}`}>
            {fullStory}
          </p>
        )}
        <Button 
          variant="ghost" 
          onClick={() => setExpanded(!expanded)}
          data-testid={`button-read-more-${id}`}
        >
          {expanded ? "Show Less" : "Read More"}
        </Button>
      </CardContent>
    </Card>
  );
}
