"use client";
import { MapContainer, TileLayer, GeoJSON, Marker } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

export default function GeojsonMap({ data, selectedName }) {
  const style = (feature) => ({
    color: "black",
    weight: 1,
    fillOpacity: feature.properties.name === selectedName ? 0.5 : 0.2,
    fillColor: feature.properties.name === selectedName ? "orange" : "green",
  });

  const renderAreaLabels = (geojson) => {
    const markers = [];
    geojson.features.forEach((feature, index) => {
      if (
        feature.geometry.type === "Polygon" &&
        feature.properties.name === selectedName
      ) {
        const latlngs = feature.geometry.coordinates[0].map(([lng, lat]) => [lat, lng]);
        const latSum = latlngs.reduce((sum, coord) => sum + coord[0], 0);
        const lngSum = latlngs.reduce((sum, coord) => sum + coord[1], 0);
        const center = [latSum / latlngs.length, lngSum / latlngs.length];

        const sqm = feature.properties.Shape_Area || 0;
        const ha = (sqm / 10000).toFixed(2);

        markers.push(
          <Marker
            key={index}
            position={center}
            icon={L.divIcon({
              className: "polygon-label",
              html: `<div style="background: rgba(255,255,255,0.8); padding: 2px 4px; border-radius: 4px; font-size:12px;">
                      ${ha} га
                    </div>`,
            })}
          />
        );
      }
    });
    return markers;
  };

  const onEachFeature = (feature, layer) => {
    if (feature.properties) {
      const sqm = feature.properties.Shape_Area || 0;
      const ha = (sqm / 10000).toFixed(2);

      layer.bindTooltip(
        `<strong>${feature.properties.name}</strong><br/>Талбай: ${ha} га`,
        { sticky: true }
      );
    }
  };

  return (
    <MapContainer
      style={{ width: "100%", height: "100%" }}
      center={[48.18, 106.69]}
      zoom={13}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; OpenStreetMap contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {data && <GeoJSON data={data} style={style} onEachFeature={onEachFeature} />}
      {data && renderAreaLabels(data)}
    </MapContainer>
  );
}
