'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import Hero from '@/components/Hero'
import WorkWithUsForm from '@/components/WorkWithUsForm'
import { mahalleninMakasi, games, apps, webPortfolio } from '@/lib/portfolio'
import { team } from '@/lib/team'
import { site } from '@/lib/site'
import { easeSmooth } from '@/lib/motion'

const reveal = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.75, ease: easeSmooth },
}

function SectionHead({ index, title, text }: { index: string; title: string; text?: string }) {
  return (
    <motion.div {...reveal} className="mb-12 grid gap-4 md:grid-cols-[1fr_auto] md:items-end">
      <div>
        <span className="font-heading text-sm text-brass">{index}</span>
        <h2 className="mt-2 font-heading text-4xl font-bold sm:text-5xl">{title}</h2>
      </div>
      {text && <p className="max-w-sm text-muted md:text-right">{text}</p>}
    </motion.div>
  )
}

export default function HomePage() {
  const gameJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'VideoGame',
    name: mahalleninMakasi.title,
    description: mahalleninMakasi.description,
    image: `${site.url}${mahalleninMakasi.icon}`,
    genre: ['Simülasyon', 'İşletme', 'Casual'],
    gamePlatform: mahalleninMakasi.platforms,
    inLanguage: 'tr',
    author: { '@type': 'Organization', name: site.name, url: site.url },
  }

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(gameJsonLd) }}
      />

      <Hero />

      {/* Mahallenin Makası */}
      <section id="mahallenin-makasi" className="scroll-mt-20 border-t border-line bg-[#14110d] py-20 lg:py-28">
        <div className="container-custom section-padding">
          <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <motion.div {...reveal}>
              <div className="mb-6 flex items-center gap-4">
                <div className="relative h-20 w-20 overflow-hidden rounded-[1.25rem] shadow-lg">
                  <Image src={mahalleninMakasi.icon} alt="Mahallenin Makası ikonu" fill className="object-cover" sizes="80px" />
                </div>
                <div>
                  <p className="m-0 text-sm text-brass">Yeni oyunumuz</p>
                  <p className="m-0 text-sm text-muted">{mahalleninMakasi.platforms.join(' · ')}</p>
                </div>
              </div>
              <h2 className="font-heading text-4xl font-bold sm:text-5xl">{mahalleninMakasi.title}</h2>
              <p className="mt-3 text-lg text-foreground/80">{mahalleninMakasi.tagline}</p>
              <p className="mt-5 text-muted">{mahalleninMakasi.description}</p>

              <ul className="mt-8 space-y-5">
                {mahalleninMakasi.features.map((f, i) => (
                  <li key={f.title} className="grid grid-cols-[2rem_1fr] gap-2">
                    <span className="font-heading text-sm text-brass">0{i + 1}</span>
                    <div>
                      <p className="m-0 font-semibold text-foreground">{f.title}</p>
                      <p className="m-0 mt-1 text-sm text-muted">{f.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>

            <div className="relative">
              <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 [scrollbar-width:thin] lg:grid lg:grid-cols-3 lg:overflow-visible">
                {mahalleninMakasi.screens.map((s, i) => (
                  <motion.figure
                    key={s.src}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: (i % 3) * 0.1, ease: easeSmooth }}
                    whileHover={{ y: -6 }}
                    className={`relative m-0 aspect-[473/1024] w-[46%] shrink-0 snap-center overflow-hidden rounded-[1.5rem] border-4 border-[#1c1915] shadow-xl sm:w-[30%] lg:w-auto ${
                      i % 3 === 1 ? 'lg:translate-y-10' : ''
                    }`}
                  >
                    <Image src={s.src} alt={s.alt} fill className="object-cover" sizes="(max-width: 1024px) 45vw, 200px" />
                  </motion.figure>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Games */}
      <section id="oyunlar" className="border-t border-line py-20 lg:py-28">
        <div className="container-custom section-padding">
          <SectionHead index="01" title="Oyunlar" text="Mobilde ve PC’de, kendi fikirlerimizden çıkan oyunlar." />
          <div className="grid gap-5 md:grid-cols-2">
            {games.map((g, i) => {
              const Wrapper = g.url ? motion.a : motion.div
              return (
                <Wrapper
                  key={g.title}
                  {...(g.url ? { href: g.url, target: '_blank', rel: 'noopener noreferrer' } : {})}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: i * 0.08, ease: easeSmooth }}
                  className="group block overflow-hidden rounded-3xl border border-line bg-surface"
                >
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={g.image}
                      alt={g.title}
                      fill
                      className="object-cover transition duration-700 ease-out group-hover:scale-[1.04]"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="m-0 font-heading text-2xl font-bold">{g.title}</h3>
                      {g.url && <ArrowUpRight className="h-5 w-5 text-brass transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />}
                    </div>
                    <p className="mt-2 text-sm text-muted">{g.description}</p>
                    <p className="mt-4 text-xs uppercase tracking-[0.14em] text-brass/80">{g.tags.join(' · ')}</p>
                  </div>
                </Wrapper>
              )
            })}
          </div>
        </div>
      </section>

      {/* Apps */}
      <section id="uygulamalar" className="border-t border-line py-20 lg:py-28">
        <div className="container-custom section-padding">
          <SectionHead index="02" title="Mobil uygulamalar" text="Öğrenciler ve günlük kullanım için sade, işe yarayan uygulamalar." />
          <div className="grid gap-5 md:grid-cols-2">
            {apps.map((a, i) => (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.08, ease: easeSmooth }}
                className="grid grid-cols-[120px_1fr] items-center gap-5 rounded-3xl border border-line bg-surface p-4 sm:grid-cols-[160px_1fr]"
              >
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-background">
                  <Image src={a.image} alt={a.title} fill className="object-contain" sizes="160px" />
                </div>
                <div>
                  <h3 className="m-0 font-heading text-2xl font-bold">{a.title}</h3>
                  <p className="mt-2 text-sm text-muted">{a.description}</p>
                  <p className="mt-3 text-xs uppercase tracking-[0.14em] text-brass/80">{a.tags.join(' · ')}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Web */}
      <section id="web" className="border-t border-line py-20 lg:py-28">
        <div className="container-custom section-padding">
          <SectionHead index="03" title="Web projeleri" text="Oyunların yanında markalar için web siteleri de geliştiriyoruz." />
          <div className="divide-y divide-line border-y border-line">
            {webPortfolio.map((w, i) => (
              <motion.a
                key={w.title}
                href={w.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.05, ease: easeSmooth }}
                className="group grid items-center gap-4 py-5 sm:grid-cols-[180px_1fr_auto] sm:gap-8"
              >
                <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-line">
                  <Image
                    src={w.image}
                    alt={`${w.title} web sitesi`}
                    fill
                    className="object-cover object-top transition duration-700 ease-out group-hover:scale-[1.05]"
                    sizes="180px"
                  />
                </div>
                <div>
                  <h3 className="m-0 font-heading text-2xl font-bold transition group-hover:text-brass">{w.title}</h3>
                  <p className="mt-1 text-sm text-muted">{w.description}</p>
                </div>
                <span className="hidden items-center gap-1 text-sm text-muted transition group-hover:text-foreground sm:inline-flex">
                  {w.url?.replace(/^https?:\/\//, '')}
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="ekip" className="border-t border-line py-20 lg:py-28">
        <div className="container-custom section-padding">
          <SectionHead index="04" title="Ekip" text="Tasarımcılar, yazılımcılar ve sanatçılardan oluşan küçük bir stüdyo. Zaim Teknopark bünyesindeyiz." />
          <motion.div
            initial={{ opacity: 0, scale: 1.03 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: easeSmooth }}
            className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-line sm:aspect-[16/9]"
          >
            <Image src="/images/team.jpg" alt="Drective ekibi" fill className="object-cover object-[50%_60%]" sizes="100vw" />
          </motion.div>

          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {team.map((m, i) => (
              <motion.div
                key={m.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.06, ease: easeSmooth }}
                className="flex items-center gap-3"
              >
                <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border border-line">
                  <Image src={m.image} alt={m.name} fill className="object-cover" sizes="48px" />
                </div>
                <div className="min-w-0">
                  <p className="m-0 truncate text-sm font-semibold text-foreground">{m.name}</p>
                  <p className="m-0 truncate text-xs text-muted">{m.role}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <Link href="/about" className="mt-8 inline-flex items-center gap-1 text-sm text-brass hover:underline">
            Hikâyemiz <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Contact */}
      <section id="bizimle-calisin" className="scroll-mt-20 border-t border-line py-20 lg:py-28">
        <div className="container-custom section-padding grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div {...reveal}>
            <span className="font-heading text-sm text-brass">05</span>
            <h2 className="mt-2 font-heading text-4xl font-bold sm:text-5xl">Bir fikrin mi var?</h2>
            <p className="mt-4 text-muted">
              Oyun, mobil uygulama ya da web sitesi. Kısaca anlat, birkaç gün içinde dönüş yapalım.
            </p>
            <a href={`mailto:${site.email}`} className="mt-6 inline-block text-brass hover:underline">
              {site.email}
            </a>
          </motion.div>
          <motion.div {...reveal} className="surface-panel p-6 sm:p-8">
            <WorkWithUsForm compact />
          </motion.div>
        </div>
      </section>
    </div>
  )
}
