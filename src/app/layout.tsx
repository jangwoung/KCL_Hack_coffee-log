import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

// Import components
import Header from './components/Header/page'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'まめろぐ',
  description: 'recording coffee log',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="jp" className='font-rubik'>
      <body className={inter.className}>
        <Header/>
        {children}
      </body>
    </html>
  )
}
