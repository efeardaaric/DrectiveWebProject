'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Section from '@/components/Section'
import CTA from '@/components/CTA'
import { staggerContainer, staggerItem } from '@/lib/motion'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Send,
  CheckCircle,
  AlertCircle
} from 'lucide-react'

interface FormData {
  name: string
  email: string
  company: string
  projectType: string
  budget: string
  timeline: string
  message: string
}

interface FormErrors {
  [key: string]: string
}

const projectTypes = [
  'Web Geliştirme',
  'Oyun Geliştirme',
  'Mobil Uygulama',
  'UI/UX Tasarım',
  'Danışmanlık',
  'Diğer'
]

const budgetRanges = [
  '5.000 - 15.000 TL',
  '15.000 - 30.000 TL',
  '30.000 - 50.000 TL',
  '50.000+ TL',
  'Belirtmek istemiyorum'
]

const timelines = [
  '1-2 hafta',
  '1 ay',
  '2-3 ay',
  '3-6 ay',
  '6+ ay',
  'Belirsiz'
]

const contactInfo = [
  {
    icon: <Mail className="w-6 h-6" />,
    title: 'E-posta',
    value: 'drectivegames@gmail.com',
    description: '7/24 e-posta desteği'
  },
  {
    icon: <Phone className="w-6 h-6" />,
    title: 'Telefon',
    value: '+90 535 964 45',
    description: 'Pazartesi - Cuma, 09:00 - 18:00'
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: 'Adres',
    value: 'Halkalı Merkez Mah. Halkalı Cad No:281/23 Ofis No:34, 34303 Küçükçekmece/İstanbul',
    description: 'Ofis adresimiz'
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: 'Çalışma Saatleri',
    value: 'Pazartesi - Cuma',
    description: '09:00 - 18:00 (GMT+3)'
  }
]

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: ''
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Ad soyad gereklidir'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'E-posta adresi gereklidir'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Geçerli bir e-posta adresi giriniz'
    }

    if (!formData.projectType) {
      newErrors.projectType = 'Proje türü seçiniz'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Proje açıklaması gereklidir'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      
      if (!response.ok) {
        throw new Error(result.error || 'Bir hata oluştu');
      }
      
      setSubmitStatus('success')
      
      // Form'u temizle
      setFormData({
        name: '',
        email: '',
        company: '',
        projectType: '',
        budget: '',
        timeline: '',
        message: ''
      });

    } catch (error) {
      console.error('Form gönderilirken hata oluştu:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  }

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }))
    }
  }

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
            İletişim
          </motion.h1>
          <motion.p
            variants={staggerItem}
            className="text-foreground/70 text-lg lg:text-xl leading-relaxed mb-8"
          >
            Projenizi hayata geçirmek için bizimle iletişime geçin. Ücretsiz 
            danışmanlık ve proje değerlendirmesi sunuyoruz.
          </motion.p>
        </motion.div>
      </Section>

      {/* Contact Info & Form */}
      <Section className="bg-accent-900/20">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16"
        >
          {/* Contact Info */}
          <motion.div variants={staggerItem}>
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground mb-8">
              İletişim Bilgileri
            </h2>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-[#18181b] p-6 rounded-xl border border-[#222]"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #cc972b 70%, #b88a2a 100%)' }}>
                      <span style={{ color: '#fff', filter: 'drop-shadow(0 2px 8px #cc972b)' }}>
                        {info.icon}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-lg mb-1" style={{ color: '#cc972b' }}>
                        {info.title}
                      </h3>
                      <p className="font-medium mb-1" style={{ color: '#cc972b' }}>
                        {info.value}
                      </p>
                      <p className="text-foreground/60 text-sm">
                        {info.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={staggerItem}>
            <div className="glass-strong p-8 rounded-xl">
              <h2 className="font-heading font-bold text-2xl lg:text-3xl text-foreground mb-6">
                Proje Başvurusu
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Ad Soyad *
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className={`w-full px-4 py-3 bg-background/50 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500/30 transition-colors duration-200 ${
                      errors.name ? 'border-red-500' : 'border-white/20'
                    }`}
                    placeholder="Adınız ve soyadınız"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-400 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    E-posta *
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className={`w-full px-4 py-3 bg-background/50 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500/30 transition-colors duration-200 ${
                      errors.email ? 'border-red-500' : 'border-white/20'
                    }`}
                    placeholder="ornek@email.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-400 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Company */}
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                    Şirket
                  </label>
                  <input
                    type="text"
                    id="company"
                    value={formData.company}
                    onChange={(e) => handleInputChange('company', e.target.value)}
                    className="w-full px-4 py-3 bg-background/50 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500/30 transition-colors duration-200"
                    placeholder="Şirket adınız (opsiyonel)"
                  />
                </div>

                {/* Project Type */}
                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium text-foreground mb-2">
                    Proje Türü *
                  </label>
                  <select
                    id="projectType"
                    value={formData.projectType}
                    onChange={(e) => handleInputChange('projectType', e.target.value)}
                    className={`w-full px-4 py-3 bg-background/50 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500/30 transition-colors duration-200 ${
                      errors.projectType ? 'border-red-500' : 'border-white/20'
                    }`}
                  >
                    <option value="">Proje türü seçiniz</option>
                    {projectTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                  {errors.projectType && (
                    <p className="mt-1 text-sm text-red-400 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.projectType}
                    </p>
                  )}
                </div>

                {/* Budget & Timeline */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-foreground mb-2">
                      Bütçe
                    </label>
                    <select
                      id="budget"
                      value={formData.budget}
                      onChange={(e) => handleInputChange('budget', e.target.value)}
                      className="w-full px-4 py-3 bg-background/50 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500/30 transition-colors duration-200"
                    >
                      <option value="">Bütçe aralığı seçiniz</option>
                      {budgetRanges.map((range) => (
                        <option key={range} value={range}>
                          {range}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="timeline" className="block text-sm font-medium text-foreground mb-2">
                      Zaman Çizelgesi
                    </label>
                    <select
                      id="timeline"
                      value={formData.timeline}
                      onChange={(e) => handleInputChange('timeline', e.target.value)}
                      className="w-full px-4 py-3 bg-background/50 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500/30 transition-colors duration-200"
                    >
                      <option value="">Zaman çizelgesi seçiniz</option>
                      {timelines.map((timeline) => (
                        <option key={timeline} value={timeline}>
                          {timeline}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Proje Açıklaması *
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    className={`w-full px-4 py-3 bg-background/50 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500/30 transition-colors duration-200 resize-none ${
                      errors.message ? 'border-red-500' : 'border-white/20'
                    }`}
                    placeholder="Projenizi detaylı olarak açıklayınız..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-400 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full btn-primary text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Gönderiliyor...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Proje Başvurusu Gönder</span>
                    </>
                  )}
                </motion.button>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg flex items-center space-x-2"
                  >
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-green-400">
                      Başvurunuz başarıyla gönderildi! En kısa sürede size dönüş yapacağız.
                    </span>
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg flex items-center space-x-2"
                  >
                    <AlertCircle className="w-5 h-5 text-red-400" />
                    <span className="text-red-400">
                      Bir hata oluştu. Lütfen tekrar deneyiniz.
                    </span>
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>
        </motion.div>
      </Section>

      {/* CTA Section */}
      <CTA
        title="Hemen Başlayalım"
        description="Projenizi hayata geçirmek için beklemeyin. Bugün bizimle iletişime geçin ve ücretsiz danışmanlık alın."
        primaryButton={{
          text: 'WhatsApp ile İletişim',
          href: 'https://wa.me/905551234567',
        }}
        secondaryButton={{
          text: 'E-posta Gönder',
          href: 'mailto:drectivegames@gmail.com',
        }}
      />
    </div>
  )
}
