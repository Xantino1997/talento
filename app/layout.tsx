import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TalentStream — Descubre Talentos',
  description: 'Mira, anima y sube a la cima. Streaming de talentos en vivo.',

  icons: {
    icon: '/favicon.ico',
  },

  openGraph: {
    title: 'TalentStream — Descubre Talentos',
    description: 'Mira, anima y sube a la cima. Streaming de talentos en vivo.',
    url: 'https://talento-fawn.vercel.app',
    siteName: 'TalentStream',
    images: [
      {
        url: '/images/preview.png',
        width: 1200,
        height: 630,
        alt: 'TalentStream',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'TalentStream — Descubre Talentos',
    description: 'Mira, anima y sube a la cima.',
    images: ['/preview.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
