/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost', 'images.unsplash.com', 'picsum.photos'],
  },
  experimental: {
    serverComponentsExternalPackages: ['better-sqlite3'],
  },
}

module.exports = nextConfig
