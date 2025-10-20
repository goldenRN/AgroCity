

import Image from "next/image";
import Link from "next/link";
import HeaderMenu from "./HeaderMenu";
import { LogInIcon } from "lucide-react";

const Navbar = () => {
  return (
    <header className="w-full shadow-lg border-b border-gray-200 sticky top-0 z-50 pl-50 pr-50 bg-white">
      <nav>
        <div className="max-w-full mx-auto flex flex-col md:flex-row items-center justify-between">
          {/* Left: Logo + Menu */}
          <div className="flex items-center gap-3">
            {/* Logo дээр дарахад Home руу очно */}
            <Link href="/" scroll={true}>
              <Image
                src="/agro_logo_v.png"
                alt="Logo"
                width={200}
                height={150}
                className="object-contain cursor-pointer"
              />
            </Link>

            <HeaderMenu />
          </div>

          {/* Right: Login */}
          <div className="flex items-center gap-2 w-30 align-right">
            <Link
              href="/auth"
              className="group flex items-center gap-2 w-30 h-10 text-md bg-lime-700 pl-4 text-white rounded-md transition-all duration-300 transform hover:-translate-y-[2px] hover:-lime-700/70"
            
            >
              <LogInIcon
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
              <span className="text-md">Нэвтрэх</span>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
