/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "tailus.io",
      "avatars.githubusercontent.com",
      "lh3.googleusercontent.com",
    ],
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
