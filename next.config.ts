import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  turbopack: {
    // Prevent root auto-detection issues when the repo has multiple lockfiles.
    root: __dirname,
  },
};

export default nextConfig;
