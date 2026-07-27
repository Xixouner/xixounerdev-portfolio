import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    formats: ["image/avif", "image/webp"],
  },
  // ISR : pages statiques regénérées toutes les 5 min si besoin
  // Permet à Caddy de servir du HTML en cache sans toucher au CPU Next.js
  experimental: {
    staleTimes: {
      dynamic: 30,
      static: 300,
    },
  },
};

export default nextConfig;
