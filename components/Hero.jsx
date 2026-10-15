import AffiliateCta from "./AffiliateCta";
import ProductImage from "./ProductImage";
import { resolveProductUrl, resolveCollectionUrl } from "@/lib/affiliate-links";
import { products } from "@/lib/products";
import { SITE } from "@/lib/site-config";

// Image first on mobile; balanced 1.05fr / 0.95fr columns on desktop.
export default function Hero() {
  const p = products[0];
  const link = resolveProductUrl(p.key);
  const all = resolveCollectionUrl("electric-scooters");
  return (
    <section className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:py-14">
      <div className="lg:order-2"><ProductImage image={p.image} priority /></div>
      <div className="lg:order-1">
        <p className="text-sm font-semibold text-brand">NIU's store: from $199, save up to $800 on scooters</p>
        <h1 className="mt-2 text-3xl font-bold leading-tight text-ink sm:text-4xl">Electric scooters and e-bikes for US commuters, compared</h1>
        <p className="mt-4 max-w-prose text-lg text-ink-soft">Featured: the {p.name} at {p.price} ({p.save.toLowerCase()} from {p.listPrice}), plus the KQi Air, KQi 100F and BQi-C3 Pro. Prices as shown on NIU when we checked.</p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <AffiliateCta href={link.url} label={`Shop ${p.name} on NIU`} productKey={p.key} location="hero" />
          <AffiliateCta href={all.url} label="Browse all scooters" productKey="electric-scooters" location="hero-secondary" variant="secondary" />
        </div>
        <p className="mt-3 text-sm text-ink-mute">{SITE.disclosure}</p>
      </div>
    </section>
  );
}
