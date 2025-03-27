/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "randomuser.me",
      },
    ],
  },
  experimental: {
    serverActions: {
      bodySizeLimit: "5mb",
    },
  },
  reactStrictMode: true,
  webpack: (config) => {
    config.watchOptions = {
      poll: 1000, // Check for changes every second
      aggregateTimeout: 300, // Delay rebuild
    };
    return config;
  },
};

export default nextConfig;
