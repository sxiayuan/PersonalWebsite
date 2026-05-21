import path from 'node:path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: '/PersonalWebsite',
  assetPrefix: '/PersonalWebsite/',
  turbopack: {
    root: path.resolve('.'),
  },
};

export default nextConfig;
