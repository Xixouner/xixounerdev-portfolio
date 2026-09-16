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
  // Cibler navigateurs modernes — réduit polyfills
  compiler: {
    removeConsole: process.env.NODE_ENV === "production" ? { exclude: ["error", "warn"] } : false,
  },
  // Les anciennes URLs de pagination /blog?page=N (rendues dynamiques et
  // non-cachables) redirigent vers les nouveaux segments d'URL /blog/page/N.
  async redirects() {
    return [
      {
        source: "/blog",
        has: [{ type: "query", key: "page", value: "1" }],
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/blog",
        has: [{ type: "query", key: "page", value: "(?<page>[2-9]\\d*)" }],
        destination: "/blog/page/:page",
        permanent: true,
      },
    ];
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
