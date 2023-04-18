/** @type {import('next').NextConfig} */
const dotenv = require("dotenv");
dotenv.config();

const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    googleMapApiKey: 'AIzaSyCRqcLoOQnRgPdnHa-Ov3z9zJDHrT1HMMM',
  },
}

module.exports = nextConfig
