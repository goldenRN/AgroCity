'use client'

import React, { Suspense } from 'react'
import LoadFBXModel from '../MapClient3D/LoadFBXModel'
import { Loader2 } from 'lucide-react'

const TwoDVideo = () => {
    return (
        <section className="relative w-full bg-slate-50 py-10 px-50">
            {/* Гарчиг хэсэг */}
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
                    <Suspense
                        fallback={
                            <div className="flex items-center justify-center text-green-800">
                                <Loader2 className="animate-spin w-8 h-8 mr-2" /> Уншиж байна...
                            </div>
                        }
                    >
                        <LoadFBXModel />
                    </Suspense>
                </div>

                {/* Доорх ангиллын холбоосууд */}
                <div className=" flex flex-col md:flex-row justify-center border-b bg-slate-100 items-stretch md:items-center gap-4 w-full max-w-5xl mx-auto text-green-950 font-roboto-bold text-lg">
                    <div className="w-full md:w-1/3 bg-slate-100  border-slate-300 py-4 px-6 text-center">
                        <span className="block" style={{ fontFamily: 'RobotoBold' }}>Газар зүйн давхрага</span>
                    </div>
                    <div className="w-full md:w-1/3 bg-slate-100  border-slate-300 py-4 px-6 text-center">
                        <span className="block" style={{ fontFamily: 'RobotoBold' }}>Дэд бүтэц</span>
                    </div>
                    <div className="w-full md:w-1/3 bg-slate-100  border-slate-300 py-4 px-6 text-center">
                        <span className="block" style={{ fontFamily: 'RobotoBold' }}>Хөдөө аж ахуй</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TwoDVideo
