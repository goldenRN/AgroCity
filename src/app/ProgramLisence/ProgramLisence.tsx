"use client";
import { Check, X } from "lucide-react";

const PROGRAMS = [
  {
    name: "Photoshop",
    vendor: "Adobe",
    licenseKey: "XXXX-XXXX-AAAA",
    activated: true,
    expiresAt: "2026-03-01",
  },
  {
    name: "Office 365",
    vendor: "Microsoft",
    licenseKey: "MS-1234-5678",
    activated: false,
    expiresAt: "2025-11-20",
  },
  {
    name: "JetBrains Rider",
    vendor: "JetBrains",
    licenseKey: "JB-2025-9999",
    activated: true,
    expiresAt: "2027-01-10",
  },
  {
    name: "Figma",
    vendor: "Figma",
    licenseKey: "FG-TRIAL-01",
    activated: false,
    expiresAt: "2024-12-31",
  },
];

export default function ProgramLisence() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 py-10 px-5">
      {/* Гарчиг */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-green-900 mb-3">
          Програмын лицензийн төлвийн жагсаалт
        </h1>
        <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto">
          Доорх жагсаалтад таны байгууллагын ашиглаж буй програмуудын лицензийн
          идэвхжил болон хугацааны төлөвийг харуулж байна.
        </p>
      </div>

      {/* Картууд — бүх дэлгэцэнд 1 багана */}
      <div className="max-w-2xl mx-auto flex flex-col gap-6">
        {PROGRAMS.map((p) => (
          <div
            key={p.licenseKey}
            className={`rounded-2xl border p-5 shadow-sm hover:shadow-md transition duration-200 ${
              p.activated ? "bg-white" : "bg-slate-100"
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-xl font-semibold text-slate-800">
                {p.name}
              </h2>
              {p.activated ? (
                <span className="flex items-center gap-1 text-green-700 font-medium">
                  <Check className="w-4 h-4" /> Идэвхжсэн
                </span>
              ) : (
                <span className="flex items-center gap-1 text-red-600 font-medium">
                  <X className="w-4 h-4" /> Идэвхжээгүй
                </span>
              )}
            </div>

            <div className="space-y-1 text-sm text-slate-600">
              <p>
                <span className="font-medium text-slate-700">Vendor:</span>{" "}
                {p.vendor}
              </p>
              <p className="truncate">
                <span className="font-medium text-slate-700">License:</span>{" "}
                {p.licenseKey}
              </p>
              <p>
                <span className="font-medium text-slate-700">
                  Хугацаа дуусах:
                </span>{" "}
                {p.expiresAt}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
