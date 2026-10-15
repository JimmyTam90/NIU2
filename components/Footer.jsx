import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/site-config";

export default function Footer() {
  return (
    <footer className="bg-ink px-4 py-10 text-sm text-slate-300">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-start md:justify-between">
        <Link href="/" aria-label="PrimeGearLab home" className="shrink-0">
          <Image src={SITE.logo.src} alt={SITE.logo.alt} width={SITE.logo.width} height={SITE.logo.height} className="h-24 w-auto" />
        </Link>
        <div className="max-w-xl md:ml-auto md:text-right">
          <nav aria-label="Legal" className="flex flex-wrap gap-x-6 gap-y-2 md:justify-end">
            <Link className="hover:text-white" href="/privacy">Privacy Policy</Link>
            <Link className="hover:text-white" href="/terms">Terms of Service</Link>
            <Link className="hover:text-white" href="/affiliate-disclosure">Affiliate Disclosure</Link>
            <Link className="hover:text-white" href="/contact">Contact</Link>
          </nav>
          <p className="mt-4">{SITE.disclosure}</p>
          <p className="mt-2">PrimeGearLab is an independent publisher, not NIU. Purchases are completed on NIU's store.</p>
          <p className="mt-2">Contact Email: <a className="underline" href={`mailto:${SITE.email}`}>{SITE.email}</a></p>
          <p className="mt-4">© 2026 PrimeGearLab. All rights reserved. Managed &amp; Operated in partnership with authorized media agency partners.</p>
        </div>
      </div>
    </footer>
  );
}
