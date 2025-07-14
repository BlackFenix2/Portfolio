import { NextConfig } from "next";
const nextConfig: NextConfig = {
  compiler: {
    emotion: true,
  },
  typescript: {
    // TODO does not cause compiling or runtime issues, but it is disabled while Next.js 15 rolls out.
    ignoreBuildErrors: true,
  },
};
export default nextConfig;
