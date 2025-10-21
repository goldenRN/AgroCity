import { NextRequest, NextResponse } from "next/server";
import { pool } from "@/lib/db";

export async function GET(req: NextRequest) {
  try {
    const sp = new URL(req.url).searchParams;
    const ids = (sp.get("ids") ?? "")
      .split(",").map(s=>s.trim()).filter(Boolean);

    const base = `
      SELECT
        z.id,
        z.name,
        z.code,
        z."areaSqKm",
        ST_AsGeoJSON(z.geom)::json AS geometry,
        t."key"      AS "typeKey",
        t."nameMn"   AS "typeNameMn",
        t."colorHex" AS "typeColor"
      FROM "Zone" z
      LEFT JOIN "ZoneType" t ON t.id = z."typeId"
      /**WHERE**/
      ORDER BY z."updatedAt" DESC
      LIMIT 1000;
    `;

    const sql = ids.length
      ? base.replace("/**WHERE**/","WHERE z.id = ANY($1::text[])")
      : base.replace("/**WHERE**/","");

    const { rows } = ids.length
      ? await pool.query(sql, [ids])
      : await pool.query(sql);

    return NextResponse.json({
      type: "FeatureCollection",
      features: rows.map(r => ({
        type: "Feature",
        id: r.id,
        properties: {
          id: r.id,
          name: r.name,
          code: r.code,
          areaSqKm: r.areaSqKm,
          type: r.typeKey,
          typeName: r.typeNameMn,
          colorHex: r.typeColor,
        },
        geometry: r.geometry,
      })),
    });
  } catch (e:any) {
    console.error("zones/geojson error:", e);
    return NextResponse.json({ error:"geojson_failed", detail:String(e?.message??e) }, { status:500 });
  }
}

// import { NextRequest, NextResponse } from "next/server";

// const prisma = new PrismaClient();

// export async function GET(req: NextRequest) {
//   try {
//     const sp = new URL(req.url).searchParams;
//     const ids = (sp.get("ids") ?? "")
//       .split(",")
//       .map((s) => s.trim())
//       .filter(Boolean);

//     const baseSql = `
//       SELECT
//         z.id,
//         z.name,
//         z.code,
//         z."areaSqKm",
//         ST_AsGeoJSON(z.geom)::json AS geometry,
//         t."key"      AS "typeKey",
//         t."nameMn"   AS "typeNameMn",
//         t."colorHex" AS "typeColor"
//       FROM "Zone" z
//       LEFT JOIN "ZoneType" t ON t.id = z."typeId"
//       /**WHERE**/
//       ORDER BY z."updatedAt" DESC
//       LIMIT 1000;
//     `;

//     const sql = ids.length
//       ? baseSql.replace("/**WHERE**/", `WHERE z.id = ANY($1::text[])`)
//       : baseSql.replace("/**WHERE**/", ``);

//     // ⚠️ Хэрэв энд 42P18 гарвал Prisma.sql templated хувилбар руу шилжүүлээрэй.
//     const rows: any[] = ids.length
//       ? await prisma.$queryRawUnsafe(sql, ids)
//       : await prisma.$queryRawUnsafe(sql);

//     return NextResponse.json({
//       type: "FeatureCollection",
//       features: rows.map((r: any) => ({
//         type: "Feature",
//         id: r.id,
//         properties: {
//           id: r.id,
//           name: r.name,
//           code: r.code,
//           areaSqKm: r.areaSqKm,
//           type: r.typeKey,          // renderer-д ашиглах key
//           typeName: r.typeNameMn,   // UI-д харагдуулах нэр
//           colorHex: r.typeColor,    // renderer-д өнгө (хэрэв ашиглавал)
//         },
//         geometry: r.geometry,
//       })),
//     });
//   } catch (err: any) {
//     console.error("zones/geojson error:", err);
//     return NextResponse.json(
//       { error: "geojson_failed", detail: String(err?.message ?? err) },
//       { status: 500 }
//     );
//   }
// }
