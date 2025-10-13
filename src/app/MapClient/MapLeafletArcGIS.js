"use client";

import { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import * as esri from "esri-leaflet";

export default function MapLeafletArcGIS() {
 useEffect(() => {
  const map = L.map("map", {
    center: [47.918, 106.917],
    zoom: 12,
  });

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: "&copy; OpenStreetMap contributors",
  }).addTo(map);

  const agroLayer = esri.featureLayer({
    url: "https://services.arcgis.com/4ed83e99ff5443e0999ce2fccb5c5fba/arcgis/rest/services/agro_ez/FeatureServer/0/query?where=1=1&outFields=*&f=geojson",
    style: () => ({
      color: "#3388ff",
      weight: 2,
      fillOpacity: 0.4,
    }),
  }).addTo(map);

  agroLayer.bindPopup((layer) => {
    const props = layer.feature.properties;
    return `<strong>${props.name || "Unnamed"}</strong><br>FID: ${props.OBJECTID}`;
  });

  agroLayer.on("load", () => {
    const bounds = agroLayer.getBounds();
    if (bounds && bounds.isValid()) {
      map.fitBounds(bounds);
    }
  });

  return () => map.remove();
}, []);


  return <div id="map" style={{ height: "100vh", width: "100%" }} />;
}
