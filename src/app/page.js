"use client";
import { useState } from "react";
import dynamic from "next/dynamic";

const GeojsonMap = dynamic(() => import("./GeojsonMap"), { ssr: false });

export default function Home() {
  const [geojson, setGeojson] = useState(null);
  const [selectedName, setSelectedName] = useState(null);

  const handleFile = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const json = JSON.parse(event.target.result);
        setGeojson(json);
      };
      reader.readAsText(file);
    }
  };

  // Давхардсан name-үүдийг unique болгож жагсаах
  const getUniqueNames = (features) => {
    if (!features) return [];
    const names = features.map(f => f.properties.name);
    return [...new Set(names)];
  };

  return (
    <div className="w-screen h-screen relative">
      {/* Map background */}
      <div className="absolute inset-0 z-0">
        <GeojsonMap data={geojson} selectedName={selectedName} />
      </div>

      {/* Sidebar */}
      <div className="absolute top-4 left-4 z-10 bg-white/90 p-4 rounded shadow  overflow-auto w-1/5 max-h-screen">
        <input type="file" accept=".geojson,.json" onChange={handleFile} className="mb-2"/>
        {geojson && (
          <div>
            <h2 className="font-bold mb-2">Бүх Name</h2>
            <ul className="text-sm max-h-screen overflow-auto">
              {getUniqueNames(geojson.features).map((name, i) => (
                <li key={i}>
                  <button
                    className={`w-full text-left p-1 rounded hover:bg-gray-200 ${
                      selectedName === name ? "bg-blue-300 font-bold" : ""
                    }`}
                    onClick={() => setSelectedName(name)}
                  >
                    {name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
