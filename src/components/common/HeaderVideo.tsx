

// 'use client'

// import React, { useState } from 'react'
// import LoadFBXModel from '@/app/MapClient3D/LoadFBXModel'
// import DiagonalBottomRibbon60deg from '../DiagonalRibbon'
// import Link from 'next/link'
// import { Map, Route, Train, Users, Home } from 'lucide-react' // 👈 icon-уудыг импортлолоо

// const stats = [
//     { value: '24,022 га', label: 'Талбайн хэмжээ', icon: Map },
//     { value: '132 км', label: 'Асфальтан зам', icon: Route },
//     { value: '114,9 км', label: 'Төмөр зам', icon: Train },
//     { value: '11,912', label: 'Газар эзэмшигч', icon: Users },
//     { value: '14,917', label: 'Газар өмчлөгч', icon: Home },
// ]

// const ThreeDVideo = () => {
//     const [showModel, setShowModel] = useState(false);

//     return (
//         <div className='relative bg-white ' >
//             <div className='flex flex-column md:grid-cols-5 pl-50 pr-50 pt-10 bg-green-50'>
//                 <div className=" w-2/5 mx-auto pt-10 pb-5 relative bg-green-50">
//                     <div className="flex flex-col items-left text-left pr-10">
//                         <h1 className=" md:text-5xl text-black uppercase" >
//                             Агро-Сити 
//                         </h1>
//                         <p className="text-xl md:text-2xl  text-green-950  pt-5" >
//                                     Дижитал ихэр хот
//                                 </p>
//                         <p className="mt-4 max-w-md md:text-md text-justify text-green-950" >
//                             Агро-Сити эдийн засгийн тусгай бүсийн 3D/2D газрын зураг нь орон зайн бодит өгөгдөл, өмчлөлийн бүртгэл, дэд бүтцийн мэдээлэл, байгаль орчны бүх өгөгдлийг нэгтгэсэн интерактив гео систем юм. Энэхүү зураглалаар хэрэглэгч: Газрын эзэмшил, ашиглалт, дэд бүтцийн нөхцөл байдлыг хялбар харьцуулах, Төслийн төлөвлөлт, хөрөнгө оруулалтын шийдвэр гаргахад ашиглах, дүн шинжилгээ хийх боломжтой.</p>
//                         <div className='flex flex-row '>
//                             <div className="mt-5 flex gap-3 items-center flex-center">
//                                 <Link
//                                     href="#threeDVideo"

//                                     rel="noopener noreferrer"
//                                     className="inline-flex items-center gap-2 border px-10 py-3 border-lime-700 rounded-md text-white bg-lime-700 hover:bg-lime-700/70 transition"
//                                 >
//                                     3D үзэх
//                                 </Link>
//                             </div>
//                             <div className="mt-5 flex gap-3 items-center flex-center pl-5">
//                                 <Link
//                                     href="#MapWithSidebar"
//                                     // href="/MapArcGISLayers"

//                                     rel="noopener noreferrer"
//                                     className="inline-flex items-center gap-2 border border-lime-700 px-10 py-3 rounded-md text-green-950 bg-green-50 hover:bg-green-100 transition"
//                                 >
//                                     2D үзэх
//                                 </Link>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 <div className=" bg-green-50 w-3/5 pt-20 pl-8">

//                     <iframe
//                         className="w-full aspect-video"
//                         src="https://www.youtube.com/embed/DrK9bm4jujs"
//                         title="AgroCity demo"
//                         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                         allowFullScreen
//                     />
//                 </div>
//             </div>

//             <div className="w-full h-100 bg-green-50 pl-50 pr-50 pt-18">
//                 <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
//                     {stats.map((item, index) => {
//                         const Icon = item.icon;
//                         return (
//                             <div
//                                 key={index}
//                                 className="flex flex-col items-center justify-center py-3"
//                             >
//                                 <Icon className="w-10 h-10 text-lime-700 mb-5" /> {/* 👈 icon нэмсэн */}
//                                 <p className="md:text-4xl text-green-950" >
//                                     {item.value}
//                                 </p>
//                                 <p className="mt-1 text-green-950 md:text-base uppercase" >
//                                     {item.label}
//                                 </p>
//                             </div>
//                         )
//                     })}
//                 </div>
//             </div>
//             {/* --- Bottom ribbon --- */}
//             <div className="absolute left-0 right-0 bottom-0 z-10 pointer-events-none">
//                 <DiagonalBottomRibbon60deg
//                     height={160}
//                     diagonalHeight={100}
//                     angle={80}
//                     overlayOffset={25}
//                     // orientation='bottom-left'
//                     baseGradient={["#437a11", "#437a11"]}
//                     overlayGradient={["#f0fdf4", "#f0fdf4"]}
//                 />
//             </div>

//             {/* --- FBX Modal --- */}
//             {showModel && (
//                 <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
//                     <div className="bg-white rounded-2xl shadow-2xl p-4 relative">
//                         <button
//                             onClick={() => setShowModel(false)}
//                             className="absolute top-3 right-3 text-slate-600 hover:text-black"
//                         >
//                             ✕
//                         </button>
//                         <LoadFBXModel />
//                     </div>
//                 </div>
//             )}
//         </div>
//     )
// }

// export default ThreeDVideo


'use client'

import React, { useState } from 'react'
import DiagonalBottomRibbon60deg from '../DiagonalRibbon'
import Link from 'next/link'
import { Map, Route, Train, Users, Home } from 'lucide-react'
import ImageGallery from './ImageGallery'

const stats = [
    { value: '24,022 га', label: 'Талбайн хэмжээ', icon: Map },
    { value: '132 км', label: 'Асфальтан зам', icon: Route },
    { value: '114,9 км', label: 'Төмөр зам', icon: Train },
    { value: '11,912', label: 'Газар эзэмшигч', icon: Users },
    { value: '14,917', label: 'Газар өмчлөгч', icon: Home },
]

const ThreeDVideo = () => {
    const [showModel, setShowModel] = useState(false)

    return (
        <div className="relative bg-green-50">
            {/* ✅ Hero section */}
            {/* <div className=" max-w-7xl flex flex-col space-x-5   md:flex-row md:flex md:flex pt-10 bg-green-50 md:bg-transparent md:flex md:items-center md:justify-between md:space-x-10 "> */}
            {/* --- Left text section --- */}
            <nav className="max-w-7xl  mx-auto w-full sm:px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0 ">

                <div className="w-full md:w-2/5 mx-auto md:pt-20 pb-8 relative bg-green-50 my-10">
                    <div className="flex mx-4 flex-col items-start text-left md:pr-10">
                        <h1 className="text-3xl md:text-5xl text-black uppercase">
                            “АГРО-СИТИ”
                        </h1>
                        <p className="text-lg md:text-2xl text-green-950 pt-3">
                            Эдийн засгийн тусгай бүсийн платформ
                        </p>
                        <p className="mt-4 text-lg md:text-lg text-green-950 text-justify max-w-full md:max-w-md">
                            Дижитал ихэр хот гэдэг нь, суурин газрын бодит орчныг дижитал орчинд яг ижил загвараар (ихэр хувилбараар) бий болгож, бодит цагийн мэдээлэл дээр үндэслэн загварчлах, хянах, удирдах ухаалаг технологийн шийдэл юм.

                            Агро-Сити эдийн засгийн тусгай бүсийн 3D/2D газрын зураг нь орон зайн бодит өгөгдөл, өмчлөлийн бүртгэл, дэд бүтцийн мэдээлэл, байгаль орчны бүх өгөгдлийг нэгтгэсэн интерактив гео мэдээллийн систем юм.</p>

                        {/* ✅ Buttons */}
                        <div className="flex flex-col sm:flex-row gap-3 mt-6">
                            <Link
                                href="#threeDVideo"
                                rel="noopener noreferrer"
                                className="inline-flex justify-center items-center gap-2 border px-8 py-2 border-lime-700 rounded-md text-white bg-lime-700 hover:bg-lime-700/70 transition text-sm md:text-base"
                            >
                                3D үзэх
                            </Link>

                            <Link
                                href="#MapWithSidebar"
                                rel="noopener noreferrer"
                                className="inline-flex justify-center items-center gap-2 border border-lime-700 px-8 py-2 rounded-md text-green-950 bg-green-50 hover:bg-green-100 transition text-sm md:text-base"
                            >
                                2D үзэх
                            </Link>
                        </div>
                    </div>
                </div>

                {/* --- Right video section --- */}
                <div className="w-full md:w-3/5 pt-6 md:pt-20 md:pl-8">
                    <ImageGallery />
                    {/* <iframe
                        className="w-full aspect-video rounded-md"
                        src="https://www.youtube.com/embed/DrK9bm4jujs"
                        title="AgroCity demo"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    /> */}
                </div>
            </nav>
            {/* </div> */}

            {/* ✅ Stats section */}
            {/*<div className="w-full bg-green-50 px-5 md:px-20 pt-10 pb-10">*/}
            <div className="flex flex-col md:flex-row pl-5 pr-5 md:pl-20 md:pr-20 pt-10 bg-green-50">

                <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 text-center">
                    {stats.map((item, index) => {
                        const Icon = item.icon
                        return (
                            <div
                                key={index}
                                className="flex flex-col items-center justify-center py-3"
                            >
                                <Icon className="w-8 h-8 md:w-10 md:h-10 text-lime-700 mb-3 md:mb-5" />
                                <p className="text-lg md:text-3xl text-green-950">
                                    {item.value}
                                </p>
                                <p className="mt-1 text-green-950 text-xs md:text-base uppercase">
                                    {item.label}
                                </p>
                            </div>
                        )
                    })}
                </div>
            </div>

            {/* --- Bottom ribbon --- */}
            {/* <div className="absolute left-0 right-0 bottom-0 z-10 pointer-events-none"> */}
            <div className="w-full flex flex-col md:flex-row  bg-gray-50">
                <DiagonalBottomRibbon60deg
                    height={160}
                    diagonalHeight={100}
                    angle={80}
                    overlayOffset={25}
                    baseGradient={['#437a11', '#437a11']}
                    overlayGradient={['#f0fdf4', '#f0fdf4']}
                />
            </div>


        </div>
    )
}

export default ThreeDVideo