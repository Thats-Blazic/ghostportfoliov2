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
  },
  eslint: {
    ignoreDuringBuilds: true, // Privremeno ignorišemo ESLint tokom builda
  },
}

module.exports = nextConfig 