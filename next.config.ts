import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  async redirects() {
    return [
      {
        source: "/",
        destination: "/landing", // Change this to your target route
        permanent: false, // true for 308 permanent redirect, false for 307 temporary
      },
    ];
  },
};

export default nextConfig;
