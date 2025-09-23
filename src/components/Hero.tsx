'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Play } from 'lucide-react'
import { heroTitle, heroSubtitle, heroDescription, heroButtons, buttonHover } from '@/lib/motion'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent-900/20" />
      
      {/* Content */}
      <div className="container-custom section-padding relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Title */}
          <motion.h1
            variants={heroTitle}
            initial="initial"
            animate="animate"
            className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-foreground mb-6 leading-tight"
          >
            <span>Yazılımda <span className="gradient-text">Güç</span>, Oyunda <span className="gradient-text">Yaratıcılık</span></span>
          </motion.h1>
          
          {/* Logo and Subtitle */}
          <motion.div
            variants={heroSubtitle}
            initial="initial"
            animate="animate"
            className="flex flex-col items-center mb-6"
          >
            <div className="w-60 h-60 relative mb-6">
              <Image
                src="/logo.png"
                alt="D-RECTIVE Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <p className="font-heading font-semibold text-2xl lg:text-3xl text-primary-400">
              D-RECTIVE Interactive
            </p>
          </motion.div>
          
          {/* Description */}
          <motion.p
            variants={heroDescription}
            initial="initial"
            animate="animate"
            className="text-foreground/70 text-lg lg:text-xl max-w-3xl mx-auto mb-8 leading-relaxed"
          >
           Drective Interactive, yazılım ve oyun geliştirme alanında yenilikçi çözümler üreten genç bir ekiptir. Mobil uygulamalardan dijital oyunlarına kadar farklı dijital projeler geliştirerek kullanıcı deneyimini ön planda tutar. Hedefimiz, teknolojiyi eğlenceli ve işlevsel hale getirerek global ölçekte güvenilir bir stüdyo olmaktır.
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div
            variants={heroButtons}
            initial="initial"
            animate="animate"
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.div
              variants={buttonHover}
              whileHover="hover"
              whileTap="tap"
            >
              <Link
                href="/contact"
                className="btn-primary text-lg px-8 py-4 inline-flex items-center space-x-2 group"
              >
                <span>Bizimle Çalışın</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </motion.div>
            
            <motion.div
              variants={buttonHover}
              whileHover="hover"
              whileTap="tap"
            >
              <Link
                href="/projects"
                className="btn-secondary text-lg px-8 py-4 inline-flex items-center space-x-2 group"
              >
                <Play className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                <span>Projeleri İncele</span>
              </Link>
            </motion.div>
          </motion.div>
          
          {/* Stats */}
          <motion.div
            variants={heroButtons}
            initial="initial"
            animate="animate"
            className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto"
          >
            {[
              { number: '2+', label: 'Yıllık Deneyim' },
              { number: '5+', label: 'Tamamlanan Proje' },
              { number: '100%', label: 'Müşteri Memnuniyeti' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="text-center"
              >
                <div className="font-heading font-bold text-2xl lg:text-3xl gradient-text mb-2">
                  {stat.number}
                </div>
                <div className="text-foreground/60 text-sm lg:text-base">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-foreground/50 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
