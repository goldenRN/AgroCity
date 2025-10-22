// 'use client';
// import React, { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import Link from "next/link";
// import { X, Menu, LogInIcon } from 'lucide-react';

// export default function HeaderMenu() {
//   // const menuItems = [
//   //   'Бидний тухай',
//   //   'Үйлчилгээ',
//   //   'Хууль эрх зүй',
//   //   'Санал хүсэлт',
//   // ];
//   const router = useRouter();
//   const [mobileOpen, setMobileOpen] = useState(false);

//   const menuItems = [
//     { label: 'Бидний тухай', href: '/#about' },
//     { label: 'Үйлчилгээ', href: '/#services' },
//     { label: 'Хууль эрх зүй', href: '/#law' },
//     { label: 'Санал хүсэлт', href: '/feedback' }, // шинэ хуудсанд
//   ];
//   const handleNavigation = (href: string) => {
//     setMobileOpen(false); // Mobile drawer хаах
//     if (href.startsWith('/#')) {
//       // Шинэ хуудас руу очиж, тухайн секц рүү scroll хийх
//       const [path, hash] = href.split('#');
//       if (window.location.pathname !== path) {
//         // Хэрвээ Home хуудсан дээр биш бол router push хийж hash дамжуулах
//         router.push(href);
//       } else {
//         // Home хуудсан дээр бол зөвхөн scroll
//         const element = document.querySelector('#' + hash);
//         element?.scrollIntoView({ behavior: 'smooth' });
//       }
//     } else if (href.startsWith('#')) {
//       const element = document.querySelector(href);
//       element?.scrollIntoView({ behavior: 'smooth' });
//     } else {
//       router.push(href);
//     }
//   };


//   return (

//     < div className="hidden md:flex space-x-10 bg-green-500" >
//       {
//         menuItems.map((item, idx) => (
//           <button
//             key={idx}
//             onClick={() => handleNavigation(item.href)}
//             className="relative text-green-950 text-md hover:text-green-700 transition-colors duration-200"

//           >
//             {item.label}
//             <span className="absolute left-0 bottom-[-3px] h-[2px] w-0 bg-sky-600 transition-all duration-300 hover:w-full" />
//           </button>
//         ))
//       }
//       < div className="flex items-left justify-left md:justify-end w-full md:w-auto" >
//         <Link
//           href="/auth"
//           className="group flex items-center justify-center gap-2 
//                        px-3 sm:px-4 py-2 text-sm sm:text-base 
//                        bg-lime-700 text-white rounded-md 
//                        transition-all duration-300 hover:bg-lime-800 hover:scale-[1.03]"
//         >
//           <LogInIcon
//             size={16}
//             className="transition-transform duration-300 group-hover:translate-x-1"
//           />
//           <span className="font-medium">Нэвтрэх</span>
//         </Link>
//       </div >
//     </div >

//   );
// }


'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from "next/link";
import { X, Menu, LogInIcon } from 'lucide-react';

export default function HeaderMenu() {
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);

  const menuItems = [
    { label: 'Бидний тухай', href: '/#about' },
    { label: 'Үйлчилгээ', href: '/#services' },
   // { label: 'Хууль эрх зүй', href: '/#law' },
    { label: 'Санал хүсэлт', href: '/feedback' },
  ];

  const handleNavigation = (href: string) => {
    setMobileOpen(false);
    if (href.startsWith('/#')) {
      const [path, hash] = href.split('#');
      if (window.location.pathname !== path) {
        router.push(href);
      } else {
        const element = document.querySelector('#' + hash);
        element?.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (href.startsWith('#')) {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: 'smooth' });
    } else {
      router.push(href);
    }
  };

  return (
    <div className="w-full  md:bg-transparent md:flex md:items-center md:justify-between md:space-x-10  md:p-0">
      {/* ✅ Desktop menu */}
      <div className="hidden md:flex space-x-10 px-10 text-flex">
        {menuItems.map((item, idx) => (
          <button
            key={idx}
            onClick={() => handleNavigation(item.href)}
            className="relative text-green-950 text-md hover:text-green-700 transition-colors duration-200"
          >
            {item.label}
            <span className="absolute left-0 bottom-[-3px] h-[2px] w-0 bg-sky-600 transition-all duration-300 hover:w-full" />
          </button>
        ))}
      </div>

      {/* ✅ Login button (desktop) */}
      <div className="hidden md:flex items-center justify-end">
        <Link
          href="/auth"
          className="group flex items-center justify-center gap-2 
                     px-3 sm:px-4 py-2 text-sm sm:text-base 
                     bg-lime-700 text-white rounded-md 
                     transition-all duration-300 hover:bg-lime-800 hover:scale-[1.03]"
        >
          <LogInIcon
            size={16}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
          <span className="font-medium">Нэвтрэх</span>
        </Link>
      </div>

      {/* ✅ Mobile toggle */}
      <div className="flex md:hidden justify-between items-center w-full">
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex items-center gap-2 text-green-950 focus:outline-none"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          <span className="font-medium">Цэс</span>
        </button>

        <Link
          href="/auth"
          className="group flex items-center justify-center gap-2 
                     px-3 py-2 text-sm 
                     bg-lime-700 text-white rounded-md 
                     transition-all duration-300 hover:bg-lime-800"
        >
          <LogInIcon size={16} />
          <span>Нэвтрэх</span>
        </Link>
      </div>

      {/* ✅ Mobile menu items */}
      {mobileOpen && (
        <div className="md:hidden mt-3 flex flex-col space-y-3 bg-green-50 rounded-lg p-4 shadow-lg">
          {menuItems.map((item, idx) => (
            <button
              key={idx}
              onClick={() => handleNavigation(item.href)}
              className="text-green-950 text-left text-base hover:text-green-700 transition-colors duration-200"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
