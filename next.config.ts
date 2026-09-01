import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // This folder sits under /Users/Shared, where Next otherwise infers a wider
  // workspace root and warns about lockfiles it should not be tracing.
  outputFileTracingRoot: path.join(__dirname),
};

export default nextConfig;
