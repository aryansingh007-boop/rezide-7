/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
    ],
    unoptimized: true, // This helps with Vercel deployment
  },
  trailingSlash: true, // Helps with static deployment
  output: 'standalone', // Better for Vercel
}

module.exports = nextConfig
