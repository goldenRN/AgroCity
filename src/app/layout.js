import './globals.css'
import { Inter } from 'next/font/google'
import ClientLayout from '@/components/client-layout'
import { Toaster } from '@/components/ui/toaster'
import { AuthProvider } from './context/AuthContext'
const inter = Inter({ subsets: ['latin'] })
import { Montserrat } from 'next/font/google'
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '700', '800'],
})
// export const metadata = {
//   title: 'AgroCity',
//   description: 'Агро хот',
//   icons: {
//     icon: "/agro_logo.jpg",
//   },
// }
export const metadata = {
  title: 'Agro City',
  description: 'Эдийн засгийн тусгай бүс',
    icons: {
    icon: "/agro_logo.jpg",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="mn" className={montserrat.className}>
      <body className={inter.className}>
        <AuthProvider>
          <ClientLayout>{children}</ClientLayout>
          <Toaster />
        </AuthProvider>
      </body>
    </html>
  )
}
