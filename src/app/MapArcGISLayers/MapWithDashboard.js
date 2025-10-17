"use client";
import { useEffect, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import * as EL from "esri-leaflet";

const DASHBOARD_URL = "https://www.arcgis.com/apps/dashboards/f7dc35148914417dbec9285a088e6b5b";

export default function MapWithDashboard() {
  const [selectedDashboard, setSelectedDashboard] = useState(null);

  useEffect(() => {
    const map = L.map("map", {
      center: [47.918, 106.917],
      zoom: 8,
    });

    // Жишээ feature layer
    const featureLayer = EL.featureLayer({
      url: "https://services.arcgis.com/V6ZHFr6zdgNZuVG0/ArcGIS/rest/services/Earthquakes_from_last_seven_days/FeatureServer/0",
    }).addTo(map);

    featureLayer.on("click", (e) => {
      // Dashboard-г дарж үзүүлэх
      setSelectedDashboard(DASHBOARD_URL);
    });

    return () => map.remove();
  }, []);

  return (
    <div className="relative w-screen h-screen">
      <div id="map" className="w-full h-full" />

      {/* Dashboard iframe */}
      {selectedDashboard && (
        <div className="absolute top-4 right-4 w-[600px] h-[400px] bg-white rounded-xl shadow-lg overflow-hidden z-[1000]">
          <iframe
            src={selectedDashboard}
            className="w-full h-full border-0"
            allowFullScreen
          />
        </div>
      )}
    </div>
  );
}
