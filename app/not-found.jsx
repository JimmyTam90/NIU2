export default function NotFound() {
  return (
    <main className="mx-auto max-w-xl px-4 py-24 text-center">
      <h1 className="text-3xl font-bold">Page not found</h1>
      <p className="mt-3 text-ink-soft">That page does not exist.</p>
      <a href="/" className="mt-6 inline-flex min-h-[48px] items-center rounded-lg bg-brand px-6 font-semibold text-white">Back to the guide</a>
    </main>
  );
}
