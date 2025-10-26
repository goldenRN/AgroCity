'use client'

import React, { Suspense, useState } from 'react'
import dynamic from 'next/dynamic'
import { Loader2 } from 'lucide-react'

// ✅ 3D model component dynamic import
const LoadFBXModel = dynamic(() => import('../MapClient3D/LoadFBXModel'), { ssr: false })

const ThreeDVideo = () => {
  const [selectedModel, setSelectedModel] = useState<
    'ezemshil' | 'zam' | 'us' | 'ondor' | 'dg' | 'gh' | 'crolo' | 'morph'
  >('ezemshil')

  const modelFiles: Record<typeof selectedModel, string> = {
    ezemshil: '/models/ezemshil112.fbx',
    zam: '/models/zam11.fbx',
    us: '/models/usniih.fbx',
    ondor: '/models/undurlugGAZR1.fbx',
    dg: '/models/dursgalt_GAZR.fbx',
    gh: '/models/gazar hudlult.fbx',
    crolo: '/models/geocrolo.fbx',
    morph: '/models/geomorph.fbx',
  }

  const tabs = [
    { key: 'ezemshil', label: 'Эзэмшил газар', isShow: true },
    { key: 'zam', label: 'Зам дэд бүтэц', isShow: true },
    { key: 'us', label: 'Ус', isShow: false },
    { key: 'ondor', label: 'Өндөрлөг бүс', isShow: true },
    { key: 'dg', label: 'Дурсгалт газар', isShow: true },
    { key: 'gh', label: 'Газар хөдлөлт', isShow: false },
    { key: 'crolo', label: 'Геокриологи', isShow: true },
    { key: 'morph', label: 'Геоморфологи', isShow: true },
  ] as const

  return (
    <section className="relative max-w-7xl mx-auto bg-slate-50">
      {/* 🟢 Гарчиг */}
      <div className="text-center max-w-4xl mx-auto mb-10">
        <h1 className="text-2xl md:text-3xl lg:text-4xl text-green-950 uppercase mb-4 tracking-wide">
          АГРО-СИТИ 3D загвар
        </h1>
        <p className="text-sm md:text-base lg:text-lg text-green-950 leading-relaxed">
          <strong>3D дижитал ихэр систем</strong> нь бодит орчин, объект, систем, үйл явц эсвэл байгууллагын{' '}
          <strong>бодит цагийн</strong> эсвэл <strong>ойролцоо бодит орчныг гурван хэмжээст орчинд бүрэн дуурайлган</strong>{' '}
          загварчлан бий болгож, хянах, шинжлэх, оновчлох зорилготой{' '}
          <strong>дэвшилтэт мэдээллийн технологийн шийдэл</strong> юм.
        </p>
      </div>

      {/* 🟢 3D Model хэсэг */}
      <div className="flex flex-col items-center sm:px-4 md:px-6 lg:px-8 justify-between">
        <div className="max-w-7xl w-full h-[400px] sm:h-[500px] md:h-[600px] shadow-lg flex items-center justify-center overflow-hidden bg-white">
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

        {/* 🟢 Доорх табууд */}
        <div className="flex flex-wrap justify-center border-t border-slate-200 w-full max-w-7xl text-green-950 text-sm sm:text-base md:text-lg">
          {tabs
            .filter((tab) => tab.isShow)
            .map((tab) => (
              <button
                key={tab.key}
                onClick={() => setSelectedModel(tab.key)}
                className={`flex-1 py-3 sm:py-4 text-center transition-all duration-300 ${
                  selectedModel === tab.key
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
