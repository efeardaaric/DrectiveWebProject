'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import ProjectCard from '@/components/ProjectCard'
import CTA from '@/components/CTA'
import { easeSmooth } from '@/lib/motion'
import { mahalleninMakasi, games, apps, webPortfolio } from '@/lib/portfolio'

type ProjectItem = {
  title: string
  description: string
  image?: string
  images?: string[]
  video?: string
  tags: string[]
  category: 'web' | 'game' | 'app'
  url?: string
}

const projects: ProjectItem[] = [
  ...games.map((g) => ({ ...g })),
  {
    title: 'Crusader Tycoon',
    description: 'Orta Çağ’da kaleni büyütüp ordunu yönettiğin piksel sanat bir strateji ve idle oyunu.',
    video: '/images/Crusader Tycoon Trailer.mp4',
    tags: ['Strateji', 'Pixel Art'],
    category: 'game',
  },
  {
    title: 'Ferman',
    description: 'Osmanlı esintili, kartları kaydırarak hükümdarlığını yönettiğin mobil karar oyunu.',
    video: '/images/Ferman_Teaser.mp4',
    tags: ['Mobil', 'Kart'],
    category: 'game',
  },
  { ...apps[0], image: undefined, images: ['/images/Scanny1.jpg', '/images/Scanny2.jpg', '/images/Scanny3.jpg'] },
  { ...apps[1] },
  ...webPortfolio.map((w) => ({ ...w })),
]

const categories = [
  { id: 'all', name: 'Tümü' },
  { id: 'game', name: 'Oyunlar' },
  { id: 'app', name: 'Uygulamalar' },
  { id: 'web', name: 'Web' },
] as const

export default function ProjectsPage() {
  const [active, setActive] = useState<(typeof categories)[number]['id']>('all')
  const filtered = active === 'all' ? projects : projects.filter((p) => p.category === active)

  return (
    <div>
      <section className="container-custom section-padding pb-10 pt-12 lg:pt-20">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: easeSmooth }}
          className="font-heading text-5xl font-extrabold tracking-tight sm:text-6xl"
        >
          Projeler
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: easeSmooth }}
          className="mt-4 max-w-2xl text-lg text-muted"
        >
          Kendi oyunlarımız ve uygulamalarımız, bir de markalar için geliştirdiğimiz web siteleri.
        </motion.p>
      </section>

      {/* Featured: Mahallenin Makası */}
      <section className="container-custom section-padding pb-12">
        <Link
          href="/#mahallenin-makasi"
          className="group grid items-center gap-6 overflow-hidden rounded-3xl border border-line bg-[#14110d] p-6 sm:grid-cols-[auto_1fr] sm:p-8 lg:grid-cols-[auto_1fr_auto]"
        >
          <div className="relative h-28 w-28 overflow-hidden rounded-[1.5rem] shadow-lg">
            <Image src={mahalleninMakasi.icon} alt="Mahallenin Makası ikonu" fill className="object-cover" sizes="112px" />
          </div>
          <div>
            <p className="m-0 text-sm text-brass">Yeni oyunumuz · {mahalleninMakasi.platforms.join(' & ')}</p>
            <h2 className="mt-1 font-heading text-3xl font-bold">{mahalleninMakasi.title}</h2>
            <p className="mt-2 max-w-xl text-muted">{mahalleninMakasi.tagline}. Tıraş yap, sohbet et, dükkânını büyüt.</p>
          </div>
          <div className="hidden gap-3 lg:flex">
            {mahalleninMakasi.screens.slice(1, 3).map((s) => (
              <div key={s.src} className="relative aspect-[473/1024] w-24 overflow-hidden rounded-xl border-2 border-[#1c1915] transition duration-500 group-hover:-translate-y-1">
                <Image src={s.src} alt={s.alt} fill className="object-cover" sizes="96px" />
              </div>
            ))}
          </div>
        </Link>
      </section>

      <section className="container-custom section-padding pb-20">
        <div className="mb-10 flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setActive(c.id)}
              className={`rounded-full px-5 py-2.5 text-sm font-medium transition ${
                active === c.id
                  ? 'bg-brass text-background'
                  : 'border border-line text-muted hover:border-brass hover:text-foreground'
              }`}
            >
              {c.name}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <motion.div
                key={p.title}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.45, ease: easeSmooth }}
              >
                {p.url && !p.video && !p.images ? (
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block h-full overflow-hidden rounded-2xl border border-line bg-surface transition hover:border-brass/50"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={p.image!}
                        alt={p.title}
                        fill
                        className="object-cover object-top transition duration-700 ease-out group-hover:scale-[1.04]"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                    <div className="p-5">
                      <div className="flex items-center justify-between gap-2">
                        <h3 className="m-0 font-heading text-xl font-semibold">{p.title}</h3>
                        <ArrowUpRight className="h-4 w-4 text-brass" />
                      </div>
                      <p className="mt-2 text-sm text-muted">{p.description}</p>
                    </div>
                  </a>
                ) : (
                  <ProjectCard
                    title={p.title}
                    description={p.description}
                    image={p.image}
                    images={p.images}
                    video={p.video}
                    tags={p.tags}
                  />
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      <CTA
        title="Sıradaki proje sizinki olabilir"
        description="Oyun, mobil uygulama ya da web sitesi. Fikrinizi anlatın, birlikte planlayalım."
        primaryButton={{ text: 'Bizimle çalışın', href: '/contact#bizimle-calisin' }}
        secondaryButton={{ text: 'Hizmetler', href: '/services' }}
      />
    </div>
  )
}
