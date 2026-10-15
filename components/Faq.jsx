import { faqs } from "@/lib/products";

export default function Faq() {
  return (
    <div className="divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white">
      {faqs.map(([q, a]) => (
        <details key={q} className="group p-4">
          <summary className="flex min-h-[44px] items-center justify-between gap-4 font-semibold text-ink">
            {q}
            <span aria-hidden="true" className="text-brand group-open:rotate-45">+</span>
          </summary>
          <p className="mt-2 text-ink-soft">{a}</p>
        </details>
      ))}
    </div>
  );
}
