import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '乃木坂46卒業生ブログ',
  description: '乃木坂46卒業生ブログ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png"></link>
      <link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png"></link>
      <link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png"></link>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
