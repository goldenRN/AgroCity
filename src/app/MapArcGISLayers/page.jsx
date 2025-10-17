// src/app/MapArcGISLayers/page.jsx
"use client";
import dynamic from "next/dynamic";

const MapArcGISLayersClient = dynamic(
  () => import("./MapArcGISLayersClient"),
  { ssr: false }
);

export default function Page() {
  return <MapArcGISLayersClient />;
}
