import type { Metadata } from 'next'
import { Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ableshell',
  description: 'Liam\'s personal website.',
  openGraph: {
    title: 'ableshell.me',
    description: 'Liam\'s personal website',
    url: 'https://ableshell.me',
    siteName: 'ableshell.me',
    images: [
      {
        url: 'https://i.imgur.com/ovzUbQ6.png',
        width: 600,
        height: 600,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#2a4fb6',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
