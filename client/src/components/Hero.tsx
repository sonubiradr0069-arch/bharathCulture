import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import heroImage from '@assets/generated_images/Cultural_heritage_hero_collage_e5adaaaa.png';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6 text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Reconnect with Your Roots
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
          Discover the richness of traditional art, folklore, and cultural values.
          Journey through stories that have shaped generations and keep heritage alive.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/explore">
            <Button 
              size="lg" 
              variant="default"
              className="text-base md:text-lg px-8 py-6"
              data-testid="button-explore-heritage"
            >
              Explore Heritage
            </Button>
          </Link>
          <Link href="/stories">
            <Button 
              size="lg" 
              variant="outline"
              className="text-base md:text-lg px-8 py-6 bg-background/20 backdrop-blur-sm border-white/30 text-white hover:bg-background/30"
              data-testid="button-read-stories"
            >
              Read Stories
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
