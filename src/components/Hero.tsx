'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { easeSmooth } from '@/lib/motion'
import { mahalleninMakasi } from '@/lib/portfolio'

function Phone({ src, alt, className = '' }: { src: string; alt: string; className?: string }) {
  return (
    <div
      className={`relative aspect-[473/1024] overflow-hidden rounded-[2rem] border-[6px] border-[#1c1915] bg-[#1c1915] shadow-[0_30px_60px_-20px_rgba(0,0,0,0.8)] ${className}`}
    >
      <Image src={src} alt={alt} fill className="object-cover" sizes="(max-width: 1024px) 40vw, 260px" priority />
    </div>
  )
}

export default function Hero() {
  const [menu, customer] = mahalleninMakasi.screens

  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute -right-40 top-10 h-[520px] w-[520px] rounded-full bg-brass/10 blur-3xl" />

      <div className="container-custom section-padding relative grid min-h-[calc(100svh-5rem)] items-center gap-14 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easeSmooth }}
            className="eyebrow mb-6"
          >
            İstanbul · Bağımsız stüdyo
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.08, ease: easeSmooth }}
            className="font-heading text-5xl font-extrabold leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl"
          >
            Oyun ve uygulama
            <br />
            <span className="text-brass">stüdyosu.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18, ease: easeSmooth }}
            className="mt-6 max-w-xl text-lg text-muted"
          >
            İstanbul’dan oyunlar ve mobil uygulamalar üretiyoruz. Son oyunumuz{' '}
            <span className="text-foreground">Mahallenin Makası</span>, Steam’de ise{' '}
            <span className="text-foreground">Connections</span> yayında. Markalar için
            web siteleri de yapıyoruz.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.28, ease: easeSmooth }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <Link href="/#mahallenin-makasi" className="btn-primary">
              Yeni oyunumuzu gör
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/contact#bizimle-calisin" className="btn-secondary">
              Bizimle çalışın
            </Link>
          </motion.div>

          <motion.dl
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-line pt-6"
          >
            {[
              { k: '2', v: 'Yayındaki oyun' },
              { k: '2', v: 'Mobil uygulama' },
              { k: '5', v: 'Canlı web projesi' },
            ].map((s) => (
              <div key={s.v}>
                <dt className="font-heading text-3xl font-bold text-foreground">{s.k}</dt>
                <dd className="mt-1 text-sm text-muted">{s.v}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        <div className="relative mx-auto h-[460px] w-full max-w-[460px] sm:h-[540px]">
          <motion.div
            initial={{ opacity: 0, y: 40, rotate: -4 }}
            animate={{ opacity: 1, y: 0, rotate: -6 }}
            transition={{ duration: 0.9, delay: 0.15, ease: easeSmooth }}
            className="absolute left-[4%] top-[6%] w-[48%]"
          >
            <Phone src={customer.src} alt={customer.alt} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 60, rotate: 2 }}
            animate={{ opacity: 1, y: 0, rotate: 5 }}
            transition={{ duration: 0.9, delay: 0.3, ease: easeSmooth }}
            className="absolute right-[4%] top-0 w-[50%]"
          >
            <Phone src={menu.src} alt={menu.alt} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.55, ease: easeSmooth }}
            className="absolute bottom-[2%] left-1/2 flex -translate-x-1/2 items-center gap-3 rounded-2xl border border-line bg-surface/95 p-2.5 pr-5 shadow-xl backdrop-blur"
          >
            <div className="relative h-14 w-14 overflow-hidden rounded-xl">
              <Image src={mahalleninMakasi.icon} alt="Mahallenin Makası uygulama ikonu" fill className="object-cover" sizes="56px" />
            </div>
            <div>
              <p className="m-0 text-xs text-muted">Yeni oyun</p>
              <p className="m-0 font-heading text-base font-bold text-foreground">Mahallenin Makası</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
