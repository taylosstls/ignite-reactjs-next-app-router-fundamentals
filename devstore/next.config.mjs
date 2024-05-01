/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github.com',
        pathname: '**',
      },
    ],
  },
  env: {
    metadataBase: 'http://localhost:3000',
  },
}

export default nextConfig
