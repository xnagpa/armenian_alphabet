/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  reactStrictMode: true,
  assetPrefix: isProd ? '/armenian_alphabet/' : '',

  publicRuntimeConfig: {
    assetPrefix: isProd ? '/armenian_alphabet/' : ''
  },
}

module.exports = nextConfig
