/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost', 'fakestoreapi.com','storage.googleapis.com'],
  },
  typescript: {
    ignoreBuildErrors: true,
 },
}

module.exports = nextConfig;