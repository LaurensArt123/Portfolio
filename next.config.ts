import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['cdn.sanity.io'],
    dangerouslyAllowSVG: true,
},
};

export default nextConfig;
