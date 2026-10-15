// Single source of truth for CTA destinations. URLs are used exactly as supplied; nothing is built, appended or reordered.
export const DEFAULT_AFFILIATE_URL = "https://shop.niu.com/?ref=ghtakjkm";

export const PRODUCT_DEEP_LINKS_MAPPING = {
  "kqi-300x": "https://shop.niu.com/products/niu-kqi-300x-electric-scooter?ref=ghtakjkm",
  "kqi-air": "https://shop.niu.com/products/niu-kqi-air-lightest-electric-scooter?ref=ghtakjkm",
  "kqi-100f": "https://shop.niu.com/products/niu-kqi-100f-electric-scooter?ref=ghtakjkm",
  "bqi-c3-pro": "https://shop.niu.com/products/niu-c3-pro-electric-urban-commuter-bike?ref=ghtakjkm",
};

export const COLLECTION_DEEP_LINKS_MAPPING = {
  "electric-scooters": "https://shop.niu.com/collections/electric-scooter?ref=ghtakjkm",
  "electric-bikes": "https://shop.niu.com/collections/electric-bike?ref=ghtakjkm",
  accessories: "https://shop.niu.com/collections/accessories?ref=ghtakjkm",
};

function isValidUrl(value) {
  if (typeof value !== "string") return false;
  try {
    return new URL(value).protocol === "https:";
  } catch {
    return false;
  }
}

function resolve(map, key, type) {
  const mapped = key ? map[key] : undefined;
  if (isValidUrl(mapped)) return { url: mapped, source: type, status: "MAPPING_PROVIDED" };
  if (isValidUrl(DEFAULT_AFFILIATE_URL)) return { url: DEFAULT_AFFILIATE_URL, source: "DEFAULT_FALLBACK", status: "MAPPING_PROVIDED" };
  return { url: null, source: "NONE", status: "BLOCKED_MISSING_AFFILIATE_URL" };
}

export const resolveProductUrl = (key) => resolve(PRODUCT_DEEP_LINKS_MAPPING, key, "PRODUCT_MAPPING");
export const resolveCollectionUrl = (key) => resolve(COLLECTION_DEEP_LINKS_MAPPING, key, "COLLECTION_MAPPING");
