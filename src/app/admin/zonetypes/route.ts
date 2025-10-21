
import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// GET /api/admin/zonetypes
export async function GET() {
  const items = await prisma.zoneType.findMany({
    orderBy: [{ sortIndex: "asc" }, { nameMn: "asc" }],
  });
  return NextResponse.json(items);
}

// POST /api/admin/zonetypes
export async function POST(req: NextRequest) {
  const b = await req.json();
  if (!b?.key || !b?.nameMn) {
    return NextResponse.json({ error: "key and nameMn are required" }, { status: 400 });
  }
  const created = await prisma.zoneType.create({
    data: {
      key: String(b.key).trim(),
      nameMn: String(b.nameMn).trim(),
      nameEn: b.nameEn?.trim() || null,
      colorHex: b.colorHex || null,
      sortIndex: Number.isFinite(Number(b.sortIndex)) ? Number(b.sortIndex) : 0,
    },
  });
  return NextResponse.json(created, { status: 201 });
}

// PUT /api/admin/zonetypes
export async function PUT(req: NextRequest) {
  const b = await req.json();
  if (!b?.id) {
    return NextResponse.json({ error: "id is required" }, { status: 400 });
  }
  const updated = await prisma.zoneType.update({
    where: { id: String(b.id) },
    data: {
      key: b.key?.trim(),
      nameMn: b.nameMn?.trim(),
      nameEn: b.nameEn?.trim() ?? null,
      colorHex: b.colorHex ?? null,
      sortIndex: Number.isFinite(Number(b.sortIndex)) ? Number(b.sortIndex) : 0,
    },
  });
  return NextResponse.json(updated);
}

// DELETE /api/admin/zonetypes?id=...
export async function DELETE(req: NextRequest) {
  const id = new URL(req.url).searchParams.get("id");
  if (!id) return NextResponse.json({ error: "id is required" }, { status: 400 });
  await prisma.zoneType.delete({ where: { id } });
  return NextResponse.json({ ok: true });
}
