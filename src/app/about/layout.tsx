import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hakkımızda — Ekip ve Hikâye',
  description:
    'Drective, İstanbul’da kurulan bir oyun ve mobil uygulama stüdyosu. Ekibimizi, hikâyemizi ve çalışma şeklimizi tanıyın.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'Drective Ekibi',
    description: 'Oyun ve mobil uygulama üreten ekibimizle tanışın.',
    url: '/about',
    images: [{ url: '/images/team.jpg', alt: 'Drective ekibi' }],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
