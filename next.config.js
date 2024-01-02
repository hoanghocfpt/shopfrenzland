/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost', 'fakestoreapi.com'],
  },
  typescript: {
    ignoreBuildErrors: true,
 },
}

module.exports = nextConfig;