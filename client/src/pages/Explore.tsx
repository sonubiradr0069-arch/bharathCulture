import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ExploreCard from "@/components/ExploreCard";
import artImage from '@assets/generated_images/Indian_folk_art_Madhubani_ae87de66.png';
import festivalImage from '@assets/generated_images/Traditional_festival_celebration_Diwali_ffe5fbc5.png';
import craftImage from '@assets/generated_images/Traditional_handicrafts_pottery_display_c9e9bdc3.png';
import maskImage from '@assets/generated_images/Cultural_masks_collection_display_a6a80209.png';

export default function Explore() {
  const exploreItems = [
    {
      id: "madhubani",
      title: "Madhubani Folk Art",
      category: "Traditional Art",
      region: "Bihar, India",
      image: artImage,
      description: "Ancient art form featuring intricate patterns and vibrant natural colors, passed down through generations of women artists."
    },
    {
      id: "diwali",
      title: "Festival of Lights",
      category: "Festival",
      region: "India",
      image: festivalImage,
      description: "Diwali celebrates the victory of light over darkness with lamps, fireworks, and family gatherings across the Indian subcontinent."
    },
    {
      id: "pottery",
      title: "Traditional Pottery",
      category: "Handicraft",
      region: "Various Regions",
      image: craftImage,
      description: "Handcrafted pottery techniques preserved through centuries, creating functional art with cultural significance."
    },
    {
      id: "masks",
      title: "Cultural Masks",
      category: "Traditional Art",
      region: "Global",
      image: maskImage,
      description: "Ceremonial and theatrical masks representing diverse cultural traditions from around the world."
    },
    {
      id: "batik",
      title: "Batik Textile Art",
      category: "Traditional Art",
      region: "Indonesia",
      image: craftImage,
      description: "Ancient wax-resist dyeing technique creating intricate patterns on fabric, recognized as a masterpiece of oral heritage."
    },
    {
      id: "holi",
      title: "Festival of Colors",
      category: "Festival",
      region: "India",
      image: festivalImage,
      description: "Vibrant celebration of spring and new beginnings, bringing communities together through colors and joy."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Explore Cultural Heritage
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl leading-relaxed">
              Discover the richness of traditional art, vibrant festivals, and time-honored crafts 
              from cultures around the world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {exploreItems.map((item) => (
              <ExploreCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
