// "use client"
// import React from "react"
// import Image from "next/image"
// import Link from "next/link"
// import { Sprout, EyeIcon, Gem } from 'lucide-react'
// export default function AboutUs() {
//   return (
//     <main className="ml-40 mr-40 mx-auto pt-20 px-10">
//       {/* Header */}
//       <section className="mb-12 items-center text-center">
//         {/* <div className="w-full h-64 md:h-80 relative rounded-lg overflow-hidden shadow-sm">
//           <Image
//             src="/ac.jpg"
//             alt="Бидний тухай"
//             fill
//             className="object-cover"
//             priority
//           />
//         </div> */}

//         <h1 className=" md:text-4xl text-green-950 uppercase" >
//           Бидний тухай
//         </h1>
//         <div className="flex justify-center">
//           <p className="text-lg mt-10 md:text-lg text-green-950 md:max-w-3xl text-center">
//             Сонгинохайрхан дүүргийн засаг даргын тамгын газрын <strong>АГРО-СИТИ</strong> платформ нь
//             оршин суугчдын санал гомдлыг хурдан шийдвэрлэх, хотын дэд бүтцийг илүү ил тод, үр ашигтай удирдах зорилготой.
//             Бид иргэдэд илүү ойртсон үйлчилгээ, мэдээллийн нээлттэй байдлыг хангахыг эрхэмлэж ажиллана.


//           </p>
//         </div>

//       </section>

//       <section className="mb-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
//         {/* Зорилго */}
//         <div className="group p-8 bg-lime-600 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center">
//           <Sprout size={50} className="mx-auto text-white mb-4 transition-transform duration-300 group-hover:scale-110" />
//           <h3 className="text-xl  text-white mb-7 uppercase tracking-wide">
//             Зорилго
//           </h3>
//           <p className="text-white  leading-relaxed">
//             “АГРО-СИТИ” эдийн засгийн тусгай бүс нь Улаанбаатар хотын хүнсний ногооны хэрэглээг дотооддоо хангах, импортыг орлох бүтээгдэхүүнийг бий болгох үндсэн зорилготой.
//           </p>
//         </div>

//         {/* Алсын хараа */}
//         <div className="group p-8 bg-lime-700 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center">
//           <EyeIcon size={50} className="mx-auto text-white mb-4 transition-transform duration-300 group-hover:scale-110" />
//           <h3 className="text-xl text-white mb-7 uppercase tracking-wide">
//             Алсын хараа
//           </h3>
//           <p className="text-white leading-relaxed">
//             Дүүрэг тэргүүлэгч, дижитал шийдэлд суурилсан иргэдэд ээлтэй засаг захиргаа болох.
//           </p>
//         </div>

//         {/* Үнэт зүйлс */}
//         <div className="group p-8 bg-lime-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center">
//           <Gem size={50} className="mx-auto text-white mb-4 transition-transform duration-300 group-hover:scale-110" />
//           <h3 className="text-xl text-white mb-7 uppercase tracking-wide">
//             Үнэт зүйлс
//           </h3>
//           <ul className="text-white space-y-2">
//             <li className="hover:text-lime-200 transition-colors duration-200">Ил тод байдал</li>
//             <li className="hover:text-lime-200 transition-colors duration-200">Үр ашигтай шийдвэр</li>
//             <li className="hover:text-lime-200 transition-colors duration-200">Харилцан хүндлэл</li>

//           </ul>
//         </div>
//       </section>



//       {/* Stats */}
//       {/* <section className="mb-12 bg-gradient-to-r from-white via-gray-400 to-white p-6 rounded-lg"> */}
//       <section className="mb-12 bg-gradient-to-r from-slate-50 via-green-50 to-slate-50  p-6   border-b   border-t border-lime-200">
//         <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
//           <div>
//             <div className="text-3xl text-green-950" >1,200+</div>
//             <div className="text-sm text-green-950 mt-1" >Шилжүүлсэн санал</div>
//           </div>
//           <div>
//             <div className="text-3xl  text-green-950" >85%</div>
//             <div className="text-sm text-green-950 mt-1" >Дүн шинжилгээ төгссөн</div>
//           </div>
//           <div>
//             <div className="text-3xl  text-green-950" >5+ жил</div>
//             <div className="text-sm text-green-950  mt-1" >Туршлага</div>
//           </div>
//         </div>
//       </section>


//     </main>
//   )
// }


"use client"
import React from "react"
import Image from "next/image"
import Link from "next/link"
import { Sprout, EyeIcon, Gem } from 'lucide-react'

export default function AboutUs() {
  return (
    <main className="w-full px-6 sm:px-10 md:px-20 lg:px-40 mx-auto pt-16 md:pt-20">
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
          Бидний тухай
        </h1>
        <div className="flex justify-center">
          <p className="text-base sm:text-lg mt-6 sm:mt-10 text-green-950 max-w-xl sm:max-w-3xl text-center leading-relaxed">
            Сонгинохайрхан дүүргийн засаг даргын тамгын газрын{" "}
            <strong>АГРО-СИТИ</strong> платформ нь оршин суугчдын санал гомдлыг хурдан шийдвэрлэх,
            хотын дэд бүтцийг илүү ил тод, үр ашигтай удирдах зорилготой.
            Бид иргэдэд илүү ойртсон үйлчилгээ, мэдээллийн нээлттэй байдлыг хангахыг эрхэмлэж ажиллана.
          </p>
        </div>
      </section>

      {/* --- 3 Column section --- */}
      <section className="mb-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
        {/* Зорилго */}
        <div className="group p-6 sm:p-8 bg-lime-600 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center">
          <Sprout
            size={50}
            className="mx-auto text-white mb-4 transition-transform duration-300 group-hover:scale-110"
          />
          <h3 className="text-lg sm:text-xl text-white mb-5 sm:mb-7 uppercase tracking-wide">
            Зорилго
          </h3>
          <p className="text-white leading-relaxed text-sm sm:text-base">
            “АГРО-СИТИ” эдийн засгийн тусгай бүс нь Улаанбаатар хотын хүнсний ногооны хэрэглээг дотооддоо хангах,
            импортыг орлох бүтээгдэхүүнийг бий болгох үндсэн зорилготой.
          </p>
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
            Дүүрэг тэргүүлэгч, дижитал шийдэлд суурилсан иргэдэд ээлтэй засаг захиргаа болох.
          </p>
        </div>

        {/* Үнэт зүйлс */}
        <div className="group p-6 sm:p-8 bg-lime-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center">
          <Gem
            size={50}
            className="mx-auto text-white mb-4 transition-transform duration-300 group-hover:scale-110"
          />
          <h3 className="text-lg sm:text-xl text-white mb-5 sm:mb-7 uppercase tracking-wide">
            Үнэт зүйлс
          </h3>
          <ul className="text-white  space-y-2 text-sm sm:text-base">
            <li className="hover:text-lime-200 transition-colors duration-200">Ил тод байдал</li>
            <li className="hover:text-lime-200 transition-colors duration-200">Үр ашигтай шийдвэр</li>
            <li className="hover:text-lime-200 transition-colors duration-200">Харилцан хүндлэл</li>
          </ul>
        </div>
      </section>

      {/* --- Stats Section --- */}
      <section className="mb-12 bg-gradient-to-r from-slate-50 via-green-50 to-slate-50 p-6 border-y border-lime-200 rounded-lg">
        {/* <div className="max-w-7xl flex itemgrid grid-cols-1 sm:grid-cols-3 gap-6 text-center"> */}
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
        {/* </div> */}
       
      </section>
    </main>
  )
}
