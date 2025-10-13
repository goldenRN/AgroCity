"use client";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

// dynamic import — сервер дээр ажиллуулахгүй
const GeojsonMap = dynamic(() => import("./GeojsonMap"), { ssr: false });

// const MapLeafletArcGIS = dynamic(() => import("./MapLeafletArcGIS"), {
//   ssr: false, // ⛔ SSR унтраана
// });
export default function MapClientPage() {
    const [geojson, setGeojson] = useState(null);
    const [selectedName, setSelectedName] = useState(null);

    // public доторх geojson файлыг автоматаар унших
    useEffect(() => {
        fetch("/data/zone.geojson")
            .then((res) => res.json())
            .then((data) => setGeojson(data))
            .catch((err) => console.error("GeoJSON уншихад алдаа:", err));
    }, []);
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
            <div className="absolute top-4 left-4 z-10 bg-white/90 p-4 rounded shadow max-h-[90%] overflow-auto w-1/5">
                {/* <input type="file" accept=".geojson,.json" onChange={handleFile} className="mb-2" /> */}
                {geojson && (
                    <div>
                        <h2 className="font-bold mb-2">Нэр</h2>
                        {/* <div style={{ height: "100vh" }}>
                            <MapLeafletArcGIS />
                        </div> */}
                        <ul className="text-sm h-full overflow-auto">
                            {getUniqueNames(geojson.features).map((name, i) => (
                                <li key={i}>
                                    <button
                                        className={`w-full text-left p-1 rounded hover:bg-gray-200 ${selectedName === name ? "bg-blue-300 font-bold" : ""
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
//https://services.arcgis.com/4ed83e99ff5443e0999ce2fccb5c5fba/arcgis/rest/services/agro_ez/FeatureServer/0/query?where=1=1&outFields=*&f=geojson
//https://services.arcgis.com/4ed83e99ff5443e0999ce2fccb5c5fba/arcgis/rest/services/agro_omch/FeatureServer/0/query?where=1=1&outFields=*&f=geojson

