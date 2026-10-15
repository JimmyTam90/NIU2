import { products, specRows } from "@/lib/products";

export default function CompareTable() {
  return (
    <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white">
      <table className="w-full min-w-[720px] text-left text-sm">
        <caption className="sr-only">Specifications of the featured NIU models</caption>
        <thead className="bg-ink text-white">
          <tr>
            <th scope="col" className="p-3 font-semibold">Spec</th>
            {products.map((p) => (
              <th key={p.id} scope="col" className="p-3 font-semibold">{p.name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr className="border-t border-slate-200">
            <th scope="row" className="p-3 font-medium text-ink-soft">Price on NIU</th>
            {products.map((p) => (
              <td key={p.id} className="p-3 font-semibold text-ink">{p.price}</td>
            ))}
          </tr>
          {specRows.map(([label, key]) => (
            <tr key={key} className="border-t border-slate-200">
              <th scope="row" className="p-3 font-medium text-ink-soft">{label}</th>
              {products.map((p) => (
                <td key={p.id} className="p-3 text-ink">{p.specs[key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <p className="border-t border-slate-200 p-3 text-xs text-ink-mute">Specs and prices come from each model's page on NIU's store when we checked. Confirm on NIU before buying.</p>
    </div>
  );
}
