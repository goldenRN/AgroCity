"use client"
import Image from "next/image"
import React from "react"

export default function Services() {
  const services = [
    {
      title: "3D Дижитал ихэр",
      desc: "Газрын төлөвлөлт, усалгааны менежмент, хөрсний өгөгдөлд суурилсан ухаалаг загварчлал.",
      icon: "/icons/digital-twin.png",
      image: "/images/service-3d.jpg",
    },
    {
      title: "AI өгөгдөлд суурилсан дүн шинжилгээ",
      desc: "Аналитик загвар ашиглан ургацын төлөв, эрсдэлийн оношлогоо, усны хэрэглээний таамаглал гаргана.",
      icon: "/icons/ai-analytics.png",
      image: "/images/service-ai.jpg",
    },
    {
      title: "IoT мэдрэгчийн сүлжээ",
      desc: "Хөрсний чийг, температур, агаарын чанарыг бодит цагийн горимоор хэмжин, серверт илгээнэ.",
      icon: "/icons/iot.png",
      image: "/images/service-iot.jpg",
    },
    {
      title: "Газар тариалангийн хяналт",
      desc: "Дрон, хиймэл дагуулын зураглал ашиглан тариалангийн явцыг хянах, алсаас удирдах систем.",
      icon: "/icons/drone.png",
      image: "/images/service-drone.jpg",
    },
  ]

  return (
    <main className="max-w-8xl mx-auto px-10 py-10 bg-gray-100">
      {/* Header */}
      <section className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl  text-gray-900 mb-4" style={{ fontFamily: 'RobotoBold' }}>
          Агро Сити төслийн үйлчилгээ
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mx-auto" style={{ fontFamily: 'RobotoRegular' }}>
          AgroCity нь хөдөө аж ахуйн орон зайн дижитал шийдлийг нэвтрүүлж, өгөгдөлд суурилсан шийдвэр
          гаргах, эрсдэлийг бууруулах, үр ашгийг нэмэгдүүлэх зорилготой ухаалаг систем юм.
        </p>
      </section>

      {/* Service cards */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((srv, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-lg transition transform hover:-translate-y-1 flex flex-col"
          >
            <div className="relative w-full h-48">
              <Image
                src={srv.image}
                alt={srv.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-5 flex flex-col flex-1">
              <div className="flex items-center gap-3 mb-3">
                <Image src={srv.icon} alt={srv.title} width={32} height={32} />
                <h3 className="text-lg font-roboto-bold text-gray-800">{srv.title}</h3>
              </div>
              <p className="text-sm text-gray-600 font-roboto-regular flex-1">
                {srv.desc}
              </p>
              <div className="mt-4">
                <button className="text-blue-600 hover:text-blue-800 text-sm font-medium transition">
                  Дэлгэрэнгүй →
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>

    </main>
  )
}
