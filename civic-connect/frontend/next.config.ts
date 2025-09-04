import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // ❌ WARNING: This disables ESLint checks during production builds
    // Use only if you want to deploy quickly and fix linting later
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
