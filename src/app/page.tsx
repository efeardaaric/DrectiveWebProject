'use client'

import { motion } from 'framer-motion'
import Hero from '@/components/Hero'
import Section from '@/components/Section'
import FeatureCard from '@/components/FeatureCard'
import ProjectCard from '@/components/ProjectCard'
import CTA from '@/components/CTA'
import LogoMarquee from '@/components/LogoMarquee'
import ParallaxBg from '@/components/ParallaxBg'
import { staggerContainer, staggerItem } from '@/lib/motion'
import { 
  Code, 
  Gamepad2, 
  Palette, 
  Users, 
  Zap, 
  Shield 
} from 'lucide-react'

const features = [
  {
    icon: <Code className="w-6 h-6 lg:w-8 lg:h-8" />,
    title: 'Web Geliştirme',
    description: 'Next.js, React ve TypeScript ile modern, performanslı web uygulamaları geliştiriyoruz. SEO optimizasyonu ve responsive tasarım dahil.',
  },
  {
    icon: <Gamepad2 className="w-6 h-6 lg:w-8 lg:h-8" />,
    title: 'Oyun Geliştirme',
    description: 'Unity ile 2D/3D oyun prototipleri ve tam oyunlar geliştiriyoruz. Cross-platform uyumluluk ve live ops desteği.',
  },
  {
    icon: <Palette className="w-6 h-6 lg:w-8 lg:h-8" />,
    title: 'UI/UX Tasarım',
    description: 'Kullanıcı deneyimi odaklı, animasyonlu arayüzler tasarlıyoruz. Framer Motion ile etkileşimli prototipler.',
  },
  {
    icon: <Users className="w-6 h-6 lg:w-8 lg:h-8" />,
    title: 'Danışmanlık',
    description: 'Teknoloji seçimi, mimari tasarım ve proje yönetimi konularında uzman danışmanlık hizmetleri sunuyoruz.',
  },
  {
    icon: <Zap className="w-6 h-6 lg:w-8 lg:h-8" />,
    title: 'Performans Optimizasyonu',
    description: 'Web uygulamalarınızı hızlandırıyor, Core Web Vitals skorlarınızı iyileştiriyoruz.',
  },
  {
    icon: <Shield className="w-6 h-6 lg:w-8 lg:h-8" />,
    title: 'Güvenlik & Test',
    description: 'Güvenlik testleri, unit testler ve end-to-end testler ile kaliteli kod garantisi.',
  },
]

const featuredProjects = [
  {
    title: 'Scanny',
    description: 'Scanny, ders notlarını tarayıp özetleyen ve bu özetlerden kişisel quizler oluşturan yapay zekâ destekli bir mobil uygulamadır. Öğrencilerin öğrenme sürecini hızlandırır, bilgiyi pekiştirir ve sınavlara daha verimli hazırlanmalarını sağlar.',
    images: ['/images/Scanny1.jpg', '/images/Scanny2.jpg', '/images/Scanny3.jpg'],
    tags: ['Swift', 'React', 'OCR', 'AI-Powered'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Wizardus',
    description: 'Wizardus, büyü ve stratejiyi bir araya getiren retro tarzda bir piksel sanat oyunu. Oyuncular, gizemli diyarları keşfederken farklı büyüler öğrenir, yaratıklarla savaşır ve kendi sihirli yolculuklarını şekillendirir. Basit ama bağımlılık yapan oynanışıyla Wizardus, hem nostaljik hem de yenilikçi bir deneyim sunar.',
    images: ['/images/wizardus1.jpg', '/images/wizardus2.jpg', '/images/wizardus3.jpg'],
    tags: ['VS Like', 'Hardcore Gameplay', 'Diverse Enemies'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Ferman',
    description: 'Ferman, Osmanlı esintili kart kaydırma tabanlı bir mobil oyun. Oyuncular, karşılarına çıkan olay kartlarını sağa ya da sola kaydırarak kararlar verir ve kendi hükümdarlıklarının kaderini şekillendirir. Her seçim, halkın refahını, ordunun gücünü ve devletin dengesini etkiler. Basit ama derin karar mekanikleriyle Ferman, her hamlede “tahtı korumak mı yoksa yıkıma sürüklenmek mi?” sorusunu sorduran sürükleyici bir deneyim sunar.',
    video: '/images/Ferman_Teaser.MP4',
    tags: ['Authentic','Card Game', 'Powerful Narrative'],
    liveUrl: '#',
    githubUrl: '#',
  },
]

export default function HomePage() {
  return (
    <div className="relative">
      <ParallaxBg />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Features Section */}
      <Section id="features" className="bg-accent-900/20">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.div variants={staggerItem} className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl xl:text-5xl text-foreground mb-6">
              Biz Ne{' '}
              <span className="gradient-text">Yapıyoruz?</span>
            </h2>
            <p className="text-foreground/70 text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
              
            </p>
          </motion.div>
          
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </motion.div>
        </motion.div>
      </Section>
      
      {/* Featured Projects */}
      <Section id="projects">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.div variants={staggerItem} className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl xl:text-5xl text-foreground mb-6">
              Öne Çıkan{' '}
              <span className="gradient-text">Projeler</span>
            </h2>
            <p className="text-foreground/70 text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
              Son dönemde tamamladığımız projelerden bir seçki. Her biri farklı 
              teknolojiler ve yaklaşımlarla geliştirildi.
            </p>
          </motion.div>
          
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {featuredProjects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                images={project.images}
                video={project.video}
                tags={project.tags}
                liveUrl={project.liveUrl}
                githubUrl={project.githubUrl}
              />
            ))}
          </motion.div>
          
          <motion.div
            variants={staggerItem}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <motion.a
              href="/projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary text-lg px-8 py-4 inline-block"
            >
              Tüm Projeleri Görüntüle
            </motion.a>
          </motion.div>
        </motion.div>
      </Section>
      
      {/* Logo Marquee */}
      <LogoMarquee />
      
      {/* CTA Section */}
      <CTA
        title="Hemen Ücretsiz Teklif Alın"
        description="Projeniz için özel çözümlerimiz hakkında daha fazla bilgi almak veya bir görüşme planlamak için bizimle iletişime geçin."
        primaryButton={{
          text: 'İletişime Geç',
          href: '/contact',
        }}
        secondaryButton={{
          text: 'Hizmetlerimiz',
          href: '/services',
        }}
      />
    </div>
  )
}
