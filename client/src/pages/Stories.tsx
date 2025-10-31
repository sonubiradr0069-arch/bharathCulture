import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import StoryCard from "@/components/StoryCard";
import storyImage from '@assets/generated_images/Traditional_storytelling_scene_elders_316b3247.png';
import maskImage from '@assets/generated_images/Cultural_masks_collection_display_a6a80209.png';
import festivalImage from '@assets/generated_images/Traditional_festival_celebration_Diwali_ffe5fbc5.png';
import artImage from '@assets/generated_images/Indian_folk_art_Madhubani_ae87de66.png';

export default function Stories() {
  const stories = [
    {
      id: "banyan",
      title: "The Wise Old Banyan",
      region: "Kerala, India",
      image: storyImage,
      shortDescription: "An ancient tale of wisdom passed under the sacred banyan tree, teaching the value of patience and community.",
      fullStory: "For centuries, the village elders gathered beneath the great banyan tree to share stories and wisdom with the young. This tradition taught generations about respect, patience, and the interconnectedness of all living things. The tree became a symbol of eternal knowledge and community bonds that transcend time."
    },
    {
      id: "masks",
      title: "The Dancing Masks",
      region: "West Africa",
      image: maskImage,
      shortDescription: "A folklore about ceremonial masks that came alive during harvest celebrations, honoring ancestral spirits.",
      fullStory: "Legend tells of masks crafted by the village's most skilled artisan, imbued with the spirits of ancestors. During the harvest festival, dancers wearing these masks would perform rituals connecting the living with those who came before, ensuring prosperity and protection for the community. The tradition continues to celebrate heritage and gratitude."
    },
    {
      id: "lanterns",
      title: "The Floating Lanterns",
      region: "Thailand",
      image: festivalImage,
      shortDescription: "A beautiful story of how releasing lanterns into the sky became a symbol of letting go and new beginnings.",
      fullStory: "Long ago, a wise teacher showed her students how to write their worries on paper lanterns and release them into the night sky. As the lanterns floated away, worries dissolved, making room for hope and new possibilities. This practice evolved into the Yi Peng festival, where thousands of lanterns illuminate the sky, symbolizing collective renewal and shared aspirations."
    },
    {
      id: "patterns",
      title: "The Sacred Patterns",
      region: "Rajasthan, India",
      image: artImage,
      shortDescription: "The origin story of intricate rangoli designs that welcome prosperity and ward off negative energy.",
      fullStory: "Grandmother's hands moved with practiced grace, creating elaborate patterns at the doorstep each morning. Each design told a story - spirals represented the cycle of life, lotus flowers symbolized purity, and peacocks brought good fortune. These patterns, passed down through generations of women, serve as daily prayers and artistic expressions of devotion and creativity."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Traditional Folk Stories
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl leading-relaxed">
              Journey through timeless tales that have been passed down through generations, 
              carrying wisdom, values, and cultural identity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {stories.map((story) => (
              <StoryCard key={story.id} {...story} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
