import { NextRequest, NextResponse } from "next/server";
import { pool } from "@/lib/db";

// GET /api/admin/zonetypes/:id
export async function GET(_: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;
  const { rows } = await pool.query(
    `SELECT id, key, "nameMn", "nameEn", "colorHex", "sortIndex", "createdAt", "updatedAt"
     FROM "ZoneType" WHERE id=$1;`,
    [id]
  );
  if (!rows.length) return NextResponse.json({ error: "not_found" }, { status: 404 });
  return NextResponse.json(rows[0]);
}

// PUT /api/admin/zonetypes/:id  → update
// body: { key?, nameMn?, nameEn?, colorHex?, sortIndex? }
export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { id } = params;
    const body = await req.json();

    // одоо байгаа утгыг авч merge хийх
    const { rows: curRows } = await pool.query(`SELECT * FROM "ZoneType" WHERE id=$1;`, [id]);
    if (!curRows.length) return NextResponse.json({ error: "not_found" }, { status: 404 });

    const cur = curRows[0];
    const next = {
      key:      body.key      ?? cur.key,
      nameMn:   body.nameMn   ?? cur.nameMn,
      nameEn:   body.nameEn   ?? cur.nameEn,
      colorHex: body.colorHex ?? cur.colorHex,
      sortIndex: typeof body.sortIndex === "number" ? body.sortIndex : cur.sortIndex,
    };

    // key давхцах эсэхийг шалгая
    if (next.key !== cur.key) {
      const { rows: sameKey } = await pool.query(
        `SELECT 1 FROM "ZoneType" WHERE key=$1 AND id<>$2 LIMIT 1;`,
        [next.key, id]
      );
      if (sameKey.length) return NextResponse.json({ error: "key_exists" }, { status: 409 });
    }

    const { rows } = await pool.query(
      `UPDATE "ZoneType"
       SET key=$1, "nameMn"=$2, "nameEn"=$3, "colorHex"=$4, "sortIndex"=$5, "updatedAt"=now()
       WHERE id=$6
       RETURNING id, key, "nameMn", "nameEn", "colorHex", "sortIndex", "createdAt", "updatedAt";`,
      [next.key, next.nameMn, next.nameEn, next.colorHex, next.sortIndex, id]
    );
    return NextResponse.json(rows[0]);
  } catch (e: any) {
    console.error("ZoneType PUT error:", e);
    return NextResponse.json({ error: "update_failed", detail: String(e?.message ?? e) }, { status: 500 });
  }
}

// DELETE /api/admin/zonetypes/:id
export async function DELETE(_: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;

  // ашиглагдаж байгаа эсэхийг шалгах (Zone.typeId)
  const { rows: used } = await pool.query(`SELECT 1 FROM "Zone" WHERE "typeId"=$1 LIMIT 1;`, [id]);
  if (used.length) {
    return NextResponse.json({ error: "in_use", detail: "This ZoneType is referenced by Zone" }, { status: 409 });
  }

  const { rowCount } = await pool.query(`DELETE FROM "ZoneType" WHERE id=$1;`, [id]);
  if (!rowCount) return NextResponse.json({ error: "not_found" }, { status: 404 });
  return NextResponse.json({ ok: true });
}
