import AffiliateCta from "./AffiliateCta";
import ProductImage from "./ProductImage";
import { resolveProductUrl } from "@/lib/affiliate-links";
import { specRows } from "@/lib/products";

// DOM order is fixed: image, title, description and specs, CTA last. No CSS reordering.
export default function ProductCard({ product }) {
  const link = resolveProductUrl(product.key);
  return (
    <article className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-4">
      <div><ProductImage image={product.image} /></div>
      <h3 className="mt-4 text-xl font-bold text-ink">{product.name}</h3>
      <div className="mt-2 flex-1">
        <p className="text-ink-soft">{product.tagline}</p>
        <p className="mt-3 text-ink">
          <span className="text-lg font-bold">{product.price}</span>{" "}
          <span className="text-ink-mute line-through">{product.listPrice}</span>{" "}
          <span className="text-sm font-semibold text-brand">{product.save}</span>
        </p>
        <dl className="mt-3 grid grid-cols-2 gap-x-3 gap-y-2 text-sm">
          {specRows.slice(0, 5).map(([label, key]) => (
            <div key={key}>
              <dt className="text-ink-mute">{label}</dt>
              <dd className="font-medium text-ink">{product.specs[key]}</dd>
            </div>
          ))}
        </dl>
      </div>
      <div className="mt-4">
        <AffiliateCta href={link.url} label={`View ${product.name} on NIU`} productKey={product.key} location="product-card" />
      </div>
    </article>
  );
}
