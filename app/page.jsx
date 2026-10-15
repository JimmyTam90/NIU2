import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import CompareTable from "@/components/CompareTable";
import CategoryCard from "@/components/CategoryCard";
import Faq from "@/components/Faq";
import StickyCta from "@/components/StickyCta";
import Footer from "@/components/Footer";
import AffiliateCta from "@/components/AffiliateCta";
import { products, categories } from "@/lib/products";
import { resolveProductUrl } from "@/lib/affiliate-links";

export default function Home() {
  const final = resolveProductUrl(products[0].key);
  return (
    <>
      <Header />
      <main className="pb-24 sm:pb-0">
        <Hero />

        <section id="models" aria-labelledby="models-h" className="scroll-mt-24 bg-white py-12">
          <div className="mx-auto max-w-6xl px-4">
            <h2 id="models-h" className="text-2xl font-bold text-ink sm:text-3xl">Four NIU models to compare</h2>
            <p className="mt-2 max-w-prose text-ink-soft">From a 26 lb carbon fiber scooter to a twin-battery e-bike with up to 90 miles of range.</p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
              {products.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>

        <section id="compare" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-12">
          <h2 className="text-2xl font-bold text-ink sm:text-3xl">Compare specs side by side</h2>
          <div className="mt-6"><CompareTable /></div>
        </section>

        <section id="range" className="scroll-mt-24 bg-white py-12">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-2xl font-bold text-ink sm:text-3xl">Browse the full range</h2>
            <div className="mt-6 grid gap-6 md:grid-cols-3">
              {categories.map((c) => (
                <CategoryCard key={c.key} category={c} />
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="mx-auto max-w-3xl scroll-mt-24 px-4 py-12">
          <h2 className="text-2xl font-bold text-ink sm:text-3xl">Before you buy</h2>
          <div className="mt-6"><Faq /></div>
        </section>

        <section className="bg-ink px-4 py-12 text-center text-white">
          <h2 className="text-2xl font-bold">See live pricing on NIU</h2>
          <p className="mx-auto mt-2 max-w-prose text-slate-300">NIU's store shows current price, stock and checkout.</p>
          <div className="mx-auto mt-6 max-w-xs">
            <AffiliateCta href={final.url} label={`Shop ${products[0].name} on NIU`} productKey={products[0].key} location="final" />
          </div>
        </section>
      </main>
      <Footer />
      <StickyCta />
    </>
  );
}
