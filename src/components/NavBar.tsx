'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navigation = [
  { name: 'Oyunlar', href: '/#mahallenin-makasi' },
  { name: 'Projeler', href: '/projects' },
  { name: 'Hizmetler', href: '/services' },
  { name: 'Hakkımızda', href: '/about' },
  { name: 'İletişim', href: '/contact' },
]

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 16)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'border-b border-line bg-background/90 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="container-custom section-padding">
        <div className="flex h-16 items-center justify-between gap-4 lg:h-20">
          <Link href="/" className="group flex shrink-0 items-center gap-3">
            <div className="relative h-12 w-12 transition-transform duration-300 group-hover:scale-105 lg:h-14 lg:w-14">
              <Image src="/Logo.png" alt="Drective" fill className="object-contain" priority />
            </div>
            <span className="font-heading text-xl font-bold tracking-tight text-foreground lg:text-2xl">
              Drective
            </span>
          </Link>

          <div className="hidden min-w-0 flex-1 items-center justify-center gap-6 lg:flex xl:gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`shrink-0 whitespace-nowrap text-sm font-medium transition-colors ${
                  pathname === item.href ? 'text-brass' : 'text-muted hover:text-foreground'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden shrink-0 lg:block">
            <Link href="/contact#bizimle-calisin" className="btn-primary px-5 py-2.5 text-sm">
              Bizimle Çalışın
            </Link>
          </div>

          <button
            onClick={() => setIsOpen((v) => !v)}
            className="shrink-0 rounded-full border border-line p-2 lg:hidden"
            aria-label="Menüyü aç/kapat"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="border-b border-line bg-surface lg:hidden"
          >
            <div className="container-custom section-padding flex flex-col gap-2 py-5">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`rounded-xl px-4 py-3 text-base ${
                    pathname === item.href ? 'bg-brass/10 text-brass' : 'text-foreground/80'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/contact#bizimle-calisin"
                onClick={() => setIsOpen(false)}
                className="btn-primary mt-2 w-full text-center"
              >
                Bizimle Çalışın
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
