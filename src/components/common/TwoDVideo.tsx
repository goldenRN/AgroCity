'use clint'
import React from 'react'
import Link from 'next/link'
const TwoDVideo = () => {

    return (

        <div className='relative h-200 pt-20' >
            <div className='flex flex-column md:grid-cols-5 h-130 bg-[#f2f2f2]'>
                <div className=" flex flex-column bg-color-[#e4f4fb] w-3/5 h-130 items-center justify-center" >
                    <img className=" h-full items-center" src="/map.png" />
                    <img className=" h-full items-center" src="/area.png" />
                </div>
                <div className=" w-2/5 mx-auto pt-24 pb-5 p-5 relative bg-[#f2f2f2]">
                    <div className="flex flex-col items-center text-center">
                        <h1 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight">
                            2D газрын зураг
                        </h1>
                        {/* <p className="text-2xl md:text-2xl font-normal text-slate-500 leading-tight">
                            3D дижитал ихэр хот
                        </p> */}
                        <p className="mt-4 max-w-2xl md:text-xl text-slate-700">
                            AgroCity-ийн 2D газрын зураг нь орон зайн бодит өгөгдөл, өмчлөлийн бүртгэл, дэд бүтцийн мэдээлэл, байгаль орчны бүх өгөгдлийг нэгтгэсэн интерактив гео систем юм.
                            Энэхүү зураглалаар хэрэглэгч:
                            Газрын эзэмшил, ашиглалт, дэд бүтцийн нөхцөл байдлыг хялбар харьцуулах,
                            Төслийн төлөвлөлт, хөрөнгө оруулалтын шийдвэр гаргахад ашиглах,
                            дүн шинжилгээ хийх боломжтой.
                        </p>

                        <div className="mt-6 flex gap-3 items-center flex-center">
                            {/* <Link
                                href="#contact"
                                className="inline-flex items-center gap-2 bg-[#306c12] text-white px-5 py-3 rounded-xl font-medium shadow-md hover:shadow-lg transition transform hover:-translate-y-1"
                            >
                                U
                            </Link> */}

                            <Link
                                href="/MapClient"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 border border-[#306c12] px-10 py-3 rounded-xl text-slate-800 bg-white/70 hover:bg-white transition"
                            >
                                2D үзэх
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TwoDVideo

