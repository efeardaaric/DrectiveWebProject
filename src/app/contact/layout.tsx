import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'İletişim — Bizimle Çalışın',
  description:
    'Oyun, mobil uygulama veya web sitesi projeniz için Drective ile iletişime geçin. İstanbul, Küçükçekmece.',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Drective ile çalışın',
    description: 'Projenizi anlatın, birkaç gün içinde dönüş yapalım.',
    url: '/contact',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
