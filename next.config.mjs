import path from 'node:path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  env: {
    NEXT_PUBLIC_BASE_PATH: process.env.NODE_ENV === 'production' ? '/PersonalWebsite' : '',
  },
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/PersonalWebsite' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/PersonalWebsite/' : '',
  turbopack: {
    root: path.resolve('.'),
  },
};

export default nextConfig;
