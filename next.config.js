/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['i.ibb.co'], // Dodajemo i.ibb.co kao dozvoljeni domen
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
        pathname: '/**',
      },
    ],
    // Optimizacija slika
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
  },
  eslint: {
    ignoreDuringBuilds: true, // Privremeno ignorišemo ESLint tokom builda
  },
  // Uključujemo optimizaciju fontova
  optimizeFonts: true,
  // Poboljšanje performansi
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  experimental: {
    // Optimizacija učitavanja
    optimizeCss: true,
    // Poboljšanje performansi renderovanja
    scrollRestoration: true,
  },
  // Optimizacija za produkciju
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  domains: ['fonts.googleapis.com', 'fonts.gstatic.com'],
}

module.exports = nextConfig 