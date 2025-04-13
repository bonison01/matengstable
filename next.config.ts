import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  productionBrowserSourceMaps: false,
  images: {
    domains: ['mdxeolqfiosscdommyhc.supabase.co'],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default {
  images: {
    loader: 'default', // Prevents Vercel's optimization
    unoptimized: true, // Disables all image optimizations globally
  },
};
