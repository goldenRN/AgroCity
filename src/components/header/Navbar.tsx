"use client";

import Image from "next/image";
import Link from "next/link";
import {
  LogInIcon,
} from "lucide-react";
import HeaderMenu from "./HeaderMenu";


const Navbar = () => {
  return (
    <header className="w-full shadow-lg border-b border-gray-200 sticky top-0 z-50  pl-10 pr-10 bg-white">

      {/* --- Main navigation --- */}
      <nav >
        {/* bg-gradient-to-b from-[#0c5112] from-[#306c12] to-[#5b8b12] text-white" */}
        <div className="max-w-full mx-auto flex flex-col md:flex-row items-center justify-between  ">
          {/* 🔍 Left: Logo */}
          <div className="flex items-center gap-3 ">
            <Image
              src="/agro_logo_v.png"
              alt="Logo"
              width={200}
              height={150}
              className="object-contain"
            />
            <HeaderMenu />
          </div>

          {/* 🛒 Right: Cart */}
          <div className="flex items-center gap-2  w-30 align-right">
            <Link
              href="/auth"
              className="group flex items-center gap-2 w-30 h-10
                        bg-lime-700 pl-4
                        text-white rounded-md
                        transition-all duration-300 transform hover:-translate-y-[2px] hover:-lime-700/70"
              style={{ fontFamily: 'RobotoBold' }}>
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