'use clint'
import React, { Suspense } from 'react'
import Link from 'next/link'
import LoadFBXModel from '../MapClient3D/LoadFBXModel';
import { Loader2 } from 'lucide-react';
const TwoDVideo = () => {

    return (

        <div className='relative h-700px' >
            <h1 className=" md:text-5xl text-green-950 md:text-center mb-5" style={{ fontFamily: 'RobotoBold' }}>
                AgroCity 3D загвар
            </h1>
            <p className="mb-5 text-lg md:text-xl md:text-center text-green-950 pl-10 pr-10" style={{ fontFamily: 'RobotoRegular' }}>
                AgroCity-ийн 3D дижитал ихэр нь ухаалаг хөдөө аж ахуйн орон зайн шийдвэр гаргах шинэ түвшнийг нээж өгнө. Бодит мэдээлэлд тулгуурлан төлөвлө, дүн шинжил, эрсдэлээ бууруул.
            </p>
           
            <div className='flex flex-column md:grid-cols-5 h-700px bg-[#f2f2f2]'>
                <div className=" flex flex-column bg-color-[#e4f4fb] h-700px w-4/5 items-center justify-center ml-10 mr-5" >
                    {/* <img className=" h-full items-center" src="/map.png" />
                    <img className=" h-full items-center" src="/area.png" /> */}
                    {/* <LoadFBXModel /> */}
                    {/* <Suspense
                        fallback={
                            <div className="flex flex-col items-center justify-center">
                                <Loader2 className="animate-spin text-blue-600 w-10 h-10 mb-2" />
                                <p className="text-blue-700 font-medium">3D загвар ачаалж байна...</p>
                            </div>
                        }
                    > */}
                    {/* 🎥 FBX Model viewer */}
                    <LoadFBXModel />
                    {/* </Suspense> */}
                </div>
                <div className=" w-1/5 mx-auto pt-24 ml-10 pr-20 relative bg-[#f2f2f2]">
                    <div className="flex flex-col items-left text-left text-lg pb-10" style={{ fontFamily: 'RobotoBold' }}>

                        {/* <ul className="text-base text-lg text-gray-600 font-roboto-regular list-disc list-inside space-y-1" style={{ fontFamily: 'RobotoRegular' }}> */}
                        <a className='pb-5'>Газар зүйн давхрага</a>
                        <a className='pb-5'>Дэд бүтэц</a>
                        <a className='pb-5'> Хөдөө аж ахуй</a>
                        {/* </ul> */}


                    </div>
                </div>
            </div>
        </div>
    )
}

export default TwoDVideo

