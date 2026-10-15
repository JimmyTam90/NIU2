/** @type {import('next').NextConfig} */
// STANDALONE deployment: no basePath, assetPrefix or rewrites.
const nextConfig = {
  trailingSlash: false,
  images: {
    // Product images are fetched from NIU's Shopify CDN.
    remotePatterns: [{ protocol: "https", hostname: "shop.niu.com", pathname: "/cdn/shop/**" }],
  },
};
module.exports = nextConfig;
