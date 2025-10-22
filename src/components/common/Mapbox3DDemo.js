"use client";
import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;

export default function Mapbox3DDemo({ data }) {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [selectedName, setSelectedName] = useState(null);
  const [mapLoaded, setMapLoaded] = useState(false);

  // Initialize map
  useEffect(() => {
    if (map.current) return;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/light-v11",
      center: [106.697, 48.18],
      zoom: 13,
      pitch: 60,
      bearing: -17.6,
      antialias: true,
    });

    map.current.on("load", () => {
      setMapLoaded(true); // map style loaded

      map.current.addSource("geojson-data", {
        type: "geojson",
        data: data,
      });

      // 3D polygons
      map.current.addLayer({
        id: "3d-polygons",
        type: "fill-extrusion",
        source: "geojson-data",
        paint: {
          "fill-extrusion-color": "#00aaff",
          "fill-extrusion-height": [
            "interpolate",
            ["linear"],
            ["get", "Shape_Area"],
            0,
            0,
            900000,
            300,
          ],
          "fill-extrusion-opacity": 0.7,
        },
      });

      // Popup on hover
      map.current.on("mouseenter", "3d-polygons", (e) => {
        map.current.getCanvas().style.cursor = "pointer";
        const coordinates = e.lngLat;
        const props = e.features[0].properties;
        const ha = (props.Shape_Area / 10000).toFixed(2);

        new mapboxgl.Popup({ closeButton: false })
          .setLngLat(coordinates)
          .setHTML(`<strong>${props.name}</strong><br/>Талбай: ${ha} га`)
          .addTo(map.current);
      });

      map.current.on("mouseleave", "3d-polygons", () => {
        map.current.getCanvas().style.cursor = "";
        document.querySelectorAll(".mapboxgl-popup").forEach((p) => p.remove());
      });
    });
  }, [data]);

  // Update polygon color safely
  useEffect(() => {
    if (!map.current || !mapLoaded) return;
    if (!map.current.getLayer("3d-polygons")) return;

    map.current.setPaintProperty("3d-polygons", "fill-extrusion-color", [
      "case",
      ["==", ["get", "name"], selectedName],
      "#ff3333",
      "#00aaff",
    ]);
  }, [selectedName, mapLoaded]);

  // Sidebar unique names
  const uniqueNames = [...new Set(data.features.map((f) => f.properties.name))];

  return (
    <div style={{ display: "flex", width: "100vw", height: "100vh" }}>
      {/* Sidebar */}
      <div
        style={{
          width: "200px",
          background: "#f7f7f7",
          padding: "10px",
          overflowY: "auto",
        }}
      >
        <h3>Names</h3>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {uniqueNames.map((name) => (
            <li key={name}>
              <button
                style={{
                  width: "100%",
                  margin: "2px 0",
                  padding: "5px",
                  background: selectedName === name ? "#ff3333" : "#ddd",
                  border: "none",
                  cursor: "pointer",
                }}
                onClick={() => setSelectedName(name)}
              >
                {name}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Map */}
      <div ref={mapContainer} style={{ flex: 1 }} />
    </div>
  );
}