import { Inter } from 'next/font/google'
import './globals.css'
import { AuthProvider } from '@/lib/auth'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Super Teacher Dashboard - All-in-One Class Management',
  description: 'Sistem manajemen kelas otomatis berbasis Notion. Satu dashboard untuk RPP, Absensi, Nilai, dan Bank Materi.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={inter.className}>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  )
}
