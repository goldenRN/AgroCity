import './globals.css'
import { Inter } from 'next/font/google'
import ClientLayout from '@/components/client-layout'
import { Toaster } from '@/components/ui/toaster'
import { AuthProvider } from './context/AuthContext'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'AgroCity',
  description: 'Агро хот',
  icons: {
    icon: "/agro_logo.jpg",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="mn">
      <body className={inter.className}>
        <AuthProvider>
          <ClientLayout>{children}</ClientLayout>
          <Toaster />
        </AuthProvider>
      </body>
    </html>
  )
}
