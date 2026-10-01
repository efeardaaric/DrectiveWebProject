import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hizmetler — Oyun, Mobil Uygulama ve Web Geliştirme',
  description:
    'Unity ile oyun geliştirme, iOS ve Android mobil uygulama geliştirme, Next.js ile web sitesi ve UI/UX tasarım hizmetleri.',
  alternates: { canonical: '/services' },
  openGraph: {
    title: 'Drective Hizmetleri',
    description: 'Oyun, mobil uygulama ve web geliştirme hizmetleri.',
    url: '/services',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
