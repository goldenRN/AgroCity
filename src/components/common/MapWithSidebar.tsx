

// "use client";
// import { useState, useEffect } from "react";
// import dynamic from "next/dynamic";

// const GeojsonMap = dynamic(() => import("@/app/MapClient/GeojsonMap"), { ssr: false });

// // const MapLeafletArcGIS = dynamic(() => import("./MapLeafletArcGIS"), {
// //   ssr: false, // ⛔ SSR унтраана
// // });
// export default function TwoDVideo() {
//     const [geojson, setGeojson] = useState(null);
//     const [selectedName, setSelectedName] = useState(null);

//     // public доторх geojson файлыг унших
//     useEffect(() => {
//         fetch("/data/zone.geojson")
//             .then((res) => res.json())
//             .then((data) => setGeojson(data))
//             .catch((err) => console.error("GeoJSON уншихад алдаа:", err));
//     }, []);
//     // Давхардсан name-үүдийг unique болгож жагсаах
//     const getUniqueNames = (features) => {
//         if (!features) return [];
//         const names = features.map(f => f.properties.name);
//         return [...new Set(names)];
//     };
//     return (
//         <div className="relative h-700px pl-50 pr-50">
//             <div className="text-center max-w-3xl mx-auto mb-10">
//                 <h1
//                     className="text-3xl md:text-4xl font-roboto-bold text-green-950 uppercase mb-4 tracking-wide"
//                     style={{ fontFamily: 'RobotoBold' }}
//                 >
//                     Aгро-Сити 2D газрын зураг
//                 </h1>
//                 <p
//                     className="text-base md:text-lg text-green-950 leading-relaxed font-roboto-regular"
//                     style={{ fontFamily: 'RobotoRegular' }}
//                 >
//                     Aгро-Сити 2D газрын зураг нь ухаалаг хөдөө аж ахуйн орон зайн шийдвэр гаргах шинэ түвшнийг нээж өгнө.
//                     Бодит мэдээлэлд тулгуурлан төлөвлө, дүн шинжил, эрсдэлээ бууруул.
//                 </p>
//             </div>

//             {/* Map background */}
//             {/* <div className="absolute w-full ">
//                 <GeojsonMap data={geojson} selectedName={selectedName} />
//             </div> */}
//             <div className="grid grid-cols-1 md:grid-cols-5 gap-5 text-center">
//                 {/* Sidebar */}
//                 <div className="col-span-1 bg-slate-100 p-4 rounded shadow overflow-auto">
//                     {geojson && (
//                         <div>
//                             {/* <h2 className="font-bold mb-2">Нэр</h2> */}
//                             <ul className="text-sm h-full overflow-auto">
//                                 {getUniqueNames(geojson.features).map((name, i) => (
//                                     <li key={i}>
//                                         <button
//                                             className={`w-full text-left p-1 rounded hover:bg-gray-200 ${selectedName === name ? "bg-blue-300 font-bold" : ""
//                                                 }`}
//                                             onClick={() => setSelectedName(name)}
//                                         >
//                                             {name}
//                                         </button>
//                                     </li>
//                                 ))}
//                             </ul>
//                         </div>
//                     )}
//                 </div>

//                 {/* Map section */}
//                 <div className="col-span-4 h-[700px] bg-white shadow-lg flex items-center justify-center overflow-hidden">
//                     <GeojsonMap data={geojson} selectedName={selectedName} />
//                 </div>
//             </div>

//         </div >
//     );
// }
// //https://services.arcgis.com/4ed83e99ff5443e0999ce2fccb5c5fba/arcgis/rest/services/agro_ez/FeatureServer/0/query?where=1=1&outFields=*&f=geojson
// //https://services.arcgis.com/4ed83e99ff5443e0999ce2fccb5c5fba/arcgis/rest/services/agro_omch/FeatureServer/0/query?where=1=1&outFields=*&f=geojson
// //https://services.arcgis.com/HJzgwvlNIXssnQar/arcgis/rest/services/agro_park/FeatureServer

// ParentComponent.jsx (эсвэл тухайн page)
import { useMemo, useState } from "react";
import { colorForName } from "@/components/utils/colors";
import dynamic from "next/dynamic";

// Leaflet map-г зөв SSR-гүйгээр дуудахын тулд dynamic ашиглана
const GeojsonMap = dynamic(() => import("@/app/MapClient/GeojsonMap"), {
  ssr: false,
});


function getUniqueNames(features = []) {
    const set = new Set();
    features.forEach((f) => {
        // та JSON-д ямар талбарт нэр байгаагаас хамаарна, жишээ: f.properties.name
        const n = f?.properties?.name ?? f?.properties?.NAME ?? f?.properties?.title;
        if (n) set.add(n);
    });
    return Array.from(set);
}

export default function MapWithSidebar({ geojson }) {
    const names = useMemo(() => getUniqueNames(geojson?.features || []), [geojson]);

    // colorMap compute once from names
    const colorMap = useMemo(() => {
        const m = {};
        names.forEach((n) => {
            m[n] = colorForName(n);
        });
        return m;
    }, [names]);

    const [selectedName, setSelectedName] = useState(null);

    return (
        <div className="grid grid-cols-1 md:grid-cols-5 gap-5 pl-50 pr-50">
            <div className="col-span-1 bg-slate-100 pl-2 rounded shadow overflow-auto">
                {/* <h2 className="font-bold mb-3">Нэр</h2> */}
                <ul className="space-y-1">
                    {names.map((name) => (
                        <li key={name}>
                            <button
                                onClick={() => setSelectedName(selectedName === name ? null : name)}
                                className={`w-full flex items-center gap-3 p-1 rounded text-left transition ${selectedName === name ? "bg-blue-100 font-semibold" : "hover:bg-slate-200"
                                    }`}
                            >
                                {/* color swatch */}
                                <span
                                    className="w-4 h-2 rounded-sm flex-shrink-0"
                                    style={{ background: colorMap[name], boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.06)" }}
                                />
                                <span className="truncate text-sm">{name}</span>
                            </button>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="col-span-4 h-[700px] bg-white shadow-lg">
                {/* GeojsonMap expects props: data, colorMap, selectedName */}
                <GeojsonMap data={geojson} colorMap={colorMap} selectedName={selectedName} />
            </div>
        </div>
    );
}
