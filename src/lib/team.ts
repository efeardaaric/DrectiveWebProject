export type TeamMember = {
  name: string
  role: string
  image: string
  skills: string[]
}

export const team: TeamMember[] = [
  { name: 'Efe Arda Arıç', role: 'Kurucu · Proje Yöneticisi', image: '/images/Arda.jpg', skills: ['Swift', 'Python', 'TypeScript'] },
  { name: 'Yusuf Güneş', role: 'Kurucu · Oyun Tasarımcısı', image: '/images/Yusuf.jpg', skills: ['Unity', 'C#', 'C++'] },
  { name: 'Haris Bedirhan Büyükbayrak', role: 'Kurucu · Sanat Yönetmeni', image: '/images/Haris.jpg', skills: ['Unity', '3D', 'Game Design'] },
  { name: 'Muhammed Yasir Polat', role: 'Oyun Geliştirici', image: '/images/Yasir.jpg', skills: ['Unity', 'C#', 'SQL'] },
  { name: 'Mehmet Efe Gürmarmara', role: 'Yazılım Geliştirici', image: '/images/Marmara.jpg', skills: ['Python', 'Figma', 'R'] },
  { name: 'Berkan Cenan Demirer', role: 'Yazılım Geliştirici', image: '/images/cenan.png', skills: ['Unity', 'C++', 'UE5'] },
  { name: 'Göksu Çakmak', role: '2D Sanatçı', image: '/images/göksu.jpeg', skills: ['Photoshop', 'Clip Studio'] },
  { name: 'Sevgi Zeynep Duran', role: 'Piksel Sanatçı', image: '/images/sevgi.jpeg', skills: ['Aseprite', 'Spine 2D'] },
]
