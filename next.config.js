/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  images: {
    domains: ['www.hyperui.dev'],
}
}

module.exports = nextConfig
