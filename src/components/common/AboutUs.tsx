"use client"
import React from "react"
import Image from "next/image"
import Link from "next/link"
import { Sprout, EyeIcon, StarIcon } from 'lucide-react'
export default function AboutUs() {
  return (
    <main className="ml-40 mr-40 mx-auto pt-20 px-10">
      {/* Header */}
      <section className="mb-12 items-center text-center">
        {/* <div className="w-full h-64 md:h-80 relative rounded-lg overflow-hidden shadow-sm">
          <Image
            src="/ac.jpg"
            alt="Бидний тухай"
            fill
            className="object-cover"
            priority
          />
        </div> */}

        <h1 className=" md:text-4xl text-green-950 uppercase" style={{ fontFamily: 'RobotoBold' }}>
          Бидний тухай
        </h1>
        <p className="text-lg mt-10 md:text-xl text-gray-700 mx-50 " style={{ fontFamily: 'RobotoBold' }}>
          Сонгинохайрхан дүүргийн засаг даргын тамгын газрын <strong>AgroCity</strong> платформ нь
          оршин суугчдын санал гомдлыг хурдан шийдвэрлэх, хотын дэд бүтцийг илүү ил тод, үр ашигтай удирдах зорилготой.
          Бид иргэдэд илүү ойртсон үйлчилгээ, мэдээллийн нээлттэй байдлыг хангахыг эрхэмлэж ажиллана.
        </p>

      </section>

      {/* Mission / Vision */}
      <section className="mb-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Зорилго */}
        <div className="group p-8 bg-lime-600 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center">
          <Sprout size={50} className="mx-auto text-white mb-4 transition-transform duration-300 group-hover:scale-110" />
          <h3 className="text-xl font-roboto-bold text-white mb-7 uppercase tracking-wide">
            Зорилго
          </h3>
          <p className="text-white font-roboto-regular leading-relaxed">
            “АГРО-СИТИ” эдийн засгийн тусгай бүс нь Улаанбаатар хотын хүнсний ногооны хэрэглээг дотооддоо хангах, импортыг орлох бүтээгдэхүүнийг бий болгох үндсэн зорилготой.
          </p>
        </div>

        {/* Алсын хараа */}
        <div className="group p-8 bg-lime-700 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center">
          <EyeIcon size={50} className="mx-auto text-white mb-4 transition-transform duration-300 group-hover:scale-110" />
          <h3 className="text-xl font-roboto-bold text-white mb-7 uppercase tracking-wide">
            Алсын хараа
          </h3>
          <p className="text-white font-roboto-regular leading-relaxed">
            Дүүрэг тэргүүлэгч, дижитал шийдэлд суурилсан иргэдэд ээлтэй засаг захиргаа болох.
          </p>
        </div>

        {/* Үнэт зүйлс */}
        <div className="group p-8 bg-lime-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center">
          <StarIcon size={50} className="mx-auto text-white mb-4 transition-transform duration-300 group-hover:scale-110" />
          <h3 className="text-xl font-roboto-bold text-white mb-7 uppercase tracking-wide">
            Үнэт зүйлс
          </h3>
          <ul className="text-white font-roboto-regular space-y-2">
            <li className="hover:text-lime-200 transition-colors duration-200">Ил тод байдал</li>
            <li className="hover:text-lime-200 transition-colors duration-200">Үр ашигтай шийдвэр</li>
            <li className="hover:text-lime-200 transition-colors duration-200">Харилцан хүндлэл</li>
          </ul>
        </div>
      </section>



      {/* Stats */}
      <section className="mb-12 bg-gradient-to-r from-white via-lime-700 to-white p-6 rounded-lg">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div>
            <div className="text-3xl font-roboto-bold text-white" style={{ fontFamily: 'RobotoBold' }}>1.200+</div>
            <div className="text-sm text-white font-roboto-regular mt-1" style={{ fontFamily: 'RobotoBold' }}>Шилжүүлсэн санал</div>
          </div>
          <div>
            <div className="text-3xl font-roboto-bold text-white" style={{ fontFamily: 'RobotoBold' }}>85%</div>
            <div className="text-sm text-white font-roboto-regular mt-1" style={{ fontFamily: 'RobotoBold' }}>Дүн шинжилгээ төгссөн</div>
          </div>
          <div>
            <div className="text-3xl font-roboto-bold text-white" style={{ fontFamily: 'RobotoBold' }}>5+ жил</div>
            <div className="text-sm text-white font-roboto-regular mt-1" style={{ fontFamily: 'RobotoBold' }}>Туршлага</div>
          </div>
        </div>
      </section>

      {/* Team / Contact */}
      {/* <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white p-6 rounded-lg border shadow-sm">
          <h3 className="text-2xl font-roboto-bold text-gray-900 mb-4">Баг болон үйл ажиллагаа</h3>
          <p className="text-gray-700 font-roboto-regular mb-4">
            Бид мэргэжлийн инженер, нийтийн захиргаа, мэдээллийн технологийн багтай хамтран ажилладаг.
            Хэрэглэгчийн саналд тулгуурлан шинэчлэл, ажлын явц хянах болон тайлан гаргах системийг тасралтгүй сайжруулж байна.
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <li className="p-4 border rounded-md">
              <div className="text-sm text-gray-600">Захирал</div>
              <div className="font-roboto-bold text-gray-900">Д. Бат-Эрдэнэ</div>
            </li>
            <li className="p-4 border rounded-md">
              <div className="text-sm text-gray-600">Төслийн менежер</div>
              <div className="font-roboto-bold text-gray-900">С. Мөнх-Эрдэнэ</div>
            </li>
            <li className="p-4 border rounded-md">
              <div className="text-sm text-gray-600">Үйлчилгээ хариуцсан</div>
              <div className="font-roboto-bold text-gray-900">Н. Энхтуяа</div>
            </li>
            <li className="p-4 border rounded-md">
              <div className="text-sm text-gray-600">Технологи</div>
              <div className="font-roboto-bold text-gray-900">Ж. Батзориг</div>
            </li>
          </ul>
        </div> */}

      {/* <aside className="bg-white p-6 rounded-lg border shadow-sm">
          <h4 className="text-lg font-roboto-bold mb-3 text-gray-900">Холбоо барих</h4>
          <p className="text-sm text-gray-600 mb-3 font-roboto-regular">
            📧 <a className="text-blue-600" href="mailto:songinokhairkhandistrict@gmail.com">songinokhairkhandistrict@gmail.com</a><br />
            ☎️ 7017 3203<br />
            📍 Сонгинохайрхан дүүрэг, Улаанбаатар
          </p>

          <Link href="/contact" className="block mt-4 bg-blue-600 hover:bg-blue-700 text-white text-center py-2 rounded-md">
            Санал илгээх
          </Link>
        </aside> */}
      {/* </section> */}

      {/* Footer note */}
      {/* <section className="mt-12 text-sm text-gray-500">
        <p className="font-roboto-regular">
          Энэхүү платформ нь иргэдээс ирсэн саналыг бүртгэж, ажлын явцыг хянахад зориулагдсан.
          Хувийн мэдээллийг хэрхэн ашиглах талаар дэлгэрэнгүйг <Link href="/privacy" className="text-blue-600 underline">Нууцлалын бодлого</Link>-оос үзнэ үү.
        </p>
      </section> */}
    </main>
  )
}
