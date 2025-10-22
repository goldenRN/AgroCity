// "use client"
// import Image from "next/image"
// import React from "react"

// export default function Services() {
//   const services = [
//     {
//       title: "3D Дижитал ихэр",
//       desc: "Газрын төлөвлөлт, усалгааны менежмент, хөрсний өгөгдөлд суурилсан ухаалаг загварчлал.",
//       icon: "/icons/digital-twin.png",
//       image: "/service1.jpg",
//     },
//     {
//       title: "AI өгөгдөлд суурилсан дүн шинжилгээ",
//       desc: "Аналитик загвар ашиглан ургацын төлөв, эрсдэлийн оношлогоо, усны хэрэглээний таамаглал гаргана.",
//       icon: "/icons/ai-analytics.png",
//       image: "/service2.jpg",
//     },
//     {
//       title: "IoT мэдрэгчийн сүлжээ",
//       desc: "Хөрсний чийг, температур, агаарын чанарыг бодит цагийн горимоор хэмжин, серверт илгээнэ.",
//       icon: "/icons/iot.png",
//       image: "/service3.jpg",
//     },
//     {
//       title: "Газар тариалангийн хяналт",
//       desc: "Дрон, хиймэл дагуулын зураглал ашиглан тариалангийн явцыг хянах, алсаас удирдах систем.",
//       icon: "/icons/drone.png",
//       image: "/service4.jpg",
//     },
//   ]

//   return (
//     <main className="max-w-8xl mx-auto px-50 py-20 ">
//       {/* Header */}
//       {/* <section className="text-center mb-12"> */}
//       <div className="text-center max-w-3xl mx-auto mb-10">
//         <h1 className="text-4xl md:text-4xl  text-gray-900 mb-4 uppercase">
//           Агро-Сити төслийн үйлчилгээ
//         </h1>
//         <p className="text-lg md:text-xl text-gray-700 mx-auto" >
//           Агро-Сити нь хөдөө аж ахуйн орон зайн дижитал шийдлийг нэвтрүүлж, өгөгдөлд суурилсан шийдвэр
//           гаргах, эрсдэлийг бууруулах, үр ашгийг нэмэгдүүлэх зорилготой ухаалаг систем юм.
//         </p>
//       </div>
//       {/* </section> */}

//       {/* Service cards */}
//       <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//         {services.map((srv, i) => (
//           <div
//             key={i}
//             className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-lg transition transform hover:-translate-y-1 flex flex-col"
//           >
//             <div className="relative w-full h-60">
//               <Image
//                 src={srv.image}
//                 alt={srv.title}
//                 fill
//                 className="object-cover"
//               />
//             </div>

//             <div className="p-5 flex flex-col flex-1">
//               <div className="flex items-center gap-3 mb-3">
//                 {/* <Image src={srv.icon} alt={srv.title} width={32} height={32} /> */}
//                 <h3 className="text-lg font-roboto-bold text-gray-800">{srv.title}</h3>
//               </div>
//               <p className="text-sm text-gray-600 font-roboto-regular flex-1">
//                 {srv.desc}
//               </p>
//               <div className="mt-4">
//                 <button className="text-lime-700 hover:text-lime-800 text-sm font-medium transition">
//                   Дэлгэрэнгүй →
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </section>

//     </main>
//   )
// }

'use client'
import Image from "next/image"
import React from "react"

export default function Services() {
  const services = [
    {
      title: "3D Дижитал ихэр",
      desc: "Газрын төлөвлөлт, усалгааны менежмент, хөрсний өгөгдөлд суурилсан ухаалаг загварчлал.",
      icon: "/icons/digital-twin.png",
      image: "/service1.jpg",
    },
    {
      title: "AI өгөгдөлд суурилсан дүн шинжилгээ",
      desc: "Аналитик загвар ашиглан ургацын төлөв, эрсдэлийн оношлогоо, усны хэрэглээний таамаглал гаргана.",
      icon: "/icons/ai-analytics.png",
      image: "/service2.jpg",
    },
    {
      title: "IoT мэдрэгчийн сүлжээ",
      desc: "Хөрсний чийг, температур, агаарын чанарыг бодит цагийн горимоор хэмжин, серверт илгээнэ.",
      icon: "/icons/iot.png",
      image: "/service3.jpg",
    },
    {
      title: "Газар тариалангийн хяналт",
      desc: "Дрон, хиймэл дагуулын зураглал ашиглан тариалангийн явцыг хянах, алсаас удирдах систем.",
      icon: "/icons/drone.png",
      image: "/service4.jpg",
    },
  ]

  return (
    <main className="max-w-7xl mx-auto  px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-20">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 mb-4 uppercase leading-snug">
          Агро-Сити төслийн үйлчилгээ
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-700 mx-auto leading-relaxed">
          Агро-Сити нь хөдөө аж ахуйн орон зайн дижитал шийдлийг нэвтрүүлж, өгөгдөлд суурилсан шийдвэр
          гаргах, эрсдэлийг бууруулах, үр ашгийг нэмэгдүүлэх зорилготой ухаалаг систем юм.
        </p>
      </div>

      {/* Service cards */}
      <section className=" max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-20 justify-between  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
      {/* <nav className=" flex-row px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-20 justify-between  "> */}
        
        {services.map((srv, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-lg transition transform hover:-translate-y-1 flex flex-col"
          >
            <div className="relative w-full h-48 sm:h-56 md:h-60 lg:h-64">
              <Image
                src={srv.image}
                alt={srv.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-4 sm:p-5 flex flex-col flex-1">
              <div className="flex items-center gap-3 mb-3">
                {/* <Image src={srv.icon} alt={srv.title} width={32} height={32} /> */}
                <h3 className="text-base sm:text-lg  text-gray-800">
                  {srv.title}
                </h3>
              </div>
              <p className="text-sm sm:text-base text-gray-600  flex-1 leading-relaxed">
                {srv.desc}
              </p>
              <div className="mt-4">
                {/* <button className="text-lime-700 hover:text-lime-800 text-sm sm:text-base font-medium transition">
                  Дэлгэрэнгүй →
                </button> */}
              </div>
            </div>
          </div>
        ))}
        {/* </nav> */}
      </section>
    </main>
  )
}