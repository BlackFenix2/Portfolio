/** @type {import('next').NextConfig}*/
const nextConfig = {
  swcMinify: true,
  images: {
    domains: ["images.prismic.io", "next-portfolio2.cdn.prismic.io"],
  },
};

export default nextConfig;
