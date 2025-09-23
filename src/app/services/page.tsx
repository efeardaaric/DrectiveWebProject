'use client'

import { motion } from 'framer-motion'
import Section from '@/components/Section'
import FeatureCard from '@/components/FeatureCard'
import CTA from '@/components/CTA'
import { staggerContainer, staggerItem } from '@/lib/motion'
import { 
  Code, 
  Gamepad2, 
  Palette, 
  Users, 
  Zap, 
  Shield,
  Smartphone,
  Database,
  Cloud,
  BarChart3
} from 'lucide-react'

const services = [
  {
    icon: <Code className="w-6 h-6 lg:w-8 lg:h-8" />,
    title: 'Web Geliştirme',
    description: 'Next.js, React ve TypeScript ile ölçeklenebilir, yüksek performanslı web uygulamaları geliştiriyoruz.\nSEO optimizasyonu ve responsive tasarım ile dijital varlığınızı güçlendiriyoruz.',
    features: [
      'Next.js 14 & App Router',
      'TypeScript & Strict Mode',
      'Tailwind CSS & Framer Motion',
      'SEO Optimizasyonu',
      'Performance Tuning',
      'Responsive Design'
    ],
    price: 'Proje bazlı'
  },
  {
    icon: <Gamepad2 className="w-6 h-6 lg:w-8 lg:h-8" />,
    title: 'Oyun Geliştirme',
    description: 'Unity ile 2D/3D oyun prototipleri ve tam oyunlar geliştiriyoruz. Cross-platform uyumluluk ve live ops desteği.',
    features: [
      'Unity 2D/3D Geliştirme',
      'C# Scripting',
      'Cross-platform Build',
      'Asset Pipeline',
      'Performance Optimization',
      'Live Ops & Analytics'
    ],
    price: 'Proje bazlı'
  },
  {
    icon: <Palette className="w-6 h-6 lg:w-8 lg:h-8" />,
    title: 'UI/UX Tasarım',
    description: 'Kullanıcı deneyimi odaklı, animasyonlu arayüzler tasarlıyoruz. Framer Motion ile etkileşimli prototipler.',
    features: [
      'User Research & Analysis',
      'Wireframing & Prototyping',
      'Visual Design & Branding',
      'Framer Motion Animations',
      'Design Systems',
      'Usability Testing'
    ],
    price: 'Saatlik / Proje bazlı'
  },
  {
    icon: <Smartphone className="w-6 h-6 lg:w-8 lg:h-8" />,
    title: 'Mobile App Development',
    description: 'React Native ile cross-platform mobil uygulamalar geliştiriyoruz. iOS ve Android uyumlu.',
    features: [
      'React Native Development',
      'iOS & Android Build',
      'Native Module Integration',
      'Push Notifications',
      'App Store Deployment',
      'Performance Optimization'
    ],
    price: 'Proje bazlı'
  },
  {
    icon: <Database className="w-6 h-6 lg:w-8 lg:h-8" />,
    title: 'Backend Development',
    description: 'Node.js, Python ve diğer modern teknolojilerle güçlü backend sistemleri geliştiriyoruz.',
    features: [
      'Node.js & Express',
      'Python & Django/FastAPI',
      'Database Design & Optimization',
      'API Development & Documentation',
      'Authentication & Security',
      'Cloud Deployment'
    ],
    price: 'Saatlik / Proje bazlı'
  },
  {
    icon: <Users className="w-6 h-6 lg:w-8 lg:h-8" />,
    title: 'Teknoloji Danışmanlığı',
    description: 'Teknoloji seçimi, mimari tasarım ve proje yönetimi konularında uzman danışmanlık hizmetleri.',
    features: [
      'Technology Stack Selection',
      'Architecture Design',
      'Project Planning & Management',
      'Code Review & Quality Assurance',
      'Team Training & Mentoring',
      'Technical Documentation'
    ],
    price: 'Saatlik'
  }
]

const additionalServices = [
  {
    icon: <Zap className="w-5 h-5" />,
    title: 'Performance Optimization',
    description: 'Web uygulamalarınızı hızlandırıyor, Core Web Vitals skorlarınızı iyileştiriyoruz.'
  },
  {
    icon: <Shield className="w-5 h-5" />,
    title: 'Security Audit',
    description: 'Güvenlik testleri ve kod incelemeleri ile uygulamalarınızı güvende tutuyoruz.'
  },
  {
    icon: <Cloud className="w-5 h-5" />,
    title: 'Cloud Migration',
    description: 'Uygulamalarınızı AWS, Vercel, Netlify gibi modern cloud platformlarına taşıyoruz.'
  },
  {
    icon: <BarChart3 className="w-5 h-5" />,
    title: 'Analytics & Monitoring',
    description: 'Kullanıcı davranışları ve performans metrikleri için analitik sistemleri kuruyoruz.'
  }
]

export default function ServicesPage() {
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
            Hizmetlerimiz
          </motion.h1>
          <motion.p
            variants={staggerItem}
            className="text-foreground/70 text-lg lg:text-xl leading-relaxed mb-8"
          >
            Drective Interactive, yazılım ve oyun geliştirme alanında yenilikçi çözümler üreten genç bir ekiptir. Mobil uygulamalardan PC oyunlarına kadar farklı dijital projeler geliştirerek kullanıcı deneyimini ön planda tutar. Hedefimiz, teknolojiyi eğlenceli ve işlevsel hale getirerek global ölçekte güvenilir bir stüdyo olmaktır.
          </motion.p>
        </motion.div>
      </Section>

      {/* Main Services */}
      <Section className="bg-accent-900/20">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.div variants={staggerItem} className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground mb-6">
              Ana Hizmetlerimiz
            </h2>
            <p className="text-foreground/70 text-lg max-w-3xl mx-auto">
              Her proje için özel olarak tasarlanmış çözümler sunuyoruz
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="glass p-8 rounded-xl hover:glass-strong transition-all duration-300"
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #cc972b 70%, #b88a2a 100%)' }}>
                    <span style={{ color: '#fff', filter: 'drop-shadow(0 2px 8px #cc972b)' }}>
                      {service.icon}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading font-semibold text-xl text-foreground mb-2">
                      {service.title}
                    </h3>
                    <p className="text-foreground/70 text-sm mb-4">
                      {service.description}
                    </p>
                    <div className="text-primary-400 font-medium text-sm">
                      {service.price}
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-2">
                  {service.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center space-x-2 text-sm text-foreground/70"
                    >
                      <div className="w-1.5 h-1.5 bg-primary-400 rounded-full flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Section>

      {/* Additional Services */}
      <Section>
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.div variants={staggerItem} className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground mb-6">
              Ek Hizmetler
            </h2>
            <p className="text-foreground/70 text-lg max-w-3xl mx-auto">
              Projelerinizi daha da güçlendirecek ek hizmetlerimiz
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="glass p-6 rounded-lg hover:glass-strong transition-all duration-300 text-center"
              >
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4" style={{ background: 'linear-gradient(135deg, #cc972b 70%, #b88a2a 100%)' }}>
                  <span style={{ color: '#fff', filter: 'drop-shadow(0 2px 8px #cc972b)' }}>
                    {service.icon}
                  </span>
                </div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Section>

      {/* CTA Section */}
      <CTA
        title="Projeniz İçin Hizmet Alın"
        description="Hangi hizmete ihtiyacınız olduğunu birlikte belirleyelim. Ücretsiz danışmanlık ve proje değerlendirmesi sunuyoruz."
        primaryButton={{
          text: 'Ücretsiz Danışmanlık',
          href: '/contact',
        }}
        secondaryButton={{
          text: 'Portföyümüzü İncele',
          href: '/projects',
        }}
        className="bg-accent-900/20"
      />
    </div>
  )
}
