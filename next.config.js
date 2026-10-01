/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  async redirects() {
    return [
      { source: '/projeler', destination: '/projects', permanent: true },
      { source: '/hakkimizda', destination: '/about', permanent: true },
      { source: '/hizmetler', destination: '/services', permanent: true },
      { source: '/iletisim', destination: '/contact', permanent: true },
      { source: '/calis', destination: '/contact#bizimle-calisin', permanent: true },
    ]
  },
}

module.exports = nextConfig
