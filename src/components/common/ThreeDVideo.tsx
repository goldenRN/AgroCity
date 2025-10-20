

'use client'

import React, { Suspense, useState } from 'react'
import dynamic from 'next/dynamic'
import { Loader2 } from 'lucide-react'

// FBX model component (динамикаар дуудах)
const LoadFBXModel = dynamic(() => import('../MapClient3D/LoadFBXModel'), { ssr: false })

const ThreeDVideo = () => {
    // ✅ 3 төрлийн model state
    const [selectedModel, setSelectedModel] = useState<'geo' | 'infra' | 'agri'>('geo')

    // ✅ тухайн model-д тохирох file path
    const modelFiles: Record<typeof selectedModel, string> = {
        geo: '/models/test10.fbx',
        infra: '/models/nogoon_baiguulamj.fbx',
        agri: '/models/test10.fbx',
    }

    // ✅ товчны өгөгдөл
    const tabs = [
        { key: 'geo', label: 'Газар зүйн давхрага' },
        { key: 'infra', label: 'Дэд бүтэц' },
        { key: 'agri', label: 'Хөдөө аж ахуй' },
    ] as const

    return (
        <section className="relative w-full bg-slate-50 py-10 px-50">
            {/* Гарчиг */}
            <div className="text-center max-w-3xl mx-auto mb-10">
                <h1
                    className="text-3xl md:text-4xl font-roboto-bold text-green-950 uppercase mb-4 tracking-wide"
                    style={{ fontFamily: 'RobotoBold' }}
                >
                    AgroCity 3D загвар
                </h1>
                <p
                    className="text-base md:text-lg text-green-950 leading-relaxed font-roboto-regular"
                    style={{ fontFamily: 'RobotoRegular' }}
                >
                    AgroCity-ийн 3D дижитал ихэр нь ухаалаг хөдөө аж ахуйн орон зайн шийдвэр гаргах шинэ түвшнийг нээж өгнө.
                    Бодит мэдээлэлд тулгуурлан төлөвлө, дүн шинжил, эрсдэлээ бууруул.
                </p>
            </div>

            {/* 3D Model хэсэг */}
            <div className="flex flex-col items-center justify-center">
                <div className="relative w-full  h-[600px] bg-white  shadow-lg flex items-center justify-center overflow-hidden">

                    {/* <div className="flex w-full flex-col items-center justify-center">
        <div className="relative w-full h-[600px] bg-white shadow-lg flex items-center justify-center overflow-hidden"> */}
                    <Suspense
                        fallback={
                            <div className="flex items-center justify-center text-green-800">
                                <Loader2 className="animate-spin w-8 h-8 mr-2" /> Уншиж байна...
                            </div>
                        }
                    >
                        {/* ✅ Сонгогдсон model */}
                        <LoadFBXModel filePath={modelFiles[selectedModel]} />
                    </Suspense>
                </div>

                {/* Доорх 3 таб */}
                <div className="flex flex-col md:flex-row justify-center bg-slate-100 border-t border-slate-200 items-stretch w-full max-w-6xl mx-auto text-green-950 font-roboto-bold text-lg">
                    {tabs.map((tab) => (
                        <button
                            key={tab.key}
                            onClick={() => setSelectedModel(tab.key)}
                            className={`flex-1 py-4 px-6 text-center transition-all duration-300 
              ${selectedModel === tab.key
                                    ? 'bg-lime-700 text-white border-b-4 border-lime-700'
                                    : 'bg-slate-100 hover:bg-slate-200'
                                }`}
                            style={{ fontFamily: 'RobotoBold' }}
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

