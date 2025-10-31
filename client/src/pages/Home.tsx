import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Book, Palette, Calendar, Users } from "lucide-react";

export default function Home() {
  const features = [
    {
      icon: Palette,
      title: "Traditional Art",
      description: "Explore centuries-old art forms and techniques from cultures around the world."
    },
    {
      icon: Book,
      title: "Folk Stories",
      description: "Discover timeless tales and folklore that have shaped communities for generations."
    },
    {
      icon: Calendar,
      title: "Cultural Festivals",
      description: "Learn about vibrant celebrations and their deep-rooted cultural significance."
    },
    {
      icon: Users,
      title: "Community Stories",
      description: "Share and preserve your family traditions and local cultural heritage."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <Hero />
      
      <section className="py-12 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6">
              Our Mission
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Roots Reconnect bridges the gap between generations, preserving cultural heritage 
              through storytelling, art, and interactive experiences. We believe that understanding 
              our roots enriches our future.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="hover-elevate transition-all duration-300" data-testid={`card-feature-${index}`}>
                  <CardContent className="p-6 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg bg-primary/10 mb-4">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
