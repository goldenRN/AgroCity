"use client";

import Image from "next/image";
import Link from "next/link";
import {
  LogInIcon,
} from "lucide-react";
import HeaderMenu from "./HeaderMenu";


const Navbar = () => {
  return (
    <header className="w-full shadow-lg border-b border-gray-200 sticky top-0 z-50">

      {/* --- Main navigation --- */}
      <nav className="bg-white ">
        {/* bg-gradient-to-b from-[#0c5112] from-[#306c12] to-[#5b8b12] text-white" */}
        <div className="max-w-full mx-auto flex flex-col md:flex-row items-center justify-between  ">
          {/* 🔍 Left: Logo */}
          <div className="flex items-center gap-3">
            <Image
              src="/agro_logo_v.png"
              alt="Logo"
              width={200}
              height={150}
              className="object-contain"
            />
            <HeaderMenu />
            {/* <div>
              <span>Бидний тухай</span>
              <span>Үйлчилгээ</span>
              <span>Хууль эрх зүй</span>
              <span>Санал хүсэлт</span>
            </div> */}
          </div>



          {/* 🛒 Right: Cart */}
          <div className="flex items-center gap-2  px-5 ">
            <Link
              href="/auth"
              className="group flex items-center gap-2 
      bg-gradient-to-r from-[#5b8b12] from-[#306c12] to-[#0c5112] 
      text-white  px-5  py-2.5 rounded-xl font-medium shadow-md 
      hover:shadow-lg hover:bg-opacity/90
      transition-all duration-300 ease-out transform hover:-translate-y-[2px]"
            >
              <LogInIcon
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
              <span>Нэвтрэх</span>
            </Link>
          </div>

        </div>
      </nav>
    </header>
  );
};

export default Navbar;