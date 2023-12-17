/** @type {import('next').NextConfig} */
const nextConfig = {}
const withImages = require('next-images');

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '1h3.googleusercontent.com',
        port: '',
      },
    ],
  },
  presets: ['next/babel'],
  plugins: ['inline-react-svg'],
  withImages
}  
