'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Section from '@/components/Section'
import CTA from '@/components/CTA'
import { staggerContainer, staggerItem, revealImage, easeSmooth } from '@/lib/motion'
import { Users, Lightbulb, Award, Code, Gamepad2, Palette, Zap } from 'lucide-react'
import { team } from '@/lib/team'

const values = [
  {
    icon: <Gamepad2 className="w-5 h-5" />,
    title: 'Önce oynanış',
    description: 'Bir fikri kâğıtta değil, oynanabilir bir prototipte test ederiz. Eğlenceli değilse devam etmeyiz.',
  },
  {
    icon: <Users className="w-5 h-5" />,
    title: 'Küçük ve yakın ekip',
    description: 'Tasarımcı, sanatçı ve yazılımcı aynı masada. Kararlar hızlı, iletişim doğrudan.',
  },
  {
    icon: <Lightbulb className="w-5 h-5" />,
    title: 'Kendi fikirlerimiz',
    description: 'Mahallenin Makası gibi oyunlar, kendi gözlemlerimizden ve kültürümüzden çıkıyor.',
  },
  {
    icon: <Award className="w-5 h-5" />,
    title: 'Bitirilmiş işler',
    description: 'Yarım prototipleri değil, mağazada ve canlıda olan ürünleri sayıyoruz.',
  },
]

const timeline = [
  {
    year: '2024',
    title: 'Kuruluş',
    description: 'Drective Interactive olarak ilk oyun prototiplerimizi geliştirmeye başladık.',
  },
  {
    year: '2024',
    title: 'İlk uygulamalar',
    description: 'Scanny ve StuFinance ile mobil uygulama tarafına adım attık.',
  },
  {
    year: '2025',
    title: 'Zaim Teknopark',
    description: 'Zaim Teknopark bünyesine kabul edildik; ekibimiz ve projelerimiz için yeni bir dönem başladı.',
  },
  {
    year: '2025',
    title: 'ISU IDEA Club sponsorluğu',
    description: 'İstinye Üniversitesi IDEA Club’ın sponsoru olduk, tanıtım etkinliğinde oyunlarımızı öğrencilerle buluşturduk.',
  },
  {
    year: '2025',
    title: 'Web projeleri',
    description: 'CetLine, Miela, Caras Rent a Car, CetLis ve Cetrose için web siteleri geliştirdik.',
  },
  {
    year: '2026',
    title: 'Connections ve Mahallenin Makası',
    description: 'Connections Steam’de yayınlandı, yeni mobil oyunumuz Mahallenin Makası’nı tanıttık.',
  },
]

const news = [
  {
    image: '/images/news/zaim-teknopark.jpg',
    alt: 'Drective ekibi Zaim Teknopark’ta',
    date: 'Ağustos 2025',
    title: 'Zaim Teknopark’a kabul edildik',
    text: 'Girişimcilik yolculuğumuzda önemli bir adım. Bu süreçteki değerli destekleri için Sayın Özgür Özdemir’e teşekkür ederiz. Projelerimizi ileriye taşımak ve yeni iş birlikleri kurmak için hız kesmeden çalışıyoruz.',
  },
  {
    image: '/images/news/idea-club-stand.jpg',
    alt: 'ISU IDEA Club tanıtım etkinliğinde Drective standı',
    date: 'Ekim 2025',
    title: 'ISU IDEA Club’ın sponsoruyuz',
    text: 'Sponsoru olduğumuz IDEA Club’ın tanıtım etkinliğinde genç girişimcilerle bir araya geldik, Ferman ve diğer oyunlarımızı standımızda oynattık. Yeni dönemde başkan Efe Gürmarmara ve ekibine başarılar.',
  },
]

const technologies = [
  { name: 'Next.js', icon: <Code className="w-5 h-5" />, category: 'Frontend' },
  { name: 'React', icon: <Code className="w-5 h-5" />, category: 'Frontend' },
  { name: 'TypeScript', icon: <Code className="w-5 h-5" />, category: 'Language' },
  { name: 'Unity', icon: <Gamepad2 className="w-5 h-5" />, category: 'Game' },
  { name: 'Framer Motion', icon: <Palette className="w-5 h-5" />, category: 'Motion' },
  { name: 'Tailwind', icon: <Palette className="w-5 h-5" />, category: 'UI' },
  { name: 'Node.js', icon: <Zap className="w-5 h-5" />, category: 'Backend' },
  { name: 'PostgreSQL', icon: <Zap className="w-5 h-5" />, category: 'Data' },
]

export default function AboutPage() {
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
          <motion.div variants={staggerItem} className="mx-auto mb-6 relative h-20 w-20">
            <Image src="/Logo.png" alt="Drective" fill className="object-contain" />
          </motion.div>
          <motion.p variants={staggerItem} className="eyebrow mb-4">
            Hakkımızda
          </motion.p>
          <motion.h1
            variants={staggerItem}
            className="font-heading text-4xl font-bold lg:text-6xl"
          >
            Drective
          </motion.h1>
          <motion.p variants={staggerItem} className="mt-6 text-lg text-muted">
            İstanbul’da kurulan küçük bir oyun ve uygulama stüdyosuyuz. Kendi oyunlarımızı
            ve mobil uygulamalarımızı geliştiriyor, markalar için web siteleri yapıyoruz.
          </motion.p>
        </motion.div>
      </Section>

      <Section>
        <motion.div
          variants={revealImage}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="relative aspect-[16/9] overflow-hidden rounded-3xl border border-line"
        >
          <Image
            src="/images/team.jpg"
            alt="Drective ekibi"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </motion.div>
      </Section>

      <Section>
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, ease: easeSmooth }}
          >
            <p className="eyebrow mb-3">Hikâyemiz</p>
            <h2 className="font-heading text-3xl font-bold lg:text-4xl">
              Hayallerin sınırı yok, yeter ki cesaretle peşinden gidelim.
            </h2>
            <p className="mt-5 text-muted">
              Drective Interactive, oyun yapmayı seven birkaç arkadaşın kurduğu bir stüdyo olarak
              başladı. Bugün tasarımcılar, sanatçılar ve yazılımcılardan oluşan bir ekip olarak
              kendi oyunlarımızı ve mobil uygulamalarımızı geliştiriyoruz.
            </p>
            <p className="mt-4 text-muted">
              2025’te Zaim Teknopark bünyesine kabul edildik. Aynı yıl ISU IDEA Club’ın sponsoru
              olduk ve genç girişimcilerle fikir alışverişinde bulunmanın ne kadar ilham verici
              olduğunu gördük. Aramıza katılan yeni arkadaşlarımızla büyümeye devam ediyoruz.
            </p>
            <p className="mt-4 text-muted">
              Connections ile Steam’e çıktık, Mahallenin Makası ile mahalle kültürünü mobile
              taşıdık. Geleceği oyunlarımız ve ürettiğimiz teknolojilerle şekillendirmek istiyoruz.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                { number: '2', label: 'Yayındaki oyun' },
                { number: '2', label: 'Mobil uygulama' },
                { number: '5', label: 'Canlı web projesi' },
                { number: String(team.length), label: 'Kişilik ekip' },
              ].map((stat) => (
                <div key={stat.label} className="border-l border-line pl-4">
                  <div className="font-heading text-2xl font-bold text-brass">{stat.number}</div>
                  <div className="mt-1 text-xs text-muted">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: easeSmooth, delay: 0.1 }}
            className="grid grid-cols-5 gap-3"
          >
            <div className="relative col-span-5 aspect-[4/3] overflow-hidden rounded-2xl border border-line">
              <Image
                src="/images/news/idea-club-stand.jpg"
                alt="Drective ekibi IDEA Club standında"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
            </div>
            <div className="relative col-span-3 aspect-[4/3] overflow-hidden rounded-2xl border border-line">
              <Image
                src="/images/news/idea-club-ekip.jpg"
                alt="Drective ekibinden üç kişi oyun standında"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 60vw, 27vw"
              />
            </div>
            <div className="relative col-span-2 overflow-hidden rounded-2xl border border-line">
              <Image
                src="/images/news/zaim-teknopark.jpg"
                alt="Drective ekibi Zaim Teknopark’ta"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 40vw, 18vw"
              />
            </div>
          </motion.div>
        </div>
      </Section>

      <Section>
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.div variants={staggerItem} className="mb-10 max-w-2xl">
            <p className="eyebrow mb-3">Haberler</p>
            <h2 className="font-heading text-3xl font-bold lg:text-4xl">Son gelişmeler</h2>
          </motion.div>
          <div className="grid gap-6 md:grid-cols-2">
            {news.map((item) => (
              <motion.article
                key={item.title}
                variants={staggerItem}
                className="group overflow-hidden rounded-2xl border border-line bg-surface"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-6">
                  <p className="m-0 text-xs uppercase tracking-[0.18em] text-brass">{item.date}</p>
                  <h3 className="mt-2 font-heading text-xl font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{item.text}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </Section>

      <Section>
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.div variants={staggerItem} className="mb-10 max-w-2xl">
            <p className="eyebrow mb-3">Değerler</p>
            <h2 className="font-heading text-3xl font-bold lg:text-4xl">Nasıl çalışıyoruz</h2>
          </motion.div>
          <div className="grid gap-4 md:grid-cols-2">
            {values.map((value) => (
              <motion.div key={value.title} variants={staggerItem} className="surface-panel p-6">
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-brass/30 bg-brass/10 text-brass">
                  {value.icon}
                </div>
                <h3 className="m-0 font-heading text-lg font-semibold">{value.title}</h3>
                <p className="mt-2 text-sm text-muted">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Section>

      <Section>
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.div variants={staggerItem} className="mb-10">
            <p className="eyebrow mb-3">Yolculuk</p>
            <h2 className="font-heading text-3xl font-bold lg:text-4xl">Kısa tarihçe</h2>
          </motion.div>
          <div className="space-y-4">
            {timeline.map((item) => (
              <motion.div
                key={item.title + item.year}
                variants={staggerItem}
                className="grid gap-4 rounded-2xl border border-line bg-surface p-5 sm:grid-cols-[100px_1fr]"
              >
                <div className="font-heading text-xl font-bold text-brass">{item.year}</div>
                <div>
                  <h3 className="m-0 font-heading text-lg font-semibold">{item.title}</h3>
                  <p className="mt-1 text-sm text-muted">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Section>

      <Section>
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.div variants={staggerItem} className="mb-10 max-w-2xl">
            <p className="eyebrow mb-3">Ekip</p>
            <h2 className="font-heading text-3xl font-bold lg:text-4xl">Takımımız</h2>
            <p className="mt-3 text-muted">Projeleri birlikte hayata geçiren çekirdek ekip.</p>
          </motion.div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <motion.div
                key={member.name}
                variants={staggerItem}
                whileHover={{ y: -4, transition: { duration: 0.3, ease: easeSmooth } }}
                className="surface-panel p-5 text-center"
              >
                <div className="relative mx-auto mb-4 h-20 w-20 overflow-hidden rounded-full border border-line">
                  <Image src={member.image} alt={member.name} fill className="object-cover" />
                </div>
                <h3 className="m-0 font-heading text-base font-semibold">{member.name}</h3>
                <p className="mt-1 text-sm text-brass">{member.role}</p>
                <div className="mt-3 flex flex-wrap justify-center gap-2">
                  {member.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-line px-2.5 py-1 text-[11px] text-muted"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Section>

      <Section>
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.div variants={staggerItem} className="mb-10">
            <p className="eyebrow mb-3">Stack</p>
            <h2 className="font-heading text-3xl font-bold lg:text-4xl">Teknolojiler</h2>
          </motion.div>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-8">
            {technologies.map((tech) => (
              <motion.div
                key={tech.name}
                variants={staggerItem}
                whileHover={{ y: -3, transition: { duration: 0.25, ease: easeSmooth } }}
                className="surface-panel px-3 py-4 text-center"
              >
                <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center text-brass">
                  {tech.icon}
                </div>
                <div className="text-sm font-medium text-foreground">{tech.name}</div>
                <div className="text-[11px] text-muted">{tech.category}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Section>

      <CTA
        title="Birlikte üretelim"
        description="Oyun, uygulama ya da web sitesi fikriniz için ekibimizle konuşun."
        primaryButton={{ text: 'Bizimle Çalışın', href: '/contact#bizimle-calisin' }}
        secondaryButton={{ text: 'Portföy', href: '/projects' }}
      />
    </div>
  )
}
