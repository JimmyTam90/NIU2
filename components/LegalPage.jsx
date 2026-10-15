import Header from "./Header";
import Footer from "./Footer";

export default function LegalPage({ title, children }) {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-3xl px-4 py-10">
        <h1 className="text-3xl font-bold text-ink">{title}</h1>
        <div className="mt-6 space-y-4 text-ink-soft">{children}</div>
      </main>
      <Footer />
    </>
  );
}
