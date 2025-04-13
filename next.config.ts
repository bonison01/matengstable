import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  productionBrowserSourceMaps: false,

  eslint: {
    ignoreDuringBuilds: true,
  },

  images: {
    // ✅ Enables image optimization for images from this domain
    domains: ['mdxeolqfiosscdommyhc.supabase.co'],
    
    // Use Next.js default loader (which enables optimization)
    loader: 'default',

    // Don't set `unoptimized: true` if you want optimization
  },
};

export default nextConfig;
