import Image from "next/image";
import AffiliateCta from "./AffiliateCta";
import { resolveCollectionUrl } from "@/lib/affiliate-links";

// Thumbnail on top, then title, description, CTA last.
export default function CategoryCard({ category }) {
  const link = resolveCollectionUrl(category.key);
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white">
      <div className="aspect-[4/3] w-full bg-slate-50">
        <Image src={category.image.src} alt={category.image.alt} width={600} height={450} sizes="(min-width: 768px) 33vw, 100vw" className="h-full w-full object-contain" />
      </div>
      <h3 className="px-4 pt-4 text-lg font-bold text-ink">{category.title}</h3>
      <p className="flex-1 px-4 pt-1 text-sm text-ink-soft">{category.description}</p>
      <div className="p-4">
        <AffiliateCta href={link.url} label={category.cta} productKey={category.key} location="category-card" variant="secondary" />
      </div>
    </article>
  );
}
