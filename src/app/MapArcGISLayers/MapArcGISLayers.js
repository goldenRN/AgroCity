"use client";
import { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import * as EL from "esri-leaflet";

export default function MapArcGISLayers() {
  useEffect(() => {
    const map = L.map("map", {
      center: [47.918, 106.917],
      zoom: 8,
    });

    // === 1. TileLayer (ArcGIS MapServer)
    EL.tiledMapLayer({
      url: "https://services.arcgis.com/HJzgwvlNIXssnQar/arcgis/rest/services/agro_park/FeatureServer",
        // url: "https://sampleserver6.arcgisonline.com/arcgis/rest/services/Census/MapServer",
        maxZoom: 19,
    }).addTo(map);

    // === 2. DynamicMapLayer
    // EL.dynamicMapLayer({
    //   url: "https://sampleserver6.arcgisonline.com/arcgis/rest/services/USA/MapServer",
    //   opacity: 0.7,
    // }).addTo(map);

    // === 3. FeatureLayer
    // const featureLayer = EL.featureLayer({
    //   url: "https://services.arcgis.com/V6ZHFr6zdgNZuVG0/ArcGIS/rest/services/Earthquakes_from_last_seven_days/FeatureServer/0",
    // }).addTo(map);

    // featureLayer.on("click", (e) => {
    //   L.popup()
    //     .setLatLng(e.latlng)
    //     .setContent(`<strong>${e.layer.feature.properties.place}</strong>`)
    //     .openOn(map);
    // });

    // === 4. ImageMapLayer
    // EL.imageMapLayer({
    //   url: "https://sampleserver6.arcgisonline.com/arcgis/rest/services/NLCDLandCover2001/ImageServer",
    //   opacity: 0.5,
    // }).addTo(map);

    // === 5. VectorTileLayer
    // EL.vectorTileLayer({
    //   url: "https://basemaps.arcgis.com/arcgis/rest/services/World_Basemap_v2/VectorTileServer",
    // }).addTo(map);

    // === 6. WMS Layer
    // L.tileLayer.wms("https://ahocevar.com/geoserver/wms", {
    //   layers: "topp:states",
    //   format: "image/png",
    //   transparent: true,
    // }).addTo(map);

    return () => map.remove();
  }, []);

  return <div id="map" className="w-screen h-screen" />;
}
