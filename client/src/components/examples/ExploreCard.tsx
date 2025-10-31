import ExploreCard from '../ExploreCard'
import artImage from '@assets/generated_images/Indian_folk_art_Madhubani_ae87de66.png'

export default function ExploreCardExample() {
  return (
    <div className="p-6 max-w-sm">
      <ExploreCard
        id="1"
        title="Madhubani Folk Art"
        category="Traditional Art"
        region="Bihar, India"
        image={artImage}
        description="Ancient art form featuring intricate patterns and vibrant natural colors, passed down through generations."
      />
    </div>
  )
}
