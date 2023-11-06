/** @type {import('next').NextConfig} */
const nextConfig = {}
const withImages = require('next-images');

module.exports = {
  presets: ['next/babel'],
  plugins: ['inline-react-svg'],
  withImages
}  
