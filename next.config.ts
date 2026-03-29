import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ['@heroicons/react'],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static-cdn.jtvnw.net',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'yt3.googleusercontent.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;

