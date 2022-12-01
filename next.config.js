/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["wl-lizee-production.cellar-c2.services.clever-cloud.com"],
    unoptimized: true,
  },
  distDir: "build",
};

module.exports = nextConfig;
