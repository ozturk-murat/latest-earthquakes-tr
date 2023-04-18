/** @type {import('next').NextConfig} */
const dotenv = require("dotenv");
dotenv.config();

const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    googleMapApiKey: 'AIzaSyCaY69_AUM4NLoMDwD2k-CKyNJLHirTyog',
  },
}

module.exports = nextConfig
