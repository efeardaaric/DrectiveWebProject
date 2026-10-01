'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'

type FormData = {
  name: string
  email: string
  company: string
  projectType: string
  message: string
}

const projectTypes = [
  'Oyun Geliştirme',
  'Mobil Uygulama',
  'Web Geliştirme',
  'UI/UX Tasarım',
  'Danışmanlık',
  'Diğer',
]

function buildMailto(data: FormData) {
  const subject = encodeURIComponent(`Drective Proje Talebi: ${data.projectType || 'Genel'}`)
  const body = encodeURIComponent(
    `Ad Soyad: ${data.name}\nE-posta: ${data.email}\nŞirket: ${data.company || '-'}\nProje Türü: ${data.projectType}\n\nMesaj:\n${data.message}`
  )
  return `mailto:drectivegames@gmail.com?subject=${subject}&body=${body}`
}

export default function WorkWithUsForm({ compact = false }: { compact?: boolean }) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    projectType: '',
    message: '',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const validate = () => {
    const next: Record<string, string> = {}
    if (!formData.name.trim()) next.name = 'Ad soyad gerekli'
    if (!formData.email.trim()) next.email = 'E-posta gerekli'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) next.email = 'Geçerli e-posta girin'
    if (!formData.projectType) next.projectType = 'Proje türü seçin'
    if (!formData.message.trim()) next.message = 'Mesaj gerekli'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    setIsSubmitting(true)
    setStatus('idle')

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          budget: '',
          timeline: '',
        }),
      })

      if (!response.ok) {
        // Sunucu e-posta ayarı yoksa mailto ile devam et — form çalışır kalsın
        window.location.href = buildMailto(formData)
        setStatus('success')
        setFormData({ name: '', email: '', company: '', projectType: '', message: '' })
        return
      }

      setStatus('success')
      setFormData({ name: '', email: '', company: '', projectType: '', message: '' })
    } catch {
      window.location.href = buildMailto(formData)
      setStatus('success')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className={`space-y-5 ${compact ? '' : ''}`}>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm text-foreground/80">Ad Soyad *</label>
          <input
            value={formData.name}
            onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))}
            className="w-full rounded-xl border border-line bg-background px-4 py-3 text-foreground outline-none focus:border-brass"
            placeholder="Adınız ve soyadınız"
          />
          {errors.name && (
            <p className="mt-1 flex items-center gap-1 text-sm text-red-400">
              <AlertCircle className="h-4 w-4" /> {errors.name}
            </p>
          )}
        </div>
        <div>
          <label className="mb-2 block text-sm text-foreground/80">E-posta *</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))}
            className="w-full rounded-xl border border-line bg-background px-4 py-3 text-foreground outline-none focus:border-brass"
            placeholder="ornek@email.com"
          />
          {errors.email && (
            <p className="mt-1 flex items-center gap-1 text-sm text-red-400">
              <AlertCircle className="h-4 w-4" /> {errors.email}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm text-foreground/80">Şirket</label>
          <input
            value={formData.company}
            onChange={(e) => setFormData((p) => ({ ...p, company: e.target.value }))}
            className="w-full rounded-xl border border-line bg-background px-4 py-3 text-foreground outline-none focus:border-brass"
            placeholder="Opsiyonel"
          />
        </div>
        <div>
          <label className="mb-2 block text-sm text-foreground/80">Proje Türü *</label>
          <select
            value={formData.projectType}
            onChange={(e) => setFormData((p) => ({ ...p, projectType: e.target.value }))}
            className="w-full rounded-xl border border-line bg-background px-4 py-3 text-foreground outline-none focus:border-brass"
          >
            <option value="">Seçiniz</option>
            {projectTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          {errors.projectType && (
            <p className="mt-1 flex items-center gap-1 text-sm text-red-400">
              <AlertCircle className="h-4 w-4" /> {errors.projectType}
            </p>
          )}
        </div>
      </div>

      <div>
        <label className="mb-2 block text-sm text-foreground/80">Proje Özeti *</label>
        <textarea
          rows={compact ? 4 : 5}
          value={formData.message}
          onChange={(e) => setFormData((p) => ({ ...p, message: e.target.value }))}
          className="w-full resize-none rounded-xl border border-line bg-background px-4 py-3 text-foreground outline-none focus:border-brass"
          placeholder="Ne üzerinde çalışmak istiyorsunuz?"
        />
        {errors.message && (
          <p className="mt-1 flex items-center gap-1 text-sm text-red-400">
            <AlertCircle className="h-4 w-4" /> {errors.message}
          </p>
        )}
      </div>

      <motion.button
        type="submit"
        disabled={isSubmitting}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? (
          'Gönderiliyor...'
        ) : (
          <>
            <Send className="h-4 w-4" />
            Talebi Gönder
          </>
        )}
      </motion.button>

      {status === 'success' && (
        <div className="flex items-start gap-2 rounded-xl border border-green-500/30 bg-green-500/10 p-4 text-green-300">
          <CheckCircle className="mt-0.5 h-5 w-5 shrink-0" />
          <p className="m-0 text-sm">
            Talebiniz alındı. E-posta istemciniz açıldıysa gönderimi tamamlayın; aksi halde en kısa sürede dönüş yapacağız.
          </p>
        </div>
      )}
    </form>
  )
}
