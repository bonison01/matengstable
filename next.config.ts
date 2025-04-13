import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  productionBrowserSourceMaps: false,

  eslint: {
    ignoreDuringBuilds: true,
  },

  images: {
    // Disables Next.js image optimization completely
    loader: 'default',
    unoptimized: true,

    // You don't *need* this if unoptimized is true, but it's okay to leave in
    domains: ['mdxeolqfiosscdommyhc.supabase.co'],
  },
};

export default nextConfig;
