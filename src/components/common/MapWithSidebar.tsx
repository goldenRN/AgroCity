import { useMemo, useState } from "react";
import { colorForName } from "@/components/utils/colors";
import dynamic from "next/dynamic";
import React from "react";

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

  const colorMap = useMemo(() => {
    const result: Record<string, string> = {};
    names.forEach((n) => {
      result[n] = colorForName(n);
    });
    return result;
  }, [names]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-5 pl-50 pr-50">
      <div className="col-span-1 bg-slate-100 pl-2 rounded shadow overflow-auto">
        <ul className="space-y-1">
          {names.map((name) => (
            <li key={name}>
              <button
                onClick={() => setSelectedName(selectedName === name ? null : name)}
                className={`w-full flex items-center gap-3 p-1 rounded text-left transition ${
                  selectedName === name ? "bg-blue-100 font-semibold" : "hover:bg-slate-200"
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

      <div className="col-span-4 h-[700px] bg-white shadow-lg">
        <GeojsonMap data={geojson} colorMap={colorMap} selectedName={selectedName} />
      </div>
    </div>
  );
}
