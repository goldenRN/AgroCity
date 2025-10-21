"use client";
import React, { useEffect, useMemo, useState } from "react";

type ZT = {
  id: string;
  key: string;
  nameMn: string;
  nameEn?: string | null;
  colorHex?: string | null;
  sortIndex: number;
  createdAt: string;
  updatedAt: string;
};

export default function ZoneTypesPage() {
  const [items, setItems] = useState<ZT[]>([]);
  const [loading, setLoading] = useState(false);
  const [q, setQ] = useState("");
  const [editing, setEditing] = useState<ZT | null>(null); // null=create
  const [form, setForm] = useState<Partial<ZT>>({ key: "", nameMn: "", nameEn: "", colorHex: "", sortIndex: 0 });
  const [err, setErr] = useState<string | null>(null);

  const load = async () => {
    setLoading(true);
    setErr(null);
    try {
      const r = await fetch("/admin/api/zonetypes", { cache: "no-store" });
      const d = await r.json();
      setItems(Array.isArray(d) ? d : []);
    } catch (e: any) {
      setErr(String(e?.message ?? e));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { load(); }, []);

  const filtered = useMemo(() => {
    if (!q) return items;
    const s = q.toLowerCase();
    return items.filter(i =>
      (i.key ?? "").toLowerCase().includes(s) ||
      (i.nameMn ?? "").toLowerCase().includes(s) ||
      (i.nameEn ?? "").toLowerCase().includes(s)
    );
  }, [items, q]);

  const startCreate = () => {
    setEditing(null);
    setForm({ key: "", nameMn: "", nameEn: "", colorHex: "", sortIndex: 0 });
  };

  const startEdit = (it: ZT) => {
    setEditing(it);
    setForm({
      key: it.key,
      nameMn: it.nameMn,
      nameEn: it.nameEn ?? "",
      colorHex: it.colorHex ?? "",
      sortIndex: it.sortIndex,
    });
  };

  const save = async () => {
    setErr(null);
    try {
      const body = {
        key: (form.key ?? "").trim(),
        nameMn: (form.nameMn ?? "").trim(),
        nameEn: (form.nameEn ?? "") || null,
        colorHex: (form.colorHex ?? "") || null,
        sortIndex: Number(form.sortIndex ?? 0),
      };
      if (!body.key || !body.nameMn) {
        setErr("key болон nameMn хоёрыг бөглөнө үү");
        return;
      }

      if (editing) {
        const r = await fetch(`/admin/api/zonetypes/${editing.id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        });
        if (!r.ok) {
          const x = await r.json().catch(() => ({}));
          throw new Error(x?.error || `Update failed (${r.status})`);
        }
      } else {
        const r = await fetch(`/admin/api/zonetypes`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        });
        if (!r.ok) {
          const x = await r.json().catch(() => ({}));
          throw new Error(x?.error || `Create failed (${r.status})`);
        }
      }
      await load();
      setEditing(null);
      setForm({ key: "", nameMn: "", nameEn: "", colorHex: "", sortIndex: 0 });
    } catch (e: any) {
      setErr(String(e?.message ?? e));
    }
  };

  const remove = async (id: string) => {
    if (!confirm("Энэ ZoneType-ийг устгах уу?")) return;
    setErr(null);
    const r = await fetch(`/admin/api/zonetypes/${id}`, { method: "DELETE" });
    if (!r.ok) {
      const x = await r.json().catch(() => ({}));
      alert(x?.detail || x?.error || `Delete failed (${r.status})`);
    } else {
      await load();
    }
  };

  return (
    <div style={{ padding: 16, display: "grid", gap: 12 }}>
      <h2 style={{ margin: 0 }}>Zone Types</h2>

      <div style={{ display: "flex", gap: 8 }}>
        <input
          value={q}
          onChange={e => setQ(e.target.value)}
          placeholder="Хайх (key/name)…"
          style={{ flex: 1, padding: 8, border: "1px solid #ddd", borderRadius: 6 }}
        />
        <button onClick={startCreate}>+ Шинээр</button>
      </div>

      {/* Form (create/edit) */}
      {(editing || form.key || form.nameMn) && (
        <div style={{ border: "1px solid #eee", borderRadius: 8, padding: 12, display: "grid", gap: 8 }}>
          <div style={{ display: "flex", gap: 8 }}>
            <label style={{ width: 120 }}>Key *</label>
            <input value={form.key ?? ""} onChange={e => setForm({ ...form, key: e.target.value })}
                   placeholder="unique-key" style={inp} />
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            <label style={{ width: 120 }}>Нэр (Mn) *</label>
            <input value={form.nameMn ?? ""} onChange={e => setForm({ ...form, nameMn: e.target.value })}
                   placeholder="Нэр" style={inp} />
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            <label style={{ width: 120 }}>Нэр (En)</label>
            <input value={form.nameEn ?? ""} onChange={e => setForm({ ...form, nameEn: e.target.value })}
                   placeholder="Name (En)" style={inp} />
          </div>
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <label style={{ width: 120 }}>Өнгө (hex)</label>
            <input value={form.colorHex ?? ""} onChange={e => setForm({ ...form, colorHex: e.target.value })}
                   placeholder="#ff8800" style={inp} />
            {(form.colorHex && /^#([0-9a-f]{6})$/i.test(form.colorHex)) && (
              <span style={{ width: 20, height: 20, border: "1px solid #ccc", borderRadius: 4, background: form.colorHex ?? undefined }} />
            )}
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            <label style={{ width: 120 }}>Sort index</label>
            <input type="number" value={form.sortIndex ?? 0}
                   onChange={e => setForm({ ...form, sortIndex: Number(e.target.value) })}
                   style={inp} />
          </div>
          {err && <div style={{ color: "crimson" }}>{err}</div>}

          <div style={{ display: "flex", gap: 8 }}>
            <button onClick={save}>{editing ? "Хадгалах" : "Үүсгэх"}</button>
            <button onClick={() => { setEditing(null); setForm({ key:"", nameMn:"", nameEn:"", colorHex:"", sortIndex:0 }); }}>Цэвэрлэх</button>
          </div>
        </div>
      )}

      {/* Table */}
      <div style={{ border: "1px solid #eee", borderRadius: 8, overflow: "auto" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
          <thead>
            <tr style={{ background: "#fafafa" }}>
              <th style={th}>Key</th>
              <th style={th}>Нэр (Mn)</th>
              <th style={th}>Нэр (En)</th>
              <th style={th}>Өнгө</th>
              <th style={thRight}>Sort</th>
              <th style={th}>Updated</th>
              <th style={th}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr><td colSpan={7} style={{ padding: 12 }}>Түр хүлээнэ үү…</td></tr>
            ) : filtered.length ? filtered.map(it => (
              <tr key={it.id} style={{ borderTop: "1px solid #eee" }}>
                <td style={td}>{it.key}</td>
                <td style={td}>{it.nameMn}</td>
                <td style={td}>{it.nameEn ?? "-"}</td>
                <td style={td}>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
                    {it.colorHex && <span style={{
                      width: 12, height: 12, borderRadius: 3,
                      background: it.colorHex, border: "1px solid #ccc", display: "inline-block"
                    }} />}
                    {it.colorHex ?? "-"}
                  </span>
                </td>
                <td style={{ ...td, textAlign: "right" }}>{it.sortIndex}</td>
                <td style={td}>{new Date(it.updatedAt).toLocaleString()}</td>
                <td style={td}>
                  <button onClick={() => startEdit(it)}>Засах</button>{" "}
                  <button onClick={() => remove(it.id)}>Устгах</button>
                </td>
              </tr>
            )) : (
              <tr><td colSpan={7} style={{ padding: 12 }}>Илэрц алга</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const th: React.CSSProperties = { textAlign: "left", padding: "8px 10px", borderBottom: "1px solid #eee" };
const thRight: React.CSSProperties = { ...th, textAlign: "right" };
const td: React.CSSProperties = { padding: "8px 10px" };
const inp: React.CSSProperties = { flex: 1, padding: 8, border: "1px solid #ddd", borderRadius: 6 };
