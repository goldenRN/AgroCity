import { NextRequest, NextResponse } from "next/server";
import { pool } from "@/lib/db";

// GET /api/admin/zonetypes  → list
export async function GET() {
  const { rows } = await pool.query(
    `SELECT id, key, "nameMn", "nameEn", "colorHex", "sortIndex", "createdAt", "updatedAt"
     FROM "ZoneType"
     ORDER BY "sortIndex" ASC, "nameMn" ASC;`
  );
  return NextResponse.json(rows);
}

// POST /api/admin/zonetypes  → create
// body: { key, nameMn, nameEn?, colorHex?, sortIndex? }
export async function POST(req: NextRequest) {
  try {
    const { key, nameMn, nameEn = null, colorHex = null, sortIndex = 0 } = await req.json();

    if (!key || !nameMn) {
      return NextResponse.json({ error: "key and nameMn are required" }, { status: 400 });
    }

    // unique key шалгана (DB constraint байдаг ч энд user-д гоё алдаа өгөх үүднээс)
    const { rows: exists } = await pool.query(
      `SELECT 1 FROM "ZoneType" WHERE key=$1 LIMIT 1;`,
      [key]
    );
    if (exists.length) {
      return NextResponse.json({ error: "key already exists" }, { status: 409 });
    }

    const { rows } = await pool.query(
      `INSERT INTO "ZoneType"(id, key, "nameMn", "nameEn", "colorHex", "sortIndex", "createdAt", "updatedAt")
       VALUES (gen_random_uuid()::text, $1, $2, $3, $4, $5, now(), now())
       RETURNING id, key, "nameMn", "nameEn", "colorHex", "sortIndex", "createdAt", "updatedAt";`,
      [key, nameMn, nameEn, colorHex, sortIndex]
    );
    return NextResponse.json(rows[0], { status: 201 });
  } catch (e: any) {
    console.error("ZoneType POST error:", e);
    return NextResponse.json({ error: "create_failed", detail: String(e?.message ?? e) }, { status: 500 });
  }
}
