/** @type {import('next').NextConfig}*/
const nextConfig = {
  swcMinify: true,
  images: {
    domains: ["images.prismic.io"],
  },
};

export default nextConfig;
