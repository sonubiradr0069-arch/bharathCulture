import React, { useState } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/rvsp/india-maps/master/topojson/india.json";

export default function IndiaMap() {
  const [story, setStory] = useState<string>("Click a state to explore its culture!");

  // when user clicks a state
  const handleSelect = async (state: string) => {
    try {
      const res = await fetch(`/api/ai-story?region=${state}`);
      const data = await res.json();
      setStory(`🪔 ${data.story}`);
    } catch (err) {
      setStory("❌ Could not fetch story. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <h2 className="text-2xl font-bold text-amber-800">Explore Indian Culture</h2>
      <div className="w-full max-w-4xl">
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
      </div>

      <div className="bg-amber-100 p-4 rounded-xl shadow-md text-center w-full max-w-2xl">
        <p className="text-lg">{story}</p>
      </div>
    </div>
  );
}
