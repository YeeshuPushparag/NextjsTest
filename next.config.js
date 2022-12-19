/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: "/nextjs-dentist",
  assetPrefix: "/nextjs-dentist"
}

module.exports = nextConfig
