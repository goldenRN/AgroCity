'use client'

import { usePathname } from 'next/navigation'
import Navbar from './header/Navbar'
import Footer from './Footer'
export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const hideHeaderRoutes = ['/auth', '/admin']
  const shouldHideHeader = hideHeaderRoutes.some(route => pathname.startsWith(route))

  return (
    <>
      <div className="flex flex-col min-h-screen">
        {/* Дээд хэсгийн header */}
        {!shouldHideHeader && <Navbar />}

        {/* Гол контент grow авна */}
        <main className="flex-grow ">{children}</main>

        {/* Доод хэсгийн footer */}
        {!shouldHideHeader && <Footer />
          // <footer className="bg-cyan-900 text-white py-4 text-center">
          //   &copy; {new Date().getFullYear()} 
          // </footer>
        }

      </div>


    </>
  )
}
