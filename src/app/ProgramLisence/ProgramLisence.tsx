'use client'

import React from 'react'
import { Sparkles, Code2, CheckCircle2, Globe2, Ruler } from 'lucide-react'

const groupedLicences = {
  Revit: {
    icon: Ruler,
    items: [
      'Revit Guardian',
      'Revit Ideate Bundle',
      'Revit Enscape',
      'Revit RushForth Tools',
    ],
  },
  AutoCAD: {
    icon: Code2,
    items: [
      'AutoCAD Cadalyst Productivity Toolkit',
      'AutoCAD AVCAD',
      'AutoCAD Drawing Purge',
    ],
  },
  ArcGIS: {
    icon: Globe2,
    items: [
      'ArcGIS 3D Analyst Extension',
      'ArcGIS Business Analyst Web',
      'ArcGIS Spatial Analyst Extension',
    ],
  },
}

const ProgramLisence = () => {
  return (///bg-slate-50
    <section className="min-h-screen bg-gradient-to-b from-green-50 to-white py-16 px-6">
      {/* Толгой хэсэг */}
      <div className="text-center mb-14">
        <div className="flex justify-center mb-4">
          <Sparkles className="w-10 h-10 text-green-700 animate-pulse" />
        </div>
        <h1 className="text-4xl md:text-4xl text-green-950 mb-4">
          Програмын лицензүүд
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg my-10">
          Бид инженер, зураг төсөл, газар зүйн анализын чиглэлд зориулсан лицензтэй
          программ хангамжуудыг ашиглан үр ашигтай, чанартай ажлыг бүтээдэг.
        </p>
      </div>

      {/* 3 багана */}
      <div className="grid md:grid-cols-3 gap-5 max-w-6xl mx-auto">
        {Object.entries(groupedLicences).map(([group, { icon: Icon, items }]) => (
          <div
            key={group}
            className="bg-white/80 backdrop-blur-sm border border-green-100 shadow-lg rounded-2xl p-8 text-center hover:shadow-green-200 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
          >
            <div className="flex justify-center mb-4">
              <Icon className="w-12 h-12 text-green-700" />
            </div>
            <h2 className="text-2xl text-green-950 mb-6">{group}</h2>
            <ul className="space-y-3">
              {items.map((name) => (
                <li
                  key={name}
                  className="flex items-center gap-3 text-gray-800  hover:bg-green-50 rounded-lg py-2 px-3 transition-all duration-200"
                >
                  <CheckCircle2 className="w-5 h-5 text-green-700" />
                  <span className="font-medium">{name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Доод tagline */}
      {/* <div className="text-center mt-16 text-gray-500 italic">
        <p>© 2025 | Мэргэжлийн лицензтэй программ хангамжаар бүтээгдсэн шийдэл</p>
      </div> */}
    </section>
  )
}

export default ProgramLisence
