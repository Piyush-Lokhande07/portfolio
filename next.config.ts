import type { NextConfig } from "next";

const nextConfig: NextConfig = {

  reactCompiler: true,
  devIndicators: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "opengraph.githubassets.com",
      },
    ],
  },
};

export default nextConfig;
