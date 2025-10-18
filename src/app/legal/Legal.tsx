"use client"
import React from "react"
import Link from "next/link"

export default function Legal() {
  return (
    <>
      {/* Хуудасны үндсэн хэсэг */}
      <main className="bg-green-50 min-h-screen py-16 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <section className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-roboto-bold text-lime-700 mb-4">
              Хууль эрх зүйн мэдээлэл
            </h1>
            <p className="text-lg text-gray-700 font-roboto-regular max-w-3xl mx-auto">
              AgroCity төслийн хэрэглэгчийн мэдээлэл хамгаалах бодлого, ашиглалтын журам болон холбогдох хууль тогтоомжийг танилцуулж байна.
            </p>
          </section>

          {/* Агуулга */}
          <div className="bg-white rounded-2xl shadow-md border border-lime-200 p-8 space-y-10">
            {/* 1. Хувийн мэдээлэл */}
            <section>
              <h2 className="text-2xl font-roboto-bold text-lime-700 mb-3">
                1. Хувийн мэдээлэл хамгаалах бодлого
              </h2>
              <p className="text-gray-700 font-roboto-regular leading-relaxed">
                AgroCity систем нь хэрэглэгчийн мэдээллийг Монгол Улсын 
                <strong> “Хувийн мэдээлэл хамгаалах тухай хууль”</strong>-ын дагуу чандлан хамгаална. 
                Хэрэглэгчийн өгөгдөл нь зөвхөн үйлчилгээний сайжруулалт болон статистикийн зорилгоор ашиглагдана.
              </p>
            </section>

            {/* 2. Хэрэглэгчийн үүрэг */}
            <section>
              <h2 className="text-2xl font-roboto-bold text-lime-700 mb-3">
                2. Хэрэглэгчийн үүрэг
              </h2>
              <ul className="list-disc list-inside text-gray-700 font-roboto-regular space-y-2">
                <li>Системийг зөвшөөрөгдсөн зорилгоор ашиглах</li>
                <li>Бусдын мэдээллийг зөвшөөрөлгүй тараахгүй байх</li>
                <li>Хуурамч мэдээлэл оруулахгүй байх</li>
              </ul>
            </section>

            {/* 3. Оюуны өмч */}
            <section>
              <h2 className="text-2xl font-roboto-bold text-lime-700 mb-3">
                3. Оюуны өмч ба лиценз
              </h2>
              <p className="text-gray-700 font-roboto-regular leading-relaxed">
                AgroCity платформын дизайн, код, өгөгдлийн бүтцийн өмчлөгч нь AgroCity баг юм. 
                <span className="text-lime-700 font-semibold"> Зөвшөөрөлгүй хуулбарлах, түгээхийг хориглоно.</span>
              </p>
            </section>

            {/* 4. Хариуцлага */}
            <section>
              <h2 className="text-2xl font-roboto-bold text-lime-700 mb-3">
                4. Хариуцлага ба маргаан шийдвэрлэх
              </h2>
              <p className="text-gray-700 font-roboto-regular leading-relaxed">
                Үйлчилгээтэй холбоотой аливаа маргааныг Монгол Улсын хууль тогтоомжийн дагуу 
                талууд харилцан зөвшилцөж шийдвэрлэнэ. Шаардлагатай бол 
                <strong> Нийслэлийн шүүхийн байгууллагад</strong> хандана.
              </p>
            </section>

            {/* 5. Холбоо барих */}
            <section>
              <h2 className="text-2xl font-roboto-bold text-lime-700 mb-3">
                5. Холбоо барих
              </h2>
              <div className="mt-4 bg-green-50 border-l-4 border-lime-700 p-4 rounded-md">
                <p className="text-gray-800 font-roboto-regular">
                  📧 И-мэйл: <a href="mailto:legal@agrocity.mn" className="text-lime-700 hover:underline">legal@agrocity.mn</a><br />
                  ☎️ Утас: +976 7000-1234<br />
                  🏢 Хаяг: Улаанбаатар хот, Сүхбаатар дүүрэг, 1-р хороо, AgroCity төв
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>

      
    </>
  )
}
