'use client';
import React from 'react';

export default function HeaderMenu() {
  const menuItems = [
    'Бидний тухай',
    'Үйлчилгээ',
    'Хууль эрх зүй',
    'Санал хүсэлт',
  ];

  return (
    <header className="w-full bg-white/80 backdrop-blur-md  z-50">
      <nav className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Лого хэсэг */}
        {/* <div className="text-2xl font-bold text-sky-700 tracking-wide">
          Agro<span className="text-sky-500">City</span>
        </div> */}

        {/* Menu хэсэг */}
        <div className="hidden md:flex space-x-10">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href="#"
              className="relative text-gray-700 font-medium hover:text-green-700 transition-colors duration-200"
            >
              {item}
              <span className="absolute left-0 bottom-[-3px] h-[2px] w-0 bg-sky-600 transition-all duration-300 group-hover:w-full hover:w-full" />
            </a>
          ))}
        </div>

        {/* Mobile menu icon */}
        <button className="md:hidden flex flex-col justify-between w-6 h-5 focus:outline-none">
          <span className="block w-full h-[2px] bg-gray-700 rounded"></span>
          <span className="block w-full h-[2px] bg-gray-700 rounded"></span>
          <span className="block w-full h-[2px] bg-gray-700 rounded"></span>
        </button>
      </nav>
    </header>
  );
}
