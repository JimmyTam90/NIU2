// Must match basePath in next.config.js.
export const BASE_PATH = "/niu";

// Prefix for files in /public (logo, favicons) and any plain <a>/<img>; next/link adds BASE_PATH on its own.
export const pub = (path = "") => `${BASE_PATH}${path}`;

export const SITE = {
  name: "PrimeGearLab",
  // CANONICAL_BASE_URL in the inputs points at the merchant's own domain, which this page does not own.
  // Canonicals use the deployed site URL from the environment instead.
  baseUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://primegearlab.com",
  email: "daniaengracia26377@gmail.com",
  logo: { src: pub("/logo-trimmed.png"), width: 640, height: 486, alt: "PrimeGearLab Independent Lab" },
  merchantOrigin: "https://shop.niu.com",
  title: "NIU Electric Scooters & E-Bikes: KQi 300X, KQi Air, KQi 100F, BQi-C3 Pro",
  description:
    "Independent guide to NIU electric scooters and the BQi-C3 Pro e-bike for US riders. Compare prices, range, speed and weight, then shop on NIU's store.",
  disclosure:
    "We may receive a commission if you make a purchase through links on this page at no extra cost to you.",
};

// Public canonical URL on the Hub: https://primegearlab.com/niu (no trailing slash) and /niu/<page>.
export const canonical = (path = "") => `${SITE.baseUrl}${BASE_PATH}${path === "/" ? "" : path}`;
