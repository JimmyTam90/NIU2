import { canonical } from "@/lib/site-config";

export default function sitemap() {
  return ["/", "/privacy", "/terms", "/affiliate-disclosure", "/contact"].map((p) => ({ url: canonical(p) }));
}
