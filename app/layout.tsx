import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: '3D Me - AI 3D Models, Printed & Shipped',
  description: 'A platform for AI-powered 3D design, printing, and shipping. Design, print, and ship professional-grade 3D models without owning a printer.',
  generator: 'v0.app',
  openGraph: {
    title: '3D Me - AI 3D Models, Printed & Shipped',
    description: 'A platform for AI-powered 3D design, printing, and shipping.',
    url: 'http://localhost:8081/projects/DmN9lWFL13cMy0BHE31q',
    siteName: '3D Me',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1636690513751-4b63ea192a59?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
        alt: '3D Me - AI-Powered 3D Printing',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '3D Me - AI 3D Models, Printed & Shipped',
    description: 'Design, print, and ship professional-grade 3D models without owning a printer.',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
