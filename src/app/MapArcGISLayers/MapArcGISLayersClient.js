"use client";
import { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import * as EL from "esri-leaflet";

const DASHBOARD_URL = "https://www.arcgis.com/apps/dashboards/f7dc35148914417dbec9285a088e6b5b";

export default function MapArcGISLayersClient() {
  useEffect(() => {
    const map = L.map("map", {
      center: [47.918, 106.917],
      zoom: 7,
    });

    // ArcGIS BaseMap (Topographic)
    EL.basemapLayer("Topographic").addTo(map);

    // Example FeatureLayer (you can replace with your service)
    EL.featureLayer({
      url: "https://services.arcgis.com/V6ZHFr6zdgNZuVG0/ArcGIS/rest/services/Earthquakes_from_last_seven_days/FeatureServer/0",
    }).addTo(map);

    return () => map.remove();
  }, []);

  return (
    <div className="flex w-screen h-screen">
      {/* Left - Map */}
      <div id="map" className="w-1/2 h-full z-0" />

      {/* Right - Dashboard */}
      <div className="w-1/2 h-full bg-gray-50 border-l border-gray-300 shadow-inner">
        <iframe
          src={DASHBOARD_URL}
          className="w-full h-full border-0"
          allowFullScreen
          title="ArcGIS Dashboard"
        />
      </div>
    </div>
  );
}
