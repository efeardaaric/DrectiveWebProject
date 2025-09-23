'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ExternalLink, Instagram } from 'lucide-react'
import { staggerContainer, staggerItem } from '@/lib/motion'

const footerLinks = {
  company: [
    { name: 'Hakkımızda', href: '/about' },
    { name: 'Hizmetler', href: '/services' },
    { name: 'Projeler', href: '/projects' },
    { name: 'İletişim', href: '/contact' },
  ],
  services: [
    { name: 'Web Geliştirme', href: '/services#web' },
    { name: 'Oyun Geliştirme', href: '/services#games' },
    { name: 'UI/UX Tasarım', href: '/services#design' },
    { name: 'Danışmanlık', href: '/services#consulting' },
  ],
  social: [
    { name: 'GitHub', href: 'https://github.com/efeardaaric', icon: Github },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/company/d-rective-interactive/?viewAsMember=true', icon: Linkedin },
    { name: 'E-posta', href: 'mailto:drectivegames@gmail.com', icon: Mail },
    { name: 'Instagram', href: 'https://www.instagram.com/drectiveinteractive/', icon: Instagram },
  ],
}

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-accent-900/50 border-t border-white/10">
      <div className="container-custom section-padding">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-100px' }}
          className="py-16 lg:py-20"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand Section */}
            <motion.div variants={staggerItem} className="lg:col-span-1">
              <Link href="/" className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 relative">
                  <Image
                    src="/logo.png"
                    alt="D-RECTIVE Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="font-heading font-bold text-2xl gradient-text">
                  D-RECTIVE
                </span>
              </Link>
              <p className="text-foreground/70 text-sm leading-relaxed mb-6">
                Next.js, React ve Unity ile yüksek performanslı web uygulamaları ve oyunlar geliştiriyoruz. Yenilikçi çözümlerle fark yaratıyor, teknoloji ve tasarımı bir araya getiriyoruz.
              </p>
              <div className="flex space-x-4">
                {footerLinks.social.map((item) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 glass rounded-lg hover:glass-strong transition-all duration-200 group"
                    aria-label={item.name}
                  >
                    <item.icon className="w-5 h-5 text-accent-400 group-hover:text-accent-300 transition-colors duration-200" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Company Links */}
            <motion.div variants={staggerItem}>
              <h3 className="font-heading font-semibold text-foreground mb-6">
                Şirket
              </h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-accent-400 hover:text-accent-300 transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services Links */}
            <motion.div variants={staggerItem}>
              <h3 className="font-heading font-semibold text-foreground mb-6">
                Hizmetler
              </h3>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-accent-400 hover:text-accent-300 transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Newsletter/Contact */}
            <motion.div variants={staggerItem}>
              <h3 className="font-heading font-semibold text-foreground mb-6">
                İletişim
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-foreground/70 text-sm mb-2">
                    Projeleriniz için bizimle iletişime geçin
                  </p>
                  <motion.a
                    href="mailto:drectivegames@gmail.com"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center space-x-2 text-accent-400 hover:text-accent-300 transition-colors duration-200 text-sm font-medium"
                  >
                    <Mail className="w-4 h-4" />
                    <span>drectivegames@gmail.com</span>
                    <ExternalLink className="w-3 h-3" />
                  </motion.a>
                </div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    href="/contact"
                    className="btn-primary text-sm px-4 py-2.5 inline-block"
                  >
                    Proje Başlat
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Bar */}
          <motion.div
            variants={staggerItem}
            className="pt-8 mt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0"
          >
            <p className="text-foreground/50 text-sm">
              {currentYear} D-RECTIVE Interactive. Tüm hakları saklıdır.
            </p>
            <div className="flex items-center space-x-6 text-sm">
                <Link
                  href="/privacy-policy"
                  className="text-foreground/50 hover:text-foreground/70 transition-colors duration-200"
                >
                  Gizlilik Politikası
                </Link>
                <Link
                  href="/terms-of-use"
                  className="text-foreground/50 hover:text-foreground/70 transition-colors duration-200"
                >
                  Kullanım Şartları
                </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}
