import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/thenew",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
