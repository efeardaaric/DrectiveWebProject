'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Instagram, Gamepad2 } from 'lucide-react'

const footerLinks = {
  company: [
    { name: 'Mahallenin Makası', href: '/#mahallenin-makasi' },
    { name: 'Hakkımızda', href: '/about' },
    { name: 'Hizmetler', href: '/services' },
    { name: 'Projeler', href: '/projects' },
    { name: 'İletişim', href: '/contact' },
  ],
  social: [
    { name: 'GitHub', href: 'https://github.com/efeardaaric', icon: Github },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/company/d-rective-interactive/?viewAsMember=true',
      icon: Linkedin,
    },
    { name: 'E-posta', href: 'mailto:drectivegames@gmail.com', icon: Mail },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/drectiveinteractive/',
      icon: Instagram,
    },
    {
      name: 'Steam',
      href: 'https://store.steampowered.com/app/4824950/Connections/',
      icon: Gamepad2,
    },
  ],
}

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-line bg-surface">
      <div className="container-custom section-padding py-14 lg:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <Link href="/" className="mb-5 flex items-center gap-3">
              <div className="relative h-14 w-14">
                <Image src="/Logo.png" alt="Drective" fill className="object-contain" />
              </div>
              <span className="font-heading text-2xl font-bold">Drective</span>
            </Link>
            <p className="m-0 max-w-sm text-sm text-muted">
              İstanbul’da oyun ve mobil uygulama geliştiren bağımsız stüdyo. Son oyunumuz: Mahallenin Makası.
            </p>
            <div className="mt-5 flex gap-3">
              {footerLinks.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  aria-label={item.name}
                  className="rounded-full border border-line p-2 text-muted transition hover:border-brass hover:text-brass"
                >
                  <item.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-heading text-base font-semibold text-foreground">
              Sayfalar
            </h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-muted hover:text-brass">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-heading text-base font-semibold text-foreground">
              Proje Başlat
            </h3>
            <p className="mb-4 text-sm text-muted">
              Oyun, uygulama ya da web sitesi fikriniz varsa bize yazın.
            </p>
            <Link href="/contact#bizimle-calisin" className="btn-primary text-sm">
              Bizimle Çalışın
            </Link>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-line pt-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p className="m-0">© {currentYear} Drective. Tüm hakları saklıdır.</p>
          <div className="flex gap-5">
            <Link href="/privacy-policy" className="hover:text-foreground">
              Gizlilik
            </Link>
            <Link href="/terms-of-use" className="hover:text-foreground">
              Kullanım Şartları
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
