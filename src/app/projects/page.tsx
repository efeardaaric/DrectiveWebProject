'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Section from '@/components/Section'
import ProjectCard from '@/components/ProjectCard'
import CTA from '@/components/CTA'
import { staggerContainer, staggerItem } from '@/lib/motion'

const allProjects = [
  {
    title: 'Crusader Tycoon',
    description: 'Orta Çağ temalı bir strateji ve yönetim oyunu. Oyuncular, küçük bir orduyla başlayıp kalelerini güçlendirir, birliklerini yönetir ve farklı savaş senaryolarında düşmanlara karşı mücadele eder. Kuşatma, meydan muharebesi ve kale savunması gibi dinamik savaşlarla dolu Crusader Tycoon, tarihsel birliklerle gerçekçi bir strateji deneyimi sunarken, düşman tarafında fantastik sürprizler de barındırır.',
    video: '/images/Crusader Tycoon Trailer.mp4',
    tags: ['Historical', '2D', 'Idle', 'Pixel Art'],
    category: 'game',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Scanny',
    description: 'Scanny, ders notlarını tarayıp özetleyen ve bu özetlerden kişisel quizler oluşturan yapay zekâ destekli bir mobil uygulamadır. Öğrencilerin öğrenme sürecini hızlandırır, bilgiyi pekiştirir ve sınavlara daha verimli hazırlanmalarını sağlar.',
    images: ['/images/Scanny1.jpg', '/images/Scanny2.jpg', '/images/Scanny3.jpg'],
    tags: ['Swift', 'React', 'OCR', 'AI-Powered'],
    category: 'mobile',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Ferman',
    description: 'Ferman, Osmanlı esintili kart kaydırma tabanlı bir mobil oyun. Oyuncular, karşılarına çıkan olay kartlarını sağa ya da sola kaydırarak kararlar verir ve kendi hükümdarlıklarının kaderini şekillendirir. Her seçim, halkın refahını, ordunun gücünü ve devletin dengesini etkiler. Basit ama derin karar mekanikleriyle Ferman, her hamlede “tahtı korumak mı yoksa yıkıma sürüklenmek mi?” sorusunu sorduran sürükleyici bir deneyim sunar.',
    video: '/images/Ferman_Teaser.MP4',
    tags: ['Authentic','Card Game', 'Powerful Narrative'],
    category: 'game',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Wizardus',
    description: 'Wizardus, büyü ve stratejiyi bir araya getiren retro tarzda bir piksel sanat oyunu. Oyuncular, gizemli diyarları keşfederken farklı büyüler öğrenir, yaratıklarla savaşır ve kendi sihirli yolculuklarını şekillendirir. Basit ama bağımlılık yapan oynanışıyla Wizardus, hem nostaljik hem de yenilikçi bir deneyim sunar.',
    images: ['/images/wizardus1.jpg', '/images/wizardus2.jpg', '/images/wizardus3.jpg'],
    tags: ['VS Like', 'Hardcore Gameplay', 'Diverse Enemies', ],
    category: 'game',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'StuFinance',
    description: 'StuFinance, öğrencilerin gelir ve giderlerini kolayca takip ederek bütçelerini yönetmelerini sağlayan pratik bir finans uygulamasıdır. Harcamalarınızı kategorilere ayırın, gelirlerinizi kaydedin ve grafiklerle bütçe dengenizi anlık olarak görün.',
    image: '/images/Stu.png',
    tags: ['React Native', 'Firebase', 'Payment',],
    category: 'mobile',
    liveUrl: '#',
    githubUrl: '#',
  },
  
  // Diğer projeler buraya eklenebilir
  {
    title: 'Vellichor Games',
    image: '/images/veli.png',
    category: 'web',
    tags: ['TypeScript', 'Tailwind CSS', 'Next.js'],
  },
  {
    title: 'Adell',
    image: '/images/adell.png',
    category: 'web',
    tags: ['TypeScript', 'Tailwind CSS', 'Next.js'],
  },
];
const categories = [
  { id: 'all', name: 'Tümü' },
  { id: 'web', name: 'Web Geliştirme' },
  { id: 'game', name: 'Oyun Geliştirme' },
  { id: 'mobile', name: 'Mobil Uygulama' },
];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('all')

  const filteredProjects = activeCategory === 'all' 
    ? allProjects 
    : allProjects.filter(project => project.category === activeCategory)

  return (
    <div className="relative">
      {/* Hero Section */}
      <Section className="pt-8 lg:pt-16">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-100px' }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.h1
            variants={staggerItem}
            className="font-heading font-bold text-4xl lg:text-5xl xl:text-6xl text-foreground mb-6"
          >
            Projelerimiz
          </motion.h1>
          <motion.p
            variants={staggerItem}
            className="text-foreground/70 text-lg lg:text-xl leading-relaxed mb-8"
          >
            Son dönemde tamamladığımız projelerden bir seçki. Her biri farklı 
            teknolojiler ve yaklaşımlarla geliştirildi. Web geliştirmeden oyun 
            geliştirmeye kadar geniş bir yelpazede çalışıyoruz.
          </motion.p>
        </motion.div>
      </Section>

      {/* Filter Section */}
      <Section className="bg-accent-900/20">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.div variants={staggerItem} className="text-center mb-12">
            <h2 className="font-heading font-semibold text-2xl lg:text-3xl text-foreground mb-6">
              Kategoriye Göre Filtrele
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{ background: activeCategory === category.id ? '#cc972b' : 'rgba(204,151,43,0.20)', color: activeCategory === category.id ? '#18181b' : '#cc972b', fontWeight: 500 }}
                  className="px-6 py-3 rounded-lg font-medium border-none"
                >
                  {category.name}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </Section>

      {/* Projects Grid */}
      <Section>
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <ProjectCard
                  title={project.title}
                  description={project.description ?? ''}
                  image={project.image}
                  images={project.images}
                  video={project.video}
                  tags={project.tags}
                  liveUrl={project.liveUrl}
                  githubUrl={project.githubUrl}
                />
              </motion.div>
            ))}
          </motion.div>
          
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <p className="text-foreground/50 text-lg">
                Bu kategoride henüz proje bulunmuyor.
              </p>
            </motion.div>
          )}
        </motion.div>
      </Section>

      {/* Stats Section */}
      <Section className="bg-accent-900/20">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.div variants={staggerItem} className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground mb-6">
              Proje İstatistikleri
            </h2>
            <p className="text-foreground/70 text-lg max-w-3xl mx-auto">
              Bugüne kadar tamamladığımız projelerin sayısal verileri
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '5+', label: 'Tamamlanan Proje' },
              { number: '10+', label: 'Web Uygulaması' },
              { number: '3+', label: 'Oyun Projesi' },
              { number: '2+', label: 'Mobil Uygulama' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={staggerItem}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="font-heading font-bold text-3xl lg:text-4xl gradient-text mb-2">
                  {stat.number}
                </div>
                <div className="text-foreground/60 text-sm lg:text-base">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Section>

      {/* CTA Section */}
      <CTA
        title="Sizin Projenizi de Yapalım"
        description="Benzer projeler geliştirmek veya tamamen yeni bir fikrinizi hayata geçirmek için bizimle iletişime geçin."
        primaryButton={{
          text: 'Proje Başlat',
          href: '/contact',
        }}
        secondaryButton={{
          text: 'Hizmetlerimizi İncele',
          href: '/services',
        }}
      />
    </div>
  )
}
