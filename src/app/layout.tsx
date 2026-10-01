import type { Metadata, Viewport } from 'next'
import { Syne, IBM_Plex_Sans } from 'next/font/google'
import '../styles/globals.css'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import { site } from '@/lib/site'

const plex = IBM_Plex_Sans({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-plex',
  display: 'swap',
})

const syne = Syne({
  subsets: ['latin', 'latin-ext'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-syne',
  display: 'swap',
})

export const viewport: Viewport = {
  themeColor: '#0E0D0B',
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: site.keywords,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  alternates: { canonical: '/' },
  formatDetection: { email: false, address: false, telephone: false },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: site.url,
    siteName: site.name,
    title: site.title,
    description: site.description,
    images: [
      {
        url: '/images/mahallenin-makasi/menu.jpg',
        width: 473,
        height: 1024,
        alt: 'Mahallenin Makası — Drective',
      },
      {
        url: '/images/team.jpg',
        width: 980,
        height: 1024,
        alt: 'Drective ekibi',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: site.title,
    description: site.description,
    images: ['/images/team.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
}

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: site.name,
  legalName: site.legalName,
  url: site.url,
  logo: `${site.url}/Logo.png`,
  email: site.email,
  description: site.description,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Halkalı Merkez Mah. Halkalı Cad. No:281/23',
    addressLocality: 'Küçükçekmece',
    addressRegion: 'İstanbul',
    postalCode: '34303',
    addressCountry: 'TR',
  },
  sameAs: Object.values(site.social),
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className={`${plex.variable} ${syne.variable}`}>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <div className="relative flex min-h-screen flex-col">
          <NavBar />
          <main className="flex-1 pt-16 lg:pt-20">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
