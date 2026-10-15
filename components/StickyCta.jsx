import AffiliateCta from "./AffiliateCta";
import { resolveProductUrl } from "@/lib/affiliate-links";
import { products } from "@/lib/products";

// Separate from every product image; the page keeps bottom padding so content is never covered.
export default function StickyCta() {
  const p = products[0];
  const link = resolveProductUrl(p.key);
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 bg-white px-4 pt-3 sm:hidden" style={{ paddingBottom: "max(12px, env(safe-area-inset-bottom))" }}>
      <AffiliateCta href={link.url} label={`Shop ${p.name} on NIU`} productKey={p.key} location="sticky" />
    </div>
  );
}
