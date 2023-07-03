/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["tailus.io"],
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
