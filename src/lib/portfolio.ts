export type PortfolioItem = {
  title: string
  description: string
  image: string
  url?: string
  category: 'web' | 'game' | 'app'
  tags: string[]
}

export const mahalleninMakasi = {
  title: 'Mahallenin Makası',
  tagline: 'Neşeli bir mahalle berberi işletme oyunu',
  description:
    'Mahallede küçük bir berber dükkânı devralıyorsun. Saç kesiyor, sakal tıraşı yapıyor, müşterilerin derdini dinliyor ve kazandığınla dükkânı adım adım büyütüyorsun. Taksici Niyazi’den mahallenin kedisine kadar herkes bir hikâye taşıyor.',
  icon: '/images/mahallenin-makasi/icon.jpg',
  screens: [
    { src: '/images/mahallenin-makasi/menu.jpg', alt: 'Mahallenin Makası ana menü' },
    { src: '/images/mahallenin-makasi/customer.jpg', alt: 'Dükkâna gelen müşteri: Taksici Niyazi' },
    { src: '/images/mahallenin-makasi/shave.jpg', alt: 'Sakal tıraşı mini oyunu' },
    { src: '/images/mahallenin-makasi/upgrade.png', alt: 'Dükkânı geliştirme ekranı' },
    { src: '/images/mahallenin-makasi/minigame.png', alt: 'Zamanlama mini oyunu' },
    { src: '/images/mahallenin-makasi/decor.png', alt: 'Dükkân dekorasyonu' },
  ],
  features: [
    { title: 'Tıraş ve kesim', text: 'Usturayı kaydır, makası doğru zamanda kullan. Her müşteri farklı bir dokunuş ister.' },
    { title: 'Mahalle sakinleri', text: 'Her gün yeni yüzler, yeni sohbetler. Müşterinin sabrını ve gönlünü kazan.' },
    { title: 'Dükkânını kur', text: 'Koltuktan aynaya, tabeladan takım flamasına kadar dükkânı kendi zevkine göre geliştir.' },
  ],
  platforms: ['iOS', 'Android'],
}

export const games: PortfolioItem[] = [
  {
    title: 'Connections',
    description:
      'Tedarikçileri, fabrikaları ve pazarları boru hatlarıyla bağladığın endüstriyel bir bulmaca oyunu. 200’den fazla el yapımı bölüm, Steam’de yayında.',
    image: '/images/connections.jpg',
    url: 'https://store.steampowered.com/app/4824950/Connections/',
    category: 'game',
    tags: ['Steam', 'PC', 'Bulmaca'],
  },
  {
    title: 'Wizardus',
    description:
      'Büyü ve stratejiyi buluşturan, piksel sanatla hazırlanmış retro bir hayatta kalma oyunu.',
    image: '/images/wizardus1.jpg',
    category: 'game',
    tags: ['Pixel Art', 'Aksiyon'],
  },
]

export const apps: PortfolioItem[] = [
  {
    title: 'Scanny',
    description:
      'Ders notlarını tarayıp özetleyen ve bu özetlerden kişisel quizler hazırlayan yapay zekâ destekli çalışma uygulaması.',
    image: '/images/Scanny1.jpg',
    category: 'app',
    tags: ['iOS', 'OCR', 'Eğitim'],
  },
  {
    title: 'StuFinance',
    description:
      'Öğrencilerin gelir ve giderlerini kategorilere ayırarak bütçesini takip ettiği sade bir finans uygulaması.',
    image: '/images/Stu.png',
    category: 'app',
    tags: ['Mobil', 'Finans'],
  },
]

export const webPortfolio: PortfolioItem[] = [
  {
    title: 'CetLine',
    description: 'Patent ve teknoloji ticarileştirme süreçleri için kurumsal platform.',
    image: '/images/portfolio/cetline.jpg',
    url: 'https://cetline.com',
    category: 'web',
    tags: ['Platform', 'Kurumsal'],
  },
  {
    title: 'Miela',
    description: 'Moda markası için koleksiyon odaklı e-ticaret sitesi.',
    image: '/images/portfolio/miela.jpg',
    url: 'https://mielea.com.tr',
    category: 'web',
    tags: ['E-ticaret', 'Moda'],
  },
  {
    title: 'Caras Rent a Car',
    description: 'İstanbul’da araç kiralama için rezervasyon odaklı web sitesi.',
    image: '/images/portfolio/caras.jpg',
    url: 'https://carasrentacar.com',
    category: 'web',
    tags: ['Rezervasyon', 'Hizmet'],
  },
  {
    title: 'CetLis',
    description: 'Fikri mülkiyet ve ticarileştirme danışmanlığı için kurumsal site.',
    image: '/images/portfolio/cetlis.jpg',
    url: 'https://cetlis.com',
    category: 'web',
    tags: ['Danışmanlık', 'Kurumsal'],
  },
  {
    title: 'Cetrose',
    description: 'Üniversite destekli Ar-Ge kozmetik markası için e-ticaret sitesi.',
    image: '/images/portfolio/cetrose.jpg',
    url: 'https://cetrose.com',
    category: 'web',
    tags: ['E-ticaret', 'Kozmetik'],
  },
]
