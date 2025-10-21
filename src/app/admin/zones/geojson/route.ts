import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// /api/admin/zones/geojson?ids=aaa,bbb  (хоосон бол бүх zone-с дээж)

export async function GET(req: NextRequest) {
  try {
    const sp = new URL(req.url).searchParams;
    const ids = (sp.get("ids") ?? "")
      .split(",")
      .map(s => s.trim())
      .filter(Boolean);

    const baseSql = `
      SELECT z.id,
             z.name,
             z.code,
             z."areaSqKm",
             ST_AsGeoJSON(z.geom)::json AS geometry,
             (SELECT t."key" FROM "ZoneType" t WHERE t.id = z."typeId") AS type
      FROM "Zone" z
      /**WHERE**/
      ORDER BY z."updatedAt" DESC
      LIMIT 500;
    `;

    const sql = ids.length
      ? baseSql.replace("/**WHERE**/", `WHERE z.id = ANY($1)`)
      : baseSql.replace("/**WHERE**/", ``);

    const rows: any[] = ids.length
      ? await prisma.$queryRawUnsafe(sql, ids)
      : await prisma.$queryRawUnsafe(sql);

    return NextResponse.json({
      type: "FeatureCollection",
      features: rows.map((r: any) => ({
        type: "Feature",
        id: r.id,
        properties: {
          id: r.id,
          name: r.name,
          code: r.code,
          type: r.type,
          areaSqKm: r.areaSqKm,
        },
        geometry: r.geometry,
      })),
    });
  } catch (err: any) {
    console.error("zones/geojson error:", err);
    return NextResponse.json(
      { error: "geojson_failed", detail: String(err?.message ?? err) },
      { status: 500 },
    );
  }
}

// export async function GET(req: NextRequest) {
//   const sp = new URL(req.url).searchParams;
//   const ids = (sp.get("ids") ?? "").split(",").map(s => s.trim()).filter(Boolean);

//   const where: any = ids.length ? { id: { in: ids } } : {};
//   const zones = await prisma.zone.findMany({
//     where, select: { id: true, name: true, code: true, geometry: true, areaSqKm: true, bbox: true, type: { select: { key: true, colorHex: true } } }
//   });

  

//   const fc = {
//     type: "FeatureCollection",
//     features: zones.map(r: any) => ({
//       type: "Feature",
//       id: z.id,
//       properties: {
//         id: z.id, name: z.name, code: z.code, areaSqKm: z.areaSqKm,
//         type: z.type?.key ?? null, color: z.type?.colorHex ?? null,
//       },
//       geometry: z.geometry,
//     }))
//   };
//   return NextResponse.json(fc);
// }
