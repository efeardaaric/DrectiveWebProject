import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projeler — Oyunlar, Uygulamalar ve Web Siteleri',
  description:
    'Drective portföyü: Mahallenin Makası, Connections, Wizardus gibi oyunlar; Scanny ve StuFinance uygulamaları; CetLine, Miela, Caras Rent a Car, CetLis ve Cetrose web siteleri.',
  alternates: { canonical: '/projects' },
  openGraph: {
    title: 'Drective Projeleri',
    description: 'Oyunlar, mobil uygulamalar ve markalar için geliştirdiğimiz web siteleri.',
    url: '/projects',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
