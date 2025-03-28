/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    ...nextConfig,
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'media.graphassets.com',
        },
        {
          protocol: 'https',
          hostname: 'eu-central-1-shared-euc1-02.graphassets.com',
        },
      ],
    },
  }