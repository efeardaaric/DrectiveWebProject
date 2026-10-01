'use client'

import { motion } from 'framer-motion'
import Section from '@/components/Section'
import WorkWithUsForm from '@/components/WorkWithUsForm'
import { staggerContainer, staggerItem } from '@/lib/motion'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'

const contactInfo = [
  {
    icon: <Mail className="w-5 h-5" />,
    title: 'E-posta',
    value: 'drectivegames@gmail.com',
    href: 'mailto:drectivegames@gmail.com',
    description: 'Proje talepleri için',
  },
  {
    icon: <Phone className="w-5 h-5" />,
    title: 'Telefon',
    value: '+90 535 964 45',
    href: 'tel:+9053596445',
    description: 'Pazartesi - Cuma, 09:00 - 18:00',
  },
  {
    icon: <MapPin className="w-5 h-5" />,
    title: 'Adres',
    value: 'Halkalı Merkez Mah. Halkalı Cad No:281/23 Ofis No:34, Küçükçekmece/İstanbul',
    href: undefined,
    description: 'Ofis adresimiz',
  },
  {
    icon: <Clock className="w-5 h-5" />,
    title: 'Çalışma Saatleri',
    value: 'Pazartesi - Cuma',
    href: undefined,
    description: '09:00 - 18:00 (GMT+3)',
  },
]

export default function ContactPage() {
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
            İletişim
          </motion.p>
          <motion.h1
            variants={staggerItem}
            className="font-heading text-4xl font-bold lg:text-6xl"
          >
            Bizimle Çalışın
          </motion.h1>
          <motion.p variants={staggerItem} className="mt-6 text-lg text-muted">
            Oyun, mobil uygulama ya da web sitesi — aklınızdakini kısaca anlatın, birkaç iş günü içinde dönüş yapalım.
          </motion.p>
        </motion.div>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4">
            {contactInfo.map((info) => (
              <div key={info.title} className="surface-panel p-5">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brass text-background">
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="m-0 font-heading text-base font-semibold text-foreground">
                      {info.title}
                    </h3>
                    {info.href ? (
                      <a href={info.href} className="mt-1 block text-brass hover:underline">
                        {info.value}
                      </a>
                    ) : (
                      <p className="mt-1 m-0 text-sm text-foreground/80">{info.value}</p>
                    )}
                    <p className="m-0 mt-1 text-xs text-muted">{info.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div id="bizimle-calisin" className="surface-panel scroll-mt-28 p-6 sm:p-8">
            <h2 className="mb-6 font-heading text-2xl font-bold">Proje Talebi</h2>
            <WorkWithUsForm />
          </div>
        </div>
      </Section>
    </div>
  )
}
