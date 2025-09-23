import type { Metadata } from 'next'
import { Inter, Sora } from 'next/font/google'
import '../styles/globals.css'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'D-RECTIVE Interactive - Oyun Stüdyosu',
    template: '%s | D-RECTIVE Interactive',
  },
  description:
    'Next.js, React ve Unity odaklı modern yazılım ve oyun geliştirme stüdyosu. Performanslı web uygulamaları, animasyon odaklı UI/UX ve oyun prototipleme hizmetleri.',
  keywords: [
    'yazılım geliştirme',
    'oyun geliştirme',
    'web geliştirme',
    'react',
    'unity',
    'next.js',
    'typescript',
    'mobil uygulama',
    'tasarım',
    'frontend',
    'backend',
    'UI/UX',
  ],
  authors: [{ name: 'D-RECTIVE Interactive' }],
  creator: 'D-RECTIVE Interactive',
  publisher: 'D-RECTIVE Interactive',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://drective.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://drective.com',
    title: 'D-RECTIVE Interactive - & Oyun Stüdyosu',
    description:
      'Next.js, React ve Unity odaklı modern yazılım ve oyun geliştirme stüdyosu. Performanslı web uygulamaları, animasyon odaklı UI/UX ve oyun prototipleme hizmetleri.',
    siteName: 'D-RECTIVE Interactive',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'D-RECTIVE Interactive -  & Oyun Stüdyosu',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'D-RECTIVE Interactive -  & Oyun Stüdyosu',
    description:
      'Next.js, React ve Unity odaklı modern yazılım ve oyun geliştirme stüdyosu.',
    images: ['/og-image.jpg'],
    creator: '@drective',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" className={`${inter.variable} ${sora.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#0B0B0F" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <div className="relative min-h-screen flex flex-col">
          <NavBar />
          <main className="flex-1 pt-16 lg:pt-20">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}