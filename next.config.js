/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['https://meal-workouts-prod.s3.amazonaws.com'],
    formats: ['image/avif', 'image/webp']
  }
};

module.exports = nextConfig
