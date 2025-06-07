/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/katanovic',
  assetPrefix: '/katanovic',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  distDir: 'out',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
