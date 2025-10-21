"use client";

import React, { useEffect, useMemo, useState } from "react";

type ZT = {
  id: string;
  key: string;
  nameMn: string;
  nameEn?: string | null;
  colorHex?: string | null;
  sortIndex: number;
  createdAt?: string;
  updatedAt?: string;
};

export default function TypesPage() {
  const [items, setItems] = useState<ZT[]>([]);
  const [form, setForm] = useState<Partial<ZT>>({
    key: "",
    nameMn: "",
    nameEn: "",
    colorHex: "#11aaff",
    sortIndex: 0,
  });
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const load = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/admin/zonetypes", { cache: "no-store" });
      const data = await res.json();
      setItems(Array.isArray(data) ? data : []);
    } catch (e: any) {
      setError(String(e?.message ?? e));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { load(); }, []);

  const isEdit = useMemo(() => !!form.id, [form.id]);

  const onSave = async () => {
    setSaving(true);
    setError(null);
    try {
      const method = isEdit ? "PUT" : "POST";
      const res = await fetch("/api/admin/zonetypes", {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const j = await res.json().catch(() => ({}));
        throw new Error(j?.error || `Save failed (${res.status})`);
      }
      setForm({ key: "", nameMn: "", nameEn: "", colorHex: "#11aaff", sortIndex: 0 });
      await load();
    } catch (e: any) {
      setError(String(e?.message ?? e));
    } finally {
      setSaving(false);
    }
  };

  const onEdit = (z: ZT) => setForm({ ...z });
  const onDelete = async (id: string) => {
    if (!confirm("Устгах уу?")) return;
    setError(null);
    try {
      const res = await fetch(`/api/admin/zonetypes?id=${encodeURIComponent(id)}`, { method: "DELETE" });
      if (!res.ok) throw new Error(`Delete failed (${res.status})`);
      await load();
      if (form.id === id) {
        setForm({ key: "", nameMn: "", nameEn: "", colorHex: "#11aaff", sortIndex: 0 });
      }
    } catch (e: any) {
      setError(String(e?.message ?? e));
    }
  };

  return (
    <div style={{ padding: 16, display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 16, alignItems: "start" }}>
      <div>
        <h2 style={{ margin: 0 }}>Zone Types</h2>
        {loading && <div style={{ margin: "8px 0" }}>Loading…</div>}
        {error && <div style={{ margin: "8px 0", color: "crimson" }}>⚠ {error}</div>}

        <div style={{ overflow: "auto", border: "1px solid #eee", borderRadius: 8, marginTop: 8 }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
            <thead>
              <tr style={{ background: "#fafafa" }}>
                <th style={th}>Color</th>
                <th style={th}>Key</th>
                <th style={th}>Name (MN)</th>
                <th style={th}>Name (EN)</th>
                <th style={thNum}>Sort</th>
                <th style={th}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {items.length === 0 && !loading && (
                <tr><td colSpan={6} style={td}>No types yet</td></tr>
              )}
              {items.map((i) => (
                <tr key={i.id} style={{ borderTop: "1px solid #eee" }}>
                  <td style={td}>
                    <span style={{
                      display: "inline-block",
                      width: 14, height: 14,
                      background: i.colorHex ?? "#ccc",
                      border: "1px solid #ccc",
                      borderRadius: 2
                    }} />
                  </td>
                  <td style={td}>{i.key}</td>
                  <td style={td}>{i.nameMn}</td>
                  <td style={td}>{i.nameEn ?? "-"}</td>
                  <td style={{ ...td, textAlign: "right" }}>{i.sortIndex}</td>
                  <td style={td}>
                    <button onClick={() => onEdit(i)} style={btn}>Edit</button>{" "}
                    <button onClick={() => onDelete(i.id)} style={{ ...btn, color: "crimson" }}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <h2 style={{ margin: 0 }}>{isEdit ? "Edit Type" : "Create Type"}</h2>
        <div style={{ display: "grid", gap: 8, marginTop: 8, maxWidth: 460 }}>
          <label style={label}>
            Key
            <input
              style={input}
              value={form.key ?? ""}
              onChange={(e) => setForm((v) => ({ ...v, key: e.target.value }))}
              placeholder="unique key (e.g. agri, urban)"
            />
          </label>
          <label style={label}>
            Name (MN)
            <input
              style={input}
              value={form.nameMn ?? ""}
              onChange={(e) => setForm((v) => ({ ...v, nameMn: e.target.value }))}
              placeholder="Монгол нэр"
            />
          </label>
          <label style={label}>
            Name (EN)
            <input
              style={input}
              value={form.nameEn ?? ""}
              onChange={(e) => setForm((v) => ({ ...v, nameEn: e.target.value }))}
              placeholder="English name"
            />
          </label>
          <label style={label}>
            Color
            <input
              type="color"
              style={{ ...input, padding: 0, height: 36 }}
              value={form.colorHex ?? "#11aaff"}
              onChange={(e) => setForm((v) => ({ ...v, colorHex: e.target.value }))}
            />
          </label>
          <label style={label}>
            Sort index
            <input
              type="number"
              style={input}
              value={Number(form.sortIndex ?? 0)}
              onChange={(e) => setForm((v) => ({ ...v, sortIndex: Number(e.target.value) }))}
            />
          </label>

          <div style={{ display: "flex", gap: 8 }}>
            <button onClick={onSave} disabled={saving || !form.key || !form.nameMn} style={primaryBtn}>
              {isEdit ? "Update" : "Create"}
            </button>
            <button
              onClick={() => setForm({ key: "", nameMn: "", nameEn: "", colorHex: "#11aaff", sortIndex: 0 })}
              disabled={saving}
              style={btn}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const th: React.CSSProperties = { textAlign: "left", padding: "8px 10px", borderBottom: "1px solid #eee" };
const thNum: React.CSSProperties = { ...th, textAlign: "right" };
const td: React.CSSProperties = { padding: "8px 10px" };
const label: React.CSSProperties = { display: "grid", gap: 6, fontSize: 13, color: "#444" };
const input: React.CSSProperties = {
  padding: "8px 10px",
  border: "1px solid #ddd",
  borderRadius: 6,
  fontSize: 14,
};
const btn: React.CSSProperties = {
  border: "1px solid #ddd",
  background: "#fff",
  borderRadius: 6,
  padding: "6px 10px",
  cursor: "pointer",
};
const primaryBtn: React.CSSProperties = {
  ...btn,
  background: "#0ea5e9",
  borderColor: "#0ea5e9",
  color: "white",
};
