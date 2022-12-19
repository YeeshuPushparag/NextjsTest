/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  images: {
    unoptimized: true,
    path: "/nextjs-dentist"
  },
  basePath: "/nextjs-dentist",
  assetPrefix: "/nextjs-dentist"
}

module.exports = nextConfig
