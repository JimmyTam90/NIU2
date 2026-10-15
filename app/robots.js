import { canonical } from "@/lib/site-config";

export default function robots() {
  return { rules: { userAgent: "*", allow: "/" }, sitemap: canonical("/sitemap.xml") };
}
