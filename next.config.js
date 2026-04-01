/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // If your content includes images from external sources
  images: {
    domains: ['raw.githubusercontent.com'], 
  },
};

module.exports = nextConfig;
