'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Menu, X, LogInIcon } from 'lucide-react';

export default function Navbar() {
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);

  const menuItems = [
    { label: 'Төслийн тухай', href: '/#about' },
    { label: 'Танилцуулга', href: '/#services' },
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
    <header className="w-full shadow-md border-b border-gray-200 sticky top-0 z-50 bg-white">
      <nav className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* --- Left: Logo --- */}
        <div className="flex items-center gap-4">
          <Link href="/" scroll={true}>
            <Image
              src="/agro_logo_v.png"
              alt="Logo"
              width={180}
              height={80}
              className="object-contain cursor-pointer"
            />
          </Link>
        </div>

        {/* --- Desktop Menu --- */}
        <div className="hidden md:flex space-x-10">
          {menuItems.map((item, idx) => (
            <button
              key={idx}
              onClick={() => handleNavigation(item.href)}
              className="relative text-green-950 text-lg hover:text-green-700 transition-colors duration-200"

            >
              {item.label}
              <span className="absolute left-0 bottom-[-3px] h-[2px] w-0 bg-lime-700 transition-all duration-300 hover:w-full" />
            </button>
          ))}
        </div>

        {/* --- Right: Login Button --- */}
        <div className="hidden md:flex items-center gap-2">
          <Link
            href="/auth"
            className="group flex items-center gap-2 px-4 py-2 bg-lime-700 text-white rounded-md transition-all duration-300 transform hover:-translate-y-[2px]"

          >
            <LogInIcon
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
            <span>Нэвтрэх</span>
          </Link>
        </div>

        {/* --- Mobile Menu Icon --- */}
        <button
          className="md:hidden flex items-center focus:outline-none"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* --- Mobile Drawer --- */}
      {mobileOpen && (
        <div className="md:hidden bg-white shadow-md absolute top-[72px] left-0 w-full z-50 flex flex-col items-center space-y-4 py-6">
          {menuItems.map((item, idx) => (
            <button
              key={idx}
              onClick={() => handleNavigation(item.href)}
              className="text-green-950 text-lg font-semibold hover:text-green-700 transition-colors duration-200"

            >
              {item.label}
            </button>
          ))}

          <Link
            href="/auth"
            onClick={() => setMobileOpen(false)}
            className="flex items-center gap-2 px-4 py-2 bg-lime-700 text-white rounded-md transition-all duration-300"

          >
            <LogInIcon size={18} />
            <span>Нэвтрэх</span>
          </Link>
        </div>
      )}
    </header>
  );
}
