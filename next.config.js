/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.schema.io', 'developers.elementor.com'],
  },
  redirects: [
    {
      source: '/products',
      destination: '/products?page=1',
      permanent: true,
    },
    {
      source: `/products/search/*`,
      destination: '/products/search/*?page=1',
      permanent: true,
    },
  ],
};

module.exports = nextConfig;
