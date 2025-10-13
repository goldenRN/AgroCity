'use client'

import React, { useState } from 'react'
import LoadFBXModel from '@/app/MapClient3D/LoadFBXModel'; // эсвэл таны файлын зам

import DiagonalBottomRibbon60deg from '../DiagonalRibbon'
import Link from 'next/link'
const stats = [
    { value: '24,022 га', label: 'Нийт талбайн хэмжээ' },
    { value: '132 км', label: 'Асфальтан зам' },
    { value: '114.9 км', label: 'Төмөр зам' },
    { value: '11,912', label: 'Газар эзэмшигч' },
    { value: '14,917', label: 'Газар өмчлөгч' },
]
const ThreeDVideo = () => {
    const [showModel, setShowModel] = useState(false);
    return (
        <div className='relative bg-white h-200' >
            <div className='flex flex-column md:grid-cols-5 h-130 bg-[#e4f4fb]'>
                <div className=" w-2/5 mx-auto pt-24 pb-5 p-5 relative bg-[#e4f4fb]">
                    <div className="flex flex-col items-center text-center">
                        <h1 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight">
                            AgroCity 3D загвар
                        </h1>
                        <p className="text-2xl md:text-2xl font-normal text-slate-500 leading-tight">
                            3D дижитал ихэр хот
                        </p>
                        <p className="mt-4 max-w-2xl text-lg md:text-xl text-slate-700">
                            AgroCity-ийн 3D дижитал ихэр нь ухаалаг хөдөө аж ахуйн орон зайн шийдвэр гаргах шинэ түвшнийг нээж өгнө. Бодит мэдээлэлд тулгуурлан төлөвлө, дүн шинжил, эрсдэлээ бууруул.
                        </p>

                        <div className="mt-6 flex gap-3 items-center flex-center">

                            {/* <button
                                onClick={() => setShowModel(true)}
                                className="inline-flex items-center gap-2 border border-[#306c12] px-10 py-3 rounded-xl text-slate-800 bg-white/70 hover:bg-white transition"
                            >
                                3D үзэх
                            </button> */}
                            <Link
                                href="/MapClient3D"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 border border-[#306c12] px-10 py-3 rounded-xl text-slate-800 bg-white/70 hover:bg-white transition"
                            >
                                3D үзэх
                            </Link>
                        </div>
                    </div>
                </div>

                <div className=" bg-color-[#e4f4fb] w-3/5 h-150 p-15 pt-10">

                    <iframe
                        className="w-full aspect-video"
                        src="https://www.youtube.com/embed/XXXXXXXXX"
                        title="AgroCity demo"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </div>
            </div>
            <div className="w-full bg-[#e4f4fb]">
                <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
                    {stats.map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center justify-center py-3 "
                        >
                            <p className="text-4xl md:text-3xl font-semibold text-green-800">
                                {item.value}
                            </p>
                            <p className="mt-2 text-slate-600 text-sm md:text-base">
                                {item.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="absolute left-0 right-0 bottom-0 z-10 pointer-events-none">
                <DiagonalBottomRibbon60deg
                    height={200}
                    diagonalHeight={150}
                    angle={60}
                    overlayOffset={20}
                    baseGradient={["#5ea2d6", "#3f7fb0"]}
                    overlayGradient={["#e4f4fb", "#e4f4fb"]}
                // overlayGradient={["#ffffff", "rgba(255,255,255,0.18)"]}
                />
            </div>
            {/* --- FBX modal --- */}
            {showModel && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
                    <div className="bg-white rounded-2xl shadow-2xl p-4 relative">
                        <button
                            onClick={() => setShowModel(false)}
                            className="absolute top-3 right-3 text-slate-600 hover:text-black"
                        >
                            ✕
                        </button>
                        <LoadFBXModel />
                    </div>
                </div>
            )}
        </div>

    )
}

export default ThreeDVideo

