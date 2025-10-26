"use client"
import React from "react"
import Image from "next/image"
import Link from "next/link"
import { Sprout, EyeIcon, FlagIcon } from 'lucide-react'

export default function AboutUs() {
  return (
    <main className=" w-full px-4 sm:px-4 md:px-10 lg:px-20 mx-auto pt-16 md:pt-20">
      {/* Header */}
      <section className="mb-12 items-center text-center">
        {/* 
        <div className="w-full h-64 md:h-80 relative rounded-lg overflow-hidden shadow-sm">
          <Image
            src="/ac.jpg"
            alt="Бидний тухай"
            fill
            className="object-cover"
            priority
          />
        </div> 
        */}

        <h1 className="text-2xl sm:text-3xl md:text-4xl text-green-950 uppercase font-semibold">
          Төслийн тухай
        </h1>
        <div className="flex justify-center">
          <p className="text-base text-lg mt-6 sm:mt-10 text-green-950 max-w-xl sm:max-w-4xl text-center leading-relaxed">
            Энэхүү системийг ашигласнаар газрын эзэмшил, ашиглалтын нөхцөл байдлыг бодит цаг хугацаанд хянах, дэд бүтцийн байршил, нөхцөл байдлыг харьцуулан шинжлэх, төсөл, хөтөлбөрийн төлөвлөлт, хөрөнгө оруулалтын шийдвэрийг нотолгоонд тулгуурлан гаргах, орчны судалгаа, дүн шинжилгээ хийх зэрэг ач холбогдолтой.

            Ингэснээр тусгай бүсийн газар ашиглалт, төлөвлөлт, хөрөнгө оруулалтын удирдлагыг илүү оновчтой, ил тод байдлаар хэрэгжүүлэх суурь нөхцөл бүрдэнэ.
            Сонгинохайрхан дүүргийн засаг даргын тамгын газрын{" "}
            <strong>АГРО-СИТИ</strong> платформ нь оршин суугчдын санал гомдлыг хурдан шийдвэрлэх,
            хотын дэд бүтцийг илүү ил тод, үр ашигтай удирдах зорилготой.
            Бид иргэдэд илүү ойртсон үйлчилгээ, мэдээллийн нээлттэй байдлыг хангахыг эрхэмлэж ажиллана.
          </p>
        </div>
      </section>

      {/* --- 3 Column section --- */}
      <section className="mb-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
        {/* Зорилго */}
        <div className="group p-6 sm:p-8 bg-lime-600 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center">
          <Sprout
            size={50}
            className="mx-auto text-white mb-4 transition-transform duration-300 group-hover:scale-110"
          />
          <h3 className="text-lg sm:text-xl text-white mb-5 sm:mb-7 uppercase tracking-wide">
            Эрхэм зорилго
          </h3>
          <p className="text-white leading-relaxed text-sm sm:text-base">
            Хүнс, хөдөө аж ахуйн үйлдвэрлэлийг дэмжих замаар импортыг орлох чанар, стандартад нийцсэн, эрүүл аюулгүй хүнсээр дотоодын хэрэгцээг хангах, хүнсний үйлдвэрлэлийг кластераар хөгжүүлэх бизнесийн таатай орчныг бүрдүүлж, экспортыг дэмжин эдийн засагт эерэг нөлөө үзүүлэх</p>
        </div>

        {/* Алсын хараа */}
        <div className="group p-6 sm:p-8 bg-lime-700 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center">
          <EyeIcon
            size={50}
            className="mx-auto text-white mb-4 transition-transform duration-300 group-hover:scale-110"
          />
          <h3 className="text-lg sm:text-xl text-white mb-5 sm:mb-7 uppercase tracking-wide">
            Алсын хараа
          </h3>
          <p className="text-white  leading-relaxed text-sm sm:text-base">
            Монгол Улсын хүнсний хангамжийг тогтвортой хангаж, экспортын чадавхыг нэмэгдүүлсэн, ногоон технологид суурилсан олон улсын стандартад нийцсэн үйлдвэрлэлийн бүс болох.

          </p>
        </div>

        {/* Үнэт зүйлс */}
        <div className="group p-6 sm:p-8 bg-lime-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center">
          <FlagIcon
            size={50}
            className="mx-auto text-white mb-4 transition-transform duration-300 group-hover:scale-110"
          />
          <h3 className="text-lg sm:text-xl text-white mb-5 sm:mb-7 uppercase tracking-wide">
            Уриа
          </h3>
          <p className="text-white  leading-relaxed text-sm sm:text-base">
            Эрүүл, тогтвортой хүнс
          </p>
          <p className="text-white  leading-relaxed text-sm sm:text-base mt-5">Ногоон технологид тулгуурласан, эрүүл, чанартай хүнсийг үйлдвэрлэж, тогтвортой хэрэглээг дэмжин, Монгол хүний эрүүл мэнд, улс орны эдийн засгийн бат бөх ирээдүйг хамтдаа бүтээнэ.</p>
        </div>
      </section>

      {/* --- Stats Section --- */}
      {/* <section className="mb-12 bg-gradient-to-r from-slate-50 via-green-50 to-slate-50 p-6 border-y border-lime-200 rounded-lg">
        <nav className="max-w-7xl mx-auto w-full text-center px-4 sm:px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0 ">

          <div>
            <div className="text-2xl sm:text-3xl text-green-950">1,200+</div>
            <div className="text-sm sm:text-base text-green-950 mt-1">
              Шилжүүлсэн санал
            </div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl  text-green-950">85%</div>
            <div className="text-sm sm:text-base text-green-950  mt-1">
              Дүн шинжилгээ төгссөн
            </div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl  text-green-950">5+ жил</div>
            <div className="text-sm sm:text-base text-green-950 mt-1">
              Туршлага
            </div>
          </div>
        </nav>

      </section> */}
    </main>
  )
}