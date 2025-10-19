'use client'

import React, { useState } from 'react'
import LoadFBXModel from '@/app/MapClient3D/LoadFBXModel'; // эсвэл таны файлын зам

import DiagonalBottomRibbon60deg from '../DiagonalRibbon'
import Link from 'next/link'
const stats = [
    { value: '24.022 га', label: 'Талбайн хэмжээ' },
    { value: '132 км', label: 'Асфальтан зам' },
    { value: '114.9 км', label: 'Төмөр зам' },
    { value: '11.912', label: 'Газар эзэмшигч' },
    { value: '14.917', label: 'Газар өмчлөгч' },
]
const ThreeDVideo = () => {
    const [showModel, setShowModel] = useState(false);
    return (
        <div className='relative bg-white h-230 ' >
            <div className='flex flex-column md:grid-cols-5 h-150 p-10 bg-green-50'>
                <div className=" w-2/5 mx-auto pt-24 pb-5 relative bg-green-50">
                    <div className="flex flex-col items-left text-left pr-5">
                        <h1 className=" md:text-6xl text-black uppercase" style={{ fontFamily: 'RobotoBold' }}>
                            AgroCity 3D загвар
                        </h1>
                        <p className="text-2xl md:text-2xl  text-green-950  pt-5" style={{ fontFamily: 'RobotoBold' }}>
                            3D дижитал ихэр хот
                        </p>
                        <p className="mt-4 max-w-2xl md:text-xl text-slate-700">
                            AgroCity-ийн 3D/2D газрын зураг нь орон зайн бодит өгөгдөл, өмчлөлийн бүртгэл, дэд бүтцийн мэдээлэл, байгаль орчны бүх өгөгдлийг нэгтгэсэн интерактив гео систем юм.
                            Энэхүү зураглалаар хэрэглэгч:
                            Газрын эзэмшил, ашиглалт, дэд бүтцийн нөхцөл байдлыг хялбар харьцуулах,
                            Төслийн төлөвлөлт, хөрөнгө оруулалтын шийдвэр гаргахад ашиглах,
                            дүн шинжилгээ хийх боломжтой.
                        </p>
                        
                        <div className='flex flex-row '>
                            <div className="mt-5 flex gap-3 items-center flex-center">
                                <Link
                                    href="/MapClient3D"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ fontFamily: 'RobotoBold' }}
                                    className="inline-flex items-center gap-2 border px-10 py-3 border-lime-700 rounded-md text-white bg-lime-700 hover:bg-lime-700/70 transition "
                                >
                                    3D үзэх
                                </Link>
                            </div>
                            <div className="mt-5 flex gap-3 items-center flex-center pl-5">
                                {/* <Link
                                    href="/MapClient3D"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ fontFamily: 'RobotoBold' }}
                                    className="inline-flex items-center gap-2 border border-lime-700 px-10 py-3 rounded-md text-green-950 bg-green-50 hover:bg-green-100 transition"
                                > */}
                                <Link
                                    // href="/MapClient"
                                    href="/MapArcGISLayers"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 border border-lime-700 px-10 py-3 rounded-md text-green-950 bg-green-50 hover:bg-green-100 transition"
                                >
                                    2D үзэх
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className=" bg-green-50 w-3/5 pt-10">

                    <iframe
                        className="w-full aspect-video"
                        src="https://www.youtube.com/embed/XXXXXXXXX"
                        title="AgroCity demo"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </div>
            </div>
            <div className="w-full h-50 bg-green-50 pl-10 pr-10 pt-10">
                <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
                    {stats.map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center justify-center py-3 "
                        >
                            <p className=" md:text-4xl text-green-950" style={{ fontFamily: 'RobotoBold' }}>
                                {item.value}
                            </p>
                            <p className="mt-1 text-green-950 md:text-base uppercase" style={{ fontFamily: 'RobotoRegular' }}>
                                {item.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="absolute left-0 right-0 bottom-0 z-10 pointer-events-none">
                <DiagonalBottomRibbon60deg
                    height={200}
                    diagonalHeight={100}
                    angle={80}
                    overlayOffset={25}
                    orientation='bottom-left'
                    baseGradient={["#437a11", "#437a11"]}
                    overlayGradient={["#f0fdf4", "#f0fdf4"]}
                // overlayGradient={["#0b0b0bff", "rgba(255,255,255,0.18)"]}
                />
            </div>

            {/* --- FBX modal --- */}
            {
                showModel && (
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
                )
            }
        </div >

    )
}

export default ThreeDVideo

