import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingRoot: import.meta.url
    ? new URL("../..", import.meta.url).pathname
    : undefined,
  reactStrictMode: true,
};

export default nextConfig;
