'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function ProductGallery() {
  // Зургуудын жагсаалт
  const images = [
    '/images/1.png',
    '/images/2.png',
    '/images/3.png',
    '/images/4.png',
    '/images/5.png',
    '/images/6.png',
    '/images/7.png',
    '/images/8.png',
    '/images/9.png',
  ]

  const [selected, setSelected] = useState(0)

  return (
    <div className="flex flex-col items-center gap-4 w-full max-w-[900px] mx-auto">
      {/* --- Том зураг --- */}
      <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-gray-200 shadow-md">
        <Image
          src={images[selected]}
          alt={`main-${selected}`}
          fill
          className="object-cover transition-all duration-500 ease-in-out"
          priority
        />
      </div>

      {/* --- Жижиг зургууд --- */}
      <div className="flex items-center justify-center gap-3 overflow-x-auto w-full py-2">
        {images.map((src, i) => (
          <button
            key={i}
            onClick={() => setSelected(i)}
            className={`relative w-28 h-20 rounded-md overflow-hidden border-2 transition 
              ${selected === i ? 'border-blue-500' : 'border-transparent hover:border-gray-300'}`}
          >
            <Image
              src={src}
              alt={`thumb-${i}`}
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  )
}
