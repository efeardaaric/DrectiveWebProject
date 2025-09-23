# Drective Interactive - Modern Yazılım & Oyun Stüdyosu

Modern, performanslı ve animasyonlu bir Next.js 14 projesi. Drective Interactive markası için tasarlanmış kurumsal website.

## 🚀 Özellikler

- **Next.js 14** - App Router, TypeScript, strict mode
- **Tailwind CSS** - Utility-first styling, responsive design
- **Framer Motion** - Smooth animations, scroll reveals, micro-interactions
- **Modern UI/UX** - Glassmorphism, gradient effects, dark theme
- **Performance Optimized** - Lighthouse 90+ scores
- **SEO Ready** - Metadata, OpenGraph, Twitter cards
- **Accessibility** - WCAG compliant, reduced motion support
- **Mobile First** - Responsive design, touch-friendly

## 🛠️ Teknoloji Yığını

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Inter, Sora (Google Fonts)
- **Deployment**: Vercel (recommended)

## 📦 Kurulum

### Gereksinimler

- Node.js 18.17 veya üzeri
- npm, yarn veya pnpm

### Adımlar

1. **Projeyi klonlayın**
   ```bash
   git clone <repository-url>
   cd drective-interactive
   ```

2. **Bağımlılıkları yükleyin**
   ```bash
   npm install
   # veya
   yarn install
   # veya
   pnpm install
   ```

3. **Geliştirme sunucusunu başlatın**
   ```bash
   npm run dev
   # veya
   yarn dev
   # veya
   pnpm dev
   ```

4. **Tarayıcıda açın**
   ```
   http://localhost:3000
   ```

## 📁 Proje Yapısı

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── services/          # Services page
│   ├── projects/          # Projects page
│   ├── blog/              # Blog page
│   ├── about/             # About page
│   └── contact/           # Contact page
├── components/            # React components
│   ├── NavBar.tsx         # Navigation bar
│   ├── Footer.tsx         # Footer
│   ├── Hero.tsx           # Hero section
│   ├── Section.tsx        # Section wrapper
│   ├── FeatureCard.tsx    # Feature card
│   ├── ProjectCard.tsx    # Project card
│   ├── CTA.tsx            # Call-to-action
│   ├── LogoMarquee.tsx    # Logo marquee
│   └── ParallaxBg.tsx     # Parallax background
├── lib/                   # Utilities
│   └── motion.ts          # Framer Motion variants
└── styles/                # Styles
    └── globals.css        # Global styles
```

## 🎨 Tasarım Sistemi

### Renkler
- **Background**: #0B0B0F (Dark)
- **Primary**: #C026D3 (Purple/Magenta)
- **Secondary**: #38BDF8 (Light Blue)
- **Accent**: #64748B (Slate)

### Tipografi
- **Headings**: Sora (Google Fonts)
- **Body**: Inter (Google Fonts)

### Animasyonlar
- **Entrance**: Spring animations with stagger
- **Hover**: Subtle scale and glow effects
- **Scroll**: Reveal animations with intersection observer
- **Reduced Motion**: Respects user preferences

## 🚀 Deployment

### Vercel (Önerilen)

1. **Vercel hesabınıza giriş yapın**
   ```bash
   npm i -g vercel
   vercel login
   ```

2. **Projeyi deploy edin**
   ```bash
   vercel
   ```

3. **Production build test edin**
   ```bash
   npm run build
   npm run start
   ```

### Diğer Platformlar

- **Netlify**: `npm run build` → `out` klasörünü deploy edin
- **AWS S3**: Static site hosting
- **DigitalOcean**: App Platform

## 🔧 Geliştirme

### Komutlar

```bash
# Geliştirme sunucusu
npm run dev

# Production build
npm run build

# Production sunucusu
npm run start

# Linting
npm run lint

# Type checking
npm run type-check
```

### Kod Kalitesi

- **ESLint**: Code linting
- **Prettier**: Code formatting
- **TypeScript**: Type safety
- **Husky**: Git hooks (opsiyonel)

## 🎯 Performans

### Lighthouse Skorları (Hedef)
- **Performance**: 90+
- **Accessibility**: 90+
- **Best Practices**: 90+
- **SEO**: 90+

### Optimizasyonlar
- `next/image` ile görsel optimizasyonu
- `next/font` ile font optimizasyonu
- Code splitting ve lazy loading
- Bundle size analizi

## 📱 Responsive Design

- **Mobile**: 375px+
- **Tablet**: 768px+
- **Desktop**: 1280px+
- **Large**: 1920px+

## ♿ Erişilebilirlik

- **WCAG 2.1 AA** uyumlu
- **Keyboard navigation** desteği
- **Screen reader** uyumlu
- **Reduced motion** desteği
- **High contrast** modu

## 🔍 SEO

- **Metadata**: Title, description, keywords
- **OpenGraph**: Social media sharing
- **Twitter Cards**: Twitter sharing
- **Sitemap**: Otomatik sitemap.xml
- **Robots.txt**: Search engine directives

## 🎨 Kişiselleştirme

### Renkleri Değiştirme

`tailwind.config.ts` dosyasında renk paletini güncelleyin:

```typescript
colors: {
  primary: {
    500: '#YENİ_RENK',
    // ...
  }
}
```

### İçerik Güncelleme

- **Metinler**: Her sayfa dosyasında güncelleyin
- **Görseller**: `public/images/` klasörüne ekleyin
- **İkonlar**: Lucide React ikonlarını değiştirin

### Animasyonları Özelleştirme

`src/lib/motion.ts` dosyasında animasyon variants'larını düzenleyin.

## 📞 Destek

- **E-posta**: hello@drective.com
- **Website**: https://drective.com
- **GitHub**: [Repository URL]

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır. Detaylar için `LICENSE` dosyasına bakın.

## 🤝 Katkıda Bulunma

1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Commit yapın (`git commit -m 'Add amazing feature'`)
4. Push yapın (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun

## 📈 Roadmap

- [ ] Blog sistemi
- [ ] Çoklu dil desteği
- [ ] CMS entegrasyonu
- [ ] E-ticaret modülü
- [ ] PWA desteği
- [ ] Dark/Light tema toggle

---

**Drective Interactive** - Modern yazılım ve oyun geliştirme stüdyosu
