// HUB-SPOKE: primegearlab.com/niu is proxied to this Spoke. Next.js itself serves everything under /niu, so
// pages, /niu/_next/static/* (CSS + JS), /niu/_next/image and the public files (/niu/logo.png, /niu/favicon.ico)
// all share the prefix that the Hub forwards. Do NOT also create app/niu/: basePath already prefixes the routes.
// assetPrefix is intentionally not set: with basePath it already defaults to '/niu'.

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/niu",
  trailingSlash: false,
  images: {
    // Remote product images load straight from NIU's CDN; local files get the prefix via pub() in lib/site-config.js.
    unoptimized: true,
    remotePatterns: [{ protocol: "https", hostname: "shop.niu.com", pathname: "/cdn/shop/**" }],
  },
  async redirects() {
    // Opening the Spoke's own root (e.g. niu-2.vercel.app) goes to the app instead of a 404.
    return [{ source: "/", destination: "/niu", basePath: false, permanent: false }];
  },
};
module.exports = nextConfig;
