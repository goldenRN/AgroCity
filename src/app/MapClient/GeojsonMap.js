// "use client";
// import { MapContainer, TileLayer, GeoJSON, Marker } from "react-leaflet";
// import L from "leaflet";
// import "leaflet/dist/leaflet.css";

// export default function GeojsonMap({ data, selectedName }) {
// const style = (feature) => ({
//   color: "black",
//   weight: 1,
//   fillOpacity: feature.properties.name === selectedName ? 0.5 : 0.2,
//   fillColor: feature.properties.name === selectedName ? "orange" : "green",
// });

//   const renderAreaLabels = (geojson) => {
//     const markers = [];
//     geojson.features.forEach((feature, index) => {
//       if (
//         feature.geometry.type === "Polygon" &&
//         feature.properties.name === selectedName
//       ) {
//         const latlngs = feature.geometry.coordinates[0].map(([lng, lat]) => [lat, lng]);
//         const latSum = latlngs.reduce((sum, coord) => sum + coord[0], 0);
//         const lngSum = latlngs.reduce((sum, coord) => sum + coord[1], 0);
//         const center = [latSum / latlngs.length, lngSum / latlngs.length];

//         const sqm = feature.properties.Shape_Area || 0;
//         const ha = (sqm / 10000).toFixed(2);

//         markers.push(
//           <Marker
//             key={index}
//             position={center}
//             icon={L.divIcon({
//               className: "polygon-label",
//               html: `<div style="background: rgba(255,255,255,0.8); padding: 2px 4px; border-radius: 4px; font-size:12px;">
//                       ${ha} га
//                     </div>`,
//             })}
//           />
//         );
//       }
//     });
//     return markers;
//   };

//   const onEachFeature = (feature, layer) => {
//     if (feature.properties) {
//       const sqm = feature.properties.Shape_Area || 0;
//       const ha = (sqm / 10000).toFixed(2);

//       layer.bindTooltip(
//         `<strong>${feature.properties.name}</strong><br/>Талбай: ${ha} га`,
//         { sticky: true }
//       );
//     }
//   };

//   return (
//     <MapContainer
//       style={{ width: "100%", height: "100%" }}
//       center={[48.18, 106.69]}
//       zoom={13}
//       scrollWheelZoom={true}
//     >
//       <TileLayer
//         attribution='&copy; OpenStreetMap contributors'
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//       />
//       {data && <GeoJSON data={data} style={style} onEachFeature={onEachFeature} />}
//       {data && renderAreaLabels(data)}
//     </MapContainer>
//   );
// }

// GeojsonMap.jsx
'use client'

import { useEffect, useMemo } from "react";
import { MapContainer, TileLayer, GeoJSON, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
const FitBounds = ({ data }) => {
  const map = useMap();

  useEffect(() => {
    if (data) {
      const bounds = L.geoJSON(data).getBounds();
      map.fitBounds(bounds, { padding: [20, 20] });
    }
  }, [data, map]);

  return null;
};
export default function GeojsonMap({ data, colorMap = {}, selectedName = null }) {
  const center = useMemo(() => {
    // default center (Улаанбаатар жишээ)
    return [47.92123, 106.918556];
  }, []);

  // style function for features
  const styleFeature = (feature) => {
    const name =
      feature?.properties?.name ??
      feature?.properties?.NAME ??
      feature?.properties?.title ??
      null;

    const baseColor = name && colorMap[name] ? colorMap[name] : "hsl(210 8% 90%)"; // default light gray
    const isSelected = selectedName && name === selectedName;

    return {
      color: isSelected ? "#0ea5e9" /*cyan-500*/ : baseColor, // stroke color
      weight: isSelected ? 3 : 1,
      opacity: 1,
      fillColor: baseColor,
      fillOpacity: isSelected ? 0.45 : 0.35,
    };
  };

  // optional: onEachFeature to bind popup
  const onEachFeature = (feature, layer) => {
    const name =
      feature?.properties?.name ??
      feature?.properties?.NAME ??
      feature?.properties?.title ??
      "Unnamed";
    layer.bindPopup(`<strong>${name}</strong>`);
  };

  // If no data yet, show empty container
  if (!data) {
    return <div className="w-full h-full flex items-center justify-center text-slate-500">No geojson</div>;
  }

  return (
    <MapContainer center={center} zoom={12} scrollWheelZoom={true} className="relative z-0 w-full h-full">
      <TileLayer attribution='&copy; OpenStreetMap contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
       <FitBounds data={data} />
      <GeoJSON data={data} style={styleFeature} onEachFeature={onEachFeature} />
    </MapContainer>
  );
  // <MapContainer
  //   style={{ width: "100%", height: "100%" }}
  //   center={[48.18, 106.69]}
  //   zoom={13}
  //   scrollWheelZoom={true}
  // >
  //   <TileLayer
  //     attribution='&copy; contributors'
  //     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  //   />
  //   {/* {data && <GeoJSON data={data} style={style} onEachFeature={onEachFeature} />}
  //   {data && renderAreaLabels(data)} */}
  //   <TileLayer attribution='&copy; OpenStreetMap contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
  //   <GeoJSON data={data} style={styleFeature} onEachFeature={onEachFeature} />
  // </MapContainer>
}

