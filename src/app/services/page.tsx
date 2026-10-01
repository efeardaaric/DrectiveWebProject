'use client'

import { motion } from 'framer-motion'
import Section from '@/components/Section'
import CTA from '@/components/CTA'
import { staggerContainer, staggerItem, easeSmooth } from '@/lib/motion'
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
  BarChart3,
} from 'lucide-react'

const services = [
  {
    icon: <Gamepad2 className="w-5 h-5" />,
    title: 'Oyun Geliştirme',
    description:
      'Unity ile 2D/3D oyunlar ve prototipler. Steam yayın süreci ve canlı operasyon desteği.',
    features: ['Unity 2D/3D', 'C#', 'Cross-platform', 'Steam yayın'],
  },
  {
    icon: <Smartphone className="w-5 h-5" />,
    title: 'Mobil Uygulama',
    description:
      'iOS ve Android için ürün odaklı mobil deneyimler. Store teslimine kadar uçtan uca.',
    features: ['React Native / native', 'Push', 'Store yayın', 'Performans'],
  },
  {
    icon: <Code className="w-5 h-5" />,
    title: 'Web Geliştirme',
    description:
      'Next.js ve TypeScript ile hızlı, ölçeklenebilir web ürünleri. Marka sitelerinden kurumsal platformlara.',
    features: ['Next.js App Router', 'TypeScript', 'SEO & performans', 'Responsive UI'],
  },
  {
    icon: <Palette className="w-5 h-5" />,
    title: 'UI/UX Tasarım',
    description:
      'Markaya uygun, akıcı arayüzler. Prototipten production’a kadar tutarlı tasarım dili.',
    features: ['Araştırma', 'Wireframe', 'Design system', 'Motion'],
  },
  {
    icon: <Database className="w-5 h-5" />,
    title: 'Backend',
    description:
      'API, veri modeli ve güvenlik katmanı. Ürünün arkasındaki sağlam altyapı.',
    features: ['Node.js', 'API tasarımı', 'Auth', 'Cloud deploy'],
  },
  {
    icon: <Users className="w-5 h-5" />,
    title: 'Danışmanlık',
    description:
      'Teknoloji seçimi, mimari ve proje yönetimi. Doğru yolda hızlı ilerlemek için.',
    features: ['Stack seçimi', 'Mimari', 'Kod review', 'Mentörlük'],
  },
]

const extras = [
  {
    icon: <Zap className="w-4 h-4" />,
    title: 'Performans',
    description: 'Core Web Vitals ve yükleme sürelerini iyileştiriyoruz.',
  },
  {
    icon: <Shield className="w-4 h-4" />,
    title: 'Güvenlik',
    description: 'Kod ve altyapı tarafında temel güvenlik kontrolleri.',
  },
  {
    icon: <Cloud className="w-4 h-4" />,
    title: 'Cloud',
    description: 'Vercel, AWS ve benzeri platformlara taşıma.',
  },
  {
    icon: <BarChart3 className="w-4 h-4" />,
    title: 'Analitik',
    description: 'Kullanım ve performans metriklerini görünür kılıyoruz.',
  },
]

export default function ServicesPage() {
  return (
    <div>
      <Section className="pt-8 lg:pt-16">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.p variants={staggerItem} className="eyebrow mb-4">
            Hizmetler
          </motion.p>
          <motion.h1
            variants={staggerItem}
            className="font-heading text-4xl font-bold lg:text-6xl"
          >
            Ne üretiyoruz?
          </motion.h1>
          <motion.p variants={staggerItem} className="mt-6 text-lg text-muted">
            Ana işimiz oyun ve mobil uygulama geliştirmek. Bu tecrübeyi markaların
            web sitelerine ve dijital ürünlerine de taşıyoruz.
          </motion.p>
        </motion.div>
      </Section>

      <Section>
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid gap-4 md:grid-cols-2"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={staggerItem}
              whileHover={{ y: -4, transition: { duration: 0.3, ease: easeSmooth } }}
              className="surface-panel p-6"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-brass text-background">
                {service.icon}
              </div>
              <h3 className="m-0 font-heading text-xl font-semibold">{service.title}</h3>
              <p className="mt-3 text-sm text-muted">{service.description}</p>
              <ul className="mt-4 space-y-1.5">
                {service.features.map((feature) => (
                  <li key={feature} className="text-sm text-foreground/75">
                    · {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      <Section>
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.div variants={staggerItem} className="mb-8">
            <p className="eyebrow mb-3">Ek destek</p>
            <h2 className="font-heading text-3xl font-bold">Ürün sonrası da yanınızdayız</h2>
          </motion.div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {extras.map((item) => (
              <motion.div key={item.title} variants={staggerItem} className="surface-panel p-5">
                <div className="mb-3 text-brass">{item.icon}</div>
                <h3 className="m-0 font-heading text-base font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-muted">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Section>

      <CTA
        title="Projeniz için doğru hizmeti seçelim"
        description="Kısa bir brieften sonra kapsam, zaman ve yaklaşımı netleştiriyoruz."
        primaryButton={{ text: 'Bizimle Çalışın', href: '/contact#bizimle-calisin' }}
        secondaryButton={{ text: 'Portföyü Gör', href: '/projects' }}
      />
    </div>
  )
}
