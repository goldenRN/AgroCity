import { NextRequest, NextResponse } from "next/server";
import { pool } from "@/lib/db";

export async function GET(req: NextRequest) {
  const sp = new URL(req.url).searchParams;
  const search   = (sp.get("search") ?? "").trim();
  const sort     = sp.get("sort") ?? "updatedAt";
  const order    = (sp.get("order") ?? "desc").toLowerCase()==="asc" ? "asc":"desc";
  const page     = Math.max(1, Number(sp.get("page") ?? 1));
  const pageSize = Math.min(100, Math.max(1, Number(sp.get("pageSize") ?? 20)));
  const offset   = (page-1)*pageSize;

  const sortCol = ({
    updatedAt: 'z."updatedAt"',
    createdAt: 'z."createdAt"',
    name: 'z."name"',
    code: 'z."code"',
    areaSqKm: 'z."areaSqKm"',
  } as Record<string,string>)[sort] ?? 'z."updatedAt"';

  const params:any[] = [];
  const where:string[] = [];
  if (search) {
    params.push(`%${search}%`);
    where.push(`(z."name" ILIKE $${params.length} OR z."code" ILIKE $${params.length})`);
  }
  const whereSql = where.length ? `WHERE ${where.join(" AND ")}` : "";

  const { rows: c } = await pool.query(
    `SELECT COUNT(*)::int AS total FROM "Zone" z ${whereSql}`, params
  );
  const total = c[0]?.total ?? 0;

  params.push(pageSize, offset);
  const { rows } = await pool.query(
    `SELECT z.id, z.name, z.code, z."areaSqKm", z."createdAt", z."updatedAt",
            t."key" AS "typeKey", t."nameMn" AS "typeNameMn", t."colorHex" AS "typeColor"
     FROM "Zone" z
     LEFT JOIN "ZoneType" t ON t.id = z."typeId"
     ${whereSql}
     ORDER BY ${sortCol} ${order}
     LIMIT $${params.length-1} OFFSET $${params.length};`,
    params
  );

  return NextResponse.json({
    total,
    items: rows.map(r => ({
      id:r.id, name:r.name, code:r.code, areaSqKm:r.areaSqKm,
      createdAt:r.createdAt, updatedAt:r.updatedAt,
      type: r.typeKey ? { key:r.typeKey, nameMn:r.typeNameMn, colorHex:r.typeColor } : null,
    })),
  });
}

// import { NextRequest, NextResponse } from "next/server";
// import { PrismaClient } from "@prisma/client";
// const prisma = new PrismaClient();

// const ALLOWED_SORT = new Set(["name","code","areaSqKm","updatedAt","createdAt"]);

// export async function GET(req: NextRequest) {
//   try {
//     const { searchParams } = new URL(req.url);
//     const q = (searchParams.get("search") ?? "").trim();
//     const sortParam = searchParams.get("sort") ?? "updatedAt";
//     const sort = ALLOWED_SORT.has(sortParam) ? sortParam : "updatedAt";
//     const order: "asc" | "desc" = (searchParams.get("order") ?? "desc").toLowerCase() === "asc" ? "asc" : "desc";
//     const page = Math.max(1, Number(searchParams.get("page") ?? 1));
//     const pageSize = Math.min(100, Math.max(10, Number(searchParams.get("pageSize") ?? 20)));

//     const where: any = {};
//     if (q) {
//       where.OR = [
//         { name: { contains: q, mode: "insensitive" } },
//         { code: { contains: q, mode: "insensitive" } },
//       ];
//     }

//     const [items, total] = await Promise.all([
//       prisma.zone.findMany({
//         where,
//         orderBy: { [sort]: order },
//         skip: (page - 1) * pageSize,
//         take: pageSize,
//         select: {
//           id: true,
//           name: true,
//           code: true,
//           areaSqKm: true,
//           createdAt: true,
//           updatedAt: true,
//           type: { select: { key: true, nameMn: true, colorHex: true } },
//         },
//       }),
//       prisma.zone.count({ where }),
//     ]);

//     return NextResponse.json({ items, total, page, pageSize });
//   } catch (err: any) {
//     console.error("admin/zones list error:", err);
//     return NextResponse.json(
//       { error: "list_failed", detail: String(err?.message ?? err) },
//       { status: 500 }
//     );
//   }
// }
