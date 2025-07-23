/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',          // Untuk static export
    trailingSlash: true,       // Untuk Netlify agar path seperti /about/ tidak error
    images: {
      unoptimized: true        // ⬅️ Ini yang matikan image optimization
    },
    eslint: {
      ignoreDuringBuilds: true // Biar warning tidak blokir build
    }
  }
  
  module.exports = nextConfig
  