



'use client'

import React, { Suspense, useState } from 'react'
import dynamic from 'next/dynamic'
import { Loader2 } from 'lucide-react'

// FBX model component (динамикаар дуудах)
const LoadFBXModel = dynamic(() => import('../MapClient3D/LoadFBXModel'), { ssr: false })

const ThreeDVideo = () => {
  const [selectedModel, setSelectedModel] = useState<'geo' | 'infra' | 'agri'>('geo')

  const modelFiles: Record<typeof selectedModel, string> = {
    geo: '/models/webtest02.fbx',
    infra: '/models/nogoon_baiguulamj.fbx',
    agri: '/models/test10.fbx',
  }

  const tabs = [
    { key: 'geo', label: 'Газар зүйн давхрага' },
    { key: 'infra', label: 'Дэд бүтэц' },
    { key: 'agri', label: 'Хөдөө аж ахуй' },
  ] as const

  return (
    <section className="relative max-w-7xl mx-auto bg-slate-50  ">
      {/* Гарчиг */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <h1 className="text-2xl md:text-3xl lg:text-4xl text-green-950 uppercase mb-4 tracking-wide">
          АГРО-СИТИ 3D загвар
        </h1>
        <p className="text-sm md:text-base lg:text-lg text-green-950 leading-relaxed">
          АГРО-СИТИ-ийн 3D дижитал ихэр нь ухаалаг хөдөө аж ахуйн орон зайн шийдвэр гаргах шинэ түвшнийг нээж өгнө.
          Бодит мэдээлэлд тулгуурлан төлөвлө, дүн шинжил, эрсдэлээ бууруул.
        </p>
      </div>

      {/* 3D Model хэсэг */}
      <div className="flex flex-col items-center sm:px-4 md:px-6 lg:px-8 justify-between ">
        <div className="max-w-7xl w-full  h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] shadow-lg flex items-center justify-center overflow-hidden">
          <Suspense
            fallback={
              <div className="flex items-center justify-center text-green-800">
                <Loader2 className="animate-spin w-6 h-6 mr-2 sm:w-8 sm:h-8" /> Уншиж байна...
              </div>
            }
          >
            <LoadFBXModel filePath={modelFiles[selectedModel]} />
          </Suspense>
        </div>

        {/* Доорх 3 таб */}
        <div className="max-w-7xl flex flex-col md:flex-row justify-center  border-t border-slate-200 items-stretch w-full max-w-6xl mx-auto text-green-950 text-sm sm:text-base md:text-lg ">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setSelectedModel(tab.key)}
              className={`flex-1 py-3 sm:py-4 px-4 sm:px-6 text-center transition-all duration-300
                ${selectedModel === tab.key
                  ? 'bg-lime-700 text-white border-b-4 border-lime-700'
                  : 'bg-slate-100 hover:bg-slate-200'
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ThreeDVideo