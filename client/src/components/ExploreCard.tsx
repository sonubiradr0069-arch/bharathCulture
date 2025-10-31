import React, { useState } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import ExploreCard from "../components/ExploreCard";

// URL for India map shapes
const geoUrl =
  "https://raw.githubusercontent.com/rvsp/india-maps/master/topojson/india.json";

export default function Explore() {
  const [story, setStory] = useState<string>(
    "Click a state on the map to explore its cultural story!"
  );

  // when user clicks a state on map
  const handleSelect = async (state: string) => {
    try {
      const res = await fetch(`/api/ai-story?region=${state}`);
      const data = await res.json();
      setStory(`🪔 ${data.story}`);
    } catch (err) {
      setStory("❌ Could not fetch story. Please try again.");
    }
  };

  // Example data for Explore Cards (replace with backend data later)
  const sampleData = [
    {
      id: "1",
      title: "Rajasthani Folk Dance",
      category: "Art & Dance",
      region: "Rajasthan",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/b/bd/Ghoomar_dance_2.jpg",
      description:
        "The vibrant Ghoomar dance reflects the colorful traditions of Rajasthan.",
    },
    {
      id: "2",
      title: "Kathakali Theatre",
      category: "Performance",
      region: "Kerala",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/9/9e/Kathakali2.jpg",
      description:
        "A classical Indian dance-drama noted for elaborate makeup and storytelling.",
    },
    {
      id: "3",
      title: "Bhangra Festival",
      category: "Music & Dance",
      region: "Punjab",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/e/e1/Bhangra_dancers.jpg",
      description:
        "A joyful folk dance celebrating harvest and unity, symbolizing Punjab’s spirit.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#fff8e7] flex flex-col items-center p-6">
      {/* 🗺️ Interactive India Map */}
      <section className="w-full max-w-5xl mb-8">
        <h2 className="text-3xl font-bold text-center text-amber-800 mb-4">
          Explore India's Rich Heritage
        </h2>
        <ComposableMap projection="geoMercator" projectionConfig={{ scale: 900 }}>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const name = geo.properties.NAME_1;
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    onClick={() => handleSelect(name)}
                    style={{
                      default: { fill: "#f4e4bc", outline: "none" },
                      hover: { fill: "#f59e0b" },
                      pressed: { fill: "#f59e0b" },
                    }}
                  />
                );
              })
            }
          </Geographies>
        </ComposableMap>
        <div className="bg-amber-100 mt-6 p-4 rounded-xl shadow-md text-center">
          <p className="text-lg">{story}</p>
        </div>
      </section>

      {/* 🖼️ Cultural Cards Grid */}
      <section className="w-full max-w-6xl">
        <h3 className="text-2xl font-semibold text-amber-800 mb-4">
          Discover Cultural Highlights
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sampleData.map((item) => (
            <ExploreCard key={item.id} {...item} />
          ))}
        </div>
      </section>
    </main>
  );
}
