import StoryCard from '../StoryCard'
import storyImage from '@assets/generated_images/Traditional_storytelling_scene_elders_316b3247.png'

export default function StoryCardExample() {
  return (
    <div className="p-6 max-w-md">
      <StoryCard
        id="1"
        title="The Wise Old Banyan"
        region="Kerala, India"
        image={storyImage}
        shortDescription="An ancient tale of wisdom passed under the sacred banyan tree, teaching the value of patience and community."
        fullStory="For centuries, the village elders gathered beneath the great banyan tree to share stories and wisdom with the young. This tradition taught generations about respect, patience, and the interconnectedness of all living things. The tree became a symbol of eternal knowledge and community bonds."
      />
    </div>
  )
}
