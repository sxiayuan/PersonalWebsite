import path from 'node:path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/PersonalWebsite' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/PersonalWebsite/' : '',
  turbopack: {
    root: path.resolve('.'),
  },
};

export default nextConfig;
