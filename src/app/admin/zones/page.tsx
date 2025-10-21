"use client";
import "@arcgis/core/assets/esri/themes/light/main.css";
import React, { useEffect, useMemo, useRef, useState } from "react";
import esriConfig from "@arcgis/core/config.js";
esriConfig.assetsPath = "/arcgis/assets"; 
esriConfig.workers.loaderUrl = "/arcgis/assets/esri/core/workers/worker.js";

type ZoneRow = {
  id: string; name: string|null; code: string|null; areaSqKm: number|null;
  updatedAt: string; createdAt: string;
  type?: { key:string|null; nameMn:string|null; colorHex:string|null }|null;
};
type ZT = { id: string; key: string; nameMn: string; colorHex?: string|null; sortIndex: number };

export default function ZonesPage() {
  const [rows, setRows] = useState<ZoneRow[]>([]);
  const [q, setQ] = useState("");
  const [sort, setSort] = useState("updatedAt");
  const [order, setOrder] = useState<"asc"|"desc">("desc");
  const [page, setPage] = useState(1);
  const [pageSize] = useState(20);
  const [total, setTotal] = useState(0);
  const [selected, setSelected] = useState<string[]>([]);

  // ZoneType-уудыг админ API /admin/api/zonetypes-оос татаж авч байна.
  const [types, setTypes] = useState<ZT[]>([]);
  useEffect(() => {
    fetch("/admin/api/zonetypes")
      .then(r => r.json())
      .then((d:ZT[]) => setTypes(d ?? []));
  }, []);
  

  useEffect(()=>{
    const sp = new URLSearchParams({ search:q, sort, order, page:String(page), pageSize:String(pageSize) });
    fetch(`/admin/api/zones?`+sp.toString())
      .then(r=>r.json())
      .then(d=>{ setRows(d.items??[]); setTotal(d.total??0); });
  }, [q, sort, order, page, pageSize]);

  const geoUrl = useMemo(() => {
    // ABSOLUTE URL болгож өгье
    const base = typeof window !== "undefined" ? window.location.origin : "";
    return selected.length
      ? `${base}/admin/api/zones/geojson?ids=${selected.join(",")}`
      : `${base}/admin/api/zones/geojson`;
  }, [selected]);
  // const geoUrl = useMemo(()=> selected.length
  //   ? `/admin/api/zones/geojson?ids=${selected.join(",")}`
  //   : `/admin/api/zones/geojson`, [selected]);

  return (
    <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:16, padding:16, height:"calc(100vh - 40px)"}}>
      <div style={{display:"flex", flexDirection:"column", gap:8, minWidth:0}}>
        <h2 style={{margin:0}}>Zones</h2>
        <div style={{display:"flex", gap:8}}>
          <input value={q} onChange={e=>{setPage(1); setQ(e.target.value);}} placeholder="Хайх name/code…"
                 style={{flex:1, padding:6, border:"1px solid #ddd", borderRadius:6}} />
          <select value={sort} onChange={e=>setSort(e.target.value)} style={{padding:6}}>
            <option value="updatedAt">Updated</option>
            <option value="createdAt">Created</option>
            <option value="name">Name</option>
            <option value="code">Code</option>
            <option value="areaSqKm">Area (km²)</option>
          </select>
          <select value={order} onChange={e=>setOrder(e.target.value as any)} style={{padding:6}}>
            <option value="desc">Desc</option><option value="asc">Asc</option>
          </select>
        </div>

        <div style={{overflow:"auto", border:"1px solid #eee", borderRadius:8}}>
          <table style={{width:"100%", fontSize:14, borderCollapse:"collapse"}}>
            <thead>
              <tr style={{background:"#fafafa"}}>
                <th style={th}>Name</th><th style={th}>Code</th>
                <th style={thRight}>Area (km²)</th><th style={th}>Type</th><th style={th}>Updated</th>
              </tr>
            </thead>
            <tbody>
              {rows.map(r=>(
                <tr key={r.id}
                    onClick={()=> setSelected(prev => prev.includes(r.id) ? prev.filter(x=>x!==r.id) : [...prev, r.id])}
                    style={{borderTop:"1px solid #eee", cursor:"pointer", background: selected.includes(r.id) ? "#fff8e1" : undefined}}>
                  <td style={td}>{r.name ?? "-"}</td>
                  <td style={td}>{r.code ?? "-"}</td>
                  <td style={{...td, textAlign:"right"}}>{r.areaSqKm?.toFixed?.(2) ?? "-"}</td>
                  <td style={td}>
                    <span style={{display:"inline-flex", alignItems:"center", gap:6}}>
                      {r.type?.colorHex && <span style={{
                        width:10,height:10,borderRadius:2,background:r.type.colorHex,display:"inline-block",border:"1px solid #ccc"}} />}
                      {r.type?.nameMn ?? r.type?.key ?? "-"}
                    </span>
                  </td>
                  <td style={td}>
                    <span style={{display:"inline-flex", alignItems:"center", gap:6}}>
                      <select
                        value={r.type ? (types.find(t => t.nameMn === r.type?.nameMn || t.key === r.type?.key)?.id ?? "") : ""}
                        onChange={async (e) => {
                          const newTypeId = e.target.value;
                          if (!newTypeId) return;
                          await fetch("/admin/api/zonetypes", {
                            method: "PUT",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify({ id: r.id, typeId: newTypeId })
                          });
                          // UI-г шинэчилье: server-с эргэж татах эсвэл локалд patch хийх
                          setRows(prev => prev.map(x =>
                            x.id === r.id
                              ? { ...x, type: (() => {
                                  const t = types.find(tt => tt.id === newTypeId);
                                  return t ? { key: t.key, nameMn: t.nameMn, colorHex: t.colorHex ?? null } : r.type;
                                })()
                                }
                              : x
                          ));
                        }}
                        style={{ padding: 4 }}
                      >
                        <option value="">-- сонгох --</option>
                        {types.map(t => (
                          <option key={t.id} value={t.id}>
                            {t.nameMn} {t.colorHex ? `(${t.colorHex})` : ""}
                          </option>
                        ))}
                      </select>
                      {/* өнгөний жижиг квадратик */}
                      {r.type?.colorHex && <span style={{
                        width:10,height:10,borderRadius:2,background:r.type.colorHex,display:"inline-block",border:"1px solid #ccc"
                      }} />}
                    </span>
                  </td>
                  <td style={td}>{new Date(r.updatedAt).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={{display:"flex", gap:8, alignItems:"center"}}>
          <button onClick={()=> setPage(p=>Math.max(1,p-1))} disabled={page===1}>Prev</button>
          <span>Page {page} / {Math.max(1, Math.ceil(total / pageSize))}</span>
          <button onClick={()=> setPage(p=> p * pageSize < total ? p+1 : p)} disabled={page * pageSize >= total}>Next</button>
          <span style={{marginLeft:"auto"}}>{selected.length} selected</span>
        </div>
      </div>

      <GeoMapPane geoUrl={geoUrl} types={types} />
    </div>
  ); 
}

const th: React.CSSProperties = { textAlign:"left", padding:"8px 10px", borderBottom:"1px solid #eee" };
const thRight: React.CSSProperties = { ...th, textAlign:"right" };
const td: React.CSSProperties = { padding:"8px 10px" };

// ---- Map pane (ArcGIS) ----
function GeoMapPane({ geoUrl, types }: { geoUrl: string; types: ZT[] }) {
  const ref = useRef<HTMLDivElement>(null);

  function hexToRgba(hex: string, alpha=0.3): [number,number,number,number] {
    const m = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if (!m) return [180,180,180, alpha];
    return [parseInt(m[1],16), parseInt(m[2],16), parseInt(m[3],16), alpha] as any;
  }

  useEffect(() => {
  let view: __esri.MapView | null = null;
  let cancelled = false;

  (async () => {
    const Map = (await import("@arcgis/core/Map")).default;
    const MapView = (await import("@arcgis/core/views/MapView")).default;
    const GeoJSONLayer = (await import("@arcgis/core/layers/GeoJSONLayer")).default;
    const BasemapGallery = (await import("@arcgis/core/widgets/BasemapGallery")).default;
    const Expand = (await import("@arcgis/core/widgets/Expand")).default;

    const map = new Map({ basemap: "osm" });
    view = new MapView({
      container: ref.current!,
      map,
      center: [106.9, 47.9],
      zoom: 5,
    });

    const gallery = new BasemapGallery({ view });
    view.ui.add(new Expand({ view, content: gallery }), "top-right");

    const layer = new GeoJSONLayer({
      url: geoUrl,
      outFields: ["*"],
      popupTemplate: { title: "{name}", content: [{ type: "fields" }] },
      renderer: {
        type: "unique-value",
        field: "type",
        defaultSymbol: { type: "simple-fill", color: [200,200,200,0.2], outline: { color: "#888", width: 1 } },
        uniqueValueInfos: (types ?? []).map(t => ({
          value: t.key,
          label: t.nameMn,
          symbol: {
            type: "simple-fill",
            color: hexToRgba(t.colorHex ?? "#ccc", 0.25),
            outline: { color: t.colorHex ?? "#555", width: 1.5 },
          },
        })),
      } as any,
    });
    map.add(layer);

    layer.on("layerview-create-error", (e:any)=> console.error("layerview-create-error", e));
    // layer.on("error", (e:any)=> console.error("layer error", e));

    // ✅ goTo-г найдвартай дууддаг туслах функц
    const safeGoTo = async (target?: any) => {
      if (!target) return;
      // view ачаалал дууссан, амьд эсэхийг шалгана
      await view?.when();
      if (cancelled || !view || (view as any).destroyed) return;
      try {
        await view.goTo({ target }, { animate: false });
      } catch (e) {
        // Хэрэв энэ үед view dispose болсон байж болно — дуугүй алгас
        // console.debug("safeGoTo skipped:", e);
      }
    };

    await layer.when();

    // Эхлээд queryExtent ашиглая (fullExtent-ээс найдвартай)
    try {
      const q = layer.createQuery();
      q.returnGeometry = false;
      const { extent } = await layer.queryExtent(q);
      if (!cancelled) {
        if (extent) {
          await safeGoTo(extent);
        } else if ((layer as any).fullExtent) {
          await safeGoTo((layer as any).fullExtent);
        } else {
          // extent алга бол default center/zoom хэвээр
          console.warn("No extent available; keeping default view.");
        }
      }
    } catch (err) {
      console.error("goTo extent failed (handled):", err);
    }
  })();

  return () => {
    cancelled = true;
    // жижиг тайм-аут хийгээд дараа нь устгах нь pending goTo race-ыг бууруулна
    setTimeout(() => { view?.destroy?.(); view = null; }, 0);
  };
}, [geoUrl, types]);



  

  return <div ref={ref} style={{width:"100%", height:"100%", border:"1px solid #eee", borderRadius:8}} />;
}
