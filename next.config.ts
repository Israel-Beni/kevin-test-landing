import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  // experimental: {
  //   turbopackMemoryLimit: 4096,
  // },
  turbopack: {
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    },
  },
};

export default nextConfig;
