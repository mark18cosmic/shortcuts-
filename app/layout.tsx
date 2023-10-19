import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Shortcuts',
  description: 'Shortcuts on popular apps',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-zinc-200 dark:bg-zinc-950 dark:text-white`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
