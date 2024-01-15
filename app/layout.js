import { Inter } from 'next/font/google'
import './globals.css'
import { AuthUserProvider } from '@/firebase/auth'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'To-Do App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AuthUserProvider><body className={inter.className}>{children}</body></AuthUserProvider>
    </html>
  )
}
