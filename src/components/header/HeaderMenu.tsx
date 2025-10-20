'use client';
import React,  {useState} from 'react';
import { useRouter } from 'next/navigation';
import { X, Menu } from 'lucide-react';

export default function HeaderMenu() {
  // const menuItems = [
  //   'Бидний тухай',
  //   'Үйлчилгээ',
  //   'Хууль эрх зүй',
  //   'Санал хүсэлт',
  // ];
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);

  const menuItems = [
    { label: 'Бидний тухай', href: '/#about' },
    { label: 'Үйлчилгээ', href: '/#services' },
    { label: 'Хууль эрх зүй', href: '/#law' },
    { label: 'Санал хүсэлт', href: '/feedback' }, // шинэ хуудсанд
  ];
   const handleNavigation = (href: string) => {
    setMobileOpen(false); // Mobile drawer хаах
     if (href.startsWith('/#')) {
    // Шинэ хуудас руу очиж, тухайн секц рүү scroll хийх
    const [path, hash] = href.split('#');
    if (window.location.pathname !== path) {
      // Хэрвээ Home хуудсан дээр биш бол router push хийж hash дамжуулах
      router.push(href);
    } else {
      // Home хуудсан дээр бол зөвхөн scroll
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
    <header className="w-full backdrop-blur-md  z-50 pl-10">
      <nav className="max-w-7xl mx-auto pr-6 py-3 flex items-center justify-between">
        {/* Лого хэсэг */}
        {/* <div className="text-2xl font-bold text-sky-700 tracking-wide">
          Agro<span className="text-sky-500">City</span>
        </div> */}

        {/* Menu хэсэг */}
        <div className="hidden md:flex space-x-10">
          {menuItems.map((item, idx) => (
            <button
              key={idx}
              onClick={() => handleNavigation(item.href)}
              className="relative text-green-950 text-xl hover:text-green-700 transition-colors duration-200"
              style={{ fontFamily: 'RobotoBold' }}
            >
              {item.label}
              <span className="absolute left-0 bottom-[-3px] h-[2px] w-0 bg-sky-600 transition-all duration-300 hover:w-full" />
            </button>
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

// 'use client';
// import React, { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import { X, Menu } from 'lucide-react';

// export default function HeaderMenu() {
//   const router = useRouter();
//   const [mobileOpen, setMobileOpen] = useState(false);

//   const menuItems = [
//     { label: 'Бидний тухай', href: '#about' },
//     { label: 'Үйлчилгээ', href: '#services' },
//     { label: 'Хууль эрх зүй', href: '#law' },
//     { label: 'Санал хүсэлт', href: '/feedback' }, // шинэ хуудсанд
//   ];

//   const handleNavigation = (href: string) => {
//     setMobileOpen(false); // Mobile drawer хаах
//     if (href.startsWith('#')) {
//       const element = document.querySelector(href);
//       element?.scrollIntoView({ behavior: 'smooth' });
//     } else {
//       router.push(href);
//     }
//   };

//   return (
//     <header className="w-full backdrop-blur-md z-50">
//       <nav className="max-w-7xl mx-auto pr-6 py-3 flex items-center justify-between">
//         {/* Лого */}
//         {/* <div className="text-2xl font-bold text-sky-700 tracking-wide">
//           Agro<span className="text-sky-500">City</span>
//         </div> */}

//         {/* Desktop menu */}
//         <div className="hidden md:flex space-x-10">
//           {menuItems.map((item, idx) => (
//             <button
//               key={idx}
//               onClick={() => handleNavigation(item.href)}
//               className="relative text-green-950 text-xl hover:text-green-700 transition-colors duration-200"
//               style={{ fontFamily: 'RobotoBold' }}
//             >
//               {item.label}
//               <span className="absolute left-0 bottom-[-3px] h-[2px] w-0 bg-sky-600 transition-all duration-300 hover:w-full" />
//             </button>
//           ))}
//         </div>

//         {/* Mobile menu button */}
//         <button
//           className="md:hidden flex items-center focus:outline-none"
//           onClick={() => setMobileOpen(!mobileOpen)}
//         >
//           {mobileOpen ? <X size={24} /> : <Menu size={24} />}
//         </button>
//       </nav>

//       {/* Mobile menu drawer */}
//       {mobileOpen && (
//         <div className="md:hidden bg-white shadow-md absolute top-full left-0 w-full z-50 flex flex-col items-center space-y-4 py-4">
//           {menuItems.map((item, idx) => (
//             <button
//               key={idx}
//               onClick={() => handleNavigation(item.href)}
//               className="text-green-950 text-lg font-bold hover:text-green-700 transition-colors duration-200"
//               style={{ fontFamily: 'RobotoBold' }}
//             >
//               {item.label}
//             </button>
//           ))}
//         </div>
//       )}
//     </header>
//   );
// }

