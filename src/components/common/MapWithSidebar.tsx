
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
