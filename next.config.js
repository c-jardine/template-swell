/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.schema.io', 'developers.elementor.com'],
  },
};

module.exports = nextConfig;
