import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
  webpack: (config) => {
    config.ignoreWarnings = [
      { module: /node_modules\/@sanity/ },
      { message: /export 'Activity' \(imported as 'Activity'\) was not found in 'react'/ }
    ];
    return config;
  },
};

export default nextConfig;
