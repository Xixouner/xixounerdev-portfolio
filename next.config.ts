import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    formats: ["image/avif", "image/webp"],
  },
  // ISR : pages statiques regénérées toutes les 5 min si besoin
  experimental: {
    staleTimes: {
      dynamic: 30,
      static: 300,
    },
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' https://matomo.xixouner.com",
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' data: blob: https://matomo.xixouner.com",
              "font-src 'self'",
              "connect-src 'self' https://matomo.xixouner.com",
              "frame-ancestors 'none'",
              "base-uri 'self'",
              "form-action 'self'",
            ].join("; "),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
