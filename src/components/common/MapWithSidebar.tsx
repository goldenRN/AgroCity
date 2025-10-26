import { useMemo, useState } from "react";
import { colorForName } from "@/components/utils/colors";
import dynamic from "next/dynamic";
import React from "react";
import { Menu } from "lucide-react";

const GeojsonMap = dynamic(() => import("@/app/MapClient/GeojsonMap"), {
    ssr: false,
});


function getUniqueNames(features = []) {
    const set = new Set<string>();
    features.forEach((f) => {
        const n = f?.properties?.name ?? f?.properties?.NAME ?? f?.properties?.title;
        if (n) set.add(n);
    });
    return Array.from(set);
}

export default function MapWithSidebar({ geojson }: { geojson: any }) {
    const names = useMemo(() => getUniqueNames(geojson?.features || []), [geojson]);
    const [selectedName, setSelectedName] = useState<string | null>(null);
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const colorMap = useMemo(() => {
        const result: Record<string, string> = {};
        names.forEach((n) => {
            result[n] = colorForName(n);
        });
        return result;
    }, [names]);


    return (
        <section className="px-4 md:px-10 lg:px-20 py-10">
            {/* Гарчиг */}
            <div className="text-center max-w-3xl mx-auto mb-10">
                <h1 className="text-3xl md:text-4xl text-green-950 uppercase mb-4 tracking-wide">
                    “АГРО-СИТИ”
                    2D загвар
                </h1>
                <p className="text-base md:text-lg text-green-950 leading-relaxed">
                    “АГРО-СИТИ” 2D зураглал нь тусгай бүсийн дэд бүтэц, төлөвлөлт, газар ашиглалтыг хялбар, ойлгомжтой байдлаар харуулсан цахим газрын зураг юм. Та эндээс бүс тус бүрийн зориулалт, байрлал, хөгжлийн төлөвийг харах боломжтой.
                </p>
            </div>
            {/* <div className="grid grid-cols-1 md:grid-cols-5 gap-5 pl-50 pr-50"> */}
            {/* Map + Sidebar container */}
            <div className="relative max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-5 gap-5">
                {/* Sidebar desktop */}
                <div className="hidden md:block col-span-1 bg-slate-100 pl-2 rounded shadow overflow-auto max-h-[700px] p-2">
                    <ul className="space-y-1">
                        {names.map((name) => (
                            <li key={name}>
                                <button
                                    onClick={() => setSelectedName(selectedName === name ? null : name)}
                                    className={`w-full flex items-center gap-3 p-1 rounded text-left transition ${selectedName === name ? "bg-blue-100 font-semibold" : "hover:bg-slate-200"
                                        }`}
                                >
                                    <span
                                        className="w-4 h-2 rounded-sm flex-shrink-0"
                                        style={{
                                            background: colorMap[name],
                                            boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.06)",
                                        }}
                                    />
                                    <span className="truncate text-sm">{name}</span>
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Map */}
                <div className="col-span-1 md:col-span-4 bg-white shadow-lg h-[400px] sm:h-[500px] md:h-[700px] relative">
                    <GeojsonMap data={geojson} colorMap={colorMap} selectedName={selectedName} />

                    {/* Mobile toggle button overlay map */}
                    <button
                        className="md:hidden absolute top-4 right-4 z-10 bg-green-700 text-white p-3 rounded-full shadow-lg"
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                    >
                        <Menu className="w-6 h-6" />
                    </button>

                    {/* Mobile sidebar overlay */}
                    <div
                        className={`md:hidden absolute top-10 right-4 w-64 bg-slate-100 rounded shadow-lg p-2 z-20 transition-transform duration-300 ${sidebarOpen ? "translate-x-0" : "translate-x-full"
                            }`}
                        style={{
                            maxHeight: '60vh',
                            overflowY: 'auto',
                        }}
                    >
                        <ul className="space-y-1">
                            {names.map((name) => (
                                <li key={name}>
                                    <button
                                        onClick={() => setSelectedName(selectedName === name ? null : name)}
                                        className={`w-full flex items-center gap-3 p-1 rounded text-left transition ${selectedName === name ? "bg-blue-100 font-semibold" : "hover:bg-slate-200"
                                            }`}
                                    >
                                        <span
                                            className="w-4 h-2 rounded-sm flex-shrink-0"
                                            style={{
                                                background: colorMap[name],
                                                boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.06)",
                                            }}
                                        />
                                        <span className="truncate text-sm">{name}</span>
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            {/* <div className="col-span-4 h-[700px] bg-white shadow-lg">
                <GeojsonMap data={geojson} colorMap={colorMap} selectedName={selectedName} />
            </div> */}
            {/* </div> */}
        </section>
    );
}
